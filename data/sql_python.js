const SQL_PYTHON_QUESTIONS = [
  {
    id: "sqlpy_f_001",
    library: "SQL with Python",
    level: "Foundation",
    topic: "pandas read_sql",
    question: "Trong pandas, hàm nào thường dùng để đọc kết quả SQL query vào DataFrame?",
    code: "import pandas as pd",
    options: [
      "pd.read_sql(query, conn)",
      "pd.write_sql(query, conn)",
      "pd.select_dataframe(query)",
      "pd.query_database_only(query)"
    ],
    answer: 0,
    explanation: "pd.read_sql(query, conn) thường dùng để chạy SQL query và đưa kết quả vào pandas DataFrame. Các option còn lại không phải API pandas phổ biến/hợp lệ cho tác vụ này."
  },
  {
    id: "sqlpy_f_002",
    library: "SQL with Python",
    level: "Foundation",
    topic: "SQL with Python Overview",
    question: "Mục đích phổ biến của việc dùng SQL trong Python là gì?",
    code: "",
    options: [
      "Kết nối database, chạy query và đưa kết quả vào workflow phân tích dữ liệu",
      "Thay thế hoàn toàn mọi DataFrame trong Python",
      "Chỉ dùng để vẽ biểu đồ",
      "Chỉ dùng để train deep learning model"
    ],
    answer: 0,
    explanation: "SQL trong Python thường dùng để query dữ liệu từ database, xử lý/filter/aggregate bằng SQL rồi đưa kết quả vào pandas hoặc workflow phân tích."
  },
  {
    id: "sqlpy_f_003",
    library: "SQL with Python",
    level: "Foundation",
    topic: "Database Connection",
    question: "Database connection trong Python thường đại diện cho điều gì?",
    code: "",
    options: [
      "Một kết nối tới database để chạy query hoặc transaction",
      "Một cột dữ liệu trong DataFrame",
      "Một biểu đồ trong notebook",
      "Một kiểu dữ liệu string"
    ],
    answer: 0,
    explanation: "Connection là object đại diện cho kết nối tới database. Thông qua connection, ta có thể tạo cursor, execute query, commit hoặc rollback."
  },
  {
    id: "sqlpy_f_004",
    library: "SQL with Python",
    level: "Foundation",
    topic: "sqlite3 Basics",
    question: "Module chuẩn nào của Python thường dùng để làm việc với SQLite database?",
    code: "",
    options: [
      "sqlite3",
      "pandasql3",
      "sqlserver",
      "pydbonly"
    ],
    answer: 0,
    explanation: "sqlite3 là module trong Python standard library để kết nối và thao tác với SQLite database."
  },
  {
    id: "sqlpy_f_005",
    library: "SQL with Python",
    level: "Foundation",
    topic: "sqlite3 Basics",
    question: "Cách nào tạo connection tới SQLite database file bằng sqlite3?",
    code: "import sqlite3",
    options: [
      "conn = sqlite3.connect(\"data.db\")",
      "conn = sqlite3.open_engine(\"data.db\")",
      "conn = sqlite3.read_sql(\"data.db\")",
      "conn = sqlite3.create_dataframe(\"data.db\")"
    ],
    answer: 0,
    explanation: "sqlite3.connect(\"data.db\") tạo connection tới file SQLite. Nếu file chưa tồn tại, SQLite có thể tạo file mới."
  },
  {
    id: "sqlpy_f_006",
    library: "SQL with Python",
    level: "Foundation",
    topic: "SQLAlchemy Engine",
    question: "SQLAlchemy engine thường đại diện cho điều gì?",
    code: "",
    options: [
      "Object quản lý kết nối tới database và làm cầu nối giữa Python/pandas với database",
      "Một DataFrame đã được group by",
      "Một model machine learning",
      "Một function để vẽ chart"
    ],
    answer: 0,
    explanation: "SQLAlchemy engine chứa thông tin kết nối và được pandas hỗ trợ trong các hàm như read_sql hoặc to_sql."
  },
  {
    id: "sqlpy_f_007",
    library: "SQL with Python",
    level: "Foundation",
    topic: "Connection String Awareness",
    question: "Connection string thường chứa thông tin gì?",
    code: "",
    options: [
      "Thông tin driver/database, host, port, database name và thông tin xác thực nếu cần",
      "Chỉ chứa tên cột cần SELECT",
      "Chỉ chứa số dòng cần đọc",
      "Chỉ chứa metric accuracy"
    ],
    answer: 0,
    explanation: "Connection string mô tả cách kết nối tới database. Trong thực tế, không nên hard-code thông tin nhạy cảm như password trực tiếp trong code."
  },
  {
    id: "sqlpy_f_008",
    library: "SQL with Python",
    level: "Foundation",
    topic: "SELECT Query",
    question: "Câu SQL nào chọn tất cả cột từ bảng users?",
    code: "",
    options: [
      "SELECT * FROM users",
      "GET * FROM users",
      "READ users ALL",
      "SHOW users WHERE all"
    ],
    answer: 0,
    explanation: "SELECT * FROM users là cú pháp SQL cơ bản để lấy tất cả cột từ bảng users."
  },
  {
    id: "sqlpy_f_009",
    library: "SQL with Python",
    level: "Foundation",
    topic: "WHERE Filter",
    question: "Mệnh đề WHERE trong SQL dùng để làm gì?",
    code: "",
    options: [
      "Lọc dòng theo điều kiện",
      "Tạo connection",
      "Đóng database",
      "Chuyển query thành DataFrame"
    ],
    answer: 0,
    explanation: "WHERE dùng để lọc các dòng thỏa điều kiện, ví dụ WHERE amount > 100."
  },
  {
    id: "sqlpy_f_010",
    library: "SQL with Python",
    level: "Foundation",
    topic: "GROUP BY Aggregation",
    question: "GROUP BY trong SQL thường dùng khi nào?",
    code: "",
    options: [
      "Khi cần tính tổng, trung bình, số lượng theo từng nhóm",
      "Khi cần đóng connection",
      "Khi cần import pandas",
      "Khi cần đổi tên file database"
    ],
    answer: 0,
    explanation: "GROUP BY gom dữ liệu theo một hoặc nhiều cột để tính aggregate như SUM, COUNT, AVG cho từng nhóm."
  },
  {
    id: "sqlpy_f_011",
    library: "SQL with Python",
    level: "Foundation",
    topic: "Query Result to DataFrame",
    question: "Sau khi chạy query bằng pandas read_sql, kết quả thường được đưa về dạng nào?",
    code: "import pandas as pd",
    options: [
      "pandas DataFrame",
      "Python module",
      "Database server mới",
      "Matplotlib Figure"
    ],
    answer: 0,
    explanation: "pd.read_sql trả kết quả SQL query thành pandas DataFrame, giúp tiếp tục phân tích bằng pandas."
  },
  {
    id: "sqlpy_f_012",
    library: "SQL with Python",
    level: "Foundation",
    topic: "Cursor",
    question: "Cursor trong DB-API thường dùng để làm gì?",
    code: "",
    options: [
      "Execute SQL statement và fetch kết quả",
      "Lưu chart vào file",
      "Tạo biến môi trường",
      "Tự động tối ưu mọi query"
    ],
    answer: 0,
    explanation: "Cursor là object dùng để gửi SQL statement tới database và lấy kết quả trả về bằng fetchone/fetchall."
  },
  {
    id: "sqlpy_f_013",
    library: "SQL with Python",
    level: "Foundation",
    topic: "execute",
    question: "cursor.execute(query) thường dùng để làm gì?",
    code: "",
    options: [
      "Gửi một câu SQL tới database để thực thi",
      "Chuyển DataFrame thành biểu đồ",
      "Tự động tạo password",
      "Đóng Python session"
    ],
    answer: 0,
    explanation: "execute() dùng để chạy SQL statement như SELECT, INSERT, UPDATE hoặc DELETE thông qua cursor."
  },
  {
    id: "sqlpy_f_014",
    library: "SQL with Python",
    level: "Foundation",
    topic: "commit",
    question: "commit trong transaction dùng để làm gì?",
    code: "",
    options: [
      "Lưu các thay đổi đã thực hiện vào database",
      "Hủy các thay đổi chưa lưu",
      "Chỉ đọc dữ liệu từ database",
      "Tạo query string mới"
    ],
    answer: 0,
    explanation: "commit xác nhận và lưu các thay đổi như INSERT, UPDATE, DELETE vào database. rollback mới dùng để hủy thay đổi chưa commit."
  },
  {
    id: "sqlpy_f_015",
    library: "SQL with Python",
    level: "Foundation",
    topic: "Closing Connection",
    question: "Vì sao nên đóng database connection khi không còn dùng?",
    code: "",
    options: [
      "Để giải phóng tài nguyên và tránh giữ connection không cần thiết",
      "Để xóa toàn bộ database",
      "Để tự động tăng tốc mọi query",
      "Để chuyển query thành CSV"
    ],
    answer: 0,
    explanation: "Đóng connection giúp giải phóng tài nguyên. Với nhiều workflow, nên dùng context manager để quản lý connection an toàn hơn."
  },
  {
    id: "sqlpy_i_001",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "read_sql_query",
    question: "pd.read_sql_query() thường phù hợp nhất với tác vụ nào?",
    code: "import pandas as pd",
    options: [
      "Chạy một SQL SELECT query và trả kết quả về DataFrame",
      "Ghi DataFrame xuống database",
      "Tạo database engine mới",
      "Rollback transaction"
    ],
    answer: 0,
    explanation: "pd.read_sql_query(query, conn) dùng để chạy SQL query và trả kết quả về pandas DataFrame."
  },
  {
    id: "sqlpy_i_002",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "read_sql_table Awareness",
    question: "pd.read_sql_table() khác read_sql_query() ở mức concept như thế nào?",
    code: "",
    options: [
      "read_sql_table đọc một table theo tên, còn read_sql_query chạy query SQL tùy chỉnh",
      "read_sql_table chỉ dùng để ghi dữ liệu",
      "read_sql_query không trả về DataFrame",
      "Hai hàm luôn giống nhau trong mọi trường hợp"
    ],
    answer: 0,
    explanation: "read_sql_table thường đọc table theo tên thông qua SQLAlchemy engine. read_sql_query nhận một câu query SQL cụ thể."
  },
  {
    id: "sqlpy_i_003",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Writing SQL Query in Python",
    question: "Cách nào viết query nhiều dòng trong Python dễ đọc hơn?",
    code: "",
    options: [
      "Dùng triple-quoted string như `\"\"\"SELECT ...\"\"\"`",
      "Viết mỗi từ SQL thành một biến global",
      "Chỉ viết SQL trên một dòng rất dài",
      "Không thể viết query nhiều dòng trong Python"
    ],
    answer: 0,
    explanation: "Triple-quoted string giúp viết SQL nhiều dòng rõ ràng, dễ đọc và dễ maintain hơn."
  },
  {
    id: "sqlpy_i_004",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Parameterized Query",
    question: "Parameterized query dùng để làm gì?",
    code: "",
    options: [
      "Truyền giá trị vào query an toàn hơn, giảm rủi ro SQL injection",
      "Tự động tạo index cho mọi cột",
      "Chuyển query thành biểu đồ",
      "Bỏ qua mọi lỗi kết nối"
    ],
    answer: 0,
    explanation: "Parameterized query tách SQL template khỏi giá trị input, giúp tránh nối string trực tiếp từ input người dùng và giảm rủi ro SQL injection."
  },
  {
    id: "sqlpy_i_005",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "SQL Injection",
    question: "Cách nào dưới đây dễ gây SQL injection nhất?",
    code: "",
    options: [
      "query = \"SELECT * FROM users WHERE status = '\" + user_input + \"'\"",
      "Dùng parameterized query với placeholder",
      "Truyền params riêng cho read_sql",
      "Dùng biến môi trường để lưu credential"
    ],
    answer: 0,
    explanation: "Nối trực tiếp user_input vào SQL string có thể cho phép input độc hại thay đổi logic query. Nên dùng parameterized query."
  },
  {
    id: "sqlpy_i_006",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Parameterized Query",
    question: "Với sqlite3, cách nào truyền parameter an toàn hơn?",
    code: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\nstatus = \"active\"",
    options: [
      "conn.execute(\"SELECT * FROM users WHERE status = ?\", (status,))",
      "conn.execute(\"SELECT * FROM users WHERE status = \" + status)",
      "conn.execute(f\"SELECT * FROM users WHERE status = {status}\")",
      "conn.execute(\"SELECT * FROM users WHERE status = status\")"
    ],
    answer: 0,
    explanation: "sqlite3 hỗ trợ placeholder ? và params tuple. Đây là cách an toàn hơn so với nối string hoặc f-string trực tiếp."
  },
  {
    id: "sqlpy_i_007",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "SQLAlchemy",
    question: "Trong SQLAlchemy, text() thường dùng để làm gì?",
    code: "from sqlalchemy import text",
    options: [
      "Biểu diễn một câu SQL text có thể truyền parameter",
      "Chuyển DataFrame thành string",
      "Tạo biểu đồ text",
      "Đóng engine"
    ],
    answer: 0,
    explanation: "text() tạo SQL expression từ chuỗi SQL, thường dùng với engine/connection và parameterized query."
  },
  {
    id: "sqlpy_i_008",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Connection vs Cursor",
    question: "Phân biệt đúng giữa connection và cursor là gì?",
    code: "",
    options: [
      "Connection quản lý kết nối tới database; cursor dùng để execute và fetch kết quả",
      "Cursor là database server; connection là một dòng dữ liệu",
      "Connection chỉ dùng để vẽ chart; cursor chỉ dùng cho pandas",
      "Hai khái niệm này luôn giống hệt nhau"
    ],
    answer: 0,
    explanation: "Connection đại diện cho kết nối database. Cursor là object thao tác SQL trên connection đó."
  },
  {
    id: "sqlpy_i_009",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "fetchone",
    question: "fetchone() thường trả về gì?",
    code: "",
    options: [
      "Một dòng kết quả tiếp theo hoặc None nếu không còn dòng",
      "Tất cả dòng kết quả cùng lúc",
      "Tên database",
      "Một pandas DataFrame bắt buộc"
    ],
    answer: 0,
    explanation: "fetchone() lấy một row tiếp theo từ result set. fetchall() mới lấy tất cả dòng còn lại."
  },
  {
    id: "sqlpy_i_010",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "fetchall",
    question: "fetchall() thường dùng để làm gì?",
    code: "",
    options: [
      "Lấy tất cả dòng còn lại từ kết quả query",
      "Lấy đúng một dòng đầu tiên",
      "Commit transaction",
      "Đóng connection"
    ],
    answer: 0,
    explanation: "fetchall() trả về tất cả rows còn lại trong result set, thường là list các tuple với sqlite3."
  },
  {
    id: "sqlpy_i_011",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "DataFrame to SQL",
    question: "Trong pandas, method nào thường dùng để ghi DataFrame xuống database table?",
    code: "import pandas as pd",
    options: [
      "df.to_sql(...)",
      "pd.write_database(df)",
      "df.insert_sql_only(...)",
      "pd.to_database_table(df)"
    ],
    answer: 0,
    explanation: "df.to_sql() dùng để ghi pandas DataFrame xuống database thông qua connection hoặc SQLAlchemy engine."
  },
  {
    id: "sqlpy_i_012",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "if_exists Behavior",
    question: "Trong df.to_sql(..., if_exists=\"replace\"), if_exists=\"replace\" có ý nghĩa gì?",
    code: "",
    options: [
      "Nếu table đã tồn tại thì xóa/thay thế table cũ bằng dữ liệu mới",
      "Nếu table đã tồn tại thì luôn báo lỗi",
      "Nếu table đã tồn tại thì append thêm dòng",
      "Không ảnh hưởng gì đến table"
    ],
    answer: 0,
    explanation: "if_exists=\"replace\" thay thế table hiện có. Cần dùng cẩn thận vì có thể làm mất dữ liệu table cũ."
  },
  {
    id: "sqlpy_i_013",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "if_exists Behavior",
    question: "Trong df.to_sql(..., if_exists=\"append\"), if_exists=\"append\" có ý nghĩa gì?",
    code: "",
    options: [
      "Thêm dữ liệu mới vào table đã tồn tại",
      "Xóa table cũ rồi ghi mới",
      "Luôn báo lỗi nếu table tồn tại",
      "Chỉ đọc dữ liệu từ table"
    ],
    answer: 0,
    explanation: "if_exists=\"append\" ghi thêm rows vào table hiện có. Cần đảm bảo schema của DataFrame phù hợp với table."
  },
  {
    id: "sqlpy_i_014",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "index Parameter Awareness",
    question: "Trong df.to_sql(..., index=False), index=False có tác dụng gì?",
    code: "",
    options: [
      "Không ghi pandas index thành một cột trong database table",
      "Xóa index của database",
      "Tạo index SQL tự động cho mọi cột",
      "Không ghi bất kỳ dữ liệu nào"
    ],
    answer: 0,
    explanation: "index=False giúp tránh ghi pandas index thành cột riêng trong table, phù hợp khi index không mang ý nghĩa dữ liệu."
  },
  {
    id: "sqlpy_i_015",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Transaction",
    question: "Transaction giúp ích gì khi chạy nhiều INSERT/UPDATE liên quan nhau?",
    code: "",
    options: [
      "Cho phép commit tất cả thay đổi cùng nhau hoặc rollback nếu có lỗi",
      "Tự động làm query nhanh nhất mọi trường hợp",
      "Chỉ dùng được với SELECT",
      "Bắt buộc phải dùng pandas"
    ],
    answer: 0,
    explanation: "Transaction đảm bảo tính nhất quán: nếu mọi bước thành công thì commit, nếu lỗi thì rollback để hủy thay đổi chưa lưu."
  },
  {
    id: "sqlpy_i_016",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "rollback",
    question: "rollback trong transaction dùng để làm gì?",
    code: "",
    options: [
      "Hủy các thay đổi chưa commit",
      "Lưu các thay đổi vào database",
      "Chỉ lấy một dòng kết quả",
      "Tạo bảng mới từ DataFrame"
    ],
    answer: 0,
    explanation: "rollback hủy các thay đổi trong transaction chưa được commit, giúp tránh lưu dữ liệu sai khi xảy ra lỗi."
  },
  {
    id: "sqlpy_i_017",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Context Manager",
    question: "Lợi ích của context manager khi làm việc với connection/file-like resource là gì?",
    code: "",
    options: [
      "Giúp quản lý tài nguyên và cleanup an toàn hơn sau khi block kết thúc",
      "Tự động viết SQL thay người dùng",
      "Tự động tạo dashboard",
      "Bắt buộc tăng accuracy model"
    ],
    answer: 0,
    explanation: "Context manager giúp đóng hoặc cleanup resource đúng cách, giảm rủi ro quên đóng connection/cursor hoặc xử lý transaction không rõ ràng."
  },
  {
    id: "sqlpy_i_018",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Error Handling",
    question: "Khi chạy query từ Python, vì sao nên xử lý lỗi có chọn lọc thay vì except: pass?",
    code: "",
    options: [
      "Vì except: pass có thể che giấu lỗi connection/query và làm pipeline tiếp tục với dữ liệu sai",
      "Vì Python không hỗ trợ try/except",
      "Vì lỗi SQL luôn không quan trọng",
      "Vì except: pass tự động rollback an toàn"
    ],
    answer: 0,
    explanation: "Bỏ qua lỗi làm pipeline khó debug và có thể tạo output sai. Nên log lỗi, rollback nếu cần và fail rõ ràng với lỗi nghiêm trọng."
  },
  {
    id: "sqlpy_i_019",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Credentials Handling",
    question: "Best practice nào phù hợp với database password trong project Python?",
    code: "",
    options: [
      "Không hard-code password trong code; dùng biến môi trường hoặc config an toàn",
      "Commit password trực tiếp lên GitHub để dễ chạy",
      "In password ra log mỗi lần kết nối",
      "Gửi password trong tên table"
    ],
    answer: 0,
    explanation: "Credential là thông tin nhạy cảm. Nên dùng environment variables, secret manager hoặc config không commit công khai."
  },
  {
    id: "sqlpy_i_020",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Chunking with chunksize",
    question: "chunksize trong pd.read_sql thường hữu ích khi nào?",
    code: "",
    options: [
      "Khi kết quả query lớn và muốn đọc từng phần thay vì load toàn bộ vào memory",
      "Khi query chỉ trả về một dòng",
      "Khi muốn tự động tạo index database",
      "Khi không có connection"
    ],
    answer: 0,
    explanation: "chunksize giúp pd.read_sql trả về iterator các DataFrame nhỏ hơn, phù hợp khi dữ liệu lớn và memory hạn chế."
  },
  {
    id: "sqlpy_i_021",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Pushdown Computation to SQL",
    question: "Khi bảng rất lớn, vì sao nên filter/aggregate trong SQL trước khi đưa về pandas nếu có thể?",
    code: "",
    options: [
      "Để giảm số dòng/cột truyền về Python và tận dụng database engine xử lý",
      "Vì pandas không thể đọc SQL",
      "Vì SQL không hỗ trợ aggregation",
      "Vì luôn cần SELECT * trước rồi mới lọc"
    ],
    answer: 0,
    explanation: "Đẩy filter/aggregation xuống SQL giúp giảm dữ liệu cần chuyển về memory Python, thường hiệu quả hơn khi chỉ cần kết quả tổng hợp."
  },
  {
    id: "sqlpy_i_022",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Avoid SELECT *",
    question: "Vì sao nên tránh SELECT * trong query production khi chỉ cần vài cột?",
    code: "",
    options: [
      "Vì đọc nhiều cột không cần thiết, làm query nặng hơn và schema khó kiểm soát",
      "Vì SELECT * luôn sai cú pháp",
      "Vì SELECT * chỉ chạy được với pandas",
      "Vì SELECT * tự động xóa bảng"
    ],
    answer: 0,
    explanation: "SELECT cột cần thiết giúp giảm dữ liệu truyền qua network/memory và làm pipeline rõ schema hơn."
  },
  {
    id: "sqlpy_i_023",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Date Filter in SQL",
    question: "Vì sao nên filter theo date trong SQL khi chỉ cần một giai đoạn nhỏ từ bảng lớn?",
    code: "",
    options: [
      "Để giảm lượng dữ liệu đọc/trả về Python",
      "Để database tự động xóa dữ liệu cũ",
      "Để pandas không cần import",
      "Để biến date thành password"
    ],
    answer: 0,
    explanation: "Filter date trong SQL giúp chỉ lấy giai đoạn cần phân tích, tiết kiệm I/O, memory và thời gian xử lý trong Python."
  },
  {
    id: "sqlpy_i_024",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "NULL Handling",
    question: "Trong SQL, COALESCE(amount, 0) thường dùng để làm gì?",
    code: "",
    options: [
      "Trả amount nếu không NULL, nếu NULL thì trả 0",
      "Chỉ giữ dòng có amount NULL",
      "Xóa cột amount",
      "Đổi tên amount thành 0"
    ],
    answer: 0,
    explanation: "COALESCE trả về giá trị đầu tiên không NULL. COALESCE(amount, 0) thường dùng để thay NULL bằng 0 trong output."
  },
  {
    id: "sqlpy_i_025",
    library: "SQL with Python",
    level: "Intermediate",
    topic: "Common Errors",
    question: "Lỗi phổ biến nào xảy ra khi query string có dấu nháy không escape đúng?",
    code: "",
    options: [
      "SQL syntax error hoặc query bị hiểu sai",
      "Database tự động sửa query",
      "pandas tự động tạo table mới",
      "Connection tự động đóng an toàn"
    ],
    answer: 0,
    explanation: "Dấu nháy trong string có thể làm SQL bị lỗi syntax hoặc logic. Parameterized query giúp tránh nhiều lỗi liên quan đến quoting."
  },
  {
    id: "sqlpy_a_001",
    library: "SQL with Python",
    level: "Advanced",
    topic: "SQL Injection",
    question: "Vì sao f-string trực tiếp với user input trong SQL có thể nguy hiểm?",
    code: "status = user_input\nquery = f\"SELECT * FROM users WHERE status = '{status}'\"",
    options: [
      "Vì user_input có thể chứa SQL độc hại làm thay đổi logic query",
      "Vì f-string không chạy được trong Python",
      "Vì SQL không cho phép WHERE",
      "Vì pandas không đọc được string"
    ],
    answer: 0,
    explanation: "F-string nối input trực tiếp vào query có thể gây SQL injection. Nên dùng parameterized query thay vì tự ghép chuỗi."
  },
  {
    id: "sqlpy_a_002",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Transaction",
    question: "Pattern nào hợp lý khi chạy nhiều câu INSERT liên quan nhau?",
    code: "",
    options: [
      "Dùng transaction: nếu tất cả thành công thì commit, nếu có lỗi thì rollback",
      "Commit sau từng dòng dù không cần nhất quán",
      "Bỏ qua mọi lỗi bằng except: pass",
      "Không cần connection"
    ],
    answer: 0,
    explanation: "Transaction giúp đảm bảo nhiều thay đổi liên quan được lưu cùng nhau hoặc hủy cùng nhau nếu có lỗi."
  },
  {
    id: "sqlpy_a_003",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Large Query Result Handling",
    question: "Nếu query trả về hàng chục triệu dòng, cách nào thường hợp lý hơn?",
    code: "",
    options: [
      "Giảm dữ liệu bằng WHERE/SELECT/GROUP BY trong SQL hoặc đọc theo chunksize nếu cần",
      "Luôn kéo toàn bộ bảng vào pandas trước",
      "Dùng SELECT * rồi lưu vào list Python",
      "Tắt mọi filter để query đơn giản hơn"
    ],
    answer: 0,
    explanation: "Với dữ liệu lớn, nên giảm dữ liệu tại database bằng filter/select/aggregation hoặc xử lý từng chunk để tránh quá tải memory."
  },
  {
    id: "sqlpy_a_004",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Data Type Mismatch",
    question: "Vấn đề nào có thể xảy ra khi cột date trong database được đọc về Python như string?",
    code: "",
    options: [
      "Filter, sort hoặc tạo feature thời gian có thể sai nếu không parse đúng datetime",
      "Python tự động biết mọi timezone",
      "SQL query không thể chạy nữa",
      "DataFrame không thể có cột string"
    ],
    answer: 0,
    explanation: "Nếu date là string, sort/filter theo thời gian có thể sai trong một số format. Cần kiểm tra dtype và parse datetime khi cần."
  },
  {
    id: "sqlpy_a_005",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Schema Awareness",
    question: "Vì sao cần kiểm tra schema trước khi ghi DataFrame xuống table có sẵn?",
    code: "",
    options: [
      "Để đảm bảo tên cột, thứ tự logic và kiểu dữ liệu tương thích với table đích",
      "Để tự động tăng số dòng",
      "Để tránh dùng SQL hoàn toàn",
      "Để database tự động tạo chart"
    ],
    answer: 0,
    explanation: "Schema mismatch có thể gây lỗi khi to_sql append hoặc làm dữ liệu bị cast sai. Nên kiểm tra cột và dtype trước khi ghi."
  },
  {
    id: "sqlpy_a_006",
    library: "SQL with Python",
    level: "Advanced",
    topic: "to_sql Basics",
    question: "Khi dùng df.to_sql để append dữ liệu vào table có sẵn, rủi ro nào cần chú ý?",
    code: "",
    options: [
      "Schema hoặc dtype của DataFrame có thể không khớp table đích",
      "to_sql luôn xóa table dù dùng append",
      "to_sql không bao giờ ghi được dữ liệu",
      "DataFrame bắt buộc phải có index datetime"
    ],
    answer: 0,
    explanation: "Append yêu cầu dữ liệu mới tương thích với table đích. Nếu cột thiếu/thừa hoặc dtype sai, query có thể lỗi hoặc dữ liệu bị lưu không đúng."
  },
  {
    id: "sqlpy_a_007",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Temporary Table Awareness",
    question: "Temporary table trong workflow SQL với Python thường hữu ích khi nào?",
    code: "",
    options: [
      "Khi cần lưu kết quả trung gian trong session để dùng cho các query sau",
      "Khi muốn lưu dữ liệu vĩnh viễn cho mọi user",
      "Khi muốn thay thế password",
      "Khi chỉ cần một biến Python string"
    ],
    answer: 0,
    explanation: "Temporary table hữu ích cho pipeline nhiều bước trong cùng connection/session và không cần lưu kết quả trung gian lâu dài."
  },
  {
    id: "sqlpy_a_008",
    library: "SQL with Python",
    level: "Advanced",
    topic: "CTE Query",
    question: "Vì sao CTE có thể giúp query trong Python dễ maintain hơn?",
    code: "",
    options: [
      "Vì CTE chia logic SQL phức tạp thành các bước có tên rõ ràng",
      "Vì CTE tự động tạo index",
      "Vì CTE thay thế connection",
      "Vì CTE chỉ dùng để xóa dữ liệu"
    ],
    answer: 0,
    explanation: "CTE với WITH giúp tách query thành các khối logic dễ đọc hơn, đặc biệt khi viết query dài trong Python string."
  },
  {
    id: "sqlpy_a_009",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Query Logging Basics",
    question: "Query logging cơ bản trong pipeline dữ liệu giúp ích gì?",
    code: "",
    options: [
      "Giúp audit/debug query đã chạy, thời điểm chạy và lỗi nếu có",
      "Tự động sửa mọi query sai",
      "Tăng accuracy model",
      "Thay thế credential management"
    ],
    answer: 0,
    explanation: "Log query hoặc metadata chạy giúp debug pipeline, theo dõi lỗi và audit quá trình xử lý dữ liệu. Cần tránh log thông tin nhạy cảm."
  },
  {
    id: "sqlpy_a_010",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Environment Variables Awareness",
    question: "Vì sao nên dùng biến môi trường cho credential database?",
    code: "",
    options: [
      "Để tránh hard-code thông tin nhạy cảm trong source code",
      "Để query tự động chạy nhanh hơn mọi trường hợp",
      "Để biến password thành DataFrame",
      "Để không cần connection string"
    ],
    answer: 0,
    explanation: "Biến môi trường giúp tách credential khỏi code, giảm rủi ro lộ thông tin khi commit hoặc chia sẻ source."
  },
  {
    id: "sqlpy_a_011",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Performance Basics",
    question: "Cách nào thường giúp cải thiện workflow pandas + SQL với bảng lớn?",
    code: "",
    options: [
      "Chỉ SELECT cột cần thiết, WHERE filter sớm, aggregate trong SQL nếu phù hợp",
      "Luôn SELECT * rồi filter trong pandas",
      "Convert mọi dòng thành Python dict trước khi lọc",
      "Không dùng WHERE để query đơn giản hơn"
    ],
    answer: 0,
    explanation: "Đẩy logic lọc/chọn cột/tổng hợp xuống SQL giúp giảm dữ liệu truyền về Python và tận dụng database engine."
  },
  {
    id: "sqlpy_a_012",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Index Awareness",
    question: "Index trong database có thể giúp gì cho query?",
    code: "",
    options: [
      "Có thể tăng tốc một số filter/join trên cột được index, tùy query và database",
      "Luôn làm mọi query nhanh hơn tuyệt đối",
      "Tự động xóa NULL",
      "Thay thế mọi GROUP BY"
    ],
    answer: 0,
    explanation: "Index có thể hỗ trợ lookup/filter/join hiệu quả hơn, nhưng hiệu quả phụ thuộc query, dữ liệu, database và chi phí maintain index."
  },
  {
    id: "sqlpy_a_013",
    library: "SQL with Python",
    level: "Advanced",
    topic: "JOIN Query",
    question: "Khi join users và orders trong SQL trước khi đưa vào pandas, lợi ích chính là gì?",
    code: "",
    options: [
      "Giảm thao tác merge trong Python và tận dụng database engine xử lý join",
      "Bắt buộc làm mất dữ liệu",
      "Không cần kiểm tra key join",
      "Tự động tạo machine learning feature hoàn hảo"
    ],
    answer: 0,
    explanation: "Join trong SQL có thể hiệu quả và rõ ràng hơn khi dữ liệu nằm trong database. Tuy nhiên vẫn cần kiểm tra key, duplicate và row count sau join."
  },
  {
    id: "sqlpy_a_014",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Common Python Integration Errors",
    question: "Lỗi phổ biến nào xảy ra khi quên commit sau INSERT/UPDATE trong một số database/connection setting?",
    code: "",
    options: [
      "Thay đổi có thể chưa được lưu vĩnh viễn vào database",
      "SELECT query không thể chạy nữa",
      "DataFrame tự động bị xóa",
      "Python tự động rollback toàn bộ database đã commit"
    ],
    answer: 0,
    explanation: "Với transaction, thay đổi cần commit để được lưu. Nếu quên commit và connection đóng/rollback, thay đổi có thể mất."
  },
  {
    id: "sqlpy_a_015",
    library: "SQL with Python",
    level: "Advanced",
    topic: "Best Practice for Data Analyst",
    question: "Best practice nào phù hợp khi viết SQL trong Python cho dashboard/report định kỳ?",
    code: "",
    options: [
      "Tách query rõ ràng, dùng parameter an toàn, log lỗi, kiểm tra schema và tránh kéo dữ liệu thừa",
      "Hard-code password và SELECT * mọi bảng",
      "Dùng except: pass để pipeline không bao giờ dừng",
      "Không kiểm tra row count vì database luôn đúng"
    ],
    answer: 0,
    explanation: "Pipeline định kỳ cần an toàn, dễ debug và ổn định: parameterized query, credential an toàn, kiểm tra dữ liệu, log lỗi và chỉ lấy dữ liệu cần thiết."
  },
  {
    id: "sqlpy_e_001",
    library: "SQL with Python",
    level: "Expert",
    topic: "SQL Injection",
    question: "Trong code review, dấu hiệu nào là rủi ro SQL injection rõ nhất?",
    code: "",
    options: [
      "SQL query được tạo bằng cách nối trực tiếp user input vào string",
      "Query dùng parameter binding",
      "Credential lấy từ biến môi trường",
      "Query dùng WHERE với placeholder"
    ],
    answer: 0,
    explanation: "Nối trực tiếp input vào SQL string là dấu hiệu rủi ro cao. Nên dùng parameterized query hoặc API binding của thư viện."
  },
  {
    id: "sqlpy_e_002",
    library: "SQL with Python",
    level: "Expert",
    topic: "Transaction",
    question: "Trong pipeline ghi dữ liệu gồm xóa dữ liệu cũ rồi insert dữ liệu mới, vì sao transaction quan trọng?",
    code: "",
    options: [
      "Để tránh trạng thái nửa vời như đã xóa dữ liệu cũ nhưng insert dữ liệu mới thất bại",
      "Để SELECT nhanh hơn chắc chắn",
      "Để không cần kiểm tra schema",
      "Để tự động tạo dashboard"
    ],
    answer: 0,
    explanation: "Transaction giúp các bước thay đổi dữ liệu được commit cùng nhau hoặc rollback cùng nhau, tránh bảng rơi vào trạng thái không nhất quán."
  },
  {
    id: "sqlpy_e_003",
    library: "SQL with Python",
    level: "Expert",
    topic: "Large Query Result Handling",
    question: "Nếu cần xử lý result rất lớn trong Python nhưng không cần giữ toàn bộ trong memory, pattern nào phù hợp hơn?",
    code: "",
    options: [
      "Đọc theo chunksize và xử lý từng chunk, hoặc aggregate/filter thêm trong SQL nếu có thể",
      "fetchall toàn bộ rồi convert thành list lớn",
      "SELECT * rồi lưu mọi dòng vào dictionary global",
      "Tắt WHERE để tránh phức tạp"
    ],
    answer: 0,
    explanation: "Đọc theo chunk giúp giảm peak memory. Nhưng trước đó nên cân nhắc đẩy filter/aggregation xuống SQL để giảm dữ liệu phải xử lý."
  },
  {
    id: "sqlpy_e_004",
    library: "SQL with Python",
    level: "Expert",
    topic: "Credentials Handling",
    question: "Vì sao không nên log nguyên connection string nếu nó chứa username/password?",
    code: "",
    options: [
      "Vì log có thể làm lộ credential cho người không nên truy cập",
      "Vì connection string không bao giờ dùng được",
      "Vì log luôn làm database bị xóa",
      "Vì username/password chỉ nên đặt trong SELECT"
    ],
    answer: 0,
    explanation: "Log thường được lưu hoặc chia sẻ để debug. Nếu chứa credential, nó có thể làm lộ quyền truy cập database."
  },
  {
    id: "sqlpy_e_005",
    library: "SQL with Python",
    level: "Expert",
    topic: "Best Practice for Data Analyst",
    question: "Trong project analytics production-like, cách nào giúp SQL with Python dễ bảo trì hơn?",
    code: "",
    options: [
      "Tách config/credential, tách query phức tạp, dùng parameterized query, kiểm tra output và log có kiểm soát",
      "Viết tất cả query và password trong một dòng code",
      "Không dùng transaction cho thao tác ghi dữ liệu",
      "Luôn bỏ qua lỗi để report chạy tiếp"
    ],
    answer: 0,
    explanation: "Code dễ bảo trì cần tách cấu hình, bảo vệ credential, query rõ ràng, parameter an toàn, validation output và logging hợp lý."
  }
];