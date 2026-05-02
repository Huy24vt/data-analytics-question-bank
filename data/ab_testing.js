const AB_TESTING_QUESTIONS = [
  {
    id: "ab_f_001",
    library: "A/B Testing",
    level: "Foundation",
    topic: "A/B Testing Overview",
    question: "Trong A/B Testing, nhóm control thường có vai trò gì?",
    code: "",
    options: [
      "Nhóm nhận phiên bản mới để đo mức thay đổi so với baseline",
      "Nhóm được lọc riêng để loại bỏ toàn bộ user có hành vi bất thường",
      "Nhóm dùng phiên bản hiện tại để làm baseline so sánh với treatment",
      "Nhóm chỉ dùng sau experiment để kiểm tra dashboard và tracking"
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
      "Nhóm nhận phiên bản mới hoặc thay đổi cần kiểm tra trong experiment",
      "Nhóm giữ trải nghiệm hiện tại để làm baseline so sánh chính",
      "Nhóm bị loại khỏi phân tích vì không đủ điều kiện exposure",
      "Nhóm chỉ dùng để kiểm tra tracking trước khi experiment chạy"
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
      "Tạo thêm nhiều metric để report có đủ góc nhìn trước khi rollout",
      "Đánh giá tác động của thay đổi bằng so sánh có kiểm soát trên dữ liệu",
      "Chứng minh phiên bản mới chắc chắn tốt hơn trước khi đưa cho user",
      "Thay thế toàn bộ phân tích định tính bằng một biểu đồ kết quả"
    ],
    answer: 1,
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
      "Gán user vào các nhóm thử nghiệm ngẫu nhiên để giảm selection bias",
      "Chọn user hoạt động tốt nhất vào treatment để tăng khả năng thắng",
      "Loại mọi outlier khỏi dữ liệu trước khi tính conversion rate",
      "Chia user theo segment để mỗi nhóm có hành vi hoàn toàn khác nhau"
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
      "Segmentation gán ngẫu nhiên user; randomization chỉ nhóm user theo hành vi",
      "Hai khái niệm giống nhau nếu cùng dùng user_id làm đơn vị phân tích",
      "Segmentation tạo causal effect; randomization chỉ dùng để mô tả dữ liệu",
      "Randomization gán nhóm thử nghiệm; segmentation chia user theo đặc điểm"
    ],
    answer: 3,
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
      "Chỉ cần nói phiên bản B tốt hơn để team có hướng triển khai rõ ràng",
      "Nêu thay đổi, metric bị ảnh hưởng và hướng tác động kỳ vọng nếu có",
      "Ưu tiên nhiều metric nhất có thể để tăng khả năng tìm được kết quả tốt",
      "Tránh gắn với business question để hypothesis không bị giới hạn"
    ],
    answer: 1,
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
      "Không có khác biệt hoặc tác động giữa control và treatment trên metric chính",
      "Treatment tạo uplift đủ lớn để có thể rollout ngay cho toàn bộ user",
      "Control luôn sai vì chưa nhận phiên bản mới trong experiment",
      "Dữ liệu sau randomization không còn cần kiểm định thống kê nữa"
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
      "Metric phụ dùng để giải thích thêm tác động sau khi đã đọc kết quả chính",
      "Metric kỹ thuật chỉ dùng để phát hiện lỗi tracking trong dashboard",
      "Metric chính được định nghĩa trước để đánh giá thành công của experiment",
      "Metric có sample size lớn nhất nên luôn dùng để quyết định rollout"
    ],
    answer: 2,
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
      "Là metric được chọn sau test nếu primary metric không significant",
      "Bổ sung góc nhìn phụ để hiểu thêm tác động của experiment",
      "Thay thế primary metric khi treatment có kết quả tốt hơn ở segment nhỏ",
      "Chỉ dùng để kiểm tra màu sắc dashboard và cách hiển thị report"
    ],
    answer: 1,
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
      "Tối ưu metric chính bằng cách bỏ qua các biến động nhỏ trong dữ liệu",
      "Tăng power thống kê bằng cách thêm nhiều biến vào kiểm định chính",
      "Chọn segment thắng để rollout nhanh hơn khi primary metric tăng"
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
      "Tổng revenue chia cho tổng số ngày có traffic hợp lệ trong experiment",
      "Số treatment user trừ số control user sau khi đã lọc outlier",
      "Số user/session chuyển đổi chia cho tổng user/session đủ điều kiện",
      "p-value của treatment chia cho alpha để ra tỷ lệ chuyển đổi cuối cùng"
    ],
    answer: 2,
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
      "Treatment chắc chắn tạo giá trị business đủ lớn để rollout",
      "Có đủ bằng chứng thống kê để bác bỏ H0 ở mức alpha đã chọn",
      "Effect size chắc chắn lớn hơn MDE và không cần xem thêm guardrail",
      "Sample size giữa hai nhóm đã bằng nhau nên kết quả luôn đáng tin"
    ],
    answer: 1,
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
      "Effect đủ lớn để có ý nghĩa thực tế hoặc business sau khi cân nhắc context",
      "p-value nhỏ hơn alpha nên mọi uplift đều đáng rollout ngay",
      "Control và treatment có cùng sample size trong toàn bộ thời gian test",
      "Metric không có missing values nên kết quả không cần diễn giải thêm"
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
      "Xác suất H0 đúng sau khi đã nhìn thấy dữ liệu của experiment",
      "Xác suất treatment tốt hơn control nếu rollout cho toàn bộ user",
      "Kích thước tác động thực tế của treatment lên primary metric",
      "Xác suất thấy kết quả ít nhất cực đoan như hiện tại nếu H0 đúng"
    ],
    answer: 3,
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
      "Chỉ cần p-value nhỏ hơn 0.05 nếu sample size đã đủ lớn",
      "Chỉ cần treatment có point estimate cao hơn control trên primary metric",
      "Significance, effect size, guardrail, practical impact và business context",
      "Chỉ cần dashboard thể hiện uplift rõ và các stakeholder đồng ý"
    ],
    answer: 2,
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
      "0.0000",
      "0.3333",
      "0.6667",
      "1.0000"
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
      "Proportion metric vì revenue per user luôn có dạng converted/not converted",
      "Continuous hoặc mean metric vì thường so sánh giá trị trung bình giữa nhóm",
      "Categorical metric vì revenue chỉ dùng để đếm số nhóm khách hàng",
      "Guardrail metric bắt buộc vì mọi metric tiền đều là chỉ số bảo vệ"
    ],
    answer: 1,
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
      "Average session duration",
      "Average order value"
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
      "Metric chính được dùng để kết luận experiment thắng hay thua",
      "Khoảng thời gian tối thiểu cần chạy để bao phủ seasonality",
      "Tập user được đưa vào dashboard sau khi lọc eligibility rule",
      "Đơn vị được gán ngẫu nhiên vào control hoặc treatment, như user/session"
    ],
    answer: 3,
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
      "Contamination giữa nhóm làm khó diễn giải causal effect của treatment",
      "Power tăng vì mỗi user đóng góp dữ liệu cho cả hai nhóm cùng lúc",
      "SRM biến mất vì user được phân bổ đều vào cả control và treatment",
      "Guardrail không cần theo dõi vì cùng user đã tự kiểm soát bias"
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
      "p-value ban đầu được dùng làm ngưỡng so sánh cho tất cả metric",
      "Metric hiện tại hoặc metric của control dùng làm mốc so sánh",
      "Số lượng user tối thiểu cần có trong treatment trước khi đọc kết quả",
      "Tỷ lệ missing event tối đa được chấp nhận trong tracking validation"
    ],
    answer: 1,
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
      "2 percent relative lift",
      "20 percentage points",
      "120 percent relative lift"
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
      "Effect thực tế chắc chắn sẽ xảy ra nếu treatment được rollout",
      "p-value nhỏ nhất mà experiment có thể đạt được khi đủ sample size",
      "Tỷ lệ missing values tối đa được chấp nhận trước khi hủy test",
      "Effect nhỏ nhất test được thiết kế để phát hiện với power và alpha nhất định"
    ],
    answer: 3,
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
      "Tăng lên vì phát hiện effect nhỏ cần nhiều dữ liệu hơn",
      "Giảm xuống vì effect nhỏ dễ phát hiện hơn effect lớn",
      "Không đổi nếu tỷ lệ chia control/treatment vẫn là 50/50",
      "Không cần tính nữa vì MDE nhỏ đồng nghĩa test đã đủ power"
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
      "Xác suất H0 đúng sau khi p-value nhỏ hơn alpha đã chọn",
      "Tỷ lệ user được đưa vào treatment trong randomization split",
      "Xác suất phát hiện effect khi effect thực sự tồn tại",
      "Số lượng metric được phép kiểm tra trong một experiment readout"
    ],
    answer: 2,
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
      "Kết luận có effect khi thực tế không có effect",
      "Không phát hiện effect khi effect thực sự tồn tại",
      "Dừng test quá sớm vì đã đạt đủ số ngày chạy",
      "Tạo quá nhiều guardrail metric trước khi experiment chạy"
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
      "Có 5% xác suất treatment tạo uplift đúng bằng MDE đã đặt trước",
      "Có 95% xác suất H0 đúng nếu p-value lớn hơn alpha",
      "Sample size của treatment phải bằng đúng 5% tổng traffic"
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
      "Không phát hiện treatment có tác động dù thực tế có",
      "Treatment bị thiếu exposure logging trong vài ngày đầu",
      "Control có nhiều user hơn treatment so với tỷ lệ kỳ vọng"
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
      "One-tailed test phía phải vì chỉ cần chứng minh treatment tăng",
      "One-tailed test phía trái vì chỉ cần chứng minh treatment giảm",
      "Two-tailed test vì quan tâm treatment khác control theo cả hai hướng",
      "Chi-square test bắt buộc vì mọi conversion metric đều là categorical"
    ],
    answer: 2,
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
      "One-sample t-test",
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
      "Two-proportion z-test vì revenue per user là biến 0/1",
      "Two-sample t-test hoặc phương pháp phù hợp cho mean metric",
      "Chi-square test bắt buộc vì revenue luôn là categorical outcome",
      "Không thể kiểm định vì average revenue không có phân phối xác suất"
    ],
    answer: 1,
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
      "Revenue liên tục có outlier lớn giữa các user trong treatment",
      "Time series theo từng giây trong nhiều ngày chạy experiment",
      "Text feedback tự do chưa được gắn nhãn thành category",
      "Bảng đếm categorical giữa group và outcome, như converted/not converted"
    ],
    answer: 3,
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
      "Cho thấy khoảng giá trị hợp lý của effect và mức độ không chắc chắn",
      "Cho biết xác suất treatment thắng control trong toàn bộ population",
      "Thay thế guardrail metrics nếu confidence interval không chứa 0",
      "Chứng minh H0 đúng hay sai với xác suất chính xác bằng 95%"
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
      "Vì p-value không thể tính nếu experiment chưa chạy đủ 24 giờ",
      "Vì treatment luôn cần chạy đúng 30 ngày để tránh mọi loại bias",
      "Vì kết quả có thể lệch do seasonality hoặc chu kỳ hành vi chưa đủ quan sát",
      "Vì control sẽ tự biến mất nếu không có đủ dữ liệu cuối tuần"
    ],
    answer: 2,
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
      "Làm treatment luôn thắng vì user phản ứng tốt hơn vào mùa cao điểm",
      "Metric biến động theo thời gian khiến test ngắn hạn có thể không đại diện",
      "Làm randomization không thể thực hiện nếu sản phẩm có traffic theo giờ",
      "Làm p-value luôn bằng 1 nếu test không chạy qua đủ các ngày trong tuần"
    ],
    answer: 1,
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
      "Liên tục xem kết quả giữa chừng và dừng khi significant mà không có stopping rule",
      "Kiểm tra tracking trước khi test chạy để chắc event được ghi nhận đúng",
      "Chia user ngẫu nhiên vào control và treatment theo tỷ lệ định trước",
      "Xác định primary metric, guardrail và MDE trước khi experiment bắt đầu"
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
      "Sau khi thấy treatment có p-value nhỏ hơn alpha",
      "Trước khi chạy experiment để tránh quyết định tùy tiện",
      "Khi sample size của treatment đã lớn hơn control",
      "Sau khi chọn được segment có uplift cao nhất"
    ],
    answer: 1,
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
      "Conversion rate giữa control và treatment lệch nhau đáng kể",
      "Primary metric không significant dù đã đạt sample size",
      "Tỷ lệ user giữa các nhóm lệch đáng kể so với split kỳ vọng",
      "Guardrail metric bị thiếu trong dashboard readout cuối cùng"
    ],
    answer: 2,
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
      "Treatment đã thắng primary metric chưa và có nên rollout ngay không",
      "p-value đã nhỏ hơn 0.05 chưa trong từng segment quan trọng",
      "Dashboard đã đủ màu và có chart cho mọi secondary metric chưa"
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
      "Kiểm tra SRM, randomization, eligibility rule, exposure logging và tracking",
      "Kết luận treatment thua vì treatment có ít user hơn control rất nhiều",
      "Bỏ qua sample split vì conversion rate mới là metric cần quan tâm",
      "Nhân trọng số treatment lên cho bằng control rồi đọc p-value như bình thường"
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
      "Làm tất cả metric phụ trở thành primary metric sau khi đọc kết quả",
      "Làm sample size tự động tăng nên p-value nhìn có vẻ ổn định hơn",
      "Làm confidence interval hẹp lại dù dữ liệu không thay đổi",
      "Làm tăng xác suất tìm thấy false positive do thử quá nhiều kiểm định"
    ],
    answer: 3,
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
      "Dễ cherry-pick kết quả significant giả do thử quá nhiều lát cắt sau hoc",
      "Luôn tìm được causal effect thật vì subgroup giúp giảm nhiễu dữ liệu",
      "Không cần quan tâm sample size vì mỗi subgroup có hành vi riêng",
      "Guardrail metrics tự động tốt hơn khi chia nhỏ population thành segment"
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
      "Treatment có cùng tác động cho mọi user nếu randomization được làm đúng",
      "Control và treatment có sample size khác nhau trong từng segment",
      "Treatment có tác động khác nhau giữa các nhóm user hoặc segment",
      "Metric bị missing ở một số segment nên không thể tính overall effect"
    ],
    answer: 2,
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
      "Có trade-off; cần xem guardrail, practical significance và business risk trước rollout",
      "Nên rollout ngay vì primary metric tăng là tiêu chí quyết định cuối cùng",
      "Nên bỏ complaint rate khỏi readout vì không phải conversion metric chính",
      "Nên kết luận tracking sai vì metric tốt và metric xấu không thể cùng xảy ra"
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
      "Rollout ngay vì primary metric significant mới là tiêu chí quan trọng nhất",
      "Không rollout vội; cần đánh giá trade-off, mức độ rủi ro và nguyên nhân",
      "Xóa guardrail khỏi report vì guardrail chỉ gây nhiễu quyết định business",
      "Đổi alpha sau khi thấy kết quả để primary metric vẫn giữ được significance"
    ],
    answer: 1,
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
      "Lỗi phân bổ traffic khiến sample ratio khác với tỷ lệ kỳ vọng",
      "Metric bị tính sai do duplicate event sau khi user refresh trang",
      "Treatment không được randomize nên không thể đọc causal effect",
      "User phản ứng tạm thời với tính mới khiến effect ngắn hạn lệch dài hạn"
    ],
    answer: 3,
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
      "Để phát hiện novelty effect, learning effect, tracking issue hoặc effect không ổn định",
      "Để chọn ngày có p-value đẹp nhất làm kết quả chính trong readout",
      "Để bỏ qua sample size planning nếu trend vài ngày đầu có vẻ rõ ràng",
      "Để thay đổi hypothesis sau test nếu effect không giống kỳ vọng ban đầu"
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
      "Observational analysis luôn chính xác hơn vì phản ánh dữ liệu thực tế hơn",
      "Experiment không cần dữ liệu lịch sử nên không bị ảnh hưởng bởi bias",
      "Experiment có random assignment nên hỗ trợ suy luận causal effect tốt hơn",
      "Observational analysis luôn không có confounding nếu sample size đủ lớn"
    ],
    answer: 2,
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
      "Kiểm tra data quality, SRM, tracking, eligibility và exposure logging",
      "Chỉ nhìn p-value của primary metric để tránh bị nhiễu bởi metric phụ",
      "Chỉ xem treatment có doanh thu cao hơn không rồi mới kiểm tra tracking",
      "Đổi primary metric nếu metric ban đầu không cho kết quả đủ đẹp"
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
      "Sau khi thấy kết quả treatment để tiêu chí bám sát dữ liệu thực tế",
      "Sau khi chọn segment thắng để tiêu chí phù hợp với nhóm rollout",
      "Trước khi chạy experiment để tránh thay đổi tiêu chuẩn theo kết quả",
      "Không cần xác định nếu primary metric đã có trong dashboard"
    ],
    answer: 2,
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
      "Kiểm tra randomization, tracking và false positive rate khi hai nhóm giống nhau",
      "Tìm treatment thắng nhanh hơn bằng cách chạy hai phiên bản khác nhau",
      "Thay thế A/B test khi team chưa đủ traffic cho primary metric",
      "Tăng effect size bằng cách chia user thành nhiều nhóm nhỏ hơn"
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
      "Control và treatment được randomize đúng nhưng sample size chưa đủ lớn",
      "Team muốn tăng retention nhưng primary metric là click ngắn hạn ít liên quan",
      "Guardrail được định nghĩa trước cùng với primary metric và success criteria",
      "Sample size được tính trước test dựa trên baseline rate và MDE"
    ],
    answer: 1,
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
      "Vì vẫn cần xem effect size, practical significance, guardrail, data quality và context",
      "Vì p-value nhỏ luôn là dấu hiệu lỗi tracking hoặc sample ratio mismatch",
      "Vì p-value không liên quan đến kiểm định và không nên xuất hiện trong readout",
      "Vì treatment không thể rollout nếu kết quả đã đạt statistical significance"
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
      "Tăng độ tin cậy vì metric mới phản ánh kết quả thực tế hơn",
      "Giảm mọi bias vì analyst đã chọn metric có signal rõ nhất",
      "Làm randomization tốt hơn vì primary metric được align lại sau test",
      "Cherry-picking và tăng false positive do chọn tiêu chí sau khi xem dữ liệu"
    ],
    answer: 3,
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
      "Nhiều lần kiểm tra p-value và dừng khi significant làm xác suất thắng giả tăng",
      "Peeking làm treatment có nhiều user hơn nên split không còn đúng 50/50",
      "Peeking tự động tăng effect size thật vì team phản ứng nhanh hơn với dữ liệu",
      "Peeking làm guardrail không còn cần thiết nếu primary metric đã significant"
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
      "Vì sample size lớn luôn làm p-value tiến gần 1 nếu treatment không có effect",
      "Vì lỗi hệ thống như tracking bug, SRM, contamination hoặc metric mismatch vẫn làm sai kết luận",
      "Vì sample size lớn không thể tính conversion rate nếu metric là dạng 0/1",
      "Vì randomization chắc chắn mất hiệu lực khi số lượng user vượt quá MDE"
    ],
    answer: 1,
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
      "Xem là exploratory finding, cần kiểm chứng hoặc correction vì rủi ro false positive cao",
      "Rollout ngay cho subgroup đó vì subgroup nhỏ thường có effect rõ hơn",
      "Kết luận treatment thắng toàn population nếu subgroup có uplift đủ lớn",
      "Bỏ qua sample size subgroup vì kết quả đã significant sau khi phân tích"
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
      "Chỉ cần một dòng kết luận B thắng hoặc thua để stakeholder dễ quyết định",
      "Chỉ cần screenshot dashboard nếu primary metric đã có màu xanh rõ ràng",
      "Thiết kế, exposure check, primary result, effect size, CI, guardrails, limitations và recommendation",
      "Chỉ cần p-value của metric đẹp nhất kèm segment có uplift cao nhất"
    ],
    answer: 2,
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
      "Thiết kế trước, đo đúng metric, kiểm tra chất lượng test và cân bằng thống kê với tác động thực tế",
      "Luôn rollout nếu treatment có point estimate cao hơn dù guardrail chưa rõ",
      "Chỉ cần p-value nhỏ ở bất kỳ segment nào nếu segment đó có giá trị business",
      "Không cần guardrail nếu primary metric tăng và stakeholder muốn triển khai nhanh"
    ],
    answer: 0,
    explanation: "A/B Testing là quy trình ra quyết định, không chỉ là chạy kiểm định. Cần predefine hypothesis/metric, đảm bảo test chạy đúng, đọc effect và guardrail trong context business."
  }
];