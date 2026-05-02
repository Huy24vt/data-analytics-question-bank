const MATPLOTLIB_QUESTIONS = [
  {
    id: "mpl_f_001",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Import & Pyplot Basics",
    question: "Alias phổ biến nhất khi import matplotlib.pyplot là gì?",
    code: "import matplotlib.pyplot as ?",
    options: ["np", "pd", "plt", "sns"],
    answer: 2,
    explanation: "matplotlib.pyplot thường được import bằng alias plt: import matplotlib.pyplot as plt. np dùng cho NumPy, pd cho pandas, sns cho seaborn."
  },
  {
    id: "mpl_f_002",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Pyplot Basics",
    question: "Hàm nào thường dùng để hiển thị biểu đồ khi dùng pyplot?",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 6])\nplt.?()",
    options: ["display", "show", "render", "view"],
    answer: 1,
    explanation: "plt.show() dùng để hiển thị figure. display, render và view không phải hàm pyplot chuẩn cho việc hiển thị biểu đồ."
  },
  {
    id: "mpl_f_003",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Line Chart",
    question: "Hàm nào dùng để vẽ line chart cơ bản trong Matplotlib?",
    code: "import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny = [2, 4, 6]",
    options: ["plt.line(x, y)", "plt.plot(x, y)", "plt.bar(x, y)", "plt.scatter(x, y)"],
    answer: 1,
    explanation: "plt.plot(x, y) là hàm phổ biến để vẽ line chart. plt.bar dùng cho bar chart, plt.scatter dùng cho scatter plot."
  },
  {
    id: "mpl_f_004",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Bar Chart",
    question: "Hàm nào dùng để vẽ bar chart dọc cơ bản?",
    code: "import matplotlib.pyplot as plt\nlabels = ['A', 'B', 'C']\nvalues = [10, 20, 15]",
    options: ["plt.bar(labels, values)", "plt.plot(labels, values)", "plt.hist(values, bins=3)", "plt.boxplot(values)"],
    answer: 0,
    explanation: "plt.bar dùng để vẽ bar chart dọc. plt.plot là line chart, plt.hist là histogram, plt.boxplot là box plot."
  },
  {
    id: "mpl_f_005",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Scatter Plot",
    question: "Hàm nào dùng để vẽ scatter plot?",
    code: "import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny = [5, 3, 6]",
    options: ["plt.scatter(x, y)", "plt.plot(x, y)", "plt.bar(x, y)", "plt.hist(y)"],
    answer: 0,
    explanation: "plt.scatter(x, y) dùng để vẽ scatter plot. Các lựa chọn còn lại không phải hàm chuẩn tương ứng trong pyplot."
  },
  {
    id: "mpl_f_006",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Histogram",
    question: "Hàm nào dùng để vẽ histogram?",
    code: "import matplotlib.pyplot as plt\nvalues = [1, 2, 2, 3, 3, 3, 4]",
    options: ["plt.bar(values)", "plt.hist(values)", "plt.plot(values)", "plt.boxplot(values)"],
    answer: 1,
    explanation: "plt.hist(values) dùng để vẽ histogram nhằm xem phân phối dữ liệu số. plt.bar thường dùng để so sánh giá trị giữa các nhóm/category."
  },
  {
    id: "mpl_f_007",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Title & Axis Labels",
    question: "Hàm nào dùng để đặt tiêu đề cho biểu đồ khi dùng pyplot style?",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 6])",
    options: ["plt.label('Chart')", "plt.title('Chart')", "plt.xlabel('Chart')", "plt.text(1, 2, 'Chart')"],
    answer: 1,
    explanation: "plt.title() dùng để đặt tiêu đề biểu đồ trong pyplot style. Các hàm còn lại không phải hàm chuẩn để đặt title."
  },
  {
    id: "mpl_f_008",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Title & Axis Labels",
    question: "Cặp hàm nào dùng để đặt nhãn trục x và trục y trong pyplot style?",
    code: "import matplotlib.pyplot as plt",
    options: ["plt.xlim() và plt.ylim()", "plt.xlabel() và plt.ylabel()", "plt.xticks() và plt.yticks()", "plt.title() và plt.legend()"],
    answer: 1,
    explanation: "plt.xlabel() đặt nhãn trục x và plt.ylabel() đặt nhãn trục y. Đây là các hàm cơ bản và thường dùng trong pyplot."
  },
  {
    id: "mpl_f_009",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Legend",
    question: "Muốn hiển thị legend cho line có label, cần gọi hàm nào?",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 6], label='Series A')",
    options: ["plt.title()", "plt.legend()", "plt.xlabel()", "plt.grid()"],
    answer: 1,
    explanation: "Sau khi truyền label vào plot, cần gọi plt.legend() để hiển thị legend trên biểu đồ."
  },
  {
    id: "mpl_f_010",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Figure Size",
    question: "Tham số nào thường dùng trong plt.figure để chỉnh kích thước figure?",
    code: "import matplotlib.pyplot as plt\nplt.figure(?)",
    options: ["shape=(8, 4)", "size=(8, 4)", "figsize=(8, 4)", "layout=(8, 4)"],
    answer: 2,
    explanation: "figsize=(width, height) dùng để chỉnh kích thước figure theo inch. shape và size không phải tham số chuẩn của plt.figure cho mục đích này."
  },
  {
    id: "mpl_f_011",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Grid",
    question: "Hàm nào bật grid cho biểu đồ trong pyplot style?",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 6])",
    options: ["plt.grid(True)", "plt.axis(True)", "plt.frame(True)", "plt.scale(True)"],
    answer: 0,
    explanation: "plt.grid(True) bật lưới cho biểu đồ. Grid giúp đọc giá trị trên chart dễ hơn trong nhiều trường hợp."
  },
  {
    id: "mpl_f_012",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Colors / Markers / Linestyles",
    question: "Trong plt.plot, tham số nào đặt màu của line?",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 6], ?='red')",
    options: ["color", "marker", "linestyle", "linewidth"],
    answer: 0,
    explanation: "color='red' đặt màu cho line. Đây là tham số phổ biến trong nhiều hàm vẽ của Matplotlib."
  },
  {
    id: "mpl_f_013",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Saving Figures",
    question: "Hàm nào dùng để lưu figure ra file ảnh?",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 6])",
    options: ["plt.export('chart.png')", "plt.save('chart.png')", "plt.savefig('chart.png')", "plt.write('chart.png')"],
    answer: 2,
    explanation: "plt.savefig('chart.png') dùng để lưu figure ra file. Đây là cách phổ biến để xuất chart trong report hoặc notebook."
  },
  {
    id: "mpl_f_014",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Axis Limits",
    question: "Hàm nào dùng để đặt giới hạn cho trục y trong pyplot style?",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [10, 20, 30])",
    options: ["plt.xlim(0, 40)", "plt.ylim(0, 40)", "plt.yticks(0, 40)", "plt.axis('y', 0, 40)"],
    answer: 1,
    explanation: "plt.ylim(0, 40) đặt giới hạn hiển thị cho trục y. Tương tự, plt.xlim dùng cho trục x."
  },
  {
    id: "mpl_f_015",
    library: "Matplotlib",
    level: "Foundation",
    topic: "Figure & Axes",
    question: "Trong Matplotlib, Figure thường được hiểu là gì?",
    code: "",
    options: ["Vùng chứa tổng thể của biểu đồ", "Vùng chỉ chứa nhãn của trục x", "Đối tượng chỉ biểu diễn một line", "Một giá trị dữ liệu trên chart"],
    answer: 0,
    explanation: "Figure là container tổng thể chứa một hoặc nhiều Axes. Axes là vùng vẽ cụ thể bên trong Figure."
  },
  {
    id: "mpl_i_001",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Object-Oriented API",
    question: "Cách nào tạo Figure và Axes theo object-oriented API?",
    code: "import matplotlib.pyplot as plt",
    options: ["fig, ax = plt.subplots()", "ax = plt.plot(x, y)", "fig = plt.axes()", "plt.figure_api()"],
    answer: 0,
    explanation: "fig, ax = plt.subplots() là cách phổ biến để tạo Figure và Axes, sau đó gọi method trên ax như ax.plot(), ax.set_title()."
  },
  {
    id: "mpl_i_002",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Object-Oriented API",
    question: "Trong object-oriented API, cách đúng để đặt title cho một Axes là gì?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()",
    options: ["ax.title('Chart')", "ax.set_title('Chart')", "fig.title('Chart')", "plt.set_title('Chart')"],
    answer: 1,
    explanation: "Trong OO API, ax.set_title('Chart') đặt tiêu đề cho Axes. plt.title() là pyplot style và áp dụng lên current axes."
  },
  {
    id: "mpl_i_003",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Object-Oriented API",
    question: "Trong object-oriented API, cách đúng để đặt nhãn trục x là gì?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()",
    options: ["ax.xlabel('x')", "ax.set_xlabel('x')", "fig.xlabel('x')", "plt.set_xlabel('x')"],
    answer: 1,
    explanation: "ax.set_xlabel('x') đặt nhãn trục x cho Axes. Tương tự, ax.set_ylabel() đặt nhãn trục y."
  },
  {
    id: "mpl_i_004",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Subplots",
    question: "Kết quả shape của axes trong đoạn code sau là gì?",
    code: "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 3)\nprint(axes.shape)",
    options: ["(2, 3)", "(3, 2)", "(6,)", "Không có shape"],
    answer: 0,
    explanation: "plt.subplots(2, 3) tạo grid 2 hàng và 3 cột. axes là array 2D có shape (2, 3)."
  },
  {
    id: "mpl_i_005",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Subplots",
    question: "Muốn vẽ vào subplot hàng 1 cột 2 trong grid axes shape (2, 3), cách index đúng là gì?",
    code: "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 3)",
    options: ["axes[1, 2]", "axes[0, 1]", "axes[1, 1]", "axes[0, 2]"],
    answer: 1,
    explanation: "Index bắt đầu từ 0. Hàng 1 cột 2 theo cách nói tự nhiên tương ứng index [0, 1]."
  },
  {
    id: "mpl_i_006",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Multiple Series",
    question: "Cách đúng để vẽ hai series trên cùng một Axes bằng OO API là gì?",
    code: "import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny1 = [2, 4, 6]\ny2 = [1, 3, 5]\nfig, ax = plt.subplots()",
    options: ["ax.plot(x, y1); ax.plot(x, y2)", "ax.plot(x, y1, y2)", "fig.plot(x, y1); fig.plot(x, y2)", "plt.subplots(x, y1); plt.subplots(x, y2)"],
    answer: 0,
    explanation: "Gọi ax.plot nhiều lần trên cùng một Axes sẽ vẽ nhiều series lên cùng vùng vẽ. Đây là cách rõ ràng trong OO API."
  },
  {
    id: "mpl_i_007",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Legend",
    question: "Vì sao đoạn code sau có thể không hiển thị legend như mong muốn?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [2, 4, 6])\nax.legend()",
    options: ["Vì line chưa có label phù hợp", "Vì legend cần gọi trước ax.plot()", "Vì ax.legend() chỉ dùng cho scatter", "Vì legend bắt buộc phải có title"],
    answer: 0,
    explanation: "Legend cần label cho artist. Nếu không truyền label như label='Series A', ax.legend() có thể không hiển thị nội dung hữu ích."
  },
  {
    id: "mpl_i_008",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Colors / Markers / Linestyles",
    question: "Đoạn code nào vẽ line có marker hình tròn và linestyle nét đứt?",
    code: "import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny = [2, 4, 6]",
    options: ["plt.plot(x, y, marker='o', linestyle='--')", "plt.plot(x, y, marker='--', linestyle='o')", "plt.scatter(x, y, marker='o', linestyle='--')", "plt.bar(x, y, marker='o', linestyle='--')"],
    answer: 0,
    explanation: "marker='o' đặt marker hình tròn và linestyle='--' đặt line nét đứt. Đây là các tham số thường dùng của plot."
  },
  {
    id: "mpl_i_009",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Ticks & Tick Labels",
    question: "Hàm nào trong OO API dùng để đặt vị trí tick trên trục x?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()",
    options: ["ax.set_xticks([0, 1, 2])", "ax.set_yticks([0, 1, 2])", "plt.xticks([0, 1, 2])", "fig.set_xticks([0, 1, 2])"],
    answer: 0,
    explanation: "ax.set_xticks() đặt vị trí tick trên trục x trong OO API. Với pyplot style có thể dùng plt.xticks()."
  },
  {
    id: "mpl_i_010",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Ticks & Tick Labels",
    question: "Cách nào đặt nhãn tick cho trục x trong OO API?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.set_xticks([0, 1, 2])",
    options: ["ax.set_xticklabels(['A', 'B', 'C'])", "ax.set_yticklabels(['A', 'B', 'C'])", "plt.xticklabels(['A', 'B', 'C'])", "fig.set_xticklabels(['A', 'B', 'C'])"],
    answer: 0,
    explanation: "ax.set_xticklabels() đặt text hiển thị cho các tick đã được xác định. Nên đảm bảo số label khớp với số tick."
  },
  {
    id: "mpl_i_011",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Bar Chart",
    question: "Hàm nào dùng để vẽ bar chart ngang?",
    code: "import matplotlib.pyplot as plt\nlabels = ['A', 'B', 'C']\nvalues = [10, 20, 15]",
    options: ["plt.barh(labels, values)", "plt.bar(labels, values)", "plt.hist(values, bins=3)", "plt.plot(labels, values)"],
    answer: 0,
    explanation: "plt.barh dùng để vẽ bar chart ngang. plt.bar vẽ bar chart dọc."
  },
  {
    id: "mpl_i_012",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Histogram",
    question: "Tham số bins trong plt.hist dùng để làm gì?",
    code: "import matplotlib.pyplot as plt\nvalues = [1, 2, 2, 3, 4, 5]\nplt.hist(values, bins=3)",
    options: ["Quy định số khoảng chia của histogram", "Quy định số màu hiển thị của histogram", "Quy định tên nhãn trục x của histogram", "Quy định kiểu đường viền của histogram"],
    answer: 0,
    explanation: "bins kiểm soát cách chia dữ liệu thành các khoảng trong histogram. Đây là tham số rất quan trọng khi đọc phân phối."
  },
  {
    id: "mpl_i_013",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Box Plot",
    question: "Box plot thường hữu ích nhất để xem điều gì?",
    code: "",
    options: ["Median, IQR, phân tán và outlier", "Tỷ trọng từng nhóm trong tổng", "Quan hệ giữa hai biến tọa độ địa lý", "Sơ đồ thư mục của một project"],
    answer: 0,
    explanation: "Box plot giúp xem median, khoảng tứ phân vị, độ phân tán và outlier tiềm năng. Pie chart mới phù hợp hơn cho tỷ trọng phần trăm đơn giản."
  },
  {
    id: "mpl_i_014",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Pie Chart Basics",
    question: "Hàm nào dùng để vẽ pie chart cơ bản?",
    code: "import matplotlib.pyplot as plt\nvalues = [40, 35, 25]\nlabels = ['A', 'B', 'C']",
    options: ["plt.pie(values, labels=labels)", "plt.bar(values, labels=labels)", "plt.hist(values, labels=labels)", "plt.plot(values, labels=labels)"],
    answer: 0,
    explanation: "plt.pie dùng để vẽ pie chart. Tuy nhiên trong phân tích dữ liệu, pie chart nên dùng cẩn thận khi có nhiều nhóm hoặc cần so sánh chính xác."
  },
  {
    id: "mpl_i_015",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Annotation",
    question: "Hàm nào dùng để thêm annotation có mũi tên vào một điểm trên chart?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [2, 5, 3])",
    options: [
      "ax.annotate('Peak', xy=(2, 5), xytext=(2.2, 5.5), arrowprops={'arrowstyle': '->'})",
      "ax.text('Peak', xy=(2, 5), xytext=(2.2, 5.5), arrowprops={'arrowstyle': '->'})",
      "ax.legend('Peak', xy=(2, 5), xytext=(2.2, 5.5), arrowprops={'arrowstyle': '->'})",
      "ax.set_title('Peak', xy=(2, 5), xytext=(2.2, 5.5), arrowprops={'arrowstyle': '->'})"
    ],
    answer: 0,
    explanation: "ax.annotate hỗ trợ xy, xytext và arrowprops để chú thích điểm cụ thể trên biểu đồ. Legend không dùng để annotate một điểm riêng lẻ."
  },
  {
    id: "mpl_i_016",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Text",
    question: "Hàm nào thêm text vào vị trí dữ liệu cụ thể trên Axes?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()",
    options: ["ax.text(1, 2, 'Note')", "ax.annotate(1, 2, 'Note')", "fig.text_data(1, 2, 'Note')", "plt.title(1, 2, 'Note')"],
    answer: 0,
    explanation: "ax.text(x, y, text) thêm text tại tọa độ dữ liệu trên Axes. fig.text dùng tọa độ theo Figure, khác với ax.text."
  },
  {
    id: "mpl_i_017",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Axis Limits",
    question: "Trong OO API, cách đặt giới hạn trục x từ 0 đến 10 là gì?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()",
    options: ["ax.set_xlim(0, 10)", "ax.set_ylim(0, 10)", "plt.set_xlim(0, 10)", "fig.set_xlim(0, 10)"],
    answer: 0,
    explanation: "ax.set_xlim(0, 10) đặt giới hạn trục x trong object-oriented API. pyplot style tương ứng là plt.xlim(0, 10)."
  },
  {
    id: "mpl_i_018",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Date Plotting Basics",
    question: "Khi vẽ dữ liệu theo thời gian, cách nào thường giúp nhãn ngày trên trục x dễ đọc hơn trong OO API?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()",
    options: [
      "ax.tick_params(axis='x', labelrotation=45)",
      "ax.tick_params(axis='y', labelrotation=45)",
      "ax.set_xlabel(axis='x', labelrotation=45)",
      "ax.set_title(axis='x', labelrotation=45)"
    ],
    answer: 0,
    explanation: "Với chuỗi thời gian, tick label ngày dễ bị chồng lên nhau. Trong OO API, có thể dùng ax.tick_params(axis='x', labelrotation=45) để xoay nhãn ngày cho dễ đọc hơn."
  },
  {
    id: "mpl_i_019",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Error Bars",
    question: "Hàm nào dùng để vẽ error bars cơ bản?",
    code: "import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny = [10, 12, 9]\nyerr = [1, 2, 1]",
    options: ["plt.errorbar(x, y, yerr=yerr)", "plt.scatter(x, y, yerr=yerr)", "plt.plot(x, y, yerr=yerr)", "plt.barh(x, y, yerr=yerr)"],
    answer: 0,
    explanation: "plt.errorbar hỗ trợ vẽ giá trị kèm sai số, ví dụ yerr cho sai số theo trục y."
  },
  {
    id: "mpl_i_020",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Layout: tight_layout / constrained_layout",
    question: "plt.tight_layout() thường dùng để làm gì?",
    code: "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 2)",
    options: ["Giảm chồng lấn giữa subplot, title và label", "Tăng độ phân giải file ảnh khi lưu", "Đổi toàn bộ theme sang dark mode", "Xóa các subplot chưa có dữ liệu"],
    answer: 0,
    explanation: "tight_layout giúp tự điều chỉnh spacing để label/title ít bị chồng lấn. Nó không làm tăng độ phân giải hay đổi theme."
  },
  {
    id: "mpl_i_021",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Style & Theme Basics",
    question: "Cách nào áp dụng style có sẵn trong Matplotlib?",
    code: "import matplotlib.pyplot as plt",
    options: ["plt.style.use('ggplot')", "plt.theme.use('ggplot')", "plt.format.use('ggplot')", "plt.layout.use('ggplot')"],
    answer: 0,
    explanation: "plt.style.use('ggplot') áp dụng style có sẵn. Lưu ý style ảnh hưởng đến các biểu đồ tạo sau khi style được set."
  },
  {
    id: "mpl_i_022",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Saving Figures",
    question: "Tham số dpi trong savefig thường ảnh hưởng đến điều gì?",
    code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [2, 4, 6])\nplt.savefig('chart.png', dpi=150)",
    options: ["Độ phân giải ảnh xuất ra", "Số dòng dữ liệu được vẽ", "Số lượng legend trong chart", "Kiểu dữ liệu của trục x"],
    answer: 0,
    explanation: "dpi ảnh hưởng đến độ phân giải file ảnh raster như PNG. dpi cao hơn thường cho ảnh sắc hơn nhưng file có thể lớn hơn."
  },
  {
    id: "mpl_i_023",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Common Errors",
    question: "Lỗi phổ biến khi chạy đoạn code sau là gì?",
    code: "import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny = [10, 20]\nplt.plot(x, y)",
    options: ["ValueError vì x và y không cùng độ dài", "SyntaxError vì thiếu lệnh plt.show()", "TypeError vì x phải là NumPy array", "Không lỗi vì Matplotlib tự điền giá trị thiếu"],
    answer: 0,
    explanation: "Khi truyền cả x và y vào plot, hai list thường phải có cùng chiều dài. Ở đây x có 3 phần tử còn y có 2 phần tử."
  },
  {
    id: "mpl_i_024",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Chart Readability",
    question: "Khi bar chart có nhiều nhãn category dài, cách nào thường cải thiện readability?",
    code: "",
    options: ["Dùng bar chart ngang hoặc xoay tick labels", "Ẩn toàn bộ nhãn category trên trục", "Tăng số màu ngẫu nhiên cho từng cột", "Chuyển mọi category sang pie chart"],
    answer: 0,
    explanation: "Bar chart ngang hoặc xoay tick labels giúp nhãn dài dễ đọc hơn. Ẩn nhãn làm mất thông tin, còn pie chart không phù hợp khi có nhiều category."
  },
  {
    id: "mpl_i_025",
    library: "Matplotlib",
    level: "Intermediate",
    topic: "Best Practice for Data Analytics Visualization",
    question: "Khi so sánh giá trị giữa nhiều category, chart nào thường dễ đọc hơn pie chart?",
    code: "",
    options: ["Bar chart", "Pie chart 3D", "Radar chart", "Donut chart"],
    answer: 0,
    explanation: "Bar chart thường giúp so sánh độ lớn giữa category chính xác và dễ đọc hơn pie chart, đặc biệt khi có nhiều category hoặc chênh lệch nhỏ."
  },
  {
    id: "mpl_a_001",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Object-Oriented API",
    question: "Vì sao object-oriented API thường được khuyến nghị khi tạo dashboard/report có nhiều subplot?",
    code: "",
    options: [
      "Kiểm soát rõ từng Axes, ít phụ thuộc current state",
      "Bắt buộc dùng OO API mới có thể lưu ảnh",
      "Pyplot không hỗ trợ vẽ nhiều line chart",
      "OO API tự chọn chart tốt nhất cho dữ liệu"
    ],
    answer: 0,
    explanation: "OO API giúp làm việc rõ ràng với từng Axes, nhất là khi có nhiều subplot. Pyplot style phụ thuộc nhiều hơn vào current figure/current axes."
  },
  {
    id: "mpl_a_002",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Secondary Axis",
    question: "Cách phổ biến để tạo trục y thứ hai dùng chung trục x là gì?",
    code: "import matplotlib.pyplot as plt\nfig, ax1 = plt.subplots()",
    options: ["ax2 = ax1.twinx()", "ax2 = ax1.twiny()", "ax2 = fig.twinx()", "ax2 = plt.twinx(ax1)"],
    answer: 0,
    explanation: "ax1.twinx() tạo Axes thứ hai dùng chung trục x nhưng có trục y riêng. twiny() là trường hợp dùng chung trục y và có trục x riêng."
  },
  {
    id: "mpl_a_003",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Secondary Axis",
    question: "Điểm cần cẩn thận khi dùng secondary y-axis là gì?",
    code: "",
    options: [
      "Dễ gây hiểu nhầm nếu scale và label không rõ",
      "Không thể dùng legend khi có secondary axis",
      "Chỉ hoạt động với pie chart và donut chart",
      "Tự chuẩn hóa mọi series về cùng đơn vị"
    ],
    answer: 0,
    explanation: "Secondary axis có thể làm người đọc hiểu sai quan hệ giữa hai series nếu scale và label không rõ ràng. Cần ghi nhãn trục và dùng màu/legend hợp lý."
  },
  {
    id: "mpl_a_004",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Subplots",
    question: "sharex=True trong plt.subplots thường dùng để làm gì?",
    code: "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 1, sharex=True)",
    options: ["Cho các subplot dùng chung trục x", "Cho các subplot dùng chung title", "Gộp toàn bộ subplot thành một Axes", "Tự động lưu figure sau khi vẽ"],
    answer: 0,
    explanation: "sharex=True giúp các subplot chia sẻ cùng trục x, hữu ích khi các chart cùng timeline hoặc cùng domain x."
  },
  {
    id: "mpl_a_005",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Figure & Axes",
    question: "Khác biệt đúng giữa fig.suptitle() và ax.set_title() là gì?",
    code: "import matplotlib.pyplot as plt\nfig, axes = plt.subplots(2, 1)",
    options: [
      "fig.suptitle cho Figure, ax.set_title cho từng Axes",
      "fig.suptitle cho trục x, ax.set_title cho trục y",
      "fig.suptitle cho legend, ax.set_title cho label",
      "fig.suptitle cho pie, ax.set_title cho bar"
    ],
    answer: 0,
    explanation: "fig.suptitle() là title cấp Figure, thường dùng cho toàn bộ layout. ax.set_title() là title của một subplot/Axes cụ thể."
  },
  {
    id: "mpl_a_006",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Annotation",
    question: "Trong ax.annotate, xy và xytext khác nhau thế nào?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\nax.annotate('Peak', xy=(2, 5), xytext=(3, 6), arrowprops={'arrowstyle': '->'})",
    options: [
      "xy là điểm được chú thích, xytext là vị trí text",
      "xy là vị trí text, xytext là điểm được chú thích",
      "xy là màu mũi tên, xytext là màu của text",
      "xy là trục phụ, xytext là trục chính"
    ],
    answer: 0,
    explanation: "xy xác định điểm mục tiêu cần annotate. xytext xác định vị trí text. Nếu dùng arrowprops, mũi tên thường nối từ text đến xy."
  },
  {
    id: "mpl_a_007",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Error Bars",
    question: "Trong phân tích dữ liệu, error bar thường nên được dùng khi nào?",
    code: "",
    options: [
      "Khi cần thể hiện uncertainty hoặc variability",
      "Khi cần thay thế toàn bộ axis label",
      "Khi cần tăng số màu trang trí cho chart",
      "Khi dữ liệu không có bất kỳ numeric value"
    ],
    answer: 0,
    explanation: "Error bar giúp biểu diễn uncertainty hoặc variability như standard deviation, standard error, confidence interval. Không nên dùng chỉ để trang trí."
  },
  {
    id: "mpl_a_008",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Date Plotting Basics",
    question: "Khi vẽ time series nhiều điểm dày đặc, cách nào thường tốt hơn để cải thiện readability?",
    code: "",
    options: [
      "Giảm số tick hoặc format lại date tick",
      "Hiển thị đầy đủ mọi timestamp trên trục",
      "Đổi toàn bộ ngày thành cùng một label",
      "Chuyển từng ngày thành một lát pie chart"
    ],
    answer: 0,
    explanation: "Với time series dày, quá nhiều tick làm trục x rối. Nên giảm số tick, format date hoặc xoay label để dễ đọc."
  },
  {
    id: "mpl_a_009",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Layout: tight_layout / constrained_layout",
    question: "constrained_layout=True thường được truyền ở đâu?",
    code: "import matplotlib.pyplot as plt",
    options: ["plt.subplots(constrained_layout=True)", "ax.plot(constrained_layout=True)", "ax.legend(constrained_layout=True)", "plt.savefig(constrained_layout=True)"],
    answer: 0,
    explanation: "constrained_layout=True thường truyền khi tạo figure/subplots để Matplotlib tự quản lý layout tốt hơn, đặc biệt với nhiều subplot."
  },
  {
    id: "mpl_a_010",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Common Errors",
    question: "Trong notebook hoặc script tạo nhiều figure, vì sao nên đóng figure không còn dùng?",
    code: "import matplotlib.pyplot as plt\nfig, ax = plt.subplots()\n# ...\nplt.close(fig)",
    options: [
      "Để tránh tích lũy figure trong bộ nhớ",
      "Để xóa dữ liệu nguồn khỏi ổ cứng",
      "Để tăng số điểm dữ liệu trong chart",
      "Để bắt buộc legend hiển thị đúng"
    ],
    answer: 0,
    explanation: "Khi tạo nhiều figure, không đóng figure có thể làm tăng sử dụng bộ nhớ. plt.close(fig) giúp giải phóng figure không còn cần thiết."
  },
  {
    id: "mpl_a_011",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Colors / Markers / Linestyles",
    question: "Khi vẽ nhiều series, thực hành nào giúp chart dễ đọc hơn?",
    code: "",
    options: [
      "Kết hợp màu, marker/linestyle và legend rõ",
      "Dùng cùng màu và cùng marker cho mọi series",
      "Bỏ legend trong mọi chart để tiết kiệm chỗ",
      "Dùng màu ngẫu nhiên cho từng lần chạy code"
    ],
    answer: 0,
    explanation: "Không nên chỉ dựa vào màu, vì người đọc có thể khó phân biệt hoặc in đen trắng. Linestyle, marker và legend rõ ràng giúp chart dễ hiểu hơn."
  },
  {
    id: "mpl_a_012",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Axis Limits",
    question: "Khi nào việc đặt y-axis không bắt đầu từ 0 có thể gây hiểu nhầm?",
    code: "",
    options: [
      "Khi dùng bar chart để so sánh độ lớn",
      "Khi dùng histogram để xem phân phối",
      "Khi đặt title cho một biểu đồ đơn",
      "Khi lưu figure sang định dạng SVG"
    ],
    answer: 0,
    explanation: "Bar chart mã hóa độ lớn bằng chiều dài cột, nên trục y không bắt đầu từ 0 có thể phóng đại khác biệt. Với line chart, việc zoom trục có thể chấp nhận nếu ghi rõ."
  },
  {
    id: "mpl_a_013",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Saving Figures",
    question: "Khi lưu chart có legend nằm ngoài vùng Axes, tham số nào thường giúp tránh bị cắt mất nội dung?",
    code: "import matplotlib.pyplot as plt\nplt.savefig('chart.png', bbox_inches='tight')",
    options: ["bbox_inches='tight'", "pad_inches='tight'", "legend_loc='tight'", "layout_mode='tight'"],
    answer: 0,
    explanation: "bbox_inches='tight' giúp bounding box bao quanh nội dung chặt hơn, thường tránh cắt mất legend hoặc label nằm ngoài vùng mặc định."
  },
  {
    id: "mpl_a_014",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Best Practice for Data Analytics Visualization",
    question: "Khi muốn nhấn mạnh một điểm bất thường trên line chart, cách nào phù hợp?",
    code: "",
    options: [
      "Dùng annotation hoặc marker nổi bật cho điểm đó",
      "Xóa toàn bộ các điểm bình thường khỏi chart",
      "Ẩn trục y để người đọc tập trung hơn",
      "Đổi line chart thành pie chart nhiều lát"
    ],
    answer: 0,
    explanation: "Annotation hoặc marker giúp người đọc tập trung vào điểm bất thường mà vẫn giữ được ngữ cảnh của toàn bộ chuỗi dữ liệu."
  },
  {
    id: "mpl_a_015",
    library: "Matplotlib",
    level: "Advanced",
    topic: "Chart Readability",
    question: "Vì sao không nên đưa quá nhiều series vào một line chart duy nhất?",
    code: "",
    options: [
      "Chart dễ rối, khó đọc pattern và legend",
      "Matplotlib chỉ cho tối đa hai line",
      "Line chart không hỗ trợ nhiều màu",
      "plt.plot sẽ tự xóa series cũ"
    ],
    answer: 0,
    explanation: "Quá nhiều series làm chart rối và giảm khả năng đọc insight. Có thể cân nhắc small multiples, filter, highlight hoặc tách nhóm."
  },
  {
    id: "mpl_e_001",
    library: "Matplotlib",
    level: "Expert",
    topic: "Object-Oriented API",
    question: "Trong Matplotlib, Artist là khái niệm gì?",
    code: "",
    options: [
      "Đối tượng được vẽ như line, text, axes, patch",
      "Người thiết kế giao diện của biểu đồ",
      "Tên khác của một NumPy array",
      "Một chế độ riêng chỉ dùng cho pie chart"
    ],
    answer: 0,
    explanation: "Matplotlib có kiến trúc dựa trên Artist. Line2D, Text, Axes, Figure, Patch đều là Artist hoặc liên quan đến Artist hierarchy."
  },
  {
    id: "mpl_e_002",
    library: "Matplotlib",
    level: "Expert",
    topic: "Performance & Memory",
    question: "Khi cần cập nhật chart nhiều lần trong animation hoặc interactive view, chiến lược nào thường hiệu quả hơn?",
    code: "",
    options: [
      "Tái sử dụng artist và cập nhật data hiện có",
      "Tạo mới figure và axes ở từng frame",
      "Lưu từng frame bằng savefig trước khi vẽ",
      "Chuyển toàn bộ numeric data thành string"
    ],
    answer: 0,
    explanation: "Tái sử dụng artist và cập nhật dữ liệu giúp giảm overhead so với tạo lại toàn bộ figure/axes liên tục."
  },
  {
    id: "mpl_e_003",
    library: "Matplotlib",
    level: "Expert",
    topic: "Common Errors",
    question: "Vì sao mixing pyplot stateful API và OO API quá nhiều trong cùng một chart có thể gây lỗi khó debug?",
    code: "",
    options: [
      "Pyplot dùng current figure/axes nên dễ áp dụng nhầm subplot",
      "OO API không hỗ trợ đặt title và axis label",
      "Pyplot luôn nhanh hơn OO API trong mọi trường hợp",
      "Matplotlib cấm dùng hai style trong cùng một file"
    ],
    answer: 0,
    explanation: "Pyplot dựa vào current state, còn OO API thao tác trực tiếp trên object. Trộn không rõ ràng có thể khiến title, label hoặc plot rơi vào Axes không mong muốn."
  },
  {
    id: "mpl_e_004",
    library: "Matplotlib",
    level: "Expert",
    topic: "Saving Figures",
    question: "Khác biệt thực tế giữa lưu PNG và SVG thường là gì?",
    code: "import matplotlib.pyplot as plt\nplt.savefig('chart.png')\nplt.savefig('chart.svg')",
    options: [
      "PNG là raster, SVG là vector nên phóng to tốt hơn",
      "SVG luôn có dung lượng nhỏ hơn PNG trong mọi case",
      "PNG không thể lưu được chart có nhiều màu",
      "SVG chỉ dùng được cho histogram và box plot"
    ],
    answer: 0,
    explanation: "PNG là ảnh raster theo pixel. SVG là vector, thường tốt cho biểu đồ line/bar/text khi cần phóng to hoặc dùng trong tài liệu."
  },
  {
    id: "mpl_e_005",
    library: "Matplotlib",
    level: "Expert",
    topic: "Customization",
    question: "rcParams trong Matplotlib dùng để làm gì?",
    code: "import matplotlib.pyplot as plt\nplt.rcParams['figure.figsize'] = (8, 4)",
    options: [
      "Cấu hình mặc định toàn cục như figsize và font",
      "Lưu dữ liệu chart trực tiếp vào database",
      "Tạo random data để test biểu đồ",
      "Chỉ định số dòng hiển thị trong DataFrame"
    ],
    answer: 0,
    explanation: "rcParams cho phép cấu hình mặc định toàn cục của Matplotlib, ví dụ figure size, font size, linewidth. Nên dùng cẩn thận vì ảnh hưởng các chart tạo sau đó."
  }
];