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
      "Tăng số lượng biểu đồ trong dashboard mà không cần thiết kế lại",
      "Thay thế bước đọc hiểu business context trước khi phân tích",
      "Đảm bảo dữ liệu đúng tuyệt đối dù không có validation"
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
      "Manual run do người dùng kích hoạt, scheduled run được kích hoạt theo lịch",
      "Manual run luôn có log chi tiết hơn scheduled run trong mọi môi trường",
      "Scheduled run chỉ dùng cho SQL job, còn manual run chỉ dùng cho Python",
      "Scheduled run luôn tự sửa lỗi nếu job thất bại trong quá trình chạy"
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
      "Script dễ chạy qua command line, version control và tái lập hơn",
      "Script tự động hiểu thứ tự cell nên ít lỗi trạng thái hơn notebook",
      "Notebook không thể dùng package ngoài như pandas hoặc requests",
      "Notebook bắt buộc phải chạy bằng tay nên không thể export dữ liệu"
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
      "Tách rõ các bước như config, load data, transform, validate và export",
      "Gom toàn bộ xử lý vào một block lớn để tránh phải truyền tham số",
      "Ưu tiên hard-code path để script luôn chạy giống máy local ban đầu",
      "Bỏ qua error handling để job không bị dừng giữa chừng khi gặp lỗi"
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
      "Đặt luồng chạy chính của chương trình vào một entry point rõ ràng",
      "Tự động biến mọi biến local thành biến môi trường của hệ thống",
      "Thay thế toàn bộ function nhỏ để script chỉ còn một hàm duy nhất",
      "Tạo DataFrame mặc định trước khi import pandas hoặc đọc dữ liệu"
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
      "Chỉ chạy block đó khi file được chạy trực tiếp, không chạy khi import",
      "Cho phép Python tự cài dependency còn thiếu trước khi chạy script",
      "Buộc mọi function trong file phải chạy theo đúng thứ tự định nghĩa",
      "Tự tạo lịch chạy định kỳ nếu file nằm trong thư mục project"
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
      "Nhận tham số từ command line để script linh hoạt hơn",
      "Tự động tìm lỗi logic trong pipeline trước khi export output",
      "Gửi alert tới Slack khi job fail mà không cần cấu hình thêm",
      "Đọc mọi loại file dữ liệu mà không cần chỉ định format đầu vào"
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
      "Lưu các tham số có thể thay đổi như path, threshold, date range hoặc mode",
      "Lưu toàn bộ source code để scheduler không cần truy cập repository",
      "Thay thế logging vì config đã mô tả đủ quá trình chạy của job",
      "Tự động phát hiện và sửa mọi record sai trong dữ liệu đầu vào"
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
      "Khi cần truyền cấu hình hoặc secret mà không hard-code trong source code",
      "Khi cần xóa log cũ sau mỗi lần job chạy thành công",
      "Khi muốn bỏ qua validation vì môi trường đã được cấu hình đúng",
      "Khi không muốn truyền tham số nào cho script automation"
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
      "Đặt token trong file config rồi commit lên GitHub để workflow dễ tái lập",
      "In password ra log ở level DEBUG để dễ kiểm tra khi authentication lỗi",
      "Gắn secret vào tên file output để truy vết job đã dùng credential nào"
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
      "Vì Python chỉ đọc được file nếu đường dẫn là absolute path",
      "Vì output path không ảnh hưởng đến việc job có ghi được dữ liệu hay không",
      "Vì scheduler luôn tự chuyển file input về cùng thư mục với script"
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
      "Xử lý file path bằng Path object rõ ràng và portable hơn nối string thủ công",
      "Tự động đọc dữ liệu từ mọi database mà không cần connector",
      "Tạo cron expression hợp lệ dựa trên timezone của máy chạy",
      "Thay thế logging bằng cách tự ghi toàn bộ error ra file"
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
      "Có thể truyền qua argument hoặc config thay vì hard-code cố định",
      "Luôn viết theo đường dẫn tuyệt đối trên máy người tạo script",
      "Đặt input_path và output_path giống nhau để giảm số biến cần quản lý",
      "Không cần output_path vì automation chỉ dùng để kiểm tra code"
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
      "Tự động sửa record sai trước khi dữ liệu được export ra output",
      "Thay thế data validation vì log đã chứa toàn bộ thông tin cần biết",
      "Tăng tốc script bằng cách giảm số bước xử lý trong pipeline"
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
      "Logging có level, timestamp, format và dễ ghi ra file/hệ thống log hơn",
      "print không thể hiển thị text khi script chạy trong CI hoặc server",
      "logging tự động validate schema trước khi job ghi output",
      "logging không cần message nên ít gây nhiễu hơn print"
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
      "main() chỉ được gọi khi file này là entry point trực tiếp",
      "main() sẽ tự chạy mỗi khi file được import như một module",
      "main() chỉ chạy nếu script được scheduler gọi bằng cron",
      "Python sẽ tự tạo một job định kỳ dựa trên tên hàm main"
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
      "parser.argument(\"input_path\", type=\"path\")",
      "argparse.add_argument(parser, \"input-path\")",
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
      "output_dir.create_dir(parents=True, overwrite=False)",
      "Path.mkdir(output_dir, force_file=True)",
      "output_dir.make_file(exist_ok=True)"
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
      "Tên thể hiện mục đích, kỳ dữ liệu hoặc thời điểm chạy và tránh overwrite ngoài ý muốn",
      "Tên càng ngắn càng tốt, kể cả khi không thể biết file thuộc job nào",
      "Dùng cùng một tên output.csv cho mọi job để dashboard dễ kết nối hơn",
      "Không cần extension nếu scheduler đã biết script tạo loại file nào"
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
      "Khi cần giữ nhiều phiên bản output theo từng lần chạy để audit/rerun",
      "Khi muốn job luôn ghi đè một file cố định cho dashboard đọc trực tiếp",
      "Khi không cần lưu lịch sử và muốn giảm số lượng file trong thư mục",
      "Khi cần xóa toàn bộ output cũ ngay sau mỗi lần chạy thành công"
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
      "Overwrite thay dữ liệu cũ, append thêm dữ liệu mới vào dữ liệu hiện có",
      "Overwrite luôn giữ lịch sử đầy đủ hơn append trong mọi pipeline",
      "Append luôn xóa file cũ trước khi ghi dữ liệu mới vào output",
      "Hai cách chỉ khác tên gọi, kết quả dữ liệu cuối cùng luôn giống nhau"
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
      "Chạy lại cùng input vẫn cho kết quả nhất quán, không tạo duplicate/side effect ngoài ý muốn",
      "Job tự động chạy nhanh hơn sau mỗi lần retry vì dữ liệu đã được cache",
      "Job không cần logging vì kết quả đã được đảm bảo bởi scheduler",
      "Job không cần input vì toàn bộ dữ liệu được sinh ra trong script"
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
      "Tải hoặc xử lý lại toàn bộ dữ liệu cho mỗi lần chạy",
      "Chỉ lấy record mới phát sinh kể từ lần chạy trước",
      "Chỉ chạy validation mà không ghi dữ liệu output",
      "Chỉ đổi tên output file để tránh ghi đè dữ liệu cũ"
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
      "Chỉ xử lý dữ liệu mới hoặc đã thay đổi kể từ lần chạy trước",
      "Xử lý lại toàn bộ dataset ở mọi lần chạy để đảm bảo đầy đủ",
      "Chỉ sinh log file mà không đọc hoặc ghi dữ liệu business",
      "Chỉ chạy unit test cho function transform trước khi export"
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
      "Ghi nhớ mốc dữ liệu đã xử lý để lần chạy sau lấy phần tiếp theo",
      "Mã hóa output file để người khác không đọc được dữ liệu nhạy cảm",
      "Tự động tạo biểu đồ sau khi pipeline ghi dữ liệu thành công",
      "Xóa dữ liệu cũ khỏi source để tránh pipeline xử lý lại record cũ"
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
      "Cấu hình job chạy tự động theo thời gian hoặc theo một trigger nhất định",
      "Viết comment trong script để mô tả thứ tự xử lý dữ liệu",
      "Tạo DataFrame từ dictionary theo một schema đã định nghĩa sẵn",
      "Đổi tên cột trong CSV trước khi export sang dashboard/report"
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
      "Chạy mỗi ngày vào phút 0 của giờ 7",
      "Chạy mỗi 7 phút bắt đầu từ phút 0",
      "Chạy mỗi Chủ nhật lúc 00:07",
      "Chạy một lần duy nhất vào ngày 7 hằng tháng"
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
      "Chạy mỗi 15 phút trong mọi giờ",
      "Chạy mỗi 15 giờ trong mọi ngày",
      "Chạy vào ngày 15 của mỗi tháng",
      "Chạy vào phút 15 của mỗi ngày"
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
      "File YAML đặt trong thư mục .github/workflows/",
      "File Python đặt trong thư mục root với tên workflow.py",
      "File Excel trong thư mục data/ để GitHub đọc lịch chạy",
      "File JSON trong assets/ để mô tả command cần chạy"
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
      "Sự kiện hoặc điều kiện làm workflow được kích hoạt",
      "Biến pandas dùng để lọc dữ liệu trước khi export",
      "Một loại chart dùng để hiển thị trạng thái job",
      "File output cuối cùng được tạo bởi workflow"
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
      "Cron expression để mô tả lịch chạy định kỳ",
      "SQL SELECT để chọn thời điểm workflow chạy",
      "pandas query để lọc branch cần kích hoạt",
      "HTML selector để tìm workflow trong repository"
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
      "Định nghĩa automation tổng thể gồm trigger, jobs và steps",
      "Một dòng dữ liệu trong CSV sau khi job export thành công",
      "Một package Python được cài bằng pip trong runner",
      "Một notebook cell dùng để chạy lệnh shell trong CI"
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
      "Một nhóm steps chạy trên một runner được chỉ định",
      "Một dòng log được sinh ra sau mỗi command trong workflow",
      "Một file dữ liệu output được upload sau khi workflow chạy xong",
      "Một biến môi trường bắt buộc phải có trong mọi workflow"
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
      "Chạy một action hoặc một command cụ thể bên trong job",
      "Định nghĩa toàn bộ repository và các branch được bảo vệ",
      "Lưu secret dạng plain text để command có thể đọc trực tiếp",
      "Thay thế script Python bằng một file workflow duy nhất"
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
      "GitHub Secrets hoặc hệ thống quản lý secret an toàn",
      "Hard-code trực tiếp trong workflow YAML để runner luôn đọc được",
      "In ra log trước khi gọi script để xác nhận token có tồn tại",
      "Lưu trong tên branch hoặc commit message để dễ truy vết"
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
      "Tự động sửa lỗi code nếu unit test trong workflow thất bại",
      "Lưu password công khai để các job khác dùng lại sau khi workflow kết thúc",
      "Thay thế source code vì artifact luôn chứa toàn bộ repository"
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
      "Khi có lỗi nghiêm trọng khiến job hoặc một bước xử lý thất bại",
      "Khi ghi thông tin bình thường như số dòng dữ liệu đã xử lý",
      "Khi muốn debug giá trị từng biến trong lúc phát triển local",
      "Khi không có sự kiện đáng chú ý nhưng vẫn muốn file log có nội dung"
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
      "Vì nó che giấu lỗi và có thể tạo output sai mà không ai biết",
      "Vì Python không cho phép dùng except trong script automation",
      "Vì pass luôn làm job chạy nhanh hơn nhưng tốn nhiều bộ nhớ hơn",
      "Vì except chỉ hoạt động trong notebook, không hoạt động trong CI"
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
      "Validate schema, row count, null key hoặc các business rule quan trọng",
      "Xóa toàn bộ log để thư mục output chỉ còn file kết quả cuối cùng",
      "Bỏ qua kiểm tra để job chạy nhanh hơn và tránh false alarm",
      "Đổi extension file ngẫu nhiên để tránh ghi đè output cũ"
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
      "Khai báo các Python packages cần cài để project chạy được",
      "Lưu dữ liệu đầu ra của job sau mỗi lần scheduler chạy",
      "Lưu duy nhất cron schedule để GitHub Actions đọc lịch chạy",
      "Ghi toàn bộ log lỗi production thay cho hệ thống monitoring"
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
      "Mỗi lần chạy đều append toàn bộ dữ liệu hôm nay mà không kiểm tra duplicate",
      "Mỗi lần chạy overwrite partition ngày hiện tại sau khi pass validation",
      "Mỗi lần chạy tạo output từ cùng input và ghi đè có kiểm soát",
      "Mỗi lần chạy kiểm tra schema rồi mới export dữ liệu ra output"
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
      "Retry vô hạn cho mọi lỗi để job có nhiều cơ hội thành công hơn",
      "Không log lỗi retry để file log chỉ chứa kết quả cuối cùng",
      "Retry cả lỗi schema sai vì lỗi dữ liệu thường tự hết ở lần sau"
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
      "Giảm thời gian chờ sau mỗi lần retry",
      "Bỏ qua log để retry nhanh hơn",
      "Chạy song song nhiều retry cùng lúc"
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
      "Khi muốn validation bị bỏ qua nếu dữ liệu quá lớn",
      "Khi cần hard-code secret để job không hỏi credential",
      "Khi muốn job chạy vô hạn cho đến khi có output hợp lệ"
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
      "Kiểm tra row count, null key, schema đủ cột và metric trong range hợp lý",
      "Chỉ kiểm tra tên file output có đúng độ dài quy ước hay không",
      "Không kiểm tra vì job tự động chạy xong nghĩa là dữ liệu đã đúng",
      "Chỉ print 5 dòng đầu để xác nhận file không bị rỗng hoàn toàn"
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
      "Mỗi khi script import thư viện thành công để xác nhận môi trường",
      "Khi input rỗng nhưng đó là expected behavior đã được định nghĩa",
      "Để thay thế logging vì alert đã đủ thông tin điều tra nguyên nhân"
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
      "Trạng thái job, thời gian chạy, số dòng xử lý, lỗi và freshness dữ liệu",
      "Màu sắc của terminal để nhận biết job đang chạy ở môi trường nào",
      "Tên biến trong script để biết developer đặt code có rõ nghĩa không",
      "Số lượng comment trong source code để đánh giá chất lượng pipeline"
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
      "Workflow chỉ chạy khi mở notebook vì schedule không áp dụng cho script",
      "Workflow không có trigger vì cron phải đặt bên trong jobs.run.steps",
      "Workflow tự động tạo secret mới trước khi chạy command python script.py"
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
      "Viết token trực tiếp trong lệnh run để script đọc được ngay",
      "Commit token vào file config public rồi import trong workflow",
      "Echo token đầy đủ ra log để chắc chắn secret đã được inject"
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
      "Tự động sửa bug runtime khi package version không tương thích",
      "Thay thế GitHub Actions bằng môi trường chạy local ổn định hơn",
      "Loại bỏ nhu cầu requirements.txt vì environment đã lưu toàn bộ code"
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
      "Cố định dependencies, config rõ, input/output có version hoặc timestamp và log đầy đủ",
      "Dùng random path mỗi lần chạy để tránh ghi đè output cũ",
      "Hard-code đường dẫn máy cá nhân để job luôn biết nơi đọc dữ liệu",
      "Không lưu thông tin lần chạy để giảm nhiễu khi audit kết quả"
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
      "Python tự động sửa path nên job đọc nhầm file nhưng vẫn không báo lỗi",
      "File luôn được tìm thấy nếu script nằm cùng repository với dữ liệu",
      "Logging bị tắt vĩnh viễn vì relative path không hỗ trợ ghi log"
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
      "Vì job có thể phụ thuộc path, package, credential hoặc setting local không được tài liệu hóa",
      "Vì máy cá nhân thường nhanh hơn server nên kết quả performance không đại diện",
      "Vì automation không thể chạy trên CI nếu script được viết bằng Python",
      "Vì script Python chỉ chạy được trong notebook khi có dữ liệu local"
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
      "Khi job cần chạy định kỳ ổn định, có logging, error handling và parameter hóa rõ",
      "Khi cần khám phá dữ liệu ban đầu và thử nhiều hướng xử lý khác nhau",
      "Khi cần trình bày phân tích tương tác cho stakeholder đọc từng bước",
      "Khi cần ghi chú insight, chart và reasoning cùng với kết quả phân tích"
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
      "Hard-code mọi thứ để giảm sai khác giữa các lần chạy và bỏ qua lỗi để job luôn chạy xong",
      "Chỉ dựa vào print và kiểm tra thủ công output mỗi sáng trước khi gửi report",
      "Retry vô hạn và append output không kiểm tra duplicate để tránh mất dữ liệu"
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
      "Dùng key/watermark rõ ràng, upsert hoặc overwrite partition thay vì append mù quáng",
      "Append lại toàn bộ dữ liệu mới mỗi lần chạy để đảm bảo không sót record",
      "Không lưu watermark để mỗi lần chạy đều độc lập với trạng thái trước đó",
      "Bỏ qua kiểm tra duplicate nếu job đã chạy thành công ở lần gần nhất"
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
      "Là thành công hoàn toàn vì không có exception hoặc exit code lỗi",
      "Không cần log vì output rỗng nghĩa là không có dữ liệu để xử lý",
      "Nên xóa toàn bộ lịch sử output để tránh nhầm với dữ liệu mới"
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
      "Vì environment variables không tồn tại trong CI sau khi job bắt đầu",
      "Vì log của CI không thể lưu text có ký tự đặc biệt hoặc dấu bằng",
      "Vì CI sẽ tự động xóa repository nếu phát hiện biến môi trường"
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
      "Vì retry có thể chạy lại bước ghi và tạo duplicate/side effect nếu job không idempotent",
      "Vì retry luôn làm dữ liệu sạch hơn nếu job được chạy đủ số lần",
      "Vì idempotency chỉ cần cho visualization, không liên quan đến bước ghi dữ liệu",
      "Vì retry không bao giờ chạy lại bước ghi nếu lần trước đã ghi thành công"
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
      "Notebook chạy tay mỗi sáng, không log, nhưng có chart kiểm tra trực quan trước khi gửi report",
      "Script hard-code local path và token trong code để tránh lỗi thiếu biến môi trường",
      "Job append output mọi lần chạy và không kiểm tra duplicate để tránh mất dữ liệu mới"
    ],
    answer: 0,
    explanation: "Automation production-like cần vận hành ổn định, dễ debug, an toàn với secret, có kiểm soát dữ liệu đầu ra và phát hiện sự cố sớm."
  }
];