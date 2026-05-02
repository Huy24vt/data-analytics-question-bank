// =========================================================
// PANDAS QUESTION BANK
// Add/edit Pandas questions here only.
// Schema:
// {
//   id, library, level, topic, question, code, options, answer, explanation
// }
// =========================================================

const PANDAS_QUESTIONS = [
  // =========================
  // Foundation
  // =========================
  {
    id: "pd_f_001",
    library: "Pandas",
    level: "Foundation",
    topic: "Import & DataFrame",
    question: "Alias phổ biến nhất khi import pandas là gì?",
    code: "import pandas as ?",
    options: ["np", "pd", "plt", "sns"],
    answer: 1,
    explanation: "Pandas thường được import bằng alias pd: import pandas as pd. np dùng cho NumPy, plt cho matplotlib.pyplot, sns cho seaborn."
  },
  {
    id: "pd_f_002",
    library: "Pandas",
    level: "Foundation",
    topic: "Data Structure",
    question: "Cấu trúc dữ liệu 2 chiều dạng bảng trong pandas là gì?",
    code: "",
    options: ["Series", "DataFrame", "Index", "Array"],
    answer: 1,
    explanation: "DataFrame là cấu trúc 2 chiều gồm dòng và cột. Series là 1 chiều, thường đại diện cho một cột."
  },
  {
    id: "pd_f_003",
    library: "Pandas",
    level: "Foundation",
    topic: "Read File",
    question: "Lệnh nào dùng để đọc file CSV vào DataFrame?",
    code: "",
    options: [
      "pd.open_csv('data.csv')",
      "pd.read_csv('data.csv')",
      "pd.load_csv('data.csv')",
      "pd.import_csv('data.csv')"
    ],
    answer: 1,
    explanation: "pd.read_csv() là hàm chuẩn để đọc CSV. Kết quả thường là một DataFrame."
  },
  {
    id: "pd_f_004",
    library: "Pandas",
    level: "Foundation",
    topic: "Inspect Data",
    question: "df.shape trả về gì?",
    code: "",
    options: [
      "Tuple gồm số dòng và số cột",
      "Danh sách tên cột trong DataFrame",
      "Kiểu dữ liệu hiện tại của từng cột",
      "Số lượng missing value theo từng cột"
    ],
    answer: 2,
    explanation: "df.shape trả về tuple dạng (số dòng, số cột), ví dụ (1000, 12)."
  },
  {
    id: "pd_f_005",
    library: "Pandas",
    level: "Foundation",
    topic: "Column Selection",
    question: "Cách đúng để chọn cột sales là gì?",
    code: "",
    options: ["df(sales)", "df['sales']", "df::sales", "df->sales"],
    answer: 1,
    explanation: "df['sales'] trả về Series. Nếu muốn DataFrame một cột, dùng df[['sales']]."
  },
  {
    id: "pd_f_006",
    library: "Pandas",
    level: "Foundation",
    topic: "Filter",
    question: "Cách lọc các dòng có sales > 1000 là gì?",
    code: "",
    options: [
      "df['sales' > 1000]",
      "df[df['sales'] > 1000]",
      "df.where(df['sales'] > 1000)",
      "df.filter(df['sales'] > 1000)"
    ],
    answer: 1,
    explanation: "df['sales'] > 1000 tạo boolean mask. df[mask] dùng mask đó để lọc dòng."
  },
  {
    id: "pd_f_007",
    library: "Pandas",
    level: "Foundation",
    topic: "Missing Values",
    question: "Muốn đếm missing value theo từng cột, câu nào đúng?",
    code: "",
    options: [
      "df.isna().sum()",
      "df.notna().sum()",
      "df.isna().count()",
      "df.count().isna()"
    ],
    answer: 0,
    explanation: "df.isna() trả về True/False cho ô missing. sum() cộng True theo cột, cho ra số missing từng cột."
  },
  {
    id: "pd_f_008",
    library: "Pandas",
    level: "Foundation",
    topic: "Data Type",
    question: "Muốn chuyển cột event_date sang datetime, dùng lệnh nào?",
    code: "",
    options: [
      "pd.to_datetime(df['event_date'])",
      "pd.to_numeric(df['event_date'])",
      "df['event_date'].astype('category')",
      "df['event_date'].str.to_date()"
    ],
    answer: 0,
    explanation: "pd.to_datetime() parse chuỗi hoặc object sang datetime64, sau đó có thể dùng accessor .dt."
  },
  {
    id: "pd_f_009",
    library: "Pandas",
    level: "Foundation",
    topic: "Create Column",
    question: "Muốn tạo cột profit = sales - cost, cách nào đúng?",
    code: "",
    options: [
      "df['profit'] = df['sales'] - df['cost']",
      "df['profit'] == df['sales'] - df['cost']",
      "df['profit'] = df[['sales', 'cost']]",
      "df['profit'] = df['sales'] + df['cost']"
    ],
    answer: 0,
    explanation: "Dùng dấu = để gán cột mới. Dấu == là so sánh, không tạo cột."
  },
  {
    id: "pd_f_010",
    library: "Pandas",
    level: "Foundation",
    topic: "Export",
    question: "Muốn xuất DataFrame ra CSV không kèm index, dùng lệnh nào?",
    code: "",
    options: [
      "df.to_csv('output.csv', index=False)",
      "df.to_csv('output.csv', index=True)",
      "pd.read_csv('output.csv', index=False)",
      "df.to_excel('output.csv', index=False)"
    ],
    answer: 0,
    explanation: "df.to_csv(..., index=False) tránh ghi thêm cột index không cần thiết vào file output."
  },
  {
    id: "pd_f_011",
    library: "Pandas",
    level: "Foundation",
    topic: "Inspect Data",
    question: "df.head(10) dùng để làm gì?",
    code: "df.head(10)",
    options: [
      "Xem 10 dòng đầu tiên",
      "Xem 10 dòng cuối cùng",
      "Xóa 10 dòng đầu tiên",
      "Sort 10 dòng đầu tiên"
    ],
    answer: 0,
    explanation: "head(n) trả về n dòng đầu tiên, thường dùng để kiểm tra nhanh cấu trúc dữ liệu."
  },
  {
    id: "pd_f_012",
    library: "Pandas",
    level: "Foundation",
    topic: "Inspect Data",
    question: "df.info() hữu ích nhất để kiểm tra điều gì?",
    code: "df.info()",
    options: [
      "Số dòng, non-null và dtype từng cột",
      "Correlation giữa các cột numeric",
      "Biểu đồ phân phối của từng cột",
      "Tự động sửa các missing value"
    ],
    answer: 0,
    explanation: "info() cho biết dtype, non-null count và memory usage, rất hữu ích khi kiểm tra dữ liệu mới đọc vào."
  },
  {
    id: "pd_f_013",
    library: "Pandas",
    level: "Foundation",
    topic: "Index",
    question: "df.reset_index(drop=True) thường dùng để làm gì?",
    code: "df = df.reset_index(drop=True)",
    options: [
      "Reset index về 0..n-1 và bỏ index cũ",
      "Reset index và giữ index cũ thành cột",
      "Sort index theo thứ tự giảm dần",
      "Đổi tên cột index thành drop"
    ],
    answer: 0,
    explanation: "drop=True giúp bỏ index cũ. Nếu drop=False, index cũ sẽ trở thành một cột mới."
  },
  {
    id: "pd_f_014",
    library: "Pandas",
    level: "Foundation",
    topic: "Sort Values",
    question: "Muốn sort sales giảm dần, dùng lệnh nào?",
    code: "",
    options: [
      "df.sort_values('sales', ascending=False)",
      "df.sort_values('sales', ascending=True)",
      "df.sort_index('sales', ascending=False)",
      "df.order_values('sales', ascending=False)"
    ],
    answer: 0,
    explanation: "sort_values dùng để sort theo giá trị cột. ascending=False là giảm dần."
  },
  {
    id: "pd_f_015",
    library: "Pandas",
    level: "Foundation",
    topic: "Value Counts",
    question: "df['status'].value_counts() dùng để làm gì?",
    code: "df['status'].value_counts()",
    options: [
      "Đếm số dòng theo từng giá trị status",
      "Đếm số ký tự trong từng giá trị status",
      "Đổi dtype của status thành category",
      "Xóa các giá trị status bị duplicate"
    ],
    answer: 0,
    explanation: "value_counts() rất hữu ích để kiểm tra phân phối category, ví dụ số dòng theo từng trạng thái."
  },
  {
    id: "pd_f_016",
    library: "Pandas",
    level: "Foundation",
    topic: "Copy DataFrame",
    question: "Vì sao thường dùng .copy() sau khi lọc dữ liệu rồi muốn sửa subset?",
    code: "sub = df[df['group_id'] == 'A'].copy()",
    options: [
      "Tạo bản copy rõ ràng trước khi sửa subset",
      "Tự động sort subset theo tất cả cột",
      "Tự động xóa null trong subset",
      "Ép toàn bộ subset sang string"
    ],
    answer: 0,
    explanation: "copy() giúp tránh nhầm lẫn giữa view và copy khi tạo subset rồi gán thêm hoặc sửa cột."
  },

  // =========================
  // Intermediate
  // =========================
  {
    id: "pd_i_001",
    library: "Pandas",
    level: "Intermediate",
    topic: "Multiple Conditions",
    question: "Muốn lọc group_id = 'A' và sales > 1000, cú pháp nào đúng?",
    code: "",
    options: [
      "df[df['group_id'] == 'A' and df['sales'] > 1000]",
      "df[(df['group_id'] == 'A') & (df['sales'] > 1000)]",
      "df[(df['group_id'] == 'A') && (df['sales'] > 1000)]",
      "df.where((df['group_id'] == 'A') and (df['sales'] > 1000))"
    ],
    answer: 1,
    explanation: "Trong pandas, dùng & cho AND, | cho OR, và từng điều kiện nên đặt trong ngoặc tròn."
  },
  {
    id: "pd_i_002",
    library: "Pandas",
    level: "Intermediate",
    topic: "Groupby",
    question: "Muốn tính tổng sales theo group_id, câu nào đúng?",
    code: "",
    options: [
      "df.groupby('group_id')['sales'].sum()",
      "df.groupby('sales')['group_id'].sum()",
      "df['sales'].groupby_sum('group_id')",
      "df.sum('sales').groupby('group_id')"
    ],
    answer: 0,
    explanation: "groupby chia dữ liệu theo group_id, sau đó sum sales trong từng nhóm."
  },
  {
    id: "pd_i_003",
    library: "Pandas",
    level: "Intermediate",
    topic: "Named Aggregation",
    question: "Muốn tính total_sales và số record unique theo group_id, cú pháp nào đúng?",
    code: "",
    options: [
      "df.groupby('group_id').agg(total_sales=('sales','sum'), records=('record_id','nunique'))",
      "df.groupby('group_id').agg(total_sales=('sales','mean'), records=('record_id','count'))",
      "df.groupby('sales').agg(total_sales=('group_id','sum'), records=('record_id','nunique'))",
      "df.agg(total_sales=('sales','sum'), records=('record_id','nunique')).groupby('group_id')"
    ],
    answer: 0,
    explanation: "Named aggregation có dạng tên_cột_mới=(cột_gốc, hàm_agg). Đây là cách rõ ràng để tạo bảng summary."
  },
  {
    id: "pd_i_004",
    library: "Pandas",
    level: "Intermediate",
    topic: "Merge",
    question: "Nếu muốn giữ toàn bộ dòng ở bảng left_df dù không match với right_df, dùng join nào?",
    code: "left_df.merge(right_df, on='id', how=?)",
    options: ["inner", "left", "right", "cross"],
    answer: 1,
    explanation: "left join giữ tất cả dòng ở bảng trái. Dòng không match sẽ có NaN ở các cột từ bảng phải."
  },
  {
    id: "pd_i_005",
    library: "Pandas",
    level: "Intermediate",
    topic: "Pivot Table",
    question: "Muốn tạo bảng tổng sales theo group_id ở dòng và month ở cột, hàm nào phù hợp nhất?",
    code: "",
    options: ["pd.pivot_table()", "pd.merge()", "pd.dropna()", "pd.astype()"],
    answer: 0,
    explanation: "pivot_table giống Pivot Table Excel, dùng index, columns, values và aggfunc để tổng hợp dữ liệu."
  },
  {
    id: "pd_i_006",
    library: "Pandas",
    level: "Intermediate",
    topic: "Datetime",
    question: "Sau khi cột date là datetime, muốn lấy tháng thì dùng gì?",
    code: "",
    options: [
      "df['date'].month",
      "df['date'].dt.month",
      "pd.month(df['date'])",
      "df['date'].str.month"
    ],
    answer: 1,
    explanation: ".dt là accessor cho Series datetime: .dt.month, .dt.year, .dt.dayofweek, .dt.to_period()."
  },
  {
    id: "pd_i_007",
    library: "Pandas",
    level: "Intermediate",
    topic: "Rolling",
    question: "Muốn tính trung bình trượt 7 dòng gần nhất của sales, cú pháp nào đúng?",
    code: "",
    options: [
      "df['ma7'] = df['sales'].rolling(7).mean()",
      "df['ma7'] = df['sales'].rolling(7).sum()",
      "df['ma7'] = df['sales'].shift(7).mean()",
      "df['ma7'] = df['sales'].expanding(7).mean()"
    ],
    answer: 0,
    explanation: "rolling(7).mean() tính mean trên cửa sổ 7 dòng. Với time series, cần sort theo date trước."
  },
  {
    id: "pd_i_008",
    library: "Pandas",
    level: "Intermediate",
    topic: "Shift",
    question: "df['sales'].shift(1) thường dùng để làm gì?",
    code: "df['prev_sales'] = df['sales'].shift(1)",
    options: [
      "Lấy sales của dòng trước",
      "Lấy sales của dòng sau",
      "Sort sales tăng dần",
      "Chuyển sales sang datetime"
    ],
    answer: 0,
    explanation: "shift(1) tạo lag feature, thường dùng để tính tăng trưởng, so sánh với kỳ trước hoặc phát hiện thay đổi."
  },
  {
    id: "pd_i_009",
    library: "Pandas",
    level: "Intermediate",
    topic: "Melt",
    question: "pd.melt() thường dùng để làm gì?",
    code: "",
    options: [
      "Chuyển dữ liệu wide sang long",
      "Chuyển dữ liệu long sang wide",
      "Join hai DataFrame theo key",
      "Xóa các dòng có missing value"
    ],
    answer: 0,
    explanation: "melt biến nhiều cột metric thành cột metric_name và value, hữu ích khi vẽ chart hoặc chuẩn hóa dữ liệu."
  },
  {
    id: "pd_i_010",
    library: "Pandas",
    level: "Intermediate",
    topic: "loc / iloc",
    question: "Khác biệt chính giữa loc và iloc là gì?",
    code: "",
    options: [
      "loc chọn theo label, iloc chọn theo vị trí số nguyên",
      "loc chọn theo vị trí số nguyên, iloc chọn theo label",
      "loc chỉ chọn được dòng, iloc chỉ chọn được cột",
      "loc tự động sort dữ liệu, iloc giữ nguyên thứ tự"
    ],
    answer: 0,
    explanation: "loc dùng nhãn index/cột; iloc dùng vị trí integer-based."
  },
  {
    id: "pd_i_011",
    library: "Pandas",
    level: "Intermediate",
    topic: "String Methods",
    question: "Muốn lọc name chứa chuỗi 'ann' không phân biệt hoa thường, cách nào phù hợp?",
    code: "",
    options: [
      "df[df['name'].str.contains('ann', case=False, na=False)]",
      "df[df['name'].str.match('ann', case=True, na=True)]",
      "df[df['name'].contains('ann', case=False, na=False)]",
      "df[df.contains('name', 'ann', case=False, na=False)]"
    ],
    answer: 0,
    explanation: "Với Series string dùng accessor .str. na=False giúp tránh mask có NA khi cột có missing."
  },
  {
    id: "pd_i_012",
    library: "Pandas",
    level: "Intermediate",
    topic: "isin",
    question: "Muốn lọc các dòng có category thuộc A hoặc B, dùng gì?",
    code: "categories = ['A', 'B']",
    options: [
      "df[df['category'].isin(categories)]",
      "df[df['category'].between(categories)]",
      "df[df['category'] == categories]",
      "df[df['category'].str.contains(categories)]"
    ],
    answer: 0,
    explanation: "isin(list) tạo boolean mask kiểm tra từng giá trị có nằm trong list/set cho trước hay không."
  },
  {
    id: "pd_i_013",
    library: "Pandas",
    level: "Intermediate",
    topic: "Between",
    question: "Muốn lọc date trong khoảng từ start đến end, cách nào thường dùng?",
    code: "start = '2026-01-01'\nend = '2026-01-31'",
    options: [
      "df[df['date'].between(start, end)]",
      "df[df['date'].isin(start, end)]",
      "df[df['date'].range(start, end)]",
      "df[df['date'].contains(start, end)]"
    ],
    answer: 0,
    explanation: "between hỗ trợ lọc khoảng. Với datetime, nên đảm bảo cột đã được parse bằng pd.to_datetime trước khi so sánh."
  },
  {
    id: "pd_i_014",
    library: "Pandas",
    level: "Intermediate",
    topic: "Aggregation",
    question: "Trong groupby, khác biệt giữa count và nunique là gì?",
    code: "df.groupby('group_id').agg(rows=('record_id','count'), unique_records=('record_id','nunique'))",
    options: [
      "count đếm non-null, nunique đếm distinct",
      "count đếm distinct, nunique đếm non-null",
      "count chỉ dùng cho số, nunique chỉ dùng cho text",
      "count tự bỏ duplicate, nunique giữ duplicate"
    ],
    answer: 0,
    explanation: "count là số bản ghi non-null; nunique là số giá trị duy nhất. Nếu record_id bị lặp, hai số này có thể khác nhau."
  },
  {
    id: "pd_i_015",
    library: "Pandas",
    level: "Intermediate",
    topic: "Drop Duplicates",
    question: "Muốn giữ mỗi record_id một dòng đầu tiên, dùng gì?",
    code: "",
    options: [
      "df.drop_duplicates(subset=['record_id'], keep='first')",
      "df.drop_duplicates(subset=['record_id'], keep='last')",
      "df.drop_duplicates(subset=['record_id'], keep=False)",
      "df.dropna(subset=['record_id'], keep='first')"
    ],
    answer: 0,
    explanation: "drop_duplicates với subset chỉ xét duplicate theo cột chỉ định. keep='first' giữ bản ghi đầu tiên."
  },
  {
    id: "pd_i_016",
    library: "Pandas",
    level: "Intermediate",
    topic: "Concat",
    question: "pd.concat([df1, df2], axis=0) thường dùng để làm gì?",
    code: "pd.concat([df1, df2], axis=0, ignore_index=True)",
    options: [
      "Nối thêm dòng từ nhiều DataFrame",
      "Nối thêm cột từ nhiều DataFrame",
      "Join hai bảng theo key id",
      "Tạo pivot table từ nhiều bảng"
    ],
    answer: 0,
    explanation: "axis=0 nối theo chiều dòng. ignore_index=True reset index mới cho bảng kết quả."
  },
  {
    id: "pd_i_017",
    library: "Pandas",
    level: "Intermediate",
    topic: "Map",
    question: "Series.map(dict) thường dùng trong trường hợp nào?",
    code: "df['label'] = df['code'].map({'A': 'Alpha', 'B': 'Beta'})",
    options: [
      "Map giá trị từ mã sang nhãn theo dictionary",
      "Join nhiều bảng lớn theo khóa phức tạp",
      "Tạo rolling window theo từng group",
      "Đổi index hiện tại thành datetime index"
    ],
    answer: 0,
    explanation: "map(dict) tiện cho mapping nhỏ. Với mapping table lớn, merge thường rõ ràng và kiểm soát tốt hơn."
  },
  {
    id: "pd_i_018",
    library: "Pandas",
    level: "Intermediate",
    topic: "Crosstab",
    question: "pd.crosstab() thường hữu ích cho bài toán nào?",
    code: "pd.crosstab(df['category'], df['status'])",
    options: [
      "Đếm chéo giữa hai biến category",
      "Đọc file parquet vào DataFrame",
      "Fit model machine learning",
      "Reset index của DataFrame"
    ],
    answer: 0,
    explanation: "crosstab tạo bảng tần suất chéo, rất tiện để phân tích distribution theo hai chiều category."
  },
  {
    id: "pd_i_019",
    library: "Pandas",
    level: "Intermediate",
    topic: "Datetime",
    question: "Muốn lấy thứ trong tuần từ cột date đã parse datetime, dùng gì?",
    code: "df['weekday'] = df['date'].dt.dayofweek",
    options: [".dt.dayofweek", ".dt.month", ".str.weekday", ".index.weekday"],
    answer: 0,
    explanation: ".dt.dayofweek trả về 0 cho Monday đến 6 cho Sunday."
  },
  {
    id: "pd_i_020",
    library: "Pandas",
    level: "Intermediate",
    topic: "Pivot Table",
    question: "Trong pivot_table, fill_value=0 có tác dụng gì?",
    code: "pd.pivot_table(df, index='group_id', columns='month', values='sales', aggfunc='sum', fill_value=0)",
    options: [
      "Fill các ô không có dữ liệu bằng 0",
      "Xóa mọi dòng có giá trị bằng 0",
      "Đổi toàn bộ index thành số 0",
      "Normalize dữ liệu về khoảng 0 đến 1"
    ],
    answer: 0,
    explanation: "fill_value dùng để thay missing cells sau khi pivot, thường dùng khi muốn ô không có dữ liệu hiển thị 0."
  },

  // =========================
  // Advanced
  // =========================
  {
    id: "pd_a_001",
    library: "Pandas",
    level: "Advanced",
    topic: "Transform",
    question: "Khác biệt chính giữa groupby().sum() và groupby().transform('sum') là gì?",
    code: "df['group_total'] = df.groupby('group_id')['sales'].transform('sum')",
    options: [
      "transform trả về cùng số dòng với df gốc, sum trả về aggregate theo nhóm",
      "sum trả về cùng số dòng với df gốc, transform trả về aggregate theo nhóm",
      "transform chỉ dùng được cho cột text, sum chỉ dùng được cho cột số",
      "transform và sum luôn trả về cùng shape nếu groupby cùng một cột"
    ],
    answer: 0,
    explanation: "transform broadcast kết quả group-level về từng dòng gốc, hữu ích để tính tỷ trọng từng dòng trong nhóm như sales / group_total."
  },
  {
    id: "pd_a_002",
    library: "Pandas",
    level: "Advanced",
    topic: "Groupby Rolling",
    question: "Muốn tính rolling mean 7 ngày riêng cho từng group_id, điều kiện quan trọng nhất trước khi rolling là gì?",
    code: "df.groupby('group_id')['sales'].rolling(7).mean()",
    options: [
      "Phải sort dữ liệu theo group_id và date trước",
      "Phải xóa toàn bộ cột text trước khi rolling",
      "Phải convert sales sang string trước khi rolling",
      "Phải shuffle dữ liệu theo group_id trước khi rolling"
    ],
    answer: 0,
    explanation: "Rolling phụ thuộc thứ tự dòng. Nếu chưa sort theo group_id và date, cửa sổ 7 dòng có thể sai logic thời gian."
  },
  {
    id: "pd_a_003",
    library: "Pandas",
    level: "Advanced",
    topic: "Merge Validation",
    question: "Tham số validate trong merge dùng để làm gì?",
    code: "left_df.merge(right_df, on='id', how='left', validate='many_to_one')",
    options: [
      "Kiểm tra quan hệ join có đúng kỳ vọng",
      "Tự động xóa duplicate sau khi merge",
      "Tự động fill NaN sau khi merge",
      "Tự động ép kiểu key trước khi merge"
    ],
    answer: 0,
    explanation: "validate='many_to_one' giúp bắt lỗi nếu bảng phải không unique theo key, tránh join làm nhân dòng ngoài ý muốn."
  },
  {
    id: "pd_a_004",
    library: "Pandas",
    level: "Advanced",
    topic: "Categorical dtype",
    question: "Khi một cột string có ít giá trị lặp lại nhiều lần, chuyển sang category thường có lợi gì?",
    code: "df['category_col'] = df['category_col'].astype('category')",
    options: [
      "Giảm memory và có thể tăng tốc một số thao tác",
      "Xóa toàn bộ giá trị bị trùng trong cột",
      "Tự động one-hot encoding thành nhiều cột",
      "Chuyển category thành số ngẫu nhiên"
    ],
    answer: 0,
    explanation: "category lưu mã integer + danh mục category, thường tiết kiệm memory cho low-cardinality string columns."
  },
  {
    id: "pd_a_005",
    library: "Pandas",
    level: "Advanced",
    topic: "cut / qcut",
    question: "Khác biệt chính giữa pd.cut và pd.qcut là gì?",
    code: "",
    options: [
      "cut chia theo khoảng giá trị, qcut chia theo quantile",
      "cut chia theo quantile, qcut chia theo khoảng giá trị",
      "cut chỉ dùng cho string, qcut chỉ dùng cho datetime",
      "cut luôn cân bằng số dòng, qcut luôn cân bằng độ rộng"
    ],
    answer: 0,
    explanation: "pd.cut dùng bins theo biên giá trị. pd.qcut dùng phân vị, phù hợp khi muốn chia dữ liệu thành nhóm tương đối cân bằng."
  },
  {
    id: "pd_a_006",
    library: "Pandas",
    level: "Advanced",
    topic: "Resample",
    question: "resample khác groupby thông thường ở điểm nào?",
    code: "df.set_index('date').resample('ME')['sales'].sum()",
    options: [
      "resample aggregate theo tần suất thời gian trên time index",
      "resample chỉ dùng để xóa duplicate trong time series",
      "resample luôn giữ nguyên số dòng như DataFrame gốc",
      "resample không cần cột hoặc index dạng thời gian"
    ],
    answer: 0,
    explanation: "resample yêu cầu DatetimeIndex/TimedeltaIndex/PeriodIndex và phù hợp để tổng hợp theo ngày, tuần, tháng, quý. 'ME' là month-end frequency."
  },
  {
    id: "pd_a_007",
    library: "Pandas",
    level: "Advanced",
    topic: "Stack / Unstack",
    question: "unstack thường dùng để làm gì?",
    code: "summary = df.groupby(['group_id', 'month'])['sales'].sum().unstack()",
    options: [
      "Đưa một level của index thành cột",
      "Đưa toàn bộ cột thành một level index",
      "Xóa index hiện tại khỏi DataFrame",
      "Nối hai bảng theo một key chung"
    ],
    answer: 0,
    explanation: "unstack xoay một level của MultiIndex ra thành columns. stack làm chiều ngược lại."
  },
  {
    id: "pd_a_008",
    library: "Pandas",
    level: "Advanced",
    topic: "explode",
    question: "explode dùng khi nào?",
    code: "df.explode('items')",
    options: [
      "Khi một ô chứa list và cần tách thành nhiều dòng",
      "Khi một cột numeric cần chia thành nhiều bucket",
      "Khi cần tăng tốc merge giữa hai bảng lớn",
      "Khi cần mã hóa datetime thành số tháng"
    ],
    answer: 0,
    explanation: "explode hữu ích khi dữ liệu có cột list như items, tags hoặc danh sách category trong một ô."
  },
  {
    id: "pd_a_009",
    library: "Pandas",
    level: "Advanced",
    topic: "Performance",
    question: "Với file CSV rất lớn, cách nào giúp đọc dữ liệu ít tốn memory hơn?",
    code: "pd.read_csv('large.csv', chunksize=100_000)",
    options: [
      "Đọc theo chunksize và xử lý từng phần",
      "Đọc xong rồi dùng df.head() để giảm RAM",
      "Convert toàn bộ cột sang object khi đọc",
      "Dùng apply(axis=1) ngay trong lúc đọc"
    ],
    answer: 0,
    explanation: "chunksize trả về iterator từng chunk. Bạn có thể aggregate từng phần rồi combine kết quả, tránh load toàn bộ file vào RAM."
  },
  {
    id: "pd_a_010",
    library: "Pandas",
    level: "Advanced",
    topic: "SettingWithCopy",
    question: "Cách nào an toàn hơn để gán segment = 'High' cho sales > 1000?",
    code: "",
    options: [
      "df[df['sales'] > 1000]['segment'] = 'High'",
      "df.loc[df['sales'] > 1000, 'segment'] = 'High'",
      "df.where(df['sales'] > 1000)['segment'] = 'High'",
      "df['segment'].filter(df['sales'] > 1000) = 'High'"
    ],
    answer: 1,
    explanation: "Dùng .loc[condition, column] để gán trực tiếp vào DataFrame gốc, tránh chained indexing và SettingWithCopyWarning."
  },
  {
    id: "pd_a_011",
    library: "Pandas",
    level: "Advanced",
    topic: "Merge Validation",
    question: "validate='many_to_one' trong merge giúp bắt lỗi gì?",
    code: "left_df.merge(right_df, on='id', how='left', validate='many_to_one')",
    options: [
      "Bảng right có nhiều dòng cho cùng id",
      "Bảng left có sai định dạng font chữ",
      "Cột date trong hai bảng sai timezone",
      "Cột value trong bảng left có số âm"
    ],
    answer: 0,
    explanation: "Nếu right_df không unique theo id, join many-to-one sẽ fail, giúp tránh nhân dòng ngoài ý muốn."
  },
  {
    id: "pd_a_012",
    library: "Pandas",
    level: "Advanced",
    topic: "Groupby Transform",
    question: "groupby().transform('sum') phù hợp khi nào?",
    code: "df['group_total'] = df.groupby('group_id')['sales'].transform('sum')",
    options: [
      "Cần đưa tổng cấp group về từng dòng gốc",
      "Cần giảm dữ liệu còn một dòng mỗi group",
      "Cần xóa các group không có dữ liệu",
      "Cần đổi dtype của group_id sang string"
    ],
    answer: 0,
    explanation: "transform trả kết quả cùng chiều dài với DataFrame gốc, phù hợp để tính tỷ trọng từng dòng trong group."
  },
  {
    id: "pd_a_013",
    library: "Pandas",
    level: "Advanced",
    topic: "Groupby Rolling",
    question: "Điều kiện quan trọng trước khi rolling theo từng group_id là gì?",
    code: "df = df.sort_values(['group_id', 'date'])\ndf['ma7'] = df.groupby('group_id')['sales'].rolling(7).mean().reset_index(level=0, drop=True)",
    options: [
      "Sort theo group_id và date trước",
      "Convert date sang string trước",
      "Xóa group_id trước khi rolling",
      "Shuffle dữ liệu trước khi rolling"
    ],
    answer: 0,
    explanation: "Rolling phụ thuộc thứ tự dòng. Nếu chưa sort, cửa sổ rolling sẽ sai logic thời gian."
  },
  {
    id: "pd_a_014",
    library: "Pandas",
    level: "Advanced",
    topic: "merge_asof",
    question: "merge_asof phù hợp với bài toán nào?",
    code: "pd.merge_asof(events, states, on='timestamp', by='entity_id', direction='backward')",
    options: [
      "Join bản ghi gần nhất theo thời gian",
      "Cross join mọi dòng giữa hai bảng",
      "Join exact key duy nhất như inner join",
      "Xóa duplicate timestamp trong mỗi group"
    ],
    answer: 0,
    explanation: "merge_asof thường dùng cho time-aware join, ví dụ lấy trạng thái gần nhất trước thời điểm event."
  },
  {
    id: "pd_a_015",
    library: "Pandas",
    level: "Advanced",
    topic: "Memory Optimization",
    question: "Khi đọc CSV lớn, usecols giúp gì?",
    code: "pd.read_csv('data.csv', usecols=['id', 'date', 'sales'])",
    options: [
      "Chỉ đọc các cột cần thiết để giảm memory",
      "Chỉ đọc các dòng không có lỗi dữ liệu",
      "Tự động nén file CSV sau khi đọc",
      "Tự động tạo index mới từ các cột"
    ],
    answer: 0,
    explanation: "Đọc ít cột hơn thường là tối ưu đầu tiên khi xử lý file lớn bằng pandas."
  },
  {
    id: "pd_a_016",
    library: "Pandas",
    level: "Advanced",
    topic: "Apply vs Vectorization",
    question: "Vì sao nên hạn chế apply(axis=1) trên DataFrame lớn?",
    code: "df.apply(lambda r: r['sales'] - r['cost'], axis=1)",
    options: [
      "Vì thường chạy Python-level theo từng row",
      "Vì luôn trả về kết quả sai với cột numeric",
      "Vì không dùng được nếu DataFrame có số",
      "Vì tự động drop toàn bộ giá trị NaN"
    ],
    answer: 0,
    explanation: "Với phép toán đơn giản, dùng df['sales'] - df['cost'] nhanh và rõ hơn nhiều."
  },
  {
    id: "pd_a_017",
    library: "Pandas",
    level: "Advanced",
    topic: "Chunk Processing",
    question: "chunksize trong read_csv dùng khi nào?",
    code: "for chunk in pd.read_csv('large.csv', chunksize=100000):\n    process(chunk)",
    options: [
      "Xử lý file lớn theo từng phần để tránh vượt RAM",
      "Tự động train model theo từng chunk dữ liệu",
      "Tạo chart interactive trực tiếp từ file CSV",
      "Xóa file gốc sau khi đọc xong từng phần"
    ],
    answer: 0,
    explanation: "chunksize trả về iterator các DataFrame nhỏ, hữu ích khi file quá lớn so với memory."
  },
  {
    id: "pd_a_018",
    library: "Pandas",
    level: "Advanced",
    topic: "Method Chaining",
    question: "Ưu điểm chính của method chaining trong pandas là gì?",
    code: "(df.query('sales > 0')\n   .assign(profit=lambda d: d['sales'] - d['cost'])\n   .groupby('group_id', as_index=False)\n   .agg(total_profit=('profit', 'sum')))",
    options: [
      "Viết pipeline biến đổi dữ liệu theo flow rõ ràng",
      "Luôn chạy nhanh hơn SQL trong mọi trường hợp",
      "Không cần kiểm tra dữ liệu ở các bước trung gian",
      "Tự động sửa lỗi business logic trong pipeline"
    ],
    answer: 0,
    explanation: "Method chaining giúp đọc từ trên xuống dưới, giống pipeline transform."
  },
  {
    id: "pd_a_019",
    library: "Pandas",
    level: "Advanced",
    topic: "Data Quality",
    question: "Check nào giúp phát hiện join bị nhân dòng?",
    code: "before = len(left_df)\nafter = len(left_df.merge(right_df, on='id', how='left'))",
    options: [
      "So sánh row count trước/sau và validate key",
      "Chỉ xem vài dòng đầu bằng head()",
      "Đổi tên các cột bị trùng sau join",
      "Fill tất cả NaN bằng 0 sau khi join"
    ],
    answer: 0,
    explanation: "Nếu left join many-to-one mà số dòng tăng, thường bảng right bị duplicate key."
  },
  {
    id: "pd_a_020",
    library: "Pandas",
    level: "Advanced",
    topic: "Index Alignment",
    question: "Khi cộng hai Series có index khác nhau, điều gì xảy ra?",
    code: "s1 + s2",
    options: [
      "Pandas align theo index label; index không match ra NaN",
      "Pandas luôn cộng theo vị trí dòng và bỏ qua index",
      "Pandas tự động reset index trước khi cộng hai Series",
      "Pandas luôn báo lỗi nếu hai index không giống nhau"
    ],
    answer: 0,
    explanation: "Pandas ưu tiên alignment theo index label. Đây là điểm mạnh nhưng cũng có thể gây bug nếu index không như kỳ vọng."
  },

  // =========================
  // Expert
  // =========================
  {
    id: "pd_e_001",
    library: "Pandas",
    level: "Expert",
    topic: "Grain & Join Pitfall",
    question: "Bạn có bảng records ở grain record-level và details ở grain detail-level. Sau khi merge, vì sao tổng record_fee có thể bị phóng đại?",
    code: "merged = records.merge(details, on='record_id', how='left')\nmerged['record_fee'].sum()",
    options: [
      "record_fee bị lặp lại theo mỗi detail trong cùng record",
      "left join tự động nhân record_fee với tax",
      "pandas không hỗ trợ sum sau khi merge",
      "details luôn làm mất toàn bộ record_id"
    ],
    answer: 0,
    explanation: "Đây là lỗi grain rất phổ biến. Nếu một record có 3 detail, metric ở record-level sẽ xuất hiện 3 lần sau merge."
  },
  {
    id: "pd_e_002",
    library: "Pandas",
    level: "Expert",
    topic: "Metric Logic",
    question: "Muốn tính average value per record từ bảng detail-level, cách nào đúng nhất?",
    code: "",
    options: [
      "df['item_value'].mean()",
      "df['value'].sum() / df['record_id'].nunique()",
      "df['record_id'].mean() / df['value'].sum()",
      "df.shape[0] / df['value'].sum()"
    ],
    answer: 1,
    explanation: "Average value per record là tổng value chia số record unique. Mean item_value trả lời giá trị trung bình mỗi detail, không phải mỗi record."
  },
  {
    id: "pd_e_003",
    library: "Pandas",
    level: "Expert",
    topic: "Window Leakage",
    question: "Trong bài toán forecasting, vì sao rolling mean cần cẩn thận với leakage?",
    code: "df['ma7'] = df['target'].rolling(7).mean()",
    options: [
      "Cửa sổ có thể chứa target hiện tại/tương lai khi predict hiện tại",
      "rolling mean luôn sai về mặt toán học trong mọi forecasting",
      "pandas không hỗ trợ bất kỳ bài toán forecasting nào",
      "rolling mean chỉ dùng được cho dữ liệu text"
    ],
    answer: 0,
    explanation: "Khi tạo feature dự báo, thường cần shift trước rồi rolling, ví dụ target.shift(1).rolling(7).mean(), để chỉ dùng thông tin quá khứ."
  },
  {
    id: "pd_e_004",
    library: "Pandas",
    level: "Expert",
    topic: "merge_asof",
    question: "merge_asof phù hợp nhất cho tình huống nào?",
    code: "pd.merge_asof(events, states, on='time', by='entity_id')",
    options: [
      "Join theo thời gian gần nhất trước/sau khi timestamp không khớp tuyệt đối",
      "Join exact key giống inner join và yêu cầu timestamp khớp tuyệt đối",
      "Union hai DataFrame theo dòng dù khác schema",
      "Tạo pivot table theo tháng từ dữ liệu thời gian"
    ],
    answer: 0,
    explanation: "merge_asof dùng cho time series, ví dụ ghép event với trạng thái gần nhất trước đó hoặc sau đó."
  },
  {
    id: "pd_e_005",
    library: "Pandas",
    level: "Expert",
    topic: "Index Alignment",
    question: "Khi cộng hai Series có index khác nhau, rủi ro thường gặp là gì?",
    code: "s1 + s2",
    options: [
      "Index không match có thể tạo NaN ngoài ý muốn",
      "Pandas luôn cộng theo vị trí dòng tuyệt đối",
      "Pandas tự động bỏ index của cả hai Series",
      "Pandas báo lỗi trong mọi trường hợp lệch index"
    ],
    answer: 0,
    explanation: "Pandas ưu tiên alignment theo index label. Nếu bạn tưởng đang cộng theo vị trí, kết quả có thể sai hoặc sinh NaN."
  },
  {
    id: "pd_e_006",
    library: "Pandas",
    level: "Expert",
    topic: "Time Series Completeness",
    question: "Khi tính metric daily theo group_id, vì sao cần cân nhắc đủ calendar date kể cả ngày không có record?",
    code: "",
    options: [
      "Thiếu ngày có thể làm rolling/trend bỏ qua ngày zero-volume",
      "Pandas bắt buộc mọi ngày đều phải có record",
      "groupby không hoạt động nếu date bị thiếu ngày",
      "datetime không thể sort nếu có ngày không xuất hiện"
    ],
    answer: 0,
    explanation: "Trong time series, missing date có thể nghĩa là không có hoạt động hoặc data bị thiếu. Reindex calendar giúp rolling và trend ổn định hơn."
  },
  {
    id: "pd_e_007",
    library: "Pandas",
    level: "Expert",
    topic: "Weighted Average",
    question: "Muốn tính weighted average metric_value theo weight từng group, công thức nào đúng?",
    code: "",
    options: [
      "df['metric_value'].mean()",
      "(df['metric_value'] * df['weight']).sum() / df['weight'].sum()",
      "df['metric_value'].sum() / df.shape[1]",
      "df['weight'].mean() / df['metric_value'].mean()"
    ],
    answer: 1,
    explanation: "Weighted average cần nhân metric với weight, sau đó chia tổng weight. Mean thường sai nếu mỗi dòng đại diện cho trọng số khác nhau."
  },
  {
    id: "pd_e_008",
    library: "Pandas",
    level: "Expert",
    topic: "Groupby Apply Pitfall",
    question: "Vì sao groupby.apply thường cần cẩn thận trong production pipeline?",
    code: "df.groupby('group_id').apply(custom_func)",
    options: [
      "Có thể chậm và output shape/index khó kiểm soát",
      "Không thể chạy apply sau bất kỳ groupby nào",
      "Luôn làm sai kết quả dù custom_func đúng",
      "Chỉ dùng được cho NumPy array một chiều"
    ],
    answer: 0,
    explanation: "groupby.apply rất linh hoạt nhưng có thể chậm và output khó đoán. Nên ưu tiên agg, transform, vectorization khi có thể."
  },
  {
    id: "pd_e_009",
    library: "Pandas",
    level: "Expert",
    topic: "Memory Optimization",
    question: "Khi tối ưu memory cho DataFrame lớn, lựa chọn nào thường hợp lý?",
    code: "",
    options: [
      "Downcast numeric, dùng category, chỉ đọc cột cần",
      "Convert toàn bộ cột sang object dtype",
      "Dùng apply(axis=1) cho mọi phép tính",
      "Luôn copy DataFrame sau mỗi bước xử lý"
    ],
    answer: 0,
    explanation: "Các kỹ thuật phổ biến: usecols khi read_csv, dtype mapping, downcast int/float, category, xử lý theo chunk."
  },
  {
    id: "pd_e_010",
    library: "Pandas",
    level: "Expert",
    topic: "Testing Data Pipeline",
    question: "Trong pipeline pandas, check nào giúp phát hiện join bị nhân dòng ngoài ý muốn?",
    code: "",
    options: [
      "So sánh row count trước/sau merge và dùng validate",
      "Chỉ nhìn vài dòng đầu bằng df.head()",
      "Luôn dùng inner join cho mọi bảng",
      "Xóa hết duplicate sau mọi merge"
    ],
    answer: 0,
    explanation: "Nên kiểm tra row count, key uniqueness, null rate sau merge, và dùng validate='one_to_one', 'one_to_many', 'many_to_one' theo kỳ vọng."
  },
  {
    id: "pd_e_011",
    library: "Pandas",
    level: "Expert",
    topic: "Grain",
    question: "Trước khi groupby hoặc merge, câu hỏi quan trọng nhất về dữ liệu là gì?",
    code: "",
    options: [
      "Một dòng đại diện cho cái gì?",
      "DataFrame sẽ dùng chart màu gì?",
      "Notebook đang có bao nhiêu cell?",
      "Có dùng Plotly để vẽ chart không?"
    ],
    answer: 0,
    explanation: "Grain quyết định cách aggregate/join. Không hiểu grain dễ bị double count hoặc sai metric."
  },
  {
    id: "pd_e_012",
    library: "Pandas",
    level: "Expert",
    topic: "Double Counting",
    question: "Khi merge bảng record-level với bảng detail-level, rủi ro lớn nhất là gì?",
    code: "records.merge(details, on='record_id', how='left')",
    options: [
      "Record-level metrics có thể bị nhân theo số detail",
      "Pandas không cho merge hai bảng khác grain",
      "Mọi dòng trong bảng record sẽ bị xóa",
      "Datetime tự động đổi timezone sau merge"
    ],
    answer: 0,
    explanation: "Nếu metric nằm ở record-level nhưng sau join có nhiều detail per record, sum metric đó sẽ bị double count."
  },
  {
    id: "pd_e_013",
    library: "Pandas",
    level: "Expert",
    topic: "Leakage",
    question: "Data leakage trong feature engineering thường xảy ra khi nào?",
    code: "df['future_7d_value'] = df.groupby('entity_id')['value'].shift(-7)",
    options: [
      "Feature dùng thông tin không có tại thời điểm dự đoán",
      "Dữ liệu có missing value ở một vài cột",
      "Một cột category có quá nhiều giá trị unique",
      "Pipeline đọc dữ liệu bằng pd.read_csv"
    ],
    answer: 0,
    explanation: "Leakage làm offline score ảo cao nhưng production fail. Cần tôn trọng cutoff time và availability của feature."
  },
  {
    id: "pd_e_014",
    library: "Pandas",
    level: "Expert",
    topic: "Point-in-Time Join",
    question: "Point-in-time correct join nghĩa là gì?",
    code: "",
    options: [
      "Join feature chỉ dùng dữ liệu có sẵn tại thời điểm quan sát",
      "Join bản ghi mới nhất trong toàn bộ dataset",
      "Join mọi dòng bằng cross join rồi lọc sau",
      "Join sau khi shuffle toàn bộ dữ liệu"
    ],
    answer: 0,
    explanation: "PIT join rất quan trọng trong forecasting/ML để không lấy nhầm thông tin tương lai."
  },
  {
    id: "pd_e_015",
    library: "Pandas",
    level: "Expert",
    topic: "Metric Definition",
    question: "Vì sao không nên average các rate con một cách máy móc?",
    code: "",
    options: [
      "Cần weighted average theo denominator nếu group size khác nhau",
      "Rate không thể tính được bằng pandas trong groupby",
      "groupby không hỗ trợ bất kỳ metric dạng rate nào",
      "Mọi denominator luôn bằng nhau giữa các group"
    ],
    answer: 0,
    explanation: "Rate tổng nên tính bằng tổng numerator / tổng denominator, hoặc weighted average theo denominator."
  },
  {
    id: "pd_e_016",
    library: "Pandas",
    level: "Expert",
    topic: "Pipeline Design",
    question: "Vì sao nên tách raw → clean → feature → mart?",
    code: "",
    options: [
      "Dễ test, debug, tái chạy và kiểm soát logic",
      "Để code dài hơn và khó chỉnh sửa hơn",
      "Để tránh phải dùng function trong pipeline",
      "Để mọi bước xử lý nằm trong một cell"
    ],
    answer: 0,
    explanation: "Layering giúp pipeline rõ ràng: raw giữ nguyên, clean chuẩn hóa, feature tạo logic, mart phục vụ dashboard/report."
  },
  {
    id: "pd_e_017",
    library: "Pandas",
    level: "Expert",
    topic: "Schema Contract",
    question: "Schema contract trong pipeline pandas nên kiểm tra gì?",
    code: "expected_cols = {'record_id', 'date', 'value'}\nmissing = expected_cols - set(df.columns)",
    options: [
      "Cột bắt buộc, dtype, null rule, uniqueness/range rule",
      "Màu sắc chart, font chữ và vị trí legend",
      "Tên biến Python và số lượng notebook cell",
      "Số dòng luôn bằng nhau qua mọi bước xử lý"
    ],
    answer: 0,
    explanation: "Schema/data contract giúp phát hiện input thay đổi trước khi metric sai âm thầm."
  },
  {
    id: "pd_e_018",
    library: "Pandas",
    level: "Expert",
    topic: "Reconciliation",
    question: "Reconciliation sau khi transform dữ liệu nghĩa là gì?",
    code: "",
    options: [
      "Đối chiếu tổng dòng/tổng tiền/key coverage giữa input và output",
      "Đổi font và màu sắc chart sau khi tạo dashboard",
      "Random sample vài dòng mà không cần rule kiểm tra",
      "Xóa tất cả log sau khi pipeline chạy thành công"
    ],
    answer: 0,
    explanation: "Ví dụ tổng value trước và sau clean không nên đổi nếu bước đó không loại dòng."
  },
  {
    id: "pd_e_019",
    library: "Pandas",
    level: "Expert",
    topic: "Parquet",
    question: "Vì sao Parquet thường phù hợp hơn CSV cho analytics pipeline lớn?",
    code: "df.to_parquet('data.parquet', index=False)",
    options: [
      "Columnar, giữ dtype tốt, đọc chọn cột nhanh và thường nén tốt",
      "Parquet là định dạng ảnh nên hiển thị dashboard nhanh hơn",
      "Parquet không cần schema nên tránh mọi lỗi dữ liệu",
      "CSV luôn nhanh hơn Parquet với bảng rất rộng"
    ],
    answer: 0,
    explanation: "Parquet phù hợp analytical workloads, đặc biệt khi chỉ đọc một số cột từ bảng rộng."
  },
  {
    id: "pd_e_020",
    library: "Pandas",
    level: "Expert",
    topic: "Anti Join",
    question: "Trong pandas, anti-join thường dùng để tìm gì?",
    code: "merged = left.merge(right[['id']], on='id', how='left', indicator=True)\nanti = merged[merged['_merge'] == 'left_only']",
    options: [
      "Các dòng ở left không có match trong right",
      "Các dòng match ở cả left và right",
      "Cross join mọi dòng giữa left và right",
      "Union hai bảng theo chiều dòng"
    ],
    answer: 0,
    explanation: "indicator=True tạo cột _merge, giúp kiểm tra coverage và tìm unmatched records."
  },
  {
    id: "pd_e_021",
    library: "Pandas",
    level: "Expert",
    topic: "Rate Decomposition",
    question: "Khi một rate tổng thay đổi, vì sao cần so sánh theo segment và denominator?",
    code: "",
    options: [
      "Để phân biệt mix shift, volume effect và performance effect",
      "Để làm bảng dài hơn nhưng không thay đổi insight",
      "Vì pandas không thể tính được rate tổng",
      "Để tránh dùng chart trong phần phân tích"
    ],
    answer: 0,
    explanation: "Rate tổng có thể đổi vì từng segment thay đổi, hoặc vì tỷ trọng dữ liệu chuyển sang segment vốn có rate cao/thấp hơn."
  },
  {
    id: "pd_e_022",
    library: "Pandas",
    level: "Expert",
    topic: "When Not Pandas",
    question: "Khi nào nên cân nhắc không dùng pandas cho toàn bộ pipeline?",
    code: "",
    options: [
      "Dữ liệu vượt memory hoặc cần distributed/query engine",
      "Khi dataset chỉ có dưới 100 dòng dữ liệu",
      "Khi chỉ cần filter đơn giản một DataFrame nhỏ",
      "Khi chỉ cần xem nhanh vài dòng bằng head()"
    ],
    answer: 0,
    explanation: "Pandas mạnh cho single-machine analysis, nhưng dữ liệu rất lớn có thể cần SQL engine, Polars, Spark, DuckDB hoặc warehouse."
  }
];