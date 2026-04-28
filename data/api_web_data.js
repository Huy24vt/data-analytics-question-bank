const API_WEB_DATA_QUESTIONS = [
  {
    id: "api_f_001",
    library: "API & Web Data",
    level: "Foundation",
    topic: "HTTP Basics",
    question: "Khi gọi API, status code 200 thường có ý nghĩa gì?",
    code: "",
    options: [
      "Request thành công",
      "Không có quyền truy cập",
      "Endpoint không tồn tại",
      "Bị giới hạn số request"
    ],
    answer: 0,
    explanation: "HTTP status code 200 thường nghĩa là request đã thành công. 401/403 liên quan đến quyền truy cập, 404 là không tìm thấy endpoint, 429 là bị rate limit."
  },
  {
    id: "api_f_002",
    library: "API & Web Data",
    level: "Foundation",
    topic: "API & Web Data Overview",
    question: "API thường được hiểu là gì trong workflow lấy dữ liệu?",
    code: "",
    options: [
      "Giao diện cho phép hệ thống lấy hoặc gửi dữ liệu theo quy tắc định sẵn",
      "Một file Excel lưu dữ liệu thủ công",
      "Một biểu đồ tương tác",
      "Một thuật toán machine learning"
    ],
    answer: 0,
    explanation: "API là giao diện để các hệ thống trao đổi dữ liệu hoặc chức năng theo format và endpoint được định nghĩa sẵn."
  },
  {
    id: "api_f_003",
    library: "API & Web Data",
    level: "Foundation",
    topic: "API vs Website",
    question: "Điểm khác biệt cơ bản giữa API và website là gì?",
    code: "",
    options: [
      "API thường trả dữ liệu có cấu trúc cho máy đọc, website thường hiển thị nội dung cho người dùng",
      "API chỉ dùng để vẽ giao diện",
      "Website luôn trả JSON còn API luôn trả HTML",
      "API không dùng HTTP"
    ],
    answer: 0,
    explanation: "API thường trả dữ liệu dạng JSON/XML để chương trình xử lý. Website thường trả HTML/CSS/JS để người dùng xem trong trình duyệt."
  },
  {
    id: "api_f_004",
    library: "API & Web Data",
    level: "Foundation",
    topic: "URL",
    question: "URL trong request API thường dùng để làm gì?",
    code: "",
    options: [
      "Xác định địa chỉ tài nguyên hoặc endpoint cần gọi",
      "Lưu toàn bộ dữ liệu trả về",
      "Tự động phân tích dữ liệu thành DataFrame",
      "Thay thế authentication token"
    ],
    answer: 0,
    explanation: "URL cho biết client cần gửi request tới địa chỉ nào, ví dụ một endpoint trả về danh sách records."
  },
  {
    id: "api_f_005",
    library: "API & Web Data",
    level: "Foundation",
    topic: "Endpoint",
    question: "Endpoint trong API thường là gì?",
    code: "",
    options: [
      "Một đường dẫn cụ thể để truy cập một loại tài nguyên hoặc hành động",
      "Một dòng dữ liệu trong DataFrame",
      "Một loại biểu đồ",
      "Một file log local"
    ],
    answer: 0,
    explanation: "Endpoint là URL/path cụ thể như /users hoặc /orders, đại diện cho tài nguyên hoặc hành động API cung cấp."
  },
  {
    id: "api_f_006",
    library: "API & Web Data",
    level: "Foundation",
    topic: "GET Method",
    question: "HTTP GET thường dùng để làm gì?",
    code: "",
    options: [
      "Lấy dữ liệu từ server",
      "Xóa dữ liệu trên server",
      "Gửi file lớn bắt buộc",
      "Mã hóa token"
    ],
    answer: 0,
    explanation: "GET thường dùng để đọc/lấy dữ liệu. Các thao tác tạo mới thường dùng POST tùy thiết kế API."
  },
  {
    id: "api_f_007",
    library: "API & Web Data",
    level: "Foundation",
    topic: "POST Method",
    question: "HTTP POST thường dùng trong trường hợp nào?",
    code: "",
    options: [
      "Gửi dữ liệu lên server để tạo hoặc xử lý tài nguyên",
      "Chỉ đọc dữ liệu không có body",
      "Chỉ kiểm tra status code",
      "Chỉ tải ảnh từ website"
    ],
    answer: 0,
    explanation: "POST thường dùng để gửi dữ liệu trong request body, ví dụ tạo record mới hoặc gửi payload để server xử lý."
  },
  {
    id: "api_f_008",
    library: "API & Web Data",
    level: "Foundation",
    topic: "Query Parameters",
    question: "Query parameters trong API thường dùng để làm gì?",
    code: "",
    options: [
      "Truyền điều kiện như page, limit, date hoặc filter trong URL",
      "Lưu API key an toàn tuyệt đối",
      "Thay thế hoàn toàn response body",
      "Tạo HTML parser"
    ],
    answer: 0,
    explanation: "Query params thường nằm sau dấu ? trong URL và dùng để truyền điều kiện lọc, phân trang hoặc cấu hình request."
  },
  {
    id: "api_f_009",
    library: "API & Web Data",
    level: "Foundation",
    topic: "Headers",
    question: "Headers trong HTTP request thường chứa thông tin nào?",
    code: "",
    options: [
      "Metadata của request như Content-Type hoặc Authorization",
      "Chỉ dữ liệu dạng bảng",
      "Chỉ HTML content",
      "Chỉ status code trả về"
    ],
    answer: 0,
    explanation: "Headers chứa metadata như loại nội dung, token xác thực, user agent hoặc thông tin client/server cần trao đổi."
  },
  {
    id: "api_f_010",
    library: "API & Web Data",
    level: "Foundation",
    topic: "Request Body",
    question: "Request body thường xuất hiện rõ nhất trong loại request nào?",
    code: "",
    options: [
      "POST request gửi payload lên server",
      "GET request chỉ lấy dữ liệu đơn giản",
      "Status code 404",
      "Response header"
    ],
    answer: 0,
    explanation: "Request body thường chứa dữ liệu gửi lên server, phổ biến trong POST/PUT/PATCH. GET thường truyền điều kiện qua query params."
  },
  {
    id: "api_f_011",
    library: "API & Web Data",
    level: "Foundation",
    topic: "requests.get",
    question: "Trong Python requests, hàm nào thường dùng để gửi GET request?",
    code: "import requests",
    options: [
      "requests.get(url)",
      "requests.read(url)",
      "requests.select(url)",
      "requests.fetch_json_only(url)"
    ],
    answer: 0,
    explanation: "requests.get(url) gửi HTTP GET request tới URL được chỉ định."
  },
  {
    id: "api_f_012",
    library: "API & Web Data",
    level: "Foundation",
    topic: "response.status_code",
    question: "response.status_code dùng để kiểm tra gì?",
    code: "import requests\nresponse = requests.Response()",
    options: [
      "HTTP status code của response",
      "Kích thước DataFrame",
      "Số lượng cột JSON",
      "Tên endpoint"
    ],
    answer: 0,
    explanation: "response.status_code cho biết trạng thái HTTP của response, ví dụ 200, 401, 404, 429 hoặc 500."
  },
  {
    id: "api_f_013",
    library: "API & Web Data",
    level: "Foundation",
    topic: "response.text",
    question: "response.text thường trả về gì?",
    code: "",
    options: [
      "Nội dung response dưới dạng string",
      "Status code dạng số nguyên",
      "Header Authorization",
      "Một pandas DataFrame"
    ],
    answer: 0,
    explanation: "response.text là nội dung response dạng text/string, có thể là HTML, JSON string hoặc plain text tùy server trả về."
  },
  {
    id: "api_f_014",
    library: "API & Web Data",
    level: "Foundation",
    topic: "response.json",
    question: "response.json() thường dùng để làm gì?",
    code: "",
    options: [
      "Parse response body dạng JSON thành Python object",
      "Chuyển response thành HTML",
      "Lấy status code",
      "Tạo API token mới"
    ],
    answer: 0,
    explanation: "response.json() parse JSON response thành Python dict/list nếu response body là JSON hợp lệ."
  },
  {
    id: "api_f_015",
    library: "API & Web Data",
    level: "Foundation",
    topic: "JSON Basics",
    question: "JSON thường được dùng trong API để làm gì?",
    code: "",
    options: [
      "Trao đổi dữ liệu có cấu trúc giữa client và server",
      "Lưu ảnh độ phân giải cao",
      "Tạo biểu đồ trực tiếp",
      "Thay thế hoàn toàn HTTP"
    ],
    answer: 0,
    explanation: "JSON là format dữ liệu phổ biến trong API vì dễ đọc, nhẹ và map tốt sang object như dict/list trong Python."
  },
  {
    id: "api_i_001",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Status Code",
    question: "Status code 400 Bad Request thường có ý nghĩa gì?",
    code: "",
    options: [
      "Request gửi lên không hợp lệ, ví dụ thiếu parameter hoặc sai format",
      "Request thành công",
      "Server yêu cầu giảm tốc độ request",
      "Endpoint chắc chắn đã bị xóa vĩnh viễn"
    ],
    answer: 0,
    explanation: "400 thường nghĩa là phía client gửi request không hợp lệ. Cần kiểm tra params, body hoặc format dữ liệu gửi lên."
  },
  {
    id: "api_i_002",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "401 Unauthorized",
    question: "Status code 401 Unauthorized thường liên quan đến vấn đề nào?",
    code: "",
    options: [
      "Chưa xác thực hoặc token/API key không hợp lệ",
      "Endpoint không tồn tại",
      "Server bị lỗi nội bộ",
      "Request thành công nhưng không có dữ liệu"
    ],
    answer: 0,
    explanation: "401 thường xảy ra khi request thiếu thông tin xác thực hoặc credential không hợp lệ/hết hạn."
  },
  {
    id: "api_i_003",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "403 Forbidden",
    question: "Status code 403 Forbidden thường có ý nghĩa gì?",
    code: "",
    options: [
      "Client đã được nhận diện nhưng không có quyền truy cập tài nguyên",
      "Request thiếu dấu ngoặc JSON",
      "Response luôn là HTML",
      "Server yêu cầu phân trang"
    ],
    answer: 0,
    explanation: "403 thường nghĩa là server hiểu request và biết client là ai, nhưng client không được phép truy cập tài nguyên đó."
  },
  {
    id: "api_i_004",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "404 Not Found",
    question: "Status code 404 Not Found thường cho biết điều gì?",
    code: "",
    options: [
      "Endpoint hoặc tài nguyên được yêu cầu không tìm thấy",
      "Request bị rate limit",
      "Token hết hạn",
      "Server chắc chắn trả JSON không hợp lệ"
    ],
    answer: 0,
    explanation: "404 nghĩa là URL/endpoint/tài nguyên không tồn tại hoặc không tìm thấy trên server."
  },
  {
    id: "api_i_005",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "429 Rate Limit",
    question: "Status code 429 thường có ý nghĩa gì?",
    code: "",
    options: [
      "Client gửi quá nhiều request và bị giới hạn tần suất",
      "Request thành công",
      "Endpoint không tồn tại",
      "JSON parse thành công"
    ],
    answer: 0,
    explanation: "429 Too Many Requests nghĩa là client đã vượt rate limit. Cần giảm tốc, chờ, dùng backoff hoặc tuân thủ quota API."
  },
  {
    id: "api_i_006",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "500 Server Error",
    question: "Status code 500 thường liên quan đến phía nào?",
    code: "",
    options: [
      "Lỗi phía server",
      "Sai syntax Python",
      "Sai tên biến DataFrame",
      "Không import pandas"
    ],
    answer: 0,
    explanation: "500 Internal Server Error thường là lỗi phía server. Client có thể retry có kiểm soát nếu lỗi tạm thời, nhưng không nên retry mù quáng."
  },
  {
    id: "api_i_007",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "requests.get",
    question: "Cách nào truyền query parameters đúng pattern với requests.get?",
    code: "import requests\nurl = \"https://example.com/api/items\"\nparams = {\"page\": 1, \"limit\": 100}",
    options: [
      "requests.get(url, params=params)",
      "requests.get(url, body=params)",
      "requests.get(params, url)",
      "requests.params(url, params)"
    ],
    answer: 0,
    explanation: "requests.get(url, params=params) để requests tự encode query parameters vào URL đúng cách."
  },
  {
    id: "api_i_008",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "requests.post",
    question: "Cách nào gửi JSON body bằng requests.post đúng pattern phổ biến?",
    code: "import requests\nurl = \"https://example.com/api/items\"\npayload = {\"name\": \"A\"}",
    options: [
      "requests.post(url, json=payload)",
      "requests.post(url, params_body=payload)",
      "requests.get(url, json=payload)",
      "requests.post(payload, url)"
    ],
    answer: 0,
    explanation: "requests.post(url, json=payload) gửi payload dạng JSON và thường tự set Content-Type phù hợp."
  },
  {
    id: "api_i_009",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Authentication",
    question: "Authentication khác authorization ở điểm nào?",
    code: "",
    options: [
      "Authentication xác minh bạn là ai; authorization xác định bạn được phép làm gì",
      "Authentication là phân trang; authorization là rate limit",
      "Authentication chỉ dùng cho HTML",
      "Hai khái niệm này luôn giống nhau"
    ],
    answer: 0,
    explanation: "Authentication kiểm tra danh tính như API key/token. Authorization kiểm tra quyền truy cập tài nguyên hoặc hành động."
  },
  {
    id: "api_i_010",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Bearer Token",
    question: "Bearer token thường được gửi ở đâu trong request?",
    code: "",
    options: [
      "Trong header Authorization",
      "Trong tên file Python",
      "Trong status code",
      "Trong pandas index"
    ],
    answer: 0,
    explanation: "Bearer token thường được gửi qua header dạng Authorization: Bearer <token>."
  },
  {
    id: "api_i_011",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "API Key",
    question: "Best practice nào phù hợp khi dùng API key trong code?",
    code: "",
    options: [
      "Không hard-code API key; dùng biến môi trường hoặc config an toàn",
      "Commit API key lên GitHub để dễ chia sẻ",
      "In API key ra log mỗi lần gọi request",
      "Đặt API key trong tên DataFrame"
    ],
    answer: 0,
    explanation: "API key là secret. Không nên hard-code hoặc commit công khai; nên dùng environment variables, secret manager hoặc config an toàn."
  },
  {
    id: "api_i_012",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Environment Variables Awareness",
    question: "Vì sao biến môi trường thường được dùng để lưu token/API key?",
    code: "",
    options: [
      "Để tách secret khỏi source code và giảm rủi ro lộ credential",
      "Để API luôn trả về dữ liệu nhanh hơn",
      "Để biến JSON thành HTML",
      "Để tránh phải kiểm tra status code"
    ],
    answer: 0,
    explanation: "Biến môi trường giúp code không chứa trực tiếp secret, giảm rủi ro khi chia sẻ hoặc commit source code."
  },
  {
    id: "api_i_013",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Nested JSON",
    question: "Nested JSON là gì?",
    code: "",
    options: [
      "JSON có object/list lồng bên trong object/list khác",
      "JSON chỉ có một string duy nhất",
      "HTML được nén lại",
      "Status code dạng list"
    ],
    answer: 0,
    explanation: "Nested JSON có cấu trúc lồng nhau như dict chứa list hoặc dict khác, thường cần normalize/flatten trước khi phân tích."
  },
  {
    id: "api_i_014",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "pandas json_normalize",
    question: "pd.json_normalize() thường dùng để làm gì?",
    code: "import pandas as pd",
    options: [
      "Flatten/normalize dữ liệu JSON lồng nhau thành DataFrame dạng bảng",
      "Gửi GET request",
      "Kiểm tra status code",
      "Tạo API token"
    ],
    answer: 0,
    explanation: "pd.json_normalize() hữu ích khi chuyển nested JSON thành DataFrame phẳng hơn để phân tích."
  },
  {
    id: "api_i_015",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "DataFrame from Records",
    question: "Cách nào tạo DataFrame từ list records dạng dict?",
    code: "import pandas as pd\nrecords = [{\"id\": 1}, {\"id\": 2}]",
    options: [
      "df = pd.DataFrame(records)",
      "df = pd.Series.to_frame(records)",
      "df = records.to_dataframe()",
      "df = pd.read_json_records(records)"
    ],
    answer: 0,
    explanation: "pd.DataFrame(records) chuyển list các dict cùng cấu trúc thành pandas DataFrame."
  },
  {
    id: "api_i_016",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Pagination",
    question: "Pagination trong API dùng để giải quyết vấn đề gì?",
    code: "",
    options: [
      "Chia kết quả lớn thành nhiều trang hoặc nhiều batch nhỏ hơn",
      "Mã hóa token",
      "Chuyển HTML thành JSON",
      "Tự động sửa lỗi 500"
    ],
    answer: 0,
    explanation: "Pagination giúp API trả dữ liệu theo từng phần thay vì trả toàn bộ một lần, giảm tải server và client."
  },
  {
    id: "api_i_017",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Page Number Pagination",
    question: "Page number pagination thường dùng tham số nào?",
    code: "",
    options: [
      "page và limit/page_size",
      "token và password",
      "html và css",
      "status_code và text"
    ],
    answer: 0,
    explanation: "Page number pagination thường dùng page=1, page=2 cùng limit hoặc page_size để lấy từng trang dữ liệu."
  },
  {
    id: "api_i_018",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Limit / Offset Pagination",
    question: "Limit/offset pagination thường hoạt động như thế nào?",
    code: "",
    options: [
      "limit xác định số record lấy, offset xác định vị trí bắt đầu",
      "limit là token, offset là password",
      "limit chỉ dùng cho HTML",
      "offset luôn là status code"
    ],
    answer: 0,
    explanation: "Ví dụ limit=100, offset=200 nghĩa là lấy 100 records bắt đầu từ vị trí 200."
  },
  {
    id: "api_i_019",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Cursor Pagination",
    question: "Cursor pagination thường khác page number pagination ở điểm nào?",
    code: "",
    options: [
      "Dùng cursor/next_token từ response để lấy batch tiếp theo",
      "Không bao giờ cần loop",
      "Chỉ dùng cho HTML",
      "Luôn trả về status code 404"
    ],
    answer: 0,
    explanation: "Cursor pagination dùng token hoặc cursor do server trả về, thường phù hợp với dữ liệu thay đổi liên tục hoặc dataset lớn."
  },
  {
    id: "api_i_020",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Rate Limit",
    question: "Rate limit trong API là gì?",
    code: "",
    options: [
      "Giới hạn số request client được gửi trong một khoảng thời gian",
      "Giới hạn số cột trong DataFrame",
      "Giới hạn số dòng của JSON nested",
      "Giới hạn số ký tự trong endpoint name"
    ],
    answer: 0,
    explanation: "Rate limit bảo vệ server khỏi quá tải và quản lý quota. Khi vượt quá, API có thể trả 429."
  },
  {
    id: "api_i_021",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Timeout",
    question: "Vì sao nên đặt timeout khi gọi API bằng requests?",
    code: "",
    options: [
      "Để tránh chương trình treo quá lâu khi server không phản hồi",
      "Để tự động parse JSON nhanh hơn",
      "Để bỏ qua authentication",
      "Để biến POST thành GET"
    ],
    answer: 0,
    explanation: "Timeout giúp request fail rõ ràng nếu server quá chậm hoặc không phản hồi, giúp pipeline ổn định hơn."
  },
  {
    id: "api_i_022",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Error Handling",
    question: "Cách xử lý response nào hợp lý hơn trước khi parse JSON?",
    code: "",
    options: [
      "Kiểm tra status_code hoặc gọi raise_for_status() rồi mới parse",
      "Luôn gọi response.json() mà không kiểm tra gì",
      "Bỏ qua mọi lỗi bằng except: pass",
      "Chỉ xem response.url"
    ],
    answer: 0,
    explanation: "Nên kiểm tra request thành công trước khi parse JSON. Nếu response là lỗi HTML hoặc empty body, response.json() có thể fail."
  },
  {
    id: "api_i_023",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Caching Response",
    question: "Caching response API có thể hữu ích vì lý do nào?",
    code: "",
    options: [
      "Giảm số lần gọi API lặp lại và hỗ trợ debug/reproducibility",
      "Tự động bypass authentication",
      "Làm dữ liệu luôn mới tuyệt đối",
      "Xóa nhu cầu kiểm tra schema"
    ],
    answer: 0,
    explanation: "Cache giúp giảm tải API, tránh vượt rate limit và cho phép debug cùng một raw response. Cần quản lý thời gian hết hạn cache nếu dữ liệu thay đổi."
  },
  {
    id: "api_i_024",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "Web Scraping Basics",
    question: "Web scraping khác gọi official API ở điểm nào?",
    code: "",
    options: [
      "Scraping thường parse HTML của website, còn API thường trả dữ liệu có cấu trúc như JSON",
      "Scraping luôn được phép trong mọi trường hợp",
      "API luôn trả về HTML",
      "Scraping không cần quan tâm rate limit"
    ],
    answer: 0,
    explanation: "Scraping lấy dữ liệu từ HTML website. Cần kiểm tra robots.txt, terms of service, rate limit và ưu tiên API chính thức nếu có."
  },
  {
    id: "api_i_025",
    library: "API & Web Data",
    level: "Intermediate",
    topic: "BeautifulSoup Basics",
    question: "BeautifulSoup thường dùng để làm gì?",
    code: "from bs4 import BeautifulSoup",
    options: [
      "Parse HTML và tìm element trong trang web",
      "Gửi Bearer token",
      "Tạo HTTP status code",
      "Nén JSON response"
    ],
    answer: 0,
    explanation: "BeautifulSoup là thư viện parse HTML/XML, thường dùng để tìm text, link, table hoặc element theo tag/class/id."
  },
  {
    id: "api_a_001",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Retry Logic",
    question: "Retry logic nên được áp dụng như thế nào?",
    code: "",
    options: [
      "Retry có giới hạn, có backoff, và chỉ retry các lỗi phù hợp như timeout hoặc lỗi server tạm thời",
      "Retry vô hạn mọi status code",
      "Retry liên tục lỗi 401 mà không sửa token",
      "Không bao giờ log lỗi retry"
    ],
    answer: 0,
    explanation: "Retry cần có kiểm soát để tránh làm quá tải server. Không nên retry mù quáng các lỗi 4xx như 401/403 khi nguyên nhân là quyền truy cập."
  },
  {
    id: "api_a_002",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Backoff Awareness",
    question: "Backoff trong retry API nghĩa là gì?",
    code: "",
    options: [
      "Tăng thời gian chờ giữa các lần retry để giảm tải và tăng cơ hội thành công",
      "Gửi request nhanh hơn sau mỗi lỗi",
      "Bỏ qua status code",
      "Chuyển JSON thành CSV"
    ],
    answer: 0,
    explanation: "Backoff, đặc biệt exponential backoff, giúp retry thưa dần thay vì spam request liên tục khi server đang lỗi hoặc rate limited."
  },
  {
    id: "api_a_003",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Pagination Completeness",
    question: "Khi lấy dữ liệu API có pagination, kiểm tra nào quan trọng?",
    code: "",
    options: [
      "Đảm bảo đã lấy đủ tất cả page/cursor và không dừng sớm",
      "Chỉ lấy page đầu tiên là đủ trong mọi trường hợp",
      "Bỏ qua total_count hoặc next_token",
      "Không cần kiểm tra duplicate"
    ],
    answer: 0,
    explanation: "Pagination dễ bị thiếu dữ liệu nếu loop sai điều kiện dừng. Nên kiểm tra số record, next_token, total_count nếu có và duplicate records."
  },
  {
    id: "api_a_004",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Incremental Load",
    question: "Incremental load trong API data pipeline nghĩa là gì?",
    code: "",
    options: [
      "Chỉ lấy dữ liệu mới hoặc thay đổi kể từ lần chạy trước",
      "Luôn tải lại toàn bộ dữ liệu mọi lần",
      "Chỉ lấy một record ngẫu nhiên",
      "Chỉ parse HTML table"
    ],
    answer: 0,
    explanation: "Incremental load dùng timestamp, watermark hoặc cursor để lấy phần dữ liệu mới, giúp tiết kiệm thời gian và quota API."
  },
  {
    id: "api_a_005",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Timestamp / Watermark",
    question: "Watermark trong incremental API pipeline thường dùng để làm gì?",
    code: "",
    options: [
      "Ghi nhớ mốc thời gian hoặc ID cuối đã xử lý để lần sau lấy tiếp",
      "Mã hóa API key",
      "Tạo HTML selector",
      "Tính status code trung bình"
    ],
    answer: 0,
    explanation: "Watermark giúp pipeline biết đã xử lý đến đâu, ví dụ last_updated_at lớn nhất hoặc order_id cuối cùng."
  },
  {
    id: "api_a_006",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Data Quality Check for API",
    question: "Kiểm tra data quality nào quan trọng sau khi lấy dữ liệu từ API?",
    code: "",
    options: [
      "Kiểm tra schema, missing fields, duplicate records và số lượng records theo expected logic",
      "Chỉ kiểm tra màu sắc của response",
      "Chỉ xem URL dài hay ngắn",
      "Không cần kiểm tra vì API luôn đúng"
    ],
    answer: 0,
    explanation: "Dữ liệu API vẫn có thể thiếu field, thay đổi schema, duplicate hoặc thiếu page. Cần kiểm tra chất lượng trước khi đưa vào report/model."
  },
  {
    id: "api_a_007",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Schema Change Awareness",
    question: "Schema change trong API response có thể gây vấn đề gì?",
    code: "",
    options: [
      "Pipeline parse/normalize có thể lỗi hoặc tạo cột thiếu/sai",
      "API tự động gửi email cảnh báo trong mọi trường hợp",
      "Status code luôn chuyển thành 200",
      "Dữ liệu tự động sạch hơn"
    ],
    answer: 0,
    explanation: "Nếu API thêm, đổi tên hoặc xóa field, code normalize và downstream report có thể lỗi. Nên có validation schema hoặc kiểm tra field quan trọng."
  },
  {
    id: "api_a_008",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Missing Fields",
    question: "Khi một số record JSON thiếu field, cách xử lý nào hợp lý hơn?",
    code: "",
    options: [
      "Chuẩn hóa schema, cho phép null nếu hợp lý và log/kiểm tra field quan trọng",
      "Bỏ qua toàn bộ dữ liệu mà không kiểm tra",
      "Tự điền giá trị ngẫu nhiên",
      "Xóa luôn API key"
    ],
    answer: 0,
    explanation: "Missing fields cần được xử lý có chủ đích: xác định field nào bắt buộc, field nào optional, và log để theo dõi chất lượng dữ liệu."
  },
  {
    id: "api_a_009",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Duplicate Records",
    question: "Vì sao duplicate records có thể xảy ra khi lấy API theo pagination?",
    code: "",
    options: [
      "Dữ liệu nguồn thay đổi giữa các lần gọi page hoặc logic cursor/page bị xử lý sai",
      "JSON không hỗ trợ unique record",
      "Status code 200 luôn tạo duplicate",
      "requests tự động nhân đôi response"
    ],
    answer: 0,
    explanation: "Pagination trên dữ liệu thay đổi liên tục hoặc xử lý cursor/offset sai có thể tạo trùng record. Nên deduplicate bằng key ổn định nếu có."
  },
  {
    id: "api_a_010",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Logging API Calls",
    question: "Logging API calls nên ghi thông tin nào lành mạnh?",
    code: "",
    options: [
      "Endpoint, thời điểm gọi, status code, số record và lỗi nếu có, tránh log secret",
      "Full API token trong mọi log",
      "Password và private key",
      "Toàn bộ dữ liệu cá nhân nhạy cảm"
    ],
    answer: 0,
    explanation: "Log nên hỗ trợ debug và audit nhưng không làm lộ secret hoặc dữ liệu nhạy cảm. Nên mask token/API key."
  },
  {
    id: "api_a_011",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Web Scraping Ethics",
    question: "Best practice nào phù hợp khi scraping website?",
    code: "",
    options: [
      "Kiểm tra robots.txt/terms, tôn trọng rate limit, không gây tải lớn và ưu tiên API chính thức nếu có",
      "Bỏ qua terms of service nếu code chạy được",
      "Gửi request liên tục nhanh nhất có thể",
      "Bypass CAPTCHA để lấy dữ liệu"
    ],
    answer: 0,
    explanation: "Scraping cần tuân thủ quy định website, không gây tải lớn và không bypass cơ chế bảo vệ. Nếu có API chính thức, nên ưu tiên API."
  },
  {
    id: "api_a_012",
    library: "API & Web Data",
    level: "Advanced",
    topic: "CSS Selector Awareness",
    question: "CSS selector trong scraping thường dùng để làm gì?",
    code: "",
    options: [
      "Chọn HTML elements theo tag, class, id hoặc cấu trúc",
      "Gửi POST request có JSON body",
      "Lưu token trong environment variable",
      "Tính rate limit"
    ],
    answer: 0,
    explanation: "CSS selector giúp tìm element trong HTML, ví dụ div.item, #main hoặc table tr tùy cấu trúc trang."
  },
  {
    id: "api_a_013",
    library: "API & Web Data",
    level: "Advanced",
    topic: "API Ethics",
    question: "Điều nào KHÔNG nên làm khi thu thập dữ liệu web/API?",
    code: "",
    options: [
      "Bypass login, CAPTCHA, paywall hoặc cơ chế chống bot trái phép",
      "Dùng API chính thức nếu có",
      "Tôn trọng rate limit",
      "Lưu raw response để audit nếu dữ liệu được phép"
    ],
    answer: 0,
    explanation: "Không nên bypass cơ chế truy cập hoặc chống bot trái phép. Cần tuân thủ điều khoản dịch vụ, pháp luật và nguyên tắc đạo đức dữ liệu."
  },
  {
    id: "api_a_014",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Performance Basics",
    question: "Cách nào thường giúp pipeline API hiệu quả hơn khi dữ liệu lớn?",
    code: "",
    options: [
      "Dùng pagination/batching, incremental load, caching hợp lý và chỉ lấy fields cần thiết nếu API hỗ trợ",
      "Luôn gọi toàn bộ dữ liệu mỗi phút",
      "Không dùng timeout để request chờ mãi",
      "Bỏ qua rate limit"
    ],
    answer: 0,
    explanation: "Pipeline hiệu quả cần giảm dữ liệu thừa, tránh gọi lặp không cần thiết và tuân thủ giới hạn API."
  },
  {
    id: "api_a_015",
    library: "API & Web Data",
    level: "Advanced",
    topic: "Common Errors",
    question: "Lỗi phổ biến nào xảy ra khi gọi response.json() trên response không phải JSON?",
    code: "",
    options: [
      "Có thể phát sinh lỗi parse JSON",
      "Status code tự động thành 200",
      "Response tự động chuyển thành DataFrame",
      "Token tự động refresh"
    ],
    answer: 0,
    explanation: "Nếu response là HTML error page hoặc plain text, response.json() có thể raise JSONDecodeError. Nên kiểm tra status code và Content-Type khi cần."
  },
  {
    id: "api_e_001",
    library: "API & Web Data",
    level: "Expert",
    topic: "Retry Logic",
    question: "Vì sao không nên retry mù quáng mọi lỗi 4xx?",
    code: "",
    options: [
      "Vì nhiều lỗi 4xx là lỗi client như sai token, thiếu quyền hoặc request sai; retry không sửa được nguyên nhân",
      "Vì 4xx luôn là lỗi server tạm thời",
      "Vì retry 4xx luôn làm dữ liệu đầy đủ hơn",
      "Vì 4xx chỉ xuất hiện khi response là CSV"
    ],
    answer: 0,
    explanation: "Các lỗi như 400, 401, 403 thường cần sửa request, credential hoặc quyền truy cập. Retry liên tục chỉ lãng phí quota và có thể gây tải."
  },
  {
    id: "api_e_002",
    library: "API & Web Data",
    level: "Expert",
    topic: "Incremental Load",
    question: "Rủi ro nào cần chú ý khi incremental load dựa trên updated_at timestamp?",
    code: "",
    options: [
      "Late-arriving records hoặc timezone không nhất quán có thể làm thiếu dữ liệu nếu watermark quá chặt",
      "updated_at luôn bảo đảm không bao giờ trùng",
      "timestamp không ảnh hưởng đến pipeline",
      "Incremental load không cần deduplicate"
    ],
    answer: 0,
    explanation: "Nếu record cập nhật muộn hoặc timezone lệch, pipeline có thể bỏ sót dữ liệu. Thường cần overlap window, deduplication và timezone chuẩn hóa."
  },
  {
    id: "api_e_003",
    library: "API & Web Data",
    level: "Expert",
    topic: "Pagination",
    question: "Trong cursor pagination, vì sao cần lưu next_cursor hoặc last_cursor cẩn thận?",
    code: "",
    options: [
      "Để tiếp tục lấy đúng batch tiếp theo và tránh bỏ sót hoặc lặp dữ liệu",
      "Để tạo API key mới",
      "Để chuyển HTML thành JSON",
      "Để xóa dữ liệu cũ trên server"
    ],
    answer: 0,
    explanation: "Cursor là trạng thái phân trang. Nếu lưu hoặc truyền sai cursor, pipeline có thể lấy trùng, bỏ sót hoặc dừng sai thời điểm."
  },
  {
    id: "api_e_004",
    library: "API & Web Data",
    level: "Expert",
    topic: "Schema Change Awareness",
    question: "Trong production API pipeline, cách nào giúp phát hiện schema change sớm hơn?",
    code: "",
    options: [
      "Validate các field bắt buộc, dtype kỳ vọng và log/cảnh báo khi schema khác dự kiến",
      "Bỏ qua mọi field mới và không log",
      "Chỉ nhìn status code 200",
      "Không lưu raw response"
    ],
    answer: 0,
    explanation: "Status code 200 không đảm bảo schema không đổi. Validation schema giúp phát hiện thay đổi trước khi report/model downstream sai."
  },
  {
    id: "api_e_005",
    library: "API & Web Data",
    level: "Expert",
    topic: "Best Practice for Data Analyst",
    question: "Workflow nào phù hợp nhất cho pipeline API production-like?",
    code: "",
    options: [
      "Gọi API có timeout, auth an toàn, pagination đầy đủ, retry có backoff, lưu raw/processed, validate schema và log có kiểm soát",
      "Hard-code token, gọi API không timeout, lấy page đầu tiên và bỏ qua lỗi",
      "Scrape trái phép nếu API chậm",
      "Chỉ kiểm tra response.text rồi đưa thẳng vào dashboard"
    ],
    answer: 0,
    explanation: "Pipeline tốt cần ổn định, an toàn và kiểm soát chất lượng: auth/secret an toàn, timeout, retry hợp lý, pagination đầy đủ, logging, raw data audit và validation."
  }
];