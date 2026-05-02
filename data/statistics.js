const STATISTICS_QUESTIONS = [
  {
    id: "stat_f_001",
    library: "Statistics",
    level: "Foundation",
    topic: "Descriptive Statistics",
    question: "Trong thống kê mô tả, median đại diện cho điều gì?",
    code: "",
    options: [
      "Giá trị có tần suất xuất hiện cao nhất trong dữ liệu",
      "Giá trị nằm ở giữa sau khi dữ liệu đã được sắp xếp",
      "Giá trị bằng tổng dữ liệu chia cho số quan sát",
      "Giá trị đo khoảng cách từ nhỏ nhất đến lớn nhất"
    ],
    answer: 1,
    explanation: "Median là giá trị nằm ở giữa khi dữ liệu được sắp xếp. Mean là tổng chia cho số quan sát, mode là giá trị xuất hiện nhiều nhất, range là khoảng cách giữa max và min."
  },
  {
    id: "stat_f_002",
    library: "Statistics",
    level: "Foundation",
    topic: "Statistics Overview",
    question: "Mục tiêu chính của thống kê trong phân tích dữ liệu là gì?",
    code: "",
    options: [
      "Tạo biểu đồ dễ nhìn hơn mà không cần diễn giải dữ liệu",
      "Thu thập, mô tả, suy luận và hỗ trợ quyết định từ dữ liệu",
      "Chứng minh tuyệt đối một giả thuyết là đúng trong mọi trường hợp",
      "Thay thế hoàn toàn hiểu biết business khi ra quyết định"
    ],
    answer: 1,
    explanation: "Thống kê giúp mô tả dữ liệu, ước lượng, kiểm định giả thuyết và hỗ trợ ra quyết định trong điều kiện có biến động/không chắc chắn. Nó không chứng minh chắc chắn tuyệt đối trong hầu hết bài toán thực tế."
  },
  {
    id: "stat_f_003",
    library: "Statistics",
    level: "Foundation",
    topic: "Mean / Median / Mode",
    question: "Mean được tính như thế nào?",
    code: "",
    options: [
      "Tổng các giá trị chia cho tổng số quan sát trong dữ liệu",
      "Giá trị có số lần xuất hiện nhiều nhất trong dữ liệu",
      "Khoảng cách giữa giá trị lớn nhất và nhỏ nhất",
      "Giá trị tại mốc 25% sau khi dữ liệu được sắp xếp"
    ],
    answer: 0,
    explanation: "Mean là trung bình cộng: tổng các giá trị chia cho số lượng quan sát. Mode là giá trị xuất hiện nhiều nhất, range là max - min."
  },
  {
    id: "stat_f_004",
    library: "Statistics",
    level: "Foundation",
    topic: "Mean / Median / Mode",
    question: "Mode đại diện cho điều gì?",
    code: "",
    options: [
      "Giá trị trung bình cộng của toàn bộ quan sát",
      "Giá trị nằm giữa sau khi dữ liệu được sắp xếp",
      "Giá trị xuất hiện với tần suất cao nhất",
      "Độ phân tán trung bình quanh mean"
    ],
    answer: 2,
    explanation: "Mode là giá trị xuất hiện nhiều nhất trong dữ liệu. Mean là trung bình cộng, median là giá trị trung tâm, standard deviation đo độ phân tán."
  },
  {
    id: "stat_f_005",
    library: "Statistics",
    level: "Foundation",
    topic: "Mean / Median / Mode",
    question: "Khi dữ liệu có outlier rất lớn, chỉ số nào thường ổn định hơn mean để mô tả trung tâm?",
    code: "",
    options: [
      "Median, vì ít bị kéo lệch bởi giá trị cực đoan",
      "Maximum, vì luôn phản ánh giá trị lớn nhất",
      "Range, vì đo khoảng cách giữa min và max",
      "Count, vì cho biết số lượng quan sát"
    ],
    answer: 0,
    explanation: "Median ít bị ảnh hưởng bởi outlier hơn mean. Nếu có một giá trị cực lớn, mean có thể bị kéo lệch mạnh, còn median thường ổn định hơn."
  },
  {
    id: "stat_f_006",
    library: "Statistics",
    level: "Foundation",
    topic: "Variance / Standard Deviation",
    question: "Standard deviation dùng để đo điều gì?",
    code: "",
    options: [
      "Mức độ dữ liệu phân tán quanh giá trị trung bình",
      "Số lượng quan sát hợp lệ có trong một dataset",
      "Giá trị xuất hiện nhiều lần nhất trong dữ liệu",
      "Tỷ lệ giá trị bị thiếu trong một biến"
    ],
    answer: 0,
    explanation: "Standard deviation đo mức độ các giá trị phân tán quanh mean. Standard deviation càng lớn thì dữ liệu càng biến động mạnh."
  },
  {
    id: "stat_f_007",
    library: "Statistics",
    level: "Foundation",
    topic: "Variance / Standard Deviation",
    question: "Variance và standard deviation khác nhau thế nào?",
    code: "",
    options: [
      "Standard deviation là căn bậc hai của variance",
      "Variance là căn bậc hai của standard deviation",
      "Hai chỉ số luôn giống nhau cả về giá trị và đơn vị",
      "Variance chỉ áp dụng được cho dữ liệu dạng text"
    ],
    answer: 0,
    explanation: "Standard deviation là căn bậc hai của variance. Standard deviation thường dễ diễn giải hơn vì cùng đơn vị với dữ liệu gốc."
  },
  {
    id: "stat_f_008",
    library: "Statistics",
    level: "Foundation",
    topic: "Percentile / Quantile",
    question: "Percentile 90 có nghĩa là gì?",
    code: "",
    options: [
      "Khoảng 90% quan sát nhỏ hơn hoặc bằng ngưỡng đó",
      "Ngưỡng luôn trùng với giá trị lớn nhất trong dữ liệu",
      "Giá trị trung bình cộng của toàn bộ quan sát",
      "Khoảng 90% quan sát bằng đúng cùng một giá trị"
    ],
    answer: 0,
    explanation: "Percentile 90 là ngưỡng mà khoảng 90% quan sát nhỏ hơn hoặc bằng nó. Nó không có nghĩa 90% quan sát bằng đúng giá trị đó."
  },
  {
    id: "stat_f_009",
    library: "Statistics",
    level: "Foundation",
    topic: "IQR",
    question: "IQR được tính như thế nào?",
    code: "",
    options: [
      "Q3 - Q1, tức khoảng giữa tứ phân vị thứ ba và thứ nhất",
      "Mean - Median, tức chênh lệch giữa trung bình và trung vị",
      "Max - Min, tức toàn bộ khoảng biến thiên của dữ liệu",
      "Standard deviation / Mean, tức hệ số biến thiên"
    ],
    answer: 0,
    explanation: "IQR là khoảng tứ phân vị, được tính bằng Q3 - Q1. Nó đo độ phân tán của 50% dữ liệu ở giữa và ít nhạy với outlier hơn range."
  },
  {
    id: "stat_f_010",
    library: "Statistics",
    level: "Foundation",
    topic: "Outlier Basics",
    question: "Outlier nên được hiểu như thế nào trong phân tích dữ liệu?",
    code: "",
    options: [
      "Giá trị bất thường cần kiểm tra thêm trước khi xử lý",
      "Giá trị bất thường nên luôn xóa ngay khỏi dữ liệu",
      "Giá trị bất thường luôn có nghĩa là bằng đúng 0",
      "Giá trị bất thường không bao giờ ảnh hưởng phân tích"
    ],
    answer: 0,
    explanation: "Outlier có thể là lỗi dữ liệu hoặc hiện tượng thật. Người phân tích cần kiểm tra nguyên nhân, tác động và ngữ cảnh trước khi xử lý."
  },
  {
    id: "stat_f_011",
    library: "Statistics",
    level: "Foundation",
    topic: "Population vs Sample",
    question: "Population trong thống kê là gì?",
    code: "",
    options: [
      "Toàn bộ nhóm đối tượng mà phân tích muốn nghiên cứu",
      "Một tập con nhỏ được lấy ra để quan sát từ dữ liệu",
      "Các dòng dữ liệu bị thiếu hoặc có giá trị null",
      "Dữ liệu đã được tổng hợp sau khi vẽ biểu đồ"
    ],
    answer: 0,
    explanation: "Population là toàn bộ đối tượng quan tâm. Sample là một phần được lấy từ population để quan sát hoặc phân tích."
  },
  {
    id: "stat_f_012",
    library: "Statistics",
    level: "Foundation",
    topic: "Population vs Sample",
    question: "Sample trong thống kê là gì?",
    code: "",
    options: [
      "Một tập con được lấy từ population để phân tích",
      "Toàn bộ population được quan sát đầy đủ trong nghiên cứu",
      "Một loại biểu đồ dùng để mô tả phân phối dữ liệu",
      "Một tham số population luôn không có sai số"
    ],
    answer: 0,
    explanation: "Sample là tập con của population. Vì chỉ quan sát một phần, kết quả từ sample thường có sampling error."
  },
  {
    id: "stat_f_013",
    library: "Statistics",
    level: "Foundation",
    topic: "Parameter vs Statistic",
    question: "Parameter khác statistic ở điểm nào?",
    code: "",
    options: [
      "Parameter mô tả population, statistic tính từ sample",
      "Parameter tính từ sample, statistic mô tả population",
      "Cả hai là cùng một khái niệm với tên gọi khác nhau",
      "Statistic chỉ là thuật ngữ dùng khi tạo biểu đồ"
    ],
    answer: 0,
    explanation: "Parameter là đại lượng của population như population mean. Statistic là đại lượng tính từ sample như sample mean, dùng để ước lượng parameter."
  },
  {
    id: "stat_f_014",
    library: "Statistics",
    level: "Foundation",
    topic: "Sampling Bias",
    question: "Sampling bias xảy ra khi nào?",
    code: "",
    options: [
      "Khi sample không đại diện tốt do cách lấy mẫu bị lệch",
      "Khi sample được lấy ngẫu nhiên đúng từ population",
      "Khi dataset chỉ có một cột numeric duy nhất",
      "Khi mean và median có giá trị bằng nhau"
    ],
    answer: 0,
    explanation: "Sampling bias xảy ra khi cách lấy mẫu làm một số nhóm bị chọn nhiều/quá ít so với population, khiến kết luận có thể sai lệch."
  },
  {
    id: "stat_f_015",
    library: "Statistics",
    level: "Foundation",
    topic: "Probability Basics",
    question: "Xác suất của một sự kiện luôn nằm trong khoảng nào?",
    code: "",
    options: [
      "Từ -1 đến 1, gồm cả xác suất âm",
      "Từ 0 đến 1, gồm cả hai biên",
      "Từ 1 đến 1000 tùy kích thước mẫu",
      "Bất kỳ số thực nào trong dữ liệu"
    ],
    answer: 1,
    explanation: "Xác suất luôn nằm trong khoảng từ 0 đến 1. 0 nghĩa là không xảy ra, 1 nghĩa là chắc chắn xảy ra."
  },
  {
    id: "stat_f_016",
    library: "Statistics",
    level: "Foundation",
    topic: "Conditional Probability",
    question: "P(A | B) được hiểu là gì?",
    code: "",
    options: [
      "Xác suất A xảy ra trong điều kiện B đã xảy ra",
      "Xác suất A và B chắc chắn không xảy ra cùng nhau",
      "Xác suất A sau khi lấy xác suất B ra khỏi A",
      "Xác suất A luôn có cùng giá trị với xác suất B"
    ],
    answer: 0,
    explanation: "P(A | B) là xác suất có điều kiện: xác suất A xảy ra trong điều kiện B đã xảy ra. Nó có thể khác P(A)."
  },
  {
    id: "stat_f_017",
    library: "Statistics",
    level: "Foundation",
    topic: "Independence",
    question: "Hai sự kiện A và B độc lập khi nào?",
    code: "",
    options: [
      "Khi biết B xảy ra không làm đổi xác suất của A",
      "Khi A và B không thể xảy ra cùng lúc trong phép thử",
      "Khi xác suất của A luôn lớn hơn xác suất của B",
      "Khi A và B được đặt tên giống nhau trong bài toán"
    ],
    answer: 0,
    explanation: "Độc lập nghĩa là P(A | B) = P(A), tức biết B xảy ra không làm thay đổi xác suất của A. Không nên nhầm độc lập với xung khắc."
  },
  {
    id: "stat_f_018",
    library: "Statistics",
    level: "Foundation",
    topic: "Discrete vs Continuous Variables",
    question: "Biến nào dưới đây là biến rời rạc?",
    code: "",
    options: [
      "Số lượng đơn hàng phát sinh trong một ngày",
      "Chiều cao của khách hàng đo bằng centimet",
      "Thời gian chờ xử lý tính theo giây",
      "Nhiệt độ phòng đo trong một khoảng thời gian"
    ],
    answer: 0,
    explanation: "Số lượng đơn hàng là biến đếm, thường nhận các giá trị nguyên nên là biến rời rạc. Chiều cao, thời gian và nhiệt độ thường được xem là biến liên tục."
  },
  {
    id: "stat_f_019",
    library: "Statistics",
    level: "Foundation",
    topic: "Discrete vs Continuous Variables",
    question: "Biến nào dưới đây là biến liên tục?",
    code: "",
    options: [
      "Số lần click của một user trong phiên",
      "Số user đăng nhập trong một ngày",
      "Thời gian xử lý một request",
      "Số đơn hàng phát sinh trong ngày"
    ],
    answer: 2,
    explanation: "Thời gian xử lý có thể nhận nhiều giá trị trên một khoảng liên tục. Các biến đếm như số user, số click, số đơn thường là biến rời rạc."
  },
  {
    id: "stat_f_020",
    library: "Statistics",
    level: "Foundation",
    topic: "Normal Distribution",
    question: "Phân phối chuẩn thường có hình dạng như thế nào?",
    code: "",
    options: [
      "Dạng hình chuông, đối xứng quanh mean",
      "Dạng lệch phải mạnh với đuôi rất dài",
      "Dạng chỉ gồm hai giá trị rời rạc 0 và 1",
      "Dạng đường thẳng tăng đều theo thời gian"
    ],
    answer: 0,
    explanation: "Phân phối chuẩn có dạng hình chuông, đối xứng quanh mean. Đây là phân phối rất quan trọng trong thống kê suy luận."
  },
  {
    id: "stat_f_021",
    library: "Statistics",
    level: "Foundation",
    topic: "Correlation",
    question: "Correlation đo điều gì?",
    code: "",
    options: [
      "Mức độ và hướng liên hệ giữa hai biến",
      "Bằng chứng chắc chắn về quan hệ nhân quả",
      "Số lượng dòng hợp lệ trong một dataset",
      "Tỷ lệ giá trị bị thiếu trong một biến"
    ],
    answer: 0,
    explanation: "Correlation đo mức độ và hướng liên hệ giữa hai biến, thường là tuyến tính với Pearson. Correlation không tự chứng minh causation."
  },
  {
    id: "stat_f_022",
    library: "Statistics",
    level: "Foundation",
    topic: "Correlation vs Causation",
    question: "Câu nào đúng về correlation và causation?",
    code: "",
    options: [
      "Có correlation thì mặc định có causation",
      "Correlation không tự chứng minh causation",
      "Causation không bao giờ cần dữ liệu kiểm tra",
      "Correlation chỉ áp dụng cho dữ liệu dạng text"
    ],
    answer: 1,
    explanation: "Hai biến tương quan không có nghĩa biến này gây ra biến kia. Có thể có biến gây nhiễu, quan hệ ngược hoặc trùng hợp."
  },
  {
    id: "stat_i_001",
    library: "Statistics",
    level: "Intermediate",
    topic: "Descriptive Statistics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\nvalues = np.array([1, 2, 3, 4])\nprint(values.mean())",
    options: [
      "In ra mean bằng 2.0",
      "In ra mean bằng 2.5",
      "In ra mean bằng 3.0",
      "In ra tổng bằng 10.0"
    ],
    answer: 1,
    explanation: "Mean = (1 + 2 + 3 + 4) / 4 = 2.5."
  },
  {
    id: "stat_i_002",
    library: "Statistics",
    level: "Intermediate",
    topic: "Mean / Median / Mode",
    question: "Kết quả median của [1, 2, 100] là gì?",
    code: "",
    options: [
      "Median là 1 sau khi sắp xếp",
      "Median là 2 sau khi sắp xếp",
      "Median là 34.33 do lấy mean",
      "Median là 100 vì là outlier"
    ],
    answer: 1,
    explanation: "Sau khi sắp xếp [1, 2, 100], giá trị ở giữa là 2. Mean mới là khoảng 34.33 và bị kéo lên bởi outlier 100."
  },
  {
    id: "stat_i_003",
    library: "Statistics",
    level: "Intermediate",
    topic: "Variance / Standard Deviation",
    question: "Trong pandas, std() mặc định thường tính loại độ lệch chuẩn nào?",
    code: "import pandas as pd\ns = pd.Series([1, 2, 3])\nprint(round(s.std(), 2))",
    options: [
      "Population standard deviation với ddof=0",
      "Sample standard deviation với ddof=1",
      "Median absolute deviation quanh median",
      "Range giữa giá trị nhỏ nhất và lớn nhất"
    ],
    answer: 1,
    explanation: "pandas Series.std() mặc định dùng ddof=1, tức sample standard deviation. NumPy np.std mặc định thường dùng ddof=0."
  },
  {
    id: "stat_i_004",
    library: "Statistics",
    level: "Intermediate",
    topic: "Percentile / Quantile",
    question: "Cách nào tính percentile 75 bằng NumPy?",
    code: "import numpy as np\nvalues = np.array([1, 2, 3, 4])",
    options: [
      "np.percentile(values, 75)",
      "np.percent(values, 0.75)",
      "np.q75(values)",
      "values.percentile(75)"
    ],
    answer: 0,
    explanation: "np.percentile(values, 75) tính percentile thứ 75. np.quantile(values, 0.75) cũng thường dùng, nhưng option này không xuất hiện ở đây."
  },
  {
    id: "stat_i_005",
    library: "Statistics",
    level: "Intermediate",
    topic: "IQR",
    question: "IQR thường hữu ích vì lý do nào?",
    code: "",
    options: [
      "Nó ít bị ảnh hưởng bởi outlier hơn range",
      "Nó luôn lớn hơn giá trị lớn nhất trong dữ liệu",
      "Nó chỉ áp dụng được cho biến category",
      "Nó luôn bằng đúng standard deviation"
    ],
    answer: 0,
    explanation: "IQR dựa trên Q1 và Q3 nên tập trung vào 50% dữ liệu giữa, ít bị ảnh hưởng bởi cực trị hơn range."
  },
  {
    id: "stat_i_006",
    library: "Statistics",
    level: "Intermediate",
    topic: "Outlier Basics",
    question: "Theo rule IQR phổ biến, ngưỡng dưới để đánh dấu outlier thường là gì?",
    code: "",
    options: [
      "Q1 - 1.5 * IQR",
      "Q3 + 1.5 * IQR",
      "Mean - 1.5 * IQR",
      "Median - 1.5 * IQR"
    ],
    answer: 0,
    explanation: "Rule IQR thường đánh dấu outlier nếu giá trị nhỏ hơn Q1 - 1.5*IQR hoặc lớn hơn Q3 + 1.5*IQR."
  },
  {
    id: "stat_i_007",
    library: "Statistics",
    level: "Intermediate",
    topic: "Sampling",
    question: "Mục tiêu của random sampling là gì?",
    code: "",
    options: [
      "Giảm selection bias và giúp sample đại diện hơn",
      "Đảm bảo sample giống hệt population trong mọi lần lấy",
      "Chỉ chọn các quan sát có giá trị cao nhất",
      "Loại bỏ hoàn toàn sampling error khỏi phân tích"
    ],
    answer: 0,
    explanation: "Random sampling giúp giảm selection bias và hỗ trợ suy luận thống kê. Tuy vậy, nó không loại bỏ hoàn toàn sampling error."
  },
  {
    id: "stat_i_008",
    library: "Statistics",
    level: "Intermediate",
    topic: "Sampling Bias",
    question: "Ví dụ nào là sampling bias?",
    code: "",
    options: [
      "Chỉ khảo sát active users rồi kết luận cho toàn bộ user",
      "Lấy mẫu ngẫu nhiên từ đầy đủ population mục tiêu",
      "Tăng cỡ mẫu bằng cách chọn ngẫu nhiên thêm quan sát",
      "Chia population thành nhóm rồi lấy mẫu đại diện"
    ],
    answer: 0,
    explanation: "Chỉ khảo sát nhóm active users làm sample bị lệch, không đại diện cho toàn bộ user. Đây là sampling bias."
  },
  {
    id: "stat_i_009",
    library: "Statistics",
    level: "Intermediate",
    topic: "Binomial Distribution",
    question: "Phân phối nhị thức phù hợp với tình huống nào?",
    code: "",
    options: [
      "Đếm số lần success trong n phép thử độc lập có cùng p",
      "Đo một biến liên tục như chiều cao của từng người",
      "Mô tả mọi dataset có outlier hoặc phân phối lệch",
      "Đo mức độ tương quan tuyến tính giữa hai biến"
    ],
    answer: 0,
    explanation: "Binomial distribution mô hình hóa số lần thành công trong n phép thử Bernoulli độc lập với xác suất thành công p không đổi."
  },
  {
    id: "stat_i_010",
    library: "Statistics",
    level: "Intermediate",
    topic: "Poisson Distribution",
    question: "Phân phối Poisson thường dùng để mô hình hóa loại dữ liệu nào?",
    code: "",
    options: [
      "Số sự kiện xảy ra trong một khoảng cố định",
      "Tỷ lệ phần trăm bị chặn trong khoảng từ 0 đến 1",
      "Một đại lượng liên tục như chiều cao hoặc cân nặng",
      "Quan hệ tuyến tính giữa biến độc lập và phụ thuộc"
    ],
    answer: 0,
    explanation: "Poisson thường dùng cho dữ liệu đếm sự kiện trong một khoảng cố định, ví dụ số request mỗi phút, nếu giả định phù hợp."
  },
  {
    id: "stat_i_011",
    library: "Statistics",
    level: "Intermediate",
    topic: "Probability Distribution",
    question: "Probability distribution mô tả điều gì?",
    code: "",
    options: [
      "Cách xác suất phân bổ trên các giá trị của biến ngẫu nhiên",
      "Danh sách tên cột và kiểu dữ liệu trong DataFrame",
      "Màu sắc được dùng để phân biệt các nhóm trên biểu đồ",
      "Số lượng dòng code cần viết để xử lý dữ liệu"
    ],
    answer: 0,
    explanation: "Probability distribution mô tả khả năng xảy ra của các giá trị hoặc khoảng giá trị của một random variable."
  },
  {
    id: "stat_i_012",
    library: "Statistics",
    level: "Intermediate",
    topic: "Central Limit Theorem",
    question: "Central Limit Theorem nói gì theo cách ứng dụng đơn giản?",
    code: "",
    options: [
      "Sample mean có xu hướng gần chuẩn khi n đủ lớn",
      "Dữ liệu gốc luôn trở thành phân phối chuẩn",
      "Outlier không bao giờ ảnh hưởng đến mean",
      "Sample càng nhỏ thì estimate càng chắc chắn"
    ],
    answer: 0,
    explanation: "CLT nói rằng phân phối của sample mean có xu hướng gần normal khi n đủ lớn trong nhiều điều kiện, kể cả dữ liệu gốc không chuẩn. Nó không nói dữ liệu gốc luôn chuẩn."
  },
  {
    id: "stat_i_013",
    library: "Statistics",
    level: "Intermediate",
    topic: "Standard Error",
    question: "Standard error của mean giảm khi yếu tố nào tăng, nếu độ lệch chuẩn giữ nguyên?",
    code: "",
    options: [
      "Sample size tăng lên",
      "p-value tăng lên",
      "Tên biến dài hơn",
      "Số category trong legend tăng"
    ],
    answer: 0,
    explanation: "Standard error của mean thường là std / sqrt(n). Khi sample size tăng, standard error giảm, nghĩa là ước lượng mean chính xác hơn."
  },
  {
    id: "stat_i_014",
    library: "Statistics",
    level: "Intermediate",
    topic: "Confidence Interval",
    question: "Confidence interval 95% cho mean nên được hiểu đúng nhất như thế nào?",
    code: "",
    options: [
      "Quy trình tạo interval như vậy sẽ chứa true mean khoảng 95% số lần lặp",
      "Khoảng đã tính có đúng 95% xác suất chứa true mean",
      "95% từng quan sát cá nhân chắc chắn nằm trong khoảng đó",
      "Khoảng này chứng minh giả thuyết nghiên cứu là đúng"
    ],
    answer: 0,
    explanation: "Diễn giải frequentist đúng là về quy trình lặp lại lấy mẫu. Sau khi đã tính được một khoảng cụ thể, true parameter không còn là biến ngẫu nhiên trong cách hiểu frequentist."
  },
  {
    id: "stat_i_015",
    library: "Statistics",
    level: "Intermediate",
    topic: "Margin of Error",
    question: "Margin of error trong confidence interval thể hiện điều gì?",
    code: "",
    options: [
      "Phần cộng/trừ quanh estimate để tạo confidence interval",
      "Số dòng dữ liệu bị lỗi trong quá trình thu thập",
      "Giá trị p-value dùng để bác bỏ hoặc không bác bỏ H0",
      "Tỷ lệ dòng duplicate trong một bảng dữ liệu"
    ],
    answer: 0,
    explanation: "Confidence interval thường có dạng estimate ± margin of error. Margin of error phản ánh độ không chắc chắn của estimate."
  },
  {
    id: "stat_i_016",
    library: "Statistics",
    level: "Intermediate",
    topic: "Hypothesis Testing",
    question: "Trong hypothesis testing, null hypothesis thường đại diện cho điều gì?",
    code: "",
    options: [
      "Giả thuyết mặc định, thường là không khác biệt hoặc không effect",
      "Kết quả đã chắc chắn đúng trước khi kiểm định",
      "Giả thuyết cần chứng minh đúng bằng mọi giá",
      "Tên dataset được dùng trong một bài kiểm định"
    ],
    answer: 0,
    explanation: "Null hypothesis H0 thường là trạng thái mặc định như không có khác biệt, không có tác động. Kiểm định đánh giá dữ liệu có đủ bằng chứng để bác bỏ H0 hay không."
  },
  {
    id: "stat_i_017",
    library: "Statistics",
    level: "Intermediate",
    topic: "Null Hypothesis / Alternative Hypothesis",
    question: "Nếu muốn kiểm tra mean của sample có khác 100 hay không, alternative hypothesis phù hợp là gì?",
    code: "",
    options: [
      "mean = 100",
      "mean != 100",
      "sample size = 100",
      "standard deviation = 0"
    ],
    answer: 1,
    explanation: "Từ khóa 'có khác 100 hay không' là kiểm định hai phía, nên H1: mean != 100. H0 thường là mean = 100."
  },
  {
    id: "stat_i_018",
    library: "Statistics",
    level: "Intermediate",
    topic: "One-tailed vs Two-tailed Test",
    question: "Khi câu hỏi là 'mean có lớn hơn 100 không?', loại kiểm định phù hợp là gì?",
    code: "",
    options: [
      "One-tailed test phía phải",
      "Two-tailed test hai phía",
      "Chi-square goodness-of-fit",
      "Paired t-test bắt buộc"
    ],
    answer: 0,
    explanation: "Câu hỏi chỉ quan tâm hướng lớn hơn 100 nên là one-tailed test phía phải. Nếu hỏi 'khác 100 không' thì là two-tailed."
  },
  {
    id: "stat_i_019",
    library: "Statistics",
    level: "Intermediate",
    topic: "p-value",
    question: "p-value nên được hiểu đúng nhất là gì?",
    code: "",
    options: [
      "Xác suất thấy dữ liệu ít nhất cực đoan như hiện tại nếu H0 đúng",
      "Xác suất H0 đúng sau khi đã nhìn thấy dữ liệu",
      "Xác suất H1 đúng sau khi đã nhìn thấy dữ liệu",
      "Độ lớn thực tế của effect trong business context"
    ],
    answer: 0,
    explanation: "p-value là xác suất của dữ liệu hoặc dữ liệu cực đoan hơn trong giả định H0 đúng. p-value không phải xác suất H0 đúng."
  },
  {
    id: "stat_i_020",
    library: "Statistics",
    level: "Intermediate",
    topic: "Significance Level alpha",
    question: "Nếu alpha = 0.05 và p-value = 0.03, kết luận thống kê thông thường là gì?",
    code: "",
    options: [
      "Bác bỏ H0 ở mức ý nghĩa 5%",
      "Không bác bỏ H0 ở mức ý nghĩa 5%",
      "Chứng minh H0 đúng với độ chắc chắn 95%",
      "Chứng minh effect có giá trị business rất lớn"
    ],
    answer: 0,
    explanation: "Vì p-value < alpha, ta bác bỏ H0 ở mức ý nghĩa 5%. Tuy nhiên điều này không tự nói effect size lớn hay có ý nghĩa thực tiễn."
  },
  {
    id: "stat_i_021",
    library: "Statistics",
    level: "Intermediate",
    topic: "Type I Error",
    question: "Type I error là gì?",
    code: "",
    options: [
      "Bác bỏ H0 khi H0 thực sự đúng",
      "Không bác bỏ H0 khi H0 thực sự sai",
      "Tăng sample size để giảm sai số chuẩn",
      "Tính median sai do dữ liệu có outlier"
    ],
    answer: 0,
    explanation: "Type I error là false positive: kết luận có hiệu ứng/khác biệt khi thực tế H0 đúng. Alpha thường là xác suất Type I error chấp nhận trước."
  },
  {
    id: "stat_i_022",
    library: "Statistics",
    level: "Intermediate",
    topic: "Type II Error",
    question: "Type II error là gì?",
    code: "",
    options: [
      "Bác bỏ H0 khi H0 thực sự đúng",
      "Không bác bỏ H0 khi H0 thực sự sai",
      "Tính sample mean từ một tập dữ liệu",
      "Vẽ histogram với màu sắc không phù hợp"
    ],
    answer: 1,
    explanation: "Type II error là false negative: không phát hiện hiệu ứng/khác biệt dù thực tế có. Beta thường ký hiệu xác suất Type II error."
  },
  {
    id: "stat_i_023",
    library: "Statistics",
    level: "Intermediate",
    topic: "Statistical Power",
    question: "Statistical power được hiểu là gì?",
    code: "",
    options: [
      "Xác suất phát hiện effect khi effect thật sự tồn tại",
      "Xác suất H0 đúng sau khi thực hiện kiểm định",
      "Tỷ lệ duplicate xuất hiện trong bảng dữ liệu",
      "Số lượng biến được đưa vào một DataFrame"
    ],
    answer: 0,
    explanation: "Power = 1 - beta, là xác suất bác bỏ H0 khi H0 thực sự sai. Power cao giúp giảm rủi ro bỏ sót hiệu ứng thật."
  },
  {
    id: "stat_i_024",
    library: "Statistics",
    level: "Intermediate",
    topic: "Effect Size",
    question: "Effect size cho biết điều gì?",
    code: "",
    options: [
      "Độ lớn của khác biệt hoặc tác động",
      "Xác suất H0 đúng sau khi kiểm định",
      "Số lượng dòng trong file dữ liệu",
      "Tên kiểm định thống kê cần sử dụng"
    ],
    answer: 0,
    explanation: "Effect size đo độ lớn của khác biệt/tác động, giúp đánh giá ý nghĩa thực tế thay vì chỉ dựa vào p-value."
  },
  {
    id: "stat_i_025",
    library: "Statistics",
    level: "Intermediate",
    topic: "Practical Significance",
    question: "Statistical significance khác practical significance thế nào?",
    code: "",
    options: [
      "Statistical significance xét bằng chứng thống kê; practical significance xét effect có đáng kể trong thực tế không",
      "Hai khái niệm luôn giống nhau khi sample size đủ lớn",
      "Practical significance chỉ dùng cho dữ liệu dạng text",
      "Statistical significance luôn đảm bảo lợi ích business lớn"
    ],
    answer: 0,
    explanation: "Một kết quả có thể statistically significant nhưng effect rất nhỏ, không đáng kể về mặt business. Cần xem cả p-value, effect size và context."
  },
  {
    id: "stat_i_026",
    library: "Statistics",
    level: "Intermediate",
    topic: "Correlation",
    question: "Pearson correlation phù hợp nhất để đo loại quan hệ nào?",
    code: "",
    options: [
      "Quan hệ tuyến tính giữa hai biến numeric",
      "Quan hệ nhân quả chắc chắn giữa hai biến",
      "Tỷ lệ missing values trong một cột dữ liệu",
      "Số nhóm category xuất hiện trong legend"
    ],
    answer: 0,
    explanation: "Pearson correlation đo mức độ quan hệ tuyến tính giữa hai biến numeric. Nếu quan hệ phi tuyến hoặc ordinal, có thể cần phương pháp khác."
  },
  {
    id: "stat_i_027",
    library: "Statistics",
    level: "Intermediate",
    topic: "Spearman Correlation",
    question: "Spearman correlation thường hữu ích hơn Pearson khi nào?",
    code: "",
    options: [
      "Khi quan hệ đơn điệu hoặc dữ liệu ordinal",
      "Khi mục tiêu là chứng minh causation",
      "Khi dataset chỉ có đúng một biến duy nhất",
      "Khi dữ liệu hoàn toàn không có thứ tự"
    ],
    answer: 0,
    explanation: "Spearman dựa trên thứ hạng nên phù hợp với quan hệ đơn điệu và dữ liệu ordinal hơn Pearson trong một số trường hợp."
  },
  {
    id: "stat_i_028",
    library: "Statistics",
    level: "Intermediate",
    topic: "Simple Linear Regression Basics",
    question: "Trong hồi quy tuyến tính đơn y = a + b*x, hệ số b thường được hiểu là gì?",
    code: "",
    options: [
      "y kỳ vọng thay đổi bao nhiêu khi x tăng 1 đơn vị",
      "Giá trị lớn nhất mà biến y có thể nhận được",
      "Số lượng quan sát được dùng để train mô hình",
      "p-value dùng để đánh giá toàn bộ dataset"
    ],
    answer: 0,
    explanation: "Slope b cho biết y thay đổi trung bình/kỳ vọng bao nhiêu khi x tăng 1 đơn vị, trong mô hình tuyến tính đơn."
  },
  {
    id: "stat_i_029",
    library: "Statistics",
    level: "Intermediate",
    topic: "R-squared Basics",
    question: "R-squared trong hồi quy thường được hiểu là gì?",
    code: "",
    options: [
      "Tỷ lệ biến thiên của y được mô hình giải thích",
      "Xác suất mô hình đúng tuyệt đối với dữ liệu mới",
      "P-value riêng của từng biến độc lập",
      "Số lượng outlier còn lại sau khi fit mô hình"
    ],
    answer: 0,
    explanation: "R-squared đo tỷ lệ biến thiên của y được giải thích bởi mô hình. R-squared cao không tự chứng minh causation hoặc mô hình tốt trong mọi khía cạnh."
  },
  {
    id: "stat_i_030",
    library: "Statistics",
    level: "Intermediate",
    topic: "Residuals",
    question: "Residual trong mô hình hồi quy là gì?",
    code: "",
    options: [
      "Giá trị thực tế trừ giá trị dự đoán",
      "Giá trị trung bình của biến độc lập x",
      "Số lượng biến độc lập trong mô hình",
      "Tên thuật toán được dùng để train mô hình"
    ],
    answer: 0,
    explanation: "Residual = observed y - predicted y. Phân tích residual giúp kiểm tra mô hình có pattern sai lệch hay vi phạm giả định không."
  },
  {
    id: "stat_a_001",
    library: "Statistics",
    level: "Advanced",
    topic: "One-sample Test",
    question: "Khi muốn kiểm tra mean của một sample có khác một giá trị chuẩn 100 hay không, kiểm định nào thường phù hợp nếu dữ liệu numeric và điều kiện kiểm định phù hợp?",
    code: "",
    options: [
      "One-sample t-test",
      "Chi-square test of independence",
      "Two-way ANOVA bắt buộc",
      "Pearson correlation test"
    ],
    answer: 0,
    explanation: "One-sample t-test dùng để kiểm tra mean của một sample so với một giá trị giả thuyết khi điều kiện kiểm định phù hợp. Chi-square dùng cho dữ liệu categorical, correlation test kiểm tra quan hệ giữa hai biến."
  },
  {
    id: "stat_a_002",
    library: "Statistics",
    level: "Advanced",
    topic: "Two-sample Test",
    question: "Khi muốn so sánh mean của hai nhóm độc lập group_a và group_b, kiểm định nào thường dùng?",
    code: "",
    options: [
      "Two-sample t-test",
      "Paired t-test bắt buộc",
      "One-sample t-test",
      "Chi-square goodness-of-fit"
    ],
    answer: 0,
    explanation: "Two-sample t-test dùng để so sánh mean giữa hai nhóm độc lập. Paired t-test dùng khi các quan sát được ghép cặp như trước/sau trên cùng đối tượng."
  },
  {
    id: "stat_a_003",
    library: "Statistics",
    level: "Advanced",
    topic: "Paired Test",
    question: "Khi nào nên dùng paired t-test?",
    code: "",
    options: [
      "Khi so sánh trước/sau trên cùng đối tượng hoặc dữ liệu ghép cặp",
      "Khi hai nhóm quan sát độc lập hoàn toàn với nhau",
      "Khi biến kết quả là category có nhiều nhóm",
      "Khi mục tiêu chỉ là đếm số dòng trong bảng"
    ],
    answer: 0,
    explanation: "Paired t-test dùng cho dữ liệu phụ thuộc/ghép cặp, ví dụ đo cùng user trước và sau thay đổi. Nó kiểm định mean của chênh lệch từng cặp."
  },
  {
    id: "stat_a_004",
    library: "Statistics",
    level: "Advanced",
    topic: "t-test",
    question: "Cách nào chạy one-sample t-test bằng scipy để kiểm tra sample có mean khác 100?",
    code: "from scipy import stats\nsample = [98, 101, 99, 102]",
    options: [
      "stats.ttest_1samp(sample, popmean=100)",
      "stats.ttest_ind(sample, 100)",
      "stats.chisquare(sample, 100)",
      "stats.pearsonr(sample, 100)"
    ],
    answer: 0,
    explanation: "stats.ttest_1samp dùng cho one-sample t-test, với popmean là mean giả thuyết. ttest_ind dùng cho hai sample độc lập."
  },
  {
    id: "stat_a_005",
    library: "Statistics",
    level: "Advanced",
    topic: "t-test",
    question: "Cách nào chạy two-sample t-test cho hai nhóm độc lập bằng scipy?",
    code: "from scipy import stats\ngroup_a = [10, 12, 11]\ngroup_b = [15, 14, 16]",
    options: [
      "stats.ttest_ind(group_a, group_b)",
      "stats.ttest_1samp(group_a, group_b)",
      "stats.pearsonr(group_a, group_b)",
      "stats.chisquare(group_a, group_b)"
    ],
    answer: 0,
    explanation: "stats.ttest_ind dùng để so sánh mean của hai nhóm độc lập. Nếu dữ liệu ghép cặp, dùng stats.ttest_rel."
  },
  {
    id: "stat_a_006",
    library: "Statistics",
    level: "Advanced",
    topic: "Paired Test",
    question: "Cách nào chạy paired t-test bằng scipy?",
    code: "from scipy import stats\nbefore = [10, 12, 11]\nafter = [13, 13, 12]",
    options: [
      "stats.ttest_rel(before, after)",
      "stats.ttest_ind(before, after)",
      "stats.ttest_1samp(before, after)",
      "stats.chisquare(before, after)"
    ],
    answer: 0,
    explanation: "stats.ttest_rel dùng cho paired t-test, tức hai dãy quan sát có liên hệ theo cặp. ttest_ind dùng cho hai nhóm độc lập."
  },
  {
    id: "stat_a_007",
    library: "Statistics",
    level: "Advanced",
    topic: "z-test",
    question: "z-test cho mean thường phù hợp hơn t-test trong trường hợp nào?",
    code: "",
    options: [
      "Khi population standard deviation đã biết và điều kiện xấp xỉ phù hợp",
      "Khi biến phân tích chính là dữ liệu category hoặc text",
      "Khi sample size chỉ bằng 1 quan sát duy nhất",
      "Khi bài toán không có giả thuyết thống kê nào"
    ],
    answer: 0,
    explanation: "z-test thường phù hợp khi population standard deviation đã biết hoặc trong một số bài toán xấp xỉ với sample size lớn. Trong thực tế, t-test thường phổ biến hơn khi sigma population không biết."
  },
  {
    id: "stat_a_008",
    library: "Statistics",
    level: "Advanced",
    topic: "Chi-square Test",
    question: "Chi-square test of independence thường dùng để kiểm tra điều gì?",
    code: "",
    options: [
      "Hai biến categorical có độc lập với nhau hay không",
      "Mean của một biến numeric có bằng 0 hay không",
      "Correlation giữa hai biến numeric mạnh hay yếu",
      "Median của một nhóm có khác 0 hay không"
    ],
    answer: 0,
    explanation: "Chi-square test of independence kiểm tra mối liên hệ giữa hai biến categorical thông qua bảng contingency."
  },
  {
    id: "stat_a_009",
    library: "Statistics",
    level: "Advanced",
    topic: "ANOVA",
    question: "ANOVA một chiều thường dùng khi nào?",
    code: "",
    options: [
      "So sánh mean của biến numeric giữa từ ba nhóm độc lập trở lên",
      "So sánh chính xác hai tỷ lệ bằng cách dùng pie chart",
      "Kiểm tra một biến bất kỳ có chứa null hay không",
      "Tính median của một sample và so với outlier"
    ],
    answer: 0,
    explanation: "One-way ANOVA thường dùng để kiểm tra liệu mean của một biến numeric có khác nhau giữa từ ba nhóm độc lập trở lên hay không."
  },
  {
    id: "stat_a_010",
    library: "Statistics",
    level: "Advanced",
    topic: "Non-parametric Tests",
    question: "Khi dữ liệu numeric lệch mạnh, có outlier và sample nhỏ, hướng nào có thể cân nhắc?",
    code: "",
    options: [
      "Cân nhắc kiểm định non-parametric hoặc phương pháp robust",
      "Dùng t-test bắt buộc và bỏ qua toàn bộ giả định",
      "Chuyển tất cả giá trị numeric thành đúng 0",
      "Không cần kiểm định vì sample size đang nhỏ"
    ],
    answer: 0,
    explanation: "Nếu giả định của t-test khó thỏa mãn, có thể cân nhắc kiểm định non-parametric phù hợp, bootstrap hoặc phương pháp robust tùy bài toán."
  },
  {
    id: "stat_a_011",
    library: "Statistics",
    level: "Advanced",
    topic: "Confidence Interval",
    question: "Confidence interval rộng hơn thường thể hiện điều gì?",
    code: "",
    options: [
      "Ước lượng kém chính xác hơn hoặc uncertainty lớn hơn",
      "Kết quả chắc chắn có giá trị business cao hơn",
      "Sample size luôn lớn hơn so với interval hẹp",
      "Sampling error đã được loại bỏ hoàn toàn"
    ],
    answer: 0,
    explanation: "CI rộng hơn thường cho thấy estimate còn nhiều uncertainty hơn, có thể do sample size nhỏ, variability lớn hoặc mức confidence cao hơn."
  },
  {
    id: "stat_a_012",
    library: "Statistics",
    level: "Advanced",
    topic: "Confidence Interval vs Prediction Interval",
    question: "Confidence interval và prediction interval khác nhau thế nào?",
    code: "",
    options: [
      "CI ước lượng parameter trung bình; PI dự đoán khoảng cho quan sát mới",
      "Hai khoảng luôn giống nhau nếu dùng cùng mức tin cậy",
      "Prediction interval luôn hẹp hơn confidence interval",
      "Confidence interval chỉ áp dụng cho biến categorical"
    ],
    answer: 0,
    explanation: "Confidence interval thường ước lượng parameter như mean. Prediction interval dự đoán khoảng cho một quan sát mới nên thường rộng hơn vì bao gồm cả variability cá thể."
  },
  {
    id: "stat_a_013",
    library: "Statistics",
    level: "Advanced",
    topic: "p-value Interpretation",
    question: "Vì sao p-value nhỏ không đồng nghĩa effect lớn?",
    code: "",
    options: [
      "Vì p-value phụ thuộc effect size, sample size và variability",
      "Vì p-value chính là một cách gọi khác của effect size",
      "Vì p-value hoàn toàn không liên quan đến sample size",
      "Vì p-value nhỏ luôn chứng minh dữ liệu bị lỗi"
    ],
    answer: 0,
    explanation: "Với sample size rất lớn, một effect rất nhỏ cũng có thể tạo p-value nhỏ. Vì vậy cần xem thêm effect size và practical significance."
  },
  {
    id: "stat_a_014",
    library: "Statistics",
    level: "Advanced",
    topic: "Statistical Power",
    question: "Yếu tố nào thường làm tăng statistical power?",
    code: "",
    options: [
      "Tăng sample size, nếu các yếu tố khác giữ nguyên",
      "Giảm effect size trong khi noise giữ nguyên",
      "Tăng noise hoặc variability trong dữ liệu",
      "Giảm chất lượng đo lường của metric"
    ],
    answer: 0,
    explanation: "Khi sample size tăng, standard error giảm và khả năng phát hiện effect thật thường tăng, nếu các yếu tố khác giữ nguyên."
  },
  {
    id: "stat_a_015",
    library: "Statistics",
    level: "Advanced",
    topic: "Multiple Testing",
    question: "Khi thực hiện rất nhiều kiểm định cùng lúc, rủi ro nào tăng lên?",
    code: "",
    options: [
      "Xác suất false positive tăng lên",
      "Dữ liệu tự động trở thành phân phối chuẩn",
      "Sample size tự động tăng theo số kiểm định",
      "Alpha không còn cần thiết trong phân tích"
    ],
    answer: 0,
    explanation: "Khi chạy nhiều kiểm định, xác suất có ít nhất một kết quả significant do may mắn tăng lên. Cần cân nhắc multiple testing correction hoặc kiểm soát false discovery."
  },
  {
    id: "stat_a_016",
    library: "Statistics",
    level: "Advanced",
    topic: "Assumptions",
    question: "Vì sao cần kiểm tra giả định của kiểm định thống kê?",
    code: "",
    options: [
      "Vì vi phạm giả định có thể làm kết luận không đáng tin",
      "Vì mọi kiểm định đều không cần dữ liệu đầu vào",
      "Vì giả định chỉ ảnh hưởng đến màu sắc biểu đồ",
      "Vì kiểm định luôn đúng dù dữ liệu thế nào"
    ],
    answer: 0,
    explanation: "Mỗi kiểm định có giả định riêng. Nếu vi phạm nghiêm trọng, p-value, confidence interval và kết luận có thể bị sai lệch."
  },
  {
    id: "stat_a_017",
    library: "Statistics",
    level: "Advanced",
    topic: "Skewness",
    question: "Dữ liệu lệch phải thường có đặc điểm nào?",
    code: "",
    options: [
      "Có đuôi dài về phía giá trị lớn",
      "Có đuôi dài về phía giá trị nhỏ",
      "Luôn đối xứng hoàn hảo quanh mean",
      "Chỉ nhận đúng hai giá trị 0 và 1"
    ],
    answer: 0,
    explanation: "Right-skewed distribution có đuôi kéo dài về phía giá trị lớn. Ví dụ thường gặp là income, order value hoặc session duration."
  },
  {
    id: "stat_a_018",
    library: "Statistics",
    level: "Advanced",
    topic: "Distribution Diagnostics",
    question: "Vì sao nên xem phân phối dữ liệu trước khi chọn summary metric?",
    code: "",
    options: [
      "Vì outlier và skewness có thể làm mean kém đại diện",
      "Vì mọi dataset đều nên dùng mean làm summary metric",
      "Vì median không bao giờ hữu ích trong phân tích",
      "Vì phân phối không ảnh hưởng đến lựa chọn metric"
    ],
    answer: 0,
    explanation: "Nếu dữ liệu lệch mạnh hoặc có outlier, mean có thể không đại diện tốt. Median, percentile hoặc trimmed mean có thể phù hợp hơn tùy mục tiêu."
  },
  {
    id: "stat_a_019",
    library: "Statistics",
    level: "Advanced",
    topic: "p-value Interpretation",
    question: "Câu nào là diễn giải sai về p-value?",
    code: "",
    options: [
      "p-value = 0.03 nghĩa là có 3% xác suất H0 đúng",
      "p-value nhỏ nghĩa là dữ liệu khá bất thường nếu H0 đúng",
      "p-value cần so sánh với alpha để ra quyết định",
      "p-value không trực tiếp đo độ lớn của effect"
    ],
    answer: 0,
    explanation: "p-value không phải xác suất H0 đúng. Nó là xác suất quan sát dữ liệu ít nhất cực đoan như hiện tại nếu giả định H0 đúng."
  },
  {
    id: "stat_a_020",
    library: "Statistics",
    level: "Advanced",
    topic: "Business Interpretation",
    question: "Khi kết quả kiểm định statistically significant nhưng effect size rất nhỏ, Data Analyst nên làm gì?",
    code: "",
    options: [
      "Xem thêm practical significance, chi phí/lợi ích và context",
      "Triển khai ngay vì p-value nhỏ là đủ để quyết định",
      "Kết luận dữ liệu chắc chắn sai và loại bỏ kết quả",
      "Bỏ qua sample size và confidence interval"
    ],
    answer: 0,
    explanation: "Data Analyst không nên chỉ dựa vào p-value. Cần đánh giá effect size, confidence interval, tác động business, chi phí triển khai và rủi ro."
  },
  {
    id: "stat_e_001",
    library: "Statistics",
    level: "Expert",
    topic: "Causal Inference",
    question: "Vì sao randomized experiment thường mạnh hơn observational analysis khi đánh giá causal effect?",
    code: "",
    options: [
      "Randomization giúp cân bằng confounders giữa nhóm trong kỳ vọng",
      "Randomization tự động làm sample size trở thành vô hạn",
      "Observational data không bao giờ có giá trị phân tích",
      "Randomization loại bỏ hoàn toàn mọi lỗi đo lường"
    ],
    answer: 0,
    explanation: "Randomization giúp phân bổ cả observed và unobserved confounders tương đối cân bằng giữa treatment/control trong kỳ vọng, nên hỗ trợ suy luận nhân quả tốt hơn observational analysis."
  },
  {
    id: "stat_e_002",
    library: "Statistics",
    level: "Expert",
    topic: "Hypothesis Testing",
    question: "Vì sao một kiểm định không significant không nhất thiết chứng minh không có effect?",
    code: "",
    options: [
      "Có thể power thấp, sample nhỏ hoặc variability cao nên không phát hiện effect",
      "Vì p-value luôn sai trong mọi kiểm định thống kê",
      "Vì H0 luôn đúng khi p-value lớn hơn alpha",
      "Vì confidence interval không liên quan đến kết luận"
    ],
    answer: 0,
    explanation: "Không significant chỉ nghĩa là chưa đủ bằng chứng để bác bỏ H0. Nếu power thấp hoặc CI rộng, effect có thể tồn tại nhưng chưa được phát hiện."
  },
  {
    id: "stat_e_003",
    library: "Statistics",
    level: "Expert",
    topic: "Multiple Testing / Cherry-picking",
    question: "Trong phân tích nhiều metric và nhiều segment, vì sao cherry-picking nguy hiểm?",
    code: "",
    options: [
      "Chọn kết quả significant sau khi nhìn dữ liệu làm tăng false positives",
      "Nó luôn làm toàn bộ dữ liệu biến mất khỏi dataset",
      "Nó chỉ ảnh hưởng đến màu sắc hiển thị trên dashboard",
      "Nó làm sample size tự động giảm về đúng 0"
    ],
    answer: 0,
    explanation: "Nếu thử nhiều metric/segment rồi chỉ báo cáo kết quả significant, xác suất false positive tăng mạnh. Cần predefine metric, segment và dùng correction/phân tích xác nhận."
  },
  {
    id: "stat_e_004",
    library: "Statistics",
    level: "Expert",
    topic: "Regression Diagnostics",
    question: "Residual plot trong hồi quy thường dùng để kiểm tra điều gì?",
    code: "",
    options: [
      "Pattern còn sót lại, non-linearity, heteroscedasticity hoặc outlier",
      "Tên cột trong dữ liệu có đúng chuẩn đặt tên hay không",
      "Số lượng màu sắc được dùng trong biểu đồ",
      "Dữ liệu đã được lưu thành file CSV hay chưa"
    ],
    answer: 0,
    explanation: "Residual plot giúp xem residual có pattern không. Pattern rõ có thể gợi ý non-linearity, heteroscedasticity, outlier hoặc mô hình thiếu biến quan trọng."
  },
  {
    id: "stat_e_005",
    library: "Statistics",
    level: "Expert",
    topic: "Uncertainty",
    question: "Vì sao prediction interval thường rộng hơn confidence interval cho mean?",
    code: "",
    options: [
      "Vì PI gồm uncertainty của mean và biến động của quan sát mới",
      "Vì prediction interval luôn dùng alpha lớn hơn",
      "Vì confidence interval hoàn toàn không có uncertainty",
      "Vì prediction interval chỉ áp dụng cho dữ liệu category"
    ],
    answer: 0,
    explanation: "Prediction interval phải bao gồm uncertainty khi ước lượng mean và random variability của một quan sát mới, nên thường rộng hơn confidence interval cho mean."
  },
  {
    id: "stat_e_006",
    library: "Statistics",
    level: "Expert",
    topic: "Sampling / Bias",
    question: "Vì sao 'sample size lớn' không tự động đảm bảo kết luận đúng?",
    code: "",
    options: [
      "Bias, measurement error, confounding hoặc data quality vẫn có thể làm sai",
      "Sample lớn luôn làm p-value bằng đúng 1",
      "Sample lớn khiến mean không thể tính được",
      "Dữ liệu lớn thì không cần dùng thống kê"
    ],
    answer: 0,
    explanation: "Sample size lớn có thể giảm random error nhưng không tự sửa bias, confounding, measurement error hoặc data quality issues. Big data vẫn có thể cho kết luận sai."
  },
  {
    id: "stat_e_007",
    library: "Statistics",
    level: "Expert",
    topic: "Business Communication",
    question: "Trong môi trường business, vì sao cần báo cáo cả confidence interval và effect size?",
    code: "",
    options: [
      "Để thấy cả độ lớn tác động và uncertainty, không chỉ significant",
      "Để thay thế hoàn toàn bước data cleaning",
      "Để dashboard có nhiều chữ và nhìn phức tạp hơn",
      "Vì p-value không thể tính bằng Python"
    ],
    answer: 0,
    explanation: "Effect size cho biết tác động lớn đến đâu; confidence interval cho biết độ không chắc chắn. Stakeholder cần cả hai để quyết định có nên hành động hay không."
  },
  {
    id: "stat_e_008",
    library: "Statistics",
    level: "Expert",
    topic: "Statistical Reasoning",
    question: "Một kết luận thống kê đáng tin trong phân tích dữ liệu nên dựa trên điều gì?",
    code: "",
    options: [
      "Thiết kế rõ ràng, dữ liệu tốt, giả định phù hợp, effect size, uncertainty và context",
      "Một p-value nhỏ duy nhất mà không cần kiểm tra thêm",
      "Một biểu đồ đẹp duy nhất và dễ thuyết phục stakeholder",
      "Một sample nhỏ nhưng cho ra kết quả đúng kỳ vọng"
    ],
    answer: 0,
    explanation: "Kết luận tốt không dựa vào một con số đơn lẻ. Cần xem thiết kế phân tích, chất lượng dữ liệu, giả định, uncertainty, effect size và ý nghĩa business."
  }
];