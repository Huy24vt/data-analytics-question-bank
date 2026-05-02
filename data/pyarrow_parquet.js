const PYARROW_PARQUET_QUESTIONS = [
  {
    id: "arrow_f_001",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "Parquet Overview",
    question: "Parquet thường được mô tả chính xác nhất là gì?",
    code: "",
    options: [
      "Một database server cần chạy riêng",
      "Một định dạng file lưu trữ dữ liệu dạng cột",
      "Một thư viện vẽ biểu đồ tương tác",
      "Một ngôn ngữ lập trình thay Python"
    ],
    answer: 1,
    explanation: "Parquet là định dạng file lưu trữ dữ liệu dạng cột, phù hợp cho analytical workload. Nó không phải ngôn ngữ lập trình, biểu đồ hay database server."
  },
  {
    id: "arrow_f_002",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "PyArrow Overview",
    question: "PyArrow thường được dùng để làm gì trong workflow dữ liệu Python?",
    code: "",
    options: [
      "Thiết kế dashboard frontend",
      "Huấn luyện deep learning model",
      "Làm việc với Arrow Table, schema và Parquet",
      "Thay thế hoàn toàn SQL database"
    ],
    answer: 2,
    explanation: "PyArrow là thư viện Python cho Apache Arrow, hỗ trợ Table, schema, read/write Parquet và interoperability với pandas, DuckDB, Polars, Spark ở nhiều workflow."
  },
  {
    id: "arrow_f_003",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "Arrow vs Parquet",
    question: "Phân biệt nào đúng giữa Arrow và Parquet?",
    code: "",
    options: [
      "Arrow là format in-memory; Parquet là file format trên disk",
      "Arrow là database server; Parquet là ngôn ngữ lập trình",
      "Arrow dùng để vẽ chart; Parquet dùng để train model",
      "Arrow và Parquet luôn là cùng một loại file"
    ],
    answer: 0,
    explanation: "Arrow tập trung vào memory format và interoperability, còn Parquet là file format dạng cột dùng để lưu trữ dữ liệu lâu dài."
  },
  {
    id: "arrow_f_004",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "Parquet vs CSV",
    question: "Điểm khác biệt đúng giữa Parquet và CSV là gì?",
    code: "",
    options: [
      "CSV luôn nén tốt hơn Parquet",
      "Parquet chỉ lưu được đúng một cột",
      "CSV luôn giữ schema tốt hơn Parquet",
      "Parquet dạng cột; CSV là text dạng dòng"
    ],
    answer: 3,
    explanation: "Parquet là columnar format có metadata/schema và hỗ trợ compression tốt cho analytics. CSV là text format đơn giản, dễ đọc nhưng thường yếu hơn về schema và hiệu quả lưu trữ."
  },
  {
    id: "arrow_f_005",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "Columnar Storage",
    question: "Columnar storage nghĩa là gì?",
    code: "",
    options: [
      "Dữ liệu bắt buộc phải là string",
      "Dữ liệu được tổ chức theo cột",
      "Dữ liệu chỉ có một cột duy nhất",
      "Dữ liệu không thể được nén"
    ],
    answer: 1,
    explanation: "Columnar storage lưu dữ liệu theo cột, giúp đọc một số cột cần thiết hiệu quả hơn trong nhiều analytical queries."
  },
  {
    id: "arrow_f_006",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "Row-based vs Columnar",
    question: "Khi query chỉ cần vài cột trong bảng rất nhiều cột, định dạng columnar như Parquet thường có lợi thế gì?",
    code: "",
    options: [
      "Tự động tạo model dự báo",
      "Không cần schema dữ liệu",
      "Có thể đọc ít cột hơn",
      "Luôn tránh được mọi lỗi dữ liệu"
    ],
    answer: 2,
    explanation: "Với columnar format, engine có thể thực hiện column pruning, chỉ đọc các cột cần thiết cho query trong nhiều trường hợp."
  },
  {
    id: "arrow_f_007",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "Analytical Workload",
    question: "Parquet thường phù hợp với workload nào hơn?",
    code: "",
    options: [
      "Render giao diện người dùng",
      "Update từng dòng liên tục như OLTP",
      "Lưu ảnh như một pixel editor",
      "Scan, filter và aggregate dữ liệu"
    ],
    answer: 3,
    explanation: "Parquet phù hợp cho analytical workload như scan, filter, aggregation và query một số cột trên dữ liệu lớn."
  },
  {
    id: "arrow_f_008",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "PyArrow Table",
    question: "PyArrow Table thường đại diện cho điều gì?",
    code: "",
    options: [
      "Một cấu trúc dữ liệu dạng bảng theo cột",
      "Một biểu đồ cột trong dashboard",
      "Một database server chạy nền",
      "Một file package Python"
    ],
    answer: 0,
    explanation: "PyArrow Table là cấu trúc bảng theo cột, có schema rõ ràng và có thể convert qua lại với pandas DataFrame hoặc ghi ra Parquet."
  },
  {
    id: "arrow_f_009",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "pandas DataFrame Interoperability",
    question: "PyArrow có thể convert qua lại với pandas DataFrame không?",
    code: "",
    options: [
      "Không, PyArrow không liên quan pandas",
      "Có, qua Table.from_pandas và to_pandas",
      "Chỉ được nếu DataFrame có một cột",
      "Chỉ convert được dữ liệu dạng string"
    ],
    answer: 1,
    explanation: "PyArrow hỗ trợ interoperability với pandas, ví dụ pa.Table.from_pandas(df) và table.to_pandas()."
  },
  {
    id: "arrow_f_010",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "Schema",
    question: "Schema trong PyArrow/Parquet mô tả điều gì?",
    code: "",
    options: [
      "Số lượng chart trong notebook",
      "Tên database server",
      "Tên cột và kiểu dữ liệu",
      "Kích thước màn hình hiển thị"
    ],
    answer: 2,
    explanation: "Schema mô tả cấu trúc dữ liệu như tên cột, kiểu dữ liệu, nullable field và metadata liên quan."
  },
  {
    id: "arrow_f_011",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "read_table",
    question: "Trong pyarrow.parquet, pq.read_table() thường dùng để làm gì?",
    code: "",
    options: [
      "Ghi Table ra CSV",
      "Tạo chart từ Table",
      "Huấn luyện model",
      "Đọc Parquet thành PyArrow Table"
    ],
    answer: 3,
    explanation: "pq.read_table() đọc Parquet file và trả về PyArrow Table, sau đó có thể convert sang pandas hoặc xử lý tiếp."
  },
  {
    id: "arrow_f_012",
    library: "PyArrow & Parquet",
    level: "Foundation",
    topic: "write_table",
    question: "Trong pyarrow.parquet, pq.write_table() thường dùng để làm gì?",
    code: "",
    options: [
      "Ghi PyArrow Table ra file Parquet",
      "Đọc CSV thành pandas DataFrame",
      "Xóa schema khỏi Arrow Table",
      "Tạo database server mới"
    ],
    answer: 0,
    explanation: "pq.write_table(table, path) ghi một PyArrow Table ra file Parquet để lưu trữ hoặc dùng cho analytical workflow."
  },
  {
    id: "arrow_i_001",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Convert pandas to Arrow Table",
    question: "Đoạn code nào chuyển pandas DataFrame thành PyArrow Table?",
    code: "import pandas as pd\nimport pyarrow as pa\n\ndf = pd.DataFrame({\"amount\": [10, 20]})",
    options: [
      "table = pd.Table.from_arrow(df)",
      "table = pa.from_parquet(df)",
      "table = pa.Table.from_pandas(df)",
      "table = df.to_arrow_table()"
    ],
    answer: 2,
    explanation: "pa.Table.from_pandas(df) là cách phổ biến để chuyển pandas DataFrame thành PyArrow Table."
  },
  {
    id: "arrow_i_002",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Convert Arrow Table to pandas",
    question: "Đoạn code nào chuyển PyArrow Table về pandas DataFrame?",
    code: "import pyarrow as pa\n\ntable = pa.table({\"amount\": [10, 20]})",
    options: [
      "df = table.to_pandas()",
      "df = table.to_dataframe_polars()",
      "df = pa.to_pandas(table)",
      "df = table.read_pandas()"
    ],
    answer: 0,
    explanation: "table.to_pandas() chuyển PyArrow Table thành pandas DataFrame."
  },
  {
    id: "arrow_i_003",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Read Parquet",
    question: "Đoạn code nào đọc file Parquet thành PyArrow Table?",
    code: "import pyarrow.parquet as pq",
    options: [
      "table = pq.read_csv(\"data.parquet\")",
      "table = pq.open_database(\"data.parquet\")",
      "table = pq.to_table(\"data.parquet\")",
      "table = pq.read_table(\"data.parquet\")"
    ],
    answer: 3,
    explanation: "pq.read_table(\"data.parquet\") đọc file Parquet và trả về PyArrow Table."
  },
  {
    id: "arrow_i_004",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Write Parquet",
    question: "Đoạn code nào ghi PyArrow Table ra file Parquet?",
    code: "import pyarrow as pa\nimport pyarrow.parquet as pq\n\ntable = pa.table({\"amount\": [10, 20]})",
    options: [
      "pq.read_table(table, \"data.parquet\")",
      "pq.write_table(table, \"data.parquet\")",
      "table.write_csv(\"data.parquet\")",
      "pa.write_database(table, \"data.parquet\")"
    ],
    answer: 1,
    explanation: "pq.write_table(table, \"data.parquet\") ghi PyArrow Table ra file Parquet."
  },
  {
    id: "arrow_i_005",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Read Selected Columns",
    question: "Vì sao đọc selected columns từ Parquet thường hữu ích?",
    code: "",
    options: [
      "Luôn làm mất schema",
      "Bắt buộc chuyển dữ liệu thành CSV",
      "Giảm dữ liệu cần đọc khi chỉ cần vài cột",
      "Tự động xóa toàn bộ giá trị null"
    ],
    answer: 2,
    explanation: "Vì Parquet lưu dạng cột, việc đọc selected columns có thể giảm I/O và memory cho nhiều analytical workload."
  },
  {
    id: "arrow_i_006",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Column Pruning",
    question: "Column pruning nghĩa là gì?",
    code: "",
    options: [
      "Chỉ đọc các cột cần thiết cho query",
      "Xóa tất cả cột đang có null",
      "Chuyển dữ liệu từ wide sang long",
      "Nén từng dòng dữ liệu riêng lẻ"
    ],
    answer: 0,
    explanation: "Column pruning giúp tránh đọc/xử lý các cột không cần thiết, rất phù hợp với columnar format như Parquet."
  },
  {
    id: "arrow_i_007",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Schema",
    question: "Vì sao schema quan trọng khi lưu dữ liệu analytical?",
    code: "",
    options: [
      "Vì schema thay thế dữ liệu thật",
      "Vì schema chỉ dùng cho chart",
      "Vì schema tự sửa business logic",
      "Vì schema giúp kiểm soát tên cột và dtype"
    ],
    answer: 3,
    explanation: "Schema rõ ràng giúp giảm lỗi kiểu dữ liệu, hỗ trợ interoperability và tránh mismatch khi append hoặc đọc nhiều file."
  },
  {
    id: "arrow_i_008",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Field",
    question: "Field trong PyArrow schema thường gồm thông tin nào?",
    code: "",
    options: [
      "Tên chart và màu sắc",
      "Tên cột, kiểu dữ liệu và nullable",
      "Số dòng của toàn bộ dataset",
      "Tên notebook đang chạy"
    ],
    answer: 1,
    explanation: "Field mô tả một cột trong schema, gồm tên, data type và thông tin nullable ở mức concept."
  },
  {
    id: "arrow_i_009",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Data Types",
    question: "Kiểu dữ liệu trong schema ảnh hưởng đến điều gì?",
    code: "",
    options: [
      "Chỉ ảnh hưởng đến màu biểu đồ",
      "Không ảnh hưởng gì đến query",
      "Cách dữ liệu được lưu, đọc và tính toán",
      "Chỉ ảnh hưởng đến tên file"
    ],
    answer: 2,
    explanation: "Data type quyết định cách dữ liệu được encode, validate và xử lý. Ví dụ amount dạng string sẽ gây khó khăn khi tính tổng so với numeric type."
  },
  {
    id: "arrow_i_010",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Nullable Field Awareness",
    question: "Nullable field nghĩa là gì ở mức concept?",
    code: "",
    options: [
      "Field đó bắt buộc là string",
      "Field đó không thể ghi Parquet",
      "Field đó luôn là partition column",
      "Field đó cho phép giá trị null"
    ],
    answer: 3,
    explanation: "Nullable field cho phép cột có giá trị null. Non-nullable field thường kỳ vọng mọi row đều có giá trị hợp lệ."
  },
  {
    id: "arrow_i_011",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Compression",
    question: "Compression trong Parquet thường có trade-off nào?",
    code: "",
    options: [
      "Giảm dung lượng nhưng có thể tốn CPU",
      "Luôn làm file lớn hơn ban đầu",
      "Luôn làm query sai kết quả",
      "Chỉ dùng được với dữ liệu string"
    ],
    answer: 0,
    explanation: "Compression giúp giảm storage và I/O, nhưng cần CPU để nén/giải nén. Hiệu quả phụ thuộc codec, dữ liệu và workload."
  },
  {
    id: "arrow_i_012",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Snappy / Gzip / Zstd Awareness",
    question: "Snappy, Gzip và Zstd trong Parquet thường là gì?",
    code: "",
    options: [
      "Các kiểu join trong SQL",
      "Các compression codec",
      "Các loại index của pandas",
      "Các database server"
    ],
    answer: 1,
    explanation: "Snappy, Gzip và Zstd là các compression codec thường gặp khi lưu Parquet, mỗi loại có trade-off khác nhau về dung lượng và tốc độ."
  },
  {
    id: "arrow_i_013",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Partitioned Dataset",
    question: "Partitioned dataset thường giúp ích gì?",
    code: "",
    options: [
      "Làm mất toàn bộ schema",
      "Bắt buộc mọi cột thành string",
      "Chuyển Parquet thành database server",
      "Tổ chức dữ liệu để lọc hiệu quả hơn"
    ],
    answer: 3,
    explanation: "Partitioning giúp engine có thể bỏ qua một số partition không liên quan khi filter theo cột partition, giảm lượng dữ liệu cần scan."
  },
  {
    id: "arrow_i_014",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Hive-style Partitioning Awareness",
    question: "Hive-style partitioning thường có dạng thư mục nào?",
    code: "",
    options: [
      "date_2026_04_27_category_A.csv",
      "date=2026-04-27/category=A/",
      "partition.csv/header=true",
      "schema.parquet/table.sql"
    ],
    answer: 1,
    explanation: "Hive-style partitioning thường dùng dạng key=value trong đường dẫn thư mục, ví dụ date=2026-04-27/category=A/."
  },
  {
    id: "arrow_i_015",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Dataset API",
    question: "pyarrow.dataset API thường hữu ích nhất khi nào?",
    code: "",
    options: [
      "Khi chỉ cần vẽ một chart đơn",
      "Khi muốn tạo frontend app",
      "Khi làm việc với nhiều file hoặc partition",
      "Khi muốn train neural network"
    ],
    answer: 2,
    explanation: "pyarrow.dataset giúp scan và query dataset gồm nhiều file/partition, thay vì chỉ đọc một file đơn lẻ."
  },
  {
    id: "arrow_i_016",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Multiple Parquet Files",
    question: "Khi dữ liệu được lưu thành nhiều file Parquet cùng schema, cách tiếp cận nào thường hợp lý?",
    code: "",
    options: [
      "Đổi tất cả file thành .csv",
      "Chỉ đọc file đầu tiên",
      "Gộp bằng cách copy text thủ công",
      "Dùng dataset API hoặc engine đọc nhiều file"
    ],
    answer: 3,
    explanation: "Với nhiều file Parquet cùng schema, dataset API hoặc công cụ như DuckDB/Polars/Spark có thể đọc chúng như một dataset logic."
  },
  {
    id: "arrow_i_017",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Null Handling",
    question: "Null trong dữ liệu Parquet/Arrow thường biểu thị điều gì?",
    code: "",
    options: [
      "Giá trị số 0",
      "Chuỗi rỗng chắc chắn",
      "Tên cột bị lỗi",
      "Giá trị bị thiếu hoặc không có"
    ],
    answer: 3,
    explanation: "Null biểu thị missing value. Nó khác với 0 hoặc chuỗi rỗng, vì 0 và chuỗi rỗng vẫn là giá trị cụ thể."
  },
  {
    id: "arrow_i_018",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Date / Timestamp Type",
    question: "Vì sao cần chú ý kiểu date/timestamp khi lưu Parquet?",
    code: "",
    options: [
      "Vì timestamp không thể lưu trong Parquet",
      "Vì date bắt buộc phải lưu dạng float",
      "Vì mọi tool luôn hiểu timestamp giống nhau",
      "Vì ảnh hưởng filter ngày, timezone và đọc lại dữ liệu"
    ],
    answer: 3,
    explanation: "Date/timestamp cần được lưu đúng kiểu để filter, aggregate theo thời gian và trao đổi giữa công cụ ít lỗi hơn. Timezone cũng cần được xử lý nhất quán."
  },
  {
    id: "arrow_i_019",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "String / Categorical Awareness",
    question: "Với cột category lặp lại nhiều giá trị, Parquet có thể có lợi thế gì so với CSV?",
    code: "",
    options: [
      "Luôn biến category thành số đúng logic",
      "Tự động xóa category hiếm",
      "Có thể lưu hiệu quả hơn nhờ encoding/compression",
      "Không lưu được dữ liệu string"
    ],
    answer: 2,
    explanation: "Parquet hỗ trợ encoding và compression, nên các cột category lặp lại nhiều có thể lưu hiệu quả hơn CSV trong nhiều trường hợp."
  },
  {
    id: "arrow_i_020",
    library: "PyArrow & Parquet",
    level: "Intermediate",
    topic: "Interoperability with pandas",
    question: "Lợi ích thực tế của Parquet trong pandas workflow là gì?",
    code: "",
    options: [
      "Bắt buộc thay mọi DataFrame bằng SQL",
      "Không cần kiểm tra dtype nữa",
      "Chỉ lưu được một dòng dữ liệu",
      "Lưu/đọc dữ liệu với schema và compression tốt hơn CSV"
    ],
    answer: 3,
    explanation: "Parquet thường giữ kiểu dữ liệu tốt hơn CSV, hỗ trợ nén và đọc cột chọn lọc tốt hơn trong nhiều workflow phân tích."
  },
  {
    id: "arrow_a_001",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Filter Pushdown Awareness",
    question: "Filter pushdown khi đọc Parquet nghĩa là gì?",
    code: "",
    options: [
      "Lọc gần bước đọc để bỏ qua dữ liệu không cần",
      "Đọc toàn bộ dữ liệu rồi mới lọc sau",
      "Chuyển mọi filter thành biểu đồ",
      "Xóa toàn bộ row group khỏi file"
    ],
    answer: 0,
    explanation: "Filter pushdown giúp engine dùng metadata hoặc partition information để giảm dữ liệu cần scan, nếu điều kiện và format hỗ trợ."
  },
  {
    id: "arrow_a_002",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Row Group Basics",
    question: "Row group trong Parquet ở mức cơ bản là gì?",
    code: "",
    options: [
      "Một dòng duy nhất trong CSV",
      "Một database table bắt buộc",
      "Một khối dữ liệu có metadata trong file Parquet",
      "Một loại compression codec"
    ],
    answer: 2,
    explanation: "Parquet chia dữ liệu thành row groups. Metadata theo row group có thể hỗ trợ skip một số phần dữ liệu khi filter phù hợp."
  },
  {
    id: "arrow_a_003",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Metadata Basics",
    question: "Metadata trong Parquet thường giúp ích gì?",
    code: "",
    options: [
      "Thay thế toàn bộ dữ liệu thật",
      "Tự động tạo dashboard",
      "Lưu schema, row groups và statistics",
      "Bắt buộc mọi cột thành string"
    ],
    answer: 2,
    explanation: "Parquet metadata có thể chứa schema, row group info và statistics như min/max, giúp engine tối ưu đọc dữ liệu trong một số trường hợp."
  },
  {
    id: "arrow_a_004",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Schema Evolution Awareness",
    question: "Schema evolution nghĩa là gì?",
    code: "",
    options: [
      "Dữ liệu tự động sạch hơn theo thời gian",
      "Compression codec biến thành database",
      "File Parquet tự động thành CSV",
      "Schema thay đổi theo thời gian"
    ],
    answer: 3,
    explanation: "Schema evolution xảy ra khi cấu trúc dữ liệu thay đổi giữa các batch/version. Cần quản lý cẩn thận để tránh lỗi đọc hoặc mismatch."
  },
  {
    id: "arrow_a_005",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Schema Mismatch",
    question: "Khi đọc nhiều file Parquet cùng folder, schema mismatch có thể gây vấn đề gì?",
    code: "",
    options: [
      "Tự động làm accuracy model tăng",
      "Làm file nhỏ hơn chắc chắn",
      "Có thể lỗi hoặc cần reconcile schema",
      "Không ảnh hưởng gì trong mọi trường hợp"
    ],
    answer: 2,
    explanation: "Nếu các file có kiểu cột hoặc tên cột không nhất quán, việc đọc như một dataset có thể lỗi hoặc tạo kết quả khó kiểm soát."
  },
  {
    id: "arrow_a_006",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Partitioning vs Compression",
    question: "Partitioning khác compression ở điểm nào?",
    code: "",
    options: [
      "Partitioning và compression luôn giống nhau",
      "Compression dùng để chia thư mục theo date",
      "Partitioning tổ chức dữ liệu; compression giảm dung lượng",
      "Partitioning chỉ dùng để nén dữ liệu"
    ],
    answer: 2,
    explanation: "Partitioning là cách tổ chức dataset, còn compression là cách mã hóa dữ liệu để giảm dung lượng file. Hai kỹ thuật có mục tiêu khác nhau."
  },
  {
    id: "arrow_a_007",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Partitioned Dataset",
    question: "Vì sao không nên partition theo cột có cardinality quá cao nếu không có lý do rõ ràng?",
    code: "",
    options: [
      "Vì Parquet không hỗ trợ partition",
      "Vì partition luôn làm mất dữ liệu",
      "Vì cardinality cao luôn là lỗi dữ liệu",
      "Vì dễ tạo quá nhiều file/thư mục nhỏ"
    ],
    answer: 3,
    explanation: "Partition quá chi tiết có thể tạo nhiều small files, tăng overhead đọc metadata và làm workflow phức tạp hơn."
  },
  {
    id: "arrow_a_008",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Large File Workflow",
    question: "Khi làm việc với file Parquet rất lớn, cách nào thường hợp lý hơn?",
    code: "",
    options: [
      "Luôn đọc toàn bộ mọi cột vào pandas",
      "Chuyển Parquet sang CSV rồi mới lọc",
      "Mở file bằng text editor và sửa tay",
      "Đọc selected columns và filter trước khi materialize"
    ],
    answer: 3,
    explanation: "Với dữ liệu lớn, nên tận dụng column pruning/filter pushdown và chỉ materialize phần cần thiết để giảm memory và I/O."
  },
  {
    id: "arrow_a_009",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Interoperability with DuckDB",
    question: "DuckDB thường tương tác với Parquet như thế nào trong analytics workflow?",
    code: "",
    options: [
      "Có thể query trực tiếp file Parquet bằng SQL",
      "Bắt buộc convert Parquet thành Excel trước",
      "Chỉ đọc được Parquet nếu không có schema",
      "Không thể đọc file Parquet"
    ],
    answer: 0,
    explanation: "DuckDB có thể query Parquet trực tiếp, giúp làm SQL analytics trên file mà không cần load vào database table trước."
  },
  {
    id: "arrow_a_010",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Interoperability with Polars",
    question: "Polars thường làm việc với Parquet như thế nào?",
    code: "",
    options: [
      "Chỉ đọc được CSV, không đọc Parquet",
      "Có thể read/scan Parquet và dùng lazy query",
      "Bắt buộc chuyển Parquet thành JSON",
      "Chỉ dùng Parquet để vẽ biểu đồ"
    ],
    answer: 1,
    explanation: "Polars hỗ trợ đọc Parquet và lazy scan Parquet, phù hợp với pipeline analytics hiệu năng cao."
  },
  {
    id: "arrow_a_011",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Interoperability with Spark Awareness",
    question: "Vì sao Parquet phổ biến trong Spark/data lake workflow?",
    code: "",
    options: [
      "Vì Parquet là ngôn ngữ lập trình của Spark",
      "Vì Spark chỉ đọc được Parquet",
      "Vì Parquet cần database server riêng",
      "Vì Parquet có schema, compression và columnar storage"
    ],
    answer: 3,
    explanation: "Parquet phổ biến trong data lake/Spark vì hỗ trợ columnar storage, compression, schema và đọc chọn cột hiệu quả cho analytical workload."
  },
  {
    id: "arrow_a_012",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Performance Basics",
    question: "Phát biểu nào đúng về hiệu năng của Parquet so với CSV?",
    code: "",
    options: [
      "Parquet luôn tốt hơn CSV trong mọi tác vụ",
      "CSV luôn nhanh hơn Parquet với mọi query",
      "Parquet không hỗ trợ compression",
      "Parquet thường tốt hơn cho analytics, nhưng không phải luôn luôn"
    ],
    answer: 3,
    explanation: "Parquet thường tốt cho scan/filter/aggregate và đọc selected columns, nhưng CSV vẫn đơn giản và phù hợp cho một số tình huống nhỏ, trao đổi nhanh hoặc human-readable."
  },
  {
    id: "arrow_a_013",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Storage Efficiency",
    question: "Vì sao Parquet thường tiết kiệm dung lượng hơn CSV trong nhiều dataset?",
    code: "",
    options: [
      "Vì Parquet tự động xóa dữ liệu hiếm",
      "Vì Parquet chỉ lưu 10 dòng đầu",
      "Vì Parquet không lưu tên cột",
      "Vì lưu dạng cột và hỗ trợ encoding/compression"
    ],
    answer: 3,
    explanation: "Parquet có thể nén và encode dữ liệu theo cột hiệu quả, đặc biệt với cột có pattern lặp lại hoặc kiểu dữ liệu rõ ràng."
  },
  {
    id: "arrow_a_014",
    library: "PyArrow & Parquet",
    level: "Advanced",
    topic: "Best Practice for Analytics Data Storage",
    question: "Best practice nào phù hợp khi lưu dữ liệu curated cho analytics?",
    code: "",
    options: [
      "Luôn lưu mọi thứ thành CSV không schema",
      "Dùng schema rõ, dtype đúng, compression và partition hợp lý",
      "Partition theo user_id trong mọi trường hợp",
      "Không cần kiểm tra null hoặc timestamp"
    ],
    answer: 1,
    explanation: "Dữ liệu curated nên có schema ổn định, dtype đúng, compression hợp lý và partition có chủ đích để hỗ trợ đọc/query hiệu quả."
  },
  {
    id: "arrow_e_001",
    library: "PyArrow & Parquet",
    level: "Expert",
    topic: "Dataset API",
    question: "Khi nào dataset API thường phù hợp hơn pq.read_table() trên một file đơn?",
    code: "",
    options: [
      "Khi chỉ muốn tạo một biến Python int",
      "Khi muốn vẽ chart trực tiếp",
      "Khi đọc nhiều file, partition hoặc cần filter/projection",
      "Khi không có dữ liệu dạng bảng"
    ],
    answer: 2,
    explanation: "pq.read_table() phù hợp cho file đơn. Dataset API phù hợp hơn khi dữ liệu nằm trong nhiều file/partition và cần scan/filter/project ở cấp dataset."
  },
  {
    id: "arrow_e_002",
    library: "PyArrow & Parquet",
    level: "Expert",
    topic: "Schema Evolution Awareness",
    question: "Trong data lake dùng nhiều file Parquet, vì sao schema evolution cần được quản lý cẩn thận?",
    code: "",
    options: [
      "Vì schema evolution luôn làm mất dữ liệu",
      "Vì Parquet không có schema",
      "Vì schema chỉ dùng cho giao diện",
      "Vì file cũ/mới có thể khác schema và gây lỗi downstream"
    ],
    answer: 3,
    explanation: "Khi schema thay đổi theo thời gian, cần quy ước rõ về thêm cột, đổi kiểu, nullable field và compatibility để tránh lỗi downstream."
  },
  {
    id: "arrow_e_003",
    library: "PyArrow & Parquet",
    level: "Expert",
    topic: "Partitioning Strategy",
    question: "Chiến lược partition nào thường hợp lý hơn cho analytics dataset?",
    code: "",
    options: [
      "Partition theo mọi cột để luôn nhanh hơn",
      "Partition theo unique ID trong mọi trường hợp",
      "Partition theo cột hay filter và cardinality vừa phải",
      "Không bao giờ dùng partition trong dataset"
    ],
    answer: 2,
    explanation: "Partition nên dựa trên pattern query. Cột partition nên giúp skip dữ liệu hiệu quả nhưng không tạo quá nhiều small files hoặc thư mục."
  },
  {
    id: "arrow_e_004",
    library: "PyArrow & Parquet",
    level: "Expert",
    topic: "Common Errors",
    question: "Lỗi phổ biến nào có thể xảy ra khi append dữ liệu mới vào folder Parquet hiện có?",
    code: "",
    options: [
      "Dữ liệu mới khác schema/dtype với dữ liệu cũ",
      "Parquet tự convert mọi dtype đúng business logic",
      "Append luôn xóa dữ liệu cũ",
      "Parquet không cho nhiều file trong một folder"
    ],
    answer: 0,
    explanation: "Khi append batch mới, cần kiểm tra schema, dtype, cột thiếu/thừa và partition layout để đảm bảo dataset đọc được nhất quán."
  }
];