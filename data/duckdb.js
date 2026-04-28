const DUCKDB_QUESTIONS = [
  {
    id: "duckdb_f_001",
    library: "DuckDB",
    level: "Foundation",
    topic: "DuckDB Overview",
    question: "DuckDB phù hợp nhất với kiểu tác vụ nào trong Data Analytics?",
    code: "",
    options: [
      "Chạy SQL analytics local trên dữ liệu dạng bảng như CSV, Parquet hoặc DataFrame",
      "Huấn luyện deep learning model trên GPU",
      "Thiết kế giao diện website frontend",
      "Thay thế hoàn toàn mọi hệ thống data warehouse trong mọi trường hợp"
    ],
    answer: 0,
    explanation: "DuckDB là analytical SQL engine chạy local/in-process, rất phù hợp để query dữ liệu dạng bảng như CSV, Parquet hoặc DataFrame. Nó không phải framework deep learning hay công cụ frontend, và cũng không nên xem là thay thế tuyệt đối cho mọi data warehouse."
  },
  {
    id: "duckdb_f_002",
    library: "DuckDB",
    level: "Foundation",
    topic: "In-process Analytical Database",
    question: "DuckDB là in-process database nghĩa là gì?",
    code: "",
    options: [
      "DuckDB chạy trong cùng process với ứng dụng, không cần server database riêng",
      "DuckDB bắt buộc phải chạy trên cloud server",
      "DuckDB chỉ chạy được qua trình duyệt",
      "DuckDB không thể dùng trong Python"
    ],
    answer: 0,
    explanation: "In-process nghĩa là DuckDB được nhúng trực tiếp vào ứng dụng hoặc script Python, không cần quản lý một database server client-server riêng."
  },
  {
    id: "duckdb_f_003",
    library: "DuckDB",
    level: "Foundation",
    topic: "DuckDB vs SQLite",
    question: "So với SQLite, DuckDB thường được tối ưu mạnh hơn cho loại workload nào?",
    code: "",
    options: [
      "Analytical queries trên dữ liệu dạng cột và aggregation lớn",
      "Ghi từng giao dịch nhỏ liên tục trong ứng dụng mobile",
      "Thiết kế API backend",
      "Render giao diện người dùng"
    ],
    answer: 0,
    explanation: "DuckDB được thiết kế cho analytical processing như scan, filter, join, aggregation trên dữ liệu bảng. SQLite thường phổ biến hơn cho transactional embedded database."
  },
  {
    id: "duckdb_f_004",
    library: "DuckDB",
    level: "Foundation",
    topic: "DuckDB vs pandas",
    question: "Điểm mạnh thực tế của DuckDB so với pandas trong một số workflow là gì?",
    code: "",
    options: [
      "Có thể dùng SQL để query trực tiếp CSV/Parquet/DataFrame mà không nhất thiết load thủ công mọi thứ vào pandas trước",
      "Luôn nhanh hơn pandas trong mọi trường hợp",
      "Chỉ xử lý được dữ liệu text",
      "Không hỗ trợ join"
    ],
    answer: 0,
    explanation: "DuckDB rất tiện cho SQL analytics trên file và DataFrame. Tuy nhiên không nên khẳng định DuckDB luôn nhanh hơn pandas trong mọi tình huống vì còn phụ thuộc dữ liệu và workflow."
  },
  {
    id: "duckdb_f_005",
    library: "DuckDB",
    level: "Foundation",
    topic: "Python Integration",
    question: "Cách import DuckDB phổ biến trong Python là gì?",
    code: "",
    options: [
      "import duckdb",
      "import duckdb as pd",
      "from pandas import duckdb",
      "import sql.duckdb"
    ],
    answer: 0,
    explanation: "DuckDB thường được import trực tiếp bằng import duckdb. Sau đó có thể dùng duckdb.sql(), duckdb.connect() hoặc connection.execute()."
  },
  {
    id: "duckdb_f_006",
    library: "DuckDB",
    level: "Foundation",
    topic: "Connection",
    question: "duckdb.connect() thường dùng để làm gì?",
    code: "",
    options: [
      "Tạo kết nối DuckDB để chạy query",
      "Đọc file Excel trực tiếp thành pandas",
      "Huấn luyện model machine learning",
      "Tạo biểu đồ"
    ],
    answer: 0,
    explanation: "duckdb.connect() tạo connection object. Có thể dùng connection này để execute SQL, tạo table, đọc file hoặc lưu database."
  },
  {
    id: "duckdb_f_007",
    library: "DuckDB",
    level: "Foundation",
    topic: "In-memory Database",
    question: "Khi tạo DuckDB connection không chỉ định file database, dữ liệu thường được lưu ở đâu?",
    code: "import duckdb\ncon = duckdb.connect()",
    options: [
      "Trong memory của session hiện tại",
      "Tự động lưu vào cloud",
      "Tự động ghi vào file Excel",
      "Tự động tạo PostgreSQL server"
    ],
    answer: 0,
    explanation: "duckdb.connect() không truyền path thường tạo in-memory database. Dữ liệu sẽ không còn sau khi session/kết nối kết thúc nếu không lưu ra file."
  },
  {
    id: "duckdb_f_008",
    library: "DuckDB",
    level: "Foundation",
    topic: "Persistent Database File",
    question: "Cách nào tạo hoặc mở một DuckDB database file persistent?",
    code: "",
    options: [
      "duckdb.connect(\"analytics.duckdb\")",
      "duckdb.memory(\"analytics.duckdb\")",
      "duckdb.open_csv(\"analytics.duckdb\")",
      "duckdb.DataFrame(\"analytics.duckdb\")"
    ],
    answer: 0,
    explanation: "Truyền path file vào duckdb.connect(...) sẽ tạo hoặc mở database file, giúp table/view persistent qua nhiều session."
  },
  {
    id: "duckdb_f_009",
    library: "DuckDB",
    level: "Foundation",
    topic: "SQL Query Basics",
    question: "Câu SQL nào chọn tất cả cột từ bảng sales?",
    code: "",
    options: [
      "SELECT * FROM sales",
      "GET * FROM sales",
      "READ sales ALL",
      "SHOW ALL sales"
    ],
    answer: 0,
    explanation: "SELECT * FROM sales là cú pháp SQL cơ bản để lấy tất cả cột từ bảng sales."
  },
  {
    id: "duckdb_f_010",
    library: "DuckDB",
    level: "Foundation",
    topic: "SELECT / WHERE",
    question: "WHERE trong SQL dùng để làm gì?",
    code: "",
    options: [
      "Lọc các dòng thỏa điều kiện",
      "Tạo cột mới bắt buộc",
      "Sắp xếp kết quả",
      "Đổi tên database"
    ],
    answer: 0,
    explanation: "WHERE dùng để lọc dòng, ví dụ WHERE amount > 100 chỉ giữ các dòng có amount lớn hơn 100."
  },
  {
    id: "duckdb_f_011",
    library: "DuckDB",
    level: "Foundation",
    topic: "GROUP BY / Aggregation",
    question: "GROUP BY thường dùng khi nào?",
    code: "",
    options: [
      "Khi cần tính aggregation theo từng nhóm",
      "Khi cần xóa database",
      "Khi cần đổi kiểu dữ liệu Python",
      "Khi cần import thư viện"
    ],
    answer: 0,
    explanation: "GROUP BY gom các dòng theo key rồi tính aggregate như SUM, COUNT, AVG cho từng nhóm."
  },
  {
    id: "duckdb_f_012",
    library: "DuckDB",
    level: "Foundation",
    topic: "ORDER BY / LIMIT",
    question: "LIMIT 10 trong SQL có ý nghĩa gì?",
    code: "",
    options: [
      "Chỉ lấy tối đa 10 dòng kết quả",
      "Chỉ lấy 10 cột đầu tiên",
      "Tạo 10 bản copy của bảng",
      "Chỉ query dữ liệu trong 10 giây"
    ],
    answer: 0,
    explanation: "LIMIT giới hạn số dòng trả về. LIMIT 10 thường dùng để xem nhanh sample kết quả."
  },
  {
    id: "duckdb_f_013",
    library: "DuckDB",
    level: "Foundation",
    topic: "Query CSV Directly",
    question: "DuckDB có thể query CSV trực tiếp bằng SQL không?",
    code: "",
    options: [
      "Có, có thể query trực tiếp file CSV bằng các hàm đọc CSV như read_csv_auto",
      "Không, bắt buộc phải import vào PostgreSQL trước",
      "Không, DuckDB chỉ đọc được JSON",
      "Không, DuckDB không hỗ trợ SQL"
    ],
    answer: 0,
    explanation: "Một điểm mạnh của DuckDB là có thể query trực tiếp CSV/Parquet bằng SQL mà không nhất thiết tạo table trước."
  },
  {
    id: "duckdb_f_014",
    library: "DuckDB",
    level: "Foundation",
    topic: "read_csv_auto",
    question: "read_csv_auto trong DuckDB thường dùng để làm gì?",
    code: "",
    options: [
      "Đọc CSV và tự suy luận schema cơ bản",
      "Ghi DataFrame ra Excel",
      "Tạo model dự báo",
      "Xóa file CSV"
    ],
    answer: 0,
    explanation: "read_csv_auto giúp đọc CSV và tự detect delimiter, header, kiểu dữ liệu ở mức tiện dụng cho nhiều workflow phân tích."
  },
  {
    id: "duckdb_f_015",
    library: "DuckDB",
    level: "Foundation",
    topic: "read_parquet",
    question: "read_parquet trong DuckDB thường dùng để làm gì?",
    code: "",
    options: [
      "Đọc hoặc query file Parquet",
      "Đọc file ảnh",
      "Tạo HTTP server",
      "Huấn luyện classifier"
    ],
    answer: 0,
    explanation: "read_parquet dùng để đọc/query file Parquet, format rất phổ biến trong analytics vì lưu dạng cột và thường hiệu quả cho query."
  },
  {
    id: "duckdb_i_001",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Python Integration",
    question: "Đoạn code nào chạy SQL trong DuckDB và trả kết quả dạng pandas DataFrame?",
    code: "import duckdb",
    options: [
      "duckdb.sql(\"SELECT 1 AS x\").df()",
      "duckdb.run(\"SELECT 1 AS x\").to_list()",
      "duckdb.query_df(\"SELECT 1 AS x\")",
      "duckdb.select(\"SELECT 1 AS x\").pandas()"
    ],
    answer: 0,
    explanation: "duckdb.sql(\"SELECT 1 AS x\").df() chạy query và chuyển kết quả sang pandas DataFrame."
  },
  {
    id: "duckdb_i_002",
    library: "DuckDB",
    level: "Intermediate",
    topic: "fetchdf",
    question: "fetchdf() thường trả kết quả query ở dạng nào?",
    code: "import duckdb\ncon = duckdb.connect()\nresult = con.execute(\"SELECT 1 AS x\").fetchdf()",
    options: [
      "pandas DataFrame",
      "Python string",
      "DuckDB database file",
      "Matplotlib chart"
    ],
    answer: 0,
    explanation: "fetchdf() trả kết quả query thành pandas DataFrame, tiện cho phân tích tiếp bằng pandas hoặc hiển thị trong notebook."
  },
  {
    id: "duckdb_i_003",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Query pandas DataFrame",
    question: "DuckDB có thể query pandas DataFrame đã tồn tại trong Python session như thế nào?",
    code: "import pandas as pd\nimport duckdb\ndf = pd.DataFrame({\"amount\": [10, 20]})",
    options: [
      "duckdb.sql(\"SELECT SUM(amount) AS total FROM df\").df()",
      "duckdb.sql(\"SELECT SUM(amount) AS total FROM pandas.df\").df()",
      "df.sql(\"SELECT SUM(amount) AS total\")",
      "duckdb.from_csv(df)"
    ],
    answer: 0,
    explanation: "DuckDB Python có thể tham chiếu DataFrame trong scope Python bằng tên biến như df trong SQL string."
  },
  {
    id: "duckdb_i_004",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Register DataFrame",
    question: "register() trong DuckDB Python thường dùng để làm gì?",
    code: "",
    options: [
      "Đăng ký một Python object như pandas DataFrame để query bằng tên trong DuckDB",
      "Tạo user account trong DuckDB Cloud",
      "Đổi kiểu dữ liệu của cột",
      "Xóa bảng khỏi database"
    ],
    answer: 0,
    explanation: "con.register(\"table_name\", df) cho phép DuckDB query DataFrame hoặc object tương thích bằng tên table_name."
  },
  {
    id: "duckdb_i_005",
    library: "DuckDB",
    level: "Intermediate",
    topic: "DuckDB table vs pandas DataFrame",
    question: "Khác biệt đúng giữa DuckDB table và pandas DataFrame là gì?",
    code: "",
    options: [
      "DuckDB table nằm trong DuckDB database, còn pandas DataFrame là object trong Python memory",
      "pandas DataFrame luôn nằm trong DuckDB database",
      "DuckDB table chỉ chứa một cột",
      "Hai khái niệm này luôn giống nhau"
    ],
    answer: 0,
    explanation: "DuckDB table được quản lý bởi DuckDB connection/database. pandas DataFrame là object Python có thể được DuckDB query hoặc import khi cần."
  },
  {
    id: "duckdb_i_006",
    library: "DuckDB",
    level: "Intermediate",
    topic: "SELECT / WHERE",
    question: "Câu SQL nào lọc các dòng có amount lớn hơn 100?",
    code: "",
    options: [
      "SELECT * FROM sales WHERE amount > 100",
      "SELECT * FROM sales HAVING amount > 100 WITHOUT GROUP",
      "FILTER sales BY amount > 100",
      "SELECT amount > 100 FROM sales DELETE FALSE"
    ],
    answer: 0,
    explanation: "WHERE là mệnh đề lọc dòng trước aggregation. SELECT * FROM sales WHERE amount > 100 là cú pháp đúng."
  },
  {
    id: "duckdb_i_007",
    library: "DuckDB",
    level: "Intermediate",
    topic: "GROUP BY / Aggregation",
    question: "Câu SQL nào tính tổng amount theo category?",
    code: "",
    options: [
      "SELECT category, SUM(amount) AS total_amount FROM sales GROUP BY category",
      "SELECT category, amount FROM sales GROUP BY amount",
      "GROUP sales BY category SUM amount",
      "SELECT SUM(category) FROM sales"
    ],
    answer: 0,
    explanation: "Khi select category cùng aggregate SUM(amount), cần GROUP BY category để tính tổng theo từng nhóm."
  },
  {
    id: "duckdb_i_008",
    library: "DuckDB",
    level: "Intermediate",
    topic: "ORDER BY / LIMIT",
    question: "Câu SQL nào lấy 5 dòng có amount cao nhất?",
    code: "",
    options: [
      "SELECT * FROM sales ORDER BY amount DESC LIMIT 5",
      "SELECT * FROM sales ORDER BY amount ASC LIMIT 5",
      "SELECT TOP LOWEST 5 FROM sales",
      "SELECT * FROM sales LIMIT BY amount 5"
    ],
    answer: 0,
    explanation: "ORDER BY amount DESC sắp xếp amount giảm dần, LIMIT 5 lấy 5 dòng đầu sau khi sắp xếp."
  },
  {
    id: "duckdb_i_009",
    library: "DuckDB",
    level: "Intermediate",
    topic: "JOIN",
    question: "INNER JOIN giữ lại những dòng nào?",
    code: "",
    options: [
      "Những dòng có key khớp ở cả hai bảng",
      "Tất cả dòng bảng trái dù không khớp",
      "Chỉ dòng không khớp ở bảng trái",
      "Tất cả dòng của cả hai bảng không cần điều kiện"
    ],
    answer: 0,
    explanation: "INNER JOIN chỉ giữ những record có key matching ở cả hai bảng."
  },
  {
    id: "duckdb_i_010",
    library: "DuckDB",
    level: "Intermediate",
    topic: "JOIN",
    question: "LEFT JOIN giữ lại những dòng nào?",
    code: "",
    options: [
      "Tất cả dòng từ bảng trái và dữ liệu bảng phải nếu key khớp",
      "Chỉ các dòng khớp ở cả hai bảng",
      "Chỉ các dòng của bảng phải",
      "Chỉ các dòng bị duplicate"
    ],
    answer: 0,
    explanation: "LEFT JOIN giữ toàn bộ dòng từ bảng bên trái. Nếu không có dòng khớp ở bảng phải, các cột phía phải sẽ là NULL."
  },
  {
    id: "duckdb_i_011",
    library: "DuckDB",
    level: "Intermediate",
    topic: "CTE",
    question: "CTE với WITH thường dùng để làm gì?",
    code: "",
    options: [
      "Tạo truy vấn trung gian giúp SQL dễ đọc và tái sử dụng trong query",
      "Tạo database server mới",
      "Xóa dữ liệu khỏi bảng gốc",
      "Chỉ định file path cho Python"
    ],
    answer: 0,
    explanation: "CTE dùng WITH name AS (...) để đặt tên cho một subquery, giúp tách logic phức tạp thành các bước rõ ràng."
  },
  {
    id: "duckdb_i_012",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Window Functions",
    question: "Window function khác GROUP BY ở điểm nào?",
    code: "",
    options: [
      "Window function tính toán theo nhóm nhưng vẫn có thể giữ số dòng gốc",
      "Window function luôn xóa hết cột",
      "GROUP BY luôn giữ nguyên số dòng gốc",
      "Window function chỉ dùng để đọc CSV"
    ],
    answer: 0,
    explanation: "GROUP BY thường giảm số dòng thành cấp group. Window function như SUM(amount) OVER (PARTITION BY category) có thể trả kết quả trên từng dòng."
  },
  {
    id: "duckdb_i_013",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Window Functions",
    question: "Câu SQL nào tính row number trong từng user_id theo date?",
    code: "",
    options: [
      "ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY date)",
      "ROW_NUMBER(user_id ORDER date)",
      "COUNT_ROW() GROUP user_id ORDER date",
      "RANK BY user_id DATE"
    ],
    answer: 0,
    explanation: "ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY date) đánh số thứ tự các dòng trong từng user_id theo date."
  },
  {
    id: "duckdb_i_014",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Date Functions",
    question: "Hàm/date expression nào thường dùng để lấy phần tháng từ cột date trong SQL DuckDB?",
    code: "",
    options: [
      "EXTRACT(MONTH FROM date)",
      "MONTH_PART(date, 'name')",
      "GET_MONTH_NAME_ONLY(date)",
      "date.month.python()"
    ],
    answer: 0,
    explanation: "EXTRACT(MONTH FROM date) là pattern SQL phổ biến để lấy tháng từ cột date/timestamp."
  },
  {
    id: "duckdb_i_015",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Query CSV Directly",
    question: "Câu SQL nào query trực tiếp file CSV bằng read_csv_auto?",
    code: "",
    options: [
      "SELECT * FROM read_csv_auto('data.csv')",
      "SELECT * FROM data.csv",
      "READ CSV data.csv SELECT *",
      "SELECT read_csv_auto FROM 'data.csv'"
    ],
    answer: 0,
    explanation: "DuckDB cho phép dùng read_csv_auto('data.csv') như một table function trong FROM."
  },
  {
    id: "duckdb_i_016",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Query Parquet Directly",
    question: "Câu SQL nào query trực tiếp file Parquet?",
    code: "",
    options: [
      "SELECT * FROM read_parquet('data.parquet')",
      "SELECT * FROM parquet.open('data.parquet')",
      "READ PARQUET data.parquet",
      "SELECT parquet FROM 'data.parquet'"
    ],
    answer: 0,
    explanation: "read_parquet('data.parquet') có thể được dùng trong FROM để query trực tiếp file Parquet."
  },
  {
    id: "duckdb_i_017",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Multiple Files / Glob Pattern",
    question: "Glob pattern như 'data/*.parquet' trong DuckDB thường dùng để làm gì?",
    code: "",
    options: [
      "Query nhiều file Parquet cùng schema trong một thư mục",
      "Tạo một file Parquet mới",
      "Xóa toàn bộ file trong thư mục",
      "Đổi tên tất cả cột"
    ],
    answer: 0,
    explanation: "Glob pattern giúp query nhiều file cùng lúc, rất hữu ích cho file-based analytics với nhiều partition hoặc nhiều ngày dữ liệu."
  },
  {
    id: "duckdb_i_018",
    library: "DuckDB",
    level: "Intermediate",
    topic: "CREATE TABLE AS",
    question: "CREATE TABLE sales_summary AS SELECT ... thường dùng để làm gì?",
    code: "",
    options: [
      "Tạo bảng mới từ kết quả của một truy vấn",
      "Xóa bảng sales_summary",
      "Chỉ tạo alias tạm thời trong SELECT",
      "Tạo Python DataFrame"
    ],
    answer: 0,
    explanation: "CREATE TABLE AS SELECT materialize kết quả truy vấn thành một bảng mới trong DuckDB database."
  },
  {
    id: "duckdb_i_019",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Write Parquet",
    question: "Câu SQL nào thường dùng để ghi kết quả query ra file Parquet?",
    code: "",
    options: [
      "COPY (SELECT * FROM sales) TO 'sales.parquet' (FORMAT PARQUET)",
      "SAVE SELECT * FROM sales AS 'sales.parquet'",
      "WRITE PARQUET sales FROM SELECT *",
      "EXPORT sales FORMAT CSV ONLY"
    ],
    answer: 0,
    explanation: "COPY (SELECT ...) TO 'file.parquet' (FORMAT PARQUET) là pattern phổ biến để export kết quả ra Parquet."
  },
  {
    id: "duckdb_i_020",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Temporary Table",
    question: "Temporary table thường có đặc điểm gì?",
    code: "",
    options: [
      "Chỉ tồn tại trong session/connection hiện tại",
      "Luôn được lưu vĩnh viễn vào cloud",
      "Không thể query bằng SQL",
      "Chỉ chứa một dòng"
    ],
    answer: 0,
    explanation: "Temporary table thường dùng cho dữ liệu trung gian trong session. Khi session/kết nối kết thúc, temporary table không còn."
  },
  {
    id: "duckdb_i_021",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Views",
    question: "View trong SQL thường là gì?",
    code: "",
    options: [
      "Một truy vấn được lưu tên để query lại như table logic",
      "Một bản copy vật lý bắt buộc của toàn bộ dữ liệu",
      "Một file ảnh của bảng",
      "Một Python list"
    ],
    answer: 0,
    explanation: "View lưu định nghĩa truy vấn, giúp tái sử dụng logic SQL. View thường không materialize dữ liệu như table vật lý."
  },
  {
    id: "duckdb_i_022",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Casting",
    question: "CAST(amount AS DOUBLE) trong SQL dùng để làm gì?",
    code: "",
    options: [
      "Chuyển amount sang kiểu số thực DOUBLE",
      "Sắp xếp amount giảm dần",
      "Tính tổng amount",
      "Đổi tên cột amount thành DOUBLE"
    ],
    answer: 0,
    explanation: "CAST dùng để chuyển kiểu dữ liệu. CAST(amount AS DOUBLE) chuyển giá trị amount sang kiểu DOUBLE nếu có thể."
  },
  {
    id: "duckdb_i_023",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Null Handling",
    question: "COALESCE(value, 0) trong SQL thường dùng để làm gì?",
    code: "",
    options: [
      "Trả về value nếu không NULL, ngược lại trả về 0",
      "Chỉ giữ các dòng NULL",
      "Xóa cột value",
      "Tính trung bình value"
    ],
    answer: 0,
    explanation: "COALESCE trả về giá trị đầu tiên không NULL trong danh sách. COALESCE(value, 0) thường dùng để thay NULL bằng 0."
  },
  {
    id: "duckdb_i_024",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Common SQL Errors",
    question: "Lỗi SQL phổ biến nào xảy ra khi SELECT category, SUM(amount) nhưng không GROUP BY category?",
    code: "",
    options: [
      "Không thể select cột không aggregate cùng aggregate nếu không group phù hợp",
      "SUM không dùng được với số",
      "category bắt buộc là kiểu boolean",
      "DuckDB không hỗ trợ GROUP BY"
    ],
    answer: 0,
    explanation: "Khi dùng aggregate, các cột không aggregate trong SELECT thường phải xuất hiện trong GROUP BY để xác định cấp độ kết quả."
  },
  {
    id: "duckdb_i_025",
    library: "DuckDB",
    level: "Intermediate",
    topic: "Best Practice for Data Analyst",
    question: "Workflow nào phù hợp khi dùng DuckDB để phân tích dữ liệu file-based?",
    code: "",
    options: [
      "Query trực tiếp CSV/Parquet, filter/select sớm, materialize kết quả cần thiết ra table hoặc Parquet",
      "Luôn convert mọi thứ thành Excel trước",
      "Chỉ dùng Python loop để đọc từng dòng",
      "Không bao giờ dùng SQL aggregation"
    ],
    answer: 0,
    explanation: "DuckDB phù hợp cho local analytics trên file. Nên tận dụng SQL để filter/select/aggregate và chỉ materialize kết quả cần dùng."
  },
  {
    id: "duckdb_a_001",
    library: "DuckDB",
    level: "Advanced",
    topic: "Relation API Basics",
    question: "Relation API trong DuckDB Python thường cho phép làm gì?",
    code: "",
    options: [
      "Xây và chain các thao tác query theo object relation thay vì chỉ viết SQL string",
      "Tạo deep learning model",
      "Tự động upload dữ liệu lên cloud",
      "Thay thế hoàn toàn SQL engine"
    ],
    answer: 0,
    explanation: "Relation API cho phép thao tác kiểu object/chaining với relation, ví dụ filter, project, aggregate, sau đó lấy kết quả khi cần."
  },
  {
    id: "duckdb_a_002",
    library: "DuckDB",
    level: "Advanced",
    topic: "Predicate Pushdown Awareness",
    question: "Predicate pushdown khi query Parquet nghĩa là gì?",
    code: "",
    options: [
      "Đẩy điều kiện lọc xuống gần bước đọc file để giảm dữ liệu cần scan khi có thể",
      "Đẩy ORDER BY lên đầu query",
      "Chuyển mọi NULL thành 0",
      "Ghi kết quả ra CSV tự động"
    ],
    answer: 0,
    explanation: "Predicate pushdown giúp engine dùng điều kiện WHERE sớm hơn, có thể giảm lượng dữ liệu đọc/xử lý, đặc biệt với format hỗ trợ metadata như Parquet."
  },
  {
    id: "duckdb_a_003",
    library: "DuckDB",
    level: "Advanced",
    topic: "Projection Pushdown Awareness",
    question: "Projection pushdown giúp tối ưu điều gì?",
    code: "",
    options: [
      "Chỉ đọc hoặc xử lý các cột cần thiết cho query",
      "Chỉ giữ lại các dòng duplicate",
      "Tự động tạo index cho mọi cột",
      "Tự động chuyển CSV thành dashboard"
    ],
    answer: 0,
    explanation: "Projection pushdown giúp tránh đọc/xử lý các cột không cần dùng, rất hữu ích khi file có nhiều cột nhưng query chỉ cần một số cột."
  },
  {
    id: "duckdb_a_004",
    library: "DuckDB",
    level: "Advanced",
    topic: "Columnar Execution Awareness",
    question: "Columnar execution thường có lợi thế gì cho analytics query?",
    code: "",
    options: [
      "Hiệu quả khi scan một số cột và tính aggregation trên nhiều dòng",
      "Luôn nhanh nhất cho mọi giao dịch ghi từng dòng",
      "Không thể dùng với Parquet",
      "Chỉ dùng cho dữ liệu ảnh"
    ],
    answer: 0,
    explanation: "Analytics query thường đọc một số cột trên nhiều dòng. Columnar execution và columnar storage như Parquet giúp các tác vụ này hiệu quả hơn."
  },
  {
    id: "duckdb_a_005",
    library: "DuckDB",
    level: "Advanced",
    topic: "Performance Basics",
    question: "Phát biểu nào đúng về hiệu năng của DuckDB?",
    code: "",
    options: [
      "DuckDB có nhiều tối ưu cho analytics, nhưng hiệu năng vẫn phụ thuộc dữ liệu, query, file format và cách dùng",
      "DuckDB luôn nhanh hơn mọi database trong mọi trường hợp",
      "DuckDB không hỗ trợ query song song",
      "DuckDB chỉ nhanh khi dữ liệu có đúng 1 dòng"
    ],
    answer: 0,
    explanation: "DuckDB thường mạnh cho analytical workload nhờ vectorized/columnar execution và tối ưu query, nhưng không nên khẳng định tuyệt đối cho mọi trường hợp."
  },
  {
    id: "duckdb_a_006",
    library: "DuckDB",
    level: "Advanced",
    topic: "File-based Analytics",
    question: "Vì sao DuckDB phù hợp với file-based analytics trên Parquet?",
    code: "",
    options: [
      "Có thể query trực tiếp file Parquet, tận dụng columnar format và một số tối ưu như pushdown",
      "Parquet bắt buộc phải convert sang Excel trước",
      "DuckDB chỉ đọc được dữ liệu trong database server",
      "DuckDB không hỗ trợ SQL trên file"
    ],
    answer: 0,
    explanation: "DuckDB có thể query Parquet trực tiếp bằng SQL, phù hợp để phân tích dữ liệu lưu dạng file mà không cần dựng server database riêng."
  },
  {
    id: "duckdb_a_007",
    library: "DuckDB",
    level: "Advanced",
    topic: "Schema Inference",
    question: "Rủi ro nào có thể xảy ra khi dựa hoàn toàn vào schema inference khi đọc CSV?",
    code: "",
    options: [
      "Kiểu dữ liệu có thể bị suy luận chưa đúng nếu sample không đại diện hoặc dữ liệu không nhất quán",
      "DuckDB sẽ không đọc được bất kỳ CSV nào",
      "Tất cả cột luôn thành kiểu đúng tuyệt đối",
      "Schema inference chỉ dùng cho Parquet"
    ],
    answer: 0,
    explanation: "CSV không lưu schema rõ như Parquet. Auto inference tiện lợi nhưng cần kiểm tra lại dtype, nhất là cột date, id, amount hoặc dữ liệu lẫn kiểu."
  },
  {
    id: "duckdb_a_008",
    library: "DuckDB",
    level: "Advanced",
    topic: "Data Types",
    question: "Vì sao cần kiểm tra data type sau khi đọc dữ liệu vào DuckDB?",
    code: "",
    options: [
      "Vì kiểu dữ liệu ảnh hưởng đến tính toán, join, filter và kết quả aggregation",
      "Vì DuckDB không có kiểu dữ liệu",
      "Vì mọi cột bắt buộc phải là VARCHAR",
      "Vì kiểm tra dtype sẽ tự động sửa mọi lỗi logic"
    ],
    answer: 0,
    explanation: "Nếu date bị đọc thành string hoặc amount bị đọc sai kiểu, query có thể sai hoặc cần cast trước khi phân tích."
  },
  {
    id: "duckdb_a_009",
    library: "DuckDB",
    level: "Advanced",
    topic: "Common Python Integration Errors",
    question: "Khi DuckDB query pandas DataFrame theo tên biến, lỗi nào thường gặp?",
    code: "",
    options: [
      "Tên DataFrame không tồn tại trong scope hiện tại hoặc chưa được register",
      "DuckDB không bao giờ query được pandas DataFrame",
      "pandas DataFrame bắt buộc phải có index datetime",
      "DuckDB chỉ query DataFrame có đúng một cột"
    ],
    answer: 0,
    explanation: "DuckDB Python có thể resolve DataFrame trong scope, nhưng nếu tên không tồn tại, sai scope hoặc chưa register với connection phù hợp thì query sẽ lỗi."
  },
  {
    id: "duckdb_a_010",
    library: "DuckDB",
    level: "Advanced",
    topic: "Persistent Database File",
    question: "Khi nào nên cân nhắc dùng persistent DuckDB database file thay vì in-memory connection?",
    code: "",
    options: [
      "Khi muốn giữ table/view qua nhiều session hoặc chia sẻ một file database local",
      "Khi chỉ cần chạy một query tạm thời duy nhất và không cần lưu gì",
      "Khi không muốn dùng SQL",
      "Khi muốn DuckDB tự động chạy như web server"
    ],
    answer: 0,
    explanation: "Persistent database file hữu ích khi cần lưu table, view hoặc kết quả trung gian để dùng lại sau khi đóng session."
  },
  {
    id: "duckdb_a_011",
    library: "DuckDB",
    level: "Advanced",
    topic: "Temporary Table",
    question: "Temporary table phù hợp nhất trong tình huống nào?",
    code: "",
    options: [
      "Lưu kết quả trung gian chỉ cần trong session hiện tại",
      "Lưu dữ liệu vĩnh viễn cho nhiều tháng",
      "Thay thế mọi file Parquet",
      "Tạo user permission trên cloud"
    ],
    answer: 0,
    explanation: "Temporary table phù hợp cho bước trung gian trong một script hoặc notebook, không cần tồn tại lâu dài."
  },
  {
    id: "duckdb_a_012",
    library: "DuckDB",
    level: "Advanced",
    topic: "Views",
    question: "Khi nào view hữu ích hơn việc copy dữ liệu thành table mới?",
    code: "",
    options: [
      "Khi muốn tái sử dụng logic query mà không cần materialize dữ liệu ngay",
      "Khi muốn nhân đôi toàn bộ dữ liệu bắt buộc",
      "Khi muốn xóa query gốc",
      "Khi dữ liệu không có schema"
    ],
    answer: 0,
    explanation: "View lưu logic truy vấn, giúp code SQL rõ ràng và tái sử dụng mà không tạo thêm bản copy vật lý của dữ liệu."
  },
  {
    id: "duckdb_a_013",
    library: "DuckDB",
    level: "Advanced",
    topic: "INSERT / COPY Basics",
    question: "COPY khác INSERT ở điểm nào trong workflow dữ liệu cơ bản?",
    code: "",
    options: [
      "COPY thường dùng để import/export dữ liệu hàng loạt giữa table/query và file, còn INSERT thêm dòng vào table",
      "COPY chỉ dùng để đổi tên cột",
      "INSERT chỉ dùng để export Parquet",
      "COPY không liên quan đến file"
    ],
    answer: 0,
    explanation: "INSERT thường thêm record vào table. COPY thường tiện cho bulk load/export dữ liệu từ hoặc ra CSV/Parquet."
  },
  {
    id: "duckdb_a_014",
    library: "DuckDB",
    level: "Advanced",
    topic: "Local Analytics Workflow",
    question: "Trong local analytics, DuckDB thường đóng vai trò gì tốt nhất?",
    code: "",
    options: [
      "Một SQL engine local để query, join, aggregate file và DataFrame nhanh gọn trong notebook/script",
      "Một hệ thống orchestration thay thế Airflow",
      "Một BI dashboard frontend",
      "Một hệ thống deep learning distributed"
    ],
    answer: 0,
    explanation: "DuckDB rất phù hợp làm analytical SQL engine trong workflow local, nhất là khi làm việc với CSV, Parquet và DataFrame."
  },
  {
    id: "duckdb_a_015",
    library: "DuckDB",
    level: "Advanced",
    topic: "Best Practice for Data Analyst",
    question: "Best practice nào phù hợp khi dùng DuckDB trong project phân tích dữ liệu?",
    code: "",
    options: [
      "Viết SQL rõ ràng, kiểm tra schema, filter/select sớm, và lưu output sạch ra Parquet/table khi cần",
      "Luôn dùng SELECT * cho mọi bước production",
      "Không cần kiểm tra NULL hoặc data type",
      "Chỉ query từng dòng bằng Python loop"
    ],
    answer: 0,
    explanation: "DuckDB phát huy tốt khi dùng SQL rõ ràng, kiểm tra dtype/schema, giảm dữ liệu sớm bằng filter/select và materialize kết quả đáng tin cậy."
  },
  {
    id: "duckdb_e_001",
    library: "DuckDB",
    level: "Expert",
    topic: "DuckDB vs Traditional Database Server",
    question: "Vì sao không nên xem DuckDB là thay thế tuyệt đối cho mọi client-server data warehouse?",
    code: "",
    options: [
      "Vì DuckDB mạnh cho local/in-process analytics, nhưng workload nhiều user đồng thời, governance và serving production lớn có thể cần hệ thống client-server chuyên biệt",
      "Vì DuckDB không chạy được SQL",
      "Vì DuckDB chỉ đọc được file text nhỏ",
      "Vì DuckDB không thể dùng trong Python"
    ],
    answer: 0,
    explanation: "DuckDB rất mạnh cho embedded/local analytics, nhưng không phải giải pháp tuyệt đối cho mọi nhu cầu data warehouse như multi-user concurrency, governance, access control hoặc production serving lớn."
  },
  {
    id: "duckdb_e_002",
    library: "DuckDB",
    level: "Expert",
    topic: "Query File Directly vs Load into Table",
    question: "Khi nào query file trực tiếp có thể hợp lý hơn load vào table trước?",
    code: "",
    options: [
      "Khi cần phân tích nhanh dữ liệu file, không cần lưu persistent table hoặc chỉ cần một pipeline đọc-lọc-aggregate",
      "Khi cần update từng dòng liên tục trong nhiều tháng",
      "Khi file không có schema và không thể đọc",
      "Khi muốn tránh SQL hoàn toàn"
    ],
    answer: 0,
    explanation: "Query file trực tiếp giúp exploratory analysis và file-based pipeline gọn hơn. Nếu cần dùng lại nhiều lần hoặc quản lý dữ liệu lâu dài, có thể tạo table persistent."
  },
  {
    id: "duckdb_e_003",
    library: "DuckDB",
    level: "Expert",
    topic: "Performance Basics",
    question: "Khi query nhiều file Parquet lớn, pattern nào thường tối ưu hơn?",
    code: "",
    options: [
      "Chỉ select cột cần thiết, filter sớm bằng WHERE, và để DuckDB đọc trực tiếp Parquet/glob khi phù hợp",
      "SELECT * mọi cột rồi lọc ở Python sau",
      "Convert toàn bộ dữ liệu sang list Python trước khi lọc",
      "Luôn ghi ra CSV rồi mới query"
    ],
    answer: 0,
    explanation: "Chọn cột cần thiết và filter sớm giúp tận dụng các tối ưu như projection/predicate pushdown khi có thể, giảm I/O và dữ liệu cần xử lý."
  },
  {
    id: "duckdb_e_004",
    library: "DuckDB",
    level: "Expert",
    topic: "Common SQL Errors",
    question: "Trong analytical SQL, vì sao SELECT * trong các bước trung gian lớn có thể không tốt?",
    code: "",
    options: [
      "Vì đọc/xử lý nhiều cột không cần thiết, làm query nặng hơn và khó kiểm soát schema",
      "Vì SELECT * luôn sai cú pháp",
      "Vì SELECT * chỉ trả về một cột",
      "Vì SELECT * tự động xóa dữ liệu"
    ],
    answer: 0,
    explanation: "SELECT * tiện khi explore, nhưng trong pipeline lớn nên chọn cột cần thiết để giảm I/O, tránh schema không mong muốn và giúp logic rõ hơn."
  },
  {
    id: "duckdb_e_005",
    library: "DuckDB",
    level: "Expert",
    topic: "Best Practice for Data Analyst",
    question: "Khi xây một pipeline local bằng DuckDB từ raw CSV sang curated Parquet, cách nào hợp lý nhất?",
    code: "",
    options: [
      "Đọc/query raw file, chuẩn hóa schema/type, validate logic, rồi COPY kết quả sạch ra Parquet",
      "Đọc CSV bằng Python loop từng dòng và không kiểm tra schema",
      "Chỉ đổi tên file CSV thành .parquet",
      "Fit machine learning model trước khi kiểm tra dữ liệu"
    ],
    answer: 0,
    explanation: "Pipeline tốt nên đọc raw, chuẩn hóa dtype/schema, xử lý null/cast, validate row count/logic, sau đó export curated data ra Parquet hoặc table để dùng tiếp."
  }
];