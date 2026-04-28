const TIME_SERIES_QUESTIONS = [
  {
    id: "ts_f_001",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Time Series Overview",
    question: "Điểm khác biệt quan trọng nhất của dữ liệu time series so với dữ liệu bảng thông thường là gì?",
    code: "",
    options: [
      "Luôn có đúng một cột số",
      "Thứ tự thời gian của quan sát có ý nghĩa phân tích",
      "Không bao giờ có missing value",
      "Không thể vẽ biểu đồ"
    ],
    answer: 1,
    explanation: "Trong time series, thứ tự thời gian rất quan trọng vì giá trị hiện tại thường liên quan đến quá khứ. Vì vậy không nên xử lý như các quan sát độc lập hoàn toàn nếu bài toán phụ thuộc thời gian."
  },
  {
    id: "ts_f_002",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Datetime Basics",
    question: "Trong pandas, hàm nào thường dùng để chuyển một cột chuỗi ngày tháng thành kiểu datetime?",
    code: "",
    options: [
      "pd.to_datetime()",
      "pd.to_string()",
      "pd.read_datetime()",
      "pd.date_split()"
    ],
    answer: 0,
    explanation: "pd.to_datetime() thường dùng để chuyển string hoặc object thành kiểu datetime, giúp có thể sort, resample và tạo date features."
  },
  {
    id: "ts_f_003",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Timestamp vs Date",
    question: "Timestamp khác date ở điểm nào?",
    code: "",
    options: [
      "Timestamp thường có cả ngày và thời gian cụ thể, còn date thường chỉ biểu diễn ngày",
      "Timestamp chỉ lưu được năm",
      "Date luôn có timezone còn timestamp thì không",
      "Hai khái niệm này luôn giống hệt nhau"
    ],
    answer: 0,
    explanation: "Timestamp thường biểu diễn một thời điểm cụ thể như 2026-04-27 10:30:00, còn date thường chỉ là ngày như 2026-04-27."
  },
  {
    id: "ts_f_004",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Time Index",
    question: "Trong pandas time series, việc đặt cột datetime làm index thường hữu ích vì lý do nào?",
    code: "",
    options: [
      "Giúp thao tác theo thời gian như resample, rolling theo thời gian và slicing theo date thuận tiện hơn",
      "Tự động làm dữ liệu không còn missing value",
      "Tự động tạo model forecasting",
      "Bắt buộc mọi DataFrame phải có datetime index"
    ],
    answer: 0,
    explanation: "DatetimeIndex giúp pandas hỗ trợ nhiều thao tác time series thuận tiện như resample theo ngày/tháng, lọc theo khoảng thời gian và rolling theo thời gian."
  },
  {
    id: "ts_f_005",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Sorting by Time",
    question: "Vì sao nên sort dữ liệu theo thời gian trước khi tạo lag hoặc rolling feature?",
    code: "",
    options: [
      "Vì lag và rolling phụ thuộc vào thứ tự quan sát theo thời gian",
      "Vì sort giúp xóa toàn bộ outlier",
      "Vì rolling chỉ chạy được khi target là string",
      "Vì sort tự động chia train/test"
    ],
    answer: 0,
    explanation: "Lag và rolling cần đúng thứ tự thời gian. Nếu dữ liệu chưa sort, giá trị quá khứ có thể bị lấy sai, dẫn đến feature sai hoặc leakage."
  },
  {
    id: "ts_f_006",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Time Granularity",
    question: "Time granularity trong time series nghĩa là gì?",
    code: "",
    options: [
      "Mức độ chi tiết của thời gian như giờ, ngày, tuần, tháng",
      "Số lượng feature numeric",
      "Độ lớn của model",
      "Số dòng bị trùng lặp"
    ],
    answer: 0,
    explanation: "Granularity là mức thời gian mà dữ liệu được ghi nhận hoặc phân tích, ví dụ hourly, daily, weekly hoặc monthly."
  },
  {
    id: "ts_f_007",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Frequency",
    question: "Frequency của time series mô tả điều gì?",
    code: "",
    options: [
      "Khoảng cách thời gian giữa các quan sát, ví dụ mỗi ngày hoặc mỗi giờ",
      "Tần suất xuất hiện của một category",
      "Số lần model được train",
      "Số lượng cột trong DataFrame"
    ],
    answer: 0,
    explanation: "Frequency mô tả chuỗi được ghi nhận theo nhịp nào, ví dụ daily, weekly, monthly. Hiểu frequency giúp chọn resampling và forecast horizon phù hợp."
  },
  {
    id: "ts_f_008",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Missing Dates",
    question: "Missing date trong time series nghĩa là gì?",
    code: "",
    options: [
      "Một timestamp/ngày kỳ vọng xuất hiện nhưng không có row trong dữ liệu",
      "Một row có giá trị value bằng 0",
      "Một model không dự đoán được",
      "Một cột không phải datetime"
    ],
    answer: 0,
    explanation: "Missing date là khoảng thời gian bị thiếu row, ví dụ chuỗi daily thiếu ngày 2026-04-10. Nó khác với missing value trong một row đã tồn tại."
  },
  {
    id: "ts_f_009",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Missing Values in Time Series",
    question: "Missing value trong time series khác missing date như thế nào?",
    code: "",
    options: [
      "Missing value là timestamp có row nhưng cột value bị thiếu; missing date là thiếu hẳn timestamp/row",
      "Missing value luôn là giá trị 0",
      "Missing date chỉ xảy ra với dữ liệu không có thời gian",
      "Hai khái niệm này luôn giống nhau"
    ],
    answer: 0,
    explanation: "Một timestamp có row nhưng value là NaN là missing value. Nếu timestamp kỳ vọng không có row, đó là missing date hoặc time gap."
  },
  {
    id: "ts_f_010",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Resampling",
    question: "Resampling trong time series thường dùng để làm gì?",
    code: "",
    options: [
      "Đổi tần suất dữ liệu theo thời gian, ví dụ từ daily sang monthly",
      "Tạo model classification",
      "Xóa tất cả cột datetime",
      "Tự động phát hiện outlier"
    ],
    answer: 0,
    explanation: "Resampling dùng để chuyển dữ liệu sang tần suất khác, ví dụ tổng hợp dữ liệu ngày thành tháng hoặc tạo dữ liệu theo giờ từ dữ liệu ngày."
  },
  {
    id: "ts_f_011",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Downsampling",
    question: "Downsampling là gì?",
    code: "",
    options: [
      "Chuyển dữ liệu từ tần suất cao xuống tần suất thấp hơn, ví dụ daily sang monthly",
      "Chuyển dữ liệu từ monthly sang daily",
      "Tạo thêm feature category",
      "Xóa target khỏi dataset"
    ],
    answer: 0,
    explanation: "Downsampling giảm độ chi tiết thời gian, thường cần aggregation như sum, mean, max hoặc min."
  },
  {
    id: "ts_f_012",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Upsampling",
    question: "Upsampling là gì?",
    code: "",
    options: [
      "Chuyển dữ liệu từ tần suất thấp lên tần suất cao hơn, ví dụ monthly sang daily",
      "Gom dữ liệu daily thành monthly",
      "Xóa dữ liệu trùng",
      "Tính metric forecast"
    ],
    answer: 0,
    explanation: "Upsampling tạo thêm timestamp ở tần suất chi tiết hơn. Sau upsampling thường cần xử lý missing values như forward fill hoặc interpolation tùy bài toán."
  },
  {
    id: "ts_f_013",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Date Features",
    question: "Feature nào sau đây có thể được tạo từ cột datetime?",
    code: "",
    options: [
      "month",
      "model_accuracy",
      "prediction_error",
      "target_leakage"
    ],
    answer: 0,
    explanation: "Từ datetime có thể tạo các feature như day, week, month, quarter, day_of_week hoặc is_weekend."
  },
  {
    id: "ts_f_014",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Shift",
    question: "Trong pandas, shift(1) thường dùng để làm gì trong time series?",
    code: "",
    options: [
      "Lấy giá trị của kỳ trước làm feature hiện tại",
      "Sắp xếp dữ liệu theo ngày",
      "Đổi timezone",
      "Tính tổng theo tháng"
    ],
    answer: 0,
    explanation: "shift(1) dịch giá trị xuống một dòng, thường dùng để tạo lag feature như giá trị ngày hôm trước."
  },
  {
    id: "ts_f_015",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Rolling Window",
    question: "Rolling window thường dùng để làm gì?",
    code: "",
    options: [
      "Tính thống kê trên một cửa sổ thời gian/số quan sát gần nhất",
      "Xóa toàn bộ dữ liệu cũ",
      "Chuyển classification thành regression",
      "Tạo index ngẫu nhiên"
    ],
    answer: 0,
    explanation: "Rolling window tính các thống kê như moving average, rolling sum hoặc rolling std trên một cửa sổ gần nhất."
  },
  {
    id: "ts_f_016",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Trend",
    question: "Trend trong time series là gì?",
    code: "",
    options: [
      "Xu hướng dài hạn tăng hoặc giảm của chuỗi",
      "Dao động lặp lại theo chu kỳ cố định trong tuần",
      "Sai số hoàn toàn ngẫu nhiên",
      "Một dòng bị missing"
    ],
    answer: 0,
    explanation: "Trend mô tả hướng đi dài hạn của chuỗi, ví dụ tăng dần, giảm dần hoặc ổn định qua thời gian."
  },
  {
    id: "ts_f_017",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Seasonality",
    question: "Seasonality trong time series là gì?",
    code: "",
    options: [
      "Pattern lặp lại theo chu kỳ thời gian tương đối cố định",
      "Một điểm dữ liệu bị lỗi nhập liệu",
      "Dữ liệu không có cột thời gian",
      "Model dự báo không có baseline"
    ],
    answer: 0,
    explanation: "Seasonality là pattern lặp lại theo chu kỳ như theo giờ trong ngày, ngày trong tuần, tháng trong năm."
  },
  {
    id: "ts_f_018",
    library: "Time Series Analysis",
    level: "Foundation",
    topic: "Forecasting Overview",
    question: "Forecasting trong time series là gì?",
    code: "",
    options: [
      "Dự báo giá trị tương lai dựa trên dữ liệu quá khứ",
      "Phân loại nhãn không có thứ tự thời gian",
      "Xóa dữ liệu bị thiếu",
      "Chỉ vẽ biểu đồ line chart"
    ],
    answer: 0,
    explanation: "Forecasting tập trung dự đoán giá trị tương lai của chuỗi dựa trên pattern lịch sử như trend, seasonality và các feature liên quan."
  },
  {
    id: "ts_i_001",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Datetime Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import pandas as pd\ns = pd.to_datetime(\"2026-04-27\")\nprint(s.year)",
    options: [
      "2026",
      "4",
      "27",
      "Timestamp"
    ],
    answer: 0,
    explanation: "pd.to_datetime tạo Timestamp. Thuộc tính .year trả về năm, ở đây là 2026."
  },
  {
    id: "ts_i_002",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Sorting by Time",
    question: "Đoạn code nào sắp xếp DataFrame theo cột date tăng dần?",
    code: "import pandas as pd\ndf = pd.DataFrame({\"date\": [\"2026-01-02\", \"2026-01-01\"], \"value\": [2, 1]})",
    options: [
      "df.sort_values(\"date\")",
      "df.sort_index()",
      "df.order_by(\"date\")",
      "df.sort_date(\"date\")"
    ],
    answer: 0,
    explanation: "sort_values(\"date\") sắp xếp DataFrame theo giá trị của cột date. Đây là bước quan trọng trước khi tạo lag/rolling."
  },
  {
    id: "ts_i_003",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Time Index",
    question: "Đoạn code nào đặt cột date làm index sau khi chuyển sang datetime?",
    code: "import pandas as pd\ndf = pd.DataFrame({\"date\": [\"2026-01-01\"], \"value\": [10]})",
    options: [
      "df[\"date\"] = pd.to_datetime(df[\"date\"])\ndf = df.set_index(\"date\")",
      "df = df.set_index(pd.to_datetime)",
      "df[\"date\"].set_index()",
      "df.index = \"date\""
    ],
    answer: 0,
    explanation: "Cần chuyển cột date sang datetime rồi dùng set_index(\"date\") để tạo DatetimeIndex."
  },
  {
    id: "ts_i_004",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Aggregation by Time",
    question: "Khi downsample dữ liệu giao dịch từ ngày sang tháng, aggregation nào thường hợp lý cho metric sales?",
    code: "",
    options: [
      "sum",
      "first character",
      "random",
      "drop all"
    ],
    answer: 0,
    explanation: "Với sales hoặc amount dạng dòng giao dịch/doanh số, tổng theo tháng thường hợp lý hơn lấy ngẫu nhiên hoặc bỏ dữ liệu."
  },
  {
    id: "ts_i_005",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Resampling",
    question: "Đoạn code sau làm gì?",
    code: "import pandas as pd\ndf = pd.DataFrame({\"date\": pd.to_datetime([\"2026-01-01\", \"2026-01-02\"]), \"sales\": [10, 20]}).set_index(\"date\")\nresult = df.resample(\"D\").sum()",
    options: [
      "Tổng hợp dữ liệu theo ngày",
      "Tổng hợp dữ liệu theo tháng",
      "Tạo lag 1 ngày",
      "Xóa cột date"
    ],
    answer: 0,
    explanation: "resample(\"D\").sum() đưa dữ liệu về tần suất ngày và tính tổng sales theo từng ngày."
  },
  {
    id: "ts_i_006",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Day / Week / Month Features",
    question: "Đoạn code nào tạo feature tháng từ cột date?",
    code: "import pandas as pd\ndf = pd.DataFrame({\"date\": pd.to_datetime([\"2026-04-27\"])})",
    options: [
      "df[\"month\"] = df[\"date\"].dt.month",
      "df[\"month\"] = df[\"date\"].month",
      "df[\"month\"] = month(df[\"date\"])",
      "df[\"month\"] = df.month"
    ],
    answer: 0,
    explanation: "Với pandas Series datetime, cần dùng accessor .dt, ví dụ df[\"date\"].dt.month."
  },
  {
    id: "ts_i_007",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Time Zone Awareness",
    question: "Vì sao timezone có thể quan trọng trong time series?",
    code: "",
    options: [
      "Vì cùng một timestamp có thể đại diện thời điểm khác nhau nếu timezone khác nhau",
      "Vì timezone tự động làm model chính xác hơn",
      "Vì timezone chỉ dùng cho dữ liệu không có thời gian",
      "Vì timezone loại bỏ mọi missing value"
    ],
    answer: 0,
    explanation: "Khi dữ liệu đến từ nhiều khu vực hoặc hệ thống, timezone không nhất quán có thể làm sai thứ tự sự kiện, aggregation theo ngày và phân tích theo giờ."
  },
  {
    id: "ts_i_008",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Lag Features",
    question: "Đoạn code nào tạo lag feature 1 kỳ cho cột value?",
    code: "import pandas as pd\ndf = pd.DataFrame({\"value\": [10, 20, 30]})",
    options: [
      "df[\"value_lag1\"] = df[\"value\"].shift(1)",
      "df[\"value_lag1\"] = df[\"value\"].shift(-1)",
      "df[\"value_lag1\"] = df[\"value\"].rolling(1).mean()",
      "df[\"value_lag1\"] = df[\"value\"].diff()"
    ],
    answer: 0,
    explanation: "shift(1) lấy giá trị kỳ trước làm feature hiện tại. shift(-1) là lead, có thể dùng thông tin tương lai nếu dùng sai trong forecasting."
  },
  {
    id: "ts_i_009",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Lead Features Awareness",
    question: "Vì sao dùng shift(-1) làm feature để dự báo tương lai thường nguy hiểm?",
    code: "",
    options: [
      "Vì shift(-1) lấy giá trị tương lai và có thể gây data leakage",
      "Vì shift(-1) luôn gây SyntaxError",
      "Vì shift(-1) chỉ dùng cho string",
      "Vì shift(-1) xóa toàn bộ dữ liệu"
    ],
    answer: 0,
    explanation: "shift(-1) đưa giá trị tương lai về dòng hiện tại. Nếu dùng làm feature khi dự báo, model đã nhìn thấy tương lai, gây leakage."
  },
  {
    id: "ts_i_010",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Percentage Change",
    question: "pct_change() trong pandas thường dùng để tính gì?",
    code: "",
    options: [
      "Tỷ lệ thay đổi phần trăm giữa kỳ hiện tại và kỳ trước",
      "Tổng tích lũy từ đầu chuỗi",
      "Moving average",
      "Timezone của timestamp"
    ],
    answer: 0,
    explanation: "pct_change() tính mức thay đổi tương đối so với kỳ trước, ví dụ tăng từ 100 lên 110 thì pct_change là 0.1."
  },
  {
    id: "ts_i_011",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Difference / Differencing",
    question: "diff() trong pandas thường tính gì?",
    code: "",
    options: [
      "Chênh lệch giữa giá trị hiện tại và giá trị kỳ trước",
      "Tỷ lệ phần trăm thay đổi",
      "Tổng lũy kế",
      "Số ngày trong tháng"
    ],
    answer: 0,
    explanation: "diff() tính difference dạng value_t - value_t-1. Nó thường dùng để xem biến động tuyệt đối hoặc hỗ trợ làm chuỗi ổn định hơn."
  },
  {
    id: "ts_i_012",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Rolling Window",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import pandas as pd\ns = pd.Series([10, 20, 30])\nprint(s.rolling(2).mean().tolist())",
    options: [
      "[nan, 15.0, 25.0]",
      "[10.0, 15.0, 25.0]",
      "[15.0, 25.0]",
      "[nan, 10.0, 20.0]"
    ],
    answer: 0,
    explanation: "rolling(2).mean() cần đủ 2 quan sát mặc định. Giá trị đầu là NaN, sau đó là trung bình [10,20] = 15 và [20,30] = 25."
  },
  {
    id: "ts_i_013",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Moving Average",
    question: "Moving average thường giúp gì khi phân tích time series?",
    code: "",
    options: [
      "Làm mượt biến động ngắn hạn để nhìn xu hướng rõ hơn",
      "Tự động tạo target tương lai",
      "Xóa toàn bộ seasonality",
      "Bảo đảm forecast luôn đúng"
    ],
    answer: 0,
    explanation: "Moving average làm mượt noise ngắn hạn, giúp quan sát trend dễ hơn. Tuy nhiên nó không đảm bảo dự báo chính xác."
  },
  {
    id: "ts_i_014",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Expanding Window",
    question: "Expanding window khác rolling window ở điểm nào?",
    code: "",
    options: [
      "Expanding dùng tất cả dữ liệu từ đầu đến thời điểm hiện tại, còn rolling dùng cửa sổ kích thước cố định gần nhất",
      "Expanding luôn dùng dữ liệu tương lai",
      "Rolling không dùng được cho time series",
      "Hai khái niệm này luôn giống nhau"
    ],
    answer: 0,
    explanation: "Expanding window mở rộng dần từ đầu chuỗi. Rolling window chỉ nhìn một số quan sát gần nhất hoặc một khoảng thời gian gần nhất."
  },
  {
    id: "ts_i_015",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Rolling Sum",
    question: "rolling(7).sum() trên dữ liệu daily thường có thể hiểu là gì?",
    code: "",
    options: [
      "Tổng của 7 quan sát gần nhất",
      "Tổng của 7 tháng gần nhất",
      "Giá trị ở 7 ngày tương lai",
      "Số dòng bị thiếu"
    ],
    answer: 0,
    explanation: "Nếu dữ liệu daily mỗi dòng là một ngày và đã sort đúng, rolling(7).sum() là tổng 7 ngày/quan sát gần nhất."
  },
  {
    id: "ts_i_016",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Rolling Standard Deviation",
    question: "Rolling standard deviation thường hữu ích để phát hiện điều gì?",
    code: "",
    options: [
      "Mức độ biến động cục bộ của chuỗi theo thời gian",
      "Tên cột datetime",
      "Số lượng model đã train",
      "Target của bài toán classification"
    ],
    answer: 0,
    explanation: "Rolling std cho biết volatility hoặc độ biến động trong một cửa sổ gần đây, hữu ích khi chuỗi có giai đoạn biến động mạnh/yếu."
  },
  {
    id: "ts_i_017",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Cyclic Pattern",
    question: "Cyclic pattern khác seasonality ở điểm nào?",
    code: "",
    options: [
      "Cyclic pattern thường lặp lại nhưng không nhất thiết có chu kỳ cố định rõ ràng",
      "Cyclic pattern luôn là missing date",
      "Seasonality không bao giờ lặp lại",
      "Hai khái niệm này đều là lỗi dữ liệu"
    ],
    answer: 0,
    explanation: "Seasonality thường có chu kỳ cố định như tuần/tháng/năm. Cyclic pattern có thể lặp nhưng độ dài chu kỳ thay đổi hoặc khó xác định hơn."
  },
  {
    id: "ts_i_018",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Noise",
    question: "Noise trong time series thường là gì?",
    code: "",
    options: [
      "Biến động ngẫu nhiên khó giải thích bằng trend hoặc seasonality",
      "Xu hướng dài hạn",
      "Chu kỳ lặp lại cố định",
      "Cột timestamp"
    ],
    answer: 0,
    explanation: "Noise là phần biến động ngẫu nhiên còn lại sau khi xét các pattern chính như trend và seasonality."
  },
  {
    id: "ts_i_019",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Decomposition Basics",
    question: "Time series decomposition thường tách chuỗi thành những thành phần nào?",
    code: "",
    options: [
      "Trend, seasonality và residual/noise",
      "Train, test và validation",
      "Precision, recall và F1",
      "Category, numeric và boolean"
    ],
    answer: 0,
    explanation: "Decomposition giúp tách chuỗi thành trend, seasonal component và residual để hiểu cấu trúc dữ liệu tốt hơn."
  },
  {
    id: "ts_i_020",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Stationarity Basics",
    question: "Stationarity ở mức cơ bản thường nói về điều gì?",
    code: "",
    options: [
      "Tính chất thống kê của chuỗi như mean/variance tương đối ổn định theo thời gian",
      "Chuỗi có đúng một dòng dữ liệu",
      "Chuỗi không có timestamp",
      "Model dự báo không có lỗi"
    ],
    answer: 0,
    explanation: "Chuỗi stationary có các đặc tính thống kê tương đối ổn định theo thời gian. Một số mô hình truyền thống giả định hoặc hoạt động tốt hơn với chuỗi stationary."
  },
  {
    id: "ts_i_021",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Autocorrelation Basics",
    question: "Autocorrelation mô tả điều gì?",
    code: "",
    options: [
      "Mức độ tương quan giữa chuỗi và phiên bản lag của chính nó",
      "Tương quan giữa hai cột category bất kỳ",
      "Sai số giữa y_true và y_pred",
      "Số lượng missing dates"
    ],
    answer: 0,
    explanation: "Autocorrelation đo xem giá trị hiện tại có liên quan đến giá trị quá khứ của chính chuỗi hay không."
  },
  {
    id: "ts_i_022",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Naive Forecast",
    question: "Naive forecast thường dự báo giá trị kỳ tiếp theo như thế nào?",
    code: "",
    options: [
      "Dùng giá trị quan sát gần nhất làm dự báo",
      "Dùng giá trị ngẫu nhiên",
      "Luôn dự báo bằng 0",
      "Dùng giá trị của 10 năm sau"
    ],
    answer: 0,
    explanation: "Naive forecast là baseline đơn giản: forecast cho kỳ tiếp theo bằng giá trị cuối cùng quan sát được."
  },
  {
    id: "ts_i_023",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Moving Average Forecast",
    question: "Moving average forecast thường dự báo bằng gì?",
    code: "",
    options: [
      "Trung bình của một số quan sát gần nhất",
      "Giá trị nhỏ nhất toàn bộ lịch sử",
      "Giá trị lớn nhất tương lai",
      "Một nhãn classification"
    ],
    answer: 0,
    explanation: "Moving average forecast dùng trung bình của các kỳ gần nhất làm dự báo, giúp làm mượt biến động ngắn hạn."
  },
  {
    id: "ts_i_024",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Seasonal Naive Forecast",
    question: "Seasonal naive forecast phù hợp khi nào?",
    code: "",
    options: [
      "Khi chuỗi có seasonality rõ và có thể dùng giá trị cùng mùa/kỳ trước làm dự báo",
      "Khi dữ liệu không có thời gian",
      "Khi target là category không thứ tự",
      "Khi chỉ có một quan sát"
    ],
    answer: 0,
    explanation: "Seasonal naive dùng giá trị ở cùng vị trí mùa trước, ví dụ dự báo thứ Hai tuần này bằng thứ Hai tuần trước."
  },
  {
    id: "ts_i_025",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Train / Validation / Test for Time Series",
    question: "Với time series forecasting, cách chia train/test nào thường đúng hơn?",
    code: "",
    options: [
      "Train trên giai đoạn cũ hơn, test trên giai đoạn mới hơn",
      "Random split mọi dòng không quan tâm thứ tự thời gian",
      "Test trên quá khứ, train trên tương lai",
      "Fit model trên toàn bộ dữ liệu rồi đánh giá trên train"
    ],
    answer: 0,
    explanation: "Forecasting cần mô phỏng thực tế: dùng quá khứ để dự báo tương lai. Random split có thể gây leakage thời gian."
  },
  {
    id: "ts_i_026",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Forecast Horizon",
    question: "Forecast horizon nghĩa là gì?",
    code: "",
    options: [
      "Khoảng thời gian hoặc số bước tương lai cần dự báo",
      "Số lượng feature trong model",
      "Khoảng cách giữa hai cột DataFrame",
      "Số dòng dùng để fit scaler"
    ],
    answer: 0,
    explanation: "Forecast horizon là phạm vi dự báo, ví dụ dự báo 7 ngày tới, 4 tuần tới hoặc 12 tháng tới."
  },
  {
    id: "ts_i_027",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "Forecast Error",
    question: "Forecast error thường là gì?",
    code: "",
    options: [
      "Chênh lệch giữa giá trị quan sát thực tế và giá trị dự báo",
      "Số lượng timestamp trong dữ liệu",
      "Tên của model forecasting",
      "Số feature category"
    ],
    answer: 0,
    explanation: "Forecast error thường là y_true - y_pred hoặc y_pred - y_true tùy convention. Các metric như MAE/RMSE được tính từ forecast errors."
  },
  {
    id: "ts_i_028",
    library: "Time Series Analysis",
    level: "Intermediate",
    topic: "MAPE Limitations",
    question: "MAPE có vấn đề gì khi giá trị thực tế bằng 0 hoặc rất nhỏ?",
    code: "",
    options: [
      "Có thể không xác định hoặc bị phóng đại rất lớn",
      "Luôn trở thành MAE",
      "Không còn phụ thuộc forecast",
      "Tự động phát hiện seasonality"
    ],
    answer: 0,
    explanation: "MAPE chia cho giá trị thực tế. Nếu actual bằng 0 hoặc gần 0, lỗi phần trăm có thể không xác định hoặc rất lớn."
  },
  {
    id: "ts_a_001",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Data Leakage in Time Series",
    question: "Cách tạo rolling mean nào dễ gây leakage khi dự báo y tại thời điểm t?",
    code: "",
    options: [
      "Tính rolling mean bao gồm cả y tại thời điểm t rồi dùng làm feature để dự báo y_t",
      "Tạo lag y_t-1 bằng shift(1)",
      "Tính rolling mean từ các giá trị quá khứ đã shift",
      "Sort dữ liệu theo timestamp trước khi tạo feature"
    ],
    answer: 0,
    explanation: "Nếu feature dùng chính y_t để dự báo y_t, model đã nhìn thấy target hiện tại. Nên shift trước rồi mới rolling để chỉ dùng quá khứ."
  },
  {
    id: "ts_a_002",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Feature Engineering for Time Series",
    question: "Pattern nào an toàn hơn để tạo rolling feature dự báo y_t?",
    code: "",
    options: [
      "df[\"lag1\"] = df[\"y\"].shift(1); df[\"roll3\"] = df[\"lag1\"].rolling(3).mean()",
      "df[\"roll3\"] = df[\"y\"].rolling(3).mean() rồi dự báo y_t",
      "df[\"future\"] = df[\"y\"].shift(-1)",
      "df[\"roll3\"] = df[\"y\"].shift(-1).rolling(3).mean()"
    ],
    answer: 0,
    explanation: "Shift trước rồi rolling giúp rolling feature tại t chỉ dùng các giá trị trước t, tránh dùng target hiện tại hoặc tương lai."
  },
  {
    id: "ts_a_003",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Walk-forward Validation",
    question: "Walk-forward validation trong forecasting là gì?",
    code: "",
    options: [
      "Đánh giá bằng nhiều lần train trên quá khứ và validate trên giai đoạn kế tiếp",
      "Random shuffle toàn bộ dữ liệu rồi split",
      "Fit model trên test set trước",
      "Chỉ đánh giá trên một dòng cuối cùng"
    ],
    answer: 0,
    explanation: "Walk-forward validation mô phỏng quy trình dự báo thực tế: train bằng dữ liệu có sẵn đến một thời điểm, dự báo giai đoạn kế tiếp, rồi tiến về phía trước."
  },
  {
    id: "ts_a_004",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Backtesting",
    question: "Backtesting trong time series forecasting dùng để làm gì?",
    code: "",
    options: [
      "Đánh giá chiến lược/model dự báo trên nhiều giai đoạn lịch sử theo thứ tự thời gian",
      "Fit model trên dữ liệu tương lai",
      "Thay thế hoàn toàn việc kiểm tra leakage",
      "Chỉ dùng để vẽ histogram"
    ],
    answer: 0,
    explanation: "Backtesting kiểm tra model sẽ hoạt động ra sao nếu được dùng trong quá khứ, qua nhiều mốc thời gian, giúp đánh giá ổn định hơn một split duy nhất."
  },
  {
    id: "ts_a_005",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Forecast Granularity",
    question: "Vì sao forecast granularity cần khớp với nhu cầu sử dụng?",
    code: "",
    options: [
      "Vì dự báo daily, weekly hay monthly phục vụ các quyết định khác nhau và có độ nhiễu khác nhau",
      "Vì granularity không ảnh hưởng gì đến model",
      "Vì mọi bài toán đều bắt buộc forecast theo giây",
      "Vì forecast monthly luôn chính xác hơn mọi trường hợp"
    ],
    answer: 0,
    explanation: "Granularity ảnh hưởng đến noise, seasonality, dữ liệu cần chuẩn bị và cách dùng kết quả. Cần chọn mức thời gian phù hợp với quyết định thực tế."
  },
  {
    id: "ts_a_006",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Multiple Time Series Basics",
    question: "Multiple time series nghĩa là gì?",
    code: "",
    options: [
      "Có nhiều chuỗi theo các group_id khác nhau, ví dụ mỗi product hoặc region có một chuỗi riêng",
      "Một chuỗi chỉ có một timestamp",
      "Dữ liệu không có giá trị thời gian",
      "Một model có nhiều target classification"
    ],
    answer: 0,
    explanation: "Multiple time series xuất hiện khi có nhiều entity, mỗi entity có chuỗi theo thời gian riêng. Cần xử lý group_id khi tạo lag/rolling để không trộn chuỗi."
  },
  {
    id: "ts_a_007",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Grouped Time Series",
    question: "Khi tạo lag cho grouped time series, cách nào đúng hơn?",
    code: "",
    options: [
      "Sort theo group_id và date, rồi dùng groupby(group_id).shift(1)",
      "Dùng shift(1) trên toàn DataFrame mà không quan tâm group",
      "Dùng shift(-1) để lấy tương lai",
      "Random shuffle trước khi tạo lag"
    ],
    answer: 0,
    explanation: "Với nhiều chuỗi, cần tạo lag trong từng group riêng. Nếu shift toàn DataFrame, giá trị của group này có thể bị trộn sang group khác."
  },
  {
    id: "ts_a_008",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Anomaly Detection Basics",
    question: "Trong time series, một điểm spike được xem là anomaly hợp lý nhất khi nào?",
    code: "",
    options: [
      "Khi nó lệch đáng kể so với baseline hoặc expected behavior phù hợp theo thời gian",
      "Khi nó là giá trị lớn nhất trong toàn bộ dữ liệu trong mọi trường hợp",
      "Khi timestamp có định dạng đúng",
      "Khi dữ liệu đã được sort"
    ],
    answer: 0,
    explanation: "Anomaly cần được so với baseline phù hợp như moving average, seasonal baseline hoặc ngưỡng kỳ vọng. Giá trị lớn nhất chưa chắc là anomaly nếu có seasonality hoặc trend."
  },
  {
    id: "ts_a_009",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Spike / Drop Detection",
    question: "Cách nào có thể phát hiện drop bất thường so với gần đây?",
    code: "",
    options: [
      "So sánh giá trị hiện tại với rolling mean hoặc rolling median của quá khứ",
      "So sánh giá trị hiện tại với một timestamp tương lai chưa biết",
      "Xóa toàn bộ các ngày có value thấp",
      "Chỉ kiểm tra kiểu dữ liệu của cột date"
    ],
    answer: 0,
    explanation: "So sánh với baseline quá khứ như rolling mean/median giúp phát hiện drop/spike bất thường mà tránh dùng thông tin tương lai."
  },
  {
    id: "ts_a_010",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Change Point Awareness",
    question: "Change point trong time series là gì?",
    code: "",
    options: [
      "Thời điểm mà hành vi thống kê của chuỗi thay đổi đáng kể",
      "Một timestamp bị format sai",
      "Một dòng có giá trị NaN",
      "Một feature được one-hot encode"
    ],
    answer: 0,
    explanation: "Change point là thời điểm chuỗi đổi regime, ví dụ mean, variance hoặc trend thay đổi rõ rệt."
  },
  {
    id: "ts_a_011",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Visualization for Time Series",
    question: "Biểu đồ nào thường phù hợp nhất để quan sát xu hướng time series theo thời gian?",
    code: "",
    options: [
      "Line chart với trục x là thời gian",
      "Pie chart không có thời gian",
      "Scatter plot không có thứ tự thời gian",
      "Word cloud"
    ],
    answer: 0,
    explanation: "Line chart giúp quan sát xu hướng, seasonality, spike/drop và thay đổi theo thời gian một cách trực quan."
  },
  {
    id: "ts_a_012",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Line Chart Readability",
    question: "Khi line chart time series có quá nhiều điểm và bị rối, cách nào thường giúp dễ đọc hơn?",
    code: "",
    options: [
      "Resample/aggregate theo granularity phù hợp hoặc thêm moving average",
      "Xóa trục thời gian",
      "Đổi toàn bộ giá trị thành string",
      "Random shuffle dữ liệu trước khi vẽ"
    ],
    answer: 0,
    explanation: "Aggregation theo tuần/tháng hoặc moving average giúp giảm nhiễu thị giác, giúp pattern chính dễ nhìn hơn."
  },
  {
    id: "ts_a_013",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Time-based Split",
    question: "Vì sao random split có thể gây đánh giá quá lạc quan trong time series?",
    code: "",
    options: [
      "Vì dữ liệu tương lai có thể lọt vào train set, làm model học thông tin không có thật tại thời điểm dự báo",
      "Vì random split luôn làm mất target",
      "Vì random split không chạy được với pandas",
      "Vì random split chỉ dùng cho ảnh"
    ],
    answer: 0,
    explanation: "Trong time series, thứ tự thời gian quan trọng. Random split có thể để quan sát tương lai nằm trong train, khiến test quá dễ và không phản ánh forecasting thực tế."
  },
  {
    id: "ts_a_014",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Observed Value vs Forecast Value",
    question: "Observed value khác forecast value ở điểm nào?",
    code: "",
    options: [
      "Observed value là giá trị thực tế đã xảy ra, forecast value là giá trị model dự báo",
      "Observed value luôn là giá trị tương lai chưa biết",
      "Forecast value luôn bằng observed value",
      "Forecast value chỉ dùng cho missing value"
    ],
    answer: 0,
    explanation: "Observed value là actual đã ghi nhận. Forecast value là dự đoán cho thời điểm cần dự báo. Forecast error được tính khi có observed value để so sánh."
  },
  {
    id: "ts_a_015",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Common Errors",
    question: "Lỗi nào phổ biến khi phân tích time series bằng pandas?",
    code: "",
    options: [
      "Tạo rolling/lag khi dữ liệu chưa sort đúng theo thời gian",
      "Chuyển date sang datetime",
      "Kiểm tra missing dates",
      "Dùng line chart để quan sát trend"
    ],
    answer: 0,
    explanation: "Nếu chưa sort đúng theo thời gian, lag/rolling có thể lấy sai quan sát quá khứ, làm feature sai và kết quả phân tích không đáng tin."
  },
  {
    id: "ts_a_016",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Best Practice for Data Analyst",
    question: "Best practice nào quan trọng khi làm forecasting report?",
    code: "",
    options: [
      "Luôn nêu rõ horizon, granularity, cách split thời gian, baseline và metric",
      "Chỉ báo một con số forecast mà không nói horizon",
      "Dùng random split và không cần giải thích",
      "Fit model trên toàn bộ dữ liệu rồi báo lỗi train"
    ],
    answer: 0,
    explanation: "Forecasting report cần rõ dự báo cho khoảng nào, mức thời gian nào, so với baseline nào và được đánh giá bằng cách nào để người đọc hiểu đúng."
  },
  {
    id: "ts_a_017",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Forecast Error Metrics",
    question: "Khi target có nhiều giá trị rất nhỏ hoặc bằng 0, metric nào cần đặc biệt cẩn thận?",
    code: "",
    options: [
      "MAPE",
      "MAE",
      "RMSE",
      "Rolling mean"
    ],
    answer: 0,
    explanation: "MAPE chia cho actual value, nên actual bằng 0 hoặc gần 0 có thể làm metric không xác định hoặc bị phóng đại."
  },
  {
    id: "ts_a_018",
    library: "Time Series Analysis",
    level: "Advanced",
    topic: "Stationarity Basics",
    question: "Differencing thường được dùng với mục đích gì trong time series truyền thống?",
    code: "",
    options: [
      "Giảm trend hoặc làm chuỗi ổn định hơn về mặt mean",
      "Tăng số lượng cột category",
      "Tạo nhãn classification",
      "Xóa tất cả timestamp"
    ],
    answer: 0,
    explanation: "Differencing lấy chênh lệch giữa các kỳ, thường giúp loại bỏ trend và hỗ trợ làm chuỗi gần stationary hơn trong một số mô hình truyền thống."
  },
  {
    id: "ts_e_001",
    library: "Time Series Analysis",
    level: "Expert",
    topic: "Leakage from Rolling Features",
    question: "Trong forecasting, vì sao rolling mean cần được tạo cẩn thận với shift?",
    code: "",
    options: [
      "Vì rolling mean không shift có thể bao gồm giá trị hiện tại hoặc tương lai so với thời điểm dự báo",
      "Vì rolling mean luôn gây lỗi syntax",
      "Vì rolling mean không thể dùng với số",
      "Vì rolling mean chỉ dùng để forecast bằng deep learning"
    ],
    answer: 0,
    explanation: "Nếu rolling feature bao gồm y tại thời điểm cần dự báo, model đã nhìn thấy target. Cách an toàn thường là shift trước rồi mới rolling."
  },
  {
    id: "ts_e_002",
    library: "Time Series Analysis",
    level: "Expert",
    topic: "Backtesting",
    question: "Khi backtest một forecast model, vì sao nên giữ đúng thứ tự thời gian ở từng fold?",
    code: "",
    options: [
      "Để mỗi lần đánh giá chỉ dùng dữ liệu quá khứ để dự báo tương lai",
      "Để model được nhìn thấy toàn bộ tương lai",
      "Để làm metric luôn bằng 0",
      "Để bỏ qua seasonality"
    ],
    answer: 0,
    explanation: "Backtesting cần mô phỏng tình huống thực tế. Tại mỗi cutoff, model chỉ nên dùng dữ liệu trước cutoff để dự báo sau cutoff."
  },
  {
    id: "ts_e_003",
    library: "Time Series Analysis",
    level: "Expert",
    topic: "Multiple Time Series Basics",
    question: "Trong grouped time series, lỗi nào có thể xảy ra nếu tạo lag mà không groupby group_id?",
    code: "",
    options: [
      "Lag của group này có thể lấy nhầm giá trị cuối của group khác",
      "Pandas sẽ luôn báo SyntaxError",
      "Lag feature luôn bằng 0",
      "Dữ liệu sẽ tự động được forecast"
    ],
    answer: 0,
    explanation: "Nếu nhiều chuỗi được xếp chung trong một DataFrame, shift toàn cục có thể trộn giá trị giữa các group. Cần groupby trước khi shift."
  },
  {
    id: "ts_e_004",
    library: "Time Series Analysis",
    level: "Expert",
    topic: "Forecast Horizon",
    question: "Vì sao model dự báo 1 ngày tới chưa chắc dùng tốt cho dự báo 30 ngày tới?",
    code: "",
    options: [
      "Vì forecast horizon khác nhau có độ khó, feature availability và sai số tích lũy khác nhau",
      "Vì horizon không ảnh hưởng gì đến forecasting",
      "Vì dự báo 30 ngày tới luôn dễ hơn",
      "Vì model 1 ngày tới không cần dữ liệu"
    ],
    answer: 0,
    explanation: "Horizon dài hơn thường khó hơn vì uncertainty tăng, một số feature không còn biết trước, và lỗi có thể tích lũy nếu dự báo nhiều bước."
  },
  {
    id: "ts_e_005",
    library: "Time Series Analysis",
    level: "Expert",
    topic: "Anomaly Detection Basics",
    question: "Vì sao phát hiện anomaly trong time series nên xét seasonality?",
    code: "",
    options: [
      "Vì một giá trị cao có thể bình thường vào mùa/chu kỳ cao điểm nhưng bất thường ở thời điểm khác",
      "Vì seasonality luôn là lỗi dữ liệu",
      "Vì anomaly chỉ xuất hiện khi không có timestamp",
      "Vì seasonality làm mọi điểm thành anomaly"
    ],
    answer: 0,
    explanation: "Baseline kỳ vọng có thể khác nhau theo giờ, ngày trong tuần hoặc tháng. Không xét seasonality có thể báo false alarm hoặc bỏ sót anomaly."
  },
  {
    id: "ts_e_006",
    library: "Time Series Analysis",
    level: "Expert",
    topic: "Best Practice for Data Analyst",
    question: "Khi xây dựng feature cho time series model trong production, điều nào quan trọng nhất?",
    code: "",
    options: [
      "Mỗi feature tại thời điểm dự báo chỉ dùng thông tin có sẵn tại hoặc trước thời điểm đó",
      "Dùng mọi cột tương lai để tăng accuracy offline",
      "Fit feature engineering trên cả test tương lai",
      "Không cần kiểm tra timestamp"
    ],
    answer: 0,
    explanation: "Trong production, model không biết tương lai. Feature phải phản ánh đúng thông tin available tại thời điểm dự báo để tránh leakage và đánh giá ảo."
  }
];