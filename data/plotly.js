const PLOTLY_QUESTIONS = [
  {
    id: "plotly_f_001",
    library: "Plotly",
    level: "Foundation",
    topic: "Import & Basics",
    question: "Alias phổ biến nhất khi import plotly.express là gì?",
    code: "import plotly.express as ?",
    options: ["px", "go", "plt", "sns"],
    answer: 0,
    explanation: "plotly.express thường được import bằng alias px: import plotly.express as px. go thường dùng cho plotly.graph_objects, plt cho matplotlib.pyplot, sns cho seaborn."
  },
  {
    id: "plotly_f_002",
    library: "Plotly",
    level: "Foundation",
    topic: "Import & Basics",
    question: "Alias phổ biến nhất khi import plotly.graph_objects là gì?",
    code: "import plotly.graph_objects as ?",
    options: ["px", "go", "plt", "pd"],
    answer: 1,
    explanation: "plotly.graph_objects thường được import bằng alias go. px dùng cho plotly.express, plt dùng cho matplotlib.pyplot, pd dùng cho pandas."
  },
  {
    id: "plotly_f_003",
    library: "Plotly",
    level: "Foundation",
    topic: "fig.show()",
    question: "Hàm nào thường dùng để hiển thị một Plotly Figure?",
    code: "import plotly.express as px\nfig = px.line(x=[1, 2, 3], y=[2, 4, 6])\nfig.?()",
    options: ["display", "show", "render", "view"],
    answer: 1,
    explanation: "fig.show() dùng để hiển thị Plotly Figure. Đây là cách phổ biến trong notebook hoặc môi trường hỗ trợ rendering."
  },
  {
    id: "plotly_f_004",
    library: "Plotly",
    level: "Foundation",
    topic: "Plotly Express",
    question: "Plotly Express phù hợp nhất với mục đích nào?",
    code: "",
    options: [
      "Tạo chart nhanh từ DataFrame bằng cú pháp ngắn",
      "Huấn luyện model nhanh từ DataFrame bằng một dòng",
      "Làm sạch dữ liệu tự động trước khi visualize",
      "Thay thế pandas trong toàn bộ pipeline dữ liệu"
    ],
    answer: 0,
    explanation: "Plotly Express là high-level API giúp tạo chart nhanh từ DataFrame hoặc dữ liệu dạng mảng. Nó không thay thế pandas hay dùng để train model."
  },
  {
    id: "plotly_f_005",
    library: "Plotly",
    level: "Foundation",
    topic: "Line Chart",
    question: "Hàm nào dùng để vẽ line chart bằng Plotly Express?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3], 'y': [2, 4, 6]})",
    options: ["px.line(df, x='x', y='y')", "px.plot(df, x='x', y='y')", "px.bar(df, x='x', y='y')", "px.scatter(df, x='x', y='y')"],
    answer: 0,
    explanation: "px.line dùng để vẽ line chart. px.bar dùng cho bar chart, còn px.plot và px.scatter_line không phải hàm Plotly Express chuẩn."
  },
  {
    id: "plotly_f_006",
    library: "Plotly",
    level: "Foundation",
    topic: "Bar Chart",
    question: "Hàm nào dùng để vẽ bar chart bằng Plotly Express?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'category': ['A', 'B'], 'value': [10, 20]})",
    options: ["px.bar(df, x='category', y='value')", "px.line(df, x='category', y='value')", "px.scatter(df, x='category', y='value')", "px.histogram(df, x='category', y='value')"],
    answer: 0,
    explanation: "px.bar dùng để vẽ bar chart. px.line vẽ line chart, px.hist không phải tên hàm chuẩn; histogram trong Plotly Express là px.histogram."
  },
  {
    id: "plotly_f_007",
    library: "Plotly",
    level: "Foundation",
    topic: "Scatter Plot",
    question: "Hàm nào dùng để vẽ scatter plot bằng Plotly Express?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3], 'y': [3, 2, 5]})",
    options: ["px.scatter(df, x='x', y='y')", "px.line(df, x='x', y='y')", "px.bar(df, x='x', y='y')", "px.area(df, x='x', y='y')"],
    answer: 0,
    explanation: "px.scatter dùng để vẽ scatter plot, thường dùng để xem quan hệ giữa hai biến numeric."
  },
  {
    id: "plotly_f_008",
    library: "Plotly",
    level: "Foundation",
    topic: "Histogram",
    question: "Hàm nào dùng để vẽ histogram bằng Plotly Express?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'value': [1, 2, 2, 3, 4]})",
    options: ["px.histogram(df, x='value')", "px.bar(df, x='value')", "px.box(df, y='value')", "px.violin(df, y='value')"],
    answer: 0,
    explanation: "px.histogram dùng để vẽ histogram, giúp xem phân phối của một biến numeric hoặc đếm theo nhóm."
  },
  {
    id: "plotly_f_009",
    library: "Plotly",
    level: "Foundation",
    topic: "Box Plot",
    question: "Hàm nào dùng để vẽ box plot bằng Plotly Express?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'group': ['A', 'A', 'B'], 'value': [10, 12, 20]})",
    options: ["px.box(df, x='group', y='value')", "px.violin(df, x='group', y='value')", "px.histogram(df, x='group', y='value')", "px.bar(df, x='group', y='value')"],
    answer: 0,
    explanation: "px.box dùng để vẽ box plot, thường dùng để xem median, IQR, độ phân tán và outlier theo nhóm."
  },
  {
    id: "plotly_f_010",
    library: "Plotly",
    level: "Foundation",
    topic: "Pie Chart",
    question: "Hàm nào dùng để vẽ pie chart bằng Plotly Express?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'category': ['A', 'B'], 'value': [40, 60]})",
    options: ["px.pie(df, names='category', values='value')", "px.bar(df, x='category', y='value')", "px.treemap(df, names='category', values='value')", "px.sunburst(df, names='category', values='value')"],
    answer: 0,
    explanation: "px.pie dùng để vẽ pie chart. Trong phân tích dữ liệu, pie chart nên dùng cẩn thận khi có nhiều category hoặc cần so sánh chính xác."
  },
  {
    id: "plotly_f_011",
    library: "Plotly",
    level: "Foundation",
    topic: "Figure Object",
    question: "Kết quả trả về của hầu hết hàm Plotly Express như px.line hoặc px.bar là gì?",
    code: "import plotly.express as px\nfig = px.line(x=[1, 2], y=[3, 4])",
    options: ["Một Plotly Figure object", "Một pandas DataFrame object", "Một NumPy ndarray object", "Một HTML string object"],
    answer: 0,
    explanation: "Các hàm Plotly Express thường trả về plotly.graph_objects.Figure. Sau đó có thể dùng fig.show(), fig.update_layout(), fig.write_html()."
  },
  {
    id: "plotly_f_012",
    library: "Plotly",
    level: "Foundation",
    topic: "Title & Axis Labels",
    question: "Cách nào đặt title bằng Plotly Express khi tạo chart?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2], 'y': [3, 4]})",
    options: ["px.line(df, x='x', y='y', title='Chart')", "px.line(df, x='x', y='y', name='Chart')", "px.line(df, x='x', y='y', label='Chart')", "px.line(df, x='x', y='y', legend='Chart')"],
    answer: 0,
    explanation: "Tham số title trong Plotly Express dùng để đặt tiêu đề chart khi tạo Figure."
  },
  {
    id: "plotly_f_013",
    library: "Plotly",
    level: "Foundation",
    topic: "Color Encoding",
    question: "Tham số color trong Plotly Express thường dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Encode một biến bằng màu sắc",
      "Đặt kích thước của Figure",
      "Lưu chart thành file HTML",
      "Bật range slider cho trục x"
    ],
    answer: 0,
    explanation: "color dùng để map một biến vào màu sắc, thường dùng để phân biệt nhóm hoặc thể hiện giá trị liên tục bằng color scale."
  },
  {
    id: "plotly_f_014",
    library: "Plotly",
    level: "Foundation",
    topic: "Hover Data",
    question: "Điểm mạnh phổ biến của Plotly so với chart tĩnh là gì?",
    code: "",
    options: [
      "Hỗ trợ tương tác như hover, zoom, pan",
      "Tự động làm sạch dữ liệu trước khi vẽ",
      "Tự động train model từ dữ liệu đầu vào",
      "Không cần truyền dữ liệu để tạo chart"
    ],
    answer: 0,
    explanation: "Plotly nổi bật ở khả năng tương tác như hover tooltip, zoom, pan, legend toggle. Nó không tự động làm sạch dữ liệu hay train model."
  },
  {
    id: "plotly_f_015",
    library: "Plotly",
    level: "Foundation",
    topic: "Export HTML",
    question: "Hàm nào dùng để xuất Plotly Figure thành file HTML tương tác?",
    code: "import plotly.express as px\nfig = px.line(x=[1, 2, 3], y=[2, 4, 6])",
    options: ["fig.write_html('chart.html')", "fig.write_image('chart.html')", "fig.to_html_file('chart.html')", "px.write_html(fig, 'chart.html')"],
    answer: 0,
    explanation: "fig.write_html('chart.html') lưu chart thành file HTML có thể giữ tương tác. Đây là cách hữu ích khi chia sẻ report hoặc dashboard đơn giản."
  },
  {
    id: "plotly_i_001",
    library: "Plotly",
    level: "Intermediate",
    topic: "Plotly Express vs Graph Objects",
    question: "Khác biệt chính giữa Plotly Express và Graph Objects là gì?",
    code: "",
    options: [
      "Express tạo chart nhanh, Graph Objects kiểm soát chi tiết hơn",
      "Express chỉ dùng cho 3D, Graph Objects chỉ dùng cho 2D",
      "Express không trả về Figure, Graph Objects trả về DataFrame",
      "Express hỗ trợ tương tác, Graph Objects không hỗ trợ tương tác"
    ],
    answer: 0,
    explanation: "Plotly Express là high-level API, phù hợp tạo chart nhanh từ DataFrame. Graph Objects là low-level hơn, linh hoạt hơn khi cần tùy chỉnh trace/layout phức tạp."
  },
  {
    id: "plotly_i_002",
    library: "Plotly",
    level: "Intermediate",
    topic: "Graph Objects",
    question: "Cách nào tạo Figure bằng Graph Objects với một line trace?",
    code: "import plotly.graph_objects as go",
    options: ["go.Figure(data=go.Scatter(x=[1, 2], y=[3, 4], mode='lines'))", "go.Figure(data=go.Bar(x=[1, 2], y=[3, 4], mode='lines'))", "go.ScatterFigure(x=[1, 2], y=[3, 4], mode='lines')", "go.Line(x=[1, 2], y=[3, 4], mode='lines').figure()"],
    answer: 0,
    explanation: "Graph Objects dùng go.Figure và trace như go.Scatter. Với line chart, dùng go.Scatter(..., mode='lines')."
  },
  {
    id: "plotly_i_003",
    library: "Plotly",
    level: "Intermediate",
    topic: "Add Trace",
    question: "Trong Graph Objects, hàm nào dùng để thêm trace mới vào Figure?",
    code: "import plotly.graph_objects as go\nfig = go.Figure()",
    options: ["fig.add_trace(go.Scatter(x=[1, 2], y=[3, 4]))", "fig.update_trace(go.Scatter(x=[1, 2], y=[3, 4]))", "fig.append_trace(go.Scatter(x=[1, 2], y=[3, 4]))", "fig.insert_trace(go.Scatter(x=[1, 2], y=[3, 4]))"],
    answer: 0,
    explanation: "fig.add_trace() thêm một trace vào Figure. Đây là thao tác rất phổ biến khi build chart bằng Graph Objects."
  },
  {
    id: "plotly_i_004",
    library: "Plotly",
    level: "Intermediate",
    topic: "Update Layout",
    question: "Hàm nào dùng để chỉnh layout như title, axis title, size của Figure?",
    code: "import plotly.express as px\nfig = px.line(x=[1, 2], y=[3, 4])",
    options: ["fig.update_layout(title='Chart')", "fig.update_traces(title='Chart')", "fig.add_trace(title='Chart')", "fig.update_xaxes(title='Chart')"],
    answer: 0,
    explanation: "fig.update_layout() dùng để chỉnh các thuộc tính layout như title, axis, legend, width, height, margin."
  },
  {
    id: "plotly_i_005",
    library: "Plotly",
    level: "Intermediate",
    topic: "Update Traces",
    question: "Hàm nào thường dùng để cập nhật thuộc tính của trace, ví dụ marker size?",
    code: "import plotly.express as px\nfig = px.scatter(x=[1, 2], y=[3, 4])",
    options: ["fig.update_traces(marker_size=12)", "fig.update_layout(marker_size=12)", "fig.update_xaxes(marker_size=12)", "fig.add_trace(marker_size=12)"],
    answer: 0,
    explanation: "fig.update_traces() cập nhật thuộc tính của các trace. marker_size là thuộc tính liên quan đến trace, không phải layout tổng thể."
  },
  {
    id: "plotly_i_006",
    library: "Plotly",
    level: "Intermediate",
    topic: "Hover Data",
    question: "Trong Plotly Express, hover_data dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Chọn thêm hoặc bớt cột hiển thị trong tooltip",
      "Chọn màu nền cho toàn bộ vùng vẽ chart",
      "Chọn số hàng và số cột của subplot",
      "Chọn định dạng file khi xuất chart"
    ],
    answer: 0,
    explanation: "hover_data kiểm soát các trường dữ liệu hiển thị trong tooltip khi người dùng hover vào điểm/cột."
  },
  {
    id: "plotly_i_007",
    library: "Plotly",
    level: "Intermediate",
    topic: "Hover Data",
    question: "Cách nào thêm cột category vào hover tooltip trong px.scatter?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2], 'y': [3, 4], 'category': ['A', 'B']})",
    options: ["px.scatter(df, x='x', y='y', hover_data=['category'])", "px.scatter(df, x='x', y='y', custom_data='category')", "px.scatter(df, x='x', y='y', text='category')", "px.scatter(df, x='x', y='y', labels={'category': 'category'})"],
    answer: 0,
    explanation: "hover_data=['category'] yêu cầu Plotly Express đưa cột category vào tooltip khi hover."
  },
  {
    id: "plotly_i_008",
    library: "Plotly",
    level: "Intermediate",
    topic: "Size Encoding",
    question: "Trong px.scatter, tham số size thường dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Encode một biến bằng kích thước điểm",
      "Đặt kích thước tổng thể của figure",
      "Đặt kích thước font của title",
      "Tạo thêm một secondary y-axis"
    ],
    answer: 0,
    explanation: "size trong px.scatter map một biến vào kích thước marker. Kích thước figure thường dùng width và height."
  },
  {
    id: "plotly_i_009",
    library: "Plotly",
    level: "Intermediate",
    topic: "Symbol Encoding",
    question: "Trong px.scatter, tham số symbol thường dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Encode nhóm bằng hình dạng marker",
      "Encode nhóm bằng màu sắc marker",
      "Encode biến bằng kích thước marker",
      "Encode thời gian bằng animation frame"
    ],
    answer: 0,
    explanation: "symbol dùng để phân biệt nhóm bằng hình dạng marker. color dùng để phân biệt bằng màu, size dùng để phân biệt bằng kích thước."
  },
  {
    id: "plotly_i_010",
    library: "Plotly",
    level: "Intermediate",
    topic: "Faceting",
    question: "Tham số facet_col trong Plotly Express dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Tách chart thành nhiều cột subplot theo nhóm",
      "Đổi màu từng cột trong bar chart",
      "Chọn thêm một cột làm trục y phụ",
      "Ẩn legend của toàn bộ Figure"
    ],
    answer: 0,
    explanation: "facet_col tạo nhiều subplot theo chiều cột dựa trên giá trị của biến được truyền vào. Đây là cách so sánh pattern giữa các nhóm."
  },
  {
    id: "plotly_i_011",
    library: "Plotly",
    level: "Intermediate",
    topic: "Faceting",
    question: "Tham số facet_row trong Plotly Express dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Tách chart thành nhiều hàng subplot theo nhóm",
      "Sắp xếp DataFrame theo thứ tự hàng",
      "Đổi trục x thành trục category",
      "Tạo range slider cho trục x"
    ],
    answer: 0,
    explanation: "facet_row tạo các subplot theo chiều hàng, mỗi hàng ứng với một nhóm của biến facet."
  },
  {
    id: "plotly_i_012",
    library: "Plotly",
    level: "Intermediate",
    topic: "Multiple Series",
    question: "Trong px.line, cách phổ biến để vẽ nhiều line theo group là gì?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'date': ['2024-01', '2024-01', '2024-02'], 'value': [10, 15, 12], 'group': ['A', 'B', 'A']})",
    options: ["px.line(df, x='date', y='value', color='group')", "px.line(df, x='date', y='value', group='group')", "px.line(df, x='date', y='value', line_group='group')", "px.line(df, x='date', y='value', series='group')"],
    answer: 0,
    explanation: "color='group' thường tạo nhiều line theo từng nhóm và phân biệt chúng bằng màu sắc trong Plotly Express."
  },
  {
    id: "plotly_i_013",
    library: "Plotly",
    level: "Intermediate",
    topic: "Title & Axis Labels",
    question: "Cách nào đổi nhãn trục trong Plotly Express bằng labels?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2], 'y': [3, 4]})",
    options: ["px.line(df, x='x', y='y', labels={'x': 'Time', 'y': 'Value'})", "px.line(df, x='x', y='y', axis_labels={'x': 'Time', 'y': 'Value'})", "px.line(df, x='x', y='y', names={'x': 'Time', 'y': 'Value'})", "px.line(df, x='x', y='y', title_labels={'x': 'Time', 'y': 'Value'})"],
    answer: 0,
    explanation: "labels là dictionary dùng để đổi tên hiển thị của cột/trục/legend trong Plotly Express."
  },
  {
    id: "plotly_i_014",
    library: "Plotly",
    level: "Intermediate",
    topic: "Figure Size",
    question: "Tham số nào trong Plotly Express thường dùng để đặt kích thước figure?",
    code: "import plotly.express as px",
    options: ["width và height", "figsize", "shape", "plot_size"],
    answer: 0,
    explanation: "Plotly Express thường dùng width và height để đặt kích thước chart theo pixel. figsize là tham số quen thuộc trong Matplotlib."
  },
  {
    id: "plotly_i_015",
    library: "Plotly",
    level: "Intermediate",
    topic: "Template / Theme",
    question: "Tham số template trong Plotly dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Chọn theme/style mặc định của chart",
      "Chọn thuật toán sắp xếp dữ liệu",
      "Chọn cách xử lý missing values",
      "Chọn kiểu export DataFrame sang HTML"
    ],
    answer: 0,
    explanation: "template kiểm soát style/theme như màu nền, grid, font mặc định. Ví dụ template='plotly_white' thường dùng cho report sáng và sạch."
  },
  {
    id: "plotly_i_016",
    library: "Plotly",
    level: "Intermediate",
    topic: "Layout Customization",
    question: "Cách nào đổi title sau khi đã tạo fig?",
    code: "import plotly.express as px\nfig = px.line(x=[1, 2], y=[3, 4])",
    options: ["fig.update_layout(title='New title')", "fig.update_traces(title='New title')", "fig.update_xaxes(title='New title')", "fig.add_annotation(title='New title')"],
    answer: 0,
    explanation: "Title là thuộc tính layout, vì vậy dùng fig.update_layout(title='New title'). update_traces dùng cho thuộc tính trace."
  },
  {
    id: "plotly_i_017",
    library: "Plotly",
    level: "Intermediate",
    topic: "Legend Handling",
    question: "Cách nào ẩn legend của Plotly Figure?",
    code: "import plotly.express as px\nfig = px.scatter(x=[1, 2], y=[3, 4])",
    options: ["fig.update_layout(showlegend=False)", "fig.update_traces(showlegend=False)", "fig.update_xaxes(showlegend=False)", "fig.update_annotations(showlegend=False)"],
    answer: 0,
    explanation: "showlegend là thuộc tính layout. fig.update_layout(showlegend=False) dùng để ẩn legend."
  },
  {
    id: "plotly_i_018",
    library: "Plotly",
    level: "Intermediate",
    topic: "Axis Formatting",
    question: "Cách nào đặt tên trục x bằng update_layout?",
    code: "import plotly.express as px\nfig = px.line(x=[1, 2], y=[3, 4])",
    options: ["fig.update_layout(xaxis_title='Time')", "fig.update_layout(yaxis_title='Time')", "fig.update_traces(xaxis_title='Time')", "fig.update_xaxes(showlegend='Time')"],
    answer: 0,
    explanation: "xaxis_title là thuộc tính layout dùng để đặt title cho trục x. update_traces không dùng để đặt axis title."
  },
  {
    id: "plotly_i_019",
    library: "Plotly",
    level: "Intermediate",
    topic: "Tick Formatting",
    question: "Thuộc tính tickangle thường dùng để làm gì?",
    code: "import plotly.express as px\nfig = px.bar(x=['Long A', 'Long B'], y=[10, 20])\nfig.update_layout(xaxis_tickangle=-45)",
    options: [
      "Xoay nhãn tick trên trục",
      "Đổi màu trace trên chart",
      "Bật hover tooltip cho trace",
      "Tạo subplot theo từng nhóm"
    ],
    answer: 0,
    explanation: "tickangle dùng để xoay tick labels, thường hữu ích khi nhãn category dài hoặc bị chồng lên nhau."
  },
  {
    id: "plotly_i_020",
    library: "Plotly",
    level: "Intermediate",
    topic: "Category Ordering",
    question: "category_orders trong Plotly Express dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Quy định thứ tự hiển thị của category",
      "Tự động xóa category ít xuất hiện",
      "Chuyển category thành numeric code",
      "Tạo animation theo từng category"
    ],
    answer: 0,
    explanation: "category_orders cho phép kiểm soát thứ tự hiển thị của category trên trục, legend hoặc facet, tránh thứ tự mặc định không đúng ý phân tích."
  },
  {
    id: "plotly_i_021",
    library: "Plotly",
    level: "Intermediate",
    topic: "Sorting for Bar Chart",
    question: "Best practice thường gặp trước khi vẽ bar chart so sánh category là gì?",
    code: "",
    options: [
      "Sắp xếp dữ liệu theo value để dễ so sánh",
      "Giữ thứ tự ngẫu nhiên để tránh bias",
      "Chuyển mọi bar chart thành pie chart",
      "Ẩn toàn bộ nhãn trục để chart gọn hơn"
    ],
    answer: 0,
    explanation: "Bar chart thường dễ đọc hơn khi được sort theo giá trị, trừ khi category có thứ tự tự nhiên như tháng hoặc level."
  },
  {
    id: "plotly_i_022",
    library: "Plotly",
    level: "Intermediate",
    topic: "Log Axis",
    question: "Cách nào bật log scale cho trục y trong Plotly Express?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3], 'y': [10, 100, 1000]})",
    options: ["px.line(df, x='x', y='y', log_y=True)", "px.line(df, x='x', y='y', yaxis='log')", "px.line(df, x='x', y='y', log_axis='y')", "px.line(df, x='x', y='y', scale_y='log')"],
    answer: 0,
    explanation: "log_y=True bật log scale cho trục y trong Plotly Express. Tương tự có log_x=True cho trục x."
  },
  {
    id: "plotly_i_023",
    library: "Plotly",
    level: "Intermediate",
    topic: "Range Slider",
    question: "Range slider thường hữu ích nhất với loại dữ liệu nào?",
    code: "",
    options: [
      "Time series hoặc trục x có thứ tự liên tục",
      "Pie chart có ít lát và ít category",
      "Text thuần không có trục x/y",
      "Bảng dữ liệu không có biến thời gian"
    ],
    answer: 0,
    explanation: "Range slider giúp người dùng zoom/filter một khoảng trên trục x, rất hữu ích với time series dài."
  },
  {
    id: "plotly_i_024",
    library: "Plotly",
    level: "Intermediate",
    topic: "Missing Values",
    question: "Trong line chart, missing values có thể gây hiện tượng gì?",
    code: "",
    options: [
      "Đường line có thể bị ngắt tại điểm thiếu",
      "Plotly luôn thay missing bằng giá trị lớn nhất",
      "Plotly luôn xóa toàn bộ chart nếu có missing",
      "Missing values luôn chuyển thành category mới"
    ],
    answer: 0,
    explanation: "Missing values thường khiến line bị ngắt hoặc điểm không được vẽ. Người phân tích nên xử lý missing rõ ràng trước khi visualize."
  },
  {
    id: "plotly_i_025",
    library: "Plotly",
    level: "Intermediate",
    topic: "Common Errors",
    question: "Lỗi phổ biến khi chạy đoạn code sau là gì?",
    code: "import plotly.express as px\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2], 'y': [3, 4]})\nfig = px.scatter(df, x='amount', y='y')",
    options: [
      "Cột amount không tồn tại trong df",
      "px.scatter không hỗ trợ DataFrame",
      "Cột y bắt buộc phải là string",
      "Plotly không hỗ trợ scatter plot"
    ],
    answer: 0,
    explanation: "Khi truyền data_frame, x và y thường là tên cột. Nếu cột amount không tồn tại trong df, Plotly Express sẽ báo lỗi."
  },
  {
    id: "plotly_a_001",
    library: "Plotly",
    level: "Advanced",
    topic: "Subplots",
    question: "Import nào cần dùng khi tạo subplots bằng make_subplots?",
    code: "",
    options: ["from plotly.subplots import make_subplots", "from plotly.express import make_subplots", "from plotly.graph_objects import make_subplots", "from plotly.figure_factory import make_subplots"],
    answer: 0,
    explanation: "make_subplots được import từ plotly.subplots. Sau đó có thể dùng fig = make_subplots(rows=..., cols=...)."
  },
  {
    id: "plotly_a_002",
    library: "Plotly",
    level: "Advanced",
    topic: "Subplots",
    question: "Trong make_subplots, rows và cols dùng để làm gì?",
    code: "from plotly.subplots import make_subplots\nfig = make_subplots(rows=2, cols=3)",
    options: [
      "Quy định số hàng và số cột của grid subplot",
      "Quy định số dòng và số cột của DataFrame",
      "Quy định số màu và số marker của trace",
      "Quy định số tick và số gridline trên trục"
    ],
    answer: 0,
    explanation: "rows và cols xác định layout subplot dạng grid. Ví dụ rows=2, cols=3 tạo 6 ô subplot."
  },
  {
    id: "plotly_a_003",
    library: "Plotly",
    level: "Advanced",
    topic: "Secondary Y-axis",
    question: "Khi dùng make_subplots để tạo secondary y-axis, cần cấu hình specs như thế nào?",
    code: "from plotly.subplots import make_subplots",
    options: ["specs=[[{'secondary_y': True}]]", "specs=[[{'secondary_x': True}]]", "specs=[[{'shared_yaxis': True}]]", "specs=[[{'right_axis': True}]]"],
    answer: 0,
    explanation: "Với make_subplots, cần khai báo specs=[[{'secondary_y': True}]] để subplot hỗ trợ trục y phụ."
  },
  {
    id: "plotly_a_004",
    library: "Plotly",
    level: "Advanced",
    topic: "Secondary Y-axis",
    question: "Khi thêm trace vào secondary y-axis, tham số nào thường dùng trong fig.add_trace?",
    code: "from plotly.subplots import make_subplots\nimport plotly.graph_objects as go\nfig = make_subplots(specs=[[{'secondary_y': True}]])",
    options: ["secondary_y=True", "secondary_x=True", "yaxis='secondary'", "right_axis=True"],
    answer: 0,
    explanation: "Khi Figure được tạo với secondary_y, fig.add_trace(..., secondary_y=True) đưa trace vào trục y phụ."
  },
  {
    id: "plotly_a_005",
    library: "Plotly",
    level: "Advanced",
    topic: "Hover Template",
    question: "hovertemplate dùng để làm gì?",
    code: "import plotly.graph_objects as go",
    options: [
      "Tùy chỉnh định dạng nội dung tooltip khi hover",
      "Tạo layout subplot nhiều hàng nhiều cột",
      "Đổi theme mặc định của toàn bộ chart",
      "Lưu chart thành ảnh tĩnh dạng PNG"
    ],
    answer: 0,
    explanation: "hovertemplate cho phép kiểm soát chi tiết text, format số và nội dung tooltip. Đây là công cụ mạnh khi làm dashboard/report tương tác."
  },
  {
    id: "plotly_a_006",
    library: "Plotly",
    level: "Advanced",
    topic: "Custom Data",
    question: "custom_data trong Plotly Express thường dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Đưa thêm cột vào trace để dùng trong hovertemplate/callback",
      "Đổi màu nền figure theo từng giá trị category",
      "Tạo file CSV mới từ dữ liệu đã dùng để vẽ",
      "Tự động sort category trên trục x theo value"
    ],
    answer: 0,
    explanation: "custom_data lưu thêm dữ liệu đi kèm mỗi điểm. Dữ liệu này thường dùng trong hovertemplate hoặc các tình huống tương tác nâng cao."
  },
  {
    id: "plotly_a_007",
    library: "Plotly",
    level: "Advanced",
    topic: "Shapes & Reference Lines",
    question: "Cách nào thêm đường ngang tham chiếu y=10 vào Figure?",
    code: "import plotly.express as px\nfig = px.line(x=[1, 2, 3], y=[8, 12, 9])",
    options: ["fig.add_hline(y=10)", "fig.add_vline(x=10)", "fig.update_layout(hline=10)", "fig.update_traces(yline=10)"],
    answer: 0,
    explanation: "fig.add_hline(y=10) thêm đường ngang tham chiếu. Reference line hữu ích để thể hiện target, threshold hoặc baseline."
  },
  {
    id: "plotly_a_008",
    library: "Plotly",
    level: "Advanced",
    topic: "Annotation",
    question: "Cách nào thêm annotation text vào Figure?",
    code: "import plotly.express as px\nfig = px.scatter(x=[1, 2], y=[3, 4])",
    options: ["fig.add_annotation(x=2, y=4, text='Peak')", "fig.update_traces(x=2, y=4, text='Peak')", "fig.update_layout(x=2, y=4, text='Peak')", "fig.add_trace(x=2, y=4, text='Peak')"],
    answer: 0,
    explanation: "fig.add_annotation() thêm text annotation vào chart. Annotation giúp nhấn mạnh điểm bất thường hoặc insight quan trọng."
  },
  {
    id: "plotly_a_009",
    library: "Plotly",
    level: "Advanced",
    topic: "Animation Basics",
    question: "Tham số animation_frame trong Plotly Express dùng để làm gì?",
    code: "import plotly.express as px",
    options: [
      "Tạo animation theo từng giá trị của một biến",
      "Tăng tốc độ render chart trong trình duyệt",
      "Xuất chart thành video sau khi tạo Figure",
      "Đổi Figure tương tác thành ảnh tĩnh"
    ],
    answer: 0,
    explanation: "animation_frame tạo các frame animation theo giá trị của biến, thường dùng để xem sự thay đổi theo thời gian hoặc stage."
  },
  {
    id: "plotly_a_010",
    library: "Plotly",
    level: "Advanced",
    topic: "Margins",
    question: "Cách nào chỉnh margin của Plotly Figure?",
    code: "import plotly.express as px\nfig = px.line(x=[1, 2], y=[3, 4])",
    options: ["fig.update_layout(margin=dict(l=40, r=20, t=60, b=40))", "fig.update_traces(margin=dict(l=40, r=20, t=60, b=40))", "fig.update_xaxes(margin=dict(l=40, r=20, t=60, b=40))", "fig.add_annotation(margin=dict(l=40, r=20, t=60, b=40))"],
    answer: 0,
    explanation: "margin là thuộc tính layout, thường truyền dictionary với l, r, t, b tương ứng left, right, top, bottom."
  },
  {
    id: "plotly_a_011",
    library: "Plotly",
    level: "Advanced",
    topic: "Heatmap",
    question: "Trong Graph Objects, trace nào thường dùng để tạo heatmap?",
    code: "import plotly.graph_objects as go",
    options: ["go.Heatmap(z=[[1, 2], [3, 4]])", "go.Contour(z=[[1, 2], [3, 4]])", "go.Surface(z=[[1, 2], [3, 4]])", "go.Image(z=[[1, 2], [3, 4]])"],
    answer: 0,
    explanation: "go.Heatmap là trace dùng để tạo heatmap trong Graph Objects, với z là ma trận giá trị."
  },
  {
    id: "plotly_a_012",
    library: "Plotly",
    level: "Advanced",
    topic: "Treemap",
    question: "px.treemap phù hợp nhất khi nào?",
    code: "",
    options: [
      "Khi muốn thể hiện cấu trúc phân cấp và tỷ trọng",
      "Khi muốn vẽ raw data theo hai trục x-y",
      "Khi muốn vẽ phân phối một biến bằng bins",
      "Khi muốn giải hệ phương trình tuyến tính"
    ],
    answer: 0,
    explanation: "Treemap thể hiện dữ liệu phân cấp bằng các hình chữ nhật có diện tích theo value, phù hợp để xem cấu trúc và tỷ trọng."
  },
  {
    id: "plotly_a_013",
    library: "Plotly",
    level: "Advanced",
    topic: "Sunburst Basics",
    question: "Sunburst chart thường dùng để thể hiện điều gì?",
    code: "",
    options: [
      "Dữ liệu phân cấp theo các vòng tròn đồng tâm",
      "Phân phối một biến numeric bằng các bin",
      "Quan hệ tuyến tính giữa hai biến numeric",
      "Sai số quanh một estimator theo thời gian"
    ],
    answer: 0,
    explanation: "Sunburst chart thể hiện hierarchy bằng các vòng tròn đồng tâm. Nó hữu ích cho dữ liệu có nhiều cấp phân nhóm."
  },
  {
    id: "plotly_a_014",
    library: "Plotly",
    level: "Advanced",
    topic: "Static Image Export Basics",
    question: "Để export Plotly Figure thành ảnh tĩnh như PNG, thường cần lưu ý điều gì?",
    code: "import plotly.express as px\nfig = px.line(x=[1, 2], y=[3, 4])",
    options: [
      "Dùng fig.write_image('chart.png') và có thể cần kaleido",
      "Dùng fig.write_html('chart.png') để tạo ảnh PNG",
      "Dùng pandas.to_png(fig) để xuất Figure",
      "Dùng fig.show('chart.png') để lưu ảnh"
    ],
    answer: 0,
    explanation: "fig.write_image() dùng để export ảnh tĩnh như PNG/SVG/PDF, nhưng môi trường thường cần package hỗ trợ như kaleido."
  },
  {
    id: "plotly_a_015",
    library: "Plotly",
    level: "Advanced",
    topic: "Chart Readability",
    question: "Khi chart tương tác có quá nhiều điểm và hover bị rối, cách xử lý hợp lý là gì?",
    code: "",
    options: [
      "Giảm điểm, aggregate, sample hoặc giới hạn hover_data",
      "Thêm toàn bộ cột vào hover_data để đủ thông tin",
      "Tăng số màu ngẫu nhiên để chart nổi bật hơn",
      "Ẩn title và axis label để giảm diện tích hiển thị"
    ],
    answer: 0,
    explanation: "Với dữ liệu lớn, cần tối ưu readability bằng sampling, aggregation hoặc chỉ giữ thông tin hover thật sự quan trọng. Hover quá nhiều thông tin làm chart khó đọc."
  },
  {
    id: "plotly_e_001",
    library: "Plotly",
    level: "Expert",
    topic: "Graph Objects",
    question: "Khi nào nên ưu tiên Graph Objects thay vì Plotly Express?",
    code: "",
    options: [
      "Khi cần nhiều trace, subplot phức tạp hoặc custom layout",
      "Khi chỉ cần vẽ nhanh một chart đơn giản từ DataFrame",
      "Khi không cần chỉnh trace, layout, hover hoặc axis",
      "Khi muốn tránh dùng Figure object trong Plotly"
    ],
    answer: 0,
    explanation: "Graph Objects phù hợp khi cần kiểm soát chi tiết trace, layout, subplot, secondary axis hoặc custom hover. Plotly Express phù hợp hơn cho chart nhanh và ít phức tạp."
  },
  {
    id: "plotly_e_002",
    library: "Plotly",
    level: "Expert",
    topic: "Hover Template",
    question: "Trong hovertemplate, chuỗi '<extra></extra>' thường dùng để làm gì?",
    code: "import plotly.graph_objects as go",
    options: [
      "Ẩn phần extra box thường hiển thị tên trace",
      "Tạo thêm một subplot ở bên phải chart",
      "Bật animation frame cho từng điểm dữ liệu",
      "Đổi toàn bộ trục sang log scale"
    ],
    answer: 0,
    explanation: "'<extra></extra>' trong hovertemplate thường dùng để ẩn phần phụ của tooltip, giúp hover gọn và kiểm soát nội dung tốt hơn."
  },
  {
    id: "plotly_e_003",
    library: "Plotly",
    level: "Expert",
    topic: "Performance",
    question: "Khi scatter plot có hàng trăm nghìn đến hàng triệu điểm, hướng nào thường hợp lý để cải thiện performance và readability?",
    code: "",
    options: [
      "Sampling, aggregation, giảm hover_data hoặc dùng WebGL",
      "Thêm annotation riêng cho từng điểm dữ liệu",
      "Tăng marker size để mọi điểm rõ hơn",
      "Chuyển toàn bộ scatter thành pie chart"
    ],
    answer: 0,
    explanation: "Với dữ liệu rất lớn, raw scatter có thể chậm và overplotting. Sampling, aggregation, giảm hover hoặc dùng WebGL như scattergl khi phù hợp giúp chart mượt và dễ đọc hơn."
  },
  {
    id: "plotly_e_004",
    library: "Plotly",
    level: "Expert",
    topic: "Custom Data",
    question: "Trong Graph Objects, customdata kết hợp với hovertemplate hữu ích vì lý do nào?",
    code: "",
    options: [
      "Đưa metadata vào tooltip mà không mã hóa lên trục/màu",
      "Bắt buộc để mọi chart Plotly hiển thị được",
      "Tự động sort dữ liệu theo từng trace",
      "Tự động tạo dashboard Dash từ Figure"
    ],
    answer: 0,
    explanation: "customdata cho phép gắn thêm metadata vào từng điểm và dùng trong hovertemplate, giúp tooltip giàu thông tin mà không làm rối encoding chính."
  },
  {
    id: "plotly_e_005",
    library: "Plotly",
    level: "Expert",
    topic: "Best Practice for Interactive Data Analytics Visualization",
    question: "Khi xây dựng interactive chart cho dashboard, nguyên tắc nào thường quan trọng nhất?",
    code: "",
    options: [
      "Tương tác phải phục vụ câu hỏi phân tích",
      "Luôn dùng animation cho mọi chart",
      "Luôn hiển thị tất cả cột trong hover",
      "Luôn dùng secondary y-axis cho chart"
    ],
    answer: 0,
    explanation: "Interactive visualization nên giúp người dùng khám phá và trả lời câu hỏi phân tích rõ hơn. Lạm dụng animation, hover quá dài hoặc secondary axis có thể làm dashboard khó hiểu."
  }
];