// =========================================================
// APP ENTRY POINT
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const quiz = new QuizEngine(QUESTION_BANK, LEVEL_ORDER);
  quiz.init();

  // Expose for debugging in browser console if needed.
  window.quiz = quiz;
});
