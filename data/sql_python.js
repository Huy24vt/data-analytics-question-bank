const SQL_PYTHON_QUESTIONS = [
  {
    id: "sqlpy_f_001",
    library: "SQL with Python",
    level: "Foundation",
    topic: "pandas read_sql",
    question: "Trong pandas, hàm nào thường dùng để đọc kết quả SQL query vào DataFrame?",
    code: "import pandas as pd",
    options: [
      "pd.write_sql(query, conn)",
      "pd.select_dataframe(query)",
      "pd.read_sql(query, conn)",
      "pd.query_database_only(query)"
    ],
    answer: 2,
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
      "Thay thế toàn bộ DataFrame",
      "Chỉ dùng để vẽ biểu đồ",
      "Query database cho workflow phân tích",
      "Chỉ train deep learning model"
    ],
    answer: 2,
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
      "Một cột trong DataFrame",
      "Một biểu đồ trong notebook",
      "Một kết nối tới database",
      "Một kiểu dữ liệu string"
    ],
    answer: 2,
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
      "pandasql3",
      "sqlserver",
      "sqlite3",
      "pydbonly"
    ],
    answer: 2,
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
      "conn = sqlite3.open_engine(\"data.db\")",
      "conn = sqlite3.read_sql(\"data.db\")",
      "conn = sqlite3.connect(\"data.db\")",
      "conn = sqlite3.create_dataframe(\"data.db\")"
    ],
    answer: 2,
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
      "Một DataFrame đã group by",
      "Một model machine learning",
      "Object quản lý kết nối database",
      "Một function để vẽ chart"
    ],
    answer: 2,
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
      "Chỉ tên cột cần SELECT",
      "Chỉ số dòng cần đọc",
      "Driver, host, database và auth",
      "Chỉ metric accuracy"
    ],
    answer: 2,
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
      "GET * FROM users",
      "READ users ALL",
      "SELECT * FROM users",
      "SHOW users WHERE all"
    ],
    answer: 2,
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
      "Tạo connection",
      "Đóng database",
      "Lọc dòng theo điều kiện",
      "Chuyển query thành DataFrame"
    ],
    answer: 2,
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
      "Khi cần đóng connection",
      "Khi cần import pandas",
      "Khi cần aggregate theo nhóm",
      "Khi cần đổi tên database"
    ],
    answer: 2,
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
      "Python module",
      "Database server mới",
      "pandas DataFrame",
      "Matplotlib Figure"
    ],
    answer: 2,
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
      "Lưu chart vào file",
      "Tạo biến môi trường",
      "Execute SQL và fetch kết quả",
      "Tự động tối ưu mọi query"
    ],
    answer: 2,
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
      "Chuyển DataFrame thành chart",
      "Tự động tạo password",
      "Gửi SQL tới database",
      "Đóng Python session"
    ],
    answer: 2,
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
      "Hủy thay đổi chưa lưu",
      "Chỉ đọc dữ liệu database",
      "Lưu thay đổi vào database",
      "Tạo query string mới"
    ],
    answer: 2,
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
      "Để xóa toàn bộ database",
      "Để mọi query nhanh hơn",
      "Để giải phóng tài nguyên",
      "Để chuyển query thành CSV"
    ],
    answer: 2,
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
      "Ghi DataFrame xuống database",
      "Tạo database engine mới",
      "Chạy SELECT và trả DataFrame",
      "Rollback transaction"
    ],
    answer: 2,
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
      "read_sql_table dùng để ghi dữ liệu",
      "read_sql_query không trả DataFrame",
      "Đọc table theo tên, không phải query tùy chỉnh",
      "Hai hàm luôn giống nhau"
    ],
    answer: 2,
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
      "Mỗi từ SQL là biến global",
      "Chỉ viết một dòng rất dài",
      "Dùng triple-quoted string",
      "Python không hỗ trợ nhiều dòng"
    ],
    answer: 2,
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
      "Tự động tạo index cho cột",
      "Chuyển query thành chart",
      "Truyền input vào SQL an toàn",
      "Bỏ qua mọi lỗi connection"
    ],
    answer: 2,
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
      "Dùng parameterized query",
      "Truyền params riêng cho read_sql",
      "Nối trực tiếp user_input vào SQL",
      "Lấy credential từ env vars"
    ],
    answer: 2,
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
      "conn.execute(\"SELECT * FROM users WHERE status = \" + status)",
      "conn.execute(f\"SELECT * FROM users WHERE status = {status}\")",
      "conn.execute(\"SELECT * FROM users WHERE status = ?\", (status,))",
      "conn.execute(\"SELECT * FROM users WHERE status = status\")"
    ],
    answer: 2,
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
      "Chuyển DataFrame thành string",
      "Tạo biểu đồ text",
      "Biểu diễn câu SQL text",
      "Đóng engine"
    ],
    answer: 2,
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
      "Cursor là database server",
      "Connection chỉ dùng vẽ chart",
      "Connection kết nối, cursor execute/fetch",
      "Hai khái niệm giống hệt nhau"
    ],
    answer: 2,
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
      "Tất cả dòng kết quả cùng lúc",
      "Tên database hiện tại",
      "Một dòng tiếp theo hoặc None",
      "Một DataFrame bắt buộc"
    ],
    answer: 2,
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
      "Lấy đúng một dòng đầu",
      "Commit transaction",
      "Lấy tất cả dòng còn lại",
      "Đóng connection"
    ],
    answer: 2,
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
      "pd.write_database(df)",
      "df.insert_sql_only(...)",
      "df.to_sql(...)",
      "pd.to_database_table(df)"
    ],
    answer: 2,
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
      "Luôn báo lỗi nếu table tồn tại",
      "Append thêm dòng mới",
      "Thay thế table cũ nếu tồn tại",
      "Không ảnh hưởng table"
    ],
    answer: 2,
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
      "Xóa table cũ rồi ghi mới",
      "Luôn báo lỗi nếu table tồn tại",
      "Thêm dữ liệu vào table có sẵn",
      "Chỉ đọc dữ liệu từ table"
    ],
    answer: 2,
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
      "Xóa index của database",
      "Tạo index SQL mọi cột",
      "Không ghi pandas index",
      "Không ghi dữ liệu nào"
    ],
    answer: 2,
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
      "Tự động làm query nhanh nhất",
      "Chỉ dùng được với SELECT",
      "Commit/rollback các bước cùng nhau",
      "Bắt buộc phải dùng pandas"
    ],
    answer: 2,
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
      "Lưu thay đổi vào database",
      "Chỉ lấy một dòng kết quả",
      "Hủy thay đổi chưa commit",
      "Tạo bảng mới từ DataFrame"
    ],
    answer: 2,
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
      "Tự động viết SQL thay user",
      "Tự động tạo dashboard",
      "Quản lý cleanup an toàn hơn",
      "Bắt buộc tăng accuracy model"
    ],
    answer: 2,
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
      "Python không hỗ trợ try/except",
      "Lỗi SQL luôn không quan trọng",
      "Tránh che giấu lỗi query/connection",
      "except: pass tự rollback an toàn"
    ],
    answer: 2,
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
      "Commit password lên GitHub",
      "In password ra log",
      "Dùng env vars hoặc secret config",
      "Gửi password trong tên table"
    ],
    answer: 2,
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
      "Khi query chỉ có một dòng",
      "Khi muốn tạo index database",
      "Khi cần đọc result lớn từng phần",
      "Khi không có connection"
    ],
    answer: 2,
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
      "Vì pandas không thể đọc SQL",
      "Vì SQL không hỗ trợ aggregate",
      "Giảm dữ liệu đưa về Python",
      "Vì luôn cần SELECT * trước"
    ],
    answer: 2,
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
      "Vì SELECT * luôn sai syntax",
      "Vì chỉ chạy được với pandas",
      "Giảm dữ liệu thừa và rõ schema",
      "Vì SELECT * tự động xóa bảng"
    ],
    answer: 2,
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
      "Để database xóa dữ liệu cũ",
      "Để pandas không cần import",
      "Để giảm dữ liệu đọc về Python",
      "Để biến date thành password"
    ],
    answer: 2,
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
      "Chỉ giữ dòng amount NULL",
      "Xóa cột amount",
      "Thay NULL amount bằng 0",
      "Đổi tên amount thành 0"
    ],
    answer: 2,
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
      "Database tự sửa query",
      "pandas tự tạo table mới",
      "SQL syntax error hoặc sai logic",
      "Connection tự đóng an toàn"
    ],
    answer: 2,
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
      "Vì f-string không chạy Python",
      "Vì SQL không cho WHERE",
      "Vì input có thể đổi logic SQL",
      "Vì pandas không đọc string"
    ],
    answer: 2,
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
      "Commit từng dòng dù không cần",
      "Bỏ qua lỗi bằng except: pass",
      "Dùng transaction commit/rollback",
      "Không cần connection"
    ],
    answer: 2,
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
      "Kéo toàn bộ bảng vào pandas",
      "SELECT * rồi lưu vào list",
      "Filter/aggregate SQL hoặc chunksize",
      "Tắt filter để query đơn giản"
    ],
    answer: 2,
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
      "Python tự biết mọi timezone",
      "SQL query không chạy nữa",
      "Filter/sort date có thể sai",
      "DataFrame không có cột string"
    ],
    answer: 2,
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
      "Để tự động tăng số dòng",
      "Để tránh dùng SQL hoàn toàn",
      "Để đảm bảo cột/dtype tương thích",
      "Để database tự tạo chart"
    ],
    answer: 2,
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
      "to_sql luôn xóa table",
      "to_sql không ghi dữ liệu",
      "Schema/dtype có thể không khớp",
      "Index bắt buộc là datetime"
    ],
    answer: 2,
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
      "Khi muốn lưu vĩnh viễn mọi user",
      "Khi muốn thay thế password",
      "Khi cần lưu kết quả trung gian",
      "Khi chỉ cần Python string"
    ],
    answer: 2,
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
      "Vì CTE tự tạo index",
      "Vì CTE thay thế connection",
      "Vì chia SQL thành bước rõ ràng",
      "Vì CTE chỉ dùng để xóa"
    ],
    answer: 2,
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
      "Tự động sửa query sai",
      "Tăng accuracy model",
      "Giúp audit/debug query chạy",
      "Thay thế credential management"
    ],
    answer: 2,
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
      "Để query luôn nhanh hơn",
      "Để biến password thành DataFrame",
      "Để tránh hard-code credential",
      "Để không cần connection string"
    ],
    answer: 2,
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
      "Luôn SELECT * rồi lọc pandas",
      "Convert mọi dòng thành dict",
      "SELECT cột cần và filter sớm",
      "Không dùng WHERE cho đơn giản"
    ],
    answer: 2,
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
      "Luôn làm mọi query nhanh hơn",
      "Tự động xóa NULL",
      "Có thể tăng tốc filter/join",
      "Thay thế mọi GROUP BY"
    ],
    answer: 2,
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
      "Bắt buộc làm mất dữ liệu",
      "Không cần kiểm tra key",
      "Tận dụng database xử lý join",
      "Tự động tạo feature hoàn hảo"
    ],
    answer: 2,
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
      "SELECT query không chạy nữa",
      "DataFrame tự động bị xóa",
      "Thay đổi có thể chưa được lưu",
      "Python rollback database đã commit"
    ],
    answer: 2,
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
      "Hard-code password và SELECT *",
      "Dùng except: pass mọi lỗi",
      "Query rõ, params an toàn, log và validate",
      "Không kiểm tra row count"
    ],
    answer: 2,
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
      "Query dùng parameter binding",
      "Credential lấy từ env vars",
      "Nối trực tiếp user input vào SQL",
      "Query dùng WHERE placeholder"
    ],
    answer: 2,
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
      "Để SELECT chắc chắn nhanh hơn",
      "Để không cần kiểm tra schema",
      "Để tránh trạng thái ghi nửa vời",
      "Để tự động tạo dashboard"
    ],
    answer: 2,
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
      "fetchall toàn bộ rồi convert list",
      "SELECT * rồi lưu dictionary global",
      "Đọc chunksize hoặc aggregate SQL",
      "Tắt WHERE để tránh phức tạp"
    ],
    answer: 2,
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
      "Vì connection string không dùng được",
      "Vì log luôn xóa database",
      "Vì log có thể làm lộ credential",
      "Vì password chỉ đặt trong SELECT"
    ],
    answer: 2,
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
      "Viết query và password một dòng",
      "Không dùng transaction khi ghi",
      "Tách config, query, params và log",
      "Luôn bỏ qua lỗi để report chạy"
    ],
    answer: 2,
    explanation: "Code dễ bảo trì cần tách cấu hình, bảo vệ credential, query rõ ràng, parameter an toàn, validation output và logging hợp lý."
  }
];