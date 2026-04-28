const STATISTICS_QUESTIONS = [
  {
    id: "stat_f_001",
    library: "Statistics",
    level: "Foundation",
    topic: "Descriptive Statistics",
    question: "Trong thống kê mô tả, median đại diện cho điều gì?",
    code: "",
    options: [
      "Giá trị xuất hiện nhiều nhất",
      "Giá trị ở vị trí trung tâm khi dữ liệu được sắp xếp",
      "Tổng tất cả giá trị chia cho số lượng quan sát",
      "Khoảng cách giữa giá trị lớn nhất và nhỏ nhất"
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
      "Chỉ để tạo biểu đồ đẹp hơn",
      "Thu thập, mô tả, suy luận và ra quyết định dựa trên dữ liệu",
      "Luôn chứng minh chắc chắn 100% một giả thuyết",
      "Thay thế hoàn toàn hiểu biết business"
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
      "Tổng các giá trị chia cho số lượng quan sát",
      "Giá trị xuất hiện nhiều nhất",
      "Giá trị lớn nhất trừ giá trị nhỏ nhất",
      "Giá trị ở vị trí 25%"
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
      "Giá trị trung bình cộng",
      "Giá trị ở giữa khi sắp xếp",
      "Giá trị xuất hiện nhiều nhất",
      "Độ lệch chuẩn của dữ liệu"
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
      "Median",
      "Maximum",
      "Range",
      "Count"
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
      "Độ phân tán của dữ liệu quanh trung bình",
      "Số lượng dòng dữ liệu",
      "Giá trị xuất hiện nhiều nhất",
      "Tỷ lệ missing values"
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
      "Hai khái niệm hoàn toàn giống nhau",
      "Variance chỉ dùng cho dữ liệu text"
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
      "90% quan sát nhỏ hơn hoặc bằng giá trị đó",
      "Giá trị lớn nhất trong dữ liệu",
      "Giá trị trung bình cộng",
      "90% quan sát bằng đúng giá trị đó"
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
      "Q3 - Q1",
      "Mean - Median",
      "Max - Min",
      "Standard deviation / Mean"
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
      "Giá trị bất thường cần kiểm tra thêm, không mặc định là sai",
      "Giá trị luôn phải xóa ngay",
      "Giá trị luôn bằng 0",
      "Giá trị không bao giờ ảnh hưởng đến phân tích"
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
      "Toàn bộ nhóm đối tượng mà ta muốn nghiên cứu",
      "Một phần nhỏ được lấy ra từ dữ liệu",
      "Chỉ các dòng có missing values",
      "Chỉ dữ liệu sau khi đã vẽ biểu đồ"
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
      "Một tập con được lấy từ population",
      "Luôn là toàn bộ population",
      "Một loại biểu đồ",
      "Một tham số luôn không có sai số"
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
      "Parameter luôn tính từ sample, statistic luôn mô tả population",
      "Hai khái niệm giống hệt nhau",
      "Statistic chỉ dùng cho biểu đồ"
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
      "Sample không đại diện tốt cho population do cách lấy mẫu bị lệch",
      "Sample được lấy ngẫu nhiên đúng cách",
      "Dữ liệu có đúng một cột numeric",
      "Mean bằng median"
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
      "Từ -1 đến 1",
      "Từ 0 đến 1",
      "Từ 1 đến 1000",
      "Bất kỳ số thực nào"
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
      "Xác suất A xảy ra khi biết B đã xảy ra",
      "Xác suất A và B không thể cùng xảy ra",
      "Xác suất A trừ xác suất B",
      "Xác suất A luôn bằng B"
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
      "Việc biết B xảy ra không làm thay đổi xác suất xảy ra của A",
      "A và B không bao giờ xảy ra cùng nhau",
      "A luôn lớn hơn B",
      "A và B có cùng tên"
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
      "Số lượng đơn hàng",
      "Chiều cao đo bằng cm",
      "Thời gian chờ tính bằng giây",
      "Nhiệt độ"
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
      "Số lần click",
      "Số user",
      "Thời gian xử lý",
      "Số đơn hàng"
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
      "Hình chuông và đối xứng quanh mean",
      "Luôn lệch phải rất mạnh",
      "Chỉ có hai giá trị 0 và 1",
      "Luôn là đường thẳng tăng"
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
      "Mức độ liên hệ giữa hai biến",
      "Chắc chắn quan hệ nhân quả",
      "Số dòng trong dữ liệu",
      "Tỷ lệ missing values"
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
      "Có correlation thì chắc chắn có causation",
      "Correlation không tự chứng minh causation",
      "Causation không bao giờ cần dữ liệu",
      "Correlation chỉ dùng cho dữ liệu text"
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
      "2.0",
      "2.5",
      "3.0",
      "10.0"
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
      "1",
      "2",
      "34.33",
      "100"
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
      "Median absolute deviation",
      "Range"
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
      "Ít bị ảnh hưởng bởi outlier hơn range",
      "Luôn lớn hơn giá trị max",
      "Chỉ dùng được với dữ liệu category",
      "Luôn bằng standard deviation"
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
      "Mean + Median",
      "Max - Min"
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
      "Giảm thiên lệch do cách chọn mẫu và giúp sample đại diện hơn cho population",
      "Đảm bảo sample luôn giống hệt population 100%",
      "Chỉ chọn các quan sát có giá trị lớn nhất",
      "Loại bỏ hoàn toàn sampling error"
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
      "Chỉ khảo sát người dùng hoạt động nhiều nhất rồi kết luận cho toàn bộ user",
      "Lấy mẫu ngẫu nhiên từ toàn bộ user",
      "Tăng kích thước mẫu bằng cách chọn ngẫu nhiên",
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
      "Đếm số lần thành công trong n phép thử độc lập, mỗi phép thử có xác suất thành công p",
      "Đo chiều cao liên tục của một người",
      "Mô tả mọi dữ liệu có outlier",
      "Tính correlation giữa hai biến"
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
      "Số sự kiện xảy ra trong một khoảng thời gian/không gian cố định",
      "Tỷ lệ phần trăm luôn nằm giữa 0 và 1",
      "Chiều cao liên tục",
      "Quan hệ tuyến tính giữa x và y"
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
      "Cách xác suất được phân bổ trên các giá trị có thể có của biến ngẫu nhiên",
      "Tên các cột trong DataFrame",
      "Màu sắc của biểu đồ",
      "Số lượng dòng code"
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
      "Với sample size đủ lớn, phân phối của sample mean có xu hướng gần chuẩn trong nhiều điều kiện",
      "Mọi dữ liệu gốc đều luôn phân phối chuẩn",
      "Outlier không bao giờ ảnh hưởng đến mean",
      "Sample size càng nhỏ thì ước lượng càng chắc chắn"
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
      "Sample size",
      "p-value",
      "Tên biến",
      "Số category trong legend"
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
      "Nếu lặp lại quy trình lấy mẫu nhiều lần, khoảng tin cậy được tạo theo cách đó sẽ chứa true mean khoảng 95% số lần",
      "Có 95% xác suất true mean nằm trong khoảng đã tính sau khi khoảng đã cố định",
      "95% dữ liệu cá nhân chắc chắn nằm trong khoảng",
      "Khoảng này luôn chứng minh giả thuyết đúng"
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
      "Khoảng cộng/trừ quanh estimate để tạo interval",
      "Số dòng dữ liệu bị lỗi",
      "Giá trị p-value",
      "Tỷ lệ duplicate"
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
      "Giả thuyết mặc định, thường là không có khác biệt hoặc không có hiệu ứng",
      "Kết quả chắc chắn đúng",
      "Giả thuyết luôn muốn chứng minh bằng mọi giá",
      "Tên của dataset"
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
      "Two-tailed test",
      "Chi-square goodness-of-fit bắt buộc",
      "Paired test bắt buộc"
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
      "Xác suất quan sát kết quả ít nhất cực đoan như dữ liệu hiện tại nếu H0 đúng",
      "Xác suất H0 đúng",
      "Xác suất H1 đúng",
      "Kích thước hiệu ứng"
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
      "Không bác bỏ H0",
      "Chứng minh H0 đúng",
      "Chứng minh effect rất lớn về mặt business"
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
      "Không bác bỏ H0 khi H0 sai",
      "Tăng sample size",
      "Tính median sai"
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
      "Bác bỏ H0 khi H0 đúng",
      "Không bác bỏ H0 khi H0 thực sự sai",
      "Tính sample mean",
      "Vẽ histogram sai màu"
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
      "Xác suất phát hiện hiệu ứng khi hiệu ứng thực sự tồn tại",
      "Xác suất H0 đúng",
      "Tỷ lệ duplicate trong dữ liệu",
      "Số lượng biến trong DataFrame"
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
      "Xác suất H0 đúng",
      "Số lượng dòng trong file",
      "Tên kiểm định cần dùng"
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
      "Statistical significance nói dữ liệu có bằng chứng thống kê; practical significance xem hiệu ứng có đủ lớn để quan trọng trong thực tế không",
      "Hai khái niệm luôn giống nhau",
      "Practical significance chỉ dùng cho dữ liệu text",
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
      "Quan hệ nhân quả chắc chắn",
      "Tỷ lệ missing values",
      "Số nhóm category"
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
      "Khi quan hệ đơn điệu hoặc dữ liệu ordinal, không nhất thiết tuyến tính",
      "Khi muốn chứng minh causation",
      "Khi chỉ có một biến duy nhất",
      "Khi dữ liệu không có thứ tự nào"
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
      "Mức thay đổi kỳ vọng của y khi x tăng 1 đơn vị",
      "Giá trị lớn nhất của y",
      "Số lượng quan sát",
      "p-value của toàn bộ dữ liệu"
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
      "Xác suất mô hình đúng tuyệt đối",
      "P-value của từng biến",
      "Số lượng outlier"
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
      "Giá trị trung bình của x",
      "Số lượng biến độc lập",
      "Tên của mô hình"
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
      "ANOVA hai chiều bắt buộc",
      "Correlation test"
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
      "Khi so sánh trước và sau trên cùng đối tượng hoặc dữ liệu được ghép cặp",
      "Khi hai nhóm hoàn toàn độc lập",
      "Khi biến kết quả là category có 10 nhóm",
      "Khi chỉ muốn đếm số dòng"
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
    explanation: "stats.ttest_rel dùng cho paired t-test, khi hai danh sách là các cặp quan sát liên quan như before/after trên cùng đối tượng."
  },
  {
    id: "stat_a_007",
    library: "Statistics",
    level: "Advanced",
    topic: "z-test Basics",
    question: "z-test cho mean thường phù hợp hơn t-test trong trường hợp nào?",
    code: "",
    options: [
      "Khi population standard deviation đã biết và các điều kiện xấp xỉ phù hợp",
      "Khi dữ liệu là category text",
      "Khi sample size bằng 1",
      "Khi không có giả thuyết nào"
    ],
    answer: 0,
    explanation: "z-test thường dùng khi biết population standard deviation hoặc trong một số xấp xỉ mẫu lớn. Trong thực tế, t-test thường phổ biến hơn khi std population không biết."
  },
  {
    id: "stat_a_008",
    library: "Statistics",
    level: "Advanced",
    topic: "Chi-square Test Basics",
    question: "Chi-square test of independence thường dùng để kiểm tra điều gì?",
    code: "",
    options: [
      "Hai biến categorical có độc lập với nhau không",
      "Mean của một biến numeric có bằng 0 không",
      "Correlation giữa hai biến numeric",
      "Median của một nhóm"
    ],
    answer: 0,
    explanation: "Chi-square test of independence kiểm tra mối liên hệ giữa hai biến categorical trong contingency table."
  },
  {
    id: "stat_a_009",
    library: "Statistics",
    level: "Advanced",
    topic: "ANOVA Basics",
    question: "ANOVA một chiều thường dùng khi nào?",
    code: "",
    options: [
      "So sánh mean của một biến numeric giữa từ ba nhóm độc lập trở lên",
      "So sánh chính xác hai tỷ lệ bằng pie chart",
      "Kiểm tra một biến có null không",
      "Tính median của một sample"
    ],
    answer: 0,
    explanation: "One-way ANOVA thường dùng để kiểm tra liệu mean của biến numeric có khác giữa ba hoặc nhiều nhóm độc lập hay không."
  },
  {
    id: "stat_a_010",
    library: "Statistics",
    level: "Advanced",
    topic: "Non-parametric Test Basics",
    question: "Khi dữ liệu numeric lệch mạnh, có outlier và sample nhỏ, hướng nào có thể cân nhắc?",
    code: "",
    options: [
      "Dùng kiểm định non-parametric phù hợp hoặc phương pháp robust",
      "Bắt buộc dùng t-test và bỏ qua mọi giả định",
      "Chuyển mọi giá trị thành 0",
      "Không cần kiểm định vì dữ liệu nhỏ"
    ],
    answer: 0,
    explanation: "Khi giả định của kiểm định tham số không phù hợp, có thể cân nhắc non-parametric test như Mann-Whitney, Wilcoxon hoặc phương pháp robust tùy bài toán."
  },
  {
    id: "stat_a_011",
    library: "Statistics",
    level: "Advanced",
    topic: "Confidence Interval",
    question: "Confidence interval rộng hơn thường thể hiện điều gì?",
    code: "",
    options: [
      "Ước lượng kém chính xác hơn hoặc độ không chắc chắn lớn hơn",
      "Kết quả chắc chắn đúng hơn về mặt business",
      "Sample size luôn lớn hơn",
      "Không còn sampling error"
    ],
    answer: 0,
    explanation: "Khoảng tin cậy rộng phản ánh độ không chắc chắn lớn hơn, có thể do sample size nhỏ, variability lớn hoặc confidence level cao hơn."
  },
  {
    id: "stat_a_012",
    library: "Statistics",
    level: "Advanced",
    topic: "Confidence Interval vs Prediction Interval",
    question: "Confidence interval và prediction interval khác nhau thế nào?",
    code: "",
    options: [
      "Confidence interval ước lượng parameter trung bình, prediction interval dự đoán khoảng cho một quan sát mới",
      "Hai khoảng luôn giống nhau",
      "Prediction interval luôn hẹp hơn confidence interval",
      "Confidence interval chỉ dùng cho category"
    ],
    answer: 0,
    explanation: "Confidence interval cho mean/parameter thường hẹp hơn prediction interval. Prediction interval phải bao gồm biến động của từng quan sát mới nên thường rộng hơn."
  },
  {
    id: "stat_a_013",
    library: "Statistics",
    level: "Advanced",
    topic: "p-value",
    question: "Vì sao p-value nhỏ không đồng nghĩa effect lớn?",
    code: "",
    options: [
      "Vì p-value phụ thuộc cả effect size, sample size và variability",
      "Vì p-value chính là effect size",
      "Vì p-value không liên quan đến sample size",
      "Vì p-value nhỏ luôn là lỗi dữ liệu"
    ],
    answer: 0,
    explanation: "Với sample size rất lớn, effect nhỏ cũng có thể cho p-value nhỏ. Vì vậy cần xem thêm effect size và practical significance."
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
      "Giảm effect size",
      "Tăng noise",
      "Giảm chất lượng đo lường"
    ],
    answer: 0,
    explanation: "Power thường tăng khi sample size lớn hơn, effect size lớn hơn, variability thấp hơn hoặc alpha cao hơn. Tăng noise thường làm giảm power."
  },
  {
    id: "stat_a_015",
    library: "Statistics",
    level: "Advanced",
    topic: "Multiple Testing",
    question: "Khi thực hiện rất nhiều kiểm định cùng lúc, rủi ro nào tăng lên?",
    code: "",
    options: [
      "Xác suất false positive tăng",
      "Dữ liệu tự động trở thành chuẩn",
      "Sample size tự động tăng",
      "Không cần alpha nữa"
    ],
    answer: 0,
    explanation: "Nhiều kiểm định làm tăng khả năng có ít nhất một kết quả significant do ngẫu nhiên. Cần cân nhắc correction hoặc kiểm soát false discovery tùy ngữ cảnh."
  },
  {
    id: "stat_a_016",
    library: "Statistics",
    level: "Advanced",
    topic: "Assumptions Basics",
    question: "Vì sao cần kiểm tra giả định của kiểm định thống kê?",
    code: "",
    options: [
      "Vì vi phạm giả định có thể làm p-value, confidence interval hoặc kết luận không đáng tin",
      "Vì mọi kiểm định đều không cần dữ liệu",
      "Vì giả định chỉ ảnh hưởng đến màu chart",
      "Vì kiểm định luôn đúng dù dữ liệu thế nào"
    ],
    answer: 0,
    explanation: "Các kiểm định thường dựa trên giả định như độc lập, phân phối, phương sai, sample size. Vi phạm nghiêm trọng có thể làm kết luận sai."
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
      "Luôn đối xứng hoàn hảo",
      "Chỉ có hai giá trị 0 và 1"
    ],
    answer: 0,
    explanation: "Right-skewed distribution có đuôi dài về phía bên phải, tức phía giá trị lớn. Mean thường có thể lớn hơn median trong nhiều trường hợp."
  },
  {
    id: "stat_a_018",
    library: "Statistics",
    level: "Advanced",
    topic: "Data Distribution Shape",
    question: "Vì sao nên xem phân phối dữ liệu trước khi chọn summary metric?",
    code: "",
    options: [
      "Vì outlier và skewness có thể làm mean không đại diện tốt",
      "Vì mọi dữ liệu đều cần dùng mean",
      "Vì median không bao giờ hữu ích",
      "Vì phân phối không ảnh hưởng đến phân tích"
    ],
    answer: 0,
    explanation: "Hình dạng phân phối giúp chọn metric phù hợp. Dữ liệu lệch mạnh hoặc có outlier có thể cần median, percentile hoặc robust metric thay vì chỉ mean."
  },
  {
    id: "stat_a_019",
    library: "Statistics",
    level: "Advanced",
    topic: "Common Misinterpretations",
    question: "Câu nào là diễn giải sai về p-value?",
    code: "",
    options: [
      "p-value = 0.03 nghĩa là có 3% xác suất H0 đúng",
      "p-value nhỏ cho thấy dữ liệu khá bất thường nếu H0 đúng",
      "p-value cần so sánh với alpha để ra quyết định thống kê",
      "p-value không trực tiếp đo effect size"
    ],
    answer: 0,
    explanation: "p-value không phải xác suất H0 đúng. Nó là xác suất quan sát dữ liệu ít nhất cực đoan như hiện tại nếu H0 đúng."
  },
  {
    id: "stat_a_020",
    library: "Statistics",
    level: "Advanced",
    topic: "Best Practice for Analytics Decision Making",
    question: "Khi kết quả kiểm định statistically significant nhưng effect size rất nhỏ, Data Analyst nên làm gì?",
    code: "",
    options: [
      "Đánh giá thêm practical significance, chi phí/lợi ích và context trước khi khuyến nghị hành động",
      "Luôn triển khai ngay vì p-value nhỏ",
      "Kết luận dữ liệu sai chắc chắn",
      "Bỏ qua sample size và confidence interval"
    ],
    answer: 0,
    explanation: "Quyết định phân tích không nên chỉ dựa vào p-value. Cần xem effect size, confidence interval, impact thực tế, chi phí và rủi ro."
  },
  {
    id: "stat_e_001",
    library: "Statistics",
    level: "Expert",
    topic: "Causal Inference Basics",
    question: "Vì sao randomized experiment thường mạnh hơn observational analysis khi đánh giá causal effect?",
    code: "",
    options: [
      "Randomization giúp cân bằng các yếu tố gây nhiễu giữa các nhóm trong kỳ vọng",
      "Randomization tự động làm sample size vô hạn",
      "Observational data không bao giờ có ích",
      "Randomization loại bỏ hoàn toàn mọi lỗi đo lường"
    ],
    answer: 0,
    explanation: "Randomization giúp giảm confounding bằng cách phân bổ ngẫu nhiên các yếu tố giữa treatment và control. Tuy nhiên vẫn cần kiểm tra execution, sample size và đo lường."
  },
  {
    id: "stat_e_002",
    library: "Statistics",
    level: "Expert",
    topic: "Statistical Power",
    question: "Vì sao một kiểm định không significant không nhất thiết chứng minh không có effect?",
    code: "",
    options: [
      "Vì có thể power thấp, sample size nhỏ hoặc variability cao nên không phát hiện được effect",
      "Vì p-value luôn sai",
      "Vì H0 luôn đúng khi p-value lớn",
      "Vì confidence interval không liên quan"
    ],
    answer: 0,
    explanation: "Không significant nghĩa là chưa đủ bằng chứng để bác bỏ H0, không phải chứng minh H0 đúng. Cần xem power, confidence interval và effect size có thể phát hiện."
  },
  {
    id: "stat_e_003",
    library: "Statistics",
    level: "Expert",
    topic: "Multiple Testing",
    question: "Trong phân tích nhiều metric và nhiều segment, vì sao cherry-picking nguy hiểm?",
    code: "",
    options: [
      "Vì chọn kết quả significant sau khi nhìn dữ liệu có thể làm tăng false positives và kết luận sai",
      "Vì nó luôn làm dữ liệu biến mất",
      "Vì nó chỉ ảnh hưởng đến màu sắc dashboard",
      "Vì nó làm sample size tự động giảm về 0"
    ],
    answer: 0,
    explanation: "Cherry-picking chọn kết quả đẹp sau khi thử nhiều hướng phân tích, làm tăng nguy cơ phát hiện giả. Nên định nghĩa hypothesis/metric chính trước hoặc điều chỉnh cho multiple testing."
  },
  {
    id: "stat_e_004",
    library: "Statistics",
    level: "Expert",
    topic: "Regression Assumptions",
    question: "Residual plot trong hồi quy thường dùng để kiểm tra điều gì?",
    code: "",
    options: [
      "Pattern còn sót lại, non-linearity, heteroscedasticity hoặc outlier",
      "Tên cột có đúng chuẩn không",
      "Số lượng màu trong biểu đồ",
      "Dữ liệu có được lưu thành CSV không"
    ],
    answer: 0,
    explanation: "Residual plot giúp xem mô hình có bỏ sót pattern không. Nếu residual có cấu trúc rõ, mô hình tuyến tính đơn giản có thể chưa phù hợp."
  },
  {
    id: "stat_e_005",
    library: "Statistics",
    level: "Expert",
    topic: "Confidence Interval vs Prediction Interval",
    question: "Vì sao prediction interval thường rộng hơn confidence interval cho mean?",
    code: "",
    options: [
      "Vì prediction interval phải bao gồm cả uncertainty của mean và biến động của quan sát mới",
      "Vì prediction interval luôn dùng alpha lớn hơn",
      "Vì confidence interval không có uncertainty",
      "Vì prediction interval chỉ dùng cho category"
    ],
    answer: 0,
    explanation: "Confidence interval ước lượng mean/parameter. Prediction interval dự đoán một quan sát mới nên cần cộng thêm variability cá nhân của quan sát đó, làm khoảng thường rộng hơn."
  },
  {
    id: "stat_e_006",
    library: "Statistics",
    level: "Expert",
    topic: "Common Errors",
    question: "Vì sao 'sample size lớn' không tự động đảm bảo kết luận đúng?",
    code: "",
    options: [
      "Vì bias, measurement error, confounding hoặc data quality issues vẫn có thể làm kết luận sai",
      "Vì sample size lớn luôn làm p-value bằng 1",
      "Vì sample size lớn không thể tính mean",
      "Vì dữ liệu lớn không cần thống kê"
    ],
    answer: 0,
    explanation: "Sample size lớn giúp giảm random error nhưng không sửa được bias hệ thống, lỗi đo lường, confounding hoặc dữ liệu sai chất lượng."
  },
  {
    id: "stat_e_007",
    library: "Statistics",
    level: "Expert",
    topic: "Practical Significance",
    question: "Trong môi trường business, vì sao cần báo cáo cả confidence interval và effect size?",
    code: "",
    options: [
      "Để stakeholder hiểu độ lớn tác động và mức độ không chắc chắn, không chỉ biết có significant hay không",
      "Để thay thế hoàn toàn data cleaning",
      "Để làm dashboard có nhiều chữ hơn",
      "Vì p-value không thể tính được bằng Python"
    ],
    answer: 0,
    explanation: "Effect size cho biết tác động lớn bao nhiêu; confidence interval cho biết độ không chắc chắn. Hai thông tin này giúp ra quyết định tốt hơn chỉ nhìn p-value."
  },
  {
    id: "stat_e_008",
    library: "Statistics",
    level: "Expert",
    topic: "Best Practice for Analytics Decision Making",
    question: "Một kết luận thống kê đáng tin trong phân tích dữ liệu nên dựa trên điều gì?",
    code: "",
    options: [
      "Thiết kế phân tích rõ ràng, dữ liệu chất lượng, giả định phù hợp, effect size, uncertainty và context business",
      "Một p-value nhỏ duy nhất mà không cần kiểm tra gì thêm",
      "Một biểu đồ đẹp duy nhất",
      "Một sample nhỏ nhưng có kết quả đúng kỳ vọng"
    ],
    answer: 0,
    explanation: "Kết luận tốt cần kết hợp thống kê, chất lượng dữ liệu, thiết kế phân tích, giả định, độ không chắc chắn và ý nghĩa thực tế. Không nên dựa vào một p-value hoặc một chart duy nhất."
  }
];