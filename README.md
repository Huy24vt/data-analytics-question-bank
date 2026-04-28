# Data Analytics Question Bank

Modular quiz app cho nhiều library/chủ đề học Data Analytics.

## Cách chạy local

Mở trực tiếp `index.html` bằng Chrome.

Nếu browser chặn local JS trong một số môi trường, chạy local server:

```bash
python -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000
```

## Cấu trúc thư mục

```text
QUIZDATA/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── quiz-engine.js
│   └── question-bank.js
└── data/
    ├── pandas.js
    └── numpy.js
```

## Cách thêm library mới

Ví dụ muốn thêm SQL:

1. Tạo file `data/sql.js`

```js
const SQL_QUESTIONS = [
  {
    id: "sql_f_001",
    library: "SQL",
    level: "Foundation",
    topic: "SELECT",
    question: "SELECT dùng để làm gì?",
    code: "SELECT * FROM orders;",
    options: [
      "Truy vấn dữ liệu",
      "Xóa bảng",
      "Tạo database",
      "Đổi mật khẩu"
    ],
    answer: 0,
    explanation: "SELECT dùng để truy vấn dữ liệu từ bảng."
  }
];
```

2. Import trong `index.html`, trước `js/question-bank.js`

```html
<script src="data/sql.js"></script>
```

3. Thêm vào `js/question-bank.js`

```js
const QUESTION_BANK = [
  ...PANDAS_QUESTIONS,
  ...NUMPY_QUESTIONS,
  ...SQL_QUESTIONS
];
```

## Schema câu hỏi

```js
{
  id: "pd_f_001",
  library: "Pandas",
  level: "Foundation",
  topic: "DataFrame Basics",
  question: "Câu hỏi?",
  code: "optional code block",
  options: ["A", "B", "C", "D"],
  answer: 1,
  explanation: "Giải thích chi tiết."
}
```

## Level gợi ý

- Foundation: syntax và khái niệm cơ bản
- Intermediate: thao tác DA thường dùng
- Advanced: groupby nâng cao, merge validation, rolling, performance
- Expert: grain dữ liệu, leakage, pipeline validation, metric logic
