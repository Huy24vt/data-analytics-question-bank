const API_WEB_DATA_QUESTIONS = [
  {
    id: "api_f_001",
    library: "API & Web Data",
    level: "Foundation",
    topic: "HTTP Basics",
    question: "Khi gọi API, status code 200 thường có ý nghĩa gì?",
    code: "",
    options: [
      "Server đã xử lý request thành công ở mức HTTP",
      "Client đã gửi sai token nhưng server vẫn nhận",
      "Endpoint hợp lệ nhưng tài nguyên bị ẩn quyền",
      "Request bị giới hạn tần suất và cần chờ thêm"
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
      "Cơ chế để hệ thống trao đổi dữ liệu/chức năng theo quy ước",
      "Một bảng dữ liệu đã được làm sạch để import vào BI tool",
      "Một dashboard dùng để người dùng cuối tương tác với số liệu",
      "Một mô hình dự báo tự động chạy sau khi dữ liệu được cập nhật"
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
      "API ưu tiên dữ liệu có cấu trúc cho chương trình; website ưu tiên nội dung hiển thị cho người dùng",
      "API luôn chạy trong trình duyệt; website chỉ được gọi bằng Python hoặc backend service",
      "API chỉ trả HTML đã render; website chỉ trả JSON để ứng dụng khác phân tích",
      "API không dùng giao thức HTTP; website bắt buộc dùng HTTP cho mọi request"
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
      "Chỉ ra địa chỉ server/path của tài nguyên hoặc endpoint cần gọi",
      "Xác định schema cuối cùng của DataFrame sau khi parse response",
      "Lưu credential để server biết người gọi có quyền truy cập",
      "Định nghĩa toàn bộ logic retry và backoff của API client"
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
      "Path cụ thể đại diện cho một tài nguyên hoặc hành động API",
      "Record đầu tiên trong response sau khi parse JSON thành bảng",
      "File cấu hình local chứa token và thông tin kết nối server",
      "Tên biến Python dùng để lưu kết quả trả về từ requests"
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
      "Đọc hoặc truy xuất dữ liệu từ server mà không tạo mới tài nguyên",
      "Gửi payload để tạo tài nguyên mới trên server theo mặc định",
      "Xóa vĩnh viễn tài nguyên trên server khi request thành công",
      "Mã hóa authorization token trước khi gửi qua HTTP header"
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
      "Gửi payload lên server để tạo mới hoặc yêu cầu server xử lý dữ liệu",
      "Lấy dữ liệu đơn giản bằng query string mà không cần request body",
      "Kiểm tra nhanh endpoint có tồn tại mà không cần truyền dữ liệu",
      "Tải nội dung tĩnh từ trình duyệt giống một trang HTML thông thường"
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
      "Truyền điều kiện lọc, phân trang hoặc cấu hình request trên URL",
      "Định nghĩa kiểu dữ liệu của từng cột sau khi chuyển sang DataFrame",
      "Lưu secret an toàn hơn header vì query string không xuất hiện trong log",
      "Thay thế response body khi API không trả dữ liệu dạng JSON hợp lệ"
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
      "Metadata như Content-Type, Authorization, Accept hoặc User-Agent",
      "Dữ liệu business chính luôn được server trả về dưới dạng bảng",
      "HTTP status code cuối cùng sau khi response đã được parse xong",
      "Danh sách toàn bộ endpoint mà một API service đang hỗ trợ"
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
      "POST/PUT/PATCH khi client cần gửi payload cho server xử lý",
      "GET request đơn giản khi chỉ truyền filter qua query parameters",
      "Response trả về lỗi 404 vì endpoint hoặc tài nguyên không tồn tại",
      "Header của response khi server mô tả kiểu dữ liệu trả về"
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
      "requests.request_get(url)",
      "requests.fetch(url, method='GET')",
      "requests.read(url, params='GET')"
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
      "Mã trạng thái HTTP mà server trả về cho request",
      "Số lượng record sau khi JSON được normalize thành DataFrame",
      "Tên endpoint cuối cùng sau khi requests tự động redirect",
      "Kích thước body tính theo số cột dữ liệu business trả về"
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
      "Nội dung response đã decode thành chuỗi text/string",
      "Body đã parse sẵn thành dict/list nếu response là JSON",
      "Status code dạng số nguyên kèm lý do lỗi HTTP",
      "Header Authorization mà client đã gửi lên server"
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
      "Parse response body JSON hợp lệ thành object Python",
      "Chuyển mọi response HTML thành JSON theo schema tự động",
      "Lấy HTTP status code và tự raise lỗi nếu request thất bại",
      "Tạo token mới từ response header Authorization"
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
      "Biểu diễn dữ liệu có cấu trúc để client và server trao đổi",
      "Lưu trữ ảnh, video hoặc file nhị phân thay cho object storage",
      "Render trực tiếp giao diện dashboard trong trình duyệt người dùng",
      "Thay thế giao thức HTTP khi client gọi dữ liệu từ server"
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
      "Client gửi request không hợp lệ như thiếu field, sai params hoặc sai format",
      "Request đã thành công nhưng response không có record nào để trả về",
      "Server đang quá tải tạm thời nên yêu cầu retry sau một khoảng chờ",
      "Endpoint đã bị xóa vĩnh viễn và không còn được server hỗ trợ"
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
      "Request thiếu credential hợp lệ hoặc token/API key không được chấp nhận",
      "User đã xác thực đúng nhưng role không đủ quyền xem tài nguyên",
      "Endpoint không tồn tại hoặc URL path bị viết sai trong request",
      "Server xử lý lỗi nội bộ dù request của client hoàn toàn hợp lệ"
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
      "Server nhận diện được client nhưng client không được phép truy cập tài nguyên",
      "Request thiếu thông tin xác thực nên server chưa biết người gọi là ai",
      "URL path sai nên server không tìm thấy endpoint được yêu cầu",
      "Server tạm thời lỗi và nên retry ngay với cùng token hiện tại"
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
      "Endpoint hoặc tài nguyên được yêu cầu không tồn tại/không tìm thấy",
      "Request hợp lệ nhưng client chưa được cấp đủ quyền truy cập",
      "Client vượt quota request trong một khoảng thời gian ngắn",
      "Server trả lỗi nội bộ dù URL và authentication đều đúng"
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
      "Client vượt giới hạn số request được phép trong một khoảng thời gian",
      "Request sai schema nên server không hiểu được payload gửi lên",
      "Credential hết hạn nên cần refresh token trước khi gọi lại",
      "Endpoint không tồn tại nên cần đổi sang một URL path khác"
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
      "Lỗi phía server, có thể retry có kiểm soát nếu là lỗi tạm thời",
      "Lỗi phía client do body thiếu field hoặc query params sai format",
      "Lỗi xác thực vì token/API key thiếu hoặc đã hết hạn sử dụng",
      "Lỗi phân quyền vì user đã login nhưng không được xem tài nguyên"
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
      "requests.get(url, json=params)",
      "requests.get(params=params, endpoint=url)",
      "requests.params(url, query=params)"
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
      "requests.post(url, params=payload)",
      "requests.get(url, json=payload)",
      "requests.post(payload, headers=url)"
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
      "Authentication xác minh danh tính; authorization quyết định quyền được làm gì",
      "Authentication quyết định quota; authorization quyết định response là JSON hay HTML",
      "Authentication là bước parse token; authorization là bước normalize dữ liệu trả về",
      "Authentication chỉ dùng cho API public; authorization chỉ dùng cho web scraping"
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
      "Trong header Authorization theo dạng Bearer token",
      "Trong query parameter vì token ở URL luôn an toàn hơn header",
      "Trong response.status_code để server tự nhận biết người gọi",
      "Trong tên endpoint để mỗi route đại diện cho một credential"
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
      "Không hard-code secret; dùng biến môi trường hoặc secret/config an toàn",
      "Commit API key vào repo private để team luôn chạy được code giống nhau",
      "In API key ra log debug để dễ kiểm tra request lỗi authentication",
      "Gắn API key vào tên file output để truy vết nguồn dữ liệu nhanh hơn"
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
      "Tách secret khỏi source code để giảm rủi ro lộ credential khi chia sẻ/commit",
      "Giúp API luôn trả nhanh hơn vì server đọc token từ OS thay vì HTTP header",
      "Buộc response JSON tự động chuyển thành DataFrame đúng schema mong muốn",
      "Loại bỏ nhu cầu kiểm tra status code vì credential đã nằm ngoài code"
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
      "JSON có object/list nằm lồng bên trong object/list khác",
      "JSON chỉ gồm key-value phẳng và không cho phép list bên trong",
      "HTML sau khi nén lại thành chuỗi để gửi qua API response",
      "Status code được biểu diễn thành mảng nhiều phần tử"
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
      "Flatten hoặc normalize JSON lồng nhau thành DataFrame dạng bảng",
      "Gửi request GET và tự động xử lý phân trang cho mọi API",
      "Kiểm tra status code và retry nếu server trả lỗi tạm thời",
      "Tạo token mới từ nested JSON chứa thông tin authentication"
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
      "df = pd.json_normalize(records, method='records')",
      "df = records.to_dataframe(index=False)",
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
      "Chia tập kết quả lớn thành nhiều page/batch nhỏ để lấy dần",
      "Nén token authentication để request header có kích thước nhỏ hơn",
      "Chuyển HTML thô thành JSON trước khi đưa vào pandas DataFrame",
      "Tự động sửa lỗi server 500 bằng cách gọi lại endpoint khác"
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
      "page kết hợp với limit hoặc page_size",
      "cursor kết hợp với next_token bắt buộc",
      "offset kết hợp với authorization header",
      "status_code kết hợp với response.text"
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
      "limit là số record cần lấy; offset là vị trí bắt đầu của batch",
      "limit là tổng số page; offset là token server trả về cho page kế tiếp",
      "limit là thời gian chờ request; offset là số lần retry tối đa",
      "limit là số cột được trả về; offset là field dùng để sort dữ liệu"
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
      "Dùng page=1, page=2 và không cần đọc thông tin từ response",
      "Chỉ dùng được khi dữ liệu là HTML table thay vì JSON response",
      "Luôn trả đúng tổng số record nên không cần kiểm tra điều kiện dừng"
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
      "Giới hạn tần suất request client được gửi trong một khoảng thời gian",
      "Giới hạn số cột tối đa sau khi normalize JSON thành DataFrame",
      "Giới hạn độ sâu nested JSON mà pandas có thể parse được",
      "Giới hạn số endpoint mà một API service có thể công khai"
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
      "Tránh chương trình treo quá lâu khi server chậm hoặc không phản hồi",
      "Đảm bảo response.json() luôn parse thành công kể cả body là HTML",
      "Bỏ qua authentication khi token hết hạn hoặc API key không hợp lệ",
      "Chuyển request POST thành GET nếu server không chấp nhận payload"
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
      "Kiểm tra status_code hoặc raise_for_status() trước khi parse body",
      "Luôn gọi response.json() trước vì lỗi HTTP vẫn luôn trả JSON hợp lệ",
      "Bọc toàn bộ code bằng except: pass để pipeline không bao giờ dừng",
      "Chỉ kiểm tra response.url vì URL đúng thì body chắc chắn đúng schema"
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
      "Giảm call lặp lại, tránh quota/rate limit và hỗ trợ debug cùng raw response",
      "Đảm bảo dữ liệu luôn realtime hơn so với gọi trực tiếp API mỗi lần",
      "Cho phép bỏ qua authentication vì response cũ đã từng lấy thành công",
      "Loại bỏ nhu cầu kiểm tra schema vì cache luôn chuẩn hóa dữ liệu"
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
      "Scraping parse HTML từ website; official API thường trả dữ liệu có cấu trúc",
      "Scraping luôn hợp lệ pháp lý; official API thường bị cấm dùng cho automation",
      "Scraping không cần rate limit; official API mới cần xử lý quota request",
      "Scraping luôn trả JSON; official API thường chỉ trả HTML đã render"
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
      "Parse HTML/XML và tìm element theo tag, class, id hoặc selector",
      "Gửi Bearer token và tự động refresh credential khi hết hạn",
      "Tạo HTTP status code giả để test retry logic trong requests",
      "Nén JSON response thành file nhị phân để upload lên server"
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
      "Retry có giới hạn, backoff, và chỉ áp dụng cho lỗi phù hợp như timeout/5xx tạm thời",
      "Retry vô hạn mọi status code để tối đa hóa xác suất lấy đủ dữ liệu",
      "Retry lỗi 401/403 liên tục vì vấn đề quyền thường tự hết sau vài giây",
      "Không log lỗi retry để tránh làm pipeline chậm và file log quá lớn"
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
      "Tăng khoảng chờ giữa các lần retry để giảm tải và tăng cơ hội thành công",
      "Giảm dần thời gian chờ sau mỗi lỗi để lấy dữ liệu nhanh nhất có thể",
      "Bỏ qua status code và chỉ dựa vào độ dài response.text để retry",
      "Chuyển đổi response JSON thành CSV sau mỗi lần request thất bại"
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
      "Xác nhận đã lấy đủ page/cursor, số record hợp lý và không dừng sớm",
      "Chỉ cần page đầu tiên nếu status code là 200 và response có dữ liệu",
      "Bỏ qua next_token vì API thường tự trả toàn bộ dữ liệu ở response cuối",
      "Không cần kiểm tra duplicate vì pagination luôn bảo toàn unique key"
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
      "Chỉ lấy dữ liệu mới/thay đổi kể từ lần chạy trước bằng cursor hoặc watermark",
      "Tải lại toàn bộ lịch sử ở mỗi lần chạy để tránh phải lưu trạng thái",
      "Lấy ngẫu nhiên một phần dữ liệu để giảm tải cho client và server",
      "Chỉ parse HTML table thay vì gọi endpoint trả JSON có cấu trúc"
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
      "Lưu mốc thời gian/ID cuối đã xử lý để lần chạy sau lấy tiếp",
      "Mã hóa API key trước khi đưa vào header Authorization",
      "Tạo CSS selector ổn định để scraping không bị vỡ khi đổi layout",
      "Tính trung bình status code để đánh giá sức khỏe của API"
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
      "Kiểm tra schema, missing fields, duplicate, record count và logic kỳ vọng",
      "Chỉ kiểm tra response có màu sắc/format giống tài liệu API mô tả",
      "Chỉ xem URL có đúng endpoint vì server trả 200 là đủ tin cậy",
      "Bỏ qua validation vì dữ liệu từ API production luôn sạch và ổn định"
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
      "Code parse/normalize hoặc downstream report có thể lỗi, thiếu cột hoặc sai nghĩa dữ liệu",
      "API luôn gửi email cảnh báo trước nên pipeline không cần tự validate",
      "Status code sẽ tự đổi sang 500 nên rất dễ phát hiện bằng retry logic",
      "Dữ liệu sẽ tự động sạch hơn vì field mới thay thế field cũ chính xác"
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
      "Chuẩn hóa schema, cho phép null có kiểm soát và log field quan trọng bị thiếu",
      "Bỏ toàn bộ batch ngay lập tức mà không cần phân biệt optional và required fields",
      "Tự điền giá trị ngẫu nhiên để DataFrame không còn null trước khi report",
      "Xóa API key để buộc pipeline gọi lại bằng credential mới"
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
      "Nguồn dữ liệu thay đổi giữa các page hoặc logic cursor/offset bị xử lý sai",
      "JSON không hỗ trợ primary key nên mọi response đều có duplicate tự nhiên",
      "Status code 200 khiến requests tự động nhân đôi body để chống mất dữ liệu",
      "Content-Type application/json luôn tạo duplicate khi response quá lớn"
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
      "Endpoint, thời điểm, status code, số record, lỗi; mask token/secret",
      "Full API token, password và private key để debug authentication dễ hơn",
      "Toàn bộ dữ liệu cá nhân nhạy cảm vì log càng chi tiết càng tốt",
      "Chỉ log response.text và bỏ qua status code để tiết kiệm dung lượng"
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
      "Kiểm tra robots.txt/terms, tôn trọng rate limit, tránh gây tải và ưu tiên API chính thức",
      "Bỏ qua terms nếu dữ liệu hiển thị công khai trong trình duyệt người dùng",
      "Gửi request liên tục nhanh nhất có thể để hoàn thành trước khi bị chặn",
      "Bypass CAPTCHA/paywall nếu chỉ dùng dữ liệu cho mục đích học tập cá nhân"
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
      "Chọn HTML elements theo tag, class, id, attribute hoặc cấu trúc trang",
      "Gửi POST request với JSON body và tự set Content-Type phù hợp",
      "Lưu token trong environment variable để tránh commit secret lên GitHub",
      "Tính quota còn lại dựa trên header X-RateLimit-Remaining"
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
      "Dùng API chính thức khi website cung cấp endpoint phù hợp",
      "Tôn trọng rate limit và giới hạn tốc độ request tới server",
      "Lưu raw response phục vụ audit khi dữ liệu được phép thu thập"
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
      "Dùng pagination/batching, incremental load, cache hợp lý và chỉ lấy field cần thiết",
      "Gọi full history mỗi phút để đảm bảo dashboard luôn có dữ liệu mới nhất",
      "Không đặt timeout để request có thể chờ đến khi server phản hồi thành công",
      "Bỏ qua rate limit nếu pipeline chạy trong môi trường server nội bộ"
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
      "Có thể raise lỗi parse JSON như JSONDecodeError",
      "Status code tự động chuyển thành 200 sau khi parse thất bại",
      "Response tự động chuyển thành DataFrame rỗng để tránh crash",
      "Token được refresh tự động vì server biết client parse lỗi"
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
      "Nhiều lỗi 4xx là lỗi client như sai token/quyền/request nên retry không sửa nguyên nhân",
      "4xx thường là lỗi server tạm thời nên retry càng nhiều càng dễ thành công",
      "Retry 4xx giúp API tự suy luận lại request và trả dữ liệu đầy đủ hơn",
      "4xx chỉ xuất hiện khi response là CSV nên không liên quan đến API JSON"
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
      "Late-arriving data, timezone lệch hoặc watermark quá chặt có thể làm sót record",
      "updated_at luôn unique và tăng tuyệt đối nên không cần overlap window",
      "Timestamp chỉ ảnh hưởng format hiển thị chứ không ảnh hưởng logic load",
      "Incremental load loại bỏ hoàn toàn nhu cầu deduplicate ở downstream"
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
      "Để resume đúng batch tiếp theo, tránh lấy trùng, bỏ sót hoặc dừng sai",
      "Để tạo API key mới cho mỗi page và tránh bị rate limit theo credential",
      "Để chuyển response HTML thành JSON trước khi đưa vào pandas",
      "Để xóa dữ liệu cũ trên server sau khi pipeline đã xử lý thành công"
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
      "Validate required fields, dtype kỳ vọng và cảnh báo khi schema khác dự kiến",
      "Bỏ qua field mới để pipeline không phải thay đổi khi API được nâng cấp",
      "Chỉ kiểm tra status code 200 vì schema sai sẽ luôn trả lỗi HTTP",
      "Không lưu raw response để tránh phát hiện sai khác giữa các lần chạy"
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
      "Gọi API có timeout, auth an toàn, pagination đủ, retry backoff, lưu raw/processed, validate và log kiểm soát",
      "Hard-code token, gọi không timeout, lấy page đầu và bỏ qua lỗi để pipeline chạy nhanh",
      "Scrape trái phép nếu official API chậm vì dashboard cần dữ liệu mới liên tục",
      "Chỉ kiểm tra response.text rồi đưa thẳng vào dashboard để giảm độ phức tạp"
    ],
    answer: 0,
    explanation: "Pipeline tốt cần ổn định, an toàn và kiểm soát chất lượng: auth/secret an toàn, timeout, retry hợp lý, pagination đầy đủ, logging, raw data audit và validation."
  }
];