const DATA_QUALITY_QUESTIONS = [
  {
    id: "dq_f_001",
    library: "Data Quality",
    level: "Foundation",
    topic: "Data Quality Overview",
    question: "Mục tiêu chính của data quality trong phân tích dữ liệu là gì?",
    code: "",
    options: [
      "Làm cho dataset có nhiều cột hơn",
      "Đảm bảo dữ liệu đủ tin cậy để phân tích và ra quyết định",
      "Chỉ làm cho biểu đồ đẹp hơn",
      "Luôn xóa tất cả dòng có giá trị thiếu"
    ],
    answer: 1,
    explanation: "Data quality tập trung vào việc đảm bảo dữ liệu đáng tin cậy, hợp lệ, đầy đủ và nhất quán để phục vụ phân tích và ra quyết định. Việc thêm cột, làm đẹp biểu đồ hoặc xóa toàn bộ dòng thiếu không phải là mục tiêu chính."
  },
  {
    id: "dq_f_002",
    library: "Data Quality",
    level: "Foundation",
    topic: "Data Cleaning vs Data Validation",
    question: "Khác biệt đúng nhất giữa data cleaning và data validation là gì?",
    code: "",
    options: [
      "Data cleaning là sửa/làm sạch dữ liệu, data validation là kiểm tra dữ liệu có tuân thủ rule hay không",
      "Data cleaning chỉ dùng SQL, data validation chỉ dùng Python",
      "Data cleaning và data validation hoàn toàn giống nhau",
      "Data validation là bước vẽ biểu đồ, data cleaning là bước deploy dashboard"
    ],
    answer: 0,
    explanation: "Data validation kiểm tra dữ liệu theo rule như amount >= 0, status hợp lệ, key unique. Data cleaning là xử lý hoặc chuẩn hóa lỗi được phát hiện, ví dụ trim whitespace hoặc chuẩn hóa label."
  },
  {
    id: "dq_f_003",
    library: "Data Quality",
    level: "Foundation",
    topic: "Data Profiling",
    question: "Data profiling thường dùng để làm gì ở giai đoạn đầu phân tích?",
    code: "",
    options: [
      "Tóm tắt cấu trúc, kiểu dữ liệu, null rate, duplicate, phân phối và giá trị bất thường",
      "Tự động sửa toàn bộ lỗi dữ liệu mà không cần rule",
      "Thay thế hoàn toàn business understanding",
      "Chỉ dùng để tạo màu cho dashboard"
    ],
    answer: 0,
    explanation: "Data profiling giúp hiểu nhanh trạng thái dữ liệu: số dòng, số cột, kiểu dữ liệu, missing, duplicate, range, phân phối và giá trị lạ. Đây là bước phát hiện vấn đề, chưa nhất thiết là sửa lỗi."
  },
  {
    id: "dq_f_004",
    library: "Data Quality",
    level: "Foundation",
    topic: "Missing Values",
    question: "Giá trị thiếu trong dữ liệu thường gây rủi ro gì cho phân tích?",
    code: "",
    options: [
      "Có thể làm sai KPI, sai mẫu phân tích hoặc gây lỗi khi tính toán",
      "Luôn làm phân tích chính xác hơn",
      "Không bao giờ ảnh hưởng đến kết quả",
      "Chỉ ảnh hưởng đến màu sắc biểu đồ"
    ],
    answer: 0,
    explanation: "Missing values có thể làm sai trung bình, tổng, tỷ lệ, phân khúc hoặc làm model/report bị lỗi. Không nên mặc định xóa hết mà cần hiểu nguyên nhân và tác động."
  },
  {
    id: "dq_f_005",
    library: "Data Quality",
    level: "Foundation",
    topic: "Duplicate Records",
    question: "Duplicate records có thể gây ảnh hưởng gì đến kết quả phân tích?",
    code: "",
    options: [
      "Làm phóng đại số lượng, doanh thu, tần suất hoặc KPI đếm dòng",
      "Luôn làm dữ liệu sạch hơn",
      "Chỉ ảnh hưởng khi dữ liệu có ảnh",
      "Không ảnh hưởng đến bất kỳ metric nào"
    ],
    answer: 0,
    explanation: "Duplicate records có thể làm các metric dạng count, sum, frequency bị phóng đại. Cần xác định duplicate theo key/business grain trước khi xử lý."
  },
  {
    id: "dq_f_006",
    library: "Data Quality",
    level: "Foundation",
    topic: "Unique Key Check",
    question: "Nếu bảng users yêu cầu mỗi user_id là duy nhất, rule kiểm tra phù hợp là gì?",
    code: "",
    options: [
      "user_id không được duplicate",
      "user_id phải luôn bằng 1",
      "user_id phải được sort giảm dần",
      "user_id phải có cùng giá trị với amount"
    ],
    answer: 0,
    explanation: "Với bảng users, user_id thường là định danh của mỗi user nên cần unique. Duplicate user_id có thể làm sai join hoặc đếm số user."
  },
  {
    id: "dq_f_007",
    library: "Data Quality",
    level: "Foundation",
    topic: "Primary Key Validation",
    question: "Một primary key hợp lệ thường cần thỏa mãn điều kiện nào?",
    code: "",
    options: [
      "Không null và không duplicate",
      "Luôn là kiểu float",
      "Luôn chứa dấu cách",
      "Luôn có giá trị âm"
    ],
    answer: 0,
    explanation: "Primary key dùng để định danh duy nhất mỗi record, nên thường phải non-null và unique. Nếu null hoặc duplicate, việc join và kiểm tra grain sẽ gặp rủi ro."
  },
  {
    id: "dq_f_008",
    library: "Data Quality",
    level: "Foundation",
    topic: "Data Type Check",
    question: "Vì sao cần kiểm tra kiểu dữ liệu của cột date?",
    code: "",
    options: [
      "Vì date ở dạng string có thể làm sort, filter hoặc tính khoảng thời gian bị sai",
      "Vì date bắt buộc phải là số âm",
      "Vì date không bao giờ được dùng trong phân tích",
      "Vì date luôn phải chuyển thành category"
    ],
    answer: 0,
    explanation: "Nếu date đang là string, thao tác sort hoặc tính chênh lệch ngày có thể sai hoặc khó thực hiện. Nên validate và chuyển về datetime khi phù hợp."
  },
  {
    id: "dq_f_009",
    library: "Data Quality",
    level: "Foundation",
    topic: "Schema Validation",
    question: "Schema validation thường kiểm tra điều gì?",
    code: "",
    options: [
      "Tên cột, kiểu dữ liệu, cột bắt buộc và cấu trúc dữ liệu có đúng kỳ vọng không",
      "Màu sắc chart có đẹp không",
      "Người dùng có thích dashboard không",
      "Code có chạy nhanh hơn mọi trường hợp không"
    ],
    answer: 0,
    explanation: "Schema validation đảm bảo dataset có đúng cấu trúc mong đợi, ví dụ phải có cột order_id, date, amount và kiểu dữ liệu phù hợp."
  },
  {
    id: "dq_f_010",
    library: "Data Quality",
    level: "Foundation",
    topic: "Range Validation",
    question: "Rule nào là ví dụ của range validation?",
    code: "",
    options: [
      "amount >= 0",
      "status phải viết hoa toàn bộ vì nhìn đẹp hơn",
      "Tên cột phải ngắn hơn 3 ký tự",
      "DataFrame phải có đúng 100 dòng trong mọi trường hợp"
    ],
    answer: 0,
    explanation: "Range validation kiểm tra giá trị nằm trong khoảng hợp lệ. amount >= 0 là rule rõ ràng vì amount âm thường cần được giải thích hoặc xử lý."
  },
  {
    id: "dq_f_011",
    library: "Data Quality",
    level: "Foundation",
    topic: "Categorical Value Validation",
    question: "Nếu status chỉ được nhận các giá trị ['new', 'paid', 'cancelled'], kiểm tra nào là phù hợp?",
    code: "",
    options: [
      "Kiểm tra status có nằm trong danh sách giá trị hợp lệ không",
      "Kiểm tra status có phải số nguyên không",
      "Kiểm tra status có lớn hơn 0 không",
      "Kiểm tra status có phải ngày tháng không"
    ],
    answer: 0,
    explanation: "Categorical value validation kiểm tra giá trị category có thuộc tập hợp hợp lệ hay không. Giá trị ngoài danh sách có thể là lỗi nhập liệu hoặc mapping."
  },
  {
    id: "dq_f_012",
    library: "Data Quality",
    level: "Foundation",
    topic: "Date Validation",
    question: "Rule nào là ví dụ hợp lý của date validation?",
    code: "",
    options: [
      "order_date phải parse được về kiểu ngày hợp lệ",
      "order_date phải luôn bằng hôm nay",
      "order_date phải là số âm",
      "order_date phải có cùng giá trị với user_id"
    ],
    answer: 0,
    explanation: "Date validation kiểm tra giá trị ngày có hợp lệ về format/kiểu dữ liệu và logic thời gian hay không. Ví dụ order_date cần parse được về datetime hợp lệ trước khi sort, filter hoặc tính khoảng thời gian."
  },
  {
    id: "dq_f_013",
    library: "Data Quality",
    level: "Foundation",
    topic: "String Cleaning",
    question: "Vấn đề nào thường được xử lý bằng string cleaning?",
    code: "",
    options: [
      "Dấu cách thừa, viết hoa/thường không nhất quán, ký tự không mong muốn",
      "Tăng RAM máy tính",
      "Tạo thêm index database tự động",
      "Huấn luyện mô hình dự báo"
    ],
    answer: 0,
    explanation: "String cleaning xử lý các vấn đề như whitespace, case, ký tự đặc biệt hoặc format không nhất quán, giúp groupby/join/filter chính xác hơn."
  },
  {
    id: "dq_f_014",
    library: "Data Quality",
    level: "Foundation",
    topic: "Whitespace Handling",
    question: "Trong pandas, cách nào thường dùng để xóa khoảng trắng đầu/cuối của cột category dạng string?",
    code: "import pandas as pd\ndf = pd.DataFrame({'category': [' A ', 'B ', ' C']})",
    options: [
      "df['category'].str.strip()",
      "df['category'].strip_all()",
      "df['category'].trim_space()",
      "df['category'].remove_blank()"
    ],
    answer: 0,
    explanation: "Series.str.strip() xóa khoảng trắng đầu và cuối chuỗi. Đây là thao tác phổ biến trước khi chuẩn hóa category."
  },
  {
    id: "dq_f_015",
    library: "Data Quality",
    level: "Foundation",
    topic: "Case Standardization",
    question: "Vì sao cần chuẩn hóa chữ hoa/thường cho category?",
    code: "",
    options: [
      "Để tránh cùng một nhóm bị tách thành nhiều label như 'paid', 'Paid', 'PAID'",
      "Để mọi giá trị numeric thành số âm",
      "Để xóa toàn bộ dòng duplicate",
      "Để tăng số cột trong bảng"
    ],
    answer: 0,
    explanation: "Nếu case không nhất quán, groupby hoặc filter có thể coi các giá trị là nhóm khác nhau. Chuẩn hóa case giúp nhãn category nhất quán hơn."
  },
  {
    id: "dq_f_016",
    library: "Data Quality",
    level: "Foundation",
    topic: "Completeness",
    question: "Completeness trong data quality thường nói về điều gì?",
    code: "",
    options: [
      "Mức độ dữ liệu có đầy đủ giá trị cần thiết hay không",
      "Dữ liệu có nhiều màu sắc hay không",
      "Biểu đồ có animation hay không",
      "Query có dùng nhiều join hay không"
    ],
    answer: 0,
    explanation: "Completeness đo mức độ đầy đủ của dữ liệu, ví dụ tỷ lệ null ở các cột quan trọng. Thiếu dữ liệu có thể làm phân tích thiếu tin cậy."
  },
  {
    id: "dq_f_017",
    library: "Data Quality",
    level: "Foundation",
    topic: "Validity",
    question: "Validity trong data quality thường có nghĩa là gì?",
    code: "",
    options: [
      "Dữ liệu có tuân thủ format, rule hoặc tập giá trị hợp lệ không",
      "Dữ liệu có được vẽ bằng bar chart không",
      "Dữ liệu có được lưu trong file CSV không",
      "Dữ liệu có đúng 10 cột không trong mọi trường hợp"
    ],
    answer: 0,
    explanation: "Validity kiểm tra dữ liệu có hợp lệ theo rule hay không, ví dụ email đúng format, status thuộc danh sách cho phép, amount >= 0."
  },
  {
    id: "dq_f_018",
    library: "Data Quality",
    level: "Foundation",
    topic: "Timeliness",
    question: "Timeliness trong data quality liên quan nhiều nhất đến yếu tố nào?",
    code: "",
    options: [
      "Dữ liệu có đủ mới và đến đúng thời điểm cần dùng không",
      "Dữ liệu có font chữ đẹp không",
      "Dữ liệu có nhiều category không",
      "Dữ liệu có được sort theo alphabet không"
    ],
    answer: 0,
    explanation: "Timeliness liên quan đến tính kịp thời của dữ liệu. Ví dụ dashboard ngày hôm nay nhưng dữ liệu chỉ cập nhật đến tuần trước có thể gây quyết định sai."
  },
  {
    id: "dq_i_001",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Null Rate Check",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import pandas as pd\nimport numpy as np\ndf = pd.DataFrame({'amount': [10, np.nan, 30, np.nan]})\nprint(df['amount'].isna().mean())",
    options: ["0.0", "0.25", "0.5", "2"],
    answer: 2,
    explanation: "isna() tạo boolean True cho giá trị thiếu. mean() trên boolean tính tỷ lệ True. Có 2 null trên 4 dòng nên null rate là 0.5."
  },
  {
    id: "dq_i_002",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Duplicate Rate Check",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import pandas as pd\ndf = pd.DataFrame({'order_id': [1, 2, 2, 3]})\nprint(df['order_id'].duplicated().mean())",
    options: ["0.0", "0.25", "0.5", "1.0"],
    answer: 1,
    explanation: "duplicated() đánh dấu lần xuất hiện sau là duplicate. order_id=2 xuất hiện lần thứ hai là duplicate, có 1/4 dòng duplicate nên tỷ lệ là 0.25."
  },
  {
    id: "dq_i_003",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Unique Key Check",
    question: "Cách nào kiểm tra order_id có unique trong DataFrame không?",
    code: "import pandas as pd\ndf = pd.DataFrame({'order_id': [1, 2, 3]})",
    options: [
      "df['order_id'].is_unique",
      "df['order_id'].unique_only()",
      "df['order_id'].is_duplicate_free()",
      "df['order_id'].check_unique"
    ],
    answer: 0,
    explanation: "Series.is_unique trả về True nếu không có giá trị duplicate. Đây là cách nhanh để kiểm tra uniqueness của một cột."
  },
  {
    id: "dq_i_004",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Duplicate Records",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import pandas as pd\ndf = pd.DataFrame({'order_id': [1, 1, 2], 'amount': [10, 10, 20]})\nprint(df.duplicated().tolist())",
    options: [
      "[False, True, False]",
      "[True, True, False]",
      "[False, False, False]",
      "[False, True, True]"
    ],
    answer: 0,
    explanation: "df.duplicated() kiểm tra duplicate trên toàn bộ hàng. Dòng thứ hai giống hệt dòng đầu nên là True, các dòng còn lại là False."
  },
  {
    id: "dq_i_005",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Data Type Check",
    question: "Cách nào chuyển cột date sang datetime trong pandas và biến giá trị không parse được thành NaT?",
    code: "import pandas as pd\ndf = pd.DataFrame({'date': ['2024-01-01', 'bad_date']})",
    options: [
      "pd.to_datetime(df['date'], errors='coerce')",
      "df['date'].astype('date', errors='ignore_bad')",
      "pd.date(df['date'])",
      "df['date'].parse_datetime(force=True)"
    ],
    answer: 0,
    explanation: "pd.to_datetime(..., errors='coerce') chuyển giá trị parse được thành datetime và giá trị lỗi thành NaT. Đây là pattern phổ biến để validate date."
  },
  {
    id: "dq_i_006",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Range Validation",
    question: "Cách nào lấy các dòng có amount âm để kiểm tra lỗi?",
    code: "import pandas as pd\ndf = pd.DataFrame({'amount': [10, -5, 0]})",
    options: [
      "df[df['amount'] < 0]",
      "df[df['amount'] > 0]",
      "df['amount'].drop_negative()",
      "df.check(amount < 0)"
    ],
    answer: 0,
    explanation: "df[df['amount'] < 0] lọc các dòng vi phạm rule amount >= 0. Nên kiểm tra nguyên nhân trước khi sửa hoặc loại bỏ."
  },
  {
    id: "dq_i_007",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Categorical Value Validation",
    question: "Cách nào tìm các status không nằm trong danh sách hợp lệ?",
    code: "import pandas as pd\ndf = pd.DataFrame({'status': ['new', 'paid', 'unknown']})\nvalid_status = ['new', 'paid', 'cancelled']",
    options: [
      "df[~df['status'].isin(valid_status)]",
      "df[df['status'].in_list(valid_status)]",
      "df[df['status'] not in valid_status]",
      "df['status'].invalid(valid_status)"
    ],
    answer: 0,
    explanation: "Series.isin(valid_status) kiểm tra giá trị có nằm trong danh sách hợp lệ không. Dấu ~ đảo điều kiện để lấy giá trị invalid."
  },
  {
    id: "dq_i_008",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Case Standardization",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import pandas as pd\ndf = pd.DataFrame({'status': [' Paid ', 'PAID', 'paid']})\nclean = df['status'].str.strip().str.lower()\nprint(clean.tolist())",
    options: [
      "[' Paid ', 'PAID', 'paid']",
      "['paid', 'paid', 'paid']",
      "['Paid', 'PAID', 'paid']",
      "['PAID', 'PAID', 'PAID']"
    ],
    answer: 1,
    explanation: "str.strip() xóa khoảng trắng đầu/cuối, str.lower() chuyển về chữ thường. Cả ba giá trị thành 'paid'."
  },
  {
    id: "dq_i_009",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Format Standardization",
    question: "Mục tiêu chính của format standardization là gì?",
    code: "",
    options: [
      "Đưa dữ liệu cùng loại về cùng một format nhất quán",
      "Làm dữ liệu thành nhiều format khác nhau để phong phú hơn",
      "Xóa toàn bộ dữ liệu lỗi mà không cần kiểm tra",
      "Chỉ đổi màu biểu đồ"
    ],
    answer: 0,
    explanation: "Format standardization giúp các giá trị cùng loại có format thống nhất, ví dụ phone number, date, currency code hoặc status label."
  },
  {
    id: "dq_i_010",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Unit Consistency",
    question: "Vấn đề nào là ví dụ của unit inconsistency?",
    code: "",
    options: [
      "Một số dòng lưu weight theo kg, một số dòng lưu theo gram nhưng dùng chung một cột",
      "Cột amount không có giá trị âm",
      "user_id là unique",
      "status chỉ có 3 giá trị hợp lệ"
    ],
    answer: 0,
    explanation: "Unit inconsistency xảy ra khi cùng một cột chứa nhiều đơn vị đo khác nhau. Điều này có thể làm tổng, trung bình hoặc so sánh bị sai nghiêm trọng."
  },
  {
    id: "dq_i_011",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Currency / Amount Consistency",
    question: "Nếu cột amount chứa cả VND và USD nhưng không có cột currency, rủi ro lớn nhất là gì?",
    code: "",
    options: [
      "Tổng amount và so sánh giá trị sẽ bị sai vì đơn vị tiền tệ không nhất quán",
      "Dữ liệu chắc chắn chính xác hơn",
      "Không thể có duplicate records",
      "Không cần kiểm tra null nữa"
    ],
    answer: 0,
    explanation: "Trộn nhiều currency trong cùng cột amount mà không ghi nhận currency làm metric tài chính sai lệch. Cần có currency code và rule quy đổi nếu cần."
  },
  {
    id: "dq_i_012",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Cross-field Validation",
    question: "Rule nào là ví dụ của cross-field validation?",
    code: "",
    options: [
      "end_date phải lớn hơn hoặc bằng start_date",
      "order_id không được duplicate",
      "status phải viết thường",
      "category không được có khoảng trắng đầu/cuối"
    ],
    answer: 0,
    explanation: "Cross-field validation kiểm tra logic giữa nhiều cột trong cùng record. end_date >= start_date là một rule phổ biến."
  },
  {
    id: "dq_i_013",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Cross-field Validation",
    question: "Cách nào tìm các dòng có end_date trước start_date?",
    code: "import pandas as pd\ndf = pd.DataFrame({'start_date': pd.to_datetime(['2024-01-02', '2024-01-05']), 'end_date': pd.to_datetime(['2024-01-03', '2024-01-04'])})",
    options: [
      "df[df['end_date'] < df['start_date']]",
      "df[df['end_date'] > df['start_date']]",
      "df['end_date'].before(df['start_date'])",
      "df.check_dates('end_date', 'start_date')"
    ],
    answer: 0,
    explanation: "Rule hợp lệ là end_date >= start_date. Vì vậy các dòng có end_date < start_date là dòng vi phạm cần kiểm tra."
  },
  {
    id: "dq_i_014",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Foreign Key Validation",
    question: "Nếu orders.user_id phải tồn tại trong users.user_id, đây là loại kiểm tra nào?",
    code: "",
    options: [
      "Foreign key validation",
      "Case standardization",
      "Histogram profiling",
      "Tick formatting"
    ],
    answer: 0,
    explanation: "Foreign key validation kiểm tra khóa tham chiếu ở bảng con có tồn tại trong bảng cha hay không. Đây là một phần của referential integrity."
  },
  {
    id: "dq_i_015",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Referential Integrity",
    question: "Cách nào tìm orders có user_id không tồn tại trong bảng users?",
    code: "import pandas as pd\norders = pd.DataFrame({'order_id': [1, 2, 3], 'user_id': [10, 20, 30]})\nusers = pd.DataFrame({'user_id': [10, 20]})",
    options: [
      "orders[~orders['user_id'].isin(users['user_id'])]",
      "orders[orders['user_id'].isin(users['user_id'])]",
      "users[~users['user_id'].isin(orders['user_id'])]",
      "orders.merge(users, how='inner')"
    ],
    answer: 0,
    explanation: "orders[~orders['user_id'].isin(users['user_id'])] lấy các order có user_id không xuất hiện trong users, tức bản ghi orphan."
  },
  {
    id: "dq_i_016",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Record Count Check",
    question: "Record count check sau một bước transform thường giúp phát hiện vấn đề gì?",
    code: "",
    options: [
      "Dữ liệu bị mất dòng hoặc phình dòng bất thường",
      "Màu sắc biểu đồ không đẹp",
      "Tên biến Python quá dài",
      "Font chữ trong dashboard sai"
    ],
    answer: 0,
    explanation: "So sánh số dòng trước/sau transform giúp phát hiện join sai, filter sai hoặc duplicate phát sinh làm mất/phình dữ liệu."
  },
  {
    id: "dq_i_017",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Data Quality Metrics",
    question: "Metric nào phù hợp để đo completeness của một cột quan trọng?",
    code: "",
    options: [
      "Non-null rate hoặc null rate",
      "Số màu trong biểu đồ",
      "Độ dài tên file",
      "Số dòng code trong notebook"
    ],
    answer: 0,
    explanation: "Completeness thường được đo bằng tỷ lệ có giá trị hoặc tỷ lệ missing. Ví dụ date_non_null_rate >= 99%."
  },
  {
    id: "dq_i_018",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Data Freshness",
    question: "Data freshness check thường kiểm tra điều gì?",
    code: "",
    options: [
      "Dữ liệu mới nhất có đủ gần thời điểm hiện tại hoặc đúng SLA cập nhật không",
      "Dữ liệu có nhiều cột text không",
      "Dữ liệu có được lưu bằng Excel không",
      "Dữ liệu có dùng màu xanh không"
    ],
    answer: 0,
    explanation: "Data freshness kiểm tra độ mới của dữ liệu, ví dụ max(date) có phải là ngày hôm qua hoặc batch hôm nay đã chạy chưa."
  },
  {
    id: "dq_i_019",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Data Quality Thresholds",
    question: "Threshold nào là ví dụ hợp lý cho kiểm tra null rate?",
    code: "",
    options: [
      "date_null_rate phải <= 1%",
      "date phải có màu xanh",
      "date phải luôn có đúng 5 ký tự",
      "date phải duplicate ít nhất 50%"
    ],
    answer: 0,
    explanation: "Data quality threshold đặt ngưỡng chấp nhận được cho metric. Ví dụ cột date quan trọng có null rate <= 1% là rule rõ ràng."
  },
  {
    id: "dq_i_020",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Outlier Detection",
    question: "Outlier detection nên được hiểu như thế nào?",
    code: "",
    options: [
      "Phát hiện giá trị bất thường cần kiểm tra thêm, không mặc định là sai",
      "Tự động xóa mọi giá trị lớn nhất",
      "Chỉ áp dụng cho dữ liệu text",
      "Luôn thay mọi outlier bằng 0"
    ],
    answer: 0,
    explanation: "Outlier có thể là lỗi dữ liệu hoặc sự kiện thật. Cần điều tra nguyên nhân và ảnh hưởng trước khi xử lý, không nên xóa máy móc."
  },
  {
    id: "dq_i_021",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Outlier Detection",
    question: "Cách nào tính IQR cho cột amount trong pandas?",
    code: "import pandas as pd\ndf = pd.DataFrame({'amount': [10, 20, 30, 100]})",
    options: [
      "df['amount'].quantile(0.75) - df['amount'].quantile(0.25)",
      "df['amount'].max() + df['amount'].min()",
      "df['amount'].mean() / df['amount'].count()",
      "df['amount'].std() + df['amount'].mean()"
    ],
    answer: 0,
    explanation: "IQR = Q3 - Q1 = quantile(0.75) - quantile(0.25). Đây là cách phổ biến để phát hiện outlier theo rule 1.5*IQR."
  },
  {
    id: "dq_i_022",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Business Rule Validation",
    question: "Rule nào là ví dụ của business rule validation?",
    code: "",
    options: [
      "Nếu status = 'cancelled' thì paid_amount phải bằng 0",
      "Tên DataFrame phải là df",
      "Notebook phải có đúng 10 cell",
      "Cột đầu tiên phải luôn là category"
    ],
    answer: 0,
    explanation: "Business rule validation kiểm tra logic nghiệp vụ. Ví dụ đơn đã cancelled thì paid_amount phải bằng 0, tùy định nghĩa business."
  },
  {
    id: "dq_i_023",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Handling Dirty Data Safely",
    question: "Khi phát hiện amount âm trong dữ liệu, cách xử lý an toàn nhất thường là gì?",
    code: "",
    options: [
      "Ghi nhận rule vi phạm, kiểm tra nguyên nhân và chỉ sửa/xóa khi có logic rõ ràng",
      "Xóa toàn bộ dataset",
      "Đổi mọi amount âm thành 0 trong mọi trường hợp",
      "Bỏ qua vì số âm luôn không ảnh hưởng"
    ],
    answer: 0,
    explanation: "Không nên sửa dữ liệu bẩn một cách máy móc. Cần log issue, kiểm tra nguồn gốc, business meaning và tác động trước khi xử lý."
  },
  {
    id: "dq_i_024",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Common Pandas Cleaning Functions",
    question: "Hàm nào thường dùng để loại bỏ duplicate rows trong pandas?",
    code: "import pandas as pd\ndf = pd.DataFrame({'x': [1, 1, 2]})",
    options: [
      "df.drop_duplicates()",
      "df.remove_duplicates()",
      "df.unique_rows()",
      "df.clean_duplicates()"
    ],
    answer: 0,
    explanation: "df.drop_duplicates() dùng để loại bỏ duplicate rows. Cần cẩn thận chọn subset phù hợp với grain dữ liệu."
  },
  {
    id: "dq_i_025",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Common Pandas Validation Patterns",
    question: "Cách nào kiểm tra tất cả amount đều không âm?",
    code: "import pandas as pd\ndf = pd.DataFrame({'amount': [10, 0, 5]})",
    options: [
      "(df['amount'] >= 0).all()",
      "(df['amount'] >= 0).any()",
      "df['amount'].is_unique",
      "df['amount'].notna().sum()"
    ],
    answer: 0,
    explanation: "(condition).all() trả về True nếu tất cả dòng thỏa điều kiện. any() chỉ cần ít nhất một dòng thỏa, không đủ cho validation toàn cột."
  },
  {
    id: "dq_i_026",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Common Errors",
    question: "Lỗi tư duy phổ biến khi dùng dropna() là gì?",
    code: "",
    options: [
      "Xóa dòng thiếu mà không đánh giá cột nào thiếu, nguyên nhân và tác động phân tích",
      "Không thể dùng dropna với pandas",
      "dropna luôn làm tăng số dòng",
      "dropna chỉ dùng cho dữ liệu hình ảnh"
    ],
    answer: 0,
    explanation: "dropna() có thể làm mất mẫu phân tích và gây bias nếu dùng máy móc. Nên kiểm tra null rate, cột bị thiếu và tác động trước khi xóa."
  },
  {
    id: "dq_i_027",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Inconsistent Labels",
    question: "Vấn đề nào là inconsistent labels?",
    code: "",
    options: [
      "Cùng một trạng thái được ghi là 'paid', 'Paid', 'PAID' hoặc 'payment_done'",
      "amount luôn lớn hơn hoặc bằng 0",
      "order_id không duplicate",
      "date đã chuyển đúng datetime"
    ],
    answer: 0,
    explanation: "Inconsistent labels làm groupby/filter sai vì cùng một ý nghĩa bị tách thành nhiều nhóm. Cần mapping hoặc chuẩn hóa label rõ ràng."
  },
  {
    id: "dq_i_028",
    library: "Data Quality",
    level: "Intermediate",
    topic: "Data Quality Report",
    question: "Một data quality report cơ bản nên có thông tin nào?",
    code: "",
    options: [
      "Số dòng, null rate, duplicate rate, rule violations, freshness và severity nếu có",
      "Chỉ ảnh minh họa đẹp",
      "Chỉ tên người tạo file",
      "Chỉ số lượng màu trong dashboard"
    ],
    answer: 0,
    explanation: "Data quality report nên tóm tắt các chỉ số giúp đánh giá độ tin cậy của dữ liệu, bao gồm missing, duplicate, rule violations, freshness và mức độ ảnh hưởng."
  },
  {
    id: "dq_a_001",
    library: "Data Quality",
    level: "Advanced",
    topic: "Validation Pipeline",
    question: "Validation pipeline nên được đặt ở đâu trong quy trình dữ liệu?",
    code: "",
    options: [
      "Ở các điểm quan trọng trước/sau transform hoặc trước khi dùng dữ liệu cho report/model",
      "Chỉ sau khi dashboard đã publish 1 năm",
      "Chỉ trong file PowerPoint",
      "Không cần nếu dữ liệu có nhiều dòng"
    ],
    answer: 0,
    explanation: "Validation nên chạy tại các điểm kiểm soát quan trọng để phát hiện lỗi sớm: sau ingest, sau transform, trước publish hoặc trước modeling/reporting."
  },
  {
    id: "dq_a_002",
    library: "Data Quality",
    level: "Advanced",
    topic: "Cleaning Pipeline",
    question: "Điểm quan trọng khi thiết kế cleaning pipeline là gì?",
    code: "",
    options: [
      "Các bước cleaning nên có rule rõ ràng, có thể tái lập và log được thay đổi",
      "Cleaning nên làm thủ công mỗi lần để linh hoạt hơn",
      "Cleaning chỉ cần xóa tất cả dòng lỗi",
      "Cleaning không cần quan tâm dữ liệu gốc"
    ],
    answer: 0,
    explanation: "Cleaning pipeline tốt cần reproducible, có rule rõ ràng, không phá dữ liệu gốc và có log/audit để biết đã thay đổi gì."
  },
  {
    id: "dq_a_003",
    library: "Data Quality",
    level: "Advanced",
    topic: "Cross-table Validation",
    question: "Cross-table validation khác gì với cross-field validation?",
    code: "",
    options: [
      "Cross-table kiểm tra logic giữa nhiều bảng, cross-field kiểm tra logic giữa nhiều cột trong cùng một bảng",
      "Hai khái niệm hoàn toàn giống nhau",
      "Cross-table chỉ dùng cho biểu đồ",
      "Cross-field chỉ dùng cho dữ liệu ảnh"
    ],
    answer: 0,
    explanation: "Cross-field validation kiểm tra trong cùng một record/bảng, ví dụ end_date >= start_date. Cross-table validation kiểm tra giữa bảng, ví dụ orders.user_id tồn tại trong users."
  },
  {
    id: "dq_a_004",
    library: "Data Quality",
    level: "Advanced",
    topic: "Referential Integrity",
    question: "Nếu số orphan orders tăng đột ngột sau một batch ETL, bước phân tích hợp lý là gì?",
    code: "",
    options: [
      "So sánh batch hiện tại với batch trước, kiểm tra join key, nguồn users và thời điểm load dữ liệu",
      "Xóa tất cả orphan orders ngay lập tức không cần log",
      "Đổi mọi user_id thành 0",
      "Bỏ qua vì orphan records luôn đúng"
    ],
    answer: 0,
    explanation: "Orphan records tăng đột ngột có thể do lỗi load order trước users, sai key mapping, thiếu dimension hoặc lỗi ETL. Cần điều tra root cause trước khi xử lý."
  },
  {
    id: "dq_a_005",
    library: "Data Quality",
    level: "Advanced",
    topic: "Data Drift Basics",
    question: "Data drift trong data quality/monitoring thường nghĩa là gì?",
    code: "",
    options: [
      "Phân phối hoặc pattern dữ liệu thay đổi đáng kể so với baseline",
      "Dữ liệu được lưu ở nhiều sheet Excel",
      "Tên cột được viết hoa",
      "Dữ liệu có đúng một dòng"
    ],
    answer: 0,
    explanation: "Data drift là sự thay đổi phân phối hoặc pattern dữ liệu theo thời gian. Drift có thể là thay đổi thật của business hoặc lỗi pipeline/source."
  },
  {
    id: "dq_a_006",
    library: "Data Quality",
    level: "Advanced",
    topic: "Anomaly Detection Basics",
    question: "Nếu record count hằng ngày thường khoảng 100,000 nhưng hôm nay chỉ có 5,000, đây là tín hiệu gì?",
    code: "",
    options: [
      "Anomaly cần điều tra về data freshness, pipeline hoặc source ingestion",
      "Dữ liệu chắc chắn tốt hơn vì ít dòng hơn",
      "Không cần kiểm tra nếu file vẫn mở được",
      "Chỉ là vấn đề màu sắc chart"
    ],
    answer: 0,
    explanation: "Record count giảm mạnh là anomaly quan trọng. Có thể do batch chưa chạy xong, lỗi ingestion, filter sai hoặc nguồn dữ liệu thay đổi."
  },
  {
    id: "dq_a_007",
    library: "Data Quality",
    level: "Advanced",
    topic: "Data Quality Monitoring",
    question: "Data quality monitoring khác data profiling một lần ở điểm nào?",
    code: "",
    options: [
      "Monitoring theo dõi metric/rule định kỳ và cảnh báo khi vượt ngưỡng",
      "Monitoring chỉ dùng để vẽ chart đẹp hơn",
      "Profiling luôn tự sửa dữ liệu còn monitoring thì không có metric",
      "Hai khái niệm không liên quan đến dữ liệu"
    ],
    answer: 0,
    explanation: "Profiling thường là khám phá trạng thái dữ liệu tại một thời điểm. Monitoring là theo dõi liên tục các chỉ số như null rate, freshness, duplicate rate và cảnh báo khi bất thường."
  },
  {
    id: "dq_a_008",
    library: "Data Quality",
    level: "Advanced",
    topic: "Root Cause of Data Issues",
    question: "Khi phát hiện null rate của cột date tăng từ 0.1% lên 20%, câu hỏi root cause nào nên ưu tiên?",
    code: "",
    options: [
      "Lỗi bắt đầu từ batch/source nào, có thay đổi schema hoặc logic mapping không?",
      "Màu dashboard có cần đổi không?",
      "Có nên xóa toàn bộ bảng ngay không?",
      "Có nên đổi tên cột date thành abc không?"
    ],
    answer: 0,
    explanation: "Null rate tăng đột biến cần truy ngược batch, source, schema, mapping hoặc transform gần nhất. Đây là tư duy root cause thay vì chỉ sửa triệu chứng."
  },
  {
    id: "dq_a_009",
    library: "Data Quality",
    level: "Advanced",
    topic: "Logging Data Issues",
    question: "Một issue log dữ liệu nên ghi thông tin nào?",
    code: "",
    options: [
      "Rule vi phạm, số dòng ảnh hưởng, thời điểm phát hiện, severity, owner và trạng thái xử lý",
      "Chỉ emoji mô tả cảm xúc",
      "Chỉ màu sắc chart",
      "Chỉ tên laptop đang dùng"
    ],
    answer: 0,
    explanation: "Issue log giúp theo dõi và xử lý lỗi dữ liệu có trách nhiệm. Nên có rule, impact, severity, owner, status và timestamp."
  },
  {
    id: "dq_a_010",
    library: "Data Quality",
    level: "Advanced",
    topic: "Business Impact",
    question: "Vì sao duplicate order_id trong bảng orders có thể nghiêm trọng với dashboard doanh thu?",
    code: "",
    options: [
      "Có thể làm doanh thu và số đơn bị đếm trùng",
      "Chỉ làm title chart dài hơn",
      "Làm dữ liệu tự động nhanh hơn",
      "Không ảnh hưởng nếu order_id là số"
    ],
    answer: 0,
    explanation: "Nếu grain là 1 dòng = 1 order, duplicate order_id có thể làm doanh thu, số đơn, conversion hoặc AOV bị sai. Cần kiểm tra key uniqueness trước khi báo cáo."
  },
  {
    id: "dq_a_011",
    library: "Data Quality",
    level: "Advanced",
    topic: "Cross-field Validation",
    question: "Rule nào kiểm tra logic giữa amount, quantity và unit_price?",
    code: "",
    options: [
      "amount nên xấp xỉ quantity * unit_price theo tolerance cho phép",
      "amount phải luôn bằng user_id",
      "quantity phải luôn là string",
      "unit_price phải null để tránh sai số"
    ],
    answer: 0,
    explanation: "Cross-field validation có thể kiểm tra amount = quantity * unit_price, nhưng nên cho phép tolerance nếu có rounding, tax hoặc discount tùy business rule."
  },
  {
    id: "dq_a_012",
    library: "Data Quality",
    level: "Advanced",
    topic: "Data Quality Thresholds",
    question: "Vì sao threshold data quality nên gắn với mức độ quan trọng của cột?",
    code: "",
    options: [
      "Vì cột critical như order_id/date thường cần ngưỡng nghiêm ngặt hơn cột ít dùng",
      "Vì mọi cột luôn cần cùng một threshold",
      "Vì threshold chỉ để trang trí report",
      "Vì cột numeric không bao giờ cần threshold"
    ],
    answer: 0,
    explanation: "Không phải cột nào cũng critical như nhau. Primary key, date, amount thường cần threshold nghiêm ngặt vì ảnh hưởng trực tiếp đến KPI và join."
  },
  {
    id: "dq_a_013",
    library: "Data Quality",
    level: "Advanced",
    topic: "Accuracy",
    question: "Accuracy trong data quality khó kiểm tra hơn validity vì lý do nào?",
    code: "",
    options: [
      "Dữ liệu có thể đúng format nhưng vẫn sai so với thực tế",
      "Accuracy chỉ là tên khác của duplicate rate",
      "Accuracy không liên quan đến dữ liệu",
      "Validity luôn cần kiểm tra bằng biểu đồ pie"
    ],
    answer: 0,
    explanation: "Validity kiểm tra dữ liệu theo rule/format, còn accuracy kiểm tra dữ liệu có phản ánh đúng thực tế không. Một amount có thể >= 0 nhưng vẫn nhập sai số tiền."
  },
  {
    id: "dq_a_014",
    library: "Data Quality",
    level: "Advanced",
    topic: "Consistency",
    question: "Ví dụ nào thể hiện consistency issue giữa hai bảng?",
    code: "",
    options: [
      "Tổng amount theo ngày trong bảng summary khác đáng kể với tổng từ bảng orders raw cùng phạm vi",
      "Cột amount không null",
      "order_id là unique trong orders",
      "status chỉ có giá trị hợp lệ"
    ],
    answer: 0,
    explanation: "Consistency kiểm tra dữ liệu có nhất quán giữa hệ thống/bảng/logic không. Summary và raw lệch nhau có thể do transform, filter hoặc load thiếu."
  },
  {
    id: "dq_a_015",
    library: "Data Quality",
    level: "Advanced",
    topic: "Validation Pipeline",
    question: "Khi validation rule fail trong pipeline, hành động nào thường hợp lý nhất?",
    code: "",
    options: [
      "Phân loại severity; rule critical có thể chặn pipeline, rule warning có thể log và cảnh báo",
      "Luôn bỏ qua mọi lỗi để pipeline chạy nhanh",
      "Luôn xóa toàn bộ dữ liệu",
      "Luôn sửa thành 0"
    ],
    answer: 0,
    explanation: "Không phải lỗi nào cũng cùng mức độ. Rule critical như primary key duplicate có thể cần fail pipeline; lỗi nhẹ hơn có thể log, cảnh báo và theo dõi."
  },
  {
    id: "dq_a_016",
    library: "Data Quality",
    level: "Advanced",
    topic: "Data Quality Metrics",
    question: "Bộ metric nào phù hợp để monitor bảng orders hằng ngày?",
    code: "",
    options: [
      "record_count, max_order_date, order_id_duplicate_rate, amount_negative_count, status_invalid_count",
      "số màu trong dashboard, font size, số slide",
      "số comment trong notebook, tên máy tính, độ dài file path",
      "số lượng chart pie đã vẽ"
    ],
    answer: 0,
    explanation: "Các metric như record count, freshness, duplicate rate, invalid status và negative amount trực tiếp phản ánh chất lượng bảng orders."
  },
  {
    id: "dq_a_017",
    library: "Data Quality",
    level: "Advanced",
    topic: "Outlier Treatment",
    question: "Khi xử lý outlier, phương án nào thể hiện tư duy thận trọng?",
    code: "",
    options: [
      "Giữ raw data, tạo flag outlier và chỉ winsorize/remove khi có lý do phân tích rõ ràng",
      "Luôn xóa top 5% giá trị lớn nhất",
      "Luôn thay outlier bằng mean",
      "Luôn coi outlier là lỗi nhập liệu"
    ],
    answer: 0,
    explanation: "Outlier có thể là tín hiệu thật hoặc lỗi. Tạo flag và giữ raw data giúp phân tích minh bạch, tránh phá hủy thông tin quan trọng."
  },
  {
    id: "dq_a_018",
    library: "Data Quality",
    level: "Advanced",
    topic: "Best Practice for Data Analyst",
    question: "Tư duy đúng nhất về data quality đối với Data Analyst là gì?",
    code: "",
    options: [
      "Không chỉ sửa lỗi, mà cần phát hiện, đo lường, giải thích tác động và phòng ngừa lỗi lặp lại",
      "Chỉ cần xóa dữ liệu sai cho nhanh",
      "Chỉ cần tin hoàn toàn vào file đầu vào",
      "Chỉ quan tâm chart cuối cùng có đẹp không"
    ],
    answer: 0,
    explanation: "Data quality là một quy trình liên tục gồm profiling, validation, cleaning, monitoring, root cause và communication về impact. Đây là năng lực rất quan trọng của Data Analyst."
  },
  {
    id: "dq_e_001",
    library: "Data Quality",
    level: "Expert",
    topic: "Data Quality Monitoring",
    question: "Trong hệ thống production, vì sao chỉ kiểm tra schema là chưa đủ?",
    code: "",
    options: [
      "Vì schema đúng nhưng dữ liệu vẫn có thể sai về phân phối, freshness, duplicate, rule nghiệp vụ hoặc accuracy",
      "Vì schema không liên quan đến dữ liệu",
      "Vì schema chỉ dùng cho biểu đồ",
      "Vì schema đúng thì mọi KPI chắc chắn đúng"
    ],
    answer: 0,
    explanation: "Schema validation chỉ kiểm tra cấu trúc. Dữ liệu vẫn có thể bị stale, duplicate, drift, invalid business logic hoặc sai so với thực tế dù schema không đổi."
  },
  {
    id: "dq_e_002",
    library: "Data Quality",
    level: "Expert",
    topic: "Data Drift Basics",
    question: "Khi phân phối amount thay đổi mạnh so với baseline, cách diễn giải đúng nhất là gì?",
    code: "",
    options: [
      "Đó là tín hiệu cần điều tra; có thể là thay đổi business thật hoặc lỗi dữ liệu/pipeline",
      "Chắc chắn là lỗi và phải xóa dữ liệu mới",
      "Chắc chắn là business tăng trưởng tốt",
      "Không cần quan tâm nếu schema không đổi"
    ],
    answer: 0,
    explanation: "Drift không tự chứng minh đúng hay sai. Nó là tín hiệu cảnh báo cần phân tích thêm bằng context, source change, pipeline logs và business events."
  },
  {
    id: "dq_e_003",
    library: "Data Quality",
    level: "Expert",
    topic: "Data Quality Thresholds",
    question: "Vì sao threshold dạng tĩnh có thể không đủ cho monitoring dữ liệu theo thời gian?",
    code: "",
    options: [
      "Vì dữ liệu có seasonality hoặc biến động tự nhiên, nên cần baseline động hoặc so sánh theo lịch sử",
      "Vì threshold tĩnh luôn chính xác trong mọi trường hợp",
      "Vì threshold chỉ áp dụng cho biểu đồ",
      "Vì dữ liệu thời gian không cần kiểm tra chất lượng"
    ],
    answer: 0,
    explanation: "Ví dụ record_count có thể thấp vào cuối tuần và cao vào ngày thường. Threshold động theo baseline lịch sử giúp giảm false alarm và phát hiện anomaly tốt hơn."
  },
  {
    id: "dq_e_004",
    library: "Data Quality",
    level: "Expert",
    topic: "Root Cause of Data Issues",
    question: "Khi một metric data quality fail, vì sao nên phân biệt detection, diagnosis và remediation?",
    code: "",
    options: [
      "Detection phát hiện lỗi, diagnosis tìm nguyên nhân, remediation xử lý/phòng ngừa lỗi lặp lại",
      "Ba bước này hoàn toàn giống nhau",
      "Detection là vẽ chart, diagnosis là đổi màu, remediation là xóa dashboard",
      "Chỉ remediation là cần thiết, không cần phát hiện"
    ],
    answer: 0,
    explanation: "Quy trình mature không chỉ báo lỗi mà còn cần chẩn đoán nguyên nhân và đưa ra hành động khắc phục/phòng ngừa. Điều này giúp giảm lỗi lặp lại."
  },
  {
    id: "dq_e_005",
    library: "Data Quality",
    level: "Expert",
    topic: "Validation Pipeline",
    question: "Vì sao cần lưu lại kết quả validation theo từng batch?",
    code: "",
    options: [
      "Để audit, theo dõi xu hướng chất lượng dữ liệu và truy ngược batch bắt đầu phát sinh lỗi",
      "Để làm file lớn hơn",
      "Để thay thế hoàn toàn dữ liệu raw",
      "Để tránh cần viết rule validation"
    ],
    answer: 0,
    explanation: "Lưu kết quả validation theo batch giúp theo dõi trend, điều tra root cause, audit và chứng minh chất lượng dữ liệu trước khi publish."
  },
  {
    id: "dq_e_006",
    library: "Data Quality",
    level: "Expert",
    topic: "Best Practice for Data Analyst",
    question: "Trong môi trường nhiều stakeholder, data quality issue nên được communicate như thế nào?",
    code: "",
    options: [
      "Nêu rõ rule fail, phạm vi ảnh hưởng, KPI bị ảnh hưởng, mức độ nghiêm trọng và hành động đề xuất",
      "Chỉ nói 'data bị sai' mà không cần chi tiết",
      "Chỉ gửi toàn bộ raw data cho mọi người",
      "Không cần nói nếu đã sửa tạm trong notebook"
    ],
    answer: 0,
    explanation: "Stakeholder cần hiểu lỗi gì, ảnh hưởng đến đâu, KPI nào bị ảnh hưởng và nên làm gì tiếp theo. Communication rõ ràng giúp ra quyết định an toàn hơn."
  }
];