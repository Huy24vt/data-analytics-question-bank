// =========================================================
// APP ENTRY POINT
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const quiz = new QuizEngine(QUESTION_BANK, LEVEL_ORDER);
  quiz.init();

  // Expose for debugging in browser console if needed.
  window.quiz = quiz;
});

// ---------------------------------------------------------
// Activity / Attendance tracker
// - Auto mark daily presence and maintain streak
// - Track total active time (only when page is visible/focused)
// Stored in localStorage under key 'user_activity_v1'
// ---------------------------------------------------------
(function () {
  const STORAGE_KEY = 'user_activity_v1';

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }

  function save(obj) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch (e) { }
  }

  function todayISO() {
    const d = new Date();
    return d.toISOString().slice(0,10);
  }

  function yesterdayISO() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0,10);
  }

  function formatSecondsToHhMm(sec) {
    const mins = Math.floor(sec / 60);
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return `${hours}h${minutes}m`;
  }

  const state = load();
  if (!state.totalActiveSeconds) state.totalActiveSeconds = 0;
  if (!state.streak) state.streak = 0;
  if (!state.lastSeen) state.lastSeen = null;

  let sessionStart = null;

  function renderStats() {
    const sEl = document.getElementById('streakCount');
    const tEl = document.getElementById('totalActiveTime');
    if (sEl) sEl.textContent = state.streak || 0;
    if (tEl) tEl.textContent = formatSecondsToHhMm(state.totalActiveSeconds || 0);
  }

  function markSeenIfNeeded() {
    const today = todayISO();
    if (state.lastSeen === today) return; // already marked today

    // If lastSeen is yesterday, increase streak; else reset to 1
    if (state.lastSeen === yesterdayISO()) {
      state.streak = (state.streak || 0) + 1;
    } else {
      state.streak = 1;
    }

    state.lastSeen = today;
    save(state);
    renderStats();
  }

  function startSessionTimer() {
    if (sessionStart) return;
    sessionStart = Date.now();
    // mark attendance on first active
    markSeenIfNeeded();
  }

  function stopSessionTimer() {
    if (!sessionStart) return;
    const elapsed = Math.floor((Date.now() - sessionStart) / 1000);
    state.totalActiveSeconds = (state.totalActiveSeconds || 0) + elapsed;
    sessionStart = null;
    save(state);
    renderStats();
  }

  // Visibility/focus handlers
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') startSessionTimer();
    else stopSessionTimer();
  });

  window.addEventListener('focus', startSessionTimer);
  window.addEventListener('blur', stopSessionTimer);

  // before unload, stop timer and persist
  window.addEventListener('beforeunload', () => {
    stopSessionTimer();
  });

  // initial render
  renderStats();
  // start if visible
  if (document.visibilityState === 'visible') startSessionTimer();
  // expose for debugging
  window.__userActivity = { state, startSessionTimer, stopSessionTimer };
})();
