const STREAMLIT_QUESTIONS = [
  {
    id: "st_f_001",
    library: "Streamlit",
    level: "Foundation",
    topic: "App Basics",
    question: "Alias phổ biến nhất khi import Streamlit là gì?",
    code: "import streamlit as ?",
    options: [
      "pd",
      "np",
      "st",
      "px"
    ],
    answer: 2,
    explanation: "Streamlit thường được import bằng alias st: import streamlit as st. pd dùng cho pandas, np cho NumPy, px cho plotly.express."
  },
  {
    id: "st_f_002",
    library: "Streamlit",
    level: "Foundation",
    topic: "Streamlit Overview",
    question: "Streamlit thường được dùng để làm gì trong Data Analytics?",
    code: "",
    options: [
      "Tạo data app hoặc dashboard nhanh bằng Python",
      "Huấn luyện deep learning model như PyTorch",
      "Quản trị database server ở tầng production",
      "Viết giao diện mobile native cho iOS/Android"
    ],
    answer: 0,
    explanation: "Streamlit giúp Data Analyst tạo data app, dashboard, demo model hoặc tool nội bộ nhanh bằng Python mà không cần viết frontend phức tạp."
  },
  {
    id: "st_f_003",
    library: "Streamlit",
    level: "Foundation",
    topic: "Running Streamlit App",
    question: "Command phổ biến để chạy một file Streamlit app tên app.py là gì?",
    code: "",
    options: [
      "streamlit run app.py",
      "python streamlit app.py",
      "run-streamlit app.py",
      "st.start app.py"
    ],
    answer: 0,
    explanation: "Command phổ biến là streamlit run app.py. Lệnh này khởi chạy Streamlit server local và render app trong trình duyệt."
  },
  {
    id: "st_f_004",
    library: "Streamlit",
    level: "Foundation",
    topic: "st.write",
    question: "st.write() trong Streamlit thường dùng để làm gì?",
    code: "",
    options: [
      "Render nhiều loại nội dung như text, object hoặc DataFrame",
      "Ghi dữ liệu ra file CSV trong thư mục project",
      "Train model machine learning trực tiếp trên cloud",
      "Deploy app lên server mà không cần cấu hình"
    ],
    answer: 0,
    explanation: "st.write() là hàm hiển thị linh hoạt, có thể render text, số, DataFrame, markdown đơn giản và nhiều object khác."
  },
  {
    id: "st_f_005",
    library: "Streamlit",
    level: "Foundation",
    topic: "st.title / st.header / st.subheader",
    question: "Hàm nào thường dùng để hiển thị tiêu đề chính của Streamlit app?",
    code: "import streamlit as st",
    options: [
      "st.title(\"Dashboard\")",
      "st.dataframe(\"Dashboard\")",
      "st.slider(\"Dashboard\")",
      "st.cache_data(\"Dashboard\")"
    ],
    answer: 0,
    explanation: "st.title() dùng để hiển thị tiêu đề chính. st.header() và st.subheader() thường dùng cho các cấp tiêu đề nhỏ hơn."
  },
  {
    id: "st_f_006",
    library: "Streamlit",
    level: "Foundation",
    topic: "Markdown Display",
    question: "Hàm nào thường dùng để hiển thị Markdown trong Streamlit?",
    code: "import streamlit as st",
    options: [
      "st.markdown(\"**Hello**\")",
      "st.html_markdown(\"**Hello**\")",
      "st.write_markdown_file(\"**Hello**\")",
      "st.md_only(\"**Hello**\")"
    ],
    answer: 0,
    explanation: "st.markdown() dùng để render nội dung Markdown như bold, heading, bullet hoặc link trong app."
  },
  {
    id: "st_f_007",
    library: "Streamlit",
    level: "Foundation",
    topic: "Data Display",
    question: "st.dataframe() thường phù hợp nhất khi nào?",
    code: "",
    options: [
      "Khi cần hiển thị DataFrame dạng bảng có tương tác",
      "Khi cần tạo password input cho người dùng",
      "Khi cần chạy cron job theo lịch cố định",
      "Khi cần lưu model artifact ra ổ đĩa"
    ],
    answer: 0,
    explanation: "st.dataframe() hiển thị DataFrame dạng bảng có thể cuộn, sort hoặc tương tác ở mức cơ bản tùy app."
  },
  {
    id: "st_f_008",
    library: "Streamlit",
    level: "Foundation",
    topic: "st.table",
    question: "st.table() khác st.dataframe() ở điểm nào ở mức cơ bản?",
    code: "",
    options: [
      "st.table thiên về bảng tĩnh, st.dataframe tương tác hơn",
      "st.table chỉ dùng để train model trong dashboard",
      "st.dataframe chỉ render được string đơn giản",
      "Cả hai chỉ dùng cho chart, không dùng cho bảng"
    ],
    answer: 0,
    explanation: "st.table() thường dùng cho bảng nhỏ, tĩnh. st.dataframe() phù hợp hơn khi cần bảng có khả năng tương tác và cuộn."
  },
  {
    id: "st_f_009",
    library: "Streamlit",
    level: "Foundation",
    topic: "Metrics",
    question: "st.metric() thường dùng để hiển thị gì?",
    code: "",
    options: [
      "Một KPI dạng số nổi bật, có thể kèm delta",
      "Một file upload do người dùng chọn",
      "Một form đăng nhập bắt buộc trong app",
      "Một model machine learning đã train"
    ],
    answer: 0,
    explanation: "st.metric() phù hợp để hiển thị KPI như total users, revenue, conversion rate hoặc delta so với kỳ trước."
  },
  {
    id: "st_f_010",
    library: "Streamlit",
    level: "Foundation",
    topic: "Widgets",
    question: "Widget trong Streamlit thường dùng để làm gì?",
    code: "",
    options: [
      "Nhận input người dùng để app phản hồi theo lựa chọn",
      "Tối ưu database server ở tầng lưu trữ",
      "Thay thế file requirements.txt khi deploy",
      "Xóa cache trình duyệt của toàn bộ user"
    ],
    answer: 0,
    explanation: "Widget như selectbox, slider, checkbox, button cho phép người dùng tương tác và điều khiển nội dung app."
  },
  {
    id: "st_f_011",
    library: "Streamlit",
    level: "Foundation",
    topic: "st.button",
    question: "st.button() thường trả về giá trị gì?",
    code: "import streamlit as st\nclicked = st.button(\"Run\")",
    options: [
      "Boolean, thường True ở lần rerun ngay sau khi bấm",
      "DataFrame chứa dữ liệu được người dùng nhập",
      "File path trỏ tới thư mục hiện tại của app",
      "API token sinh ra tự động cho phiên làm việc"
    ],
    answer: 0,
    explanation: "st.button() trả về boolean. Nó thường là True trong lần chạy ngay sau khi button được bấm."
  },
  {
    id: "st_f_012",
    library: "Streamlit",
    level: "Foundation",
    topic: "st.selectbox",
    question: "st.selectbox() thường dùng để làm gì?",
    code: "",
    options: [
      "Cho người dùng chọn một giá trị từ danh sách",
      "Cho người dùng chọn nhiều file cùng lúc",
      "Tạo line chart từ dữ liệu dạng bảng",
      "Cache model artifact để tái sử dụng"
    ],
    answer: 0,
    explanation: "st.selectbox() tạo dropdown cho phép chọn một option duy nhất trong danh sách."
  },
  {
    id: "st_f_013",
    library: "Streamlit",
    level: "Foundation",
    topic: "Sidebar",
    question: "st.sidebar thường dùng để đặt thành phần nào?",
    code: "",
    options: [
      "Filter, control hoặc navigation ở khu vực thanh bên",
      "Model artifact đã train và không cần hiển thị",
      "File requirements.txt dùng khi deploy project",
      "Log lỗi hệ thống ở tầng server production"
    ],
    answer: 0,
    explanation: "st.sidebar giúp đưa filter, input hoặc navigation ra thanh bên, giữ main page gọn hơn."
  },
  {
    id: "st_f_014",
    library: "Streamlit",
    level: "Foundation",
    topic: "Charts",
    question: "Hàm nào có thể vẽ line chart nhanh từ dữ liệu dạng bảng trong Streamlit?",
    code: "import streamlit as st",
    options: [
      "st.line_chart(data)",
      "st.line(data)",
      "st.plot_line_only(data)",
      "st.chart_line_run(data)"
    ],
    answer: 0,
    explanation: "st.line_chart(data) là hàm built-in để vẽ line chart nhanh. Với nhu cầu tùy chỉnh cao hơn có thể dùng Plotly hoặc Matplotlib."
  },
  {
    id: "st_f_015",
    library: "Streamlit",
    level: "Foundation",
    topic: "Deployment Basics",
    question: "File requirements.txt trong Streamlit deployment thường dùng để làm gì?",
    code: "",
    options: [
      "Khai báo package Python cần cài cho app",
      "Lưu dữ liệu cá nhân của toàn bộ người dùng",
      "Chứa secret public để app đọc trực tiếp",
      "Tạo biểu đồ dashboard khi app khởi chạy"
    ],
    answer: 0,
    explanation: "requirements.txt giúp môi trường deploy cài đúng dependencies như streamlit, pandas, plotly hoặc joblib."
  },
  {
    id: "st_i_001",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.checkbox",
    question: "Đoạn code sau thường tạo ra behavior nào?",
    code: "import streamlit as st\nshow = st.checkbox(\"Show data\")\nif show:\n    st.write(\"Data is visible\")",
    options: [
      "Text chỉ hiển thị khi checkbox đang được tick",
      "Text luôn hiển thị dù checkbox chưa được tick",
      "Code lỗi vì checkbox không trả về boolean",
      "App tự động tải file CSV sau khi chạy"
    ],
    answer: 0,
    explanation: "st.checkbox() trả về True khi được tick. Vì vậy block if show chỉ chạy khi người dùng tick checkbox."
  },
  {
    id: "st_i_002",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.radio",
    question: "st.radio() phù hợp nhất khi nào?",
    code: "",
    options: [
      "Khi danh sách ngắn và user cần thấy tất cả option",
      "Khi user cần upload nhiều file dung lượng lớn",
      "Khi cần cache DataFrame sau bước transform",
      "Khi muốn SQL query tự chạy theo lịch"
    ],
    answer: 0,
    explanation: "st.radio() hiển thị các option để chọn một giá trị. Với danh sách dài, selectbox thường gọn hơn."
  },
  {
    id: "st_i_003",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.multiselect",
    question: "st.multiselect() khác st.selectbox() ở điểm nào?",
    code: "",
    options: [
      "multiselect chọn nhiều giá trị, selectbox thường chọn một",
      "multiselect chỉ nhận dữ liệu numeric",
      "selectbox luôn trả về list các lựa chọn",
      "Hai hàm luôn trả về cùng kiểu dữ liệu"
    ],
    answer: 0,
    explanation: "st.multiselect() trả về danh sách các lựa chọn. st.selectbox() thường trả về một option duy nhất."
  },
  {
    id: "st_i_004",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.slider",
    question: "st.slider() thường dùng để nhận loại input nào?",
    code: "",
    options: [
      "Giá trị số, khoảng số hoặc ngày trong một range",
      "File CSV được upload trực tiếp từ máy user",
      "API secret dùng để gọi dịch vụ bên ngoài",
      "HTML element custom cho giao diện frontend"
    ],
    answer: 0,
    explanation: "st.slider() phù hợp để chọn giá trị trong một khoảng như age, threshold, date range hoặc số lượng records."
  },
  {
    id: "st_i_005",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.number_input",
    question: "st.number_input() phù hợp nhất khi nào?",
    code: "",
    options: [
      "Khi muốn người dùng nhập một giá trị số cụ thể",
      "Khi muốn người dùng chọn nhiều category",
      "Khi muốn người dùng upload file dữ liệu",
      "Khi muốn hiển thị nội dung Markdown"
    ],
    answer: 0,
    explanation: "st.number_input() nhận input dạng số, có thể đặt min_value, max_value hoặc step tùy nhu cầu."
  },
  {
    id: "st_i_006",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.text_input",
    question: "st.text_input() thường trả về gì?",
    code: "import streamlit as st\nname = st.text_input(\"Name\")",
    options: [
      "Chuỗi text mà người dùng nhập vào ô input",
      "DataFrame được tạo từ dữ liệu người dùng",
      "Chart object đã render trên giao diện app",
      "Cache key dùng để invalidate dữ liệu"
    ],
    answer: 0,
    explanation: "st.text_input() trả về string từ input của người dùng. Nếu chưa nhập, giá trị thường là chuỗi mặc định."
  },
  {
    id: "st_i_007",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.date_input",
    question: "st.date_input() thường dùng để làm gì trong dashboard?",
    code: "",
    options: [
      "Cho người dùng chọn ngày hoặc khoảng ngày để filter",
      "Tự động tạo model forecast từ dữ liệu thời gian",
      "Lưu secret config vào source code của app",
      "Đổi theme màu của toàn bộ Streamlit app"
    ],
    answer: 0,
    explanation: "st.date_input() thường dùng cho date filter như chọn start_date, end_date hoặc một ngày cụ thể."
  },
  {
    id: "st_i_008",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Forms",
    question: "st.form thường hữu ích khi nào?",
    code: "",
    options: [
      "Khi gom nhiều input và chỉ xử lý sau khi submit",
      "Khi muốn cache dữ liệu tự động theo DataFrame",
      "Khi muốn tạo chart 3D trong Streamlit app",
      "Khi muốn deploy app lên cloud trực tiếp"
    ],
    answer: 0,
    explanation: "Form giúp giảm rerun không cần thiết khi có nhiều input. App chỉ xử lý form khi người dùng bấm submit button."
  },
  {
    id: "st_i_009",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Columns",
    question: "st.columns() thường dùng để làm gì?",
    code: "",
    options: [
      "Chia layout thành nhiều cột để đặt UI cạnh nhau",
      "Chọn một số cột cụ thể trong DataFrame",
      "Xóa các cột có nhiều giá trị null",
      "Tạo column mới trong database table"
    ],
    answer: 0,
    explanation: "st.columns() tạo layout nhiều cột trên page, hữu ích khi cần hiển thị KPI cards hoặc biểu đồ cạnh nhau."
  },
  {
    id: "st_i_010",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Tabs",
    question: "st.tabs() thường dùng để làm gì?",
    code: "",
    options: [
      "Tổ chức nội dung thành nhiều tab trong cùng app",
      "Tạo indentation cho block code Python",
      "Lọc DataFrame tự động theo từng cột",
      "Chạy app cloud mà không cần deploy"
    ],
    answer: 0,
    explanation: "st.tabs() giúp chia app thành các khu vực nội dung như Overview, Detail, Data Quality hoặc Model Output."
  },
  {
    id: "st_i_011",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Expander",
    question: "st.expander() phù hợp nhất khi nào?",
    code: "",
    options: [
      "Khi muốn ẩn/hiện notes, raw data hoặc explanation",
      "Khi muốn bắt buộc user upload file đầu vào",
      "Khi muốn tạo database table trong backend",
      "Khi muốn cache model artifact đã load"
    ],
    answer: 0,
    explanation: "st.expander() giúp app gọn hơn bằng cách đặt nội dung phụ trong khối có thể mở rộng."
  },
  {
    id: "st_i_012",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Container",
    question: "st.container() thường dùng để làm gì?",
    code: "",
    options: [
      "Nhóm nhiều element vào một vùng layout chung",
      "Chạy Docker container cho app backend",
      "Tạo virtual environment cho project",
      "Xóa toàn bộ cache của Streamlit app"
    ],
    answer: 0,
    explanation: "st.container() tạo một vùng chứa để nhóm các thành phần UI, giúp kiểm soát layout và thứ tự render tốt hơn."
  },
  {
    id: "st_i_013",
    library: "Streamlit",
    level: "Intermediate",
    topic: "File Uploader",
    question: "st.file_uploader() thường dùng để làm gì?",
    code: "",
    options: [
      "Cho người dùng upload file vào app để xử lý",
      "Tải file tự động từ database về máy user",
      "Deploy app tự động lên cloud server",
      "Tạo chart trực tiếp từ model artifact"
    ],
    answer: 0,
    explanation: "st.file_uploader() cho phép người dùng upload file như CSV hoặc Excel để app đọc và phân tích."
  },
  {
    id: "st_i_014",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Download Button",
    question: "st.download_button() thường dùng để làm gì?",
    code: "",
    options: [
      "Cho user tải dữ liệu hoặc file được tạo bởi app",
      "Upload dữ liệu của user lên cloud bắt buộc",
      "Cài package từ requirements.txt khi deploy",
      "Refresh toàn bộ cache của Streamlit server"
    ],
    answer: 0,
    explanation: "st.download_button() tạo nút tải xuống, thường dùng để export CSV, report hoặc prediction result."
  },
  {
    id: "st_i_015",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Plotly Chart",
    question: "Hàm nào thường dùng để hiển thị Plotly figure trong Streamlit?",
    code: "import streamlit as st\nimport plotly.express as px",
    options: [
      "st.plotly_chart(fig)",
      "st.show_plotly(fig)",
      "st.figure_plotly(fig)",
      "st.chartly(fig)"
    ],
    answer: 0,
    explanation: "st.plotly_chart(fig) dùng để render Plotly figure trong Streamlit app."
  },
  {
    id: "st_i_016",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.bar_chart",
    question: "st.bar_chart(data) thường dùng để làm gì?",
    code: "",
    options: [
      "Vẽ bar chart nhanh từ dữ liệu dạng bảng",
      "Tạo progress bar cho tiến độ xử lý",
      "Hiển thị bảng tĩnh không tương tác",
      "Cache dữ liệu sau bước transform"
    ],
    answer: 0,
    explanation: "st.bar_chart() là hàm built-in để vẽ bar chart nhanh. Với chart tùy chỉnh phức tạp, có thể dùng Plotly/Altair/Matplotlib."
  },
  {
    id: "st_i_017",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Matplotlib Chart Awareness",
    question: "Khi có Matplotlib figure fig, hàm nào thường dùng để hiển thị trong Streamlit?",
    code: "import streamlit as st",
    options: [
      "st.pyplot(fig)",
      "st.matplotlib_chartly(fig)",
      "st.plotly_chart(fig)",
      "st.dataframe(fig)"
    ],
    answer: 0,
    explanation: "st.pyplot(fig) thường dùng để hiển thị Matplotlib figure. st.plotly_chart dùng cho Plotly figure."
  },
  {
    id: "st_i_018",
    library: "Streamlit",
    level: "Intermediate",
    topic: "User Input Flow",
    question: "Kết quả trả về từ widget nên được dùng như thế nào?",
    code: "",
    options: [
      "Lưu vào biến để filter, tính toán hoặc điều khiển UI",
      "Bỏ qua vì widget chỉ có vai trò trang trí giao diện",
      "Ghi thẳng vào database production trong mọi trường hợp",
      "Hard-code thay vì dùng giá trị người dùng chọn"
    ],
    answer: 0,
    explanation: "Widget trả về giá trị input của người dùng. Giá trị này thường được dùng để filter data, thay đổi chart hoặc chạy logic có điều kiện."
  },
  {
    id: "st_i_019",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Rerun Behavior",
    question: "Streamlit rerun script khi nào ở mức cơ bản?",
    code: "",
    options: [
      "Khi user tương tác với widget hoặc app cần cập nhật",
      "Chỉ khi máy tính local được khởi động lại",
      "Chỉ khi file requirements.txt bị xóa",
      "Không bao giờ rerun sau lần chạy đầu tiên"
    ],
    answer: 0,
    explanation: "Streamlit chạy lại script từ trên xuống khi có tương tác hoặc thay đổi cần update UI. Đây là behavior quan trọng cần hiểu khi thiết kế app."
  },
  {
    id: "st_i_020",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Session State",
    question: "st.session_state thường dùng để làm gì?",
    code: "",
    options: [
      "Giữ trạng thái giữa các lần rerun của app",
      "Cache file requirements.txt khi deploy",
      "Deploy app tự động lên Streamlit Cloud",
      "Tạo chart mặc định từ dữ liệu đầu vào"
    ],
    answer: 0,
    explanation: "session_state giúp lưu biến như counter, filter đã chọn hoặc trạng thái form giữa các lần Streamlit rerun."
  },
  {
    id: "st_i_021",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Cache Basics",
    question: "Mục đích chính của caching trong Streamlit là gì?",
    code: "",
    options: [
      "Tránh chạy lại bước tốn thời gian khi input không đổi",
      "Lưu secret public để nhiều user cùng xem",
      "Tắt hoàn toàn mọi lần rerun của app",
      "Tự động sửa lỗi logic trong source code"
    ],
    answer: 0,
    explanation: "Caching giúp tăng performance bằng cách tái sử dụng kết quả của hàm tốn thời gian như load data, transform hoặc load model."
  },
  {
    id: "st_i_022",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.cache_data",
    question: "st.cache_data thường phù hợp nhất cho trường hợp nào?",
    code: "",
    options: [
      "Cache dữ liệu như DataFrame đã load hoặc transform",
      "Cache connection có state sống lâu trong app",
      "Lưu password trực tiếp trong source code",
      "Tạo session state cho từng người dùng"
    ],
    answer: 0,
    explanation: "st.cache_data phù hợp cho dữ liệu có thể serialize như DataFrame hoặc kết quả transform. Resource như connection/model thường hợp với cache_resource hơn."
  },
  {
    id: "st_i_023",
    library: "Streamlit",
    level: "Intermediate",
    topic: "st.cache_resource",
    question: "st.cache_resource thường phù hợp nhất cho object nào?",
    code: "",
    options: [
      "Resource dùng lại như model hoặc database connection",
      "DataFrame nhỏ đọc từ CSV đơn giản",
      "Một dòng text Markdown hiển thị trên app",
      "Một metric value tính nhanh không tốn tài nguyên"
    ],
    answer: 0,
    explanation: "st.cache_resource phù hợp cho object resource lâu sống như model, connection hoặc client. Cần cẩn thận với object có side effect."
  },
  {
    id: "st_i_024",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Secrets Handling",
    question: "Best practice nào đúng khi dùng API key trong Streamlit app?",
    code: "",
    options: [
      "Dùng secrets hoặc environment variables, không hard-code",
      "Viết API key trực tiếp trong file app.py public",
      "Hiển thị API key bằng st.write để dễ debug",
      "Lưu API key vào tên cột của DataFrame"
    ],
    answer: 0,
    explanation: "Secret như API key/token không nên hard-code hoặc hiển thị. Nên dùng Streamlit secrets, environment variables hoặc secret manager."
  },
  {
    id: "st_i_025",
    library: "Streamlit",
    level: "Intermediate",
    topic: "Error Handling",
    question: "Khi người dùng chưa upload file nhưng app đã cố đọc file, cách xử lý nào hợp lý hơn?",
    code: "",
    options: [
      "Kiểm tra uploaded_file is not None trước khi đọc",
      "Luôn đọc file dù biến upload đang là None",
      "Dùng except: pass và không báo lỗi nào",
      "Tự tạo dữ liệu giả mà không giải thích"
    ],
    answer: 0,
    explanation: "Cần kiểm tra input trước khi xử lý để tránh lỗi và hiển thị hướng dẫn rõ ràng cho người dùng."
  },
  {
    id: "st_a_001",
    library: "Streamlit",
    level: "Advanced",
    topic: "Rerun Behavior",
    question: "Vì sao biến Python thông thường có thể bị reset sau mỗi lần Streamlit rerun?",
    code: "",
    options: [
      "Vì script chạy lại từ đầu và biến được khởi tạo lại",
      "Vì Python không hỗ trợ biến trong Streamlit app",
      "Vì st.write tự động xóa biến sau khi hiển thị",
      "Vì DataFrame không thể dùng trong Streamlit"
    ],
    answer: 0,
    explanation: "Streamlit rerun script khi có tương tác. Biến thường được khởi tạo lại, nên trạng thái cần giữ qua rerun nên dùng st.session_state hoặc cache tùy mục đích."
  },
  {
    id: "st_a_002",
    library: "Streamlit",
    level: "Advanced",
    topic: "Session State",
    question: "Khi nào nên dùng st.session_state thay vì st.cache_data?",
    code: "",
    options: [
      "Khi cần giữ trạng thái tương tác của user giữa rerun",
      "Khi cần cache DataFrame load từ CSV cho mọi user",
      "Khi cần khai báo package dependency khi deploy",
      "Khi cần tạo file requirements.txt cho project"
    ],
    answer: 0,
    explanation: "session_state dành cho trạng thái phiên/user như step hiện tại, counter hoặc lựa chọn tạm thời. cache_data dành cho kết quả tính toán/data có thể tái sử dụng."
  },
  {
    id: "st_a_003",
    library: "Streamlit",
    level: "Advanced",
    topic: "st.cache_data",
    question: "Rủi ro nào cần chú ý khi dùng st.cache_data?",
    code: "",
    options: [
      "Có thể trả dữ liệu cũ nếu source đổi nhưng cache chưa invalidated",
      "st.cache_data luôn làm sai toàn bộ dữ liệu đầu vào",
      "st.cache_data chỉ chạy được với chart object",
      "st.cache_data tự động xóa dữ liệu nguồn"
    ],
    answer: 0,
    explanation: "Cache giúp tăng tốc nhưng có thể trả dữ liệu cũ nếu input/cache key không đổi. Có thể cần TTL hoặc nút refresh tùy bối cảnh."
  },
  {
    id: "st_a_004",
    library: "Streamlit",
    level: "Advanced",
    topic: "st.cache_resource",
    question: "Vì sao không nên cache bừa mọi object bằng st.cache_resource?",
    code: "",
    options: [
      "Vì object có state hoặc side effect có thể gây hành vi khó kiểm soát",
      "Vì cache_resource không thể cache bất kỳ object nào",
      "Vì cache_resource luôn khiến app dừng chạy",
      "Vì cache_resource chỉ dùng được cho text"
    ],
    answer: 0,
    explanation: "cache_resource phù hợp cho resource lâu sống như model hoặc connection. Với object mutable hoặc có side effect, cần hiểu rõ vòng đời và cách dùng."
  },
  {
    id: "st_a_005",
    library: "Streamlit",
    level: "Advanced",
    topic: "Loading Data",
    question: "Pattern nào hợp lý khi load dữ liệu CSV lớn trong Streamlit app?",
    code: "",
    options: [
      "Tách hàm load_data và cache nếu source/input phù hợp",
      "Đọc lại file lớn ở mọi lần rerun của app",
      "Hard-code toàn bộ dữ liệu trong st.write",
      "Không xử lý lỗi khi file sai format"
    ],
    answer: 0,
    explanation: "Tách hàm load_data giúp code rõ ràng và dễ cache. Với dữ liệu lớn, cache giúp giảm thời gian rerun nếu dữ liệu không đổi."
  },
  {
    id: "st_a_006",
    library: "Streamlit",
    level: "Advanced",
    topic: "Loading Model",
    question: "Khi load model bằng joblib trong Streamlit, cách nào thường hợp lý hơn?",
    code: "",
    options: [
      "Cache model/resource để tránh load lại mỗi rerun",
      "Load lại model từ disk sau mỗi widget interaction",
      "Lưu model artifact trong st.text_input",
      "Hard-code binary model trực tiếp vào app.py"
    ],
    answer: 0,
    explanation: "Model artifact thường tốn thời gian để load. Có thể dùng st.cache_resource cho hàm load model, nếu object phù hợp để cache."
  },
  {
    id: "st_a_007",
    library: "Streamlit",
    level: "Advanced",
    topic: "Inference App Basics",
    question: "Trong Streamlit model inference app, điều gì quan trọng nhất?",
    code: "",
    options: [
      "Input và preprocessing lúc inference phải khớp lúc training",
      "Chỉ cần gọi model.predict mà không cần schema",
      "Luôn cho user nhập bất kỳ cột nào họ muốn",
      "Bỏ qua missing values trong mọi trường hợp"
    ],
    answer: 0,
    explanation: "Model inference cần đúng schema, feature order, encoding, scaling và preprocessing như lúc train. Sai lệch có thể làm prediction sai hoặc app lỗi."
  },
  {
    id: "st_a_008",
    library: "Streamlit",
    level: "Advanced",
    topic: "File Uploader",
    question: "Khi dùng st.file_uploader cho CSV, bước nào nên làm trước khi xử lý sâu?",
    code: "",
    options: [
      "Kiểm tra file tồn tại và validate schema/cột cần thiết",
      "Luôn giả định file upload đúng format yêu cầu",
      "Ghi đè file gốc của user trong mọi trường hợp",
      "Cache secret key trực tiếp trong file upload"
    ],
    answer: 0,
    explanation: "File người dùng upload có thể thiếu cột, sai format hoặc rỗng. Cần kiểm tra uploaded_file và validate schema trước khi xử lý."
  },
  {
    id: "st_a_009",
    library: "Streamlit",
    level: "Advanced",
    topic: "Download Button",
    question: "Khi tạo download button cho DataFrame đã filter, điều nào nên chú ý?",
    code: "",
    options: [
      "Export đúng dữ liệu hiện tại, tên file rõ và format phù hợp",
      "Luôn export toàn bộ raw data dù user đã filter",
      "Không cần quan tâm encoding hoặc index khi xuất file",
      "Bắt buộc lưu secret vào file tải xuống cho user"
    ],
    answer: 0,
    explanation: "Download nên phản ánh đúng trạng thái dữ liệu người dùng đang xem hoặc logic được mô tả, với tên file và format dễ hiểu."
  },
  {
    id: "st_a_010",
    library: "Streamlit",
    level: "Advanced",
    topic: "App Performance Basics",
    question: "Cách nào thường giúp Streamlit app chạy mượt hơn?",
    code: "",
    options: [
      "Cache bước nặng, giảm xử lý mỗi rerun và filter dữ liệu sớm",
      "Đọc lại mọi file lớn ở mỗi lần user tương tác",
      "Render toàn bộ raw data lớn không filter",
      "Bỏ toàn bộ error handling khỏi app"
    ],
    answer: 0,
    explanation: "Performance tốt thường đến từ caching hợp lý, giảm data size, tách logic nặng và tránh chạy lại bước tốn thời gian khi không cần."
  },
  {
    id: "st_a_011",
    library: "Streamlit",
    level: "Advanced",
    topic: "Deployment Basics",
    question: "Repo Streamlit deploy thường cần những thành phần nào?",
    code: "",
    options: [
      "App entry file, requirements.txt và cấu trúc tài nguyên rõ",
      "Một screenshot dashboard để cloud tự dựng app",
      "Chỉ file .ipynb mà không cần dependency",
      "Chỉ file README mô tả app, không cần code"
    ],
    answer: 0,
    explanation: "Deploy cần app entry file như app.py, dependency trong requirements.txt và đường dẫn tài nguyên rõ ràng."
  },
  {
    id: "st_a_012",
    library: "Streamlit",
    level: "Advanced",
    topic: "Streamlit Community Cloud Awareness",
    question: "Streamlit Community Cloud ở mức Data Analyst cần hiểu là gì?",
    code: "",
    options: [
      "Nền tảng deploy Streamlit app từ repo với config phù hợp",
      "Một thư viện thay thế pandas khi xử lý DataFrame",
      "Một database engine local cho dữ liệu production",
      "Một công cụ viết SQL bắt buộc trong dashboard"
    ],
    answer: 0,
    explanation: "Streamlit Community Cloud thường dùng để deploy app từ GitHub repo. Cần chuẩn bị file app, requirements và secrets nếu cần."
  },
  {
    id: "st_a_013",
    library: "Streamlit",
    level: "Advanced",
    topic: "Common Errors",
    question: "Lỗi phổ biến nào xảy ra khi deploy Streamlit app?",
    code: "",
    options: [
      "Thiếu package trong requirements.txt hoặc sai file path",
      "st.write không thể hiển thị text trong app",
      "Streamlit không hỗ trợ chạy Python code",
      "DataFrame không thể hiển thị trong Streamlit"
    ],
    answer: 0,
    explanation: "Khi deploy, lỗi thường đến từ dependency thiếu, version không phù hợp, đường dẫn local hard-code hoặc file data/model không có trong repo/môi trường."
  },
  {
    id: "st_a_014",
    library: "Streamlit",
    level: "Advanced",
    topic: "Secrets Handling",
    question: "Điều nào KHÔNG nên làm với secrets trong Streamlit app?",
    code: "",
    options: [
      "Hard-code API key trực tiếp trong source code public",
      "Dùng Streamlit secrets để quản lý secret",
      "Dùng environment variables khi deploy app",
      "Không in secret ra UI hoặc log của app"
    ],
    answer: 0,
    explanation: "Không nên hard-code secret trong code public. Nên dùng secrets hoặc environment variables và tránh hiển thị ra UI/log."
  },
  {
    id: "st_a_015",
    library: "Streamlit",
    level: "Advanced",
    topic: "Best Practice for Data Analytics App",
    question: "Best practice nào phù hợp cho Streamlit dashboard phân tích dữ liệu?",
    code: "",
    options: [
      "Tách load/transform/render, cache hợp lý và validate input",
      "Viết toàn bộ logic xử lý trong một dòng code duy nhất",
      "Không xử lý trường hợp dữ liệu rỗng hoặc sai format",
      "Hard-code secret và đường dẫn local trong app.py"
    ],
    answer: 0,
    explanation: "App tốt nên có cấu trúc rõ, input validation, error handling, caching hợp lý và không hard-code secret/path local."
  },
  {
    id: "st_e_001",
    library: "Streamlit",
    level: "Expert",
    topic: "Session State vs Cache",
    question: "Phân biệt đúng giữa session_state và cache trong Streamlit là gì?",
    code: "",
    options: [
      "session_state giữ state phiên; cache tái sử dụng kết quả hàm nặng",
      "session_state và cache luôn có cùng mục đích sử dụng",
      "cache chỉ dùng để lưu widget state của từng user",
      "session_state chỉ dùng để lưu requirements.txt"
    ],
    answer: 0,
    explanation: "session_state dùng cho trạng thái tương tác của phiên. cache_data/cache_resource dùng để tránh tính toán hoặc load lại resource không cần thiết."
  },
  {
    id: "st_e_002",
    library: "Streamlit",
    level: "Expert",
    topic: "Inference App Basics",
    question: "Rủi ro lớn nhất khi Streamlit inference app tự tạo feature khác với pipeline training là gì?",
    code: "",
    options: [
      "Prediction sai hoặc model lỗi vì schema/preprocessing lệch",
      "App chắc chắn chạy nhanh hơn do ít phụ thuộc pipeline",
      "Model tự động retrain lại để khớp schema mới",
      "Streamlit tự động sửa feature sai trước khi predict"
    ],
    answer: 0,
    explanation: "Inference phải dùng cùng logic preprocessing/feature schema như training. Tốt nhất nên đóng gói preprocessing và model trong cùng pipeline/artifact nếu phù hợp."
  },
  {
    id: "st_e_003",
    library: "Streamlit",
    level: "Expert",
    topic: "Caching",
    question: "Khi nào cache có thể gây hiểu nhầm trong dashboard?",
    code: "",
    options: [
      "Khi source đã đổi nhưng app vẫn hiển thị kết quả cache cũ",
      "Khi app chưa có bất kỳ dữ liệu đầu vào nào",
      "Khi dashboard không dùng widget tương tác",
      "Khi st.title được gọi ở đầu file app.py"
    ],
    answer: 0,
    explanation: "Cache giúp app nhanh hơn nhưng có thể stale. Với dữ liệu thay đổi thường xuyên, cần TTL, refresh control hoặc invalidate cache phù hợp."
  },
  {
    id: "st_e_004",
    library: "Streamlit",
    level: "Expert",
    topic: "Deployment Basics",
    question: "Thiết kế nào phù hợp nhất cho Streamlit app production-like?",
    code: "",
    options: [
      "Repo có entry point rõ, requirements, secrets an toàn, path tương đối và validation",
      "App chạy local nhờ path tuyệt đối trên máy cá nhân",
      "API key hard-code trong app.py để deploy nhanh",
      "Không cần requirements.txt vì Streamlit tự đoán package"
    ],
    answer: 0,
    explanation: "App production-like cần dễ deploy, bảo mật secret, tái lập dependency, xử lý lỗi rõ ràng và không phụ thuộc đường dẫn local cá nhân."
  },
  {
    id: "st_e_005",
    library: "Streamlit",
    level: "Expert",
    topic: "Best Practice for Data Analytics App",
    question: "Trong data app có nhiều filter và dữ liệu lớn, chiến lược nào hợp lý nhất?",
    code: "",
    options: [
      "Load/cache hợp lý, filter sớm, tránh render raw data lớn và quản lý state khi cần",
      "Render toàn bộ dataset ở mọi rerun để không bỏ sót dữ liệu",
      "Tắt toàn bộ cache và validation để app đơn giản hơn",
      "Dùng button để hard-code mọi input của người dùng"
    ],
    answer: 0,
    explanation: "Với dữ liệu lớn, cần tối ưu rerun: cache bước load/transform hợp lý, filter trước khi render, tránh hiển thị quá nhiều data và quản lý state rõ ràng."
  }
];