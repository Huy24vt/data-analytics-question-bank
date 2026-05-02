const SEABORN_QUESTIONS = [
  {
    id: "sns_f_001",
    library: "Seaborn",
    level: "Foundation",
    topic: "Import & Basics",
    question: "Alias phổ biến nhất khi import Seaborn là gì?",
    code: "import seaborn as ?",
    options: ["np", "sns", "pd", "plt"],
    answer: 1,
    explanation: "Seaborn thường được import bằng alias sns: import seaborn as sns. np dùng cho NumPy, pd cho pandas, plt cho matplotlib.pyplot."
  },
  {
    id: "sns_f_002",
    library: "Seaborn",
    level: "Foundation",
    topic: "Seaborn vs Matplotlib",
    question: "Seaborn có quan hệ thế nào với Matplotlib?",
    code: "",
    options: [
      "Seaborn thay thế pandas",
      "Seaborn là database engine",
      "Seaborn xây trên Matplotlib",
      "Seaborn chỉ xử lý text"
    ],
    answer: 2,
    explanation: "Seaborn là thư viện visualization high-level xây trên Matplotlib, giúp vẽ các chart thống kê nhanh và đẹp hơn. Nó không thay thế pandas hay database."
  },
  {
    id: "sns_f_003",
    library: "Seaborn",
    level: "Foundation",
    topic: "Scatter Plot",
    question: "Hàm nào dùng để vẽ scatter plot trong Seaborn?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3], 'y': [3, 2, 5]})",
    options: [
      "sns.barplot(data=df, x='x', y='y')",
      "sns.histplot(data=df, x='x')",
      "sns.scatterplot(data=df, x='x', y='y')",
      "sns.heatmap(df)"
    ],
    answer: 2,
    explanation: "sns.scatterplot dùng để vẽ quan hệ giữa hai biến. barplot dùng cho so sánh nhóm, histplot xem phân phối, heatmap dùng cho ma trận."
  },
  {
    id: "sns_f_004",
    library: "Seaborn",
    level: "Foundation",
    topic: "Line Plot",
    question: "Hàm nào phù hợp để vẽ line chart trong Seaborn?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3], 'y': [10, 15, 13]})",
    options: [
      "sns.countplot(data=df, x='y')",
      "sns.boxplot(data=df, x='x', y='y')",
      "sns.lineplot(data=df, x='x', y='y')",
      "sns.kdeplot(data=df, x='x', y='y')"
    ],
    answer: 2,
    explanation: "sns.lineplot phù hợp để vẽ xu hướng hoặc chuỗi theo trục x. countplot đếm category, boxplot xem phân phối theo nhóm."
  },
  {
    id: "sns_f_005",
    library: "Seaborn",
    level: "Foundation",
    topic: "Bar Plot",
    question: "Hàm nào dùng để vẽ bar plot so sánh giá trị numeric theo category?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'category': ['A', 'B'], 'value': [10, 20]})",
    options: [
      "sns.scatterplot(data=df, x='category', y='value')",
      "sns.heatmap(data=df)",
      "sns.barplot(data=df, x='category', y='value')",
      "sns.pairplot(data=df)"
    ],
    answer: 2,
    explanation: "sns.barplot dùng để so sánh giá trị numeric theo category. scatterplot thường dùng cho quan hệ giữa hai biến, pairplot dùng xem quan hệ nhiều biến."
  },
  {
    id: "sns_f_006",
    library: "Seaborn",
    level: "Foundation",
    topic: "Count Plot",
    question: "Hàm nào dùng để đếm số dòng theo từng category?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'category': ['A', 'A', 'B', 'C']})",
    options: [
      "sns.barplot(data=df, x='category')",
      "sns.kdeplot(data=df, x='category')",
      "sns.countplot(data=df, x='category')",
      "sns.lineplot(data=df, x='category')"
    ],
    answer: 2,
    explanation: "sns.countplot đếm số quan sát theo category. barplot thường cần biến numeric để tính thống kê như mean, còn kdeplot dùng cho phân phối biến số."
  },
  {
    id: "sns_f_007",
    library: "Seaborn",
    level: "Foundation",
    topic: "Histogram",
    question: "Hàm nào dùng để xem phân phối của một biến numeric?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'value': [1, 2, 2, 3, 4, 5]})",
    options: [
      "sns.countplot(data=df, x='value')",
      "sns.scatterplot(data=df, x='value')",
      "sns.histplot(data=df, x='value')",
      "sns.heatmap(data=df)"
    ],
    answer: 2,
    explanation: "sns.histplot dùng để xem phân phối của biến numeric bằng histogram. countplot phù hợp hơn với dữ liệu category hoặc discrete."
  },
  {
    id: "sns_f_008",
    library: "Seaborn",
    level: "Foundation",
    topic: "Box Plot",
    question: "Box plot trong Seaborn thường dùng để xem điều gì?",
    code: "",
    options: [
      "Số lượng dòng trong DataFrame",
      "Quan hệ giữa hai category",
      "Median, IQR và outlier",
      "Cấu trúc thư mục project"
    ],
    answer: 2,
    explanation: "Box plot giúp xem median, IQR, độ phân tán và outlier tiềm năng của biến numeric, thường theo từng nhóm category."
  },
  {
    id: "sns_f_009",
    library: "Seaborn",
    level: "Foundation",
    topic: "Heatmap",
    question: "Hàm nào dùng để vẽ heatmap trong Seaborn?",
    code: "import seaborn as sns\nimport pandas as pd\ndata = pd.DataFrame([[1, 2], [3, 4]])",
    options: [
      "sns.hotplot(data)",
      "sns.matrixplot(data)",
      "sns.heatmap(data)",
      "sns.colorgrid(data)"
    ],
    answer: 2,
    explanation: "sns.heatmap dùng để vẽ dữ liệu dạng ma trận bằng màu sắc. Đây là chart phổ biến để xem correlation matrix hoặc bảng giá trị 2 chiều."
  },
  {
    id: "sns_f_010",
    library: "Seaborn",
    level: "Foundation",
    topic: "Hue",
    question: "Tham số hue trong nhiều hàm Seaborn thường dùng để làm gì?",
    code: "import seaborn as sns",
    options: [
      "Đặt kích thước figure",
      "Xóa missing values",
      "Phân nhóm bằng màu sắc",
      "Lưu biểu đồ ra file"
    ],
    answer: 2,
    explanation: "hue dùng để encode thêm một biến phân nhóm bằng màu sắc. Đây là tham số rất thường gặp trong scatterplot, lineplot, barplot và nhiều chart khác."
  },
  {
    id: "sns_f_011",
    library: "Seaborn",
    level: "Foundation",
    topic: "Theme / Style",
    question: "Hàm nào thường dùng để thiết lập theme mặc định của Seaborn?",
    code: "import seaborn as sns",
    options: [
      "sns.theme()",
      "sns.apply_theme()",
      "sns.set_theme()",
      "sns.visual_theme()"
    ],
    answer: 2,
    explanation: "sns.set_theme() dùng để set theme/style mặc định cho chart Seaborn. Đây là cách phổ biến để chart nhìn nhất quán hơn."
  },
  {
    id: "sns_f_012",
    library: "Seaborn",
    level: "Foundation",
    topic: "Axis Labels / Title",
    question: "Vì Seaborn xây trên Matplotlib, cách nào thường dùng để đặt title sau khi vẽ Axes-level plot?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2], 'y': [3, 4]})\nax = sns.scatterplot(data=df, x='x', y='y')",
    options: [
      "sns.title('Chart')",
      "ax.title_text('Chart')",
      "ax.set_title('Chart')",
      "df.set_title('Chart')"
    ],
    answer: 2,
    explanation: "Axes-level function của Seaborn thường trả về Matplotlib Axes. Vì vậy có thể dùng ax.set_title(), ax.set_xlabel(), ax.set_ylabel() để chỉnh chart."
  },
  {
    id: "sns_i_001",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Long-form DataFrame",
    question: "Trong Seaborn, long-form DataFrame thường có đặc điểm nào?",
    code: "",
    options: [
      "Mỗi chart là một dòng",
      "Mọi dữ liệu nằm trong index",
      "Mỗi biến là cột, mỗi quan sát là dòng",
      "Mỗi numeric là một DataFrame riêng"
    ],
    answer: 2,
    explanation: "Seaborn hoạt động rất tốt với long-form DataFrame, nơi mỗi biến là một cột và mỗi quan sát là một dòng. Cách này giúp map x, y, hue, col, row rõ ràng."
  },
  {
    id: "sns_i_002",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Figure-level vs Axes-level Functions",
    question: "Hàm nào dưới đây là figure-level function trong Seaborn?",
    code: "",
    options: ["sns.scatterplot", "sns.lineplot", "sns.relplot", "sns.boxplot"],
    answer: 2,
    explanation: "sns.relplot là figure-level function, có thể tạo FacetGrid với col/row. scatterplot, lineplot và boxplot là axes-level functions."
  },
  {
    id: "sns_i_003",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Figure-level vs Axes-level Functions",
    question: "Hàm nào dưới đây là axes-level function?",
    code: "",
    options: ["sns.displot", "sns.catplot", "sns.relplot", "sns.scatterplot"],
    answer: 3,
    explanation: "sns.scatterplot là axes-level function và thường trả về Matplotlib Axes. displot, catplot và relplot là figure-level functions."
  },
  {
    id: "sns_i_004",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Relplot",
    question: "sns.relplot thường dùng để tạo nhóm biểu đồ nào?",
    code: "",
    options: [
      "Chỉ heatmap correlation",
      "Chỉ pie chart cơ bản",
      "Scatter/line plot có thể facet",
      "Chỉ box plot không facet"
    ],
    answer: 2,
    explanation: "sns.relplot là figure-level interface cho relational plots, thường dùng kind='scatter' hoặc kind='line' và hỗ trợ col/row faceting."
  },
  {
    id: "sns_i_005",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Catplot",
    question: "sns.catplot phù hợp nhất với nhóm chart nào?",
    code: "",
    options: [
      "Chỉ scatter plot",
      "Chỉ heatmap",
      "Categorical plots như bar/box/count",
      "Chỉ pairplot numeric"
    ],
    answer: 2,
    explanation: "sns.catplot là figure-level interface cho categorical plots, hỗ trợ nhiều kind như bar, box, violin, count và strip."
  },
  {
    id: "sns_i_006",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Displot",
    question: "sns.displot thường dùng cho mục đích nào?",
    code: "",
    options: [
      "Vẽ correlation heatmap",
      "Vẽ pie chart",
      "Vẽ phân phối và có thể facet",
      "Vẽ network graph"
    ],
    answer: 2,
    explanation: "sns.displot là figure-level function cho distribution plots, thường dùng histogram hoặc KDE và có thể facet bằng col/row."
  },
  {
    id: "sns_i_007",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Hue / Style / Size",
    question: "Trong scatterplot, style thường dùng để encode thông tin bằng gì?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3], 'y': [2, 4, 3], 'group': ['A', 'B', 'A']})",
    options: [
      "Kích thước figure",
      "Tên trục x",
      "Kiểu marker",
      "Số lượng subplot"
    ],
    answer: 2,
    explanation: "style thường encode biến bằng kiểu marker hoặc line style. hue encode màu sắc, size encode kích thước."
  },
  {
    id: "sns_i_008",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Hue / Style / Size",
    question: "Trong sns.scatterplot, tham số size thường dùng để làm gì?",
    code: "import seaborn as sns",
    options: [
      "Đặt kích thước figure",
      "Đặt font size title",
      "Encode biến bằng kích thước điểm",
      "Tăng số dòng dữ liệu"
    ],
    answer: 2,
    explanation: "Trong scatterplot, size dùng để map một biến vào kích thước điểm. Kích thước figure thường chỉnh qua Matplotlib hoặc figure-level function."
  },
  {
    id: "sns_i_009",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Col / Row Faceting",
    question: "Tham số col trong relplot/catplot/displot dùng để làm gì?",
    code: "import seaborn as sns",
    options: [
      "Chọn màu chính của chart",
      "Chỉ định cột y duy nhất",
      "Tạo nhiều subplot theo nhóm",
      "Xóa cột khỏi DataFrame"
    ],
    answer: 2,
    explanation: "col dùng để facet chart thành nhiều subplot theo chiều cột, mỗi subplot tương ứng một nhóm của biến được truyền vào col."
  },
  {
    id: "sns_i_010",
    library: "Seaborn",
    level: "Intermediate",
    topic: "FacetGrid",
    question: "FacetGrid hữu ích nhất khi nào?",
    code: "",
    options: [
      "Khi chỉ có một giá trị duy nhất",
      "Khi muốn thay pandas groupby",
      "Khi cần nhiều subplot theo nhóm",
      "Khi muốn lưu database"
    ],
    answer: 2,
    explanation: "FacetGrid giúp chia dữ liệu thành nhiều subplot theo row/col/hue, rất hữu ích để so sánh pattern giữa các nhóm."
  },
  {
    id: "sns_i_011",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Bar Plot",
    question: "Mặc định, sns.barplot thường biểu diễn điều gì khi có nhiều quan sát trong mỗi category?",
    code: "",
    options: [
      "Tổng tuyệt đối theo category",
      "Tất cả điểm raw data",
      "Giá trị trung bình theo category",
      "Median bắt buộc mọi version"
    ],
    answer: 2,
    explanation: "sns.barplot là statistical plot, thường biểu diễn estimator mặc định là mean của y theo category. Nếu muốn tổng, cần aggregate trước hoặc dùng estimator phù hợp."
  },
  {
    id: "sns_i_012",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Estimator",
    question: "Tham số estimator trong sns.barplot dùng để làm gì?",
    code: "import seaborn as sns",
    options: [
      "Đặt màu nền của figure",
      "Chọn vị trí legend",
      "Chọn hàm aggregate theo nhóm",
      "Xoay tick labels"
    ],
    answer: 2,
    explanation: "estimator xác định cách aggregate y trong mỗi nhóm, ví dụ mean, median hoặc sum. Đây là điểm quan trọng khi dùng barplot cho phân tích dữ liệu."
  },
  {
    id: "sns_i_013",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Errorbar / Confidence Interval",
    question: "Error bar trong sns.barplot thường thể hiện điều gì?",
    code: "",
    options: [
      "Tên của category",
      "Số lượng cột DataFrame",
      "Uncertainty quanh estimator",
      "Kiểu marker scatter plot"
    ],
    answer: 2,
    explanation: "Error bar thể hiện uncertainty hoặc variation quanh estimator, ví dụ confidence interval, standard deviation hoặc standard error tùy cấu hình."
  },
  {
    id: "sns_i_014",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Box Plot",
    question: "sns.boxplot phù hợp nhất trong tình huống nào?",
    code: "",
    options: [
      "Vẽ tỷ trọng phần trăm",
      "Vẽ ma trận tương quan",
      "So sánh phân phối numeric theo nhóm",
      "Vẽ bản đồ địa lý"
    ],
    answer: 2,
    explanation: "boxplot rất phù hợp để so sánh phân phối numeric theo category, bao gồm median, IQR và outlier tiềm năng."
  },
  {
    id: "sns_i_015",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Violin Plot",
    question: "Violin plot khác box plot chủ yếu ở điểm nào?",
    code: "",
    options: [
      "Chỉ dùng cho dữ liệu text",
      "Không dùng được với category",
      "Thể hiện thêm mật độ phân phối",
      "Luôn nhanh hơn box plot"
    ],
    answer: 2,
    explanation: "Violin plot kết hợp thông tin phân phối dạng KDE với so sánh nhóm. Nó cho thấy hình dạng phân phối rõ hơn box plot trong nhiều trường hợp."
  },
  {
    id: "sns_i_016",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Stripplot / Swarmplot",
    question: "sns.stripplot thường dùng để làm gì?",
    code: "",
    options: [
      "Tạo heatmap correlation",
      "Vẽ line chart thời gian",
      "Hiển thị từng điểm theo category",
      "Tự động train model"
    ],
    answer: 2,
    explanation: "stripplot hiển thị từng điểm raw data theo category. Nó hữu ích khi muốn xem phân tán thật của dữ liệu, nhất là dataset nhỏ hoặc vừa."
  },
  {
    id: "sns_i_017",
    library: "Seaborn",
    level: "Intermediate",
    topic: "KDE Plot",
    question: "sns.kdeplot dùng để thể hiện điều gì?",
    code: "",
    options: [
      "Đếm số dòng theo category",
      "Vẽ bảng pivot",
      "Ước lượng mật độ phân phối",
      "Vẽ pie chart"
    ],
    answer: 2,
    explanation: "kdeplot vẽ đường ước lượng mật độ phân phối. Nó giúp nhìn hình dạng phân phối mượt hơn histogram, nhưng có thể gây hiểu nhầm nếu dữ liệu ít."
  },
  {
    id: "sns_i_018",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Pairplot",
    question: "sns.pairplot thường dùng khi nào?",
    code: "",
    options: [
      "Muốn vẽ một pie chart",
      "Muốn xóa missing values",
      "Muốn xem quan hệ từng cặp biến numeric",
      "Muốn nối nhiều DataFrame"
    ],
    answer: 2,
    explanation: "pairplot tạo ma trận biểu đồ cho các cặp biến numeric, hữu ích trong EDA để xem quan hệ, phân phối và pattern theo hue nếu có."
  },
  {
    id: "sns_i_019",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Jointplot",
    question: "sns.jointplot thường kết hợp thông tin nào?",
    code: "",
    options: [
      "Chỉ correlation matrix",
      "Chỉ bar chart category",
      "Quan hệ 2 biến và phân phối biên",
      "Chỉ box plot theo nhóm"
    ],
    answer: 2,
    explanation: "jointplot cho thấy quan hệ giữa hai biến ở vùng chính và phân phối biên ở hai trục. Nó hữu ích khi phân tích quan hệ 2 biến numeric."
  },
  {
    id: "sns_i_020",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Correlation Heatmap",
    question: "Cách phổ biến để vẽ correlation heatmap từ DataFrame df là gì?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2, 3], 'y': [2, 4, 5]})",
    options: [
      "sns.corrplot(df, annot=True)",
      "sns.scatterplot(df.corr())",
      "sns.heatmap(df.corr(), annot=True)",
      "sns.histplot(df.corr())"
    ],
    answer: 2,
    explanation: "df.corr() tạo correlation matrix, sau đó sns.heatmap(..., annot=True) hiển thị ma trận và giá trị tương quan trên từng ô."
  },
  {
    id: "sns_i_021",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Palette",
    question: "Tham số palette thường dùng để làm gì?",
    code: "import seaborn as sns",
    options: [
      "Chọn số lượng bins",
      "Đặt giới hạn trục y",
      "Chọn bộ màu cho các nhóm",
      "Lưu chart ra file"
    ],
    answer: 2,
    explanation: "palette kiểm soát bộ màu, đặc biệt khi dùng hue hoặc categorical plots. Chọn palette phù hợp giúp chart dễ đọc và nhất quán."
  },
  {
    id: "sns_i_022",
    library: "Seaborn",
    level: "Intermediate",
    topic: "Rotation of Tick Labels",
    question: "Sau khi vẽ chart Seaborn, cách nào thường dùng để xoay nhãn trục x?",
    code: "import seaborn as sns\nimport matplotlib.pyplot as plt\nimport pandas as pd\ndf = pd.DataFrame({'category': ['Long A', 'Long B'], 'value': [1, 2]})\nsns.barplot(data=df, x='category', y='value')",
    options: [
      "sns.xticks(rotation=45)",
      "df.xticks(rotation=45)",
      "plt.xticks(rotation=45)",
      "plt.rotate_axis_x_only()"
    ],
    answer: 2,
    explanation: "Vì Seaborn xây trên Matplotlib, có thể dùng plt.xticks(rotation=45) hoặc ax.tick_params(axis='x', labelrotation=45) để xoay tick labels."
  },
  {
    id: "sns_a_001",
    library: "Seaborn",
    level: "Advanced",
    topic: "Figure-level vs Axes-level Functions",
    question: "Điểm khác biệt quan trọng giữa sns.scatterplot và sns.relplot(kind='scatter') là gì?",
    code: "",
    options: [
      "scatterplot chỉ dùng category",
      "scatterplot luôn tạo nhiều subplot",
      "scatterplot axes-level, relplot figure-level",
      "relplot không hỗ trợ hue"
    ],
    answer: 2,
    explanation: "sns.scatterplot vẽ trên một Axes và trả về Axes. sns.relplot là figure-level, trả về FacetGrid và hỗ trợ col/row để tạo nhiều subplot."
  },
  {
    id: "sns_a_002",
    library: "Seaborn",
    level: "Advanced",
    topic: "Figure Size",
    question: "Với figure-level function như sns.relplot, cách chỉnh kích thước thường dùng là gì?",
    code: "import seaborn as sns",
    options: [
      "Dùng figsize trong relplot",
      "Dùng ax.set_size()",
      "Dùng height và aspect",
      "Không chỉnh được kích thước"
    ],
    answer: 2,
    explanation: "Figure-level functions như relplot/catplot/displot thường dùng height và aspect để kiểm soát kích thước mỗi facet. Axes-level thường chỉnh qua plt.figure(figsize=...) hoặc fig, ax."
  },
  {
    id: "sns_a_003",
    library: "Seaborn",
    level: "Advanced",
    topic: "Legend Handling",
    question: "Khi legend che mất dữ liệu trên chart, cách xử lý hợp lý là gì?",
    code: "",
    options: [
      "Luôn xóa legend mọi chart",
      "Đổi tất cả nhóm cùng màu",
      "Di chuyển hoặc giảm nhóm legend",
      "Ẩn trục x của chart"
    ],
    answer: 2,
    explanation: "Legend nên hỗ trợ đọc chart chứ không che dữ liệu. Có thể di chuyển legend, đặt ngoài chart, giảm số nhóm hoặc highlight nhóm chính."
  },
  {
    id: "sns_a_004",
    library: "Seaborn",
    level: "Advanced",
    topic: "Missing Values Behavior",
    question: "Khi dữ liệu có missing values trong biến x hoặc y, điều gì thường xảy ra với nhiều plot của Seaborn?",
    code: "",
    options: [
      "Seaborn luôn thay missing bằng 0",
      "Seaborn luôn báo syntax error",
      "Dòng thiếu dữ liệu thường bị bỏ qua",
      "Missing được vẽ thành category"
    ],
    answer: 2,
    explanation: "Nhiều hàm Seaborn bỏ qua quan sát thiếu dữ liệu ở biến cần vẽ. Tuy nhiên, người phân tích vẫn nên xử lý missing rõ ràng trước khi visualize."
  },
  {
    id: "sns_a_005",
    library: "Seaborn",
    level: "Advanced",
    topic: "Outlier Visualization",
    question: "Khi muốn xem outlier theo từng nhóm, chart nào thường phù hợp?",
    code: "",
    options: [
      "Pie chart",
      "Correlation heatmap",
      "Boxplot hoặc boxplot + stripplot",
      "Line chart không trục y"
    ],
    answer: 2,
    explanation: "boxplot giúp phát hiện outlier tiềm năng theo nhóm. Kết hợp stripplot có thể cho thấy từng điểm dữ liệu thật phía sau summary."
  },
  {
    id: "sns_a_006",
    library: "Seaborn",
    level: "Advanced",
    topic: "Heatmap",
    question: "Trong sns.heatmap, annot=True dùng để làm gì?",
    code: "import seaborn as sns\nimport pandas as pd\ndata = pd.DataFrame([[1, 2], [3, 4]])\nsns.heatmap(data, annot=True)",
    options: [
      "Tự động chuẩn hóa dữ liệu",
      "Xóa colorbar khỏi chart",
      "Hiển thị giá trị trong từng ô",
      "Tạo nhiều subplot nhỏ"
    ],
    answer: 2,
    explanation: "annot=True hiển thị giá trị trên từng ô heatmap, hữu ích khi người đọc cần biết con số cụ thể chứ không chỉ màu sắc."
  },
  {
    id: "sns_a_007",
    library: "Seaborn",
    level: "Advanced",
    topic: "Correlation Heatmap",
    question: "Khi vẽ correlation heatmap, vì sao nên cẩn thận với việc diễn giải correlation?",
    code: "",
    options: [
      "Correlation luôn bằng causation",
      "Heatmap không hiện giá trị âm",
      "Correlation không chứng minh causation",
      "Correlation chỉ tính cho string"
    ],
    answer: 2,
    explanation: "Correlation chỉ đo mức độ liên hệ tuyến tính hoặc tương quan tùy phương pháp, không chứng minh nhân quả. Cần kết hợp hiểu biết dữ liệu và phân tích bổ sung."
  },
  {
    id: "sns_a_008",
    library: "Seaborn",
    level: "Advanced",
    topic: "Estimator",
    question: "Khi cần so sánh tổng amount theo category, cách nào thường rõ ràng nhất trước khi vẽ bar chart?",
    code: "",
    options: [
      "Dùng scatterplot trực tiếp",
      "Dùng kdeplot cho category",
      "Groupby tính tổng rồi vẽ chart",
      "Dùng pairplot cho category"
    ],
    answer: 2,
    explanation: "Nếu business question là tổng, nên groupby và tính tổng rõ ràng trước khi vẽ. barplot mặc định thường dùng mean, nên dễ sai insight nếu không kiểm soát estimator."
  },
  {
    id: "sns_a_009",
    library: "Seaborn",
    level: "Advanced",
    topic: "Common Errors",
    question: "Lỗi phổ biến khi chạy đoạn code sau là gì?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2], 'y': [3, 4]})\nsns.scatterplot(data=df, x='amount', y='y')",
    options: [
      "SyntaxError vì thiếu plt.show()",
      "TypeError vì x phải là list",
      "Lỗi vì cột amount không tồn tại",
      "Seaborn tự tạo cột amount"
    ],
    answer: 2,
    explanation: "Khi truyền data=df, x và y thường là tên cột trong df. Nếu cột amount không tồn tại, Seaborn sẽ báo lỗi liên quan đến biến không tìm thấy."
  },
  {
    id: "sns_a_010",
    library: "Seaborn",
    level: "Advanced",
    topic: "Chart Readability",
    question: "Khi hue có quá nhiều nhóm, vấn đề chính thường là gì?",
    code: "",
    options: [
      "Seaborn chỉ cho hue 2 nhóm",
      "Chart tự chuyển thành pie chart",
      "Chart và legend dễ bị rối",
      "Dữ liệu numeric bị xóa"
    ],
    answer: 2,
    explanation: "Quá nhiều nhóm trong hue làm chart khó đọc và legend dài. Nên lọc nhóm quan trọng, gom nhóm nhỏ, facet hoặc chọn cách visualize khác."
  },
  {
    id: "sns_a_011",
    library: "Seaborn",
    level: "Advanced",
    topic: "Best Practice for Data Analytics Visualization",
    question: "Khi muốn so sánh phân phối giữa nhiều nhóm và vẫn thấy từng điểm dữ liệu, cách nào hợp lý?",
    code: "",
    options: [
      "Chỉ dùng pie chart",
      "Chỉ dùng heatmap correlation",
      "Kết hợp boxplot với stripplot",
      "Ẩn toàn bộ điểm dữ liệu"
    ],
    answer: 2,
    explanation: "Boxplot cho summary phân phối, stripplot/swarmplot cho raw points. Kết hợp hai loại giúp cân bằng giữa tổng quan và chi tiết."
  },
  {
    id: "sns_a_012",
    library: "Seaborn",
    level: "Advanced",
    topic: "Theme / Style",
    question: "Vì sao nên set theme/style nhất quán trong notebook phân tích?",
    code: "",
    options: [
      "Để đổi kết quả DataFrame",
      "Để Seaborn tự chọn insight",
      "Để chart nhất quán và dễ đọc",
      "Để bỏ qua axis label"
    ],
    answer: 2,
    explanation: "Theme/style nhất quán giúp notebook hoặc report dễ đọc và chuyên nghiệp hơn. Nó không thay đổi bản chất dữ liệu hay thay thế việc ghi nhãn rõ ràng."
  },
  {
    id: "sns_e_001",
    library: "Seaborn",
    level: "Expert",
    topic: "Figure-level vs Axes-level Functions",
    question: "Vì sao figure-level functions như relplot/catplot/displot thường khó nhúng vào một Matplotlib subplot có sẵn hơn axes-level functions?",
    code: "",
    options: [
      "Vì chúng không vẽ pandas data",
      "Vì chúng chỉ dùng NumPy array",
      "Vì chúng tự tạo Figure/FacetGrid",
      "Vì chúng không hỗ trợ hue"
    ],
    answer: 2,
    explanation: "Figure-level functions tạo figure-level object như FacetGrid, nên không đơn giản để vẽ vào một ax đã tạo sẵn. Axes-level functions thường nhận ax= và dễ nhúng vào subplot."
  },
  {
    id: "sns_e_002",
    library: "Seaborn",
    level: "Expert",
    topic: "FacetGrid",
    question: "Khi dùng FacetGrid, lợi ích chính của map/map_dataframe là gì?",
    code: "",
    options: [
      "Tự động train model từng nhóm",
      "Ép dữ liệu long-form thành wide-form",
      "Áp dụng hàm vẽ lên từng facet",
      "Xóa missing khỏi DataFrame gốc"
    ],
    answer: 2,
    explanation: "FacetGrid chia dữ liệu theo facet, sau đó map hoặc map_dataframe áp dụng hàm vẽ cho từng subset. Đây là cách tùy biến mạnh hơn các figure-level wrapper đơn giản."
  },
  {
    id: "sns_e_003",
    library: "Seaborn",
    level: "Expert",
    topic: "Performance & Large Data",
    question: "Khi scatterplot có hàng triệu điểm bị overplotting, hướng xử lý nào thường hợp lý hơn?",
    code: "",
    options: [
      "Tăng số màu ngẫu nhiên",
      "Dùng pie chart cho từng điểm",
      "Sample, alpha hoặc aggregate trước",
      "Ẩn trục x và trục y"
    ],
    answer: 2,
    explanation: "Với dữ liệu rất lớn, scatterplot raw dễ bị overplotting và chậm. Sampling, alpha, aggregation hoặc biểu đồ mật độ giúp đọc pattern tốt hơn."
  },
  {
    id: "sns_e_004",
    library: "Seaborn",
    level: "Expert",
    topic: "Customization",
    question: "Khi cần chỉnh sâu một chart Seaborn sau khi vẽ bằng axes-level function, nên làm gì?",
    code: "import seaborn as sns\nimport pandas as pd\ndf = pd.DataFrame({'x': [1, 2], 'y': [3, 4]})\nax = sns.scatterplot(data=df, x='x', y='y')",
    options: [
      "Chỉ có thể vẽ lại từ đầu",
      "Chuyển chart thành DataFrame",
      "Dùng Matplotlib Axes methods",
      "Không thể chỉnh chart Seaborn"
    ],
    answer: 2,
    explanation: "Axes-level function trả về Matplotlib Axes, nên có thể dùng các method của Matplotlib để chỉnh sâu title, limits, legend, annotation và nhiều thành phần khác."
  }
];