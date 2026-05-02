// =========================================================
// QUIZ ENGINE
// Reusable quiz logic. Avoid editing this file when adding questions.
// =========================================================

class QuizEngine {
  constructor(questionBank, levelOrder) {
    this.questionBank = questionBank;
    this.levelOrder = levelOrder;
    this.activeQuestions = [...questionBank];
    this.lastSubmitted = false;
    // Track progress toàn bộ question bank, không phụ thuộc filter/topic hiện tại.
    // Format:
    // {
    //   question_id: {
    //     selected: number,
    //     submitted: boolean,
    //     isCorrect: boolean
    //   }
    // }
    this.storageKey = "data_analytics_quiz_answer_state_v1";
    this.answerState = this.loadAnswerState();
    this.quizEl = document.getElementById("quiz");
    this.summaryEl = document.getElementById("summary");
    this.totalCountEl = document.getElementById("totalCount");
    this.answeredCountEl = document.getElementById("answeredCount");
    this.unansweredCountEl = document.getElementById("unansweredCount");
    this.correctCountEl = document.getElementById("correctCount");
    this.wrongCountEl = document.getElementById("wrongCount");

    this.visibleCountEl = document.getElementById("visibleCount"); // giữ lại để không lỗi nếu HTML cũ còn dùng
    this.scoreTextEl = document.getElementById("scoreText");
    this.scoreCommentEl = document.getElementById("scoreComment");
    this.scoreBreakdownEl = document.getElementById("scoreBreakdown");

    this.libraryFilterEl = document.getElementById("libraryFilter");
    this.levelFilterEl = document.getElementById("levelFilter");
    this.topicFilterEl = document.getElementById("topicFilter");
    this.limitInputEl = document.getElementById("limitInput");
    this.randomModeEl = document.getElementById("randomMode");
  }

  init() {
    this.initFilters();
    this.bindEvents();
    this.applyFilters();
  }

  isSubmitted(q) {
    return this.answerState[q.id] && this.answerState[q.id].submitted === true;
  }

  bindEvents() {
    this.libraryFilterEl.addEventListener("change", () => this.applyFilters());
    this.levelFilterEl.addEventListener("change", () => this.applyFilters());
    this.topicFilterEl.addEventListener("change", () => this.applyFilters());
    this.limitInputEl.addEventListener("change", () => this.applyFilters());

    document.getElementById("btnUnanswered").addEventListener("click", () => this.scrollToUnanswered());

    const btnWrongPractice = document.getElementById("btnWrongPractice");
    if (btnWrongPractice) {
      btnWrongPractice.addEventListener("click", () => this.practiceWrongQuestions());
    }

    const btnResetAll = document.getElementById("btnResetAll");
    if (btnResetAll) {
      btnResetAll.addEventListener("click", () => this.resetAllProgress());
    }

    document.getElementById("btnRandom").addEventListener("click", () => this.randomPractice());
    document.getElementById("btnSubmit").addEventListener("click", () => this.submitQuiz());

    // Import / Export / Clear progress buttons (added in index.html)
    const btnExport = document.getElementById('btnExport');
    const btnImport = document.getElementById('btnImport');
    const btnClear = document.getElementById('btnClearProgress');
    const importFile = document.getElementById('importFile');

    if (btnExport) btnExport.addEventListener('click', () => this.exportProgress());
    if (btnImport && importFile) btnImport.addEventListener('click', () => importFile.click());
    if (importFile) importFile.addEventListener('change', (e) => this.handleImportFile(e));
    if (btnClear) btnClear.addEventListener('click', () => { if (confirm('Xóa tiến trình? Hành động này không thể hoàn tác.')) this.clearProgress(); });
  }

  loadAnswerState() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return {};

      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (e) {
      console.warn("Cannot load quiz progress from localStorage:", e);
      return {};
    }
  }

  saveAnswerState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.answerState));
    } catch (e) {
      console.warn("Cannot save quiz progress to localStorage:", e);
    }
  }

  exportProgress() {
    try {
      const payload = JSON.stringify({ answerState: this.answerState, timestamp: Date.now() }, null, 2);
      const blob = new Blob([payload], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `quiz-progress-${new Date().toISOString().slice(0,10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.warn('Export failed', e);
      alert('Export thất bại');
    }
  }

  handleImportFile(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target.result);
        const incoming = parsed && parsed.answerState ? parsed.answerState : parsed;
        if (!incoming || typeof incoming !== 'object') throw new Error('Invalid file format');

        // Validate keys against questionBank
        const valid = {};
        Object.keys(incoming).forEach(k => {
          if (this.questionBank.find(q => q.id === k)) valid[k] = incoming[k];
        });

        this.answerState = valid;
        this.saveAnswerState();
        this.applyFilters();
        alert('Import tiến trình thành công');
      } catch (err) {
        alert('Import thất bại: ' + err.message);
      }
    };
    reader.readAsText(f);
    // reset input to allow re-importing same file
    e.target.value = '';
  }

  clearProgress() {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (e) {
      console.warn('Could not clear progress', e);
    }
    this.answerState = {};
    this.applyFilters();
  }

  escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  uniqueSorted(values) {
    return [...new Set(values)].sort((a, b) => String(a).localeCompare(String(b)));
  }

  fillSelect(selectEl, values, defaultLabel) {
    selectEl.innerHTML =
      `<option value="all">${defaultLabel}</option>` +
      values.map(v => `<option value="${this.escapeHtml(v)}">${this.escapeHtml(v)}</option>`).join("");
  }

  initFilters() {
    this.fillSelect(
      this.libraryFilterEl,
      this.uniqueSorted(this.questionBank.map(q => q.library)),
      "Tất cả library"
    );

    this.fillSelect(this.levelFilterEl, this.levelOrder, "Tất cả level");
    this.refreshTopicFilter();
  }

  refreshTopicFilter() {
    const selectedLibrary = this.libraryFilterEl.value;
    const selectedLevel = this.levelFilterEl.value;
    const currentTopic = this.topicFilterEl.value;

    let pool = this.questionBank;
    if (selectedLibrary !== "all") pool = pool.filter(q => q.library === selectedLibrary);
    if (selectedLevel !== "all") pool = pool.filter(q => q.level === selectedLevel);

    const topics = this.uniqueSorted(pool.map(q => q.topic));
    this.fillSelect(this.topicFilterEl, topics, "Tất cả topic");

    if (topics.includes(currentTopic)) {
      this.topicFilterEl.value = currentTopic;
    }
  }

  getFilteredPool() {
    const selectedLibrary = this.libraryFilterEl.value;
    const selectedLevel = this.levelFilterEl.value;
    const selectedTopic = this.topicFilterEl.value;

    let pool = [...this.questionBank];

    if (selectedLibrary !== "all") pool = pool.filter(q => q.library === selectedLibrary);
    if (selectedLevel !== "all") pool = pool.filter(q => q.level === selectedLevel);
    if (selectedTopic !== "all") pool = pool.filter(q => q.topic === selectedTopic);

    // Exclude questions that were already submitted (đã nộp bài)
    pool = pool.filter(q => !this.isSubmitted(q));

    return pool;
  }

  applyFilters() {
    this.refreshTopicFilter();
    const limit = Math.max(1, Number(this.limitInputEl.value || this.questionBank.length));
    this.activeQuestions = this.getFilteredPool().slice(0, limit);
    this.renderQuiz();
  }

  randomPractice() {
    const limit = Math.max(1, Number(this.limitInputEl.value || 30));
    const mode = this.randomModeEl ? this.randomModeEl.value : "filtered";

    let pool;

    if (mode === "mix-all") {
      pool = [...this.questionBank];
    } else if (mode === "mix-current-library") {
      pool = this.getPoolForCurrentLibraryAndLevel();
    } else {
      pool = this.getFilteredPool();
    }

    // Always exclude already-submitted questions from random picks
    pool = pool.filter(q => !this.isSubmitted(q));
    this.activeQuestions = this.pickBalancedRandom(pool, Math.min(limit, pool.length), mode);
    this.renderQuiz();
  }

  getPoolForCurrentLibraryAndLevel() {
    const selectedLibrary = this.libraryFilterEl.value;
    const selectedLevel = this.levelFilterEl.value;

    let pool = [...this.questionBank];

    if (selectedLibrary !== "all") pool = pool.filter(q => q.library === selectedLibrary);
    if (selectedLevel !== "all") pool = pool.filter(q => q.level === selectedLevel);

    return pool;
  }

  pickBalancedRandom(pool, limit, mode = "filtered") {
    if (limit <= 0 || pool.length === 0) return [];

    if (mode === "filtered") {
      return this.shuffle(pool).slice(0, limit);
    }

    const groupMap = new Map();

    pool.forEach(q => {
      const key = mode === "mix-all"
        ? [q.library, q.level, q.topic].join(" | ")
        : [q.level, q.topic].join(" | ");

      if (!groupMap.has(key)) groupMap.set(key, []);
      groupMap.get(key).push(q);
    });

    let groups = this.shuffle([...groupMap.values()].map(group => this.shuffle(group)));
    const picked = [];

    while (picked.length < limit && groups.length > 0) {
      const nextGroups = [];

      groups.forEach(group => {
        if (picked.length >= limit) return;

        const item = group.shift();
        if (item) picked.push(item);

        if (group.length > 0) nextGroups.push(group);
      });

      groups = this.shuffle(nextGroups);
    }

    return picked;
  }

  shuffle(arr) {
    const copy = [...arr];

    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }

  levelClass(level) {
    return `level-${String(level).toLowerCase()}`;
  }

  renderQuiz() {
    if (this.visibleCountEl) this.visibleCountEl.textContent = this.activeQuestions.length;

    this.lastSubmitted = false;
    this.summaryEl.style.display = "none";

    this.updateGlobalStats();

    if (this.activeQuestions.length === 0) {
      this.quizEl.innerHTML = `
      <article class="question-card">
        <h3>Không có câu hỏi phù hợp bộ lọc hiện tại.</h3>
        <p>Hãy chọn lại library, level hoặc topic.</p>
      </article>
    `;
      return;
    }

    this.quizEl.innerHTML = this.activeQuestions.map((item, qIndex) => {
      const saved = this.answerState[item.id];

      const codeBlock = item.code
        ? `<pre><code>${this.escapeHtml(item.code)}</code></pre>`
        : "";

      const optionsHtml = item.options.map((option, optIndex) => {
        const checked = saved && saved.selected === optIndex ? "checked" : "";

        return `
        <label class="option" id="q${qIndex}_opt${optIndex}">
          <input type="radio" name="q${qIndex}" value="${optIndex}" ${checked} />
          <span><strong>${String.fromCharCode(65 + optIndex)}.</strong> ${this.escapeHtml(option)}</span>
        </label>
      `;
      }).join("");

      return `
      <article class="question-card" id="question-${qIndex}">
        <div class="question-header">
          <h3 class="question-title">Câu ${qIndex + 1}. ${this.escapeHtml(item.question)}</h3>
          <div class="tags">
            <span class="tag">${this.escapeHtml(item.library)}</span>
            <span class="tag ${this.levelClass(item.level)}">${this.escapeHtml(item.level)}</span>
            <span class="tag">${this.escapeHtml(item.topic)}</span>
          </div>
        </div>
        ${codeBlock}
        <div class="options">${optionsHtml}</div>
        <div class="result-box" id="result-${qIndex}"></div>
      </article>
    `;
    }).join("");

    this.quizEl.querySelectorAll("input[type='radio']").forEach(input => {
      // Allow un-tick behaviour: capture previous checked state on mousedown
      input.addEventListener('mousedown', (ev) => {
        input.dataset.wasChecked = input.checked ? 'true' : 'false';
      });

      input.addEventListener('click', (ev) => {
        const was = input.dataset.wasChecked === 'true';
        const qIndex = Number(input.name.replace("q", ""));
        const item = this.activeQuestions[qIndex];

        if (was) {
          // user clicked the already-checked radio -> uncheck it
          input.checked = false;
          if (this.answerState[item.id]) {
            delete this.answerState[item.id].selected;
            this.answerState[item.id].submitted = false;
            this.answerState[item.id].isCorrect = false;
            // if object empty, leave as empty object for future tracking
          }
          this.saveAnswerState();
          this.updateStatsAfterSelection();
          return;
        }

        // normal selection flow
        input.addEventListener('change', () => {});
      });

      input.addEventListener("change", () => {
        const qIndex = Number(input.name.replace("q", ""));
        const item = this.activeQuestions[qIndex];

        this.answerState[item.id] = {
          ...(this.answerState[item.id] || {}),
          selected: Number(input.value),
          submitted: false,
          isCorrect: false
        };
        this.saveAnswerState();
        this.updateGlobalStats();
      });
    });
  }

  getSelected(qIndex) {
    const item = this.activeQuestions[qIndex];

    if (!item) return null;

    if (this.answerState[item.id] && this.answerState[item.id].selected !== undefined) {
      return this.answerState[item.id].selected;
    }

    const selected = document.querySelector(`input[name="q${qIndex}"]:checked`);
    return selected ? Number(selected.value) : null;
  }

  updateGlobalStats() {
    const total = this.questionBank.length;

    const answered = this.questionBank.filter(q => {
      return this.answerState[q.id] && this.answerState[q.id].selected !== undefined;
    }).length;

    const correct = this.questionBank.filter(q => {
      return this.answerState[q.id] && this.answerState[q.id].submitted === true && this.answerState[q.id].isCorrect === true;
    }).length;

    const wrong = this.questionBank.filter(q => {
      return this.answerState[q.id] && this.answerState[q.id].submitted === true && this.answerState[q.id].isCorrect === false;
    }).length;

    const unanswered = total - answered;

    if (this.totalCountEl) this.totalCountEl.textContent = total;
    if (this.answeredCountEl) this.answeredCountEl.textContent = answered;
    if (this.unansweredCountEl) this.unansweredCountEl.textContent = unanswered;
    if (this.correctCountEl) this.correctCountEl.textContent = correct;
    if (this.wrongCountEl) this.wrongCountEl.textContent = wrong;
  }

  updateStatsAfterSelection() {
    const total = this.activeQuestions.length;
    let answered = 0;

    this.activeQuestions.forEach((_, i) => {
      if (this.getSelected(i) !== null) answered += 1;
    });

    const unanswered = total - answered;

    if (this.totalCountEl) this.totalCountEl.textContent = total;
    if (this.answeredCountEl) this.answeredCountEl.textContent = answered;
    if (this.unansweredCountEl) this.unansweredCountEl.textContent = unanswered;

    if (!this.lastSubmitted) {
      if (this.correctCountEl) this.correctCountEl.textContent = 0;
      if (this.wrongCountEl) this.wrongCountEl.textContent = 0;
    }
  }

  updateStatsAfterSubmit(score) {
    const total = this.activeQuestions.length;
    const wrong = total - score;

    if (this.totalCountEl) this.totalCountEl.textContent = total;
    if (this.answeredCountEl) this.answeredCountEl.textContent = this.countAnswered();
    if (this.unansweredCountEl) this.unansweredCountEl.textContent = total - this.countAnswered();
    if (this.correctCountEl) this.correctCountEl.textContent = score;
    if (this.wrongCountEl) this.wrongCountEl.textContent = wrong;
  }

  countAnswered() {
    let count = 0;

    this.activeQuestions.forEach((_, i) => {
      if (this.getSelected(i) !== null) count += 1;
    });

    return count;
  }
  updateAnsweredCount() {
    this.updateGlobalStats();
  }

  submitQuiz() {
    if (this.activeQuestions.length === 0) return;

    this.lastSubmitted = true;
    let score = 0;
    const breakdown = {};

    this.activeQuestions.forEach((item, qIndex) => {
      if (!breakdown[item.level]) breakdown[item.level] = { correct: 0, total: 0 };
      breakdown[item.level].total += 1;

      const selected = this.getSelected(qIndex);
      const correct = item.answer;
      const resultEl = document.getElementById(`result-${qIndex}`);

      item.options.forEach((_, optIndex) => {
        const label = document.getElementById(`q${qIndex}_opt${optIndex}`);
        label.classList.remove("correct-option", "wrong-option-selected");

        if (optIndex === correct) label.classList.add("correct-option");

        if (selected === optIndex && selected !== correct) {
          label.classList.add("wrong-option-selected");
        }
      });
      this.saveAnswerState();
      const isCorrect = selected === correct;

      this.answerState[item.id] = {
        ...(this.answerState[item.id] || {}),
        selected: selected,
        submitted: true,
        isCorrect: isCorrect
      };
      this.saveAnswerState();
      if (isCorrect) {
        score += 1;
        breakdown[item.level].correct += 1;
      }

      const selectedText =
        selected === null
          ? "Bạn chưa chọn đáp án."
          : `Bạn chọn ${String.fromCharCode(65 + selected)}.`;

      resultEl.style.display = "block";
      resultEl.className = `result-box ${isCorrect ? "result-correct" : "result-wrong"}`;
      resultEl.innerHTML = `
        <div class="answer-line ${isCorrect ? "correct" : "wrong"}">
          ${isCorrect ? "Đúng" : "Chưa đúng"} — Đáp án đúng:
          ${String.fromCharCode(65 + correct)}. ${this.escapeHtml(item.options[correct])}
        </div>
        <div class="explanation">
          <strong>${selectedText}</strong><br />
          ${this.escapeHtml(item.explanation)}
        </div>
      `;
    });
    this.updateStatsAfterSubmit(score);
    this.updateGlobalStats();
    const pct = Math.round((score / this.activeQuestions.length) * 100);

    this.scoreTextEl.textContent = `${score}/${this.activeQuestions.length} câu đúng (${pct}%)`;
    this.scoreCommentEl.textContent = this.getScoreComment(pct);

    this.scoreBreakdownEl.innerHTML = Object.entries(breakdown).map(([level, stat]) => {
      const levelPct = Math.round((stat.correct / stat.total) * 100);

      return `
        <div class="stat">
          <strong>${level}: ${stat.correct}/${stat.total}</strong>
          <span>${levelPct}% đúng</span>
        </div>
      `;
    }).join("");

    this.summaryEl.style.display = "block";
    // After submit, exclude submitted questions from the current active pool
    this.applyFilters();
    // ensure summary remains visible after re-render
    this.summaryEl.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  getScoreComment(pct) {
    if (pct >= 90) {
      return "Rất tốt. Nếu bạn đang luyện Advanced/Expert mà vẫn đạt mức này, pandas của bạn đã khá mạnh cho project thực tế.";
    }

    if (pct >= 75) {
      return "Tốt. Bạn nắm được đa số ý chính, nên review kỹ các câu sai vì thường nằm ở logic dữ liệu hoặc edge case.";
    }

    if (pct >= 60) {
      return "Ổn nhưng còn lỗ hổng. Nên luyện lại groupby, merge, datetime, rolling và grain dữ liệu.";
    }

    return "Bạn nên quay lại Foundation/Intermediate trước khi luyện Advanced/Expert.";
  }

  resetQuiz() {
    document.querySelectorAll("input[type='radio']").forEach(input => {
      input.checked = false;
    });

    document.querySelectorAll(".result-box").forEach(box => {
      box.style.display = "none";
      box.innerHTML = "";
    });

    document.querySelectorAll(".option").forEach(label => {
      label.classList.remove("correct-option", "wrong-option-selected");
    });

    this.lastSubmitted = false;
    this.summaryEl.style.display = "none";

    if (this.totalCountEl) this.totalCountEl.textContent = this.activeQuestions.length;
    if (this.answeredCountEl) this.answeredCountEl.textContent = 0;
    if (this.unansweredCountEl) this.unansweredCountEl.textContent = this.activeQuestions.length;
    if (this.correctCountEl) this.correctCountEl.textContent = 0;
    if (this.wrongCountEl) this.wrongCountEl.textContent = 0;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  practiceWrongQuestions() {
    const wrongQuestions = this.questionBank.filter(q => {
      return (
        this.answerState[q.id] &&
        this.answerState[q.id].submitted === true &&
        this.answerState[q.id].isCorrect === false
      );
    });

    if (wrongQuestions.length === 0) {
      alert("Hiện chưa có câu sai nào để làm lại.");
      return;
    }

    this.activeQuestions = this.shuffle(wrongQuestions);

    // Reset trạng thái selected/submitted của riêng các câu sai để làm lại sạch.
    this.activeQuestions.forEach(q => {
      delete this.answerState[q.id];
    });
    this.saveAnswerState();
    this.renderQuiz();
    this.updateGlobalStats();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  resetAllProgress() {
    const ok = confirm("Bạn chắc chắn muốn reset toàn bộ tiến độ, đáp án đúng/sai và câu đã làm?");
    if (!ok) return;

    this.answerState = {};
    localStorage.removeItem(this.storageKey);

    this.lastSubmitted = false;
    this.summaryEl.style.display = "none";

    this.applyFilters();
    this.updateGlobalStats();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  scrollToUnanswered() {
    for (let i = 0; i < this.activeQuestions.length; i++) {
      if (this.getSelected(i) === null) {
        document.getElementById(`question-${i}`).scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        return;
      }
    }

    alert("Bạn đã chọn đủ câu hiện tại. Có thể nộp bài để xem kết quả.");
  }
}