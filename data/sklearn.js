const SKLEARN_QUESTIONS = [
  {
    id: "skl_f_001",
    library: "Scikit-learn",
    level: "Foundation",
    topic: "Estimator API",
    question: "Trong scikit-learn, phương thức fit() thường dùng để làm gì?",
    code: "",
    options: [
      "Huấn luyện model hoặc học tham số từ dữ liệu",
      "Chỉ dùng để vẽ biểu đồ",
      "Chỉ dùng để xóa dữ liệu bị thiếu",
      "Chỉ dùng để lưu file model"
    ],
    answer: 0,
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
      "Machine Learning truyền thống như regression, classification, clustering và preprocessing",
      "Thiết kế giao diện web frontend",
      "Huấn luyện deep learning GPU chuyên sâu thay thế PyTorch",
      "Quản trị cơ sở dữ liệu SQL"
    ],
    answer: 0,
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
      "Học từ dữ liệu có cả features X và target y",
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
      "Dữ liệu có features nhưng không có target y rõ ràng",
      "Dữ liệu bắt buộc có target y",
      "Chỉ dữ liệu dạng text",
      "Chỉ dữ liệu đã được one-hot encoding"
    ],
    answer: 0,
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
      "Dự đoán một giá trị số liên tục",
      "Dự đoán class A hoặc B",
      "Chia dữ liệu thành các cụm không nhãn",
      "Mã hóa biến category"
    ],
    answer: 0,
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
      "Dự đoán nhãn 0 hoặc 1",
      "Dự đoán doanh thu dạng số liên tục",
      "Tính trung bình của một cột",
      "Giảm số chiều features"
    ],
    answer: 0,
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
      "X là features, y là target",
      "X là target, y là model",
      "X là metric, y là pipeline",
      "X là file path, y là random_state"
    ],
    answer: 0,
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
      "Huấn luyện model trên tập train",
      "Tạo dự đoán trên tập test",
      "Tính MAE",
      "Chia dữ liệu train/test"
    ],
    answer: 0,
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
      "Tạo dự đoán từ model đã fit",
      "Học mean và standard deviation",
      "Chia dữ liệu thành train/test",
      "Xóa outlier tự động"
    ],
    answer: 0,
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
      "Áp dụng phép biến đổi đã học lên dữ liệu",
      "Huấn luyện classifier",
      "Tính accuracy",
      "Tạo train/test split"
    ],
    answer: 0,
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
      "fit() rồi transform() trên cùng dữ liệu",
      "predict() rồi score()",
      "train_test_split() rồi fit()",
      "transform() rồi predict()"
    ],
    answer: 0,
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
      "Chia dữ liệu thành tập train và tập test",
      "Huấn luyện model tuyến tính",
      "Chuẩn hóa features",
      "Mã hóa biến category"
    ],
    answer: 0,
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
      "Giúp kết quả chia dữ liệu có thể tái lập",
      "Làm model luôn chính xác hơn",
      "Tự động chọn thuật toán tốt nhất",
      "Xóa dữ liệu trùng lặp"
    ],
    answer: 0,
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
      "Đánh giá cuối cùng sau khi chọn model và hyperparameter",
      "Dùng nhiều lần để chọn hyperparameter tốt nhất",
      "Fit scaler trước khi split dữ liệu",
      "Thay thế hoàn toàn tập train"
    ],
    answer: 0,
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
      "Regression dự đoán giá trị số liên tục",
      "Classification nhiều lớp",
      "Clustering không nhãn",
      "Mã hóa biến category"
    ],
    answer: 0,
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
      "Classification",
      "Regression tuyến tính liên tục",
      "Clustering",
      "Missing value imputation"
    ],
    answer: 0,
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
      "Clustering dữ liệu không có nhãn",
      "Dự đoán giá trị liên tục có target",
      "Tính accuracy cho classifier",
      "Chia dữ liệu train/test"
    ],
    answer: 0,
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
      "Classification",
      "Regression",
      "PCA",
      "Imputation"
    ],
    answer: 0,
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
      "Regression model",
      "Clustering model",
      "OneHotEncoder",
      "Train/test splitter"
    ],
    answer: 0,
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
      "Gom preprocessing và model training/prediction vào một workflow nhất quán",
      "Tự động tạo target y",
      "Thay thế hoàn toàn việc đánh giá model",
      "Chỉ dùng để vẽ biểu đồ"
    ],
    answer: 0,
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
      "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
      "X_train, y_train = train_test_split(X, y)",
      "model = train_test_split(X, y)",
      "X_test, y_test = model.fit(X, y)"
    ],
    answer: 0,
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
      "Khi muốn giữ tỷ lệ class giữa train và test gần giống dữ liệu gốc",
      "Khi muốn scale numeric features",
      "Khi muốn chuyển regression thành classification",
      "Khi muốn loại bỏ missing values"
    ],
    answer: 0,
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
      "Fit scaler trên X_train, sau đó transform X_train và X_test",
      "Fit scaler trên toàn bộ X trước khi train_test_split",
      "Fit scaler riêng biệt trên X_train và X_test",
      "Chỉ scale X_test"
    ],
    answer: 0,
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
      "Trừ mean và chia cho standard deviation",
      "Chuyển category thành dummy variables",
      "Xóa tất cả outlier",
      "Chuyển target thành probability"
    ],
    answer: 0,
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
      "Scale numeric features về một khoảng, thường là 0 đến 1",
      "Mã hóa target classification",
      "Tự động chọn feature quan trọng",
      "Tính confusion matrix"
    ],
    answer: 0,
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
      "Categorical feature",
      "Numeric target liên tục",
      "Timestamp index bắt buộc",
      "Model prediction"
    ],
    answer: 0,
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
      "Vì model có thể hiểu nhầm các số được encode là có quan hệ thứ tự",
      "Vì label encoding luôn gây SyntaxError",
      "Vì label encoding chỉ dùng cho ảnh",
      "Vì category không thể dùng trong Machine Learning"
    ],
    answer: 0,
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
      "Điền missing values bằng chiến lược như mean, median hoặc most_frequent",
      "Tạo train/test split",
      "Tính accuracy",
      "Huấn luyện RandomForest"
    ],
    answer: 0,
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
      "Khi cần áp dụng preprocessing khác nhau cho các nhóm cột khác nhau",
      "Khi chỉ có một cột target",
      "Khi không cần preprocessing",
      "Khi muốn bỏ qua toàn bộ feature"
    ],
    answer: 0,
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
      "Estimator/model có thể fit và predict",
      "Một raw DataFrame",
      "Một string path",
      "Một metric function"
    ],
    answer: 0,
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
      "Preprocessing được fit riêng trong từng fold train, giúp giảm data leakage",
      "Pipeline làm model luôn đạt accuracy 100%",
      "Pipeline tự động chọn business metric",
      "Pipeline không cần dữ liệu đầu vào"
    ],
    answer: 0,
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
      "fit() và transform()",
      "predict() là method chính",
      "score_only()",
      "train_test_split()"
    ],
    answer: 0,
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
      "predict()",
      "transform() là method chính bắt buộc",
      "read_csv()",
      "split()"
    ],
    answer: 0,
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
      "Classification",
      "Regression metric",
      "Scaling numeric feature",
      "One-hot encoding"
    ],
    answer: 0,
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
      "Ensemble model kết hợp nhiều decision trees",
      "Một scaler cho numeric feature",
      "Một encoder cho category",
      "Một metric regression"
    ],
    answer: 0,
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
      "Dự đoán dựa trên các điểm dữ liệu gần nhất",
      "Luôn fit một đường thẳng duy nhất",
      "Chỉ dùng để fill missing values",
      "Chỉ dùng để scale dữ liệu"
    ],
    answer: 0,
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
      "Model xác suất thường dùng cho classification",
      "Scaler cho numeric columns",
      "Clustering algorithm",
      "Hyperparameter search tool"
    ],
    answer: 0,
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
      "Một decision boundary phân tách các class tốt",
      "Giá trị missing để điền vào dữ liệu",
      "Số lượng cột category",
      "Một file model để lưu"
    ],
    answer: 0,
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
      "Số cụm muốn tạo",
      "Số cột numeric",
      "Số lần train/test split",
      "Số target trong regression"
    ],
    answer: 0,
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
      "Giảm chiều dữ liệu bằng cách tạo các components mới",
      "Tạo nhãn classification",
      "Tính accuracy",
      "Điền missing values bằng median"
    ],
    answer: 0,
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
      "Đánh giá model ổn định hơn trên nhiều cách chia train/validation",
      "Loại bỏ hoàn toàn nhu cầu test set",
      "Tự động làm sạch dữ liệu sai",
      "Biến classification thành regression"
    ],
    answer: 0,
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
      "Hyperparameter được đặt trước quá trình fit, còn parameter thường được học từ dữ liệu",
      "Hyperparameter luôn là target y",
      "Parameter chỉ dùng trong pandas",
      "Hai khái niệm này hoàn toàn giống nhau"
    ],
    answer: 0,
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
      "Thử nhiều tổ hợp hyperparameters bằng cross-validation",
      "Chỉ để chia train/test",
      "Chỉ để scale numeric feature",
      "Chỉ để lưu model"
    ],
    answer: 0,
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
      "RandomizedSearchCV lấy mẫu ngẫu nhiên một số tổ hợp hyperparameters thay vì thử toàn bộ grid",
      "RandomizedSearchCV không dùng cross-validation",
      "RandomizedSearchCV chỉ dùng cho regression",
      "RandomizedSearchCV không cần estimator"
    ],
    answer: 0,
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
      "Accuracy có thể cao nhưng model dự đoán kém class thiểu số",
      "Accuracy luôn bằng 0",
      "Accuracy chỉ dùng được cho regression",
      "Accuracy tự động sửa imbalance"
    ],
    answer: 0,
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
      "Mức độ model giải thích biến thiên của target so với baseline",
      "Tỷ lệ class dự đoán đúng",
      "Số cụm tối ưu của KMeans",
      "Số missing values đã được impute"
    ],
    answer: 0,
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
      "MAE lấy trung bình trị tuyệt đối lỗi, MSE lấy trung bình bình phương lỗi",
      "MAE chỉ dùng cho classification",
      "MSE không phụ thuộc lỗi dự đoán",
      "MAE luôn lớn hơn MSE"
    ],
    answer: 0,
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
      "Một số tree-based models như DecisionTree và RandomForest",
      "StandardScaler",
      "OneHotEncoder",
      "train_test_split"
    ],
    answer: 0,
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
      "Toàn bộ Pipeline gồm preprocessing và model",
      "Chỉ y_test",
      "Chỉ raw CSV",
      "Chỉ accuracy score"
    ],
    answer: 0,
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
      "Dữ liệu mới phải có schema features phù hợp với pipeline/model đã train",
      "Fit lại scaler trên từng dòng dữ liệu mới",
      "Dùng test set để tune tiếp hyperparameter",
      "Bỏ qua preprocessing đã dùng lúc train"
    ],
    answer: 0,
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
      "scaler được fit/transform trước, sau đó model được fit",
      "model được fit trước, sau đó scaler được fit",
      "Cả hai không được fit",
      "Chỉ scaler được fit, model không được fit"
    ],
    answer: 0,
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
      "Là bước preprocessing trước model",
      "Sau bước predict",
      "Sau metric evaluation",
      "Thay thế target y"
    ],
    answer: 0,
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
      "Fit imputer trên toàn bộ dataset trước khi chia train/test",
      "Fit imputer trên X_train rồi transform X_test",
      "Dùng Pipeline trong cross-validation",
      "Dùng random_state để tái lập kết quả"
    ],
    answer: 0,
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
      "model__max_depth",
      "model.max_depth",
      "max_depth__model",
      "RandomForestClassifier.max_depth"
    ],
    answer: 0,
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
      "Vì sẽ làm test set bị dùng như validation set và đánh giá cuối bị lạc quan",
      "Vì test set không chứa dữ liệu",
      "Vì scikit-learn không cho phép predict trên test set",
      "Vì hyperparameter chỉ dùng cho unsupervised learning"
    ],
    answer: 0,
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
      "make_pipeline tự đặt tên step dựa trên estimator/transformer",
      "make_pipeline không thể dùng scaler",
      "make_pipeline chỉ dùng cho clustering",
      "make_pipeline không hỗ trợ fit"
    ],
    answer: 0,
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
      "Vì dữ liệu mới có thể xuất hiện category chưa thấy lúc training",
      "Vì OneHotEncoder chỉ nhận numeric target",
      "Vì category luôn bị thiếu hoàn toàn",
      "Vì unknown categories luôn làm accuracy bằng 0"
    ],
    answer: 0,
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
      "Chọn subset features hữu ích để giảm nhiễu, giảm complexity hoặc cải thiện interpretability",
      "Tạo thêm target y mới",
      "Luôn tăng số lượng features",
      "Thay thế hoàn toàn model evaluation"
    ],
    answer: 0,
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
      "Vì PCA nhạy với scale của features",
      "Vì PCA chỉ nhận dữ liệu categorical",
      "Vì PCA là classification metric",
      "Vì PCA bắt buộc target phải là string"
    ],
    answer: 0,
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
      "Vì KMeans dựa trên khoảng cách và nhạy với scale của features",
      "Vì KMeans bắt buộc input phải có mean bằng 0",
      "Vì KMeans là supervised learning",
      "Vì KMeans cần target y"
    ],
    answer: 0,
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
      "Không có target rõ ràng để so sánh trực tiếp kết quả cụm",
      "Clustering không tạo output",
      "KMeans không có hyperparameter",
      "Unsupervised learning không cần dữ liệu"
    ],
    answer: 0,
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
      "Hyperparameter giới hạn độ sâu của cây",
      "Parameter học được sau khi fit scaler",
      "Số lượng dòng trong test set",
      "Metric classification"
    ],
    answer: 0,
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
      "Số lượng trees trong forest",
      "Số lượng target classes",
      "Số lượng missing values",
      "Số lượng folds trong CV bắt buộc"
    ],
    answer: 0,
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
      "Xác suất dự đoán cho từng class",
      "Feature importance dạng tree",
      "Giá trị target liên tục duy nhất",
      "Dữ liệu đã scale"
    ],
    answer: 0,
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
      "Trong số actual positives, model phát hiện đúng được bao nhiêu",
      "Trong số predicted positives, bao nhiêu là đúng",
      "Sai số tuyệt đối trung bình",
      "Tỷ lệ phương sai target được giải thích"
    ],
    answer: 0,
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
      "Trong số predicted positives, bao nhiêu là positive thật",
      "Trong số actual positives, bắt được bao nhiêu",
      "Sai số bình phương trung bình",
      "Số cụm tối ưu"
    ],
    answer: 0,
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
      "Vì RMSE dựa trên bình phương lỗi trước khi lấy căn",
      "Vì RMSE chỉ dùng cho classification",
      "Vì RMSE bỏ qua lỗi lớn",
      "Vì MAE luôn bằng 0"
    ],
    answer: 0,
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
      "Nó hữu ích nhưng không phải bằng chứng nhân quả và có thể bị bias theo loại feature",
      "Nó chứng minh feature gây ra target",
      "Nó chỉ tồn tại trước khi fit model",
      "Nó luôn giống nhau với mọi model"
    ],
    answer: 0,
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
      "Model hoặc pipeline có thể báo lỗi do input schema không khớp",
      "Model tự động đoán ý nghĩa cột mới",
      "Accuracy tự động tăng",
      "Scikit-learn tự động train lại model"
    ],
    answer: 0,
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
      "Vì test set sẽ được scale theo thống kê riêng, không nhất quán với train và inference thực tế",
      "Vì scaler không có fit_transform",
      "Vì X_test luôn phải là target",
      "Vì fit_transform chỉ dùng cho model classifier"
    ],
    answer: 0,
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
      "Split data → fit preprocessing/model trên train → predict test → evaluate",
      "Evaluate → split data → predict → fit model",
      "Fit trên test → tune trên test → báo score train",
      "Scale toàn bộ data → xóa target → evaluate"
    ],
    answer: 0,
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
      "Giải thích ngắn gọn ý nghĩa metric, baseline so sánh và giới hạn của model",
      "Chỉ báo một con số accuracy",
      "Ẩn hoàn toàn cách chia dữ liệu",
      "Không cần nói model dùng features nào"
    ],
    answer: 0,
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
      "model__C",
      "preprocess__C",
      "LogisticRegression__C",
      "C__model"
    ],
    answer: 0,
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
      "Đặt preprocessing và model trong cùng Pipeline rồi đưa Pipeline vào cross-validation",
      "Fit preprocessing trên toàn bộ X trước rồi cross-validate model",
      "Fit scaler trên test fold riêng biệt",
      "Bỏ preprocessing khỏi validation"
    ],
    answer: 0,
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
      "Dùng nested cross-validation hoặc tách rõ validation/test",
      "Tune trực tiếp trên test set nhiều lần",
      "Bỏ test set và chỉ báo train score",
      "Fit scaler trên toàn bộ dữ liệu trước khi split"
    ],
    answer: 0,
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
      "Vì dữ liệu mới có thể không được transform giống lúc training",
      "Vì model không thể predict nếu đã fit",
      "Vì preprocessing chỉ dùng cho visualization",
      "Vì file model luôn tự chứa raw data"
    ],
    answer: 0,
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
      "Các feature đã biến đổi được ghép lại thành một ma trận feature cho model",
      "Chỉ giữ lại target y",
      "Tự động trả về accuracy",
      "Luôn giữ nguyên DataFrame y như ban đầu"
    ],
    answer: 0,
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
      "Vì coefficient phụ thuộc vào scale của feature",
      "Vì LogisticRegression không có coefficient",
      "Vì coefficient chỉ dùng cho KMeans",
      "Vì scale không ảnh hưởng gì đến coefficient"
    ],
    answer: 0,
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
      "Vì inertia thường giảm khi tăng số cụm, cần cân bằng với interpretability và metric/logic khác",
      "Vì inertia chỉ tăng khi thêm cụm",
      "Vì KMeans không có inertia",
      "Vì số cụm càng lớn luôn càng tốt"
    ],
    answer: 0,
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
      "Feature schema, preprocessing pipeline và thông tin version/config huấn luyện",
      "Chỉ screenshot biểu đồ",
      "Chỉ notebook output cuối cùng",
      "Chỉ tên thuật toán"
    ],
    answer: 0,
    explanation: "Inference ổn định cần biết schema, preprocessing đã fit, model artifact, version thư viện hoặc config quan trọng để tái lập và kiểm soát thay đổi."
  }
];