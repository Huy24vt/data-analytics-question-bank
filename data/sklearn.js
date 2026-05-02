const SKLEARN_QUESTIONS = [
  {
    id: "skl_f_001",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Estimator API",
    question: "Trong scikit-learn, phương thức fit() thường dùng để làm gì?",
    code: "",
    options: [
      "Chỉ dùng để vẽ biểu đồ",
      "Học tham số từ dữ liệu",
      "Chỉ dùng để xóa missing",
      "Chỉ dùng để lưu model"
    ],
    answer: 1,
    explanation: "fit() dùng để huấn luyện model hoặc để transformer học tham số từ dữ liệu, ví dụ scaler học mean/std từ tập train. predict() mới dùng để tạo dự đoán."
  },
  {
    id: "skl_f_002",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Scikit-learn Overview",
    question: "Scikit-learn chủ yếu được dùng cho nhóm tác vụ nào?",
    code: "",
    options: [
      "Thiết kế giao diện web",
      "Quản trị database SQL",
      "Machine Learning truyền thống",
      "Deep learning GPU chuyên sâu"
    ],
    answer: 2,
    explanation: "Scikit-learn là thư viện phổ biến cho Machine Learning truyền thống: regression, classification, clustering, preprocessing, model selection và metrics."
  },
  {
    id: "skl_f_003",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Supervised Learning",
    question: "Supervised learning là gì?",
    code: "",
    options: [
      "Học từ features X và target y",
      "Học từ dữ liệu không có target",
      "Chỉ dùng để giảm chiều dữ liệu",
      "Chỉ dùng để đọc file CSV"
    ],
    answer: 0,
    explanation: "Supervised learning học từ dữ liệu có nhãn hoặc target y, ví dụ dự đoán giá trị liên tục hoặc phân loại nhãn."
  },
  {
    id: "skl_f_004",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Unsupervised Learning",
    question: "Unsupervised learning thường xử lý loại dữ liệu nào?",
    code: "",
    options: [
      "Dữ liệu bắt buộc có target y",
      "Dữ liệu chỉ gồm text",
      "Dữ liệu không có target rõ ràng",
      "Dữ liệu đã one-hot encoding"
    ],
    answer: 2,
    explanation: "Unsupervised learning làm việc với dữ liệu không có nhãn/target, ví dụ clustering bằng KMeans hoặc giảm chiều bằng PCA."
  },
  {
    id: "skl_f_005",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Regression vs Classification",
    question: "Bài toán nào sau đây là regression?",
    code: "",
    options: [
      "Dự đoán class A hoặc B",
      "Mã hóa biến category",
      "Dự đoán giá trị số liên tục",
      "Chia dữ liệu thành cụm"
    ],
    answer: 2,
    explanation: "Regression dự đoán giá trị số liên tục, ví dụ amount, score hoặc duration. Classification dự đoán nhãn rời rạc."
  },
  {
    id: "skl_f_006",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Regression vs Classification",
    question: "Bài toán nào sau đây là classification?",
    code: "",
    options: [
      "Dự đoán doanh thu liên tục",
      "Tính trung bình một cột",
      "Dự đoán nhãn 0 hoặc 1",
      "Giảm số chiều features"
    ],
    answer: 2,
    explanation: "Classification dự đoán nhãn/class rời rạc, ví dụ 0/1 hoặc nhiều class. Dự đoán số liên tục là regression."
  },
  {
    id: "skl_f_007",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Features and Target",
    question: "Trong workflow scikit-learn, X và y thường đại diện cho gì?",
    code: "",
    options: [
      "X là target, y là model",
      "X là metric, y là pipeline",
      "X là features, y là target",
      "X là file path, y là seed"
    ],
    answer: 2,
    explanation: "X thường là ma trận features dùng để học, còn y là target hoặc label cần dự đoán."
  },
  {
    id: "skl_f_008",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "fit",
    question: "Trong đoạn code sau, dòng model.fit(X_train, y_train) có mục đích gì?",
    code: "from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)",
    options: [
      "Tạo dự đoán trên test",
      "Tính MAE cho model",
      "Huấn luyện model trên train",
      "Chia dữ liệu train/test"
    ],
    answer: 2,
    explanation: "fit(X_train, y_train) huấn luyện model bằng features và target của tập train."
  },
  {
    id: "skl_f_009",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "predict",
    question: "Phương thức predict() thường dùng để làm gì?",
    code: "",
    options: [
      "Học mean và std",
      "Chia train/test",
      "Tạo dự đoán từ model đã fit",
      "Xóa outlier tự động"
    ],
    answer: 2,
    explanation: "predict() dùng sau khi model đã được fit để tạo dự đoán trên dữ liệu mới hoặc dữ liệu test."
  },
  {
    id: "skl_f_010",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "transform",
    question: "Trong scikit-learn, transform() của transformer thường dùng để làm gì?",
    code: "",
    options: [
      "Huấn luyện classifier",
      "Tính accuracy",
      "Áp dụng biến đổi đã học",
      "Tạo train/test split"
    ],
    answer: 2,
    explanation: "transform() áp dụng biến đổi đã học từ fit(), ví dụ StandardScaler dùng mean/std đã học để scale dữ liệu."
  },
  {
    id: "skl_f_011",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "fit_transform",
    question: "fit_transform() thường tương đương với thao tác nào?",
    code: "",
    options: [
      "predict() rồi score()",
      "train_test_split() rồi fit()",
      "fit() rồi transform()",
      "transform() rồi predict()"
    ],
    answer: 2,
    explanation: "fit_transform() vừa học tham số từ dữ liệu vừa áp dụng transformation lên chính dữ liệu đó."
  },
  {
    id: "skl_f_012",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "train_test_split",
    question: "train_test_split thường dùng để làm gì?",
    code: "",
    options: [
      "Huấn luyện model tuyến tính",
      "Chuẩn hóa features",
      "Chia dữ liệu train và test",
      "Mã hóa biến category"
    ],
    answer: 2,
    explanation: "train_test_split dùng để chia X, y thành dữ liệu huấn luyện và dữ liệu kiểm tra."
  },
  {
    id: "skl_f_013",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "random_state",
    question: "random_state trong train_test_split thường giúp điều gì?",
    code: "",
    options: [
      "Làm model luôn chính xác hơn",
      "Tự động chọn thuật toán",
      "Giúp kết quả có thể tái lập",
      "Xóa dữ liệu trùng lặp"
    ],
    answer: 2,
    explanation: "random_state cố định seed ngẫu nhiên, giúp lần chạy sau chia dữ liệu giống lần chạy trước, thuận tiện cho debug và so sánh."
  },
  {
    id: "skl_f_014",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Train / Validation / Test",
    question: "Tập test nên được dùng với mục đích nào?",
    code: "",
    options: [
      "Tune hyperparameter nhiều lần",
      "Fit scaler trước khi split",
      "Đánh giá cuối cùng của model",
      "Thay thế hoàn toàn tập train"
    ],
    answer: 2,
    explanation: "Test set nên dùng để đánh giá cuối cùng. Việc tune hyperparameter nên dùng validation set hoặc cross-validation để tránh overfit vào test set."
  },
  {
    id: "skl_f_015",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Linear Regression",
    question: "LinearRegression thường dùng cho loại bài toán nào?",
    code: "",
    options: [
      "Classification nhiều lớp",
      "Clustering không nhãn",
      "Regression giá trị liên tục",
      "Mã hóa biến category"
    ],
    answer: 2,
    explanation: "LinearRegression là model supervised learning dùng cho regression, tức dự đoán giá trị số liên tục."
  },
  {
    id: "skl_f_016",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Logistic Regression",
    question: "LogisticRegression trong scikit-learn thường dùng cho bài toán nào?",
    code: "",
    options: [
      "Regression liên tục",
      "Clustering không nhãn",
      "Classification",
      "Missing value imputation"
    ],
    answer: 2,
    explanation: "Dù tên có chữ Regression, LogisticRegression thường dùng cho classification, ví dụ binary classification."
  },
  {
    id: "skl_f_017",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "KMeans",
    question: "KMeans thường dùng để làm gì?",
    code: "",
    options: [
      "Dự đoán giá trị có target",
      "Tính accuracy classifier",
      "Clustering dữ liệu không nhãn",
      "Chia dữ liệu train/test"
    ],
    answer: 2,
    explanation: "KMeans là thuật toán unsupervised learning dùng để phân cụm dữ liệu dựa trên độ gần giữa các điểm."
  },
  {
    id: "skl_f_018",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Classification Metrics Basics",
    question: "accuracy_score thường dùng cho loại bài toán nào?",
    code: "",
    options: [
      "Regression",
      "PCA",
      "Classification",
      "Imputation"
    ],
    answer: 2,
    explanation: "accuracy_score đo tỷ lệ dự đoán đúng trong classification. Với regression thường dùng MAE, MSE, RMSE hoặc R2."
  },
  {
    id: "skl_f_019",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Regression Metrics Basics",
    question: "mean_absolute_error thường dùng để đánh giá loại model nào?",
    code: "",
    options: [
      "Clustering model",
      "OneHotEncoder",
      "Regression model",
      "Train/test splitter"
    ],
    answer: 2,
    explanation: "mean_absolute_error đo sai số tuyệt đối trung bình giữa y thật và y dự đoán trong bài toán regression."
  },
  {
    id: "skl_f_020",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Pipeline",
    question: "Pipeline trong scikit-learn thường giúp ích gì?",
    code: "",
    options: [
      "Tự động tạo target y",
      "Thay thế model evaluation",
      "Gom preprocessing và model",
      "Chỉ dùng để vẽ biểu đồ"
    ],
    answer: 2,
    explanation: "Pipeline giúp gom nhiều bước như scaling, encoding và model vào một object, giảm lỗi và giúp tránh data leakage khi dùng đúng cách."
  },
  {
    id: "skl_i_001",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "train_test_split",
    question: "Đoạn code nào chia dữ liệu thành train và test đúng pattern phổ biến?",
    code: "",
    options: [
      "X_train, y_train = train_test_split(X, y)",
      "model = train_test_split(X, y)",
      "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
      "X_test, y_test = model.fit(X, y)"
    ],
    answer: 2,
    explanation: "train_test_split thường trả về X_train, X_test, y_train, y_test. test_size=0.2 nghĩa là 20% dữ liệu dùng làm test."
  },
  {
    id: "skl_i_002",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "stratify",
    question: "stratify=y trong train_test_split thường hữu ích khi nào?",
    code: "",
    options: [
      "Khi muốn scale numeric features",
      "Khi muốn loại bỏ missing",
      "Khi muốn giữ tỷ lệ class",
      "Khi đổi regression thành classification"
    ],
    answer: 2,
    explanation: "stratify=y giúp train/test giữ phân phối class tương tự nhau, đặc biệt hữu ích với classification có class imbalance."
  },
  {
    id: "skl_i_003",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Data Leakage Basics",
    question: "Cách scale dữ liệu nào tránh data leakage tốt hơn?",
    code: "",
    options: [
      "Fit scaler trên toàn bộ X trước split",
      "Fit scaler riêng trên train và test",
      "Fit scaler trên train, transform train/test",
      "Chỉ scale X_test"
    ],
    answer: 2,
    explanation: "Scaler phải học tham số từ train set. Sau đó dùng cùng scaler để transform train và test. Fit trên toàn bộ X sẽ làm rò rỉ thông tin từ test vào train."
  },
  {
    id: "skl_i_004",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "StandardScaler",
    question: "StandardScaler thường biến đổi numeric feature như thế nào?",
    code: "",
    options: [
      "Chuyển category thành dummy",
      "Xóa tất cả outlier",
      "Trừ mean và chia std",
      "Chuyển target thành probability"
    ],
    answer: 2,
    explanation: "StandardScaler chuẩn hóa feature bằng cách trừ mean và chia cho standard deviation học từ dữ liệu fit."
  },
  {
    id: "skl_i_005",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "MinMaxScaler",
    question: "MinMaxScaler thường dùng để làm gì?",
    code: "",
    options: [
      "Mã hóa target classification",
      "Chọn feature quan trọng",
      "Scale feature về khoảng cố định",
      "Tính confusion matrix"
    ],
    answer: 2,
    explanation: "MinMaxScaler đưa feature về một khoảng cố định như [0, 1], dựa trên min và max học được từ dữ liệu fit."
  },
  {
    id: "skl_i_006",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "OneHotEncoder",
    question: "OneHotEncoder thường dùng cho loại feature nào?",
    code: "",
    options: [
      "Numeric target liên tục",
      "Timestamp index",
      "Categorical feature",
      "Model prediction"
    ],
    answer: 2,
    explanation: "OneHotEncoder chuyển categorical features thành các cột binary để model có thể xử lý."
  },
  {
    id: "skl_i_007",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Label Encoding Awareness",
    question: "Vì sao cần cẩn thận khi label encode feature category không có thứ tự?",
    code: "",
    options: [
      "Vì luôn gây SyntaxError",
      "Vì chỉ dùng cho ảnh",
      "Vì model có thể hiểu nhầm thứ tự",
      "Vì category không dùng được trong ML"
    ],
    answer: 2,
    explanation: "Nếu category không có thứ tự, encode thành 0, 1, 2 có thể khiến một số model hiểu nhầm rằng có quan hệ lớn nhỏ giữa các nhóm."
  },
  {
    id: "skl_i_008",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "SimpleImputer",
    question: "SimpleImputer thường dùng để làm gì?",
    code: "",
    options: [
      "Tạo train/test split",
      "Tính accuracy score",
      "Điền missing values",
      "Huấn luyện RandomForest"
    ],
    answer: 2,
    explanation: "SimpleImputer là transformer dùng để xử lý missing values bằng các chiến lược đơn giản như mean, median hoặc most_frequent."
  },
  {
    id: "skl_i_009",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "ColumnTransformer",
    question: "ColumnTransformer hữu ích nhất khi nào?",
    code: "",
    options: [
      "Khi chỉ có một target",
      "Khi không cần preprocessing",
      "Khi xử lý khác nhau theo nhóm cột",
      "Khi muốn bỏ qua feature"
    ],
    answer: 2,
    explanation: "ColumnTransformer cho phép scale numeric columns, one-hot categorical columns, hoặc xử lý từng nhóm cột bằng transformer khác nhau."
  },
  {
    id: "skl_i_010",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Pipeline",
    question: "Trong Pipeline, bước cuối cùng thường là gì nếu dùng cho supervised learning?",
    code: "",
    options: [
      "Một raw DataFrame",
      "Một string path",
      "Estimator/model",
      "Một metric function"
    ],
    answer: 2,
    explanation: "Các bước trước thường là transformers, còn bước cuối thường là estimator như LogisticRegression hoặc RandomForestClassifier."
  },
  {
    id: "skl_i_011",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Pipeline",
    question: "Lợi ích quan trọng của Pipeline khi dùng cross-validation là gì?",
    code: "",
    options: [
      "Model luôn accuracy 100%",
      "Tự động chọn business metric",
      "Fit preprocessing riêng trong từng fold",
      "Không cần dữ liệu đầu vào"
    ],
    answer: 2,
    explanation: "Pipeline đảm bảo preprocessing nằm trong quy trình CV, transformer chỉ fit trên phần train của từng fold, giảm nguy cơ leakage."
  },
  {
    id: "skl_i_012",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Estimator vs Transformer",
    question: "Trong scikit-learn, transformer thường có method nào?",
    code: "",
    options: [
      "predict() là method chính",
      "score_only()",
      "fit() và transform()",
      "train_test_split()"
    ],
    answer: 2,
    explanation: "Transformer như StandardScaler, OneHotEncoder thường có fit() để học tham số và transform() để biến đổi dữ liệu."
  },
  {
    id: "skl_i_013",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Estimator vs Transformer",
    question: "Model classifier như LogisticRegression thường có method nào sau khi fit?",
    code: "",
    options: [
      "transform() là method chính",
      "read_csv()",
      "predict()",
      "split()"
    ],
    answer: 2,
    explanation: "Classifier là estimator dùng fit() để học và predict() để dự đoán class. Một số estimator có thêm predict_proba()."
  },
  {
    id: "skl_i_014",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Decision Tree",
    question: "DecisionTreeClassifier thường dùng cho tác vụ nào?",
    code: "",
    options: [
      "Regression metric",
      "Scaling numeric feature",
      "Classification",
      "One-hot encoding"
    ],
    answer: 2,
    explanation: "DecisionTreeClassifier là model supervised learning dùng cho classification. Với regression có DecisionTreeRegressor."
  },
  {
    id: "skl_i_015",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Random Forest",
    question: "RandomForestClassifier là mô hình thuộc nhóm nào?",
    code: "",
    options: [
      "Scaler cho numeric feature",
      "Encoder cho category",
      "Ensemble nhiều decision trees",
      "Metric regression"
    ],
    answer: 2,
    explanation: "Random Forest là ensemble method, kết hợp nhiều decision trees để giảm variance và cải thiện khả năng tổng quát hóa."
  },
  {
    id: "skl_i_016",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "KNN Basics",
    question: "Ý tưởng cơ bản của KNN là gì?",
    code: "",
    options: [
      "Fit một đường thẳng duy nhất",
      "Fill missing values",
      "Dự đoán bằng điểm gần nhất",
      "Scale dữ liệu"
    ],
    answer: 2,
    explanation: "KNN dựa trên khoảng cách tới các điểm gần nhất để phân loại hoặc dự đoán."
  },
  {
    id: "skl_i_017",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Naive Bayes Basics",
    question: "Naive Bayes thường được biết đến như loại model nào?",
    code: "",
    options: [
      "Scaler cho numeric columns",
      "Clustering algorithm",
      "Model xác suất cho classification",
      "Hyperparameter search tool"
    ],
    answer: 2,
    explanation: "Naive Bayes là nhóm model xác suất, thường dùng cho classification, đặc biệt phổ biến trong text classification cơ bản."
  },
  {
    id: "skl_i_018",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "SVM Basics",
    question: "SVM classifier cố gắng tìm điều gì ở mức ý tưởng cơ bản?",
    code: "",
    options: [
      "Giá trị missing để điền",
      "Số lượng cột category",
      "Decision boundary tốt",
      "Một file model để lưu"
    ],
    answer: 2,
    explanation: "SVM tìm decision boundary, thường là hyperplane, nhằm phân tách các class với margin tốt."
  },
  {
    id: "skl_i_019",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "KMeans",
    question: "Trong KMeans, n_clusters đại diện cho điều gì?",
    code: "",
    options: [
      "Số cột numeric",
      "Số lần train/test split",
      "Số cụm muốn tạo",
      "Số target regression"
    ],
    answer: 2,
    explanation: "n_clusters là hyperparameter xác định số cụm KMeans cần tìm."
  },
  {
    id: "skl_i_020",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "PCA Basics",
    question: "PCA thường được dùng để làm gì?",
    code: "",
    options: [
      "Tạo nhãn classification",
      "Tính accuracy score",
      "Giảm chiều dữ liệu",
      "Điền missing bằng median"
    ],
    answer: 2,
    explanation: "PCA là kỹ thuật unsupervised dùng để giảm chiều, tạo các principal components giữ nhiều phương sai của dữ liệu."
  },
  {
    id: "skl_i_021",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Cross-validation",
    question: "Cross-validation giúp giải quyết vấn đề gì?",
    code: "",
    options: [
      "Loại bỏ hoàn toàn test set",
      "Tự động làm sạch dữ liệu",
      "Đánh giá ổn định hơn nhiều lần chia",
      "Biến classification thành regression"
    ],
    answer: 2,
    explanation: "Cross-validation đánh giá model trên nhiều fold, giúp kết quả ít phụ thuộc vào một lần chia dữ liệu duy nhất."
  },
  {
    id: "skl_i_022",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Hyperparameter Tuning",
    question: "Hyperparameter khác parameter model ở điểm nào?",
    code: "",
    options: [
      "Hyperparameter luôn là target y",
      "Parameter chỉ dùng trong pandas",
      "Hyperparameter đặt trước fit",
      "Hai khái niệm giống nhau"
    ],
    answer: 2,
    explanation: "Ví dụ max_depth là hyperparameter của tree, còn hệ số learned coefficients của LinearRegression là parameters học từ dữ liệu."
  },
  {
    id: "skl_i_023",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "GridSearchCV",
    question: "GridSearchCV thường dùng để làm gì?",
    code: "",
    options: [
      "Chỉ để chia train/test",
      "Chỉ để scale numeric",
      "Thử nhiều hyperparameter bằng CV",
      "Chỉ để lưu model"
    ],
    answer: 2,
    explanation: "GridSearchCV duyệt qua các tổ hợp hyperparameters trong grid và đánh giá bằng cross-validation."
  },
  {
    id: "skl_i_024",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "RandomizedSearchCV",
    question: "RandomizedSearchCV khác GridSearchCV chủ yếu ở điểm nào?",
    code: "",
    options: [
      "Không dùng cross-validation",
      "Chỉ dùng cho regression",
      "Lấy mẫu ngẫu nhiên tổ hợp tham số",
      "Không cần estimator"
    ],
    answer: 2,
    explanation: "RandomizedSearchCV hữu ích khi không gian tìm kiếm lớn vì chỉ thử một số tổ hợp ngẫu nhiên được chỉ định."
  },
  {
    id: "skl_i_025",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Classification Metrics Basics",
    question: "Nếu dataset classification bị mất cân bằng class mạnh, chỉ nhìn accuracy có thể gây vấn đề gì?",
    code: "",
    options: [
      "Accuracy luôn bằng 0",
      "Accuracy chỉ dùng cho regression",
      "Accuracy cao nhưng bỏ sót class thiểu số",
      "Accuracy tự động sửa imbalance"
    ],
    answer: 2,
    explanation: "Với imbalanced data, model có thể đoán class đa số và vẫn đạt accuracy cao. Nên xem thêm precision, recall, F1, confusion matrix."
  },
  {
    id: "skl_i_026",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Regression Metrics Basics",
    question: "R2 score có ý nghĩa chung là gì?",
    code: "",
    options: [
      "Tỷ lệ class dự đoán đúng",
      "Số cụm tối ưu KMeans",
      "Mức model giải thích biến thiên target",
      "Số missing đã impute"
    ],
    answer: 2,
    explanation: "R2 đo mức độ model giải thích phương sai của target. R2 càng cao thường càng tốt, nhưng cần kết hợp với metric lỗi như MAE/RMSE."
  },
  {
    id: "skl_i_027",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Regression Metrics Basics",
    question: "MAE khác MSE ở điểm nào?",
    code: "",
    options: [
      "MAE chỉ dùng classification",
      "MSE không phụ thuộc lỗi",
      "MAE dùng trị tuyệt đối, MSE bình phương lỗi",
      "MAE luôn lớn hơn MSE"
    ],
    answer: 2,
    explanation: "MAE dễ hiểu vì cùng đơn vị với target. MSE bình phương lỗi nên phạt lỗi lớn mạnh hơn."
  },
  {
    id: "skl_i_028",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Feature Importance",
    question: "feature_importances_ thường có ở nhóm model nào trong scikit-learn?",
    code: "",
    options: [
      "StandardScaler",
      "OneHotEncoder",
      "Một số tree-based models",
      "train_test_split"
    ],
    answer: 2,
    explanation: "Tree-based models thường có feature_importances_ sau khi fit. Tuy nhiên cần hiểu đúng và không xem đó là giải thích duy nhất của model."
  },
  {
    id: "skl_i_029",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Saving Model Basics",
    question: "Khi lưu model để inference, nên lưu gì nếu workflow có preprocessing?",
    code: "",
    options: [
      "Chỉ y_test",
      "Chỉ raw CSV",
      "Toàn bộ Pipeline",
      "Chỉ accuracy score"
    ],
    answer: 2,
    explanation: "Lưu toàn bộ Pipeline giúp inference dùng đúng preprocessing đã fit ở training, giảm lỗi lệch schema hoặc scale sai."
  },
  {
    id: "skl_i_030",
    library: "Scikit-learn",
    level: "Intermediate",
    topic: "Inference Pipeline",
    question: "Khi inference trên dữ liệu mới, điều nào quan trọng nhất?",
    code: "",
    options: [
      "Fit lại scaler từng dòng mới",
      "Tune tiếp trên test set",
      "Schema features phải phù hợp",
      "Bỏ qua preprocessing lúc train"
    ],
    answer: 2,
    explanation: "Input schema cần ổn định và preprocessing lúc inference phải nhất quán với training. Không nên fit lại transformer trên dữ liệu mới từng batch nếu không có quy trình retraining."
  },
  {
    id: "skl_a_001",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Pipeline",
    question: "Trong Pipeline sau, khi gọi pipe.fit(X_train, y_train), bước nào được fit trước?",
    code: "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\npipe = Pipeline([\n    (\"scaler\", StandardScaler()),\n    (\"model\", LogisticRegression())\n])",
    options: [
      "model fit trước scaler",
      "Không bước nào được fit",
      "scaler fit/transform trước model",
      "Chỉ scaler được fit"
    ],
    answer: 2,
    explanation: "Pipeline chạy theo thứ tự. Transformer scaler fit/transform X_train trước, sau đó LogisticRegression fit trên dữ liệu đã transform."
  },
  {
    id: "skl_a_002",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "ColumnTransformer",
    question: "ColumnTransformer thường được đặt ở đâu trong Pipeline supervised learning?",
    code: "",
    options: [
      "Sau bước predict",
      "Sau metric evaluation",
      "Là bước preprocessing trước model",
      "Thay thế target y"
    ],
    answer: 2,
    explanation: "ColumnTransformer thường là bước đầu trong Pipeline để xử lý numeric/categorical columns trước khi đưa vào model."
  },
  {
    id: "skl_a_003",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Data Leakage Basics",
    question: "Tình huống nào là data leakage?",
    code: "",
    options: [
      "Fit imputer trên X_train",
      "Dùng Pipeline trong CV",
      "Fit imputer trước khi split",
      "Dùng random_state"
    ],
    answer: 2,
    explanation: "Fit imputer trên toàn bộ dataset làm thông tin từ test ảnh hưởng đến preprocessing, gây data leakage."
  },
  {
    id: "skl_a_004",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "GridSearchCV",
    question: "Khi tune Pipeline bằng GridSearchCV, tên hyperparameter thường có dạng nào?",
    code: "pipe = Pipeline([\n    (\"model\", RandomForestClassifier())\n])",
    options: [
      "model.max_depth",
      "max_depth__model",
      "model__max_depth",
      "RandomForestClassifier.max_depth"
    ],
    answer: 2,
    explanation: "Trong Pipeline, tham số của step được truy cập bằng cú pháp step_name__parameter, ví dụ model__max_depth."
  },
  {
    id: "skl_a_005",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Cross-validation",
    question: "Vì sao không nên chọn hyperparameter bằng cách thử nhiều lần trực tiếp trên test set?",
    code: "",
    options: [
      "Vì test set không có dữ liệu",
      "Vì sklearn cấm predict test",
      "Vì test set sẽ thành validation set",
      "Vì hyperparameter chỉ dùng unsupervised"
    ],
    answer: 2,
    explanation: "Nếu liên tục chọn hyperparameter dựa trên test performance, model đã gián tiếp overfit vào test set. Nên dùng validation/CV để tune."
  },
  {
    id: "skl_a_006",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "make_pipeline Basics",
    question: "make_pipeline khác Pipeline khai báo tay ở điểm nào?",
    code: "",
    options: [
      "Không thể dùng scaler",
      "Chỉ dùng cho clustering",
      "Tự đặt tên step",
      "Không hỗ trợ fit"
    ],
    answer: 2,
    explanation: "make_pipeline tạo Pipeline nhanh và tự sinh tên step. Pipeline khai báo tay cho phép đặt tên step rõ ràng hơn."
  },
  {
    id: "skl_a_007",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "OneHotEncoder",
    question: "Trong production/inference, vì sao OneHotEncoder thường cần xử lý unknown categories?",
    code: "",
    options: [
      "Vì encoder chỉ nhận target",
      "Vì category luôn missing",
      "Vì dữ liệu mới có category lạ",
      "Vì accuracy luôn về 0"
    ],
    answer: 2,
    explanation: "Dữ liệu mới có thể có category chưa xuất hiện trong train. Cần cấu hình phù hợp như handle_unknown để tránh lỗi inference, tùy version/API sử dụng."
  },
  {
    id: "skl_a_008",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Feature Selection Basics",
    question: "Mục tiêu chính của feature selection là gì?",
    code: "",
    options: [
      "Tạo thêm target y mới",
      "Luôn tăng số features",
      "Chọn subset features hữu ích",
      "Thay thế model evaluation"
    ],
    answer: 2,
    explanation: "Feature selection giúp chọn các biến có ích hơn, có thể giảm overfitting, giảm chi phí tính toán và giúp model dễ giải thích hơn."
  },
  {
    id: "skl_a_009",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "PCA Basics",
    question: "Khi dùng PCA, vì sao scaling features thường quan trọng?",
    code: "",
    options: [
      "Vì PCA chỉ nhận category",
      "Vì PCA là metric classification",
      "Vì PCA nhạy với scale feature",
      "Vì target phải là string"
    ],
    answer: 2,
    explanation: "PCA dựa trên phương sai và hướng trong không gian feature, nên feature có scale lớn có thể chi phối kết quả nếu không được scale phù hợp."
  },
  {
    id: "skl_a_010",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "KMeans",
    question: "Vì sao StandardScaler thường được dùng trước KMeans với numeric features?",
    code: "",
    options: [
      "Vì input phải mean bằng 0",
      "Vì KMeans là supervised",
      "Vì KMeans nhạy với scale",
      "Vì KMeans cần target y"
    ],
    answer: 2,
    explanation: "KMeans dùng khoảng cách để phân cụm. Nếu một feature có scale lớn hơn nhiều, nó có thể chi phối khoảng cách."
  },
  {
    id: "skl_a_011",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Clustering Evaluation Basics",
    question: "Khi không có nhãn thật, đánh giá clustering thường khó vì lý do nào?",
    code: "",
    options: [
      "Clustering không tạo output",
      "KMeans không có hyperparameter",
      "Không có target để so sánh trực tiếp",
      "Unsupervised không cần dữ liệu"
    ],
    answer: 2,
    explanation: "Không có ground truth label nên cần dùng metric nội tại như silhouette hoặc đánh giá bằng insight/business logic, tùy bối cảnh."
  },
  {
    id: "skl_a_012",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Random Forest",
    question: "max_depth trong DecisionTree/RandomForest là gì?",
    code: "",
    options: [
      "Parameter học từ scaler",
      "Số dòng trong test set",
      "Hyperparameter giới hạn độ sâu cây",
      "Metric classification"
    ],
    answer: 2,
    explanation: "max_depth kiểm soát độ sâu tối đa của tree. Giới hạn depth có thể giúp giảm overfitting."
  },
  {
    id: "skl_a_013",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Random Forest",
    question: "n_estimators trong RandomForest thường đại diện cho gì?",
    code: "",
    options: [
      "Số target classes",
      "Số missing values",
      "Số trees trong forest",
      "Số folds bắt buộc"
    ],
    answer: 2,
    explanation: "n_estimators là số cây trong RandomForest. Đây là hyperparameter thường được tune."
  },
  {
    id: "skl_a_014",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Logistic Regression",
    question: "Với LogisticRegression cho binary classification, predict_proba thường trả về gì?",
    code: "",
    options: [
      "Feature importance tree",
      "Giá trị target liên tục",
      "Xác suất cho từng class",
      "Dữ liệu đã scale"
    ],
    answer: 2,
    explanation: "predict_proba trả về xác suất theo từng class cho mỗi observation, nếu model hỗ trợ method này."
  },
  {
    id: "skl_a_015",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Classification Metrics Basics",
    question: "Trong binary classification, recall của positive class tập trung vào điều gì?",
    code: "",
    options: [
      "Trong predicted positive, bao nhiêu đúng",
      "Sai số tuyệt đối trung bình",
      "Trong actual positive, bắt đúng bao nhiêu",
      "Tỷ lệ phương sai target"
    ],
    answer: 2,
    explanation: "Recall = TP / (TP + FN), đo khả năng bắt được positive cases thật. Precision đo độ đúng trong predicted positives."
  },
  {
    id: "skl_a_016",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Classification Metrics Basics",
    question: "Precision của positive class tập trung vào điều gì?",
    code: "",
    options: [
      "Trong actual positives, bắt được bao nhiêu",
      "Sai số bình phương trung bình",
      "Trong predicted positives, bao nhiêu đúng",
      "Số cụm tối ưu"
    ],
    answer: 2,
    explanation: "Precision = TP / (TP + FP), đo độ tin cậy của các dự đoán positive."
  },
  {
    id: "skl_a_017",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Regression Metrics Basics",
    question: "Vì sao RMSE thường nhạy với lỗi lớn hơn MAE?",
    code: "",
    options: [
      "Vì RMSE chỉ dùng classification",
      "Vì RMSE bỏ qua lỗi lớn",
      "Vì RMSE dựa trên bình phương lỗi",
      "Vì MAE luôn bằng 0"
    ],
    answer: 2,
    explanation: "RMSE phạt lỗi lớn mạnh hơn vì lỗi được bình phương trong MSE trước khi lấy căn."
  },
  {
    id: "skl_a_018",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Model Interpretability Basics",
    question: "Điều nào đúng khi dùng feature_importances_ để giải thích model tree-based?",
    code: "",
    options: [
      "Nó chứng minh feature gây ra target",
      "Nó chỉ tồn tại trước khi fit",
      "Nó hữu ích nhưng cần diễn giải cẩn thận",
      "Nó luôn giống nhau với mọi model"
    ],
    answer: 2,
    explanation: "Feature importance cho biết mức đóng góp theo cơ chế model, không chứng minh causal relationship và cần diễn giải cẩn thận."
  },
  {
    id: "skl_a_019",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Common Errors",
    question: "Lỗi phổ biến nào xảy ra khi số cột của dữ liệu inference khác lúc training?",
    code: "",
    options: [
      "Model tự đoán ý nghĩa cột mới",
      "Accuracy tự động tăng",
      "Input schema không khớp",
      "Sklearn tự train lại model"
    ],
    answer: 2,
    explanation: "Model đã fit kỳ vọng số lượng và thứ tự features nhất quán. Dữ liệu inference lệch schema dễ gây lỗi hoặc dự đoán sai."
  },
  {
    id: "skl_a_020",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Common Errors",
    question: "Vì sao fit_transform(X_test) với scaler riêng trên test set là sai trong evaluation chuẩn?",
    code: "",
    options: [
      "Vì scaler không có fit_transform",
      "Vì X_test luôn là target",
      "Vì test bị scale theo thống kê riêng",
      "Vì chỉ classifier dùng fit_transform"
    ],
    answer: 2,
    explanation: "Scaler phải fit trên train set rồi dùng cùng thống kê đó để transform test set. Fit riêng trên test làm evaluation không phản ánh inference thực tế."
  },
  {
    id: "skl_a_021",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Model Training Workflow",
    question: "Thứ tự workflow nào hợp lý cho supervised ML cơ bản?",
    code: "",
    options: [
      "Evaluate → split → predict → fit",
      "Fit test → tune test → báo train score",
      "Split → fit train → predict test → evaluate",
      "Scale all data → xóa target → evaluate"
    ],
    answer: 2,
    explanation: "Workflow chuẩn là chia dữ liệu, fit trên train, predict trên test, sau đó evaluate bằng metric phù hợp."
  },
  {
    id: "skl_a_022",
    library: "Scikit-learn",
    level: "Advanced",
    topic: "Best Practice for Data Analytics ML Workflow",
    question: "Khi trình bày kết quả model cho stakeholder, điều nào nên có ngoài metric?",
    code: "",
    options: [
      "Chỉ báo một con số accuracy",
      "Ẩn cách chia dữ liệu",
      "Giải thích metric, baseline và limitation",
      "Không cần nói features"
    ],
    answer: 2,
    explanation: "Một báo cáo ML tốt nên có metric, baseline, cách split/evaluation, insight quan trọng và limitation để stakeholder hiểu đúng mức độ tin cậy."
  },
  {
    id: "skl_e_001",
    library: "Scikit-learn",
    level: "Expert",
    topic: "Pipeline Parameter Naming",
    question: "Với Pipeline có bước tên là preprocess và model, tham số C của LogisticRegression ở bước model nên được đặt trong GridSearchCV như thế nào?",
    code: "pipe = Pipeline([\n    (\"preprocess\", preprocessor),\n    (\"model\", LogisticRegression())\n])",
    options: [
      "preprocess__C",
      "LogisticRegression__C",
      "model__C",
      "C__model"
    ],
    answer: 2,
    explanation: "Tham số của một step trong Pipeline được đặt theo cú pháp step_name__parameter. Vì LogisticRegression nằm ở step model, dùng model__C."
  },
  {
    id: "skl_e_002",
    library: "Scikit-learn",
    level: "Expert",
    topic: "Data Leakage Basics",
    question: "Trong cross-validation, cách nào giảm leakage tốt nhất khi có preprocessing?",
    code: "",
    options: [
      "Fit preprocessing trên toàn bộ X trước CV",
      "Fit scaler trên test fold riêng",
      "Đưa preprocessing và model vào Pipeline",
      "Bỏ preprocessing khỏi validation"
    ],
    answer: 2,
    explanation: "Khi preprocessing nằm trong Pipeline, mỗi fold chỉ fit preprocessing trên training fold, rồi transform validation fold, giúp giảm leakage."
  },
  {
    id: "skl_e_003",
    library: "Scikit-learn",
    level: "Expert",
    topic: "Nested Model Selection",
    question: "Khi vừa tune hyperparameter vừa muốn ước lượng performance ít bias hơn, hướng tiếp cận nào phù hợp hơn?",
    code: "",
    options: [
      "Tune trực tiếp trên test nhiều lần",
      "Chỉ báo train score",
      "Dùng nested CV hoặc validation/test rõ",
      "Fit scaler toàn bộ trước split"
    ],
    answer: 2,
    explanation: "Nested CV hoặc tách rõ validation/test giúp giảm bias khi vừa chọn model vừa đánh giá performance."
  },
  {
    id: "skl_e_004",
    library: "Scikit-learn",
    level: "Expert",
    topic: "Inference Pipeline",
    question: "Vì sao lưu riêng model mà không lưu preprocessing có thể gây lỗi inference?",
    code: "",
    options: [
      "Vì model không thể predict sau fit",
      "Vì preprocessing chỉ dùng visualization",
      "Vì dữ liệu mới không transform giống train",
      "Vì model luôn chứa raw data"
    ],
    answer: 2,
    explanation: "Nếu không lưu preprocessing đã fit, dữ liệu inference có thể scale/encode khác training, làm dự đoán sai hoặc lỗi schema."
  },
  {
    id: "skl_e_005",
    library: "Scikit-learn",
    level: "Expert",
    topic: "ColumnTransformer",
    question: "Nếu ColumnTransformer one-hot encode categorical columns và scale numeric columns, output thường có đặc điểm gì?",
    code: "",
    options: [
      "Chỉ giữ lại target y",
      "Tự động trả về accuracy",
      "Ghép output thành feature matrix",
      "Luôn giữ nguyên DataFrame ban đầu"
    ],
    answer: 2,
    explanation: "ColumnTransformer áp dụng transformer theo nhóm cột rồi concatenate output thành feature matrix để đưa vào model."
  },
  {
    id: "skl_e_006",
    library: "Scikit-learn",
    level: "Expert",
    topic: "Model Interpretability Basics",
    question: "Vì sao coefficient của LogisticRegression chỉ nên so sánh trực tiếp khi features đã được scale phù hợp?",
    code: "",
    options: [
      "Vì LogisticRegression không có coefficient",
      "Vì coefficient chỉ dùng KMeans",
      "Vì coefficient phụ thuộc scale feature",
      "Vì scale không ảnh hưởng coefficient"
    ],
    answer: 2,
    explanation: "Feature scale ảnh hưởng độ lớn coefficient. Nếu features có scale rất khác nhau, so sánh trực tiếp coefficient có thể gây hiểu nhầm."
  },
  {
    id: "skl_e_007",
    library: "Scikit-learn",
    level: "Expert",
    topic: "Clustering Evaluation Basics",
    question: "Vì sao chọn số cụm KMeans chỉ dựa vào inertia thấp nhất có thể không hợp lý?",
    code: "",
    options: [
      "Vì inertia chỉ tăng khi thêm cụm",
      "Vì KMeans không có inertia",
      "Vì inertia thường giảm khi K tăng",
      "Vì số cụm càng lớn luôn tốt"
    ],
    answer: 2,
    explanation: "Inertia giảm khi K tăng, nên chỉ chọn inertia thấp nhất thường dẫn đến quá nhiều cụm. Cần xem elbow, silhouette và ý nghĩa thực tế."
  },
  {
    id: "skl_e_008",
    library: "Scikit-learn",
    level: "Expert",
    topic: "Best Practice for Data Analytics ML Workflow",
    question: "Trong một analytics ML project, artifact nào nên được version cùng với model để inference ổn định hơn?",
    code: "",
    options: [
      "Chỉ screenshot biểu đồ",
      "Chỉ notebook output cuối",
      "Schema, preprocessing và config",
      "Chỉ tên thuật toán"
    ],
    answer: 2,
    explanation: "Inference ổn định cần biết schema, preprocessing đã fit, model artifact, version thư viện hoặc config quan trọng để tái lập và kiểm soát thay đổi."
  }
];