const PYTHON_OOP_QUESTIONS = [
  {
    id: "pyoop_f_001",
    library: "Python OOP",
    level: "Foundation",
    topic: "Class & Object",
    question: "Trong Python OOP, class thường được hiểu là gì?",
    code: "",
    options: [
      "Một bản thiết kế để tạo ra object",
      "Một vòng lặp xử lý dữ liệu",
      "Một kiểu comment đặc biệt",
      "Một file CSV"
    ],
    answer: 0,
    explanation: "Class là bản thiết kế định nghĩa thuộc tính và hành vi để tạo ra object. Object là instance cụ thể được tạo từ class."
  },
  {
    id: "pyoop_f_002",
    library: "Python OOP",
    level: "Foundation",
    topic: "Object / Instance",
    question: "Object trong OOP là gì?",
    code: "",
    options: [
      "Một instance cụ thể được tạo từ class",
      "Một keyword để tạo vòng lặp",
      "Một kiểu dữ liệu chỉ lưu số nguyên",
      "Một lỗi khi chạy Python"
    ],
    answer: 0,
    explanation: "Object là instance cụ thể được tạo từ class. Ví dụ user = User(\"An\") tạo một object user từ class User."
  },
  {
    id: "pyoop_f_003",
    library: "Python OOP",
    level: "Foundation",
    topic: "__init__",
    question: "__init__ trong class Python thường dùng để làm gì?",
    code: "",
    options: [
      "Khởi tạo object và gán các giá trị ban đầu",
      "Xóa toàn bộ object trong bộ nhớ",
      "Import module",
      "Bắt exception"
    ],
    answer: 0,
    explanation: "__init__ là constructor method, thường dùng để khởi tạo các instance attributes khi object được tạo."
  },
  {
    id: "pyoop_f_004",
    library: "Python OOP",
    level: "Foundation",
    topic: "self",
    question: "self trong instance method thường đại diện cho điều gì?",
    code: "",
    options: [
      "Chính object đang gọi method đó",
      "Tên của class cha",
      "Một biến global",
      "Một module Python"
    ],
    answer: 0,
    explanation: "self đại diện cho instance hiện tại. Thông qua self, method có thể truy cập attribute và method của object đó."
  },
  {
    id: "pyoop_f_005",
    library: "Python OOP",
    level: "Foundation",
    topic: "Attribute",
    question: "Attribute trong object thường biểu thị điều gì?",
    code: "",
    options: [
      "Dữ liệu hoặc trạng thái của object",
      "Một vòng lặp",
      "Một câu lệnh import",
      "Một lỗi cú pháp"
    ],
    answer: 0,
    explanation: "Attribute là dữ liệu gắn với object hoặc class, ví dụ user.name, user.age."
  },
  {
    id: "pyoop_f_006",
    library: "Python OOP",
    level: "Foundation",
    topic: "Method",
    question: "Method trong class thường là gì?",
    code: "",
    options: [
      "Function được định nghĩa bên trong class",
      "Một biến không thể thay đổi",
      "Một file dữ liệu",
      "Một kiểu exception"
    ],
    answer: 0,
    explanation: "Method là function nằm trong class, thường dùng để định nghĩa hành vi của object."
  },
  {
    id: "pyoop_f_007",
    library: "Python OOP",
    level: "Foundation",
    topic: "Instance Attribute",
    question: "Trong đoạn code sau, name là loại attribute nào?",
    code: "class User:\n    def __init__(self, name):\n        self.name = name",
    options: [
      "Instance attribute",
      "Class attribute",
      "Static method",
      "Package"
    ],
    answer: 0,
    explanation: "self.name được gán trên từng object cụ thể, nên nó là instance attribute."
  },
  {
    id: "pyoop_f_008",
    library: "Python OOP",
    level: "Foundation",
    topic: "Class Attribute",
    question: "Class attribute thường được khai báo ở đâu?",
    code: "",
    options: [
      "Bên trong class nhưng bên ngoài các method",
      "Chỉ bên trong vòng lặp for",
      "Chỉ trong file JSON",
      "Bên ngoài tất cả class và function"
    ],
    answer: 0,
    explanation: "Class attribute được khai báo trong class body, bên ngoài method. Nó thường được chia sẻ bởi các instance của class."
  },
  {
    id: "pyoop_f_009",
    library: "Python OOP",
    level: "Foundation",
    topic: "Instance Method",
    question: "Instance method trong Python thường nhận tham số đầu tiên là gì?",
    code: "",
    options: [
      "self",
      "cls",
      "args",
      "main"
    ],
    answer: 0,
    explanation: "Instance method thường nhận self làm tham số đầu tiên để truy cập instance hiện tại."
  },
  {
    id: "pyoop_f_010",
    library: "Python OOP",
    level: "Foundation",
    topic: "Class vs Object",
    question: "Trong đoạn code sau, User là gì và user là gì?",
    code: "class User:\n    pass\n\nuser = User()",
    options: [
      "User là class, user là object",
      "User là object, user là class",
      "Cả hai đều là function",
      "Cả hai đều là module"
    ],
    answer: 0,
    explanation: "User là class định nghĩa bản thiết kế. user = User() tạo một object cụ thể từ class đó."
  },
  {
    id: "pyoop_f_011",
    library: "Python OOP",
    level: "Foundation",
    topic: "Constructor",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class User:\n    def __init__(self, name):\n        self.name = name\n\nuser = User(\"An\")\nprint(user.name)",
    options: [
      "An",
      "name",
      "User",
      "None"
    ],
    answer: 0,
    explanation: "Khi tạo User(\"An\"), __init__ gán self.name = \"An\". Vì vậy user.name là \"An\"."
  },
  {
    id: "pyoop_f_012",
    library: "Python OOP",
    level: "Foundation",
    topic: "OOP Overview",
    question: "Trong project Data Analytics, OOP hữu ích nhất trong trường hợp nào?",
    code: "",
    options: [
      "Khi cần gom dữ liệu và hành vi liên quan vào một cấu trúc rõ ràng",
      "Khi chỉ muốn viết toàn bộ code trên một dòng",
      "Khi không cần tái sử dụng code",
      "Khi muốn tránh hoàn toàn function"
    ],
    answer: 0,
    explanation: "OOP giúp tổ chức code có cấu trúc, ví dụ gom logic xử lý vào DataProcessor hoặc MetricCalculator để dễ tái sử dụng và bảo trì."
  },
  {
    id: "pyoop_i_001",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Instance Method",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class Calculator:\n    def add(self, x, y):\n        return x + y\n\ncalc = Calculator()\nprint(calc.add(2, 3))",
    options: [
      "5",
      "23",
      "None",
      "TypeError"
    ],
    answer: 0,
    explanation: "calc.add(2, 3) gọi instance method add và trả về 2 + 3 = 5."
  },
  {
    id: "pyoop_i_002",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Common Errors",
    question: "Đoạn code sau gây lỗi vì lý do nào?",
    code: "class User:\n    def greet():\n        return \"Hi\"\n\nuser = User()\nprint(user.greet())",
    options: [
      "Method thiếu tham số self",
      "Class không được đặt tên User",
      "return không dùng được trong class",
      "Object không thể gọi method"
    ],
    answer: 0,
    explanation: "Khi gọi user.greet(), Python tự truyền instance vào method. Method greet không nhận self nên gây TypeError."
  },
  {
    id: "pyoop_i_003",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Instance Attribute vs Class Attribute",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class User:\n    role = \"guest\"\n\nu1 = User()\nu2 = User()\nu1.role = \"admin\"\nprint(u1.role, u2.role)",
    options: [
      "admin guest",
      "admin admin",
      "guest guest",
      "guest admin"
    ],
    answer: 0,
    explanation: "u1.role = \"admin\" tạo hoặc ghi đè instance attribute trên u1. u2 vẫn đọc class attribute role là \"guest\"."
  },
  {
    id: "pyoop_i_004",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Class Attribute",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class Config:\n    source = \"local\"\n\nc1 = Config()\nc2 = Config()\nConfig.source = \"cloud\"\nprint(c1.source, c2.source)",
    options: [
      "local local",
      "cloud cloud",
      "local cloud",
      "cloud local"
    ],
    answer: 1,
    explanation: "source là class attribute. Khi đổi Config.source thành \"cloud\", các instance chưa override attribute này sẽ đọc giá trị mới."
  },
  {
    id: "pyoop_i_005",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Class Method",
    question: "@classmethod thường nhận tham số đầu tiên là gì?",
    code: "",
    options: [
      "cls",
      "self",
      "args",
      "data"
    ],
    answer: 0,
    explanation: "Class method nhận cls làm tham số đầu tiên, đại diện cho class hiện tại thay vì instance cụ thể."
  },
  {
    id: "pyoop_i_006",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Static Method",
    question: "@staticmethod phù hợp nhất khi nào?",
    code: "",
    options: [
      "Khi method không cần truy cập self hoặc cls nhưng vẫn liên quan logic của class",
      "Khi method bắt buộc thay đổi instance attribute",
      "Khi method bắt buộc thay đổi class attribute",
      "Khi muốn tạo constructor"
    ],
    answer: 0,
    explanation: "staticmethod không tự nhận self hoặc cls. Nó phù hợp cho utility function liên quan đến class nhưng không cần trạng thái instance/class."
  },
  {
    id: "pyoop_i_007",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Class Method",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class Config:\n    env = \"dev\"\n\n    @classmethod\n    def get_env(cls):\n        return cls.env\n\nprint(Config.get_env())",
    options: [
      "dev",
      "Config",
      "None",
      "TypeError"
    ],
    answer: 0,
    explanation: "get_env là class method, nhận cls là Config và trả về Config.env, tức \"dev\"."
  },
  {
    id: "pyoop_i_008",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Static Method",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class MetricCalculator:\n    @staticmethod\n    def ratio(x, y):\n        return x / y\n\nprint(MetricCalculator.ratio(10, 2))",
    options: [
      "5.0",
      "5",
      "TypeError",
      "None"
    ],
    answer: 0,
    explanation: "ratio là static method nên có thể gọi từ class. 10 / 2 trong Python trả về 5.0."
  },
  {
    id: "pyoop_i_009",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Encapsulation",
    question: "Encapsulation trong OOP thường nói về điều gì?",
    code: "",
    options: [
      "Gom dữ liệu và hành vi liên quan vào cùng một object, đồng thời kiểm soát cách truy cập",
      "Chạy nhiều thread cùng lúc",
      "Chỉ viết code bằng function",
      "Xóa tất cả attribute khỏi object"
    ],
    answer: 0,
    explanation: "Encapsulation giúp gom state và behavior vào object, đồng thời che giấu hoặc kiểm soát chi tiết bên trong qua method/property."
  },
  {
    id: "pyoop_i_010",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Public / Protected / Private Convention",
    question: "Theo convention Python, attribute bắt đầu bằng một dấu gạch dưới như _value thường có ý nghĩa gì?",
    code: "",
    options: [
      "Được xem là internal/protected theo convention, không nên truy cập trực tiếp từ bên ngoài nếu không cần",
      "Bắt buộc không thể truy cập từ bên ngoài",
      "Luôn là class attribute",
      "Luôn là static method"
    ],
    answer: 0,
    explanation: "Một dấu gạch dưới là convention báo rằng attribute mang tính internal. Python không chặn truy cập tuyệt đối."
  },
  {
    id: "pyoop_i_011",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Property",
    question: "@property thường dùng để làm gì?",
    code: "",
    options: [
      "Cho phép truy cập method như attribute và có thể kiểm soát logic tính toán/validation",
      "Tạo vòng lặp for",
      "Import package",
      "Tự động serialize object thành JSON"
    ],
    answer: 0,
    explanation: "@property biến method thành attribute đọc được, giúp che giấu logic tính toán hoặc validation phía sau cách truy cập đơn giản."
  },
  {
    id: "pyoop_i_012",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Property",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class Product:\n    def __init__(self, price):\n        self.price = price\n\n    @property\n    def double_price(self):\n        return self.price * 2\n\np = Product(10)\nprint(p.double_price)",
    options: [
      "20",
      "10",
      "double_price",
      "TypeError"
    ],
    answer: 0,
    explanation: "double_price là property nên được truy cập như attribute. Nó trả về self.price * 2 = 20."
  },
  {
    id: "pyoop_i_013",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Getter / Setter Basics",
    question: "Setter của property thường dùng để làm gì?",
    code: "",
    options: [
      "Kiểm soát hoặc validate giá trị trước khi gán attribute",
      "Chỉ để in object ra màn hình",
      "Chỉ để tạo class mới",
      "Chỉ để import module"
    ],
    answer: 0,
    explanation: "Setter cho phép kiểm tra hoặc biến đổi giá trị trước khi lưu vào attribute nội bộ."
  },
  {
    id: "pyoop_i_014",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Inheritance",
    question: "Inheritance trong OOP là gì?",
    code: "",
    options: [
      "Cơ chế class con kế thừa attribute/method từ class cha",
      "Cơ chế chuyển list thành tuple",
      "Cơ chế bắt lỗi runtime",
      "Cơ chế đọc file"
    ],
    answer: 0,
    explanation: "Inheritance cho phép class con tái sử dụng hoặc mở rộng logic từ class cha."
  },
  {
    id: "pyoop_i_015",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Parent Class / Child Class",
    question: "Trong đoạn code sau, Report là gì và CsvReport là gì?",
    code: "class Report:\n    pass\n\nclass CsvReport(Report):\n    pass",
    options: [
      "Report là parent class, CsvReport là child class",
      "CsvReport là parent class, Report là child class",
      "Cả hai đều là object",
      "Cả hai đều là package"
    ],
    answer: 0,
    explanation: "CsvReport(Report) nghĩa là CsvReport kế thừa từ Report. Report là parent class, CsvReport là child class."
  },
  {
    id: "pyoop_i_016",
    library: "Python OOP",
    level: "Intermediate",
    topic: "super()",
    question: "super() thường dùng để làm gì trong class con?",
    code: "",
    options: [
      "Gọi method của class cha",
      "Xóa class cha",
      "Tạo static method",
      "Chuyển object thành dictionary"
    ],
    answer: 0,
    explanation: "super() thường dùng để gọi method từ parent class, đặc biệt là __init__ khi class con cần kế thừa logic khởi tạo."
  },
  {
    id: "pyoop_i_017",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Method Overriding",
    question: "Method overriding là gì?",
    code: "",
    options: [
      "Class con định nghĩa lại method đã có ở class cha",
      "Object bị xóa khỏi bộ nhớ",
      "Function được import từ module khác",
      "Class không có method nào"
    ],
    answer: 0,
    explanation: "Overriding xảy ra khi class con cung cấp implementation mới cho method đã tồn tại trong class cha."
  },
  {
    id: "pyoop_i_018",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Polymorphism",
    question: "Polymorphism trong OOP thường giúp điều gì?",
    code: "",
    options: [
      "Cho phép nhiều object khác class có thể dùng chung một interface method",
      "Bắt buộc mọi class có cùng attribute",
      "Ngăn class con override method",
      "Chỉ cho phép dùng một object duy nhất"
    ],
    answer: 0,
    explanation: "Polymorphism cho phép code gọi cùng một method trên các object khác nhau, miễn là chúng hỗ trợ method đó."
  },
  {
    id: "pyoop_i_019",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Composition",
    question: "Composition trong OOP thường là gì?",
    code: "",
    options: [
      "Một object chứa hoặc sử dụng object khác để thực hiện công việc",
      "Một class tự động kế thừa mọi class khác",
      "Một method không có self",
      "Một cách tạo biến global"
    ],
    answer: 0,
    explanation: "Composition là cách thiết kế trong đó một object kết hợp các object khác như thành phần để tạo hành vi mong muốn."
  },
  {
    id: "pyoop_i_020",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Magic Methods Basics",
    question: "Magic method trong Python thường có dạng tên như thế nào?",
    code: "",
    options: [
      "__method__",
      "_method",
      "method_",
      "METHOD"
    ],
    answer: 0,
    explanation: "Magic methods thường có double underscores ở hai bên, ví dụ __init__, __str__, __len__."
  },
  {
    id: "pyoop_i_021",
    library: "Python OOP",
    level: "Intermediate",
    topic: "__str__",
    question: "__str__ thường dùng để làm gì?",
    code: "",
    options: [
      "Định nghĩa chuỗi thân thiện khi print object",
      "Đếm số phần tử trong object",
      "So sánh hai object",
      "Tạo class attribute"
    ],
    answer: 0,
    explanation: "__str__ trả về representation thân thiện với người dùng, thường được dùng khi print(object)."
  },
  {
    id: "pyoop_i_022",
    library: "Python OOP",
    level: "Intermediate",
    topic: "Dataclass",
    question: "dataclass thường hữu ích nhất khi nào?",
    code: "",
    options: [
      "Khi cần class chủ yếu để lưu dữ liệu với ít boilerplate code",
      "Khi cần viết metaclass phức tạp",
      "Khi cần thay thế mọi function",
      "Khi cần tự động đọc database"
    ],
    answer: 0,
    explanation: "dataclass giúp tạo class lưu dữ liệu gọn hơn, tự sinh một số method như __init__ và __repr__."
  },
  {
    id: "pyoop_a_001",
    library: "Python OOP",
    level: "Advanced",
    topic: "Method Overriding",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class Report:\n    def format(self):\n        return \"base\"\n\nclass CsvReport(Report):\n    def format(self):\n        return \"csv\"\n\nr = CsvReport()\nprint(r.format())",
    options: [
      "base",
      "csv",
      "Report",
      "TypeError"
    ],
    answer: 1,
    explanation: "CsvReport override method format của Report, nên khi gọi r.format() sẽ dùng implementation của CsvReport và trả về \"csv\"."
  },
  {
    id: "pyoop_a_002",
    library: "Python OOP",
    level: "Advanced",
    topic: "super()",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class Report:\n    def __init__(self, name):\n        self.name = name\n\nclass CsvReport(Report):\n    def __init__(self, name, delimiter):\n        super().__init__(name)\n        self.delimiter = delimiter\n\nr = CsvReport(\"sales\", \",\")\nprint(r.name, r.delimiter)",
    options: [
      "sales ,",
      "None ,",
      "sales None",
      "TypeError"
    ],
    answer: 0,
    explanation: "super().__init__(name) gọi constructor của Report để gán self.name. Sau đó CsvReport gán self.delimiter."
  },
  {
    id: "pyoop_a_003",
    library: "Python OOP",
    level: "Advanced",
    topic: "Mutable Attribute Pitfall",
    question: "Vấn đề chính của đoạn code sau là gì?",
    code: "class Report:\n    columns = []\n\nr1 = Report()\nr2 = Report()\nr1.columns.append(\"date\")\nprint(r2.columns)",
    options: [
      "columns là mutable class attribute nên bị chia sẻ giữa các instance",
      "append không dùng được với list",
      "Class không thể có attribute",
      "r2 không thể đọc columns"
    ],
    answer: 0,
    explanation: "columns là list ở cấp class nên được chia sẻ. Khi r1 append, r2 cũng thấy thay đổi đó."
  },
  {
    id: "pyoop_a_004",
    library: "Python OOP",
    level: "Advanced",
    topic: "Mutable Attribute Pitfall",
    question: "Cách sửa nào phù hợp hơn để mỗi Report có columns riêng?",
    code: "",
    options: [
      "Gán self.columns = [] trong __init__",
      "Gán Report.columns = [] sau mỗi lần append",
      "Dùng global columns",
      "Xóa __init__ khỏi class"
    ],
    answer: 0,
    explanation: "Nếu mỗi instance cần list riêng, nên tạo self.columns = [] trong __init__ để tránh chia sẻ mutable class attribute."
  },
  {
    id: "pyoop_a_005",
    library: "Python OOP",
    level: "Advanced",
    topic: "Property",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class Product:\n    def __init__(self, price):\n        self._price = price\n\n    @property\n    def price(self):\n        return self._price\n\np = Product(100)\nprint(p.price)",
    options: [
      "100",
      "_price",
      "None",
      "TypeError"
    ],
    answer: 0,
    explanation: "price là property trả về self._price, nên p.price cho kết quả 100."
  },
  {
    id: "pyoop_a_006",
    library: "Python OOP",
    level: "Advanced",
    topic: "Getter / Setter Basics",
    question: "Setter trong đoạn code sau có tác dụng gì?",
    code: "class Product:\n    def __init__(self, price):\n        self.price = price\n\n    @property\n    def price(self):\n        return self._price\n\n    @price.setter\n    def price(self, value):\n        if value < 0:\n            raise ValueError(\"price must be non-negative\")\n        self._price = value",
    options: [
      "Chặn giá trị price âm trước khi gán",
      "Tự động nhân price với 2",
      "Chuyển price thành string",
      "Xóa attribute _price"
    ],
    answer: 0,
    explanation: "Setter kiểm tra value < 0 và raise ValueError nếu không hợp lệ. Nếu hợp lệ, nó gán vào self._price."
  },
  {
    id: "pyoop_a_007",
    library: "Python OOP",
    level: "Advanced",
    topic: "__repr__",
    question: "__repr__ thường hướng đến mục đích nào hơn so với __str__?",
    code: "",
    options: [
      "Tạo representation rõ ràng cho developer/debugging",
      "Tự động tính độ dài object",
      "Tự động so sánh object",
      "Tạo class method"
    ],
    answer: 0,
    explanation: "__repr__ thường hướng đến representation rõ ràng cho developer, hữu ích khi debug hoặc xem object trong console."
  },
  {
    id: "pyoop_a_008",
    library: "Python OOP",
    level: "Advanced",
    topic: "__len__",
    question: "Magic method nào được gọi khi dùng len(object)?",
    code: "",
    options: [
      "__len__",
      "__str__",
      "__repr__",
      "__init__"
    ],
    answer: 0,
    explanation: "len(object) gọi object.__len__() nếu class có định nghĩa method này."
  },
  {
    id: "pyoop_a_009",
    library: "Python OOP",
    level: "Advanced",
    topic: "Equality Basics",
    question: "Magic method nào thường dùng để định nghĩa logic so sánh bằng giữa hai object?",
    code: "",
    options: [
      "__eq__",
      "__len__",
      "__str__",
      "__init__"
    ],
    answer: 0,
    explanation: "__eq__ được dùng để định nghĩa hành vi của toán tử == giữa các object."
  },
  {
    id: "pyoop_a_010",
    library: "Python OOP",
    level: "Advanced",
    topic: "Dataclass",
    question: "Kết quả của đoạn code sau là gì?",
    code: "from dataclasses import dataclass\n\n@dataclass\nclass User:\n    name: str\n    age: int\n\nu = User(\"An\", 20)\nprint(u.name, u.age)",
    options: [
      "An 20",
      "User An",
      "None None",
      "TypeError"
    ],
    answer: 0,
    explanation: "dataclass tự tạo __init__, nên User(\"An\", 20) gán name là \"An\" và age là 20."
  },
  {
    id: "pyoop_a_011",
    library: "Python OOP",
    level: "Advanced",
    topic: "Inheritance vs Composition",
    question: "Khi nào composition thường phù hợp hơn inheritance?",
    code: "",
    options: [
      "Khi muốn object sử dụng một thành phần khác thay vì nói nó là một loại của class cha",
      "Khi class con chắc chắn là một dạng cụ thể của class cha",
      "Khi muốn override mọi method của class cha",
      "Khi không cần object nào cả"
    ],
    answer: 0,
    explanation: "Composition phù hợp với quan hệ has-a hoặc uses-a. Inheritance phù hợp hơn với quan hệ is-a."
  },
  {
    id: "pyoop_a_012",
    library: "Python OOP",
    level: "Advanced",
    topic: "Service / Processor Class Pattern",
    question: "Trong Data Analytics project, class DataProcessor thường nên chịu trách nhiệm chính nào?",
    code: "",
    options: [
      "Đóng gói các bước xử lý dữ liệu liên quan như clean, transform, validate",
      "Lưu toàn bộ biến global của project",
      "Thay thế hoàn toàn pandas",
      "Chỉ chứa dữ liệu hard-code không dùng method"
    ],
    answer: 0,
    explanation: "Processor class nên gom các hành vi xử lý dữ liệu liên quan, giúp pipeline rõ ràng và dễ bảo trì."
  },
  {
    id: "pyoop_e_001",
    library: "Python OOP",
    level: "Expert",
    topic: "Class Attribute Pitfall",
    question: "Kết quả của đoạn code sau là gì?",
    code: "class DataProcessor:\n    steps = []\n\np1 = DataProcessor()\np2 = DataProcessor()\np1.steps.append(\"clean\")\np2.steps.append(\"export\")\nprint(p1.steps)",
    options: [
      "['clean']",
      "['export']",
      "['clean', 'export']",
      "[]"
    ],
    answer: 2,
    explanation: "steps là mutable class attribute nên p1 và p2 chia sẻ cùng list. Sau hai lần append, list là ['clean', 'export']."
  },
  {
    id: "pyoop_e_002",
    library: "Python OOP",
    level: "Expert",
    topic: "Method Resolution",
    question: "Trong single inheritance đơn giản, nếu class con không có method được gọi, Python sẽ làm gì?",
    code: "",
    options: [
      "Tìm method đó ở class cha theo method resolution order",
      "Luôn raise SyntaxError",
      "Tự động tạo method mới",
      "Bỏ qua lời gọi method"
    ],
    answer: 0,
    explanation: "Python tìm attribute/method theo MRO. Với single inheritance đơn giản, nếu class con không có method, Python sẽ tìm ở class cha."
  },
  {
    id: "pyoop_e_003",
    library: "Python OOP",
    level: "Expert",
    topic: "Dataclass Mutable Default",
    question: "Trong dataclass, vì sao không nên dùng list trực tiếp làm default value cho field?",
    code: "",
    options: [
      "Vì mutable default có thể bị chia sẻ không mong muốn; nên dùng default_factory",
      "Vì dataclass không hỗ trợ list",
      "Vì list chỉ dùng được trong tuple",
      "Vì default value bắt buộc phải là string"
    ],
    answer: 0,
    explanation: "Với mutable field như list, nên dùng field(default_factory=list) để mỗi instance có list riêng."
  },
  {
    id: "pyoop_e_004",
    library: "Python OOP",
    level: "Expert",
    topic: "Polymorphism",
    question: "Đoạn code sau minh họa concept nào rõ nhất?",
    code: "class CsvReport:\n    def export(self):\n        return \"csv\"\n\nclass JsonReport:\n    def export(self):\n        return \"json\"\n\nreports = [CsvReport(), JsonReport()]\nprint([r.export() for r in reports])",
    options: [
      "Polymorphism",
      "Mutable default argument",
      "Private attribute",
      "Class attribute sharing"
    ],
    answer: 0,
    explanation: "Hai object khác class nhưng cùng có method export. Code có thể gọi r.export() trên từng object mà không cần biết class cụ thể, đây là polymorphism."
  }
];