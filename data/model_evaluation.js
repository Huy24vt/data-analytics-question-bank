const MODEL_EVALUATION_QUESTIONS = [
  {
    id: "meval_f_001",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Classification Metrics",
    question: "Trong bài toán classification bị mất cân bằng lớp, vì sao accuracy có thể gây hiểu nhầm?",
    code: "",
    options: [
      "Vì accuracy chỉ đo performance của lớp thiểu số",
      "Vì model có thể đoán tốt lớp đa số nhưng bỏ sót lớp thiểu số",
      "Vì accuracy luôn giảm khi dữ liệu có nhiều class",
      "Vì accuracy chỉ dùng được khi target là số liên tục"
    ],
    answer: 1,
    explanation: "Khi dữ liệu mất cân bằng, model có thể đạt accuracy cao bằng cách dự đoán chủ yếu lớp đa số, nhưng lại bỏ sót lớp thiểu số quan trọng. Khi đó nên xem thêm precision, recall, F1, PR AUC hoặc metric gắn với business cost."
  },
  {
    id: "meval_f_002",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Model Evaluation Overview",
    question: "Mục tiêu chính của model evaluation là gì?",
    code: "",
    options: [
      "Kiểm tra model có nhiều layer hơn baseline không",
      "Đánh giá model trên dữ liệu mới và mục tiêu sử dụng",
      "Tăng số lượng feature trước khi training model",
      "Thay thế hoàn toàn bước phân tích dữ liệu ban đầu"
    ],
    answer: 1,
    explanation: "Model evaluation giúp kiểm tra khả năng tổng quát hóa trên dữ liệu chưa thấy và xem kết quả có hữu ích cho quyết định thực tế hay không."
  },
  {
    id: "meval_f_003",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Train / Validation / Test Split",
    question: "Tập train thường dùng để làm gì?",
    code: "",
    options: [
      "Huấn luyện model",
      "Đánh giá cuối cùng",
      "Lưu prediction",
      "Vẽ confusion matrix"
    ],
    answer: 0,
    explanation: "Train set dùng để fit model và học các tham số từ dữ liệu. Test set nên giữ lại để đánh giá cuối cùng."
  },
  {
    id: "meval_f_004",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Train / Validation / Test Split",
    question: "Tập validation thường dùng để làm gì?",
    code: "",
    options: [
      "Chọn model hoặc hyperparameter",
      "Fit model chính thức sau cùng",
      "Thay thế hoàn toàn tập train",
      "Chứa target nhưng không chứa feature"
    ],
    answer: 0,
    explanation: "Validation set dùng để so sánh model, chọn threshold hoặc tune hyperparameter. Test set nên dùng sau cùng để ước lượng performance cuối."
  },
  {
    id: "meval_f_005",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Train / Validation / Test Split",
    question: "Tập test nên được dùng khi nào?",
    code: "",
    options: [
      "Ngay từ đầu để chọn hyperparameter",
      "Sau khi chọn model/tuning xong",
      "Trước khi chia dữ liệu train",
      "Trong lúc fit scaler cho toàn bộ data"
    ],
    answer: 1,
    explanation: "Test set nên được giữ độc lập và dùng sau cùng. Nếu dùng test set nhiều lần để tune, đánh giá có thể bị lạc quan."
  },
  {
    id: "meval_f_006",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Baseline Model",
    question: "Baseline model có vai trò gì trong model evaluation?",
    code: "",
    options: [
      "Làm mốc so sánh tối thiểu cho model mới",
      "Luôn là model chính xác nhất trong production",
      "Chỉ dùng khi xây dựng deep learning model",
      "Dùng để loại bỏ toàn bộ dữ liệu bất thường"
    ],
    answer: 0,
    explanation: "Baseline giúp đánh giá model có vượt qua cách đơn giản hay không, ví dụ luôn dự đoán class phổ biến nhất hoặc giá trị trung bình."
  },
  {
    id: "meval_f_007",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Overfitting",
    question: "Dấu hiệu phổ biến của overfitting là gì?",
    code: "",
    options: [
      "Train metric tốt nhưng validation/test kém nhiều",
      "Train metric và validation metric đều rất kém",
      "Model không học được pattern nào từ train set",
      "Model không cần dữ liệu train để fit tham số"
    ],
    answer: 0,
    explanation: "Overfitting xảy ra khi model học quá sát dữ liệu train, dẫn đến performance tốt trên train nhưng kém trên dữ liệu mới."
  },
  {
    id: "meval_f_008",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Underfitting",
    question: "Dấu hiệu phổ biến của underfitting là gì?",
    code: "",
    options: [
      "Train metric và validation/test metric đều kém",
      "Train metric hoàn hảo nhưng test metric rất thấp",
      "Model chỉ dự đoán sai đúng một dòng dữ liệu",
      "Model đạt accuracy 100% trên tập test"
    ],
    answer: 0,
    explanation: "Underfitting thường xảy ra khi model chưa đủ học pattern trong dữ liệu, nên cả train và validation/test đều cho kết quả thấp."
  },
  {
    id: "meval_f_009",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Data Leakage",
    question: "Data leakage trong evaluation là gì?",
    code: "",
    options: [
      "Thông tin từ validation/test lọt vào training",
      "Dữ liệu train có nhiều dòng hơn test set",
      "Model training mất nhiều thời gian hơn dự kiến",
      "Target được lưu dưới dạng numeric column"
    ],
    answer: 0,
    explanation: "Leakage làm model hoặc preprocessing dùng thông tin từ dữ liệu đáng lẽ phải được giữ riêng, khiến kết quả evaluation quá lạc quan và không đáng tin."
  },
  {
    id: "meval_f_010",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Confusion Matrix",
    question: "Confusion matrix dùng để làm gì trong classification?",
    code: "",
    options: [
      "Tóm tắt dự đoán đúng/sai theo từng class",
      "Tính sai số residual trong regression",
      "Tự động chọn threshold tối ưu nhất",
      "Scale toàn bộ feature về khoảng 0 đến 1"
    ],
    answer: 0,
    explanation: "Confusion matrix cho biết các nhóm như True Positive, False Positive, True Negative và False Negative, giúp hiểu model sai ở đâu."
  },
  {
    id: "meval_f_011",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "True Positive / False Positive",
    question: "Trong binary classification với positive class là 1, True Positive là gì?",
    code: "",
    options: [
      "y_true = 1 và y_pred = 1",
      "y_true = 0 và y_pred = 1",
      "y_true = 1 và y_pred = 0",
      "y_true = 0 và y_pred = 0"
    ],
    answer: 0,
    explanation: "True Positive là trường hợp thực tế là positive và model cũng dự đoán positive."
  },
  {
    id: "meval_f_012",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "True Negative / False Negative",
    question: "Trong binary classification với positive class là 1, False Negative là gì?",
    code: "",
    options: [
      "y_true = 1 và y_pred = 0",
      "y_true = 0 và y_pred = 1",
      "y_true = 1 và y_pred = 1",
      "y_true = 0 và y_pred = 0"
    ],
    answer: 0,
    explanation: "False Negative là trường hợp thực tế là positive nhưng model dự đoán negative. Đây thường là lỗi bỏ sót positive case."
  },
  {
    id: "meval_f_013",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Accuracy",
    question: "Accuracy đo điều gì?",
    code: "",
    options: [
      "Tỷ lệ dự đoán đúng trên tổng quan sát",
      "Tỷ lệ positive thật được phát hiện đúng",
      "Sai số tuyệt đối trung bình của dự đoán",
      "Diện tích bên dưới ROC curve"
    ],
    answer: 0,
    explanation: "Accuracy = số dự đoán đúng / tổng số quan sát. Metric này dễ hiểu nhưng có thể gây hiểu nhầm khi class imbalance."
  },
  {
    id: "meval_f_014",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Precision Recall",
    question: "Với positive class là 1, precision trả lời câu hỏi nào?",
    code: "",
    options: [
      "Trong predicted positive, bao nhiêu thật sự positive?",
      "Trong actual positive, model bắt đúng được bao nhiêu?",
      "Sai số dự đoán trung bình của model là bao nhiêu?",
      "Model đang sử dụng bao nhiêu feature đầu vào?"
    ],
    answer: 0,
    explanation: "Precision = TP / (TP + FP), tập trung vào độ tin cậy của các dự đoán positive."
  },
  {
    id: "meval_f_015",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Precision Recall",
    question: "Với positive class là 1, recall trả lời câu hỏi nào?",
    code: "",
    options: [
      "Trong actual positive, model phát hiện đúng bao nhiêu?",
      "Trong predicted positive, bao nhiêu thật sự đúng?",
      "Model tạo prediction nhanh hơn baseline bao nhiêu?",
      "Có bao nhiêu feature bị thiếu trong dataset?"
    ],
    answer: 0,
    explanation: "Recall = TP / (TP + FN), tập trung vào khả năng phát hiện positive case thật."
  },
  {
    id: "meval_f_016",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "F1-score",
    question: "F1-score là gì?",
    code: "",
    options: [
      "Trung bình điều hòa giữa precision và recall",
      "Trung bình cộng giữa MAE và RMSE",
      "Tỷ lệ negative thật được dự đoán đúng",
      "Metric chỉ dùng để đánh giá clustering"
    ],
    answer: 0,
    explanation: "F1-score kết hợp precision và recall bằng trung bình điều hòa, hữu ích khi cần cân bằng giữa false positive và false negative."
  },
  {
    id: "meval_f_017",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Regression Metrics",
    question: "MAE đo điều gì trong regression?",
    code: "",
    options: [
      "Trung bình trị tuyệt đối của sai số dự đoán",
      "Tỷ lệ dự đoán đúng class trên tổng mẫu",
      "Diện tích bên dưới đường ROC curve",
      "Số lượng cluster được model tạo ra"
    ],
    answer: 0,
    explanation: "MAE = mean absolute error, đo trung bình khoảng cách tuyệt đối giữa y_true và y_pred, cùng đơn vị với target."
  },
  {
    id: "meval_f_018",
    library: "Model Evaluation",
    level: "Foundation",
    topic: "Regression Metrics",
    question: "R-squared thường dùng để đánh giá gì?",
    code: "",
    options: [
      "Mức độ model giải thích biến thiên của target",
      "Tỷ lệ dự đoán đúng trong classification",
      "Số lượng false positive của classifier",
      "Số cụm tối ưu trong clustering"
    ],
    answer: 0,
    explanation: "R-squared cho biết model giải thích được bao nhiêu phần biến thiên của target so với baseline đơn giản như dự đoán trung bình."
  },
  {
    id: "meval_i_001",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Confusion Matrix",
    question: "Với positive class là 1, nếu TP = 30, FP = 10, TN = 50, FN = 10 thì accuracy bằng bao nhiêu?",
    code: "",
    options: [
      "0.80",
      "0.75",
      "0.60",
      "0.30"
    ],
    answer: 0,
    explanation: "Accuracy = (TP + TN) / tổng = (30 + 50) / (30 + 10 + 50 + 10) = 80/100 = 0.80."
  },
  {
    id: "meval_i_002",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Precision",
    question: "Với positive class là 1, nếu TP = 30 và FP = 10 thì precision bằng bao nhiêu?",
    code: "",
    options: [
      "0.75",
      "0.60",
      "0.80",
      "0.30"
    ],
    answer: 0,
    explanation: "Precision = TP / (TP + FP) = 30 / (30 + 10) = 0.75."
  },
  {
    id: "meval_i_003",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Recall",
    question: "Với positive class là 1, nếu TP = 30 và FN = 10 thì recall bằng bao nhiêu?",
    code: "",
    options: [
      "0.75",
      "0.60",
      "0.80",
      "0.30"
    ],
    answer: 0,
    explanation: "Recall = TP / (TP + FN) = 30 / (30 + 10) = 0.75."
  },
  {
    id: "meval_i_004",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Specificity Basics",
    question: "Specificity đo điều gì trong binary classification?",
    code: "",
    options: [
      "Tỷ lệ negative thật được dự đoán đúng",
      "Tỷ lệ positive thật được phát hiện đúng",
      "Sai số tuyệt đối trung bình của regression",
      "Tỷ lệ predicted positive thật sự đúng"
    ],
    answer: 0,
    explanation: "Specificity = TN / (TN + FP), đo khả năng nhận diện đúng negative class."
  },
  {
    id: "meval_i_005",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Sensitivity Basics",
    question: "Sensitivity thường tương đương với metric nào?",
    code: "",
    options: [
      "Recall",
      "Precision",
      "MAE",
      "R2"
    ],
    answer: 0,
    explanation: "Sensitivity chính là recall hoặc true positive rate: TP / (TP + FN)."
  },
  {
    id: "meval_i_006",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Threshold Selection",
    question: "Khi giảm classification threshold từ 0.5 xuống 0.3, điều gì thường có thể xảy ra?",
    code: "",
    options: [
      "Positive prediction tăng, recall có thể tăng và precision có thể giảm",
      "Positive prediction giảm, recall có thể giảm và precision luôn bằng 1",
      "Regression metric tự động tốt hơn dù không đổi y_score",
      "Số feature đầu vào tự động giảm sau khi đổi threshold"
    ],
    answer: 0,
    explanation: "Threshold thấp hơn làm nhiều quan sát được gán positive hơn. Điều này thường tăng recall nhưng cũng có thể tăng false positive, làm precision giảm."
  },
  {
    id: "meval_i_007",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Probability Score vs Predicted Label",
    question: "Sự khác nhau giữa y_score và y_pred trong binary classification thường là gì?",
    code: "",
    options: [
      "y_score là score/xác suất, y_pred là nhãn sau threshold",
      "y_score là nhãn sau threshold, y_pred là score/xác suất",
      "y_score và y_pred luôn giống nhau trong mọi model",
      "y_score chỉ dùng cho regression, y_pred chỉ dùng cho clustering"
    ],
    answer: 0,
    explanation: "y_score thường là xác suất hoặc score liên tục. y_pred là nhãn class sau khi áp threshold, ví dụ threshold 0.5."
  },
  {
    id: "meval_i_008",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "ROC AUC",
    question: "ROC AUC chủ yếu đánh giá điều gì?",
    code: "",
    options: [
      "Khả năng phân biệt positive và negative qua nhiều threshold",
      "Sai số tuyệt đối trung bình giữa y_true và y_pred",
      "Số dòng dữ liệu được sử dụng trong tập train",
      "Số lượng feature category trong dữ liệu đầu vào"
    ],
    answer: 0,
    explanation: "ROC AUC đo khả năng model xếp positive cao hơn negative trên nhiều threshold, không phụ thuộc một threshold cố định."
  },
  {
    id: "meval_i_009",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "ROC Curve",
    question: "ROC curve biểu diễn quan hệ giữa hai đại lượng nào?",
    code: "",
    options: [
      "True Positive Rate và False Positive Rate",
      "Precision và Mean Absolute Error",
      "Root Mean Squared Error và R-squared",
      "Train size và số lượng feature"
    ],
    answer: 0,
    explanation: "ROC curve biểu diễn TPR hay recall trên trục y và FPR trên trục x ở nhiều threshold khác nhau."
  },
  {
    id: "meval_i_010",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Precision-Recall Curve",
    question: "Precision-Recall curve đặc biệt hữu ích trong tình huống nào?",
    code: "",
    options: [
      "Classification mất cân bằng và positive class quan trọng",
      "Regression với target liên tục và sai số numeric",
      "Clustering không nhãn và cần chọn số cụm",
      "Dataset chỉ có một class trong toàn bộ target"
    ],
    answer: 0,
    explanation: "PR curve tập trung vào precision và recall của positive class, thường hữu ích hơn ROC khi dữ liệu mất cân bằng mạnh."
  },
  {
    id: "meval_i_011",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "PR AUC",
    question: "PR AUC đo điều gì?",
    code: "",
    options: [
      "Diện tích dưới Precision-Recall curve",
      "Diện tích dưới biểu đồ residual plot",
      "Tỷ lệ variance được giải thích bởi model",
      "Số lượng cluster được chọn bởi thuật toán"
    ],
    answer: 0,
    explanation: "PR AUC tóm tắt hiệu năng precision-recall qua nhiều threshold, thường hữu ích khi positive class hiếm."
  },
  {
    id: "meval_i_012",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "ROC AUC vs PR AUC",
    question: "Khi positive class rất hiếm, vì sao PR AUC thường đáng xem hơn ROC AUC?",
    code: "",
    options: [
      "Vì PR AUC tập trung vào precision và recall của positive class",
      "Vì ROC AUC chỉ tính được khi dữ liệu không có negative class",
      "Vì PR AUC là metric regression cho target liên tục",
      "Vì PR AUC không cần y_true và không cần prediction score"
    ],
    answer: 0,
    explanation: "Với class imbalance, ROC AUC có thể nhìn khá tốt dù precision thấp. PR AUC phản ánh rõ hơn trade-off khi positive class là trọng tâm."
  },
  {
    id: "meval_i_013",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Cross-validation",
    question: "Cross-validation nên được dùng chủ yếu để làm gì?",
    code: "",
    options: [
      "Đánh giá/tune model ổn định hơn qua nhiều fold",
      "Fit model trực tiếp trên test set cuối cùng",
      "Xóa toàn bộ missing values khỏi dataset",
      "Chuyển target thành một feature đầu vào"
    ],
    answer: 0,
    explanation: "Cross-validation giúp đánh giá model trên nhiều cách chia dữ liệu, giảm phụ thuộc vào một split duy nhất."
  },
  {
    id: "meval_i_014",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "KFold",
    question: "KFold cross-validation với n_splits=5 nghĩa là gì?",
    code: "",
    options: [
      "Chia 5 fold, mỗi lần 1 fold validation và phần còn lại train",
      "Chia 5 target, mỗi lần train model với một target khác nhau",
      "Train model đúng 5 feature và loại bỏ các feature còn lại",
      "Dùng test set để fit model lặp lại đúng 5 lần"
    ],
    answer: 0,
    explanation: "KFold 5-fold tạo 5 vòng đánh giá. Mỗi vòng một fold làm validation, các fold còn lại làm train."
  },
  {
    id: "meval_i_015",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "StratifiedKFold",
    question: "StratifiedKFold khác KFold thường ở điểm nào?",
    code: "",
    options: [
      "Cố gắng giữ tỷ lệ class tương tự trong từng fold",
      "Chỉ dùng được cho regression target liên tục",
      "Không cần truyền target y khi chia dữ liệu",
      "Luôn tạo đúng 2 fold bất kể n_splits"
    ],
    answer: 0,
    explanation: "StratifiedKFold hữu ích cho classification vì giúp mỗi fold giữ tỷ lệ class gần với dữ liệu gốc."
  },
  {
    id: "meval_i_016",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Time-based Split Awareness",
    question: "Với dữ liệu có yếu tố thời gian, cách split nào thường hợp lý hơn?",
    code: "",
    options: [
      "Train trên quá khứ, validation/test trên tương lai",
      "Shuffle toàn bộ dòng trong mọi bài toán thời gian",
      "Fit model trên tương lai rồi test trên quá khứ",
      "Dùng test set để fill missing values cho train"
    ],
    answer: 0,
    explanation: "Với bài toán thời gian, nên mô phỏng thực tế: dùng dữ liệu quá khứ để dự đoán tương lai. Shuffle ngẫu nhiên có thể gây leakage thời gian."
  },
  {
    id: "meval_i_017",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Regression Metrics",
    question: "MSE khác MAE ở điểm nào?",
    code: "",
    options: [
      "MSE bình phương lỗi nên phạt lỗi lớn mạnh hơn",
      "MSE chỉ tính được cho bài toán classification",
      "MAE luôn không thể tính được bằng Python",
      "MSE và MAE luôn cho cùng một giá trị"
    ],
    answer: 0,
    explanation: "MSE lấy trung bình bình phương lỗi, nên outlier hoặc lỗi lớn ảnh hưởng mạnh hơn so với MAE."
  },
  {
    id: "meval_i_018",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "RMSE",
    question: "Ưu điểm diễn giải của RMSE so với MSE là gì?",
    code: "",
    options: [
      "RMSE có cùng đơn vị với target",
      "RMSE chỉ dùng cho classification",
      "RMSE không nhạy với outlier",
      "RMSE luôn nhỏ hơn MAE"
    ],
    answer: 0,
    explanation: "RMSE là căn bậc hai của MSE nên quay về cùng đơn vị với target, dễ diễn giải hơn MSE."
  },
  {
    id: "meval_i_019",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "MAPE",
    question: "MAPE có hạn chế phổ biến nào?",
    code: "",
    options: [
      "Gặp vấn đề khi y_true bằng 0 hoặc rất gần 0",
      "Chỉ tính được cho binary classification",
      "Không biểu diễn lỗi dưới dạng phần trăm",
      "Luôn ổn định khi target có giá trị rất nhỏ"
    ],
    answer: 0,
    explanation: "MAPE tính lỗi phần trăm, nên khi y_true bằng 0 hoặc rất nhỏ, metric có thể không xác định hoặc bị phóng đại."
  },
  {
    id: "meval_i_020",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "R-squared",
    question: "R-squared bằng 0 thường có thể hiểu là gì trong regression?",
    code: "",
    options: [
      "Model không tốt hơn baseline dự đoán trung bình",
      "Model dự đoán hoàn hảo mọi giá trị target",
      "Model classification đang bị sai nhãn class",
      "Target không có bất kỳ giá trị hợp lệ nào"
    ],
    answer: 0,
    explanation: "R2 bằng 0 nghĩa là model không giải thích tốt hơn baseline dùng trung bình target, theo định nghĩa thông thường của R2."
  },
  {
    id: "meval_i_021",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Residual Analysis Basics",
    question: "Residual trong regression là gì?",
    code: "",
    options: [
      "Sai khác giữa y_true và y_pred",
      "Xác suất thuộc positive class",
      "Số lượng class trong target",
      "Số fold trong cross-validation"
    ],
    answer: 0,
    explanation: "Residual thường là y_true - y_pred. Phân tích residual giúp phát hiện pattern lỗi, outlier hoặc bias theo segment."
  },
  {
    id: "meval_i_022",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Outlier Impact on Metrics",
    question: "Metric regression nào thường nhạy với outlier hơn?",
    code: "",
    options: [
      "MSE/RMSE",
      "MAE",
      "Median absolute error",
      "Accuracy"
    ],
    answer: 0,
    explanation: "MSE/RMSE bình phương lỗi nên lỗi lớn từ outlier ảnh hưởng mạnh hơn MAE."
  },
  {
    id: "meval_i_023",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Business Metric vs ML Metric",
    question: "Vì sao không nên chỉ nhìn ML metric mà bỏ qua business metric?",
    code: "",
    options: [
      "Vì metric tốt chưa chắc tạo quyết định tối ưu chi phí/lợi ích",
      "Vì mọi ML metric đều sai khi dùng trong production",
      "Vì business metric không liên quan đến prediction",
      "Vì ML metric chỉ áp dụng được cho clustering"
    ],
    answer: 0,
    explanation: "Một model có metric tốt chưa chắc tạo impact tốt. Cần gắn evaluation với chi phí sai lầm, mục tiêu vận hành và giá trị business."
  },
  {
    id: "meval_i_024",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Cost-sensitive Evaluation",
    question: "Khi false negative đắt hơn false positive, evaluation nên chú ý điều gì?",
    code: "",
    options: [
      "Recall và cost của từng loại lỗi",
      "Accuracy tổng thể trên toàn bộ data",
      "Số lượng feature được đưa vào model",
      "Thời gian import các thư viện Python"
    ],
    answer: 0,
    explanation: "Nếu bỏ sót positive case gây chi phí cao, recall và cost-sensitive metric cần được xem xét khi chọn threshold/model."
  },
  {
    id: "meval_i_025",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Model Comparison",
    question: "Khi so sánh hai model, điều nào quan trọng để kết luận công bằng hơn?",
    code: "",
    options: [
      "Đánh giá trên cùng split hoặc cùng CV setup",
      "Đánh giá model A trên train và model B trên test",
      "Dùng metric khác nhau cho từng model mà không giải thích",
      "Chọn model có tên thuật toán dài hơn"
    ],
    answer: 0,
    explanation: "So sánh công bằng cần cùng dữ liệu đánh giá, cùng metric và quy trình tương tự. Nếu không, kết luận dễ bị lệch."
  },
  {
    id: "meval_i_026",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Segment-level Evaluation",
    question: "Segment-level evaluation giúp phát hiện điều gì?",
    code: "",
    options: [
      "Model tốt tổng thể nhưng kém trên một nhóm cụ thể",
      "Model có thể training mà không cần target",
      "Số lượng package Python đã được import",
      "Thuật toán clustering tối ưu nhất cho dữ liệu"
    ],
    answer: 0,
    explanation: "Đánh giá theo segment như nhóm khách hàng, khu vực, thời gian hoặc loại dữ liệu giúp phát hiện lỗi bị che khuất bởi metric tổng thể."
  },
  {
    id: "meval_i_027",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Error Analysis",
    question: "Error analysis thường nên làm gì sau khi có metric tổng thể?",
    code: "",
    options: [
      "Xem các case dự đoán sai để tìm pattern lỗi",
      "Xóa toàn bộ prediction sai khỏi test set",
      "Tune trực tiếp trên test đến khi hết lỗi",
      "Bỏ qua mọi outlier trong mọi trường hợp"
    ],
    answer: 0,
    explanation: "Error analysis giúp hiểu model sai ở đâu, trên loại case nào, từ đó cải thiện dữ liệu, feature hoặc threshold một cách có định hướng."
  },
  {
    id: "meval_i_028",
    library: "Model Evaluation",
    level: "Intermediate",
    topic: "Common Errors",
    question: "Lỗi evaluation nào sau đây là nghiêm trọng?",
    code: "",
    options: [
      "Fit preprocessing trên toàn dataset trước khi split",
      "Tính metric bằng y_test và y_pred",
      "Dùng baseline model để so sánh",
      "Dùng validation set để chọn hyperparameter"
    ],
    answer: 0,
    explanation: "Fit preprocessing trước split gây leakage vì thông tin từ test đi vào training pipeline, làm evaluation quá lạc quan."
  },
  {
    id: "meval_a_001",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Threshold-dependent Metrics",
    question: "Metric nào phụ thuộc trực tiếp vào threshold classification?",
    code: "",
    options: [
      "Precision",
      "ROC AUC",
      "PR AUC",
      "R2"
    ],
    answer: 0,
    explanation: "Precision được tính từ nhãn dự đoán sau khi áp threshold, nên phụ thuộc threshold. ROC AUC và PR AUC thường dùng score qua nhiều threshold."
  },
  {
    id: "meval_a_002",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Threshold-independent Metrics",
    question: "Metric nào thường được xem là threshold-independent cho binary classification khi dùng y_score?",
    code: "",
    options: [
      "ROC AUC",
      "Accuracy",
      "Precision",
      "Confusion matrix"
    ],
    answer: 0,
    explanation: "ROC AUC đánh giá khả năng ranking dựa trên score qua nhiều threshold, không phụ thuộc vào một threshold cụ thể."
  },
  {
    id: "meval_a_003",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Probability Calibration Basics",
    question: "Probability calibration tập trung vào điều gì?",
    code: "",
    options: [
      "Xác suất dự đoán có khớp tần suất thực tế không",
      "Model sử dụng bao nhiêu feature đầu vào",
      "Thời gian training model nhanh hay chậm",
      "Số lượng dòng bị missing trong dataset"
    ],
    answer: 0,
    explanation: "Một model calibrated tốt nghĩa là các case được dự đoán khoảng 0.8 thật sự xảy ra với tần suất gần 80%."
  },
  {
    id: "meval_a_004",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Imbalanced Classification",
    question: "Trong imbalanced classification, metric nào thường cần xem thêm ngoài accuracy?",
    code: "",
    options: [
      "Precision, recall, F1, PR AUC hoặc confusion matrix",
      "R2, adjusted R2 và residual plot",
      "MSE, RMSE, MAE và MAPE",
      "Số lượng feature và số dòng train"
    ],
    answer: 0,
    explanation: "Các metric như precision, recall, F1, PR AUC và confusion matrix cho thấy model xử lý class thiểu số ra sao, điều accuracy có thể che giấu."
  },
  {
    id: "meval_a_005",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Macro Average",
    question: "Macro average trong multi-class evaluation thường tính như thế nào?",
    code: "",
    options: [
      "Tính từng class rồi lấy trung bình không trọng số",
      "Gom toàn bộ prediction rồi tính một metric chung",
      "Tính trung bình có trọng số theo số mẫu mỗi class",
      "Chỉ tính metric cho class có nhiều mẫu nhất"
    ],
    answer: 0,
    explanation: "Macro average đối xử các class như nhau, không phụ thuộc class có nhiều hay ít mẫu."
  },
  {
    id: "meval_a_006",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Weighted Average",
    question: "Weighted average trong classification report thường khác macro average ở điểm nào?",
    code: "",
    options: [
      "Tính trung bình theo số mẫu của từng class",
      "Bỏ qua class có số lượng mẫu lớn nhất",
      "Chỉ áp dụng được cho regression target",
      "Luôn nhỏ hơn macro average trong mọi case"
    ],
    answer: 0,
    explanation: "Weighted average dùng support của từng class làm trọng số, nên class có nhiều mẫu ảnh hưởng nhiều hơn."
  },
  {
    id: "meval_a_007",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Micro Average",
    question: "Micro average thường làm gì trong multi-class/multi-label evaluation?",
    code: "",
    options: [
      "Gom tổng TP, FP, FN trên các class rồi tính metric",
      "Tính từng class rồi lấy trung bình không trọng số",
      "Chỉ tính metric trên class có số mẫu nhỏ nhất",
      "Chỉ dùng để đánh giá mô hình clustering"
    ],
    answer: 0,
    explanation: "Micro average cộng dồn TP, FP, FN trên các class trước khi tính metric, nên phản ánh performance tổng thể theo từng instance/decision."
  },
  {
    id: "meval_a_008",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Multi-class Evaluation Basics",
    question: "Trong multi-class classification, vì sao nên xem confusion matrix ngoài accuracy?",
    code: "",
    options: [
      "Để biết model hay nhầm class nào với class nào",
      "Để tính MAE cho từng class trong regression",
      "Để chuyển target classification thành regression",
      "Để tự động xóa feature không quan trọng"
    ],
    answer: 0,
    explanation: "Accuracy chỉ cho biết tổng thể đúng bao nhiêu. Confusion matrix cho thấy pattern nhầm lẫn giữa các class cụ thể."
  },
  {
    id: "meval_a_009",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Adjusted R-squared Awareness",
    question: "Adjusted R-squared được sinh ra để xử lý vấn đề gì của R-squared?",
    code: "",
    options: [
      "R-squared thường không giảm khi thêm nhiều feature",
      "R-squared không dùng được cho bất kỳ regression nào",
      "R-squared luôn âm nếu model có nhiều biến",
      "R-squared chỉ dùng được cho classification"
    ],
    answer: 0,
    explanation: "Adjusted R-squared có điều chỉnh theo số lượng feature, giúp hạn chế việc R2 tăng chỉ vì thêm biến không thật sự hữu ích."
  },
  {
    id: "meval_a_010",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Residual Analysis Basics",
    question: "Nếu residual plot cho thấy lỗi tăng dần khi giá trị dự đoán tăng, điều này gợi ý gì?",
    code: "",
    options: [
      "Có thể có pattern lỗi hoặc phương sai lỗi không đều",
      "Model chắc chắn đã dự đoán hoàn hảo mọi điểm",
      "Target chắc chắn là classification nhiều class",
      "Không cần kiểm tra thêm bất kỳ metric nào"
    ],
    answer: 0,
    explanation: "Residual nên càng ngẫu nhiên càng tốt. Pattern rõ trong residual có thể gợi ý model misspecification, non-linearity hoặc heteroscedasticity."
  },
  {
    id: "meval_a_011",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Ranking Metrics Basics",
    question: "Ranking metric phù hợp hơn khi nào?",
    code: "",
    options: [
      "Khi mục tiêu là xếp hạng case theo mức ưu tiên",
      "Khi target là số liên tục nhưng không có thứ tự",
      "Khi model không tạo ra prediction score",
      "Khi chỉ muốn tính giá trị trung bình của target"
    ],
    answer: 0,
    explanation: "Một số bài toán cần ưu tiên top cases, ví dụ top N theo risk/score. Khi đó ranking metric có thể phù hợp hơn metric classification ở threshold cố định."
  },
  {
    id: "meval_a_012",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Clustering Evaluation Basics",
    question: "Silhouette score dùng để đánh giá điều gì ở mức cơ bản?",
    code: "",
    options: [
      "Độ gần trong cùng cụm và độ tách giữa các cụm",
      "Tỷ lệ class dự đoán đúng trên tổng quan sát",
      "Sai số tuyệt đối trung bình trong regression",
      "Độ calibration của xác suất dự đoán"
    ],
    answer: 0,
    explanation: "Silhouette score đo độ kết dính trong cụm và độ tách biệt giữa cụm. Giá trị cao hơn thường gợi ý clustering rõ hơn."
  },
  {
    id: "meval_a_013",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Validation Curve Basics",
    question: "Validation curve thường giúp phân tích điều gì?",
    code: "",
    options: [
      "Ảnh hưởng của một hyperparameter đến train/validation score",
      "Số lượng dòng trong file CSV trước khi training",
      "Tốc độ import thư viện trong môi trường Python",
      "Cách chuyển target thành feature đầu vào"
    ],
    answer: 0,
    explanation: "Validation curve cho thấy model phản ứng thế nào khi thay đổi một hyperparameter, giúp nhận biết underfitting/overfitting."
  },
  {
    id: "meval_a_014",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Learning Curve Basics",
    question: "Learning curve thường biểu diễn điều gì?",
    code: "",
    options: [
      "Train/validation score theo kích thước tập train",
      "Residual theo từng feature category",
      "Confusion matrix theo từng threshold",
      "Số lượng class theo từng mốc thời gian"
    ],
    answer: 0,
    explanation: "Learning curve giúp xem thêm dữ liệu có thể cải thiện model hay không và model đang high bias hay high variance."
  },
  {
    id: "meval_a_015",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Bias-Variance Tradeoff Basics",
    question: "Mô hình high variance thường có biểu hiện nào?",
    code: "",
    options: [
      "Train score tốt nhưng validation score kém nhiều",
      "Train score và validation score đều rất kém",
      "Model không thể tạo prediction trên dữ liệu mới",
      "Dataset không có bất kỳ feature nào"
    ],
    answer: 0,
    explanation: "High variance thường tương ứng overfitting: model học quá sát train data và tổng quát hóa kém."
  },
  {
    id: "meval_a_016",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Bias-Variance Tradeoff Basics",
    question: "Mô hình high bias thường có biểu hiện nào?",
    code: "",
    options: [
      "Train score và validation score đều kém",
      "Train score hoàn hảo còn validation bằng 0",
      "Validation score luôn lớn hơn 1",
      "Model không cần target để training"
    ],
    answer: 0,
    explanation: "High bias thường tương ứng underfitting: model quá đơn giản hoặc feature chưa đủ, nên cả train và validation đều kém."
  },
  {
    id: "meval_a_017",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Monitoring Model Performance",
    question: "Sau khi deploy model, vì sao cần monitoring performance?",
    code: "",
    options: [
      "Vì dữ liệu và hành vi thực tế có thể thay đổi",
      "Vì model sau deploy luôn tự cải thiện liên tục",
      "Vì không cần evaluation trước khi deploy model",
      "Vì monitoring thay thế hoàn toàn training"
    ],
    answer: 0,
    explanation: "Model có thể suy giảm do data drift, concept drift hoặc thay đổi quy trình vận hành. Monitoring giúp phát hiện sớm."
  },
  {
    id: "meval_a_018",
    library: "Model Evaluation",
    level: "Advanced",
    topic: "Data Drift Awareness",
    question: "Data drift là gì?",
    code: "",
    options: [
      "Phân phối input features thay đổi so với lúc training",
      "Target column được đổi tên trong source table",
      "Model được train mà không có intercept",
      "Metric được tính sai công thức evaluation"
    ],
    answer: 0,
    explanation: "Data drift xảy ra khi phân phối features trong production khác đáng kể so với training, có thể làm model performance giảm."
  },
  {
    id: "meval_e_001",
    library: "Model Evaluation",
    level: "Expert",
    topic: "Concept Drift Awareness",
    question: "Concept drift khác data drift ở điểm nào?",
    code: "",
    options: [
      "Concept drift là quan hệ X-y đổi, data drift là phân phối X đổi",
      "Concept drift chỉ là missing values trong dữ liệu production",
      "Data drift chỉ xảy ra với regression target liên tục",
      "Hai khái niệm này luôn giống nhau trong mọi bài toán"
    ],
    answer: 0,
    explanation: "Data drift nói về thay đổi phân phối X. Concept drift nói về thay đổi quan hệ giữa X và y, ví dụ cùng một feature pattern nhưng target outcome thay đổi."
  },
  {
    id: "meval_e_002",
    library: "Model Evaluation",
    level: "Expert",
    topic: "Threshold Selection",
    question: "Cách chọn threshold nào hợp lý nhất trong bài toán có chi phí FP và FN khác nhau?",
    code: "",
    options: [
      "Chọn trên validation set theo cost/business trade-off",
      "Luôn dùng threshold 0.5 cho mọi bài toán",
      "Tune nhiều lần trên test set đến khi accuracy cao nhất",
      "Chọn threshold ngẫu nhiên để tránh bias"
    ],
    answer: 0,
    explanation: "Threshold nên chọn trên validation/CV và gắn với chi phí false positive/false negative. Không nên tune threshold trực tiếp trên test set."
  },
  {
    id: "meval_e_003",
    library: "Model Evaluation",
    level: "Expert",
    topic: "Nested Evaluation",
    question: "Khi vừa tune hyperparameter vừa muốn ước lượng performance ít bias hơn, phương pháp nào phù hợp hơn?",
    code: "",
    options: [
      "Nested CV hoặc tách rõ validation/test",
      "Tune trực tiếp nhiều lần trên test set",
      "Báo train score sau khi tuning xong",
      "Fit preprocessing trên toàn bộ data trước CV"
    ],
    answer: 0,
    explanation: "Nested CV hoặc tách validation/test rõ ràng giúp giảm bias khi quá trình chọn model ảnh hưởng đến estimate performance."
  },
  {
    id: "meval_e_004",
    library: "Model Evaluation",
    level: "Expert",
    topic: "Leakage in Cross-validation",
    question: "Trong cross-validation, thao tác nào dễ gây leakage?",
    code: "",
    options: [
      "Fit scaler/encoder trên toàn data trước khi CV",
      "Đặt scaler/encoder trong Pipeline rồi CV",
      "Fit transformer trong từng training fold",
      "Dùng StratifiedKFold cho classification lệch lớp"
    ],
    answer: 0,
    explanation: "Fit preprocessing trên toàn bộ dữ liệu trước CV làm thông tin từ validation folds lọt vào preprocessing. Nên đặt preprocessing trong Pipeline."
  },
  {
    id: "meval_e_005",
    library: "Model Evaluation",
    level: "Expert",
    topic: "Statistical Performance vs Business Usefulness",
    question: "Một model có ROC AUC cao nhưng business impact thấp có thể do nguyên nhân nào?",
    code: "",
    options: [
      "Ranking tốt nhưng threshold/action policy chưa phù hợp",
      "ROC AUC cao luôn đảm bảo profit cao",
      "ROC AUC chỉ dùng cho regression target",
      "Business impact không liên quan đến prediction"
    ],
    answer: 0,
    explanation: "Metric thống kê tốt chưa chắc tạo impact. Cần chuyển score thành hành động đúng, chọn threshold phù hợp cost và kiểm tra ràng buộc vận hành."
  },
  {
    id: "meval_e_006",
    library: "Model Evaluation",
    level: "Expert",
    topic: "Segment-level Evaluation",
    question: "Vì sao chỉ báo metric trung bình toàn bộ có thể nguy hiểm?",
    code: "",
    options: [
      "Vì lỗi ở segment quan trọng có thể bị metric tổng thể che khuất",
      "Vì metric trung bình luôn không thể tính được bằng Python",
      "Vì segment-level evaluation chỉ dùng cho clustering",
      "Vì model không thể tạo prediction theo từng segment"
    ],
    answer: 0,
    explanation: "Metric tổng thể có thể che giấu vấn đề ở nhóm nhỏ nhưng quan trọng. Segment-level evaluation giúp phát hiện rủi ro và bias vận hành."
  }
];