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
      "Thiết kế giao diện web",
      "Huấn luyện deep learning model",
      "Quản lý hệ điều hành"
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
      "pl.Frame([1, 2, 3])",
      "pl.create_df({\"value\": [1, 2, 3]})",
      "pd.DataFrame.pl({\"value\": [1, 2, 3]})"
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
      "Một database server",
      "Một file CSV",
      "Một biểu đồ"
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
      "DataFrame chạy eager, LazyFrame xây query plan và chỉ chạy khi collect()",
      "LazyFrame không thể xử lý dữ liệu bảng",
      "DataFrame chỉ dùng cho string",
      "LazyFrame luôn là file CSV"
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
      "Các thao tác được thực thi ngay và trả kết quả trực tiếp",
      "Các thao tác không bao giờ chạy",
      "Chỉ đọc schema mà không xử lý dữ liệu",
      "Chỉ áp dụng cho dữ liệu text"
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
      "Trì hoãn thực thi và cho phép tối ưu query trước khi chạy",
      "Luôn chạy chậm hơn eager API",
      "Không hỗ trợ filter",
      "Không cần collect() để lấy kết quả"
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
      "Xóa toàn bộ dữ liệu",
      "Tạo biểu đồ",
      "Chỉ đổi tên cột"
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
      "scan_csv tạo LazyFrame, read_csv tạo DataFrame ngay",
      "scan_csv chỉ đọc được file Excel",
      "read_csv không đọc được CSV",
      "scan_csv luôn xóa dữ liệu trùng"
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
      "Số lượng dòng bị duplicate",
      "Tên file nguồn",
      "Biểu đồ phân phối dữ liệu"
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
      "Số lượng dòng",
      "Tên database",
      "Số lượng file đã đọc"
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
      "Chọn cột hoặc tạo output mới từ expressions",
      "Thêm cột vào DataFrame gốc theo mặc định",
      "Xóa file dữ liệu",
      "Huấn luyện model"
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
      "Chỉ lọc dòng",
      "Chỉ đọc file parquet",
      "Chỉ đổi kiểu index"
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
      "Chọn toàn bộ cột",
      "Tạo group aggregation",
      "Đọc schema của file"
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
      "Giá trị Python string bình thường",
      "Một DataFrame mới",
      "Một file CSV"
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
      "df.sorted_by(\"amount\")",
      "df.arrange_rows(\"amount\")"
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
      "Xóa 5 dòng đầu tiên",
      "Chọn 5 cột đầu tiên"
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
      "Tạo DataFrame mới chỉ gồm cột amount đã nhân 2",
      "Thêm cột mới vào df gốc và giữ mọi cột",
      "Lọc dòng amount > 2",
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
      "Xóa cột",
      "Chuyển DataFrame thành LazyFrame",
      "Đọc file parquet"
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
      "df.filter(pl.col(\"amount\") * 2)",
      "df.group_by(\"amount_x2\")"
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
      "pl.col(\"amount\") là expression tham chiếu cột, còn \"amount\" là Python string",
      "\"amount\" luôn nhân được với 2 như một cột",
      "pl.col(\"amount\") là DataFrame",
      "Không có khác biệt trong mọi trường hợp"
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
      "Tham chiếu đến cột tên 1",
      "Đọc file có tên 1",
      "Tạo LazyFrame mới"
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
      "Sắp xếp dòng",
      "Ghép hai DataFrame",
      "Tạo group_by"
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
      "Vòng lặp for",
      "Join hai bảng",
      "Đọc dữ liệu lazy"
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
      "df.filter(pl.col(\"amount\") > 100).alias(\"flag\")",
      "df.select(pl.col(\"amount\").then(\"high\"))",
      "df.with_columns(if pl.col(\"amount\") > 100: \"high\")"
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
      "df.with_columns(pl.col(\"status\").lower())",
      "df.with_columns(lower(pl.col(\"status\")))",
      "df.status.lower()"
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
      "pl.col(\"date\").year",
      "pl.year(\"date\")",
      "df[\"date\"].year()"
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
      "Xóa tất cả NaN và null trong mọi cột bắt buộc",
      "Đổi tên cột",
      "Tạo group_by"
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
      "Loại bỏ các dòng có null theo điều kiện/cột được chỉ định",
      "Điền null bằng 0",
      "Chỉ xóa NaN float",
      "Đổi null thành string"
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
      "null là missing value, còn NaN là giá trị float đặc biệt",
      "null và NaN luôn giống nhau tuyệt đối",
      "NaN chỉ dùng cho string",
      "null là tên cột mặc định"
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
      "Tạo cột boolean",
      "Đọc file CSV",
      "Chuyển eager sang lazy"
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
      "Boolean mask cho biết dòng/giá trị có bị duplicate không",
      "DataFrame đã sort",
      "Schema của DataFrame",
      "Lazy query plan"
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
      "Tính trung bình rolling",
      "Join hai DataFrame",
      "Chuyển kiểu dữ liệu"
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
      "df.agg_by(\"category\", pl.col(\"amount\").sum())",
      "df.select(\"category\").sum(\"amount\")",
      "df.filter(\"category\").sum(\"amount\")"
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
      "Lọc các dòng amount lớn hơn mean",
      "Đổi tên cột amount",
      "Tạo LazyFrame"
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
      "Chỉ dòng không khớp",
      "Tất cả dòng của cả hai bảng không cần key"
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
      "Tất cả dòng từ bảng trái và ghép dữ liệu bảng phải nếu key khớp",
      "Chỉ các dòng khớp ở cả hai bảng",
      "Chỉ các dòng bảng phải",
      "Chỉ các dòng không khớp"
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
      "Lọc dữ liệu theo điều kiện",
      "Tạo cột null",
      "Tính feature importance"
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
      "Khi muốn xóa toàn bộ null",
      "Khi muốn đọc CSV lazy",
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
      "Tính expression theo từng group nhưng giữ lại số dòng gốc",
      "Đọc file over network",
      "Xóa group_by",
      "Tạo Python loop"
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
      "Khi gọi lf.collect() hoặc operation materialize tương đương",
      "Ngay khi gọi lf.filter(...)",
      "Ngay khi gọi lf.select(...)",
      "Không bao giờ chạy được"
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
      "Polars khuyến khích expression API thay vì thao tác từng cell/row kiểu Python loop",
      "Polars không hỗ trợ DataFrame",
      "Polars chỉ dùng để vẽ chart",
      "Polars bắt buộc phải dùng SQL"
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
      "select trả về chỉ các expression được chọn, with_columns giữ cột cũ và thêm/sửa cột",
      "select chỉ dùng cho LazyFrame, with_columns chỉ dùng cho DataFrame",
      "select dùng để lọc dòng, with_columns dùng để join",
      "Hai hàm luôn cho kết quả giống hệt nhau"
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
      "filter tạo cột mới, when/then/otherwise chỉ đọc CSV",
      "filter chỉ dùng trong group_by",
      "Không có khác biệt"
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
      "Vì scan_parquet tạo LazyFrame, cho phép Polars tối ưu chỉ đọc phần cần thiết khi có thể",
      "Vì scan_parquet luôn đọc toàn bộ file ngay lập tức",
      "Vì read_parquet không đọc được parquet",
      "Vì scan_parquet chỉ dùng cho dữ liệu nhỏ"
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
      "Đẩy điều kiện filter xuống gần bước đọc dữ liệu để giảm lượng dữ liệu cần xử lý",
      "Đẩy sort lên cuối cùng bắt buộc",
      "Chuyển mọi null thành NaN",
      "Tự động tạo group_by"
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
      "Chỉ đọc hoặc xử lý các cột thật sự cần thiết",
      "Chỉ giữ lại các dòng duplicate",
      "Tự động join mọi bảng",
      "Chuyển eager thành pandas"
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
      "Vì Polars thấy toàn bộ query plan trước khi chạy và có thể tối ưu thứ tự/thao tác",
      "Vì Lazy API luôn bỏ qua mọi phép tính",
      "Vì Lazy API không cần dữ liệu",
      "Vì Lazy API chỉ chạy một dòng đầu"
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
      "df.group_by(\"category\").agg(pl.col(\"amount\").sum())",
      "df.select(pl.col(\"amount\").sum())",
      "df.filter(pl.col(\"amount\").sum())"
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
      "Các dòng ở bảng trái không có key khớp ở bảng phải",
      "Các dòng có key khớp ở cả hai bảng",
      "Tất cả dòng của bảng phải",
      "Tích Descartes của hai bảng"
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
      "Các dòng ở bảng trái có key khớp ở bảng phải, nhưng chỉ giữ cột từ bảng trái",
      "Các dòng ở bảng trái không khớp bảng phải",
      "Tất cả cột của cả hai bảng",
      "Chỉ các dòng duplicate"
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
      "Chuyển wide sang long",
      "Xóa null",
      "Đọc file lazy"
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
      "Chuyển long sang wide",
      "Tính rolling mean",
      "Tạo LazyFrame từ CSV"
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
      "Cột mà mỗi ô có thể chứa một list các giá trị",
      "Danh sách tên file CSV",
      "Cột chỉ chứa string",
      "Một kiểu join"
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
      "Cột chỉ chứa số nguyên",
      "Cột bị duplicate",
      "Cột dùng để sort bắt buộc"
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
      "Vì có thể chậm hơn expression native và làm giảm khả năng tối ưu của Polars",
      "Vì Polars không bao giờ cho phép custom function",
      "Vì map_elements luôn làm sai kết quả",
      "Vì chỉ dùng được với LazyFrame"
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
      "Polars có nhiều cơ chế tối ưu, nhưng không nên khẳng định luôn nhanh hơn mọi công cụ trong mọi trường hợp",
      "Polars luôn nhanh hơn pandas trong mọi tình huống",
      "Polars luôn chậm hơn Python loop",
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
      "Xử lý dữ liệu theo từng phần để giảm áp lực bộ nhớ khi query hỗ trợ",
      "Luôn tải toàn bộ dữ liệu vào RAM trước",
      "Chỉ dùng để stream video",
      "Chỉ dùng cho biểu đồ realtime"
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
      "Cố viết logic row-by-row bằng Python thay vì dùng expression API",
      "Dùng pl.col trong select",
      "Dùng group_by().agg()",
      "Dùng scan_csv cho lazy workflow"
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
      "Dùng expression rõ ràng, kiểm tra schema/dtypes, và ưu tiên lazy khi pipeline lớn hoặc đọc file lớn",
      "Dùng Python loop cho mọi dòng dữ liệu",
      "Không kiểm tra null vì Polars tự hiểu business logic",
      "Luôn collect sau mỗi bước lazy nhỏ"
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
      "Vì collect sớm materialize dữ liệu và có thể làm mất cơ hội tối ưu toàn bộ query plan",
      "Vì collect luôn xóa dữ liệu",
      "Vì collect chỉ dùng được cho pandas",
      "Vì collect tự động đổi mọi cột thành string"
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
      "Để tham chiếu đến cột tên high",
      "Để đọc file tên high",
      "Để tạo LazyFrame"
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
      "group_by().agg() thường giảm số dòng theo group, còn over() giữ số dòng gốc",
      "over() luôn xóa dữ liệu",
      "group_by().agg() chỉ dùng cho string",
      "Hai cách luôn trả cùng shape"
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
      "Polars báo lỗi thay vì âm thầm chuyển giá trị lỗi thành null",
      "Polars tự động xóa toàn bộ dòng",
      "Polars chuyển mọi giá trị thành 0",
      "Polars bỏ qua cột đó"
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
      "scan file lớn rồi select một vài cột cần thiết trước khi collect",
      "read toàn bộ file eager rồi chọn cột sau",
      "collect toàn bộ dữ liệu rồi mới drop cột",
      "convert sang list Python rồi lọc cột"
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
      "scan dữ liệu lazy, filter/select sớm, dùng expression native, collect ở cuối khi cần kết quả",
      "read eager toàn bộ dữ liệu, convert sang list, loop từng dòng",
      "collect sau mỗi filter nhỏ để kiểm tra mọi bước trong production",
      "dùng map_elements cho mọi phép biến đổi đơn giản"
    ],
    answer: 0,
    explanation: "Một pipeline hiệu quả thường tận dụng lazy scan, pushdown filter/select, native expressions và materialize ở cuối. Python loop hoặc UDF quá nhiều thường làm giảm hiệu năng."
  }
];