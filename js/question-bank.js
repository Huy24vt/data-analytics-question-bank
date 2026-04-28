// =========================================================
// CENTRAL QUESTION BANK
// This file combines all library-specific question files.
// When adding a new data file, import it in index.html first,
// then spread its constant here.
// =========================================================

// Build QUESTION_BANK defensively so a missing/erroneous data file
// doesn't throw a ReferenceError and stop the app from loading.
const _QUESTION_PARTS = [
  'PANDAS_QUESTIONS',
  'NUMPY_QUESTIONS',
  'MATPLOTLIB_QUESTIONS',
  'SEABORN_QUESTIONS',
  'PLOTLY_QUESTIONS',
  'DATA_QUALITY_QUESTIONS',
  'STATISTICS_QUESTIONS',
  'AB_TESTING_QUESTIONS',
  'PYTHON_CORE_QUESTIONS',
  'PYTHON_OOP_QUESTIONS',
  'PYTHON_INTERMEDIATE_QUESTIONS',
  'SKLEARN_QUESTIONS',
  'MODEL_EVALUATION_QUESTIONS',
  'TIME_SERIES_QUESTIONS',
  'POLARS_QUESTIONS',
  'DUCKDB_QUESTIONS',
  'PYARROW_PARQUET_QUESTIONS',
  'SQL_PYTHON_QUESTIONS',
  'API_WEB_DATA_QUESTIONS',
  'PYTEST_QUESTIONS',
  'AUTOMATION_QUESTIONS',
  'STREAMLIT_QUESTIONS',
  'PROJECT_STRUCTURE_QUESTIONS'
];

const QUESTION_BANK = (function () {
  const acc = [];

  _QUESTION_PARTS.forEach(name => {
    try {
      let part = undefined;

      if (typeof globalThis !== 'undefined' && name in globalThis) part = globalThis[name];
      else if (typeof window !== 'undefined' && name in window) part = window[name];

      if (!Array.isArray(part)) {
        // fallback to eval in try/catch in case environments differ
        try { part = eval(name); } catch (e) { part = undefined; }
      }

      if (Array.isArray(part)) acc.push(...part);
    } catch (e) {
      // ignore missing or malformed part - continue with others
    }
  });

  return acc;
})();

const LEVEL_ORDER = ["Foundation", "Intermediate", "Advanced", "Expert"];
