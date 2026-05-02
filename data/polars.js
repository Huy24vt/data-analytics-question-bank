const POLARS_QUESTIONS = [
  {
    id: "pl_f_001",
    library: "Polars",
    level: "Foundation",
    topic: "Import & Basics",
    question: "Alias phổ biến nhất khi import Polars là gì?",
    code: "import polars as ?",
    options: [
      "pd",
      "np",
      "pl",
      "px"
    ],
    answer: 2,
    explanation: "Polars thường được import bằng alias pl: import polars as pl. pd dùng cho pandas, np cho NumPy, px cho plotly.express."
  },
  {
    id: "pl_f_002",
    library: "Polars",
    level: "Foundation",
    topic: "Polars Overview",
    question: "Polars chủ yếu được dùng để làm gì?",
    code: "",
    options: [
      "Xử lý và phân tích dữ liệu dạng bảng",
      "Thiết kế giao diện web phía frontend",
      "Huấn luyện deep learning model",
      "Quản lý tiến trình hệ điều hành"
    ],
    answer: 0,
    explanation: "Polars là thư viện xử lý dữ liệu dạng bảng, tương tự pandas nhưng có expression API, lazy API và tối ưu hiệu năng tốt cho nhiều workflow dữ liệu."
  },
  {
    id: "pl_f_003",
    library: "Polars",
    level: "Foundation",
    topic: "DataFrame Creation",
    question: "Cách nào tạo Polars DataFrame từ dictionary?",
    code: "",
    options: [
      "pl.DataFrame({\"value\": [1, 2, 3]})",
      "pl.Series({\"value\": [1, 2, 3]})",
      "pl.LazyFrame([\"value\", [1, 2, 3]])",
      "pl.read_dict({\"value\": [1, 2, 3]})"
    ],
    answer: 0,
    explanation: "pl.DataFrame({...}) là cách phổ biến để tạo Polars DataFrame từ dictionary gồm tên cột và list giá trị."
  },
  {
    id: "pl_f_004",
    library: "Polars",
    level: "Foundation",
    topic: "Series",
    question: "Trong Polars, Series thường đại diện cho điều gì?",
    code: "",
    options: [
      "Một cột dữ liệu một chiều",
      "Một bảng dữ liệu nhiều cột",
      "Một lazy query chưa collect",
      "Một file dữ liệu trên ổ đĩa"
    ],
    answer: 0,
    explanation: "Series là cấu trúc một chiều, thường tương ứng với một cột trong DataFrame."
  },
  {
    id: "pl_f_005",
    library: "Polars",
    level: "Foundation",
    topic: "DataFrame vs LazyFrame",
    question: "Khác biệt cơ bản giữa DataFrame và LazyFrame trong Polars là gì?",
    code: "",
    options: [
      "DataFrame chạy ngay, LazyFrame chạy khi collect()",
      "DataFrame là query plan, LazyFrame là kết quả đã chạy",
      "DataFrame chỉ xử lý string, LazyFrame chỉ xử lý số",
      "DataFrame luôn đọc CSV, LazyFrame luôn đọc parquet"
    ],
    answer: 0,
    explanation: "DataFrame thực thi thao tác ngay theo eager API. LazyFrame trì hoãn execution, tối ưu query plan và materialize kết quả khi gọi collect()."
  },
  {
    id: "pl_f_006",
    library: "Polars",
    level: "Foundation",
    topic: "Eager API",
    question: "Eager API trong Polars nghĩa là gì?",
    code: "",
    options: [
      "Thao tác chạy ngay và trả kết quả trực tiếp",
      "Thao tác chỉ tạo query plan chưa chạy",
      "Thao tác chỉ kiểm tra schema dữ liệu",
      "Thao tác chỉ áp dụng cho cột text"
    ],
    answer: 0,
    explanation: "Eager API thực thi ngay từng thao tác trên DataFrame, phù hợp cho workflow nhỏ hoặc khi cần kiểm tra kết quả nhanh."
  },
  {
    id: "pl_f_007",
    library: "Polars",
    level: "Foundation",
    topic: "Lazy API",
    question: "Lazy API trong Polars có đặc điểm nào?",
    code: "",
    options: [
      "Trì hoãn thực thi và tối ưu query trước khi chạy",
      "Thực thi ngay từng bước giống eager DataFrame",
      "Không cho phép dùng filter hoặc select",
      "Tự động collect sau mỗi expression"
    ],
    answer: 0,
    explanation: "Lazy API tạo query plan thay vì chạy ngay. Polars có thể tối ưu như predicate pushdown hoặc projection pushdown trước khi collect()."
  },
  {
    id: "pl_f_008",
    library: "Polars",
    level: "Foundation",
    topic: "collect",
    question: "Trong Lazy API, collect() dùng để làm gì?",
    code: "",
    options: [
      "Thực thi lazy query và trả về DataFrame",
      "Xóa query plan và toàn bộ dữ liệu nguồn",
      "Tạo chart từ LazyFrame hiện tại",
      "Đổi tên toàn bộ cột trong LazyFrame"
    ],
    answer: 0,
    explanation: "collect() materialize LazyFrame, tức thực thi query plan đã xây dựng và trả kết quả dưới dạng DataFrame."
  },
  {
    id: "pl_f_009",
    library: "Polars",
    level: "Foundation",
    topic: "read_csv / read_parquet",
    question: "Hàm nào đọc CSV trực tiếp thành DataFrame theo eager API?",
    code: "",
    options: [
      "pl.read_csv()",
      "pl.scan_csv()",
      "pl.collect_csv()",
      "pl.lazy_csv()"
    ],
    answer: 0,
    explanation: "pl.read_csv() đọc CSV và trả về DataFrame ngay. pl.scan_csv() tạo LazyFrame để xử lý lazy."
  },
  {
    id: "pl_f_010",
    library: "Polars",
    level: "Foundation",
    topic: "scan_csv / scan_parquet",
    question: "pl.scan_csv() khác pl.read_csv() ở điểm nào?",
    code: "",
    options: [
      "scan_csv tạo LazyFrame, read_csv tạo DataFrame",
      "scan_csv tạo DataFrame, read_csv tạo LazyFrame",
      "scan_csv chỉ đọc Excel, read_csv chỉ đọc CSV",
      "scan_csv luôn drop duplicate, read_csv thì không"
    ],
    answer: 0,
    explanation: "scan_csv dùng lazy execution, phù hợp khi muốn tối ưu query trước khi chạy. read_csv là eager và đọc dữ liệu ngay vào DataFrame."
  },
  {
    id: "pl_f_011",
    library: "Polars",
    level: "Foundation",
    topic: "Schema",
    question: "Schema trong Polars mô tả điều gì?",
    code: "",
    options: [
      "Tên cột và kiểu dữ liệu của các cột",
      "Số lượng dòng duplicate theo từng cột",
      "Tên file nguồn và đường dẫn dữ liệu",
      "Biểu đồ phân phối của từng biến"
    ],
    answer: 0,
    explanation: "Schema cho biết cấu trúc DataFrame như tên cột và dtype của từng cột, giúp kiểm tra dữ liệu trước khi xử lý."
  },
  {
    id: "pl_f_012",
    library: "Polars",
    level: "Foundation",
    topic: "dtypes",
    question: "dtypes trong Polars dùng để kiểm tra gì?",
    code: "",
    options: [
      "Kiểu dữ liệu của các cột",
      "Số dòng trong DataFrame",
      "Tên database đang kết nối",
      "Số file đã đọc vào memory"
    ],
    answer: 0,
    explanation: "df.dtypes trả về danh sách kiểu dữ liệu tương ứng với các cột trong DataFrame."
  },
  {
    id: "pl_f_013",
    library: "Polars",
    level: "Foundation",
    topic: "select",
    question: "select trong Polars thường dùng để làm gì?",
    code: "",
    options: [
      "Chọn cột hoặc tạo output mới từ expression",
      "Thêm cột mới và luôn giữ toàn bộ cột cũ",
      "Xóa file dữ liệu sau khi xử lý xong",
      "Huấn luyện mô hình trực tiếp từ DataFrame"
    ],
    answer: 0,
    explanation: "select tạo DataFrame mới gồm các cột hoặc expression được chọn. Nếu muốn thêm cột vào DataFrame hiện tại, thường dùng with_columns."
  },
  {
    id: "pl_f_014",
    library: "Polars",
    level: "Foundation",
    topic: "with_columns",
    question: "with_columns trong Polars thường dùng để làm gì?",
    code: "",
    options: [
      "Thêm hoặc thay đổi cột bằng expression",
      "Chỉ chọn một số cột làm output mới",
      "Chỉ đọc dữ liệu từ file parquet",
      "Chỉ đổi kiểu dữ liệu của index"
    ],
    answer: 0,
    explanation: "with_columns dùng để tạo cột mới hoặc thay đổi cột hiện có, trong khi vẫn giữ các cột khác của DataFrame."
  },
  {
    id: "pl_f_015",
    library: "Polars",
    level: "Foundation",
    topic: "filter",
    question: "filter trong Polars dùng để làm gì?",
    code: "",
    options: [
      "Lọc các dòng thỏa điều kiện",
      "Chọn tất cả cột trong bảng",
      "Tạo aggregation theo group",
      "Đọc schema của file nguồn"
    ],
    answer: 0,
    explanation: "filter nhận expression điều kiện và giữ lại các dòng thỏa điều kiện đó."
  },
  {
    id: "pl_f_016",
    library: "Polars",
    level: "Foundation",
    topic: "Expressions",
    question: "pl.col(\"amount\") trong Polars đại diện cho điều gì?",
    code: "",
    options: [
      "Expression tham chiếu tới cột amount",
      "Chuỗi Python có giá trị là amount",
      "DataFrame mới chỉ có cột amount",
      "File CSV có tên là amount"
    ],
    answer: 0,
    explanation: "pl.col(\"amount\") là expression tham chiếu đến cột amount. Nó được dùng trong select, with_columns, filter, group_by..."
  },
  {
    id: "pl_f_017",
    library: "Polars",
    level: "Foundation",
    topic: "sort",
    question: "Hàm nào dùng để sắp xếp DataFrame theo cột amount?",
    code: "",
    options: [
      "df.sort(\"amount\")",
      "df.order(\"amount\")",
      "df.arrange(\"amount\")",
      "df.sorted(\"amount\")"
    ],
    answer: 0,
    explanation: "df.sort(\"amount\") là cách phổ biến để sort DataFrame theo một cột trong Polars."
  },
  {
    id: "pl_f_018",
    library: "Polars",
    level: "Foundation",
    topic: "head / tail",
    question: "df.head(5) dùng để làm gì?",
    code: "",
    options: [
      "Xem 5 dòng đầu tiên của DataFrame",
      "Xem 5 dòng cuối cùng của DataFrame",
      "Xóa 5 dòng đầu tiên khỏi DataFrame",
      "Chọn 5 cột đầu tiên của DataFrame"
    ],
    answer: 0,
    explanation: "head(5) trả về 5 dòng đầu tiên. tail(5) trả về 5 dòng cuối cùng."
  },
  {
    id: "pl_i_001",
    library: "Polars",
    level: "Intermediate",
    topic: "DataFrame Creation",
    question: "Kết quả của đoạn code sau có bao nhiêu dòng?",
    code: "import polars as pl\ndf = pl.DataFrame({\"value\": [1, 2, 3]})\nprint(df.height)",
    options: [
      "3",
      "1",
      "0",
      "value"
    ],
    answer: 0,
    explanation: "df.height trả về số dòng của DataFrame. Cột value có 3 phần tử nên DataFrame có 3 dòng."
  },
  {
    id: "pl_i_002",
    library: "Polars",
    level: "Intermediate",
    topic: "select",
    question: "Kết quả logic của đoạn code sau là gì?",
    code: "import polars as pl\ndf = pl.DataFrame({\"amount\": [10, 20]})\nresult = df.select(pl.col(\"amount\") * 2)",
    options: [
      "Tạo DataFrame mới chỉ gồm amount đã nhân 2",
      "Thêm amount_x2 vào df gốc và giữ mọi cột",
      "Lọc các dòng có amount lớn hơn 2",
      "Gây lỗi vì select không nhận expression"
    ],
    answer: 0,
    explanation: "select trả về DataFrame mới từ expression được chọn. Ở đây output chỉ gồm expression amount * 2."
  },
  {
    id: "pl_i_003",
    library: "Polars",
    level: "Intermediate",
    topic: "alias",
    question: "alias() trong Polars expression dùng để làm gì?",
    code: "",
    options: [
      "Đặt tên cho cột kết quả của expression",
      "Xóa một cột khỏi DataFrame hiện tại",
      "Chuyển DataFrame eager thành LazyFrame",
      "Đọc file parquet thành DataFrame"
    ],
    answer: 0,
    explanation: "alias() đặt tên cho output của expression, ví dụ (pl.col(\"amount\") * 2).alias(\"amount_x2\")."
  },
  {
    id: "pl_i_004",
    library: "Polars",
    level: "Intermediate",
    topic: "with_columns",
    question: "Đoạn code nào tạo thêm cột amount_x2 và vẫn giữ các cột cũ?",
    code: "import polars as pl\ndf = pl.DataFrame({\"amount\": [10, 20]})",
    options: [
      "df.with_columns((pl.col(\"amount\") * 2).alias(\"amount_x2\"))",
      "df.select((pl.col(\"amount\") * 2).alias(\"amount_x2\"))",
      "df.filter((pl.col(\"amount\") * 2).alias(\"amount_x2\"))",
      "df.group_by(\"amount\").agg(pl.col(\"amount_x2\").sum())"
    ],
    answer: 0,
    explanation: "with_columns thêm hoặc thay đổi cột trong DataFrame và giữ lại các cột hiện có. select chỉ trả về các expression được chọn."
  },
  {
    id: "pl_i_005",
    library: "Polars",
    level: "Intermediate",
    topic: "filter",
    question: "Đoạn code nào lọc các dòng có amount lớn hơn 100?",
    code: "import polars as pl\ndf = pl.DataFrame({\"amount\": [50, 150]})",
    options: [
      "df.filter(pl.col(\"amount\") > 100)",
      "df.select(pl.col(\"amount\") > 100)",
      "df.with_columns(pl.col(\"amount\") > 100)",
      "df.sort(pl.col(\"amount\") > 100)"
    ],
    answer: 0,
    explanation: "filter giữ lại các dòng thỏa điều kiện. select sẽ tạo cột boolean, không lọc dòng."
  },
  {
    id: "pl_i_006",
    library: "Polars",
    level: "Intermediate",
    topic: "Expressions",
    question: "Điểm khác biệt đúng giữa pl.col(\"amount\") và \"amount\" trong expression là gì?",
    code: "",
    options: [
      "pl.col(\"amount\") là expression cột, \"amount\" là string",
      "\"amount\" luôn được hiểu là cột trong mọi expression",
      "pl.col(\"amount\") là DataFrame, \"amount\" là Series",
      "Hai cách luôn giống nhau trong mọi API của Polars"
    ],
    answer: 0,
    explanation: "Trong expression context, pl.col(\"amount\") đại diện cho cột amount. \"amount\" chỉ là chuỗi Python bình thường, trừ khi API cụ thể chấp nhận tên cột dạng string."
  },
  {
    id: "pl_i_007",
    library: "Polars",
    level: "Intermediate",
    topic: "pl.lit",
    question: "pl.lit(1) thường dùng để làm gì?",
    code: "",
    options: [
      "Tạo literal expression với giá trị hằng 1",
      "Tham chiếu đến một cột có tên là 1",
      "Đọc file dữ liệu có tên là 1",
      "Tạo LazyFrame mới có một dòng"
    ],
    answer: 0,
    explanation: "pl.lit() tạo expression từ giá trị hằng, hữu ích khi cần dùng constant trong select, with_columns hoặc when/then."
  },
  {
    id: "pl_i_008",
    library: "Polars",
    level: "Intermediate",
    topic: "cast",
    question: "cast trong Polars dùng để làm gì?",
    code: "",
    options: [
      "Chuyển kiểu dữ liệu của cột",
      "Sắp xếp dòng theo một cột",
      "Ghép hai DataFrame theo key",
      "Tạo aggregation theo group"
    ],
    answer: 0,
    explanation: "cast chuyển dtype của cột, ví dụ pl.col(\"value\").cast(pl.Int64) để chuyển sang số nguyên."
  },
  {
    id: "pl_i_009",
    library: "Polars",
    level: "Intermediate",
    topic: "when / then / otherwise",
    question: "when/then/otherwise trong Polars tương đương logic nào?",
    code: "",
    options: [
      "if/else dạng expression để tạo giá trị có điều kiện",
      "for-loop dùng để lặp qua từng dòng DataFrame",
      "join logic để ghép hai bảng theo key",
      "lazy scan để đọc dữ liệu từ file nguồn"
    ],
    answer: 0,
    explanation: "when/then/otherwise dùng để tạo conditional expression, ví dụ phân loại amount thành high/low dựa trên điều kiện."
  },
  {
    id: "pl_i_010",
    library: "Polars",
    level: "Intermediate",
    topic: "when / then / otherwise",
    question: "Đoạn code nào tạo cột flag = \"high\" nếu amount > 100, ngược lại \"low\"?",
    code: "import polars as pl\ndf = pl.DataFrame({\"amount\": [50, 150]})",
    options: [
      "df.with_columns(pl.when(pl.col(\"amount\") > 100).then(pl.lit(\"high\")).otherwise(pl.lit(\"low\")).alias(\"flag\"))",
      "df.with_columns(pl.col(\"amount\").filter(pl.col(\"amount\") > 100).alias(\"flag\"))",
      "df.select(pl.col(\"amount\").then(pl.lit(\"high\")).otherwise(pl.lit(\"low\")).alias(\"flag\"))",
      "df.filter(pl.when(pl.col(\"amount\") > 100).then(\"high\").otherwise(\"low\").alias(\"flag\"))"
    ],
    answer: 0,
    explanation: "Polars dùng expression API, nên conditional column cần pl.when(...).then(...).otherwise(...).alias(...)."
  },
  {
    id: "pl_i_011",
    library: "Polars",
    level: "Intermediate",
    topic: "String Operations",
    question: "Đoạn code nào chuyển cột status thành chữ thường?",
    code: "import polars as pl\ndf = pl.DataFrame({\"status\": [\"OK\", \"FAIL\"]})",
    options: [
      "df.with_columns(pl.col(\"status\").str.to_lowercase())",
      "df.with_columns(pl.col(\"status\").dt.to_lowercase())",
      "df.select(pl.col(\"status\").arr.to_lowercase())",
      "df.filter(pl.col(\"status\").str.to_lowercase())"
    ],
    answer: 0,
    explanation: "String operations trong Polars thường dùng namespace .str, ví dụ pl.col(\"status\").str.to_lowercase()."
  },
  {
    id: "pl_i_012",
    library: "Polars",
    level: "Intermediate",
    topic: "Date / Datetime Operations",
    question: "Để lấy năm từ cột date kiểu Date/Datetime, expression nào thường đúng?",
    code: "",
    options: [
      "pl.col(\"date\").dt.year()",
      "pl.col(\"date\").str.year()",
      "pl.col(\"date\").arr.year()",
      "pl.col(\"date\").name.year()"
    ],
    answer: 0,
    explanation: "Date/datetime operations trong Polars dùng namespace .dt, ví dụ pl.col(\"date\").dt.year()."
  },
  {
    id: "pl_i_013",
    library: "Polars",
    level: "Intermediate",
    topic: "Missing Values",
    question: "fill_null() trong Polars dùng để làm gì?",
    code: "",
    options: [
      "Điền giá trị thay thế cho null",
      "Xóa dòng có null trong DataFrame",
      "Đổi tên các cột có chứa null",
      "Tạo group_by theo cột null"
    ],
    answer: 0,
    explanation: "fill_null() dùng để thay thế giá trị null bằng giá trị hoặc strategy phù hợp."
  },
  {
    id: "pl_i_014",
    library: "Polars",
    level: "Intermediate",
    topic: "drop_nulls",
    question: "drop_nulls() thường dùng để làm gì?",
    code: "",
    options: [
      "Loại bỏ các dòng có null theo cột chỉ định",
      "Điền các giá trị null bằng số 0",
      "Chỉ xóa NaN trong cột kiểu float",
      "Đổi null thành chuỗi \"null\""
    ],
    answer: 0,
    explanation: "drop_nulls() loại bỏ dòng chứa null. Cần phân biệt null với NaN trong cột float."
  },
  {
    id: "pl_i_015",
    library: "Polars",
    level: "Intermediate",
    topic: "null vs NaN Awareness",
    question: "Trong Polars, null và NaN khác nhau như thế nào?",
    code: "",
    options: [
      "null là missing value, NaN là giá trị float đặc biệt",
      "null là giá trị float, NaN là missing value chung",
      "null chỉ dùng cho string, NaN chỉ dùng cho list",
      "null và NaN luôn được xử lý giống hệt nhau"
    ],
    answer: 0,
    explanation: "null biểu diễn missing value. NaN là giá trị đặc biệt của kiểu float. Một số hàm xử lý null không nhất thiết xử lý NaN."
  },
  {
    id: "pl_i_016",
    library: "Polars",
    level: "Intermediate",
    topic: "unique",
    question: "unique() trong Polars thường dùng để làm gì?",
    code: "",
    options: [
      "Lấy các dòng hoặc giá trị duy nhất",
      "Tạo cột boolean từ điều kiện",
      "Đọc file CSV thành DataFrame",
      "Chuyển DataFrame eager sang lazy"
    ],
    answer: 0,
    explanation: "unique() dùng để loại trùng và lấy các giá trị hoặc dòng duy nhất tùy cách sử dụng."
  },
  {
    id: "pl_i_017",
    library: "Polars",
    level: "Intermediate",
    topic: "duplicated",
    question: "duplicated() thường trả về gì?",
    code: "",
    options: [
      "Boolean mask cho biết dòng/giá trị có duplicate",
      "DataFrame đã được sort theo thứ tự tăng dần",
      "Schema hiện tại của DataFrame",
      "Lazy query plan chưa được collect"
    ],
    answer: 0,
    explanation: "duplicated() thường tạo mask boolean đánh dấu các giá trị hoặc dòng bị trùng."
  },
  {
    id: "pl_i_018",
    library: "Polars",
    level: "Intermediate",
    topic: "value_counts",
    question: "value_counts() thường dùng để làm gì?",
    code: "",
    options: [
      "Đếm số lần xuất hiện của từng giá trị",
      "Tính rolling mean theo từng group",
      "Join hai DataFrame theo cùng key",
      "Chuyển dtype của một cột dữ liệu"
    ],
    answer: 0,
    explanation: "value_counts() giúp tóm tắt tần suất xuất hiện của các giá trị trong một cột."
  },
  {
    id: "pl_i_019",
    library: "Polars",
    level: "Intermediate",
    topic: "Group By",
    question: "Đoạn code nào tính tổng amount theo category?",
    code: "import polars as pl\ndf = pl.DataFrame({\"category\": [\"A\", \"A\", \"B\"], \"amount\": [10, 20, 5]})",
    options: [
      "df.group_by(\"category\").agg(pl.col(\"amount\").sum())",
      "df.group_by(\"amount\").agg(pl.col(\"category\").sum())",
      "df.select(\"category\").agg(pl.col(\"amount\").sum())",
      "df.filter(\"category\").agg(pl.col(\"amount\").sum())"
    ],
    answer: 0,
    explanation: "group_by(\"category\").agg(...) là pattern phổ biến để tính aggregation theo nhóm trong Polars."
  },
  {
    id: "pl_i_020",
    library: "Polars",
    level: "Intermediate",
    topic: "Aggregation",
    question: "Trong group_by().agg(), expression pl.col(\"amount\").mean() dùng để làm gì?",
    code: "",
    options: [
      "Tính trung bình amount trong từng group",
      "Lọc các dòng có amount lớn hơn mean",
      "Đổi tên cột amount thành mean",
      "Tạo LazyFrame từ cột amount"
    ],
    answer: 0,
    explanation: "mean() là aggregation expression, tính giá trị trung bình của cột amount trong mỗi group."
  },
  {
    id: "pl_i_021",
    library: "Polars",
    level: "Intermediate",
    topic: "Join",
    question: "Inner join giữ lại những dòng nào?",
    code: "",
    options: [
      "Những dòng có key khớp ở cả hai bảng",
      "Tất cả dòng của bảng trái dù không khớp",
      "Chỉ những dòng không khớp giữa hai bảng",
      "Tất cả dòng của hai bảng không cần key"
    ],
    answer: 0,
    explanation: "Inner join chỉ giữ các key xuất hiện ở cả hai DataFrame."
  },
  {
    id: "pl_i_022",
    library: "Polars",
    level: "Intermediate",
    topic: "Left Join",
    question: "Left join giữ lại những dòng nào?",
    code: "",
    options: [
      "Tất cả dòng bảng trái, ghép bảng phải nếu key khớp",
      "Chỉ các dòng có key khớp ở cả hai bảng",
      "Tất cả dòng bảng phải, ghép bảng trái nếu key khớp",
      "Chỉ các dòng không có key khớp ở bảng phải"
    ],
    answer: 0,
    explanation: "Left join giữ toàn bộ dòng của DataFrame bên trái. Nếu không có key tương ứng ở bên phải, cột từ bảng phải sẽ null."
  },
  {
    id: "pl_i_023",
    library: "Polars",
    level: "Intermediate",
    topic: "Concatenate",
    question: "pl.concat() thường dùng để làm gì?",
    code: "",
    options: [
      "Ghép nhiều DataFrame/Series lại với nhau",
      "Lọc dữ liệu theo expression điều kiện",
      "Tạo cột null trong DataFrame",
      "Tính feature importance của model"
    ],
    answer: 0,
    explanation: "pl.concat() dùng để nối nhiều DataFrame hoặc Series theo cách phù hợp, ví dụ nối thêm dòng khi schema tương thích."
  },
  {
    id: "pl_i_024",
    library: "Polars",
    level: "Intermediate",
    topic: "Explode",
    question: "explode() thường dùng khi nào?",
    code: "",
    options: [
      "Khi muốn bung list column thành nhiều dòng",
      "Khi muốn xóa toàn bộ null trong bảng",
      "Khi muốn đọc CSV bằng lazy API",
      "Khi muốn cast string thành date"
    ],
    answer: 0,
    explanation: "explode() biến mỗi phần tử trong list column thành một dòng riêng, hữu ích khi dữ liệu có cột dạng danh sách."
  },
  {
    id: "pl_i_025",
    library: "Polars",
    level: "Intermediate",
    topic: "Window Expressions",
    question: "over() trong Polars thường dùng để làm gì?",
    code: "",
    options: [
      "Tính expression theo group và giữ số dòng gốc",
      "Đọc dữ liệu từ network theo từng phần",
      "Xóa group_by đã tạo trước đó",
      "Tạo Python loop qua từng dòng"
    ],
    answer: 0,
    explanation: "over() tạo window expression, ví dụ tính tổng amount theo category rồi gán kết quả cho từng dòng trong category đó."
  },
  {
    id: "pl_i_026",
    library: "Polars",
    level: "Intermediate",
    topic: "Lazy API",
    question: "Kết quả của df.lazy() là gì?",
    code: "",
    options: [
      "LazyFrame",
      "DataFrame eager đã collect",
      "Series",
      "Python list"
    ],
    answer: 0,
    explanation: "df.lazy() chuyển DataFrame thành LazyFrame để xây query plan lazy."
  },
  {
    id: "pl_i_027",
    library: "Polars",
    level: "Intermediate",
    topic: "collect",
    question: "Nếu lf là LazyFrame, khi nào query thực sự chạy?",
    code: "",
    options: [
      "Khi gọi lf.collect() hoặc materialize tương đương",
      "Ngay khi gọi lf.filter(...) trong lazy chain",
      "Ngay khi gọi lf.select(...) trong lazy chain",
      "Không bao giờ chạy được trong lazy mode"
    ],
    answer: 0,
    explanation: "Trong lazy mode, filter/select chỉ thêm bước vào query plan. Query thực sự chạy khi collect() materialize kết quả."
  },
  {
    id: "pl_i_028",
    library: "Polars",
    level: "Intermediate",
    topic: "Polars vs pandas",
    question: "Khác biệt tư duy quan trọng khi viết Polars so với pandas là gì?",
    code: "",
    options: [
      "Ưu tiên expression API thay vì xử lý row-by-row",
      "Polars không hỗ trợ DataFrame dạng bảng",
      "Polars chỉ dùng để vẽ chart tương tác",
      "Polars bắt buộc phải viết bằng SQL"
    ],
    answer: 0,
    explanation: "Polars mạnh khi dùng expression API có thể tối ưu và chạy song song. Việc dùng Python loop hoặc row-wise apply thường kém phù hợp hơn."
  },
  {
    id: "pl_a_001",
    library: "Polars",
    level: "Advanced",
    topic: "select vs with_columns",
    question: "Khác biệt đúng giữa select và with_columns là gì?",
    code: "",
    options: [
      "select chỉ trả expression chọn, with_columns giữ cột cũ và thêm/sửa cột",
      "select giữ cột cũ và thêm/sửa cột, with_columns chỉ trả expression chọn",
      "select chỉ dùng cho LazyFrame, with_columns chỉ dùng cho DataFrame",
      "select dùng để lọc dòng, with_columns dùng để join bảng"
    ],
    answer: 0,
    explanation: "select tạo output mới theo danh sách expression. with_columns thêm hoặc thay đổi cột nhưng giữ các cột còn lại."
  },
  {
    id: "pl_a_002",
    library: "Polars",
    level: "Advanced",
    topic: "filter vs when/then/otherwise",
    question: "filter khác when/then/otherwise ở điểm nào?",
    code: "",
    options: [
      "filter lọc dòng, when/then/otherwise tạo giá trị có điều kiện",
      "filter tạo giá trị có điều kiện, when/then/otherwise lọc dòng",
      "filter chỉ dùng trong group_by, when/then/otherwise chỉ dùng khi join",
      "filter và when/then/otherwise luôn cho cùng output"
    ],
    answer: 0,
    explanation: "filter quyết định giữ hay bỏ dòng. when/then/otherwise tạo expression điều kiện để trả giá trị khác nhau trong một cột."
  },
  {
    id: "pl_a_003",
    library: "Polars",
    level: "Advanced",
    topic: "scan_csv / scan_parquet",
    question: "Khi xử lý file lớn và chỉ cần một số cột/dòng, vì sao scan_parquet có thể hữu ích hơn read_parquet?",
    code: "",
    options: [
      "Tạo LazyFrame để tối ưu đọc phần cần thiết khi có thể",
      "Đọc toàn bộ file ngay rồi mới tối ưu sau collect",
      "Chỉ dùng cho file nhỏ đã nằm sẵn trong RAM",
      "Tự động chuyển parquet thành CSV trước khi đọc"
    ],
    answer: 0,
    explanation: "scan_parquet hỗ trợ lazy execution, có thể tận dụng projection/predicate pushdown tùy query và format, giúp giảm dữ liệu cần đọc/xử lý."
  },
  {
    id: "pl_a_004",
    library: "Polars",
    level: "Advanced",
    topic: "Predicate Pushdown Awareness",
    question: "Predicate pushdown trong lazy query nghĩa là gì?",
    code: "",
    options: [
      "Đẩy filter xuống gần bước đọc dữ liệu",
      "Đẩy sort lên cuối query bắt buộc",
      "Chuyển mọi null trong dữ liệu thành NaN",
      "Tự động tạo group_by cho mọi query"
    ],
    answer: 0,
    explanation: "Predicate pushdown giúp áp dụng filter sớm hơn trong query plan, có thể giảm số dòng cần đọc hoặc xử lý."
  },
  {
    id: "pl_a_005",
    library: "Polars",
    level: "Advanced",
    topic: "Projection Pushdown Awareness",
    question: "Projection pushdown giúp tối ưu điều gì?",
    code: "",
    options: [
      "Chỉ đọc hoặc xử lý các cột thật sự cần",
      "Chỉ giữ lại các dòng bị duplicate",
      "Tự động join toàn bộ bảng liên quan",
      "Chuyển DataFrame eager thành pandas"
    ],
    answer: 0,
    explanation: "Projection pushdown đẩy việc chọn cột xuống gần nguồn dữ liệu, tránh đọc/xử lý các cột không dùng."
  },
  {
    id: "pl_a_006",
    library: "Polars",
    level: "Advanced",
    topic: "Query Optimization",
    question: "Vì sao Lazy API có thể giúp tối ưu performance?",
    code: "",
    options: [
      "Polars thấy toàn bộ query plan trước khi chạy",
      "Lazy API luôn bỏ qua mọi phép tính nặng",
      "Lazy API không cần dữ liệu nguồn để chạy",
      "Lazy API chỉ chạy dòng đầu tiên của dữ liệu"
    ],
    answer: 0,
    explanation: "Lazy API cho phép Polars phân tích toàn bộ pipeline trước khi thực thi, từ đó áp dụng các tối ưu như pushdown và loại bỏ thao tác không cần thiết."
  },
  {
    id: "pl_a_007",
    library: "Polars",
    level: "Advanced",
    topic: "Window Expressions",
    question: "Đoạn code nào tính tổng amount theo category nhưng giữ nguyên số dòng ban đầu?",
    code: "import polars as pl\ndf = pl.DataFrame({\"category\": [\"A\", \"A\", \"B\"], \"amount\": [10, 20, 5]})",
    options: [
      "df.with_columns(pl.col(\"amount\").sum().over(\"category\").alias(\"cat_total\"))",
      "df.group_by(\"category\").agg(pl.col(\"amount\").sum().alias(\"cat_total\"))",
      "df.select(pl.col(\"amount\").sum().over(\"category\").alias(\"cat_total\"))",
      "df.filter(pl.col(\"amount\").sum().over(\"category\").alias(\"cat_total\"))"
    ],
    answer: 0,
    explanation: "over(\"category\") tạo window expression, tính tổng trong từng category và broadcast kết quả về từng dòng của group."
  },
  {
    id: "pl_a_008",
    library: "Polars",
    level: "Advanced",
    topic: "Anti Join / Semi Join Awareness",
    question: "Anti join thường trả về gì?",
    code: "",
    options: [
      "Dòng ở bảng trái không có key khớp ở bảng phải",
      "Dòng ở bảng trái có key khớp ở bảng phải",
      "Toàn bộ dòng và cột từ cả hai bảng",
      "Tích Descartes của hai bảng đầu vào"
    ],
    answer: 0,
    explanation: "Anti join hữu ích để tìm các record ở left DataFrame không tồn tại trong right DataFrame theo key."
  },
  {
    id: "pl_a_009",
    library: "Polars",
    level: "Advanced",
    topic: "Anti Join / Semi Join Awareness",
    question: "Semi join thường trả về gì?",
    code: "",
    options: [
      "Dòng bảng trái có key khớp bảng phải, chỉ giữ cột trái",
      "Dòng bảng trái không có key khớp bảng phải",
      "Toàn bộ cột từ cả bảng trái và bảng phải",
      "Chỉ các dòng duplicate theo key join"
    ],
    answer: 0,
    explanation: "Semi join dùng để lọc bảng trái theo key tồn tại trong bảng phải, không thêm cột từ bảng phải."
  },
  {
    id: "pl_a_010",
    library: "Polars",
    level: "Advanced",
    topic: "Pivot / Melt Awareness",
    question: "Pivot thường dùng để làm gì?",
    code: "",
    options: [
      "Chuyển dữ liệu từ dạng long sang wide",
      "Chuyển dữ liệu từ dạng wide sang long",
      "Xóa tất cả null trong DataFrame",
      "Đọc file dữ liệu bằng lazy scan"
    ],
    answer: 0,
    explanation: "Pivot biến các giá trị trong một cột thành các cột mới, thường chuyển dữ liệu long format sang wide format."
  },
  {
    id: "pl_a_011",
    library: "Polars",
    level: "Advanced",
    topic: "Pivot / Melt Awareness",
    question: "Melt/unpivot thường dùng để làm gì?",
    code: "",
    options: [
      "Chuyển dữ liệu từ dạng wide sang long",
      "Chuyển dữ liệu từ dạng long sang wide",
      "Tính rolling mean theo thời gian",
      "Tạo LazyFrame từ file CSV nguồn"
    ],
    answer: 0,
    explanation: "Melt hoặc unpivot chuyển nhiều cột giá trị thành các dòng gồm biến và giá trị, tức wide sang long."
  },
  {
    id: "pl_a_012",
    library: "Polars",
    level: "Advanced",
    topic: "List Columns Basics",
    question: "List column trong Polars là gì?",
    code: "",
    options: [
      "Cột mà mỗi ô có thể chứa một list giá trị",
      "Danh sách toàn bộ tên file CSV đã đọc",
      "Cột chỉ được phép chứa dữ liệu string",
      "Một kiểu join giữa hai DataFrame"
    ],
    answer: 0,
    explanation: "List column cho phép một ô chứa nhiều giá trị dạng list. Có thể dùng explode để bung list thành nhiều dòng."
  },
  {
    id: "pl_a_013",
    library: "Polars",
    level: "Advanced",
    topic: "Struct Columns Awareness",
    question: "Struct column trong Polars ở mức awareness là gì?",
    code: "",
    options: [
      "Cột chứa nhiều field con có cấu trúc",
      "Cột chỉ chứa số nguyên không null",
      "Cột bị duplicate theo toàn bộ dòng",
      "Cột bắt buộc dùng để sort dữ liệu"
    ],
    answer: 0,
    explanation: "Struct column là cột có cấu trúc gồm nhiều field con, hữu ích trong một số thao tác expression hoặc dữ liệu nested."
  },
  {
    id: "pl_a_014",
    library: "Polars",
    level: "Advanced",
    topic: "Apply / map_elements Awareness",
    question: "Vì sao nên cẩn thận khi dùng map_elements/apply kiểu Python function trên từng phần tử?",
    code: "",
    options: [
      "Có thể chậm hơn native expression và giảm tối ưu",
      "Polars không cho phép dùng custom function",
      "map_elements luôn làm sai kết quả tính toán",
      "map_elements chỉ dùng được với LazyFrame"
    ],
    answer: 0,
    explanation: "Polars tối ưu tốt với native expressions. Python UDF theo từng phần tử có thể chậm hơn và hạn chế tối ưu hóa."
  },
  {
    id: "pl_a_015",
    library: "Polars",
    level: "Advanced",
    topic: "Performance Basics",
    question: "Phát biểu nào đúng về performance của Polars?",
    code: "",
    options: [
      "Polars có nhiều tối ưu, nhưng không luôn nhanh nhất mọi case",
      "Polars luôn nhanh hơn pandas trong mọi tình huống",
      "Polars luôn chậm hơn Python loop thuần",
      "Polars không hỗ trợ xử lý song song"
    ],
    answer: 0,
    explanation: "Polars thường mạnh nhờ expression engine, lazy optimization và parallelism, nhưng performance còn phụ thuộc dữ liệu, query, I/O và cách viết code."
  },
  {
    id: "pl_a_016",
    library: "Polars",
    level: "Advanced",
    topic: "Streaming Awareness",
    question: "Streaming trong Polars ở mức awareness nhằm mục tiêu gì?",
    code: "",
    options: [
      "Xử lý dữ liệu từng phần để giảm áp lực bộ nhớ",
      "Luôn tải toàn bộ dữ liệu vào RAM trước",
      "Stream video trực tiếp từ file dữ liệu",
      "Tạo biểu đồ realtime trong dashboard"
    ],
    answer: 0,
    explanation: "Streaming execution có thể giúp xử lý dữ liệu lớn theo từng phần trong một số query, giảm nhu cầu materialize toàn bộ dữ liệu cùng lúc."
  },
  {
    id: "pl_a_017",
    library: "Polars",
    level: "Advanced",
    topic: "Common Errors",
    question: "Lỗi tư duy phổ biến khi chuyển từ pandas sang Polars là gì?",
    code: "",
    options: [
      "Viết logic row-by-row thay vì dùng expression API",
      "Dùng pl.col trong select để tham chiếu cột",
      "Dùng group_by().agg() để tính tổng theo nhóm",
      "Dùng scan_csv cho một lazy workflow"
    ],
    answer: 0,
    explanation: "Polars được thiết kế để xử lý theo expressions và query optimization. Row-by-row Python logic thường kém hiệu quả và ít idiomatic."
  },
  {
    id: "pl_a_018",
    library: "Polars",
    level: "Advanced",
    topic: "Best Practice for Data Analytics Workflow",
    question: "Best practice nào phù hợp khi xây pipeline xử lý dữ liệu bằng Polars?",
    code: "",
    options: [
      "Dùng expression rõ ràng, kiểm tra schema, ưu tiên lazy khi phù hợp",
      "Dùng Python loop cho từng dòng để kiểm soát chặt hơn",
      "Bỏ kiểm tra null vì Polars tự hiểu business logic",
      "Collect sau mỗi bước lazy nhỏ để luôn có DataFrame eager"
    ],
    answer: 0,
    explanation: "Workflow tốt nên rõ ràng, kiểm tra schema/dtypes/null, tận dụng expression API và lazy optimization khi phù hợp. collect quá sớm có thể làm mất lợi ích lazy."
  },
  {
    id: "pl_e_001",
    library: "Polars",
    level: "Expert",
    topic: "Lazy API",
    question: "Trong lazy workflow, vì sao không nên collect() quá sớm sau mỗi bước nhỏ nếu chưa cần kết quả trung gian?",
    code: "",
    options: [
      "Collect sớm materialize dữ liệu và giảm cơ hội tối ưu query plan",
      "Collect sớm luôn xóa dữ liệu khỏi LazyFrame",
      "Collect chỉ dùng được cho pandas DataFrame",
      "Collect tự động đổi mọi cột thành string"
    ],
    answer: 0,
    explanation: "Lazy API hiệu quả khi Polars nhìn được toàn bộ query plan. collect quá sớm chia nhỏ plan và có thể giảm khả năng tối ưu."
  },
  {
    id: "pl_e_002",
    library: "Polars",
    level: "Expert",
    topic: "Expression vs Python Value",
    question: "Trong Polars expression, vì sao cần dùng pl.lit(\"high\") trong then() ở nhiều trường hợp thay vì chỉ viết \"high\"?",
    code: "",
    options: [
      "Để biểu diễn \"high\" là literal value trong expression",
      "Để tham chiếu đến một cột có tên là high",
      "Để đọc một file dữ liệu có tên là high",
      "Để tạo một LazyFrame mới tên là high"
    ],
    answer: 0,
    explanation: "pl.lit(\"high\") nói rõ đây là giá trị hằng trong expression. Điều này giúp tránh nhầm lẫn giữa literal value và tên cột trong expression context."
  },
  {
    id: "pl_e_003",
    library: "Polars",
    level: "Expert",
    topic: "Window Expressions",
    question: "Điểm khác biệt chính giữa group_by().agg() và expression .over() là gì?",
    code: "",
    options: [
      "group_by().agg() giảm theo group, over() giữ số dòng gốc",
      "group_by().agg() giữ số dòng gốc, over() giảm theo group",
      "group_by().agg() chỉ dùng cho string, over() chỉ dùng cho số",
      "group_by().agg() và over() luôn trả cùng shape"
    ],
    answer: 0,
    explanation: "group_by().agg() tạo kết quả cấp group. Window expression với over() tính theo group nhưng broadcast về từng dòng gốc."
  },
  {
    id: "pl_e_004",
    library: "Polars",
    level: "Expert",
    topic: "Strict Casting",
    question: "Khi cast string sang số với strict=True, điều gì thường xảy ra nếu có giá trị không parse được?",
    code: "",
    options: [
      "Polars báo lỗi thay vì âm thầm chuyển thành null",
      "Polars tự động xóa toàn bộ dòng có lỗi",
      "Polars chuyển mọi giá trị lỗi thành 0",
      "Polars bỏ qua toàn bộ cột bị lỗi"
    ],
    answer: 0,
    explanation: "Strict casting giúp phát hiện dữ liệu không hợp lệ sớm. Nếu muốn cho phép giá trị không parse được thành null, có thể cân nhắc strict=False tùy API và mục tiêu xử lý."
  },
  {
    id: "pl_e_005",
    library: "Polars",
    level: "Expert",
    topic: "Query Optimization",
    question: "Query lazy nào thường tận dụng projection pushdown tốt hơn?",
    code: "",
    options: [
      "Scan file lớn rồi select vài cột cần thiết trước collect",
      "Read toàn bộ file eager rồi chọn cột sau",
      "Collect toàn bộ dữ liệu rồi mới drop cột",
      "Convert sang list Python rồi lọc cột"
    ],
    answer: 0,
    explanation: "Với lazy scan và select cột cần thiết, Polars có thể tối ưu để chỉ đọc/xử lý các cột cần dùng khi nguồn dữ liệu hỗ trợ."
  },
  {
    id: "pl_e_006",
    library: "Polars",
    level: "Expert",
    topic: "Best Practice for Data Analytics Workflow",
    question: "Khi xây pipeline Polars cho dữ liệu lớn, cách nào thường hợp lý nhất?",
    code: "",
    options: [
      "Scan lazy, filter/select sớm, dùng native expression, collect cuối",
      "Read eager toàn bộ, convert sang list, loop từng dòng",
      "Collect sau mỗi filter nhỏ để kiểm tra mọi bước",
      "Dùng map_elements cho mọi biến đổi đơn giản"
    ],
    answer: 0,
    explanation: "Một pipeline hiệu quả thường tận dụng lazy scan, pushdown filter/select, native expressions và materialize ở cuối. Python loop hoặc UDF quá nhiều thường làm giảm hiệu năng."
  }
];