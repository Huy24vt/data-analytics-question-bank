const PYTHON_CORE_QUESTIONS = [
  {
    id: "pycore_f_001",
    library: "Python Core",
    level: "Foundation",
    topic: "Python Overview",
    question: "Python thường được dùng trong Data Analytics vì lý do nào sau đây?",
    code: "",
    options: [
      "Python chỉ dùng được để thiết kế giao diện",
      "Python có cú pháp dễ đọc và nhiều thư viện xử lý dữ liệu",
      "Python không hỗ trợ làm việc với file dữ liệu",
      "Python chỉ chạy được trên một hệ điều hành"
    ],
    answer: 1,
    explanation: "Python phổ biến trong Data Analytics vì cú pháp dễ đọc và có nhiều thư viện như pandas, NumPy, matplotlib để xử lý và phân tích dữ liệu."
  },
  {
    id: "pycore_f_002",
    library: "Python Core",
    level: "Foundation",
    topic: "Variables",
    question: "Trong Python, câu lệnh nào dùng để gán giá trị 10 cho biến x?",
    code: "",
    options: [
      "x == 10",
      "x = 10",
      "int x = 10",
      "x :=: 10"
    ],
    answer: 1,
    explanation: "Toán tử = dùng để gán giá trị cho biến. x == 10 là phép so sánh, không phải phép gán."
  },
  {
    id: "pycore_f_003",
    library: "Python Core",
    level: "Foundation",
    topic: "Naming Convention",
    question: "Tên biến nào sau đây hợp lệ và phù hợp với convention phổ biến trong Python?",
    code: "",
    options: [
      "total_amount",
      "total-amount",
      "2amount",
      "total amount"
    ],
    answer: 0,
    explanation: "Tên biến Python nên dùng snake_case như total_amount. Tên biến không được chứa dấu -, khoảng trắng, và không được bắt đầu bằng số."
  },
  {
    id: "pycore_f_004",
    library: "Python Core",
    level: "Foundation",
    topic: "Data Types",
    question: "Kết quả của đoạn code sau là kiểu dữ liệu nào?",
    code: "x = 10\nprint(type(x))",
    options: [
      "str",
      "float",
      "int",
      "bool"
    ],
    answer: 2,
    explanation: "Giá trị 10 là số nguyên nên biến x có kiểu int."
  },
  {
    id: "pycore_f_005",
    library: "Python Core",
    level: "Foundation",
    topic: "int / float / bool / str",
    question: "Giá trị nào sau đây có kiểu bool trong Python?",
    code: "",
    options: [
      "\"True\"",
      "True",
      "1",
      "\"False\""
    ],
    answer: 1,
    explanation: "True không có dấu ngoặc kép là giá trị boolean. Các giá trị có dấu ngoặc kép là string, còn 1 là int."
  },
  {
    id: "pycore_f_006",
    library: "Python Core",
    level: "Foundation",
    topic: "Type Conversion",
    question: "Kết quả của đoạn code sau là gì?",
    code: "x = \"10\"\ny = int(x)\nprint(y + 5)",
    options: [
      "105",
      "15",
      "TypeError",
      "\"15\""
    ],
    answer: 1,
    explanation: "int(\"10\") chuyển string \"10\" thành số nguyên 10, nên 10 + 5 bằng 15."
  },
  {
    id: "pycore_f_007",
    library: "Python Core",
    level: "Foundation",
    topic: "Operators",
    question: "Toán tử nào dùng để lấy phần dư của phép chia trong Python?",
    code: "",
    options: [
      "/",
      "//",
      "%",
      "**"
    ],
    answer: 2,
    explanation: "Toán tử % trả về phần dư. Ví dụ 7 % 3 bằng 1."
  },
  {
    id: "pycore_f_008",
    library: "Python Core",
    level: "Foundation",
    topic: "Comparison Operators",
    question: "Kết quả của đoạn code sau là gì?",
    code: "x = 5\nprint(x >= 5)",
    options: [
      "True",
      "False",
      "5",
      "SyntaxError"
    ],
    answer: 0,
    explanation: "5 lớn hơn hoặc bằng 5 là đúng, nên kết quả là True."
  },
  {
    id: "pycore_f_009",
    library: "Python Core",
    level: "Foundation",
    topic: "Logical Operators",
    question: "Kết quả của đoạn code sau là gì?",
    code: "x = 10\nprint(x > 5 and x < 20)",
    options: [
      "True",
      "False",
      "10",
      "None"
    ],
    answer: 0,
    explanation: "Cả hai điều kiện x > 5 và x < 20 đều đúng, nên biểu thức and trả về True."
  },
  {
    id: "pycore_f_010",
    library: "Python Core",
    level: "Foundation",
    topic: "Truthy / Falsy",
    question: "Giá trị nào sau đây được xem là falsy trong Python?",
    code: "",
    options: [
      "\"hello\"",
      "[1, 2]",
      "0",
      "True"
    ],
    answer: 2,
    explanation: "Trong Python, 0 là falsy. Các string không rỗng, list không rỗng và True đều là truthy."
  },
  {
    id: "pycore_f_011",
    library: "Python Core",
    level: "Foundation",
    topic: "None",
    question: "None trong Python thường biểu thị điều gì?",
    code: "",
    options: [
      "Giá trị số 0",
      "Chuỗi rỗng",
      "Không có giá trị hoặc chưa có giá trị cụ thể",
      "Một list rỗng"
    ],
    answer: 2,
    explanation: "None biểu thị không có giá trị cụ thể. Nó khác với 0, chuỗi rỗng và list rỗng."
  },
  {
    id: "pycore_f_012",
    library: "Python Core",
    level: "Foundation",
    topic: "String Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "name = \"Python\"\nprint(len(name))",
    options: [
      "5",
      "6",
      "7",
      "Python"
    ],
    answer: 1,
    explanation: "Chuỗi \"Python\" có 6 ký tự, nên len(name) trả về 6."
  },
  {
    id: "pycore_f_013",
    library: "Python Core",
    level: "Foundation",
    topic: "String Indexing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "text = \"data\"\nprint(text[0])",
    options: [
      "d",
      "a",
      "data",
      "IndexError"
    ],
    answer: 0,
    explanation: "Python đánh index từ 0. text[0] là ký tự đầu tiên của chuỗi, tức là \"d\"."
  },
  {
    id: "pycore_f_014",
    library: "Python Core",
    level: "Foundation",
    topic: "String Slicing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "text = \"python\"\nprint(text[1:4])",
    options: [
      "pyt",
      "yth",
      "ytho",
      "tho"
    ],
    answer: 1,
    explanation: "Slice [1:4] lấy các ký tự ở index 1, 2, 3. Với \"python\", kết quả là \"yth\"."
  },
  {
    id: "pycore_f_015",
    library: "Python Core",
    level: "Foundation",
    topic: "String Methods",
    question: "Method nào thường dùng để chuyển chuỗi thành chữ thường?",
    code: "",
    options: [
      "lower()",
      "upper()",
      "strip()",
      "split()"
    ],
    answer: 0,
    explanation: "lower() chuyển chuỗi thành chữ thường. upper() chuyển thành chữ hoa, strip() xóa khoảng trắng hai đầu, split() tách chuỗi."
  },
  {
    id: "pycore_f_016",
    library: "Python Core",
    level: "Foundation",
    topic: "f-string",
    question: "Cách viết nào là f-string hợp lệ trong Python?",
    code: "name = \"An\"",
    options: [
      "\"Hello {name}\"",
      "f\"Hello {name}\"",
      "format\"Hello {name}\"",
      "\"Hello\" f{name}"
    ],
    answer: 1,
    explanation: "f-string cần đặt chữ f trước chuỗi, ví dụ f\"Hello {name}\" để nhúng giá trị biến vào chuỗi."
  },
  {
    id: "pycore_f_017",
    library: "Python Core",
    level: "Foundation",
    topic: "List Basics",
    question: "Cách tạo list nào sau đây là đúng?",
    code: "",
    options: [
      "nums = [1, 2, 3]",
      "nums = (1, 2, 3)",
      "nums = {\"a\": 1}",
      "nums = \"1, 2, 3\""
    ],
    answer: 0,
    explanation: "List được tạo bằng dấu ngoặc vuông []. Dấu () tạo tuple, dấu {} với key-value tạo dictionary."
  },
  {
    id: "pycore_f_018",
    library: "Python Core",
    level: "Foundation",
    topic: "List Indexing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [10, 20, 30]\nprint(nums[1])",
    options: [
      "10",
      "20",
      "30",
      "IndexError"
    ],
    answer: 1,
    explanation: "Index 1 là phần tử thứ hai trong list, nên nums[1] trả về 20."
  },
  {
    id: "pycore_f_019",
    library: "Python Core",
    level: "Foundation",
    topic: "List Slicing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [1, 2, 3, 4]\nprint(nums[:2])",
    options: [
      "[1]",
      "[1, 2]",
      "[2, 3]",
      "[1, 2, 3]"
    ],
    answer: 1,
    explanation: "Slice [:2] lấy các phần tử từ đầu list đến trước index 2, nên kết quả là [1, 2]."
  },
  {
    id: "pycore_f_020",
    library: "Python Core",
    level: "Foundation",
    topic: "List Methods",
    question: "Method nào dùng để thêm một phần tử vào cuối list?",
    code: "",
    options: [
      "append()",
      "extend()",
      "remove()",
      "pop()"
    ],
    answer: 0,
    explanation: "append() thêm một phần tử vào cuối list. extend() thêm nhiều phần tử từ iterable khác."
  },
  {
    id: "pycore_f_021",
    library: "Python Core",
    level: "Foundation",
    topic: "Tuple",
    question: "Điểm khác biệt cơ bản giữa tuple và list là gì?",
    code: "",
    options: [
      "Tuple có thể thay đổi phần tử, list thì không",
      "Tuple là immutable, list là mutable",
      "Tuple chỉ chứa số, list chỉ chứa chuỗi",
      "Tuple không thể chứa nhiều phần tử"
    ],
    answer: 1,
    explanation: "Tuple là immutable nên không thể thay đổi trực tiếp sau khi tạo. List là mutable nên có thể thêm, sửa, xóa phần tử."
  },
  {
    id: "pycore_f_022",
    library: "Python Core",
    level: "Foundation",
    topic: "Set",
    question: "Đặc điểm nào đúng về set trong Python?",
    code: "",
    options: [
      "Set luôn giữ nguyên thứ tự phần tử theo lúc thêm vào",
      "Set cho phép phần tử trùng lặp",
      "Set không cho phép phần tử trùng lặp",
      "Set chỉ lưu được string"
    ],
    answer: 2,
    explanation: "Set là collection không lưu phần tử trùng lặp. Set không nên được dùng khi cần giữ thứ tự chính xác của dữ liệu."
  },
  {
    id: "pycore_f_023",
    library: "Python Core",
    level: "Foundation",
    topic: "Dictionary",
    question: "Cách tạo dictionary nào sau đây là đúng?",
    code: "",
    options: [
      "user = [\"name\", \"An\"]",
      "user = {\"name\": \"An\", \"age\": 20}",
      "user = (\"name\", \"An\")",
      "user = \"name: An\""
    ],
    answer: 1,
    explanation: "Dictionary lưu dữ liệu theo cặp key-value, ví dụ {\"name\": \"An\", \"age\": 20}."
  },
  {
    id: "pycore_f_024",
    library: "Python Core",
    level: "Foundation",
    topic: "Dictionary Access",
    question: "Kết quả của đoạn code sau là gì?",
    code: "user = {\"name\": \"An\", \"age\": 20}\nprint(user[\"name\"])",
    options: [
      "name",
      "An",
      "20",
      "KeyError"
    ],
    answer: 1,
    explanation: "user[\"name\"] truy cập giá trị tương ứng với key \"name\", nên kết quả là \"An\"."
  },
  {
    id: "pycore_f_025",
    library: "Python Core",
    level: "Foundation",
    topic: "if / elif / else",
    question: "Kết quả của đoạn code sau là gì?",
    code: "score = 75\nif score >= 80:\n    print(\"A\")\nelif score >= 60:\n    print(\"B\")\nelse:\n    print(\"C\")",
    options: [
      "A",
      "B",
      "C",
      "Không in gì"
    ],
    answer: 1,
    explanation: "score = 75 không đạt điều kiện >= 80, nhưng đạt điều kiện >= 60, nên in ra \"B\"."
  },
  {
    id: "pycore_f_026",
    library: "Python Core",
    level: "Foundation",
    topic: "for Loop",
    question: "Kết quả của đoạn code sau là gì?",
    code: "for x in [1, 2, 3]:\n    print(x)",
    options: [
      "In lần lượt 1, 2, 3",
      "Chỉ in 1",
      "Chỉ in 3",
      "TypeError"
    ],
    answer: 0,
    explanation: "Vòng lặp for duyệt qua từng phần tử trong list và in lần lượt 1, 2, 3."
  },
  {
    id: "pycore_f_027",
    library: "Python Core",
    level: "Foundation",
    topic: "while Loop",
    question: "Vòng lặp while tiếp tục chạy khi nào?",
    code: "",
    options: [
      "Khi điều kiện là True",
      "Khi điều kiện là False",
      "Khi biến có kiểu string",
      "Khi code không có indentation"
    ],
    answer: 0,
    explanation: "while chạy lặp lại miễn là điều kiện còn True. Khi điều kiện False, vòng lặp dừng."
  },
  {
    id: "pycore_f_028",
    library: "Python Core",
    level: "Foundation",
    topic: "range",
    question: "Kết quả của đoạn code sau là gì?",
    code: "print(list(range(3)))",
    options: [
      "[1, 2, 3]",
      "[0, 1, 2]",
      "[0, 1, 2, 3]",
      "[3]"
    ],
    answer: 1,
    explanation: "range(3) tạo dãy số từ 0 đến trước 3, nên list(range(3)) là [0, 1, 2]."
  },
  {
    id: "pycore_f_029",
    library: "Python Core",
    level: "Foundation",
    topic: "Function Basics",
    question: "Từ khóa nào dùng để định nghĩa function trong Python?",
    code: "",
    options: [
      "function",
      "def",
      "func",
      "define"
    ],
    answer: 1,
    explanation: "Python dùng từ khóa def để định nghĩa function."
  },
  {
    id: "pycore_f_030",
    library: "Python Core",
    level: "Foundation",
    topic: "return",
    question: "return trong function dùng để làm gì?",
    code: "",
    options: [
      "In dữ liệu ra màn hình",
      "Dừng chương trình Python hoàn toàn",
      "Trả giá trị từ function về nơi gọi",
      "Tạo biến global"
    ],
    answer: 2,
    explanation: "return trả kết quả từ function về nơi gọi. print chỉ in ra màn hình và không thay thế vai trò của return."
  },
  {
    id: "pycore_i_001",
    library: "Python Core",
    level: "Intermediate",
    topic: "append / extend",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [1, 2]\nnums.append([3, 4])\nprint(nums)",
    options: [
      "[1, 2, 3, 4]",
      "[1, 2, [3, 4]]",
      "[[1, 2], 3, 4]",
      "TypeError"
    ],
    answer: 1,
    explanation: "append() thêm toàn bộ object vào cuối list. Vì [3, 4] là một list, nó được thêm như một phần tử duy nhất."
  },
  {
    id: "pycore_i_002",
    library: "Python Core",
    level: "Intermediate",
    topic: "append / extend",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [1, 2]\nnums.extend([3, 4])\nprint(nums)",
    options: [
      "[1, 2, [3, 4]]",
      "[1, 2, 3, 4]",
      "[3, 4, 1, 2]",
      "TypeError"
    ],
    answer: 1,
    explanation: "extend() thêm từng phần tử của iterable vào list. Vì vậy [3, 4] được tách thành 3 và 4."
  },
  {
    id: "pycore_i_003",
    library: "Python Core",
    level: "Intermediate",
    topic: "List Methods",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [10, 20, 30]\nx = nums.pop()\nprint(x, nums)",
    options: [
      "10 [20, 30]",
      "30 [10, 20]",
      "None [10, 20]",
      "30 [10, 20, 30]"
    ],
    answer: 1,
    explanation: "pop() không có index sẽ xóa và trả về phần tử cuối list. x là 30 và nums còn [10, 20]."
  },
  {
    id: "pycore_i_004",
    library: "Python Core",
    level: "Intermediate",
    topic: "Dictionary Methods",
    question: "Kết quả của đoạn code sau là gì?",
    code: "user = {\"name\": \"An\"}\nprint(user.get(\"age\", 0))",
    options: [
      "age",
      "0",
      "None",
      "KeyError"
    ],
    answer: 1,
    explanation: "get(\"age\", 0) trả về 0 vì key \"age\" không tồn tại và default value được đặt là 0."
  },
  {
    id: "pycore_i_005",
    library: "Python Core",
    level: "Intermediate",
    topic: "KeyError",
    question: "Đoạn code sau gây lỗi gì?",
    code: "user = {\"name\": \"An\"}\nprint(user[\"age\"])",
    options: [
      "IndexError",
      "KeyError",
      "TypeError",
      "SyntaxError"
    ],
    answer: 1,
    explanation: "Truy cập dictionary bằng key không tồn tại sẽ gây KeyError. Có thể dùng get() nếu muốn tránh lỗi này."
  },
  {
    id: "pycore_i_006",
    library: "Python Core",
    level: "Intermediate",
    topic: "IndexError",
    question: "Đoạn code sau gây lỗi gì?",
    code: "nums = [1, 2, 3]\nprint(nums[3])",
    options: [
      "IndexError",
      "KeyError",
      "TypeError",
      "SyntaxError"
    ],
    answer: 0,
    explanation: "List có index 0, 1, 2. Truy cập nums[3] vượt phạm vi nên gây IndexError."
  },
  {
    id: "pycore_i_007",
    library: "Python Core",
    level: "Intermediate",
    topic: "TypeError",
    question: "Đoạn code sau gây lỗi gì?",
    code: "x = \"10\"\nprint(x + 5)",
    options: [
      "SyntaxError",
      "IndexError",
      "KeyError",
      "TypeError"
    ],
    answer: 3,
    explanation: "Không thể cộng trực tiếp string với int. Cần chuyển kiểu trước, ví dụ int(x) + 5."
  },
  {
    id: "pycore_i_008",
    library: "Python Core",
    level: "Intermediate",
    topic: "SyntaxError",
    question: "Đoạn code sau gây lỗi gì?",
    code: "if True\n    print(\"ok\")",
    options: [
      "SyntaxError",
      "TypeError",
      "IndexError",
      "KeyError"
    ],
    answer: 0,
    explanation: "Câu lệnh if cần dấu : ở cuối dòng điều kiện. Thiếu dấu : gây SyntaxError."
  },
  {
    id: "pycore_i_009",
    library: "Python Core",
    level: "Intermediate",
    topic: "break / continue / pass",
    question: "Kết quả của đoạn code sau là gì?",
    code: "for x in [1, 2, 3, 4]:\n    if x == 3:\n        break\n    print(x)",
    options: [
      "In 1, 2",
      "In 1, 2, 3",
      "In 1, 2, 4",
      "Không in gì"
    ],
    answer: 0,
    explanation: "Khi x == 3, break dừng vòng lặp ngay. Vì vậy chỉ in 1 và 2."
  },
  {
    id: "pycore_i_010",
    library: "Python Core",
    level: "Intermediate",
    topic: "break / continue / pass",
    question: "Kết quả của đoạn code sau là gì?",
    code: "for x in [1, 2, 3]:\n    if x == 2:\n        continue\n    print(x)",
    options: [
      "In 1, 2, 3",
      "In 1, 3",
      "In 2",
      "Không in gì"
    ],
    answer: 1,
    explanation: "continue bỏ qua phần còn lại của vòng lặp hiện tại. Khi x == 2, print bị bỏ qua, nên chỉ in 1 và 3."
  },
  {
    id: "pycore_i_011",
    library: "Python Core",
    level: "Intermediate",
    topic: "enumerate",
    question: "enumerate thường được dùng để làm gì?",
    code: "",
    options: [
      "Lặp qua iterable kèm theo index",
      "Sắp xếp list",
      "Xóa phần tử khỏi dictionary",
      "Chuyển string thành int"
    ],
    answer: 0,
    explanation: "enumerate giúp lấy cả index và value khi duyệt qua iterable, rất hữu ích khi cần biết vị trí phần tử."
  },
  {
    id: "pycore_i_012",
    library: "Python Core",
    level: "Intermediate",
    topic: "zip",
    question: "Kết quả của đoạn code sau là gì?",
    code: "names = [\"An\", \"Binh\"]\nscores = [8, 9]\nprint(list(zip(names, scores)))",
    options: [
      "[(\"An\", 8), (\"Binh\", 9)]",
      "[\"An\", \"Binh\", 8, 9]",
      "[(\"An\", \"Binh\"), (8, 9)]",
      "TypeError"
    ],
    answer: 0,
    explanation: "zip ghép các phần tử theo vị trí tương ứng từ nhiều iterable, tạo ra các tuple như (\"An\", 8)."
  },
  {
    id: "pycore_i_013",
    library: "Python Core",
    level: "Intermediate",
    topic: "Parameters / Arguments",
    question: "Trong lời gọi hàm greet(\"An\"), \"An\" được gọi là gì?",
    code: "def greet(name):\n    return f\"Hi {name}\"\n\ngreet(\"An\")",
    options: [
      "Parameter",
      "Argument",
      "Function name",
      "Return value"
    ],
    answer: 1,
    explanation: "name là parameter trong định nghĩa hàm. \"An\" là argument được truyền vào khi gọi hàm."
  },
  {
    id: "pycore_i_014",
    library: "Python Core",
    level: "Intermediate",
    topic: "Default Arguments",
    question: "Kết quả của đoạn code sau là gì?",
    code: "def add_tax(amount, tax=0.1):\n    return amount * (1 + tax)\n\nprint(add_tax(100))",
    options: [
      "100",
      "101",
      "110.00000000000001",
      "TypeError"
    ],
    answer: 2,
    explanation: "tax có giá trị mặc định là 0.1, nên 100 * (1 + 0.1) thường in ra 110.00000000000001 do cách biểu diễn số thực floating-point."
  },
  {
    id: "pycore_i_015",
    library: "Python Core",
    level: "Intermediate",
    topic: "return vs print",
    question: "Điểm khác biệt đúng giữa return và print là gì?",
    code: "",
    options: [
      "print trả giá trị cho nơi gọi hàm, return chỉ in ra màn hình",
      "return trả giá trị cho nơi gọi hàm, print chỉ hiển thị ra màn hình",
      "return chỉ dùng được ngoài function",
      "print chỉ dùng được trong function"
    ],
    answer: 1,
    explanation: "return trả kết quả để có thể tiếp tục dùng trong code. print chỉ hiển thị dữ liệu ra màn hình."
  },
  {
    id: "pycore_i_016",
    library: "Python Core",
    level: "Intermediate",
    topic: "Scope Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "x = 10\n\ndef show():\n    x = 5\n    print(x)\n\nshow()\nprint(x)",
    options: [
      "5 rồi 10",
      "10 rồi 5",
      "5 rồi 5",
      "10 rồi 10"
    ],
    answer: 0,
    explanation: "x trong function là biến local nên print trong function in 5. Biến global x bên ngoài vẫn là 10."
  },
  {
    id: "pycore_i_017",
    library: "Python Core",
    level: "Intermediate",
    topic: "== vs is",
    question: "Sự khác nhau chính giữa == và is là gì?",
    code: "",
    options: [
      "== so sánh giá trị, is so sánh identity của object",
      "== so sánh kiểu dữ liệu, is so sánh độ dài",
      "== chỉ dùng cho số, is chỉ dùng cho chuỗi",
      "Không có khác biệt"
    ],
    answer: 0,
    explanation: "== kiểm tra hai object có giá trị bằng nhau không. is kiểm tra hai biến có trỏ tới cùng một object trong bộ nhớ không."
  },
  {
    id: "pycore_i_018",
    library: "Python Core",
    level: "Intermediate",
    topic: "Mutable vs Immutable",
    question: "Kiểu dữ liệu nào sau đây là mutable?",
    code: "",
    options: [
      "int",
      "str",
      "tuple",
      "list"
    ],
    answer: 3,
    explanation: "list là mutable nên có thể thay đổi nội dung sau khi tạo. int, str và tuple là immutable."
  },
  {
    id: "pycore_i_019",
    library: "Python Core",
    level: "Intermediate",
    topic: "List vs Dictionary",
    question: "Khi cần tra cứu giá trị theo key như user_id, cấu trúc nào thường phù hợp hơn?",
    code: "",
    options: [
      "Dictionary",
      "List chỉ số nguyên",
      "String",
      "Boolean"
    ],
    answer: 0,
    explanation: "Dictionary phù hợp để lưu và tra cứu dữ liệu theo key-value. List phù hợp hơn khi dữ liệu được truy cập theo vị trí."
  },
  {
    id: "pycore_i_020",
    library: "Python Core",
    level: "Intermediate",
    topic: "sorted",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [3, 1, 2]\nresult = sorted(nums)\nprint(nums, result)",
    options: [
      "[1, 2, 3] [1, 2, 3]",
      "[3, 1, 2] [1, 2, 3]",
      "[3, 1, 2] None",
      "None [1, 2, 3]"
    ],
    answer: 1,
    explanation: "sorted(nums) trả về list mới đã sắp xếp và không thay đổi list gốc nums."
  },
  {
    id: "pycore_i_021",
    library: "Python Core",
    level: "Intermediate",
    topic: "Built-in Functions",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [5, 2, 9]\nprint(min(nums), max(nums), sum(nums))",
    options: [
      "2 9 16",
      "5 9 16",
      "2 5 9",
      "16 9 2"
    ],
    answer: 0,
    explanation: "min(nums) là 2, max(nums) là 9 và sum(nums) là 16."
  },
  {
    id: "pycore_i_022",
    library: "Python Core",
    level: "Intermediate",
    topic: "Dictionary Methods",
    question: "Kết quả của đoạn code sau là gì?",
    code: "data = {\"a\": 1, \"b\": 2}\nprint(list(data.keys()))",
    options: [
      "[1, 2]",
      "[\"a\", \"b\"]",
      "[(\"a\", 1), (\"b\", 2)]",
      "KeyError"
    ],
    answer: 1,
    explanation: "keys() trả về các key trong dictionary. Khi chuyển sang list, kết quả là [\"a\", \"b\"]."
  },
  {
    id: "pycore_i_023",
    library: "Python Core",
    level: "Intermediate",
    topic: "Truthy / Falsy",
    question: "Kết quả của đoạn code sau là gì?",
    code: "items = []\nif items:\n    print(\"has data\")\nelse:\n    print(\"empty\")",
    options: [
      "has data",
      "empty",
      "[]",
      "None"
    ],
    answer: 1,
    explanation: "List rỗng là falsy, nên nhánh else chạy và in ra \"empty\"."
  },
  {
    id: "pycore_i_024",
    library: "Python Core",
    level: "Intermediate",
    topic: "String Methods",
    question: "Kết quả của đoạn code sau là gì?",
    code: "text = \"  data  \"\nprint(text.strip())",
    options: [
      "\"  data  \"",
      "\"data\"",
      "\"DATA\"",
      "\"da ta\""
    ],
    answer: 1,
    explanation: "strip() xóa khoảng trắng ở đầu và cuối chuỗi, nên kết quả là \"data\"."
  },
  {
    id: "pycore_i_025",
    library: "Python Core",
    level: "Intermediate",
    topic: "Pythonic Condition",
    question: "Cách viết nào dễ đọc và phù hợp hơn khi kiểm tra list không rỗng?",
    code: "items = [1, 2, 3]",
    options: [
      "if len(items) > 0:",
      "if items:",
      "if items == True:",
      "if items is True:"
    ],
    answer: 1,
    explanation: "if items: là cách Pythonic để kiểm tra list không rỗng vì list không rỗng là truthy."
  },
  {
    id: "pycore_a_001",
    library: "Python Core",
    level: "Advanced",
    topic: "Mutable vs Immutable",
    question: "Kết quả của đoạn code sau là gì?",
    code: "a = [1, 2]\nb = a\nb.append(3)\nprint(a)",
    options: [
      "[1, 2]",
      "[1, 2, 3]",
      "[3]",
      "TypeError"
    ],
    answer: 1,
    explanation: "b và a cùng tham chiếu tới một list. Khi b.append(3), list đó thay đổi nên a cũng hiển thị [1, 2, 3]."
  },
  {
    id: "pycore_a_002",
    library: "Python Core",
    level: "Advanced",
    topic: "Copying Lists",
    question: "Cách nào tạo shallow copy của list nums?",
    code: "nums = [1, 2, 3]",
    options: [
      "copy = nums",
      "copy = nums[:]",
      "copy == nums",
      "copy is nums"
    ],
    answer: 1,
    explanation: "nums[:] tạo shallow copy của list. copy = nums chỉ tạo thêm một biến tham chiếu đến cùng list."
  },
  {
    id: "pycore_a_003",
    library: "Python Core",
    level: "Advanced",
    topic: "Default Arguments",
    question: "Vì sao không nên dùng list rỗng làm default argument trong function?",
    code: "def add_item(x, items=[]):\n    items.append(x)\n    return items",
    options: [
      "Vì list không thể append phần tử",
      "Vì default mutable object có thể được dùng lại giữa các lần gọi hàm",
      "Vì default argument chỉ nhận số",
      "Vì function không thể return list"
    ],
    answer: 1,
    explanation: "Default argument được tạo một lần khi định nghĩa hàm. Nếu dùng list mutable, các lần gọi có thể dùng chung cùng một list và gây kết quả khó kiểm soát."
  },
  {
    id: "pycore_a_004",
    library: "Python Core",
    level: "Advanced",
    topic: "List Comprehension",
    question: "Đoạn code nào tạo list bình phương của các số trong nums?",
    code: "nums = [1, 2, 3]",
    options: [
      "[x ** 2 for x in nums]",
      "[x * 2 in nums]",
      "for x ** 2 in nums",
      "nums ** 2"
    ],
    answer: 0,
    explanation: "List comprehension [x ** 2 for x in nums] tạo list mới gồm bình phương của từng phần tử."
  },
  {
    id: "pycore_a_005",
    library: "Python Core",
    level: "Advanced",
    topic: "Dictionary Comprehension",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [1, 2, 3]\ndata = {x: x * 2 for x in nums}\nprint(data)",
    options: [
      "{1: 2, 2: 4, 3: 6}",
      "[2, 4, 6]",
      "{2: 1, 4: 2, 6: 3}",
      "SyntaxError"
    ],
    answer: 0,
    explanation: "Dictionary comprehension tạo dictionary với key là x và value là x * 2."
  },
  {
    id: "pycore_a_006",
    library: "Python Core",
    level: "Advanced",
    topic: "Sorting",
    question: "Kết quả của đoạn code sau là gì?",
    code: "items = [\"apple\", \"kiwi\", \"banana\"]\nprint(sorted(items, key=len))",
    options: [
      "[\"apple\", \"banana\", \"kiwi\"]",
      "[\"kiwi\", \"apple\", \"banana\"]",
      "[\"banana\", \"apple\", \"kiwi\"]",
      "TypeError"
    ],
    answer: 1,
    explanation: "key=len sắp xếp chuỗi theo độ dài. \"kiwi\" dài 4, \"apple\" dài 5, \"banana\" dài 6."
  },
  {
    id: "pycore_a_007",
    library: "Python Core",
    level: "Advanced",
    topic: "Unpacking",
    question: "Kết quả của đoạn code sau là gì?",
    code: "a, *b = [1, 2, 3, 4]\nprint(a, b)",
    options: [
      "1 [2, 3, 4]",
      "[1, 2, 3] 4",
      "1 2",
      "ValueError"
    ],
    answer: 0,
    explanation: "a nhận phần tử đầu tiên là 1. *b nhận các phần tử còn lại dưới dạng list [2, 3, 4]."
  },
  {
    id: "pycore_a_008",
    library: "Python Core",
    level: "Advanced",
    topic: "Set",
    question: "Kết quả của đoạn code sau là gì?",
    code: "a = {1, 2, 3}\nb = {3, 4}\nprint(a & b)",
    options: [
      "{1, 2, 3, 4}",
      "{3}",
      "{1, 2}",
      "{4}"
    ],
    answer: 1,
    explanation: "Toán tử & giữa hai set trả về phần giao, tức các phần tử xuất hiện trong cả hai set. Kết quả là {3}."
  },
  {
    id: "pycore_a_009",
    library: "Python Core",
    level: "Advanced",
    topic: "Exception Basics",
    question: "Mục đích chính của try/except là gì?",
    code: "",
    options: [
      "Tăng tốc độ chạy của Python",
      "Bắt và xử lý lỗi có thể xảy ra khi chương trình chạy",
      "Tạo vòng lặp",
      "Tự động chuyển kiểu dữ liệu"
    ],
    answer: 1,
    explanation: "try/except dùng để xử lý exception trong runtime, giúp chương trình không bị dừng đột ngột nếu lỗi đã được dự đoán và xử lý."
  },
  {
    id: "pycore_a_010",
    library: "Python Core",
    level: "Advanced",
    topic: "Scope Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "x = 10\n\ndef update():\n    global x\n    x = 20\n\nupdate()\nprint(x)",
    options: [
      "10",
      "20",
      "None",
      "UnboundLocalError"
    ],
    answer: 1,
    explanation: "global x cho phép function thay đổi biến x ở scope global. Sau khi update() chạy, x bằng 20."
  },
  {
    id: "pycore_e_001",
    library: "Python Core",
    level: "Expert",
    topic: "Identity vs Equality",
    question: "Kết quả nào mô tả đúng nhất về đoạn code sau?",
    code: "a = [1, 2]\nb = [1, 2]\nprint(a == b, a is b)",
    options: [
      "True True",
      "True False",
      "False True",
      "False False"
    ],
    answer: 1,
    explanation: "a == b là True vì hai list có cùng giá trị. a is b là False vì chúng là hai object khác nhau trong bộ nhớ."
  },
  {
    id: "pycore_e_002",
    library: "Python Core",
    level: "Expert",
    topic: "Mutable Default Arguments",
    question: "Kết quả của đoạn code sau là gì?",
    code: "def add_item(x, items=[]):\n    items.append(x)\n    return items\n\nprint(add_item(1))\nprint(add_item(2))",
    options: [
      "[1] rồi [2]",
      "[1] rồi [1, 2]",
      "[1, 2] rồi [1, 2]",
      "TypeError"
    ],
    answer: 1,
    explanation: "List mặc định items được dùng lại giữa các lần gọi hàm. Lần đầu trả [1], lần hai append thêm 2 vào cùng list nên trả [1, 2]."
  },
  {
    id: "pycore_e_003",
    library: "Python Core",
    level: "Expert",
    topic: "Shallow Copy",
    question: "Kết quả của đoạn code sau là gì?",
    code: "a = [[1], [2]]\nb = a[:]\nb[0].append(99)\nprint(a)",
    options: [
      "[[1], [2]]",
      "[[1, 99], [2]]",
      "[[99], [2]]",
      "TypeError"
    ],
    answer: 1,
    explanation: "a[:] tạo shallow copy, nhưng các list con bên trong vẫn là cùng object. Vì vậy b[0].append(99) cũng làm thay đổi list con trong a."
  },
  {
    id: "pycore_e_004",
    library: "Python Core",
    level: "Expert",
    topic: "LEGB Scope",
    question: "Quy tắc LEGB trong Python mô tả điều gì?",
    code: "",
    options: [
      "Thứ tự Python tìm tên biến: Local, Enclosing, Global, Built-in",
      "Thứ tự Python chạy file: Library, Environment, Global, Binary",
      "Quy tắc đặt tên biến bằng chữ hoa",
      "Cách Python sắp xếp list"
    ],
    answer: 0,
    explanation: "LEGB là thứ tự Python tìm tên biến: Local, Enclosing, Global, Built-in. Đây là nền tảng để hiểu scope."
  },
  {
    id: "pycore_e_005",
    library: "Python Core",
    level: "Expert",
    topic: "Common Errors",
    question: "Vì sao đoạn code sau có thể gây UnboundLocalError?",
    code: "x = 10\n\ndef show():\n    print(x)\n    x = 5\n\nshow()",
    options: [
      "Vì print không dùng được trong function",
      "Vì Python xem x là biến local trong show do có phép gán x = 5",
      "Vì x global không thể là số nguyên",
      "Vì function không được gọi sau khi định nghĩa"
    ],
    answer: 1,
    explanation: "Khi có phép gán x = 5 trong function, Python xem x là biến local. print(x) chạy trước khi biến local x được gán giá trị nên gây UnboundLocalError."
  }
];