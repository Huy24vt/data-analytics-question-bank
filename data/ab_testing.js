const AB_TESTING_QUESTIONS = [
  {
    id: "ab_f_001",
    library: "A/B Testing",
    level: "Foundation",
    topic: "A/B Testing Overview",
    question: "Trong A/B Testing, nhóm control thường có vai trò gì?",
    code: "",
    options: [
      "Nhóm nhận phiên bản mới cần kiểm tra",
      "Nhóm không được dùng để so sánh",
      "Nhóm dùng phiên bản hiện tại để làm baseline so sánh",
      "Nhóm chỉ chứa những user có hành vi tốt nhất"
    ],
    answer: 2,
    explanation: "Nhóm control thường dùng phiên bản hiện tại hoặc trạng thái baseline để so sánh với treatment. Treatment là nhóm nhận thay đổi mới."
  },
  {
    id: "ab_f_002",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Treatment Group",
    question: "Trong A/B Testing, nhóm treatment là gì?",
    code: "",
    options: [
      "Nhóm nhận phiên bản mới hoặc thay đổi cần kiểm tra",
      "Nhóm luôn bị loại khỏi phân tích",
      "Nhóm dùng để lưu dữ liệu lỗi",
      "Nhóm chỉ gồm user không hoạt động"
    ],
    answer: 0,
    explanation: "Treatment là nhóm được áp dụng thay đổi mới, ví dụ giao diện mới, pricing mới hoặc luồng mới. Nhóm này được so sánh với control để đánh giá tác động."
  },
  {
    id: "ab_f_003",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Experiment Design",
    question: "Mục tiêu chính của A/B Testing là gì?",
    code: "",
    options: [
      "So sánh hai hoặc nhiều biến thể để đánh giá tác động của thay đổi dựa trên dữ liệu",
      "Chỉ để tạo dashboard đẹp hơn",
      "Chỉ để tăng số lượng metric trong báo cáo",
      "Đảm bảo mọi thay đổi đều thành công"
    ],
    answer: 0,
    explanation: "A/B Testing là phương pháp thử nghiệm có kiểm soát để đánh giá tác động của một thay đổi. Nó không đảm bảo thay đổi thành công, mà giúp ra quyết định dựa trên bằng chứng."
  },
  {
    id: "ab_f_004",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Randomization",
    question: "Randomization trong A/B Testing dùng để làm gì?",
    code: "",
    options: [
      "Phân bổ user vào các nhóm một cách ngẫu nhiên để giảm selection bias",
      "Chọn nhóm treatment chỉ từ user tốt nhất",
      "Tăng p-value lên 1",
      "Xóa toàn bộ outlier khỏi dữ liệu"
    ],
    answer: 0,
    explanation: "Randomization giúp các nhóm control và treatment tương đồng hơn về các yếu tố quan sát được và không quan sát được, từ đó giảm selection bias."
  },
  {
    id: "ab_f_005",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Randomization vs Segmentation",
    question: "Randomization khác segmentation ở điểm nào?",
    code: "",
    options: [
      "Randomization phân bổ ngẫu nhiên vào nhóm thử nghiệm, segmentation chia user theo đặc điểm/hành vi",
      "Randomization chỉ dùng sau khi kết thúc test, segmentation chỉ dùng trước khi có dữ liệu",
      "Randomization và segmentation hoàn toàn giống nhau",
      "Segmentation luôn tạo ra quan hệ nhân quả"
    ],
    answer: 0,
    explanation: "Randomization là cơ chế gán nhóm thử nghiệm để hỗ trợ suy luận nhân quả. Segmentation là cách chia dữ liệu theo nhóm để phân tích pattern, không tự tạo causal effect."
  },
  {
    id: "ab_f_006",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Hypothesis",
    question: "Một hypothesis tốt trong A/B Testing nên có đặc điểm nào?",
    code: "",
    options: [
      "Nêu rõ thay đổi, metric kỳ vọng bị ảnh hưởng và hướng tác động nếu có",
      "Chỉ ghi 'phiên bản B tốt hơn' mà không nói metric",
      "Chỉ dựa trên cảm tính, không cần đo lường",
      "Không cần liên quan đến business question"
    ],
    answer: 0,
    explanation: "Hypothesis tốt nên rõ ràng: thay đổi gì, tác động lên metric nào, kỳ vọng tăng/giảm ra sao. Điều này giúp thiết kế test và đọc kết quả nhất quán."
  },
  {
    id: "ab_f_007",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Null Hypothesis / Alternative Hypothesis",
    question: "Trong A/B Testing, null hypothesis thường phát biểu như thế nào?",
    code: "",
    options: [
      "Không có khác biệt/tác động giữa control và treatment trên metric chính",
      "Treatment chắc chắn tốt hơn control",
      "Control chắc chắn sai",
      "Dữ liệu không cần randomization"
    ],
    answer: 0,
    explanation: "Null hypothesis H0 thường là không có khác biệt giữa control và treatment. Kiểm định đánh giá dữ liệu có đủ bằng chứng để bác bỏ H0 hay không."
  },
  {
    id: "ab_f_008",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Primary Metric",
    question: "Primary metric trong A/B Testing là gì?",
    code: "",
    options: [
      "Metric chính dùng để đánh giá thành công của experiment",
      "Metric chỉ dùng để kiểm tra lỗi tracking",
      "Metric không bao giờ được báo cáo",
      "Metric luôn là số lượng user"
    ],
    answer: 0,
    explanation: "Primary metric là metric chính gắn với mục tiêu của test, ví dụ conversion rate. Nó nên được xác định trước khi chạy test để tránh cherry-picking."
  },
  {
    id: "ab_f_009",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Secondary Metric",
    question: "Secondary metric thường có vai trò gì?",
    code: "",
    options: [
      "Bổ sung góc nhìn phụ để hiểu thêm tác động của experiment",
      "Thay thế hoàn toàn primary metric trong mọi trường hợp",
      "Chỉ dùng để làm đẹp report",
      "Luôn được dùng để quyết định rollout một mình"
    ],
    answer: 0,
    explanation: "Secondary metrics giúp hiểu thêm tác động phụ của experiment, nhưng quyết định chính thường nên dựa vào primary metric và guardrail metrics đã định nghĩa trước."
  },
  {
    id: "ab_f_010",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Guardrail Metric",
    question: "Guardrail metric dùng để làm gì trong A/B Testing?",
    code: "",
    options: [
      "Theo dõi tác động tiêu cực không mong muốn để tránh rollout gây hại",
      "Luôn là metric duy nhất để đo thành công",
      "Chỉ dùng để tăng sample size",
      "Chỉ dùng cho dữ liệu text"
    ],
    answer: 0,
    explanation: "Guardrail metric là metric bảo vệ, ví dụ crash rate, cancellation rate, latency hoặc complaint rate. Treatment có thể tăng primary metric nhưng vẫn không nên rollout nếu guardrail xấu đi nghiêm trọng."
  },
  {
    id: "ab_f_011",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Conversion Rate",
    question: "Conversion rate thường được tính như thế nào?",
    code: "",
    options: [
      "Số user/session chuyển đổi chia cho tổng số user/session đủ điều kiện",
      "Tổng revenue chia cho số ngày",
      "Số treatment user trừ số control user",
      "p-value chia cho alpha"
    ],
    answer: 0,
    explanation: "Conversion rate là tỷ lệ chuyển đổi: số đơn vị có conversion chia cho tổng số đơn vị quan sát đủ điều kiện. Cần xác định rõ unit là user, session hay event."
  },
  {
    id: "ab_f_012",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Statistical Significance",
    question: "Statistical significance trong A/B Testing thường nói điều gì?",
    code: "",
    options: [
      "Kết quả có đủ bằng chứng thống kê để bác bỏ H0 ở mức alpha đã chọn",
      "Treatment chắc chắn có lợi về business",
      "Effect size chắc chắn rất lớn",
      "Không cần xem guardrail metrics"
    ],
    answer: 0,
    explanation: "Statistical significance cho biết bằng chứng thống kê so với H0. Nó không tự đảm bảo effect đủ lớn về business hoặc guardrail an toàn."
  },
  {
    id: "ab_f_013",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Practical Significance",
    question: "Practical significance trong A/B Testing nghĩa là gì?",
    code: "",
    options: [
      "Tác động đủ lớn để có ý nghĩa thực tế hoặc business",
      "p-value nhỏ hơn 1",
      "Control và treatment có cùng sample size",
      "Metric không có missing values"
    ],
    answer: 0,
    explanation: "Practical significance xem effect có đủ lớn để đáng rollout hay không, xét chi phí, rủi ro và mục tiêu business. Một kết quả significant thống kê có thể vẫn quá nhỏ để hành động."
  },
  {
    id: "ab_f_014",
    library: "A/B Testing",
    level: "Foundation",
    topic: "p-value",
    question: "p-value trong A/B Testing nên được hiểu đúng nhất là gì?",
    code: "",
    options: [
      "Xác suất quan sát kết quả ít nhất cực đoan như hiện tại nếu H0 đúng",
      "Xác suất treatment tốt hơn control",
      "Xác suất H0 đúng",
      "Kích thước tác động của treatment"
    ],
    answer: 0,
    explanation: "p-value là xác suất của dữ liệu hoặc dữ liệu cực đoan hơn trong giả định H0 đúng. Nó không phải xác suất H0 đúng và không phải effect size."
  },
  {
    id: "ab_f_015",
    library: "A/B Testing",
    level: "Foundation",
    topic: "Rollout Decision",
    question: "Khi quyết định rollout treatment, yếu tố nào nên được xem xét?",
    code: "",
    options: [
      "Statistical significance, effect size, practical significance, guardrail metrics và business context",
      "Chỉ p-value nhỏ hơn 0.05",
      "Chỉ chart nhìn đẹp",
      "Chỉ số lượng user trong treatment"
    ],
    answer: 0,
    explanation: "Rollout decision không nên chỉ dựa vào p-value. Cần xem tác động thực tế, độ tin cậy, guardrail, rủi ro vận hành và context business."
  },
  {
    id: "ab_i_001",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Conversion Rate",
    question: "Kết quả conversion rate của group A trong đoạn code sau là gì?",
    code: "import pandas as pd\ndf = pd.DataFrame({'group': ['A', 'A', 'A', 'B'], 'conversion': [1, 0, 1, 1]})\nrate_a = df[df['group'] == 'A']['conversion'].mean()\nprint(rate_a)",
    options: [
      "0.0",
      "0.3333333333333333",
      "0.6666666666666666",
      "1.0"
    ],
    answer: 2,
    explanation: "Group A có conversion [1, 0, 1], mean = 2/3 = 0.6666. Với biến 0/1, mean chính là conversion rate."
  },
  {
    id: "ab_i_002",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Average Revenue / Mean Metric",
    question: "Nếu metric là revenue per user, loại metric này thường được xử lý như gì?",
    code: "",
    options: [
      "Continuous hoặc mean metric",
      "Proportion metric bắt buộc",
      "Categorical metric không thể tính mean",
      "Guardrail metric bắt buộc"
    ],
    answer: 0,
    explanation: "Revenue per user thường là metric dạng trung bình/continuous, có thể so sánh mean giữa control và treatment. Nó khác conversion rate là metric tỷ lệ 0/1."
  },
  {
    id: "ab_i_003",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Proportion Metric vs Continuous Metric",
    question: "Metric nào dưới đây là proportion metric?",
    code: "",
    options: [
      "Conversion rate",
      "Average revenue per user",
      "Session duration trung bình",
      "Số tiền trung bình mỗi order"
    ],
    answer: 0,
    explanation: "Conversion rate là tỷ lệ chuyển đổi, thường từ biến 0/1. Các metric còn lại thường là continuous hoặc mean metrics."
  },
  {
    id: "ab_i_004",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Unit of Randomization",
    question: "Unit of randomization là gì?",
    code: "",
    options: [
      "Đơn vị được gán ngẫu nhiên vào control hoặc treatment, ví dụ user hoặc session",
      "Metric chính của experiment",
      "Thời gian chạy experiment",
      "Tên của dashboard"
    ],
    answer: 0,
    explanation: "Unit of randomization là đơn vị được randomize. Chọn sai unit có thể gây contamination hoặc phân tích sai standard error."
  },
  {
    id: "ab_i_005",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Unit of Randomization",
    question: "Nếu cùng một user có thể thấy cả control và treatment trong quá trình test, rủi ro chính là gì?",
    code: "",
    options: [
      "Contamination giữa các nhóm làm khó diễn giải causal effect",
      "Sample size tự động tăng chính xác hơn",
      "p-value luôn bằng 0",
      "Guardrail metrics không còn cần thiết"
    ],
    answer: 0,
    explanation: "Nếu user tiếp xúc cả hai variant, tác động của treatment và control bị lẫn nhau. Điều này làm giảm độ tin cậy của kết luận experiment."
  },
  {
    id: "ab_i_006",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Baseline Rate",
    question: "Baseline rate trong A/B Testing thường là gì?",
    code: "",
    options: [
      "Metric hiện tại hoặc metric của control dùng làm mốc so sánh",
      "p-value của treatment",
      "Số lượng lỗi tracking",
      "Tỷ lệ user bị loại khỏi phân tích"
    ],
    answer: 0,
    explanation: "Baseline rate là mức metric hiện tại hoặc của nhóm control. Nó dùng để tính effect, MDE và sample size planning."
  },
  {
    id: "ab_i_007",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Effect Size",
    question: "Nếu conversion rate control = 10% và treatment = 12%, absolute lift là bao nhiêu?",
    code: "",
    options: [
      "2 percentage points",
      "20 percentage points",
      "12 percentage points",
      "1.2 percentage points"
    ],
    answer: 0,
    explanation: "Absolute lift = 12% - 10% = 2 percentage points. Relative lift là 2% / 10% = 20%."
  },
  {
    id: "ab_i_008",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Effect Size",
    question: "Nếu conversion rate control = 10% và treatment = 12%, relative lift là bao nhiêu?",
    code: "",
    options: [
      "2%",
      "12%",
      "20%",
      "120%"
    ],
    answer: 2,
    explanation: "Relative lift = (12% - 10%) / 10% = 20%. Absolute lift là 2 percentage points."
  },
  {
    id: "ab_i_009",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Minimum Detectable Effect",
    question: "Minimum Detectable Effect, hay MDE, là gì?",
    code: "",
    options: [
      "Mức effect nhỏ nhất mà experiment được thiết kế để phát hiện với power và alpha nhất định",
      "Effect thực tế chắc chắn sẽ xảy ra",
      "p-value nhỏ nhất có thể có",
      "Tỷ lệ missing values tối đa"
    ],
    answer: 0,
    explanation: "MDE là effect size tối thiểu mà test có khả năng phát hiện theo thiết kế sample size, alpha và power. Nó không phải cam kết effect sẽ xảy ra."
  },
  {
    id: "ab_i_010",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Sample Size",
    question: "Khi MDE nhỏ hơn, sample size cần thiết thường thay đổi thế nào?",
    code: "",
    options: [
      "Tăng lên",
      "Giảm về 0",
      "Không đổi trong mọi trường hợp",
      "Không cần randomization nữa"
    ],
    answer: 0,
    explanation: "Muốn phát hiện effect nhỏ hơn thì cần nhiều dữ liệu hơn. MDE càng nhỏ, sample size cần thiết thường càng lớn."
  },
  {
    id: "ab_i_011",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Statistical Power",
    question: "Power trong A/B Testing là gì?",
    code: "",
    options: [
      "Xác suất phát hiện effect khi effect thực sự tồn tại",
      "Xác suất H0 đúng",
      "Tỷ lệ user vào treatment",
      "Số lượng metric trong report"
    ],
    answer: 0,
    explanation: "Power = 1 - beta, là xác suất test phát hiện được effect thật. Power thấp làm tăng rủi ro bỏ sót effect."
  },
  {
    id: "ab_i_012",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Beta / Type II Error",
    question: "Type II error trong A/B Testing là gì?",
    code: "",
    options: [
      "Kết luận có effect khi thực tế không có",
      "Không phát hiện effect khi effect thực sự tồn tại",
      "Chạy test quá lâu",
      "Tạo thêm guardrail metric"
    ],
    answer: 1,
    explanation: "Type II error là false negative: không bác bỏ H0 dù treatment thực sự có tác động. Beta là xác suất Type II error."
  },
  {
    id: "ab_i_013",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Alpha / Significance Level",
    question: "Alpha = 0.05 thường có ý nghĩa gì?",
    code: "",
    options: [
      "Chấp nhận xác suất Type I error khoảng 5% theo thiết kế kiểm định",
      "Treatment tăng 5%",
      "Có 95% xác suất H0 đúng",
      "Sample size bằng 5%"
    ],
    answer: 0,
    explanation: "Alpha là mức ý nghĩa, thường là ngưỡng xác suất false positive chấp nhận trước. Alpha không phải xác suất H0 đúng."
  },
  {
    id: "ab_i_014",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "False Positive",
    question: "False positive trong A/B Testing tương ứng với tình huống nào?",
    code: "",
    options: [
      "Kết luận treatment có tác động dù thực tế không có",
      "Không phát hiện treatment có tác động thật",
      "Treatment bị thiếu dữ liệu tracking",
      "Control có nhiều user hơn treatment"
    ],
    answer: 0,
    explanation: "False positive tương ứng Type I error: báo có effect khi thực tế không có. Multiple testing và peeking có thể làm false positive tăng."
  },
  {
    id: "ab_i_015",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "One-tailed vs Two-tailed Test",
    question: "Nếu hypothesis là 'treatment làm conversion rate khác control', loại test phù hợp là gì?",
    code: "",
    options: [
      "Two-tailed test",
      "One-tailed test phía phải",
      "One-tailed test phía trái",
      "Chi-square test bắt buộc cho mean"
    ],
    answer: 0,
    explanation: "Từ 'khác' nghĩa là quan tâm cả tăng và giảm, nên dùng two-tailed test. Nếu chỉ quan tâm 'tăng' thì có thể cân nhắc one-tailed phía phải từ trước."
  },
  {
    id: "ab_i_016",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "z-test for Proportions Basics",
    question: "Khi so sánh conversion rate giữa control và treatment, kiểm định nào thường phù hợp ở mức cơ bản nếu sample đủ lớn?",
    code: "",
    options: [
      "Two-proportion z-test",
      "Paired t-test",
      "One-sample t-test cho mean",
      "Pearson correlation"
    ],
    answer: 0,
    explanation: "Conversion rate là proportion metric. Khi sample đủ lớn, two-proportion z-test thường dùng để so sánh tỷ lệ giữa hai nhóm độc lập."
  },
  {
    id: "ab_i_017",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "t-test for Means Basics",
    question: "Khi so sánh average revenue per user giữa hai nhóm độc lập, kiểm định nào thường được cân nhắc?",
    code: "",
    options: [
      "Two-sample t-test hoặc phương pháp phù hợp cho mean metric",
      "Two-proportion z-test bắt buộc",
      "Chi-square test cho category bắt buộc",
      "Không thể kiểm định mean"
    ],
    answer: 0,
    explanation: "Average revenue là mean/continuous metric, nên two-sample t-test có thể được cân nhắc nếu giả định phù hợp. Với revenue lệch mạnh, có thể cần phương pháp robust hoặc bootstrap."
  },
  {
    id: "ab_i_018",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Chi-square Test Basics",
    question: "Chi-square test trong A/B Testing thường phù hợp với loại dữ liệu nào?",
    code: "",
    options: [
      "Dữ liệu categorical dạng bảng đếm giữa group và outcome",
      "Metric revenue liên tục có outlier",
      "Dữ liệu thời gian từng giây",
      "Dữ liệu text tự do không phân nhóm"
    ],
    answer: 0,
    explanation: "Chi-square test có thể dùng để kiểm tra mối liên hệ giữa group và outcome categorical trong contingency table, ví dụ converted/not converted theo control/treatment."
  },
  {
    id: "ab_i_019",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Confidence Interval",
    question: "Confidence interval cho lift giúp ích gì khi đọc kết quả A/B test?",
    code: "",
    options: [
      "Cho thấy khoảng giá trị hợp lý của effect và độ không chắc chắn",
      "Chứng minh treatment luôn thắng",
      "Thay thế hoàn toàn guardrail metrics",
      "Cho biết xác suất H0 đúng"
    ],
    answer: 0,
    explanation: "Confidence interval giúp đánh giá effect có thể nằm trong khoảng nào. Nếu khoảng quá rộng, kết quả còn nhiều bất định dù point estimate nhìn hấp dẫn."
  },
  {
    id: "ab_i_020",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Experiment Duration",
    question: "Vì sao không nên kết thúc experiment chỉ sau vài giờ nếu sản phẩm có pattern theo ngày trong tuần?",
    code: "",
    options: [
      "Vì kết quả có thể bị ảnh hưởng bởi seasonality hoặc chu kỳ hành vi chưa được quan sát đủ",
      "Vì p-value không thể tính trong ngày đầu",
      "Vì control sẽ biến mất",
      "Vì treatment luôn cần đúng 30 ngày"
    ],
    answer: 0,
    explanation: "Nếu hành vi thay đổi theo ngày/giờ, test quá ngắn có thể không đại diện. Duration nên đủ để bao phủ chu kỳ hành vi quan trọng."
  },
  {
    id: "ab_i_021",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Seasonality",
    question: "Seasonality có thể gây rủi ro gì cho A/B Testing?",
    code: "",
    options: [
      "Metric biến động theo thời gian làm kết quả test ngắn hạn không đại diện",
      "Làm randomization không thể thực hiện về mặt kỹ thuật",
      "Luôn làm treatment thắng",
      "Luôn làm p-value bằng 1"
    ],
    answer: 0,
    explanation: "Seasonality là pattern theo thời gian như giờ, ngày trong tuần, mùa vụ. Nếu test không bao phủ chu kỳ này, kết luận có thể bị lệch."
  },
  {
    id: "ab_i_022",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Peeking Problem",
    question: "Peeking trong A/B Testing là gì?",
    code: "",
    options: [
      "Liên tục nhìn kết quả giữa chừng và dừng ngay khi thấy significant mà không có stopping rule",
      "Kiểm tra tracking trước khi test chạy",
      "Chia user ngẫu nhiên vào nhóm",
      "Xác định primary metric trước test"
    ],
    answer: 0,
    explanation: "Peeking làm tăng false positive nếu liên tục kiểm tra và dừng khi p-value đẹp mà không điều chỉnh. Cần có stopping rule hoặc phương pháp sequential phù hợp."
  },
  {
    id: "ab_i_023",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Stopping Rule",
    question: "Stopping rule trong experiment nên được xác định khi nào?",
    code: "",
    options: [
      "Trước khi chạy experiment",
      "Sau khi thấy p-value nhỏ",
      "Chỉ khi treatment thắng",
      "Không bao giờ cần"
    ],
    answer: 0,
    explanation: "Stopping rule nên được định nghĩa trước để tránh peeking và quyết định tùy tiện. Ví dụ chạy đủ sample size hoặc đủ thời gian tối thiểu."
  },
  {
    id: "ab_i_024",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Sample Ratio Mismatch",
    question: "Sample Ratio Mismatch, hay SRM, là gì?",
    code: "",
    options: [
      "Tỷ lệ user giữa các nhóm lệch đáng kể so với tỷ lệ phân bổ kỳ vọng",
      "Treatment có conversion rate cao hơn control",
      "Metric chính không significant",
      "Guardrail metric bị thiếu"
    ],
    answer: 0,
    explanation: "SRM xảy ra khi số user vào control/treatment không đúng tỷ lệ randomization kỳ vọng, ví dụ kỳ vọng 50/50 nhưng thực tế 70/30. Đây có thể là dấu hiệu lỗi phân bổ hoặc tracking."
  },
  {
    id: "ab_i_025",
    library: "A/B Testing",
    level: "Intermediate",
    topic: "Data Tracking Validation",
    question: "Pre-test tracking validation nên kiểm tra điều gì?",
    code: "",
    options: [
      "Event, user_id, group assignment và metric có được ghi nhận đúng không",
      "Treatment có thắng chưa",
      "p-value có nhỏ hơn 0.05 chưa",
      "Dashboard có đủ màu chưa"
    ],
    answer: 0,
    explanation: "Trước khi đọc kết quả, cần đảm bảo tracking đúng: user được gán nhóm đúng, event ghi nhận đúng và metric tính đúng. Tracking bug có thể làm toàn bộ test sai."
  },
  {
    id: "ab_a_001",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Sample Ratio Mismatch",
    question: "Nếu experiment kỳ vọng chia 50/50 nhưng control có 10,000 user và treatment có 6,000 user, bước hợp lý đầu tiên là gì?",
    code: "",
    options: [
      "Kiểm tra Sample Ratio Mismatch, randomization, eligibility rule và tracking",
      "Kết luận treatment thua ngay",
      "Bỏ qua vì conversion rate mới quan trọng",
      "Tự nhân treatment lên cho bằng control"
    ],
    answer: 0,
    explanation: "Lệch sample lớn so với kỳ vọng có thể là SRM. Cần điều tra randomization, exposure logging, filter, eligibility hoặc tracking trước khi phân tích outcome."
  },
  {
    id: "ab_a_002",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Multiple Testing",
    question: "Vì sao kiểm tra quá nhiều metric/segment mà không điều chỉnh có thể nguy hiểm?",
    code: "",
    options: [
      "Làm tăng xác suất false positive",
      "Làm sample size tự động tăng",
      "Làm tất cả metric trở thành guardrail",
      "Làm p-value không thể tính được"
    ],
    answer: 0,
    explanation: "Khi thực hiện nhiều kiểm định, khả năng có ít nhất một kết quả significant do ngẫu nhiên tăng lên. Cần xác định metric chính trước và cân nhắc multiple testing."
  },
  {
    id: "ab_a_003",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Subgroup Analysis",
    question: "Rủi ro chính khi phân tích rất nhiều subgroup sau khi test kết thúc là gì?",
    code: "",
    options: [
      "Dễ cherry-pick kết quả significant giả do thử quá nhiều lát cắt",
      "Luôn tìm được causal effect thật",
      "Không cần sample size nữa",
      "Guardrail metrics tự động tốt hơn"
    ],
    answer: 0,
    explanation: "Subgroup analysis sau hoc có thể hữu ích để khám phá, nhưng dễ tạo false positives. Nên phân biệt exploratory với confirmatory analysis."
  },
  {
    id: "ab_a_004",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Heterogeneous Treatment Effect Basics",
    question: "Heterogeneous treatment effect nghĩa là gì?",
    code: "",
    options: [
      "Treatment có tác động khác nhau giữa các nhóm user/segment",
      "Treatment có cùng tác động cho mọi user",
      "Control và treatment có cùng sample size",
      "Metric bị thiếu dữ liệu"
    ],
    answer: 0,
    explanation: "Heterogeneous treatment effect xảy ra khi tác động của treatment không đồng đều giữa các segment. Cần đủ sample size và giả thuyết rõ để phân tích đáng tin."
  },
  {
    id: "ab_a_005",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Metric Trade-off",
    question: "Nếu treatment tăng conversion rate nhưng làm complaint rate tăng mạnh, nên hiểu thế nào?",
    code: "",
    options: [
      "Có trade-off; cần xem guardrail, practical significance và quyết định business trước rollout",
      "Rollout ngay vì primary metric tăng",
      "Bỏ complaint rate vì không phải conversion",
      "Kết luận tracking chắc chắn sai"
    ],
    answer: 0,
    explanation: "Một treatment có thể cải thiện success metric nhưng gây hại guardrail. Quyết định rollout cần cân bằng lợi ích, rủi ro và tác động dài hạn."
  },
  {
    id: "ab_a_006",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Guardrail Interpretation",
    question: "Nếu primary metric significant dương nhưng guardrail metric significant xấu đi, quyết định tốt nhất thường là gì?",
    code: "",
    options: [
      "Không rollout vội; cần đánh giá mức độ trade-off, rủi ro và nguyên nhân",
      "Rollout ngay vì primary metric thắng",
      "Xóa guardrail khỏi report",
      "Đổi alpha sau khi thấy kết quả"
    ],
    answer: 0,
    explanation: "Guardrail metric tồn tại để ngăn rollout gây hại. Nếu guardrail xấu đi đáng kể, cần phân tích thêm trước khi quyết định."
  },
  {
    id: "ab_a_007",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Novelty Effect",
    question: "Novelty effect trong A/B Testing là gì?",
    code: "",
    options: [
      "User phản ứng tạm thời với tính mới của treatment, khiến effect ngắn hạn không phản ánh dài hạn",
      "Lỗi do sample ratio mismatch",
      "Metric bị tính sai do duplicate",
      "Treatment không được randomize"
    ],
    answer: 0,
    explanation: "Novelty effect xảy ra khi thay đổi mới tạo phản ứng ban đầu khác với hành vi dài hạn. Cần chú ý duration và phân tích theo thời gian."
  },
  {
    id: "ab_a_008",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Experiment Duration",
    question: "Vì sao nên xem trend effect theo ngày trong post-test analysis?",
    code: "",
    options: [
      "Để phát hiện novelty effect, learning effect, tracking issue hoặc effect không ổn định theo thời gian",
      "Để chọn ngày có p-value đẹp nhất",
      "Để bỏ qua sample size planning",
      "Để thay đổi hypothesis sau test"
    ],
    answer: 0,
    explanation: "Trend theo thời gian giúp kiểm tra effect có ổn định không. Tuy nhiên không nên cherry-pick ngày đẹp để kết luận."
  },
  {
    id: "ab_a_009",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Experiment Analysis vs Observational Analysis",
    question: "Experiment analysis khác observational analysis ở điểm quan trọng nào?",
    code: "",
    options: [
      "Experiment có random assignment, giúp suy luận causal effect đáng tin hơn nếu thiết kế đúng",
      "Observational analysis luôn chính xác hơn experiment",
      "Experiment không cần dữ liệu",
      "Observational analysis luôn không có bias"
    ],
    answer: 0,
    explanation: "Random assignment là điểm mạnh của experiment vì giúp giảm confounding. Observational analysis có thể hữu ích nhưng dễ bị selection bias và confounding hơn."
  },
  {
    id: "ab_a_010",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Post-test Analysis",
    question: "Sau khi experiment kết thúc, việc đầu tiên nên kiểm tra trước khi đọc metric outcome là gì?",
    code: "",
    options: [
      "Kiểm tra data quality, sample ratio, tracking, eligibility và exposure logging",
      "Chỉ nhìn p-value của primary metric",
      "Chỉ xem treatment có doanh thu cao hơn không",
      "Đổi primary metric nếu kết quả không đẹp"
    ],
    answer: 0,
    explanation: "Trước khi tin kết quả outcome, cần kiểm tra experiment có chạy đúng không: randomization, SRM, tracking, exposure, eligibility và missing data."
  },
  {
    id: "ab_a_011",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Success Criteria",
    question: "Success criteria tốt nên được xác định khi nào?",
    code: "",
    options: [
      "Trước khi chạy experiment",
      "Sau khi thấy kết quả treatment",
      "Sau khi chọn segment thắng",
      "Không cần xác định"
    ],
    answer: 0,
    explanation: "Success criteria cần xác định trước để tránh thay đổi tiêu chuẩn theo kết quả. Nó nên bao gồm primary metric, guardrail và ngưỡng practical significance nếu có."
  },
  {
    id: "ab_a_012",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Pre-test Validation",
    question: "A/A test thường dùng để làm gì?",
    code: "",
    options: [
      "Kiểm tra hệ thống randomization, tracking và false positive rate khi hai nhóm giống nhau",
      "Tìm treatment thắng nhanh hơn",
      "Thay thế mọi A/B test",
      "Tăng effect size"
    ],
    answer: 0,
    explanation: "A/A test chia user vào hai nhóm giống nhau để kiểm tra hệ thống experiment. Nếu thấy khác biệt quá thường xuyên, có thể có lỗi randomization/tracking hoặc phân tích."
  },
  {
    id: "ab_a_013",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Common Errors",
    question: "Lỗi nào là ví dụ của metric mismatch?",
    code: "",
    options: [
      "Team muốn tăng user retention nhưng primary metric lại là click ngắn hạn không liên quan rõ",
      "Control và treatment được randomize đúng",
      "Guardrail được định nghĩa trước",
      "Sample size được tính trước test"
    ],
    answer: 0,
    explanation: "Metric mismatch xảy ra khi metric đo không phản ánh mục tiêu business/product thật. Điều này có thể dẫn đến tối ưu sai hành vi."
  },
  {
    id: "ab_a_014",
    library: "A/B Testing",
    level: "Advanced",
    topic: "p-value",
    question: "Vì sao p-value nhỏ không đủ để rollout treatment?",
    code: "",
    options: [
      "Vì còn cần xem effect size, practical significance, guardrail, data quality và business context",
      "Vì p-value nhỏ luôn là lỗi",
      "Vì p-value không liên quan đến kiểm định",
      "Vì treatment không thể rollout nếu significant"
    ],
    answer: 0,
    explanation: "p-value nhỏ chỉ nói về bằng chứng thống kê so với H0. Rollout cần xem tác động thực tế, rủi ro, guardrail và chất lượng experiment."
  },
  {
    id: "ab_a_015",
    library: "A/B Testing",
    level: "Advanced",
    topic: "Common Errors",
    question: "Nếu analyst đổi primary metric sau khi xem kết quả, rủi ro chính là gì?",
    code: "",
    options: [
      "Cherry-picking và tăng false positive",
      "Tăng độ tin cậy của experiment",
      "Giảm mọi bias",
      "Làm randomization tốt hơn"
    ],
    answer: 0,
    explanation: "Đổi primary metric sau khi thấy dữ liệu làm kết luận dễ bị cherry-picking. Primary metric nên được định nghĩa trước test."
  },
  {
    id: "ab_e_001",
    library: "A/B Testing",
    level: "Expert",
    topic: "Peeking Problem",
    question: "Vì sao peeking làm tăng false positive trong A/B Testing truyền thống?",
    code: "",
    options: [
      "Vì lặp lại nhiều lần việc kiểm tra p-value và dừng khi significant làm xác suất báo thắng giả tăng",
      "Vì peeking làm treatment có nhiều user hơn",
      "Vì peeking tự động tăng effect size thật",
      "Vì peeking làm guardrail không còn cần thiết"
    ],
    answer: 0,
    explanation: "Kiểm định truyền thống giả định rule phân tích cố định. Nếu liên tục nhìn và dừng khi p-value nhỏ, xác suất false positive cao hơn alpha danh nghĩa."
  },
  {
    id: "ab_e_002",
    library: "A/B Testing",
    level: "Expert",
    topic: "Sample Size",
    question: "Vì sao sample size lớn không tự đảm bảo experiment đáng tin?",
    code: "",
    options: [
      "Vì tracking bug, SRM, selection bias, contamination hoặc metric mismatch vẫn có thể làm kết luận sai",
      "Vì sample size lớn luôn làm p-value bằng 1",
      "Vì sample size lớn không thể tính conversion rate",
      "Vì sample size lớn làm mất randomization chắc chắn"
    ],
    answer: 0,
    explanation: "Sample size lớn giảm random error nhưng không sửa được lỗi hệ thống như tracking sai, SRM, contamination, bias hoặc metric không phù hợp."
  },
  {
    id: "ab_e_003",
    library: "A/B Testing",
    level: "Expert",
    topic: "Heterogeneous Treatment Effect Basics",
    question: "Khi phát hiện treatment thắng mạnh ở một subgroup nhỏ sau khi xem nhiều subgroup, cách diễn giải thận trọng là gì?",
    code: "",
    options: [
      "Xem đây là exploratory finding, cần kiểm chứng lại hoặc có correction vì rủi ro false positive cao",
      "Rollout ngay cho subgroup đó chắc chắn",
      "Kết luận treatment thắng toàn bộ population",
      "Bỏ qua sample size của subgroup"
    ],
    answer: 0,
    explanation: "Subgroup nhỏ và nhiều lát cắt làm tăng nguy cơ false positive. Kết quả nên được xem là exploratory nếu không được định nghĩa trước và không đủ power."
  },
  {
    id: "ab_e_004",
    library: "A/B Testing",
    level: "Expert",
    topic: "Experiment Readout",
    question: "Một experiment readout tốt nên bao gồm gì?",
    code: "",
    options: [
      "Thiết kế test, sample/exposure check, primary result, effect size, CI, guardrails, limitations và recommendation",
      "Chỉ một dòng 'B thắng'",
      "Chỉ screenshot dashboard",
      "Chỉ p-value của metric đẹp nhất"
    ],
    answer: 0,
    explanation: "Readout tốt cần minh bạch về thiết kế, chất lượng chạy test, kết quả chính, uncertainty, guardrail, hạn chế và khuyến nghị hành động."
  },
  {
    id: "ab_e_005",
    library: "A/B Testing",
    level: "Expert",
    topic: "Best Practice for Product / Business Experimentation",
    question: "Nguyên tắc quan trọng nhất khi dùng A/B Testing để ra quyết định business là gì?",
    code: "",
    options: [
      "Thiết kế trước, đo đúng metric, kiểm tra chất lượng experiment, và quyết định dựa trên cả thống kê lẫn tác động thực tế",
      "Luôn rollout nếu treatment có point estimate cao hơn",
      "Chỉ cần p-value nhỏ ở bất kỳ segment nào",
      "Không cần guardrail nếu primary metric tăng"
    ],
    answer: 0,
    explanation: "A/B Testing là quy trình ra quyết định, không chỉ là chạy kiểm định. Cần predefine hypothesis/metric, đảm bảo test chạy đúng, đọc effect và guardrail trong context business."
  }
];