const AUTOMATION_QUESTIONS = [
  {
    id: "auto_f_001",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Automation Overview",
    question: "Trong Data Analytics, automation thường giúp ích nhiều nhất ở điểm nào?",
    code: "",
    options: [
      "Giảm thao tác lặp lại và giúp workflow chạy ổn định hơn",
      "Loại bỏ hoàn toàn nhu cầu kiểm tra dữ liệu",
      "Đảm bảo mọi report luôn đúng mà không cần validation",
      "Thay thế hoàn toàn tư duy phân tích của Data Analyst"
    ],
    answer: 0,
    explanation: "Automation giúp giảm thao tác lặp lại, chuẩn hóa workflow và chạy job ổn định hơn. Tuy nhiên vẫn cần data validation, monitoring và tư duy phân tích."
  },
  {
    id: "auto_f_002",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Manual vs Automated Workflow",
    question: "Manual run khác scheduled run ở điểm nào?",
    code: "",
    options: [
      "Manual run cần người chạy trực tiếp, scheduled run được kích hoạt tự động theo lịch",
      "Manual run luôn đúng hơn scheduled run",
      "Scheduled run không cần logging",
      "Scheduled run không thể chạy script Python"
    ],
    answer: 0,
    explanation: "Manual run phụ thuộc người dùng bấm chạy hoặc chạy lệnh. Scheduled run được cấu hình chạy tự động theo thời gian như hằng ngày hoặc hằng giờ."
  },
  {
    id: "auto_f_003",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Script vs Notebook",
    question: "Vì sao script Python thường phù hợp hơn notebook cho automation ổn định?",
    code: "",
    options: [
      "Script dễ chạy tự động, version control và tái lập hơn",
      "Notebook không thể dùng để phân tích dữ liệu",
      "Script luôn nhanh hơn notebook trong mọi trường hợp",
      "Notebook không thể import pandas"
    ],
    answer: 0,
    explanation: "Notebook phù hợp cho exploration và trình bày. Script/module thường phù hợp hơn cho job tự động vì dễ chạy bằng command line, CI/CD và scheduler."
  },
  {
    id: "auto_f_004",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Python Script Structure",
    question: "Một script automation tốt thường nên có đặc điểm nào?",
    code: "",
    options: [
      "Có cấu trúc rõ ràng như load config, load data, transform, validate, export",
      "Viết toàn bộ logic trong một dòng duy nhất",
      "Không cần kiểm tra lỗi",
      "Hard-code mọi đường dẫn và secret"
    ],
    answer: 0,
    explanation: "Script automation nên có các bước rõ ràng để dễ debug, maintain và mở rộng. Hard-code đường dẫn/secret hoặc bỏ qua lỗi sẽ làm workflow kém ổn định."
  },
  {
    id: "auto_f_005",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "main Function",
    question: "main() trong script Python thường dùng để làm gì?",
    code: "",
    options: [
      "Gom logic chạy chính của chương trình vào một điểm vào rõ ràng",
      "Tự động gửi email trong mọi script",
      "Thay thế mọi function khác",
      "Chỉ dùng để tạo DataFrame"
    ],
    answer: 0,
    explanation: "main() giúp tổ chức luồng chạy chính rõ ràng, dễ gọi từ command line và dễ test từng function nhỏ bên trong."
  },
  {
    id: "auto_f_006",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "__name__ == \"__main__\"",
    question: "Mục đích phổ biến của if __name__ == \"__main__\": là gì?",
    code: "",
    options: [
      "Chỉ chạy một phần code khi file được chạy trực tiếp, không chạy khi import",
      "Tự động cài thư viện còn thiếu",
      "Tự động tạo cron job",
      "Tự động xóa log cũ"
    ],
    answer: 0,
    explanation: "Block này giúp phân biệt file đang được chạy trực tiếp hay được import như module, từ đó tránh chạy job ngoài ý muốn khi import."
  },
  {
    id: "auto_f_007",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "argparse Basics",
    question: "argparse trong Python thường dùng để làm gì?",
    code: "",
    options: [
      "Nhận tham số từ command line cho script",
      "Tự động tạo dashboard",
      "Gửi alert tới Slack",
      "Đọc mọi định dạng file mà không cần code"
    ],
    answer: 0,
    explanation: "argparse giúp script nhận tham số như input_path, output_path, date hoặc mode từ command line, giảm hard-code trong script."
  },
  {
    id: "auto_f_008",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Config File Awareness",
    question: "Config file thường dùng để làm gì trong automation?",
    code: "",
    options: [
      "Lưu các thiết lập có thể thay đổi như path, date range, threshold hoặc mode chạy",
      "Lưu toàn bộ source code Python",
      "Thay thế hoàn toàn logging",
      "Tự động sửa dữ liệu sai"
    ],
    answer: 0,
    explanation: "Config giúp tách tham số khỏi code, làm script linh hoạt hơn giữa các môi trường hoặc các lần chạy khác nhau."
  },
  {
    id: "auto_f_009",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Environment Variables",
    question: "Environment variables thường hữu ích nhất trong automation khi nào?",
    code: "",
    options: [
      "Khi cần truyền cấu hình hoặc secret mà không hard-code trực tiếp trong code",
      "Khi muốn xóa toàn bộ log",
      "Khi muốn bỏ qua mọi lỗi",
      "Khi không cần cấu hình nào cả"
    ],
    answer: 0,
    explanation: "Environment variables giúp tách thông tin nhạy cảm hoặc cấu hình môi trường khỏi source code, đặc biệt khi chạy trên CI hoặc server."
  },
  {
    id: "auto_f_010",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Secrets Handling",
    question: "Best practice nào đúng khi xử lý token/password trong automation?",
    code: "",
    options: [
      "Không hard-code secret; dùng environment variables, GitHub Secrets hoặc secret manager",
      "Commit token trực tiếp lên GitHub để job dễ chạy",
      "In password ra log để debug dễ hơn",
      "Gửi secret trong tên file output"
    ],
    answer: 0,
    explanation: "Secret là thông tin nhạy cảm. Không nên hard-code, commit hoặc log secret. Nên dùng cơ chế quản lý secret an toàn."
  },
  {
    id: "auto_f_011",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Path Handling",
    question: "Vì sao nên cẩn thận khi xử lý đường dẫn file trong automation?",
    code: "",
    options: [
      "Vì job có thể chạy ở môi trường khác với working directory khác",
      "Vì Python không hỗ trợ đường dẫn file",
      "Vì đường dẫn không ảnh hưởng đến output",
      "Vì mọi file luôn nằm cùng thư mục với script"
    ],
    answer: 0,
    explanation: "Job tự động có thể chạy trên server, CI hoặc thư mục khác máy local. Nên dùng path rõ ràng, config và pathlib để giảm lỗi."
  },
  {
    id: "auto_f_012",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "pathlib",
    question: "pathlib trong Python giúp ích gì?",
    code: "",
    options: [
      "Xử lý đường dẫn file/thư mục rõ ràng và portable hơn nối string thủ công",
      "Tự động đọc mọi database",
      "Tạo cron expression",
      "Thay thế logging"
    ],
    answer: 0,
    explanation: "pathlib cung cấp Path object để nối path, kiểm tra tồn tại, tạo thư mục và xử lý file path dễ đọc hơn."
  },
  {
    id: "auto_f_013",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Input / Output Paths",
    question: "Trong script automation, input_path và output_path nên được thiết kế như thế nào?",
    code: "",
    options: [
      "Có thể cấu hình qua argument hoặc config thay vì hard-code cố định",
      "Luôn viết cố định theo đường dẫn máy cá nhân",
      "Không cần output_path vì automation không cần output",
      "Đặt trùng nhau trong mọi trường hợp"
    ],
    answer: 0,
    explanation: "Cho phép truyền path từ argument/config giúp script chạy được ở nhiều môi trường và giảm lỗi do đường dẫn cá nhân."
  },
  {
    id: "auto_f_014",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "Logging",
    question: "Logging trong automation dùng để làm gì?",
    code: "",
    options: [
      "Ghi lại quá trình chạy, lỗi và thông tin quan trọng để debug/monitor",
      "Tự động sửa dữ liệu sai",
      "Thay thế toàn bộ data validation",
      "Tăng tốc mọi script trong mọi trường hợp"
    ],
    answer: 0,
    explanation: "Logging giúp biết job chạy đến đâu, có bao nhiêu dữ liệu được xử lý và lỗi xảy ra ở bước nào. Đây là nền tảng cho monitoring và debugging."
  },
  {
    id: "auto_f_015",
    library: "Automation for Data Analytics",
    level: "Foundation",
    topic: "logging vs print",
    question: "Vì sao logging thường phù hợp hơn print trong job automation?",
    code: "",
    options: [
      "Logging hỗ trợ level, timestamp, format và ghi ra file hoặc hệ thống log tốt hơn",
      "print không bao giờ hoạt động trong Python",
      "logging tự động validate dữ liệu",
      "logging không cần message"
    ],
    answer: 0,
    explanation: "print phù hợp debug nhanh. Logging phù hợp automation vì có cấp độ như INFO/WARNING/ERROR, timestamp và dễ tích hợp với monitoring."
  },
  {
    id: "auto_i_001",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "__name__ == \"__main__\"",
    question: "Đoạn code sau có ý nghĩa gì?",
    code: "def main():\n    print(\"run job\")\n\nif __name__ == \"__main__\":\n    main()",
    options: [
      "main() chỉ chạy khi file được chạy trực tiếp",
      "main() luôn chạy khi file được import",
      "main() không bao giờ chạy được",
      "Python sẽ tự động tạo cron job"
    ],
    answer: 0,
    explanation: "if __name__ == \"__main__\" giúp main() chạy khi file là entry point trực tiếp, tránh chạy job khi import module."
  },
  {
    id: "auto_i_002",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "argparse Basics",
    question: "Đoạn code nào tạo argument --input-path bằng argparse?",
    code: "import argparse\nparser = argparse.ArgumentParser()",
    options: [
      "parser.add_argument(\"--input-path\")",
      "parser.input_path(\"--input-path\")",
      "argparse.add(\"input-path\")",
      "parser.add_config(\"--input-path\")"
    ],
    answer: 0,
    explanation: "parser.add_argument(\"--input-path\") khai báo command-line argument. Sau đó có thể parse bằng parser.parse_args()."
  },
  {
    id: "auto_i_003",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "pathlib",
    question: "Đoạn code nào tạo thư mục output nếu chưa tồn tại?",
    code: "from pathlib import Path\noutput_dir = Path(\"outputs\")",
    options: [
      "output_dir.mkdir(parents=True, exist_ok=True)",
      "output_dir.create(always=True)",
      "Path.mkdir(output_dir, force_file=True)",
      "output_dir.make_file()"
    ],
    answer: 0,
    explanation: "mkdir(parents=True, exist_ok=True) tạo thư mục cha nếu cần và không lỗi nếu thư mục đã tồn tại."
  },
  {
    id: "auto_i_004",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "File Naming Convention",
    question: "Naming convention output file tốt trong automation nên có đặc điểm nào?",
    code: "",
    options: [
      "Tên rõ mục đích, ngày chạy hoặc kỳ dữ liệu, và tránh ghi đè ngoài ý muốn",
      "Tên ngẫu nhiên hoàn toàn không thể truy vết",
      "Luôn đặt tên là output.csv cho mọi job",
      "Không cần phần mở rộng file"
    ],
    answer: 0,
    explanation: "Tên file rõ ràng giúp tracking, audit và rerun dễ hơn. Nếu luôn output.csv mà không kiểm soát overwrite, dễ mất dữ liệu cũ."
  },
  {
    id: "auto_i_005",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Timestamped Output",
    question: "Timestamped output thường hữu ích khi nào?",
    code: "",
    options: [
      "Khi muốn lưu lại nhiều phiên bản output theo thời điểm chạy",
      "Khi muốn luôn ghi đè cùng một file",
      "Khi không cần audit output",
      "Khi muốn xóa toàn bộ output cũ tự động"
    ],
    answer: 0,
    explanation: "Thêm timestamp vào tên file giúp tránh ghi đè và hỗ trợ audit lịch sử output. Tuy nhiên cần quản lý cleanup để không tạo quá nhiều file rác."
  },
  {
    id: "auto_i_006",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Overwrite vs Append",
    question: "Khác biệt giữa overwrite và append output là gì?",
    code: "",
    options: [
      "Overwrite ghi đè dữ liệu cũ, append thêm dữ liệu mới vào dữ liệu hiện có",
      "Overwrite luôn an toàn hơn append",
      "Append luôn xóa file cũ",
      "Hai cách luôn giống nhau"
    ],
    answer: 0,
    explanation: "Overwrite thay thế dữ liệu cũ, append thêm vào dữ liệu hiện có. Cần chọn rõ để tránh mất dữ liệu hoặc tạo duplicate."
  },
  {
    id: "auto_i_007",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Idempotency",
    question: "Idempotent job nghĩa là gì?",
    code: "",
    options: [
      "Chạy lại cùng input nhiều lần vẫn tạo kết quả nhất quán, không gây duplicate hoặc side effect ngoài ý muốn",
      "Job luôn chạy nhanh hơn sau mỗi lần chạy",
      "Job không cần logging",
      "Job không cần input"
    ],
    answer: 0,
    explanation: "Idempotency rất quan trọng khi job có thể retry hoặc rerun. Nếu không idempotent, rerun có thể append trùng dữ liệu hoặc tạo output sai."
  },
  {
    id: "auto_i_008",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Full Refresh",
    question: "Full refresh trong data pipeline nghĩa là gì?",
    code: "",
    options: [
      "Tải/xử lý lại toàn bộ dữ liệu cho mỗi lần chạy",
      "Chỉ xử lý phần dữ liệu mới từ lần trước",
      "Chỉ chạy bước validation",
      "Chỉ đổi tên file output"
    ],
    answer: 0,
    explanation: "Full refresh xử lý lại toàn bộ dataset. Cách này đơn giản nhưng có thể tốn thời gian và tài nguyên với dữ liệu lớn."
  },
  {
    id: "auto_i_009",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Incremental Load",
    question: "Incremental load nghĩa là gì?",
    code: "",
    options: [
      "Chỉ xử lý dữ liệu mới hoặc thay đổi kể từ lần chạy trước",
      "Xử lý lại toàn bộ dữ liệu mọi lần",
      "Chỉ tạo log file",
      "Chỉ chạy test unit"
    ],
    answer: 0,
    explanation: "Incremental load giúp tiết kiệm thời gian và tài nguyên bằng cách dùng watermark như timestamp hoặc ID cuối đã xử lý."
  },
  {
    id: "auto_i_010",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Watermark Awareness",
    question: "Watermark trong incremental load thường dùng để làm gì?",
    code: "",
    options: [
      "Ghi nhớ mốc dữ liệu đã xử lý đến đâu để lần sau lấy tiếp",
      "Mã hóa file output",
      "Tự động tạo biểu đồ",
      "Xóa dữ liệu cũ khỏi source"
    ],
    answer: 0,
    explanation: "Watermark như last_updated_at hoặc last_id giúp job biết lần trước đã xử lý đến đâu và chỉ lấy phần mới."
  },
  {
    id: "auto_i_011",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Scheduling",
    question: "Scheduling trong automation nghĩa là gì?",
    code: "",
    options: [
      "Cấu hình job chạy tự động theo thời gian hoặc điều kiện",
      "Viết comment cho script",
      "Tạo DataFrame từ dictionary",
      "Đổi tên cột trong file CSV"
    ],
    answer: 0,
    explanation: "Scheduling cho phép job chạy theo lịch như hằng ngày lúc 7 giờ hoặc theo sự kiện như push code."
  },
  {
    id: "auto_i_012",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Cron Basics",
    question: "Cron expression `0 7 * * *` thường có nghĩa là gì?",
    code: "",
    options: [
      "Chạy hằng ngày lúc 07:00",
      "Chạy mỗi 7 phút",
      "Chạy mỗi Chủ nhật lúc 00:07",
      "Chạy đúng một lần duy nhất"
    ],
    answer: 0,
    explanation: "Trong cron phổ biến, năm trường lần lượt là phút, giờ, ngày trong tháng, tháng, ngày trong tuần. 0 7 * * * nghĩa là 07:00 mỗi ngày."
  },
  {
    id: "auto_i_013",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Cron Basics",
    question: "Cron expression `*/15 * * * *` thường có nghĩa là gì?",
    code: "",
    options: [
      "Chạy mỗi 15 phút",
      "Chạy mỗi 15 giờ",
      "Chạy vào ngày 15 hằng tháng",
      "Chạy vào tháng 15"
    ],
    answer: 0,
    explanation: "*/15 ở trường phút nghĩa là mỗi 15 phút. Đây là lịch phổ biến cho job cần chạy định kỳ trong ngày."
  },
  {
    id: "auto_i_014",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "GitHub Actions Basics",
    question: "GitHub Actions workflow thường được định nghĩa bằng file nào?",
    code: "",
    options: [
      "File YAML trong thư mục .github/workflows/",
      "File Excel trong thư mục data/",
      "File ảnh trong thư mục assets/",
      "File .py bắt buộc tên main.py"
    ],
    answer: 0,
    explanation: "GitHub Actions workflow thường nằm trong .github/workflows/ và được viết bằng YAML."
  },
  {
    id: "auto_i_015",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Trigger",
    question: "Trigger trong GitHub Actions là gì?",
    code: "",
    options: [
      "Điều kiện hoặc sự kiện làm workflow chạy",
      "Một biến pandas",
      "Một loại chart",
      "Một file output"
    ],
    answer: 0,
    explanation: "Trigger xác định khi nào workflow chạy, ví dụ push, pull_request, workflow_dispatch hoặc schedule."
  },
  {
    id: "auto_i_016",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "schedule Trigger",
    question: "Trong GitHub Actions, schedule trigger thường dùng cơ chế nào?",
    code: "",
    options: [
      "Cron expression",
      "SQL SELECT",
      "pandas query",
      "HTML selector"
    ],
    answer: 0,
    explanation: "schedule trong GitHub Actions dùng cron syntax để chạy workflow theo lịch định kỳ."
  },
  {
    id: "auto_i_017",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Workflow",
    question: "Workflow trong GitHub Actions là gì?",
    code: "",
    options: [
      "Một quy trình automation gồm trigger, jobs và steps",
      "Một dòng dữ liệu trong CSV",
      "Một package Python",
      "Một notebook cell"
    ],
    answer: 0,
    explanation: "Workflow là định nghĩa tổng thể của automation trong GitHub Actions, gồm các trigger và một hoặc nhiều jobs."
  },
  {
    id: "auto_i_018",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Job",
    question: "Job trong GitHub Actions thường là gì?",
    code: "",
    options: [
      "Một nhóm steps chạy trên một runner",
      "Một dòng log duy nhất",
      "Một file dữ liệu output",
      "Một biến môi trường bắt buộc"
    ],
    answer: 0,
    explanation: "Job chứa các steps và chạy trên runner được chỉ định. Một workflow có thể có nhiều jobs."
  },
  {
    id: "auto_i_019",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Step",
    question: "Step trong GitHub Actions thường dùng để làm gì?",
    code: "",
    options: [
      "Chạy một action hoặc một command cụ thể trong job",
      "Định nghĩa toàn bộ repository",
      "Lưu secret dạng plain text",
      "Thay thế mọi script Python"
    ],
    answer: 0,
    explanation: "Step là đơn vị nhỏ trong job, ví dụ checkout code, setup Python, install dependencies, chạy script hoặc upload artifact."
  },
  {
    id: "auto_i_020",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Secrets in CI",
    question: "Trong GitHub Actions, nên lưu API token/password ở đâu?",
    code: "",
    options: [
      "GitHub Secrets hoặc hệ thống secret an toàn",
      "Hard-code trực tiếp trong workflow YAML",
      "In ra log trước khi chạy script",
      "Lưu trong tên branch"
    ],
    answer: 0,
    explanation: "GitHub Secrets giúp inject secret vào workflow mà không lộ trực tiếp trong code/YAML. Không nên hard-code hoặc log secret."
  },
  {
    id: "auto_i_021",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Artifacts Awareness",
    question: "Artifact trong CI/CD thường dùng để làm gì?",
    code: "",
    options: [
      "Lưu và chia sẻ output của workflow như report, log hoặc file kết quả",
      "Tự động sửa lỗi code",
      "Lưu password công khai",
      "Thay thế toàn bộ source code"
    ],
    answer: 0,
    explanation: "Artifact là file output được upload từ workflow để tải xuống hoặc dùng ở job khác, ví dụ report CSV hoặc log kiểm tra."
  },
  {
    id: "auto_i_022",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Log Level",
    question: "Log level ERROR thường nên dùng khi nào?",
    code: "",
    options: [
      "Khi có lỗi nghiêm trọng làm job hoặc bước xử lý thất bại",
      "Khi muốn ghi thông tin bình thường như số dòng đã xử lý",
      "Khi muốn debug từng biến nhỏ",
      "Khi không có sự kiện gì xảy ra"
    ],
    answer: 0,
    explanation: "ERROR dùng cho lỗi cần chú ý hoặc làm job fail. INFO phù hợp cho tiến trình bình thường, DEBUG cho chi tiết kỹ thuật."
  },
  {
    id: "auto_i_023",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Error Handling",
    question: "Vì sao không nên dùng `except: pass` trong automation job?",
    code: "",
    options: [
      "Vì nó che giấu lỗi và có thể làm job tạo output sai mà không ai biết",
      "Vì Python không hỗ trợ except",
      "Vì pass luôn làm job nhanh hơn",
      "Vì except chỉ dùng cho notebook"
    ],
    answer: 0,
    explanation: "Bỏ qua lỗi im lặng rất nguy hiểm trong automation. Nên log lỗi, fail rõ ràng hoặc xử lý có chủ đích."
  },
  {
    id: "auto_i_024",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Data Validation Before Output",
    question: "Trước khi export output trong automation, bước nào nên có?",
    code: "",
    options: [
      "Validate dữ liệu như schema, row count, null key hoặc rule quan trọng",
      "Xóa toàn bộ log để sạch thư mục",
      "Bỏ qua mọi kiểm tra để job nhanh hơn",
      "Đổi extension file ngẫu nhiên"
    ],
    answer: 0,
    explanation: "Validation giúp tránh đưa dữ liệu sai vào report/dashboard. Các check thường gồm schema, null, duplicate, row count hoặc range hợp lệ."
  },
  {
    id: "auto_i_025",
    library: "Automation for Data Analytics",
    level: "Intermediate",
    topic: "Dependency Management",
    question: "requirements.txt thường dùng để làm gì?",
    code: "",
    options: [
      "Khai báo các Python packages cần cài cho project",
      "Lưu dữ liệu đầu ra của job",
      "Lưu cron schedule duy nhất",
      "Ghi log lỗi production"
    ],
    answer: 0,
    explanation: "requirements.txt giúp môi trường khác cài đúng dependencies cần thiết, hỗ trợ reproducibility và CI."
  },
  {
    id: "auto_a_001",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Idempotency",
    question: "Job nào dưới đây có rủi ro không idempotent cao nhất?",
    code: "",
    options: [
      "Mỗi lần chạy đều append toàn bộ dữ liệu hôm nay vào file output mà không kiểm tra duplicate",
      "Mỗi lần chạy overwrite partition ngày hiện tại sau khi validate",
      "Mỗi lần chạy tạo output từ cùng input và ghi đè có kiểm soát",
      "Mỗi lần chạy kiểm tra schema trước khi export"
    ],
    answer: 0,
    explanation: "Append toàn bộ dữ liệu mà không kiểm tra duplicate dễ tạo bản ghi trùng khi rerun hoặc retry. Idempotent job cần kiểm soát key, partition hoặc overwrite rõ ràng."
  },
  {
    id: "auto_a_002",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Retry Logic",
    question: "Retry logic trong automation nên được thiết kế như thế nào?",
    code: "",
    options: [
      "Có max retries, log lỗi, và chỉ retry lỗi có khả năng tạm thời",
      "Retry vô hạn cho mọi lỗi",
      "Không log lỗi retry để output sạch",
      "Retry cả lỗi dữ liệu sai schema mà không sửa nguyên nhân"
    ],
    answer: 0,
    explanation: "Retry cần có giới hạn và điều kiện rõ. Retry vô hạn có thể gây kẹt job, tốn tài nguyên hoặc tạo duplicate nếu job không idempotent."
  },
  {
    id: "auto_a_003",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Backoff Awareness",
    question: "Backoff trong retry logic nghĩa là gì?",
    code: "",
    options: [
      "Tăng thời gian chờ giữa các lần retry",
      "Giảm thời gian chờ về 0 sau mỗi lỗi",
      "Bỏ qua logging khi lỗi",
      "Chạy song song vô hạn job"
    ],
    answer: 0,
    explanation: "Backoff giúp tránh retry quá dồn dập khi service hoặc tài nguyên đang lỗi tạm thời. Thường kết hợp với max retries."
  },
  {
    id: "auto_a_004",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Timeout Awareness",
    question: "Timeout trong automation hữu ích nhất khi nào?",
    code: "",
    options: [
      "Khi gọi service/API hoặc chạy bước có thể treo quá lâu",
      "Khi muốn bỏ qua validation",
      "Khi muốn hard-code secret",
      "Khi muốn job chạy vô hạn"
    ],
    answer: 0,
    explanation: "Timeout giúp job fail rõ ràng thay vì treo vô hạn. Đây là yếu tố quan trọng khi gọi API, database hoặc process ngoài."
  },
  {
    id: "auto_a_005",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Data Quality Check",
    question: "Check nào phù hợp cho output report tự động?",
    code: "",
    options: [
      "Kiểm tra row count không âm, key không null, schema đủ cột và metric trong range hợp lý",
      "Chỉ kiểm tra tên file dài hay ngắn",
      "Không kiểm tra vì automation đã chạy là đúng",
      "Chỉ print 5 dòng đầu rồi bỏ qua"
    ],
    answer: 0,
    explanation: "Output tự động cần quality checks rõ ràng để phát hiện dữ liệu thiếu, schema đổi, duplicate hoặc metric bất thường trước khi gửi report."
  },
  {
    id: "auto_a_006",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Alerting Awareness",
    question: "Alerting trong automation nên dùng khi nào?",
    code: "",
    options: [
      "Khi job fail hoặc data quality check quan trọng không đạt",
      "Mỗi khi script import thư viện thành công",
      "Khi không có dữ liệu đầu vào nhưng đó là expected behavior đã biết",
      "Thay thế hoàn toàn logging"
    ],
    answer: 0,
    explanation: "Alerting giúp người phụ trách biết khi job có vấn đề cần xử lý. Logging vẫn cần để điều tra chi tiết nguyên nhân."
  },
  {
    id: "auto_a_007",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Monitoring Awareness",
    question: "Monitoring automation job nên theo dõi thông tin nào?",
    code: "",
    options: [
      "Trạng thái job, thời gian chạy, số dòng xử lý, lỗi và freshness của dữ liệu",
      "Màu sắc của terminal",
      "Tên biến trong script",
      "Số lượng comment trong code"
    ],
    answer: 0,
    explanation: "Monitoring giúp phát hiện job chậm, fail, output thiếu dữ liệu hoặc dữ liệu không còn được cập nhật."
  },
  {
    id: "auto_a_008",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "GitHub Actions Basics",
    question: "Workflow GitHub Actions nào hợp lý cho job Python cơ bản?",
    code: "name: daily-job\non:\n  schedule:\n    - cron: \"0 7 * * *\"\njobs:\n  run:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: python script.py",
    options: [
      "Workflow chạy theo lịch 07:00 UTC và chạy script.py trên runner Ubuntu",
      "Workflow chỉ chạy khi mở notebook",
      "Workflow không có trigger",
      "Workflow tự động tạo secret mới"
    ],
    answer: 0,
    explanation: "schedule dùng cron để chạy định kỳ. runs-on chọn runner, checkout lấy code, và step run chạy command python script.py."
  },
  {
    id: "auto_a_009",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Secrets in CI",
    question: "Trong GitHub Actions, cách nào dùng secret an toàn hơn trong step?",
    code: "",
    options: [
      "Truyền secret qua biến môi trường từ `${{ secrets.API_TOKEN }}`",
      "Viết token trực tiếp trong lệnh run",
      "Commit token vào file config public",
      "Echo token đầy đủ ra log"
    ],
    answer: 0,
    explanation: "GitHub Secrets giúp đưa secret vào workflow mà không lộ trong repository. Không nên hard-code hoặc in secret ra log."
  },
  {
    id: "auto_a_010",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Virtual Environment Awareness",
    question: "Virtual environment giúp ích gì trong automation project?",
    code: "",
    options: [
      "Cô lập dependencies của project để giảm xung đột thư viện",
      "Tự động sửa mọi bug",
      "Thay thế GitHub Actions",
      "Xóa nhu cầu requirements.txt"
    ],
    answer: 0,
    explanation: "Virtual environment giúp project dùng bộ package riêng, tránh xung đột với hệ thống hoặc project khác."
  },
  {
    id: "auto_a_011",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Reproducibility",
    question: "Yếu tố nào giúp automation job dễ tái lập hơn?",
    code: "",
    options: [
      "Cố định dependencies, config rõ ràng, input/output có version hoặc timestamp và log đầy đủ",
      "Dùng random path mỗi lần chạy mà không log",
      "Hard-code đường dẫn máy cá nhân",
      "Không lưu thông tin lần chạy"
    ],
    answer: 0,
    explanation: "Reproducibility cần biết code, dependency, config, input và output của một lần chạy. Logging và versioning giúp audit lại kết quả."
  },
  {
    id: "auto_a_012",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Common Automation Errors",
    question: "Lỗi phổ biến nào xảy ra khi script automation dùng relative path không kiểm soát?",
    code: "",
    options: [
      "Job chạy ở working directory khác và không tìm thấy file input/output",
      "Python tự động sửa path",
      "File luôn được tìm thấy dù ở đâu",
      "Logging bị tắt vĩnh viễn"
    ],
    answer: 0,
    explanation: "Scheduler hoặc CI có working directory khác local. Nên dùng path từ config, Path(__file__) hoặc biến môi trường phù hợp."
  },
  {
    id: "auto_a_013",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Common Automation Errors",
    question: "Vì sao job automation chỉ chạy đúng trên máy cá nhân là rủi ro?",
    code: "",
    options: [
      "Vì job có thể phụ thuộc đường dẫn, package, credential hoặc setting local không được tài liệu hóa",
      "Vì máy cá nhân luôn nhanh hơn server",
      "Vì automation không thể chạy trên CI",
      "Vì script Python không chạy được ngoài notebook"
    ],
    answer: 0,
    explanation: "Automation cần chạy được ở môi trường chuẩn. Phụ thuộc vào máy cá nhân làm job khó tái lập, khó bàn giao và dễ fail khi đổi môi trường."
  },
  {
    id: "auto_a_014",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Script vs Notebook",
    question: "Khi nào notebook có thể không phù hợp cho automation production-like?",
    code: "",
    options: [
      "Khi job cần chạy định kỳ ổn định, có logging, error handling và parameter hóa rõ ràng",
      "Khi cần khám phá dữ liệu ban đầu",
      "Khi cần trình bày phân tích tương tác",
      "Khi cần ghi chú insight"
    ],
    answer: 0,
    explanation: "Notebook rất tốt cho exploration và storytelling. Nhưng job production-like thường cần script/module có tham số, logging, test và scheduler rõ ràng."
  },
  {
    id: "auto_a_015",
    library: "Automation for Data Analytics",
    level: "Advanced",
    topic: "Best Practice for Data Analytics Automation",
    question: "Best practice nào phù hợp nhất cho automation pipeline dữ liệu định kỳ?",
    code: "",
    options: [
      "Parameter hóa config, quản lý secret an toàn, log đầy đủ, validate dữ liệu, retry có giới hạn và alert khi lỗi",
      "Hard-code mọi thứ và bỏ qua lỗi để job luôn chạy xong",
      "Chỉ dựa vào print và kiểm tra thủ công",
      "Retry vô hạn và append output không kiểm tra duplicate"
    ],
    answer: 0,
    explanation: "Pipeline định kỳ cần ổn định và dễ vận hành: config rõ, secret an toàn, logging, validation, retry hợp lý, idempotency và alerting khi có vấn đề."
  },
  {
    id: "auto_e_001",
    library: "Automation for Data Analytics",
    level: "Expert",
    topic: "Idempotency",
    question: "Trong job incremental load, chiến lược nào giúp giảm rủi ro duplicate khi rerun?",
    code: "",
    options: [
      "Dùng key/watermark rõ ràng, upsert hoặc overwrite partition có kiểm soát thay vì append mù quáng",
      "Append lại toàn bộ dữ liệu mới mỗi lần chạy",
      "Không lưu watermark",
      "Bỏ qua kiểm tra duplicate để job nhanh hơn"
    ],
    answer: 0,
    explanation: "Rerun là tình huống thường gặp. Dùng key, watermark, upsert hoặc overwrite partition giúp job idempotent hơn và giảm duplicate."
  },
  {
    id: "auto_e_002",
    library: "Automation for Data Analytics",
    level: "Expert",
    topic: "Monitoring Awareness",
    question: "Một job chạy thành công về mặt kỹ thuật nhưng output rỗng bất thường nên được xem là gì?",
    code: "",
    options: [
      "Có thể là data quality incident cần cảnh báo hoặc điều tra",
      "Luôn là thành công hoàn toàn",
      "Không cần log vì không có lỗi Python",
      "Nên xóa toàn bộ lịch sử output"
    ],
    answer: 0,
    explanation: "Job không lỗi không đồng nghĩa dữ liệu đúng. Output rỗng bất thường có thể do upstream thiếu dữ liệu, filter sai hoặc schema đổi."
  },
  {
    id: "auto_e_003",
    library: "Automation for Data Analytics",
    level: "Expert",
    topic: "Secrets Handling",
    question: "Vì sao không nên in toàn bộ environment variables ra log trong CI để debug?",
    code: "",
    options: [
      "Vì có thể làm lộ secrets như token, password hoặc API key",
      "Vì environment variables không bao giờ tồn tại trong CI",
      "Vì log không thể lưu text",
      "Vì CI sẽ tự động xóa repository"
    ],
    answer: 0,
    explanation: "Environment variables có thể chứa secret. Debug log cần được kiểm soát và mask thông tin nhạy cảm."
  },
  {
    id: "auto_e_004",
    library: "Automation for Data Analytics",
    level: "Expert",
    topic: "Retry Logic",
    question: "Vì sao retry cần đi kèm idempotency trong job ghi dữ liệu?",
    code: "",
    options: [
      "Vì retry có thể chạy lại bước ghi và tạo duplicate hoặc side effect nếu job không idempotent",
      "Vì retry luôn làm dữ liệu sạch hơn",
      "Vì idempotency chỉ dùng cho visualization",
      "Vì retry không bao giờ chạy lại bước ghi"
    ],
    answer: 0,
    explanation: "Nếu một bước ghi đã thành công nhưng job fail trước khi ghi trạng thái, retry có thể ghi lại dữ liệu lần nữa. Idempotency giúp kiểm soát rủi ro này."
  },
  {
    id: "auto_e_005",
    library: "Automation for Data Analytics",
    level: "Expert",
    topic: "Best Practice for Data Analytics Automation",
    question: "Thiết kế nào phù hợp nhất cho automation production-like của Data Analyst?",
    code: "",
    options: [
      "Script có config, logging, validation, secret management, idempotent output, retry có giới hạn, monitoring và alerting",
      "Notebook chạy tay mỗi sáng và không lưu log",
      "Script hard-code path local và token trong code",
      "Job append output mọi lần chạy và không kiểm tra duplicate"
    ],
    answer: 0,
    explanation: "Automation production-like cần vận hành ổn định, dễ debug, an toàn với secret, có kiểm soát dữ liệu đầu ra và phát hiện sự cố sớm."
  }
];