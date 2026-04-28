const PROJECT_STRUCTURE_QUESTIONS = [
  {
    id: "proj_f_001",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "Repo Structure",
    question: "Trong một project Data Analytics, thư mục src thường nên dùng để làm gì?",
    code: "",
    options: [
      "Chứa code/module có thể tái sử dụng",
      "Chứa toàn bộ file dữ liệu raw nhạy cảm",
      "Chứa screenshot không liên quan",
      "Chứa password và API key"
    ],
    answer: 0,
    explanation: "Thư mục src thường dùng để chứa code/module có thể tái sử dụng như hàm xử lý dữ liệu, feature engineering, validation hoặc utility. Dữ liệu nhạy cảm và secret không nên lưu trực tiếp trong repo."
  },
  {
    id: "proj_f_002",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "Project Structure Overview",
    question: "Mục tiêu chính của việc tổ chức project Data Analytics rõ ràng là gì?",
    code: "",
    options: [
      "Giúp project dễ đọc, dễ chạy lại, dễ review và dễ bảo trì",
      "Làm project trông phức tạp hơn dù không cần thiết",
      "Ẩn toàn bộ logic xử lý dữ liệu",
      "Thay thế hoàn toàn phân tích dữ liệu"
    ],
    answer: 0,
    explanation: "Project structure rõ ràng giúp người khác hiểu luồng xử lý, chạy lại kết quả, kiểm tra code và mở rộng project dễ hơn."
  },
  {
    id: "proj_f_003",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "README",
    question: "README trong project Data Analytics thường nên dùng để làm gì?",
    code: "",
    options: [
      "Giải thích mục tiêu project, dữ liệu, cách chạy và kết quả chính",
      "Lưu password database",
      "Thay thế toàn bộ source code",
      "Chứa file model binary lớn"
    ],
    answer: 0,
    explanation: "README là tài liệu cửa vào của project, giúp người đọc hiểu project làm gì, cấu trúc ra sao, cách setup, cách chạy và output chính là gì."
  },
  {
    id: "proj_f_004",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "requirements.txt",
    question: "requirements.txt thường dùng để làm gì?",
    code: "",
    options: [
      "Khai báo các Python packages cần cài cho project",
      "Lưu dữ liệu raw",
      "Lưu kết quả phân tích cuối cùng",
      "Chứa API key để deploy"
    ],
    answer: 0,
    explanation: "requirements.txt liệt kê dependencies như pandas, numpy, streamlit, scikit-learn để người khác có thể cài môi trường chạy project."
  },
  {
    id: "proj_f_005",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: ".gitignore",
    question: ".gitignore thường dùng để làm gì?",
    code: "",
    options: [
      "Khai báo các file/thư mục không nên đưa vào Git",
      "Tự động xóa file khỏi máy tính",
      "Tạo môi trường Python mới",
      "Chạy toàn bộ notebook"
    ],
    answer: 0,
    explanation: ".gitignore giúp tránh commit các file không cần hoặc nhạy cảm như __pycache__, .env, file tạm, dữ liệu lớn hoặc output sinh ra tự động."
  },
  {
    id: "proj_f_006",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "Data Folder",
    question: "Trong project Data Analytics, thư mục data thường dùng để làm gì?",
    code: "",
    options: [
      "Tổ chức dữ liệu đầu vào, dữ liệu trung gian hoặc dữ liệu đã xử lý",
      "Lưu toàn bộ API key",
      "Chứa code Python tái sử dụng chính",
      "Chứa file README duy nhất"
    ],
    answer: 0,
    explanation: "Thư mục data thường dùng để tổ chức raw, processed hoặc external data. Tuy nhiên không nên commit dữ liệu nhạy cảm hoặc file quá lớn nếu chưa có chiến lược phù hợp."
  },
  {
    id: "proj_f_007",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "Raw Data",
    question: "raw data nên được hiểu là gì?",
    code: "",
    options: [
      "Dữ liệu gốc nhận được, chưa hoặc rất ít xử lý",
      "Dữ liệu đã được làm sạch hoàn toàn",
      "File model đã train",
      "Code dùng để deploy app"
    ],
    answer: 0,
    explanation: "Raw data là dữ liệu đầu vào ban đầu. Nên hạn chế chỉnh sửa trực tiếp raw data để có thể trace lại nguồn gốc và tái lập pipeline."
  },
  {
    id: "proj_f_008",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "Processed Data",
    question: "processed data thường là gì?",
    code: "",
    options: [
      "Dữ liệu đã được làm sạch, biến đổi hoặc chuẩn hóa để phân tích/modeling",
      "Dữ liệu gốc chưa xử lý",
      "Password đã mã hóa",
      "File notebook rỗng"
    ],
    answer: 0,
    explanation: "Processed data là dữ liệu đã qua bước xử lý như clean, aggregate, feature engineering hoặc chuẩn hóa schema để dùng cho phân tích tiếp theo."
  },
  {
    id: "proj_f_009",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "Notebooks",
    question: "Notebook thường phù hợp nhất cho giai đoạn nào?",
    code: "",
    options: [
      "EDA, exploration, thử nghiệm ý tưởng và trình bày phân tích",
      "Lưu secret production",
      "Chạy service backend lâu dài",
      "Thay thế toàn bộ README"
    ],
    answer: 0,
    explanation: "Notebook rất phù hợp cho khám phá dữ liệu, thử nghiệm và storytelling. Nhưng logic dùng lại nhiều lần nên được tách sang src hoặc script."
  },
  {
    id: "proj_f_010",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "Scripts Folder",
    question: "Thư mục scripts thường nên chứa gì?",
    code: "",
    options: [
      "Các script chạy tác vụ cụ thể như build dataset, train model hoặc generate report",
      "Dữ liệu raw nhạy cảm",
      "File secret .env đã commit",
      "Screenshot không liên quan"
    ],
    answer: 0,
    explanation: "scripts thường chứa các file chạy một workflow cụ thể. Code reusable nên cân nhắc đặt trong src rồi scripts import lại."
  },
  {
    id: "proj_f_011",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "Reports Folder",
    question: "Thư mục reports thường dùng để lưu gì?",
    code: "",
    options: [
      "Output phân tích như HTML report, PDF, chart hoặc slide kết quả",
      "API key cá nhân",
      "Virtual environment",
      "Toàn bộ package đã cài"
    ],
    answer: 0,
    explanation: "reports thường chứa output phục vụ trình bày kết quả. Các file sinh tự động lớn có thể cần được gitignore tùy mục tiêu project."
  },
  {
    id: "proj_f_012",
    library: "Project Structure for Data Analytics",
    level: "Foundation",
    topic: "File Naming Convention",
    question: "Tên file nào là naming convention tốt hơn cho output phân tích?",
    code: "",
    options: [
      "sales_summary_2026_04.csv",
      "final_final_v2_really_final.csv",
      "abc.csv",
      "new file copy copy.csv"
    ],
    answer: 0,
    explanation: "sales_summary_2026_04.csv rõ nội dung và kỳ dữ liệu. Các tên như final_final_v2 hoặc abc mơ hồ, khó review và khó bảo trì."
  },
  {
    id: "proj_i_001",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Repo Structure",
    question: "Cấu trúc nào hợp lý hơn cho một project Data Analytics cơ bản?",
    code: "",
    options: [
      "data/, notebooks/, src/, scripts/, reports/, tests/, README.md, requirements.txt",
      "all_files/, final/, final2/, temp/, copy/",
      "passwords/, raw_sensitive_data/, random_screenshots/",
      "only_one_notebook.ipynb và không có README"
    ],
    answer: 0,
    explanation: "Cấu trúc có data, notebooks, src, scripts, reports, tests và tài liệu giúp project rõ ràng, dễ chạy lại và dễ review hơn."
  },
  {
    id: "proj_i_002",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "src vs scripts",
    question: "Phân biệt đúng giữa src và scripts trong project Data Analytics là gì?",
    code: "",
    options: [
      "src chứa module/hàm tái sử dụng, scripts chứa file chạy tác vụ cụ thể",
      "src chỉ chứa dữ liệu raw, scripts chỉ chứa README",
      "src và scripts luôn giống nhau hoàn toàn",
      "scripts chỉ dùng để lưu secret"
    ],
    answer: 0,
    explanation: "src nên chứa logic reusable như cleaning functions, metrics, validation. scripts có thể là entrypoint như build_dataset.py hoặc train_model.py."
  },
  {
    id: "proj_i_003",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Notebook to Script",
    question: "Khi một đoạn logic trong notebook được dùng lại nhiều lần, nên làm gì?",
    code: "",
    options: [
      "Tách thành function/module trong src rồi import lại vào notebook hoặc script",
      "Copy paste sang nhiều notebook khác nhau",
      "Đổi tên notebook thành final_final.ipynb",
      "Hard-code output vào markdown"
    ],
    answer: 0,
    explanation: "Logic dùng lại nên được đóng gói thành function/module để giảm duplication, dễ test và dễ bảo trì."
  },
  {
    id: "proj_i_004",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Config File",
    question: "Config file trong project thường dùng để làm gì?",
    code: "",
    options: [
      "Lưu các tham số có thể thay đổi như path, threshold, date range hoặc model settings",
      "Lưu password rồi commit public",
      "Thay thế toàn bộ source code",
      "Lưu dữ liệu raw lớn"
    ],
    answer: 0,
    explanation: "Config giúp tách tham số khỏi code, giúp pipeline linh hoạt hơn. Secret không nên lưu trong config public."
  },
  {
    id: "proj_i_005",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Config vs Hard-code",
    question: "Vì sao nên tránh hard-code nhiều đường dẫn và threshold trong code?",
    code: "",
    options: [
      "Vì làm project khó chạy ở môi trường khác và khó thay đổi tham số",
      "Vì Python không cho phép string path",
      "Vì hard-code luôn làm kết quả chính xác hơn",
      "Vì config chỉ dùng cho frontend"
    ],
    answer: 0,
    explanation: "Hard-code khiến project phụ thuộc máy cá nhân hoặc một setting cố định. Config/argument giúp tái lập và thay đổi dễ hơn."
  },
  {
    id: "proj_i_006",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Environment Variables",
    question: "Environment variables thường phù hợp nhất để lưu gì?",
    code: "",
    options: [
      "Thông tin cấu hình hoặc secret cần tách khỏi source code",
      "Toàn bộ raw data",
      "File report HTML",
      "Notebook output image"
    ],
    answer: 0,
    explanation: "Environment variables thường dùng cho secret hoặc config theo môi trường như API token, database URL hoặc mode chạy."
  },
  {
    id: "proj_i_007",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Secrets Handling",
    question: "Best practice nào đúng với API key hoặc password?",
    code: "",
    options: [
      "Không hard-code trong code; dùng environment variables, .env không commit hoặc platform secrets",
      "Commit trực tiếp vào GitHub để dễ chạy",
      "Viết vào README public",
      "In ra log mỗi lần chạy"
    ],
    answer: 0,
    explanation: "Secret không nên xuất hiện trong source code, README hoặc log. Nên dùng cơ chế quản lý secret an toàn."
  },
  {
    id: "proj_i_008",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: ".gitignore",
    question: "Dòng nào nên có trong .gitignore để tránh commit file environment chứa secret?",
    code: "",
    options: [
      ".env",
      "README.md",
      "requirements.txt",
      "src/"
    ],
    answer: 0,
    explanation: ".env thường chứa biến môi trường hoặc secret local, nên cần đưa vào .gitignore. README và requirements thường nên được commit."
  },
  {
    id: "proj_i_009",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Large Files",
    question: "Vì sao không nên commit file dữ liệu quá lớn trực tiếp lên Git thông thường?",
    code: "",
    options: [
      "Vì làm repo nặng, clone chậm và khó quản lý version",
      "Vì Git không lưu được file text",
      "Vì dữ liệu lớn luôn là dữ liệu sai",
      "Vì README sẽ bị xóa"
    ],
    answer: 0,
    explanation: "File lớn làm lịch sử Git nặng và khó chia sẻ. Có thể dùng storage ngoài, sample data, data instructions hoặc Git LFS nếu phù hợp."
  },
  {
    id: "proj_i_010",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Git LFS Awareness",
    question: "Git LFS thường dùng để làm gì?",
    code: "",
    options: [
      "Quản lý file lớn bằng Git theo cách phù hợp hơn Git thường",
      "Tự động viết README",
      "Tạo virtual environment",
      "Xóa toàn bộ commit history"
    ],
    answer: 0,
    explanation: "Git LFS giúp track file lớn như model artifact hoặc dataset sample lớn hơn mức bình thường. Tuy nhiên vẫn cần cân nhắc quota và tính phù hợp."
  },
  {
    id: "proj_i_011",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Relative Path",
    question: "Vì sao relative path thường tốt hơn absolute path cá nhân trong portfolio project?",
    code: "",
    options: [
      "Vì người khác có thể chạy project ở máy/thư mục khác dễ hơn",
      "Vì absolute path luôn sai syntax",
      "Vì relative path tự động tạo dữ liệu",
      "Vì Git chỉ commit được relative path"
    ],
    answer: 0,
    explanation: "Absolute path như C:/Users/... phụ thuộc máy cá nhân. Relative path giúp project portable hơn nếu cấu trúc repo rõ ràng."
  },
  {
    id: "proj_i_012",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "pathlib",
    question: "pathlib trong Python hữu ích nhất cho việc gì trong project structure?",
    code: "",
    options: [
      "Xử lý đường dẫn file/thư mục rõ ràng và portable hơn nối string thủ công",
      "Tự động train model",
      "Tự động tạo README",
      "Lưu secret an toàn trên cloud"
    ],
    answer: 0,
    explanation: "pathlib cung cấp Path object để nối path, kiểm tra tồn tại, tạo folder và xử lý file path dễ đọc hơn."
  },
  {
    id: "proj_i_013",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Reusable Functions",
    question: "Hàm reusable trong project Data Analytics nên có đặc điểm nào?",
    code: "",
    options: [
      "Tên rõ nghĩa, input/output rõ và không phụ thuộc biến global không cần thiết",
      "Chỉ chạy khi notebook cell trước đã chạy thủ công",
      "Luôn đọc file hard-code từ máy cá nhân",
      "Không cần return kết quả"
    ],
    answer: 0,
    explanation: "Function reusable nên độc lập, dễ test, dễ import và dễ hiểu. Phụ thuộc biến global hoặc path hard-code làm code khó bảo trì."
  },
  {
    id: "proj_i_014",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Modular Code",
    question: "Modular code giúp ích gì cho project analytics?",
    code: "",
    options: [
      "Tách logic thành phần nhỏ để dễ test, tái sử dụng và debug",
      "Làm code dài hơn nhưng khó hiểu hơn",
      "Bắt buộc mọi thứ nằm trong một notebook",
      "Ẩn toàn bộ lỗi dữ liệu"
    ],
    answer: 0,
    explanation: "Modular code giúp phân tách load, clean, transform, validate, model và report thành các phần dễ kiểm soát."
  },
  {
    id: "proj_i_015",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "tests Folder",
    question: "Thư mục tests thường dùng để làm gì?",
    code: "",
    options: [
      "Chứa test kiểm tra logic code, transformation hoặc data validation",
      "Chứa raw data nhạy cảm",
      "Chứa toàn bộ file output lớn",
      "Chứa password để test nhanh"
    ],
    answer: 0,
    explanation: "tests chứa unit test hoặc integration test giúp kiểm tra function và pipeline. Test tốt hơn việc chỉ kiểm tra thủ công trong notebook."
  },
  {
    id: "proj_i_016",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Data Validation Check",
    question: "Check nào phù hợp trước khi export processed data?",
    code: "",
    options: [
      "Kiểm tra schema, null key, duplicate key và row count bất thường",
      "Chỉ đổi tên file thành final.csv",
      "Bỏ qua mọi lỗi để pipeline chạy nhanh hơn",
      "Chỉ xem 1 dòng đầu và kết luận dữ liệu đúng"
    ],
    answer: 0,
    explanation: "Data validation giúp phát hiện dữ liệu thiếu, sai schema, trùng key hoặc output bất thường trước khi dùng cho report/model."
  },
  {
    id: "proj_i_017",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "Code Comment vs README",
    question: "Phân biệt đúng giữa code comment và README là gì?",
    code: "",
    options: [
      "Comment giải thích logic cụ thể trong code; README giải thích project tổng thể và cách chạy",
      "README chỉ dùng để comment từng dòng code",
      "Comment thay thế hoàn toàn hướng dẫn setup",
      "README không nên có mục tiêu project"
    ],
    answer: 0,
    explanation: "Comment nên giải thích phần code khó hiểu. README nên mô tả mục tiêu, cấu trúc, setup, cách chạy và kết quả chính của project."
  },
  {
    id: "proj_i_018",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "artifacts Folder",
    question: "Artifact trong analytics project thường là gì?",
    code: "",
    options: [
      "Output sinh ra từ pipeline như model file, processed dataset, report hoặc chart",
      "Một dòng code comment",
      "Tên branch Git",
      "API key của user"
    ],
    answer: 0,
    explanation: "Artifact là sản phẩm được sinh ra từ code hoặc pipeline. Cần phân biệt artifact với source code và quản lý version/lưu trữ phù hợp."
  },
  {
    id: "proj_i_019",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "models Folder Awareness",
    question: "Thư mục models thường dùng để lưu gì trong project có machine learning?",
    code: "",
    options: [
      "Model artifacts hoặc pipeline đã train cần dùng cho inference/evaluation",
      "Raw password file",
      "Notebook EDA duy nhất",
      "File requirements.txt"
    ],
    answer: 0,
    explanation: "models có thể chứa artifact như model.joblib hoặc inference pipeline. Nếu file lớn, cần cân nhắc Git LFS, external storage hoặc release artifact."
  },
  {
    id: "proj_i_020",
    library: "Project Structure for Data Analytics",
    level: "Intermediate",
    topic: "environment.yml Awareness",
    question: "environment.yml thường khác requirements.txt ở điểm nào?",
    code: "",
    options: [
      "environment.yml thường mô tả Conda environment, có thể gồm Python version và dependencies Conda/pip",
      "environment.yml dùng để lưu raw data",
      "requirements.txt chỉ dùng để lưu password",
      "Hai file này luôn là notebook"
    ],
    answer: 0,
    explanation: "requirements.txt thường dùng với pip. environment.yml thường dùng với Conda và có thể mô tả môi trường rộng hơn, gồm Python version và channels."
  },
  {
    id: "proj_a_001",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Pipeline Structure Basics",
    question: "Pipeline structure nào hợp lý cho project xử lý dữ liệu định kỳ?",
    code: "",
    options: [
      "load data → validate input → transform → validate output → export/report",
      "export trước → load sau → xóa validation",
      "chỉ mở notebook và sửa tay dữ liệu",
      "copy dữ liệu vào README rồi tính thủ công"
    ],
    answer: 0,
    explanation: "Pipeline nên có thứ tự rõ ràng: load, validate, transform, validate output và export. Validation giúp tránh đưa dữ liệu sai vào downstream."
  },
  {
    id: "proj_a_002",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Reproducibility",
    question: "Yếu tố nào quan trọng nhất để người khác chạy lại project của bạn?",
    code: "",
    options: [
      "README hướng dẫn rõ, dependencies cố định, config/path rõ ràng và dữ liệu/artifacts có hướng dẫn",
      "Chỉ upload screenshot kết quả",
      "Không ghi cách chạy để tránh người khác sửa",
      "Đặt toàn bộ code trong một cell không có chú thích"
    ],
    answer: 0,
    explanation: "Reproducibility cần hướng dẫn setup, dependencies, input data, config, command chạy và output kỳ vọng."
  },
  {
    id: "proj_a_003",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Random Seed Awareness",
    question: "Vì sao random seed có thể quan trọng trong project modeling hoặc sampling?",
    code: "",
    options: [
      "Giúp kết quả random split/sampling/model có thể tái lập hơn",
      "Làm model chắc chắn chính xác hơn",
      "Thay thế toàn bộ validation",
      "Lưu password an toàn hơn"
    ],
    answer: 0,
    explanation: "Cố định random seed giúp kết quả liên quan đến randomness ổn định hơn giữa các lần chạy, thuận tiện cho debug và review."
  },
  {
    id: "proj_a_004",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Dependency Management",
    question: "Vì sao nên ghi dependency vào requirements.txt hoặc environment.yml?",
    code: "",
    options: [
      "Để môi trường chạy project có thể được cài lại nhất quán hơn",
      "Để lưu dữ liệu processed",
      "Để tự động tạo dashboard đẹp",
      "Để thay thế toàn bộ code"
    ],
    answer: 0,
    explanation: "Dependency file giúp người khác hoặc CI/deployment cài đúng package cần thiết, giảm lỗi do thiếu thư viện hoặc khác môi trường."
  },
  {
    id: "proj_a_005",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Deployment Readiness",
    question: "Một project Streamlit app chuẩn bị deploy thường cần chú ý gì?",
    code: "",
    options: [
      "Entrypoint app rõ, requirements đầy đủ, relative paths, config/secrets an toàn và artifacts cần thiết",
      "Chỉ cần notebook EDA trên máy cá nhân",
      "Hard-code path C:/Users/... trong app",
      "Commit API key vào GitHub public"
    ],
    answer: 0,
    explanation: "Deployment cần app entrypoint, dependencies, đường dẫn portable, secrets an toàn và model/data artifacts được quản lý đúng."
  },
  {
    id: "proj_a_006",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Model Artifact Management",
    question: "Khi lưu model artifact cho inference, nên lưu kèm thông tin nào?",
    code: "",
    options: [
      "Feature schema, preprocessing pipeline/config và version hoặc hướng dẫn sử dụng",
      "Chỉ tên model thật ngắn",
      "Password database",
      "Screenshot accuracy"
    ],
    answer: 0,
    explanation: "Inference ổn định cần biết input schema, preprocessing, model version và cách load/use artifact. Chỉ lưu file model không đủ nếu thiếu context."
  },
  {
    id: "proj_a_007",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Notebook to Script",
    question: "Dấu hiệu nào cho thấy nên chuyển một phần notebook thành script/module?",
    code: "",
    options: [
      "Logic được dùng lại, cần chạy định kỳ hoặc cần test tự động",
      "Notebook chỉ dùng để ghi chú insight một lần",
      "Code chỉ là biểu đồ thử nghiệm nhanh",
      "Markdown giải thích business context"
    ],
    answer: 0,
    explanation: "Khi logic cần tái sử dụng, chạy lặp lại hoặc test, nên tách thành script/module để ổn định và maintain tốt hơn."
  },
  {
    id: "proj_a_008",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Logging Awareness",
    question: "Logging trong pipeline project giúp ích gì?",
    code: "",
    options: [
      "Theo dõi job chạy đến đâu, số dòng xử lý và lỗi xảy ra ở bước nào",
      "Tự động sửa mọi lỗi dữ liệu",
      "Thay thế toàn bộ README",
      "Bảo mật secret tốt hơn nếu in hết ra log"
    ],
    answer: 0,
    explanation: "Logging giúp debug và monitoring. Tuy nhiên không nên log secret hoặc dữ liệu nhạy cảm."
  },
  {
    id: "proj_a_009",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Testing Awareness",
    question: "Vì sao test folder tốt hơn việc chỉ kiểm tra output thủ công trong notebook?",
    code: "",
    options: [
      "Test có thể chạy lại tự động và phát hiện lỗi logic khi code thay đổi",
      "Test luôn thay thế hoàn toàn EDA",
      "Notebook không thể có lỗi",
      "Test chỉ để làm repo nặng hơn"
    ],
    answer: 0,
    explanation: "Automated tests giúp bảo vệ logic transformation, validation hoặc utility function khi refactor hoặc thêm feature."
  },
  {
    id: "proj_a_010",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Git Basics Awareness",
    question: "Commit message nào rõ ràng hơn trong project analytics?",
    code: "",
    options: [
      "add data validation for processed sales dataset",
      "update",
      "fix stuff",
      "final"
    ],
    answer: 0,
    explanation: "Commit message nên mô tả thay đổi cụ thể. Các message như update, fix stuff hoặc final quá mơ hồ khi review lịch sử Git."
  },
  {
    id: "proj_a_011",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Data Folder",
    question: "Cấu trúc data folder nào rõ ràng hơn?",
    code: "",
    options: [
      "data/raw/, data/processed/, data/external/",
      "data/final/, data/final2/, data/new/",
      "data/passwords/, data/secrets/",
      "data/all_mixed_together/"
    ],
    answer: 0,
    explanation: "Tách raw, processed và external giúp phân biệt nguồn gốc và trạng thái xử lý của dữ liệu. Tên mơ hồ như final2 dễ gây nhầm lẫn."
  },
  {
    id: "proj_a_012",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Common Errors",
    question: "Lỗi phổ biến nào làm project khó chạy lại trên máy người khác?",
    code: "",
    options: [
      "Hard-code absolute path, thiếu requirements và không hướng dẫn lấy dữ liệu",
      "Có README rõ ràng",
      "Có requirements.txt",
      "Dùng relative path nhất quán"
    ],
    answer: 0,
    explanation: "Absolute path cá nhân, dependency thiếu và không có data instruction khiến người khác khó reproduce project."
  },
  {
    id: "proj_a_013",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Naming Anti-patterns",
    question: "Tên file nào là anti-pattern rõ nhất trong project analytics?",
    code: "",
    options: [
      "final_final_v3_use_this_one_REAL.csv",
      "customer_features_2026_04.parquet",
      "build_features.py",
      "model_registry.json"
    ],
    answer: 0,
    explanation: "final_final_v3_use_this_one_REAL.csv mơ hồ và thể hiện versioning thủ công kém. Tên nên rõ nội dung, kỳ dữ liệu hoặc chức năng."
  },
  {
    id: "proj_a_014",
    library: "Project Structure for Data Analytics",
    level: "Advanced",
    topic: "Best Practice for Portfolio Project",
    question: "Một portfolio project Data Analytics chuyên nghiệp nên ưu tiên điều gì?",
    code: "",
    options: [
      "Story rõ, cấu trúc repo gọn, README tốt, code chạy lại được và output dễ review",
      "Chỉ có hình dashboard không có code",
      "Chỉ có notebook dài không cấu trúc",
      "Ẩn toàn bộ dữ liệu, code và hướng dẫn"
    ],
    answer: 0,
    explanation: "Portfolio tốt cần vừa có business/storytelling, vừa có technical reproducibility: repo rõ, README, code, data instruction và output review được."
  },
  {
    id: "proj_e_001",
    library: "Project Structure for Data Analytics",
    level: "Expert",
    topic: "Artifact vs Source Code",
    question: "Phân biệt đúng giữa artifact và source code là gì?",
    code: "",
    options: [
      "Source code tạo ra kết quả; artifact là output sinh ra như model, report hoặc processed data",
      "Artifact là code Python chính, source code là file CSV",
      "Artifact luôn là secret",
      "Source code không cần version control"
    ],
    answer: 0,
    explanation: "Source code là logic có thể chạy để tạo output. Artifact là sản phẩm sinh ra từ code/pipeline và cần quản lý version/lưu trữ phù hợp."
  },
  {
    id: "proj_e_002",
    library: "Project Structure for Data Analytics",
    level: "Expert",
    topic: "Reproducibility",
    question: "Thiết kế nào tốt nhất để tái lập kết quả phân tích?",
    code: "",
    options: [
      "Code modular, dependency cố định, config rõ, seed nếu có randomness, data instruction và command chạy trong README",
      "Notebook chạy tay theo trí nhớ của tác giả",
      "File output final không có code tạo ra nó",
      "Dữ liệu và code nằm rải rác ngoài repo không có hướng dẫn"
    ],
    answer: 0,
    explanation: "Tái lập cần đủ code, môi trường, config, dữ liệu hoặc hướng dẫn lấy dữ liệu, và command chạy. Nếu phụ thuộc trí nhớ cá nhân thì không reproducible."
  },
  {
    id: "proj_e_003",
    library: "Project Structure for Data Analytics",
    level: "Expert",
    topic: "Secrets Handling",
    question: "Trong repo public, chiến lược nào an toàn hơn cho secrets?",
    code: "",
    options: [
      "Dùng .env local đã gitignore, environment variables hoặc platform secrets; cung cấp .env.example không chứa secret thật",
      "Commit .env thật để người khác chạy ngay",
      "Đưa token vào README nhưng che một phần",
      "In secret ra log để kiểm tra deploy"
    ],
    answer: 0,
    explanation: ".env.example có thể mô tả biến cần có mà không lộ giá trị thật. Secret thật phải nằm ngoài repo public và không được log."
  },
  {
    id: "proj_e_004",
    library: "Project Structure for Data Analytics",
    level: "Expert",
    topic: "Deployment Readiness",
    question: "Dấu hiệu nào cho thấy project analytics chưa sẵn sàng deploy/demo cho người khác?",
    code: "",
    options: [
      "Phụ thuộc path local, thiếu requirements, thiếu hướng dẫn chạy và secret hard-code",
      "Có README hướng dẫn setup",
      "Có relative path và config rõ",
      "Có file requirements.txt"
    ],
    answer: 0,
    explanation: "Path local, dependency thiếu, secret hard-code và không có hướng dẫn chạy là các rủi ro lớn khi deploy/demo project cho người khác."
  }
];