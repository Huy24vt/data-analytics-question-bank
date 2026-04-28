const PYTHON_INTERMEDIATE_QUESTIONS = [
  {
    id: "pyint_f_001",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "List Comprehension",
    question: "Đoạn code nào tạo list bình phương của các số trong nums?",
    code: "nums = [1, 2, 3]",
    options: [
      "[x ** 2 for x in nums]",
      "[x for x ** 2 in nums]",
      "for x in nums: x ** 2",
      "nums ** 2"
    ],
    answer: 0,
    explanation: "[x ** 2 for x in nums] là list comprehension hợp lệ để tạo list mới chứa bình phương từng phần tử. Python list không hỗ trợ nums ** 2 trực tiếp."
  },
  {
    id: "pyint_f_002",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "Dict Comprehension",
    question: "Đoạn code nào tạo dictionary với key là số và value là bình phương của số đó?",
    code: "nums = [1, 2, 3]",
    options: [
      "{x: x ** 2 for x in nums}",
      "[x: x ** 2 for x in nums]",
      "{x ** 2 for x in nums}",
      "dict(x ** 2 for x in nums)"
    ],
    answer: 0,
    explanation: "{x: x ** 2 for x in nums} là dict comprehension hợp lệ, tạo dictionary dạng {1: 1, 2: 4, 3: 9}."
  },
  {
    id: "pyint_f_003",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "Set Comprehension",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [1, 1, 2, 3]\nresult = {x for x in nums}\nprint(result)",
    options: [
      "[1, 1, 2, 3]",
      "{1, 2, 3}",
      "{1, 1, 2, 3}",
      "TypeError"
    ],
    answer: 1,
    explanation: "Set không lưu phần tử trùng lặp, nên kết quả là {1, 2, 3}."
  },
  {
    id: "pyint_f_004",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "Lambda",
    question: "lambda trong Python thường dùng để làm gì?",
    code: "",
    options: [
      "Định nghĩa một hàm ngắn, thường dùng một lần",
      "Tạo một class mới",
      "Bắt lỗi trong chương trình",
      "Đọc file CSV"
    ],
    answer: 0,
    explanation: "lambda dùng để tạo function ngắn, thường là một biểu thức đơn giản. Với logic phức tạp, def thường dễ đọc hơn."
  },
  {
    id: "pyint_f_005",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "sorted with key",
    question: "Kết quả của đoạn code sau là gì?",
    code: "items = [\"aaa\", \"b\", \"cc\"]\nprint(sorted(items, key=len))",
    options: [
      "['aaa', 'cc', 'b']",
      "['b', 'cc', 'aaa']",
      "['aaa', 'b', 'cc']",
      "TypeError"
    ],
    answer: 1,
    explanation: "key=len sắp xếp theo độ dài chuỗi. 'b' dài 1, 'cc' dài 2, 'aaa' dài 3."
  },
  {
    id: "pyint_f_006",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "any / all",
    question: "Kết quả của đoạn code sau là gì?",
    code: "values = [0, 1, 2]\nprint(any(values))",
    options: [
      "True",
      "False",
      "0",
      "TypeError"
    ],
    answer: 0,
    explanation: "any(values) trả về True nếu có ít nhất một phần tử truthy. Trong list này, 1 và 2 là truthy."
  },
  {
    id: "pyint_f_007",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "any / all",
    question: "Kết quả của đoạn code sau là gì?",
    code: "values = [1, 2, 3]\nprint(all(values))",
    options: [
      "True",
      "False",
      "None",
      "TypeError"
    ],
    answer: 0,
    explanation: "all(values) trả về True nếu tất cả phần tử đều truthy. Các số 1, 2, 3 đều là truthy."
  },
  {
    id: "pyint_f_008",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "enumerate",
    question: "enumerate thường hữu ích nhất khi nào?",
    code: "",
    options: [
      "Khi cần vừa lấy index vừa lấy value khi loop",
      "Khi cần xóa toàn bộ list",
      "Khi cần chuyển list thành string",
      "Khi cần bắt lỗi file"
    ],
    answer: 0,
    explanation: "enumerate giúp lấy cả vị trí và giá trị khi duyệt iterable, ví dụ for i, value in enumerate(values)."
  },
  {
    id: "pyint_f_009",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "Unpacking",
    question: "Kết quả của đoạn code sau là gì?",
    code: "a, b = [10, 20]\nprint(a, b)",
    options: [
      "10 20",
      "[10, 20]",
      "20 10",
      "ValueError"
    ],
    answer: 0,
    explanation: "Unpacking gán phần tử đầu cho a và phần tử thứ hai cho b, nên kết quả là 10 20."
  },
  {
    id: "pyint_f_010",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "*args",
    question: "*args trong function dùng để làm gì?",
    code: "",
    options: [
      "Nhận số lượng positional arguments linh hoạt",
      "Nhận duy nhất một argument bắt buộc",
      "Chỉ nhận keyword arguments",
      "Tự động đọc file input"
    ],
    answer: 0,
    explanation: "*args cho phép function nhận nhiều positional arguments và gom chúng thành tuple."
  },
  {
    id: "pyint_f_011",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "**kwargs",
    question: "**kwargs trong function dùng để làm gì?",
    code: "",
    options: [
      "Nhận nhiều keyword arguments linh hoạt",
      "Nhận nhiều positional arguments dưới dạng list",
      "Tạo vòng lặp",
      "Sắp xếp dữ liệu"
    ],
    answer: 0,
    explanation: "**kwargs gom các keyword arguments thành dictionary, giúp function nhận tham số linh hoạt."
  },
  {
    id: "pyint_f_012",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "File Handling",
    question: "Cách nào được khuyến nghị để mở file vì giúp tự động đóng file sau khi dùng?",
    code: "",
    options: [
      "with open(path) as f:",
      "f = open(path)",
      "open(path).read() không cần đóng",
      "file(path)"
    ],
    answer: 0,
    explanation: "with open(...) as f dùng context manager, giúp file được đóng tự động sau khi block kết thúc."
  },
  {
    id: "pyint_f_013",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "Modules",
    question: "Module trong Python thường là gì?",
    code: "",
    options: [
      "Một file .py chứa code có thể import",
      "Một dòng comment",
      "Một biến kiểu list",
      "Một lỗi runtime"
    ],
    answer: 0,
    explanation: "Module thường là một file Python .py chứa functions, variables hoặc classes có thể được import để tái sử dụng."
  },
  {
    id: "pyint_f_014",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "Type Hint Basics",
    question: "Ý nghĩa chính của type hint trong Python là gì?",
    code: "def add(x: int, y: int) -> int:\n    return x + y",
    options: [
      "Gợi ý kiểu dữ liệu cho người đọc và công cụ kiểm tra code",
      "Bắt buộc Python luôn chặn sai kiểu tại runtime",
      "Làm function chạy nhanh hơn chắc chắn",
      "Biến function thành class"
    ],
    answer: 0,
    explanation: "Type hint giúp code rõ ràng hơn và hỗ trợ IDE/type checker. Python không tự động enforce type hint trong runtime mặc định."
  },
  {
    id: "pyint_f_015",
    library: "Python Intermediate",
    level: "Foundation",
    topic: "Docstring",
    question: "Docstring thường dùng để làm gì?",
    code: "",
    options: [
      "Mô tả mục đích, tham số và kết quả của function/module",
      "Tăng tốc độ chạy vòng lặp",
      "Tự động sửa lỗi syntax",
      "Thay thế hoàn toàn unit test"
    ],
    answer: 0,
    explanation: "Docstring giúp người đọc hiểu function/module làm gì, nhận tham số nào và trả về gì."
  },
  {
    id: "pyint_i_001",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "List Comprehension",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [1, 2, 3, 4]\nresult = [x for x in nums if x % 2 == 0]\nprint(result)",
    options: [
      "[1, 3]",
      "[2, 4]",
      "[1, 2, 3, 4]",
      "[]"
    ],
    answer: 1,
    explanation: "Điều kiện x % 2 == 0 giữ lại các số chẵn, nên kết quả là [2, 4]."
  },
  {
    id: "pyint_i_002",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Nested Comprehension Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "rows = [[1, 2], [3, 4]]\nresult = [x for row in rows for x in row]\nprint(result)",
    options: [
      "[[1, 2], [3, 4]]",
      "[1, 2, 3, 4]",
      "[1, 3]",
      "TypeError"
    ],
    answer: 1,
    explanation: "Comprehension này flatten list 2 chiều bằng cách duyệt từng row rồi từng x trong row."
  },
  {
    id: "pyint_i_003",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Dict Comprehension",
    question: "Kết quả của đoạn code sau là gì?",
    code: "items = [\"a\", \"bb\"]\nresult = {x: len(x) for x in items}\nprint(result)",
    options: [
      "{'a': 1, 'bb': 2}",
      "{1: 'a', 2: 'bb'}",
      "['a', 'bb']",
      "TypeError"
    ],
    answer: 0,
    explanation: "Dictionary comprehension tạo key là chuỗi x và value là độ dài len(x)."
  },
  {
    id: "pyint_i_004",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Lambda",
    question: "Kết quả của đoạn code sau là gì?",
    code: "double = lambda x: x * 2\nprint(double(5))",
    options: [
      "5",
      "10",
      "lambda",
      "TypeError"
    ],
    answer: 1,
    explanation: "lambda x: x * 2 tạo function nhân đôi input. double(5) trả về 10."
  },
  {
    id: "pyint_i_005",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "map / filter",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [1, 2, 3]\nresult = list(map(lambda x: x + 1, nums))\nprint(result)",
    options: [
      "[1, 2, 3]",
      "[2, 3, 4]",
      "[1, 3]",
      "TypeError"
    ],
    answer: 1,
    explanation: "map áp dụng lambda x: x + 1 cho từng phần tử, nên kết quả là [2, 3, 4]."
  },
  {
    id: "pyint_i_006",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "map / filter",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [1, 2, 3, 4]\nresult = list(filter(lambda x: x > 2, nums))\nprint(result)",
    options: [
      "[1, 2]",
      "[3, 4]",
      "[True, True]",
      "[1, 2, 3, 4]"
    ],
    answer: 1,
    explanation: "filter giữ lại các phần tử làm điều kiện True. x > 2 đúng với 3 và 4."
  },
  {
    id: "pyint_i_007",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "sorted with key",
    question: "Kết quả của đoạn code sau là gì?",
    code: "records = [{\"name\": \"A\", \"score\": 8}, {\"name\": \"B\", \"score\": 5}]\nresult = sorted(records, key=lambda x: x[\"score\"])\nprint(result[0][\"name\"])",
    options: [
      "A",
      "B",
      "score",
      "TypeError"
    ],
    answer: 1,
    explanation: "sorted sắp xếp theo score tăng dần. Record có score 5 đứng đầu, nên result[0]['name'] là 'B'."
  },
  {
    id: "pyint_i_008",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "any / all",
    question: "Kết quả của đoạn code sau là gì?",
    code: "nums = [2, 4, 6]\nprint(all(x % 2 == 0 for x in nums))",
    options: [
      "True",
      "False",
      "[True, True, True]",
      "TypeError"
    ],
    answer: 0,
    explanation: "Generator expression kiểm tra từng số có chẵn không. Tất cả đều chẵn nên all trả về True."
  },
  {
    id: "pyint_i_009",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "zip",
    question: "Kết quả của đoạn code sau là gì?",
    code: "keys = [\"a\", \"b\"]\nvalues = [1, 2]\nresult = dict(zip(keys, values))\nprint(result)",
    options: [
      "{'a': 1, 'b': 2}",
      "{1: 'a', 2: 'b'}",
      "[('a', 'b'), (1, 2)]",
      "TypeError"
    ],
    answer: 0,
    explanation: "zip ghép key và value theo vị trí, dict chuyển các cặp đó thành dictionary."
  },
  {
    id: "pyint_i_010",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Unpacking",
    question: "Kết quả của đoạn code sau là gì?",
    code: "first, *middle, last = [1, 2, 3, 4]\nprint(first, middle, last)",
    options: [
      "1 [2, 3] 4",
      "[1, 2] 3 4",
      "1 2 [3, 4]",
      "ValueError"
    ],
    answer: 0,
    explanation: "first nhận 1, last nhận 4, *middle nhận các phần tử ở giữa dưới dạng list [2, 3]."
  },
  {
    id: "pyint_i_011",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "*args",
    question: "Kết quả của đoạn code sau là gì?",
    code: "def total(*args):\n    return sum(args)\n\nprint(total(1, 2, 3))",
    options: [
      "1",
      "3",
      "6",
      "TypeError"
    ],
    answer: 2,
    explanation: "*args gom 1, 2, 3 thành tuple. sum(args) trả về 6."
  },
  {
    id: "pyint_i_012",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "**kwargs",
    question: "Kết quả của đoạn code sau là gì?",
    code: "def show(**kwargs):\n    return kwargs[\"x\"]\n\nprint(show(x=10, y=20))",
    options: [
      "10",
      "20",
      "{'x': 10, 'y': 20}",
      "TypeError"
    ],
    answer: 0,
    explanation: "**kwargs gom các keyword arguments thành dictionary. kwargs['x'] là 10."
  },
  {
    id: "pyint_i_013",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Function Design",
    question: "Trong Data Analytics workflow, vì sao nên chia logic xử lý thành các function nhỏ?",
    code: "",
    options: [
      "Để code dễ đọc, dễ test và dễ tái sử dụng",
      "Để Python không cần RAM",
      "Để tránh hoàn toàn mọi lỗi dữ liệu",
      "Để bắt buộc mọi biến thành global"
    ],
    answer: 0,
    explanation: "Function nhỏ giúp tách trách nhiệm rõ ràng, dễ kiểm tra lỗi và tái sử dụng trong nhiều bước xử lý dữ liệu."
  },
  {
    id: "pyint_i_014",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Mutable Default Argument",
    question: "Đoạn code sau có vấn đề gì?",
    code: "def add_item(x, items=[]):\n    items.append(x)\n    return items",
    options: [
      "items là mutable default argument và có thể bị dùng lại giữa các lần gọi",
      "append không dùng được với list",
      "Function không thể return list",
      "x bắt buộc phải là string"
    ],
    answer: 0,
    explanation: "List mặc định được tạo một lần khi định nghĩa function, nên các lần gọi có thể chia sẻ cùng một list."
  },
  {
    id: "pyint_i_015",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Scope & LEGB",
    question: "LEGB mô tả thứ tự Python tìm tên biến theo thứ tự nào?",
    code: "",
    options: [
      "Local, Enclosing, Global, Built-in",
      "List, Enum, Global, Boolean",
      "Local, External, Group, Base",
      "Loop, Exception, Generator, Binary"
    ],
    answer: 0,
    explanation: "LEGB là Local, Enclosing, Global, Built-in. Đây là quy tắc Python dùng để resolve tên biến."
  },
  {
    id: "pyint_i_016",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Closure Basics",
    question: "Closure trong Python thường xảy ra khi nào?",
    code: "",
    options: [
      "Một inner function ghi nhớ biến từ outer function",
      "Một list bị xóa khỏi bộ nhớ",
      "Một file được đóng bằng close()",
      "Một exception bị bỏ qua"
    ],
    answer: 0,
    explanation: "Closure xảy ra khi inner function vẫn tham chiếu và ghi nhớ biến trong scope của outer function sau khi outer function đã chạy xong."
  },
  {
    id: "pyint_i_017",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Iterator",
    question: "Iterator là object có đặc điểm nào?",
    code: "",
    options: [
      "Có thể lấy phần tử tiếp theo bằng next()",
      "Luôn là dictionary",
      "Không thể dùng trong vòng lặp",
      "Chỉ chứa số nguyên"
    ],
    answer: 0,
    explanation: "Iterator là object hỗ trợ lấy phần tử kế tiếp bằng next(). Khi hết phần tử, nó raise StopIteration."
  },
  {
    id: "pyint_i_018",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Iterable",
    question: "Iterable là gì?",
    code: "",
    options: [
      "Object có thể được duyệt qua bằng vòng lặp for",
      "Object chỉ có một phần tử",
      "Object không thể chuyển thành iterator",
      "Object luôn là số"
    ],
    answer: 0,
    explanation: "Iterable là object có thể được lặp qua, ví dụ list, tuple, string, dictionary."
  },
  {
    id: "pyint_i_019",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Generator",
    question: "Ưu điểm chính của generator so với list khi xử lý dữ liệu lớn là gì?",
    code: "",
    options: [
      "Generator có thể tạo giá trị từng phần, tiết kiệm bộ nhớ",
      "Generator luôn chạy nhanh hơn mọi list",
      "Generator tự động sort dữ liệu",
      "Generator không thể dùng vòng lặp"
    ],
    answer: 0,
    explanation: "Generator tạo giá trị lazy, tức sinh từng phần khi cần, nên thường tiết kiệm bộ nhớ hơn list."
  },
  {
    id: "pyint_i_020",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "yield",
    question: "Từ khóa yield dùng để làm gì?",
    code: "",
    options: [
      "Tạo generator bằng cách trả từng giá trị một",
      "Dừng toàn bộ chương trình",
      "Import module",
      "Bắt exception"
    ],
    answer: 0,
    explanation: "yield trả từng giá trị và tạm dừng trạng thái function, biến function đó thành generator."
  },
  {
    id: "pyint_i_021",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Copy vs Reference",
    question: "Kết quả của đoạn code sau là gì?",
    code: "a = [1, 2]\nb = a\nb.append(3)\nprint(a)",
    options: [
      "[1, 2]",
      "[1, 2, 3]",
      "[3]",
      "TypeError"
    ],
    answer: 1,
    explanation: "b = a không copy list, mà tạo thêm tham chiếu đến cùng object. Khi b thay đổi, a cũng thấy thay đổi đó."
  },
  {
    id: "pyint_i_022",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Shallow Copy",
    question: "Cách nào tạo shallow copy của list values?",
    code: "values = [1, 2, 3]",
    options: [
      "copy_values = values",
      "copy_values = values.copy()",
      "copy_values == values",
      "copy_values is values"
    ],
    answer: 1,
    explanation: "values.copy() tạo shallow copy. Gán copy_values = values chỉ tạo thêm một tham chiếu đến cùng list."
  },
  {
    id: "pyint_i_023",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Exception Handling",
    question: "Vì sao không nên dùng except: quá rộng nếu không cần thiết?",
    code: "",
    options: [
      "Vì có thể che giấu lỗi thật và làm debug khó hơn",
      "Vì except không tồn tại trong Python",
      "Vì except chỉ dùng được với file",
      "Vì except làm code không thể chạy"
    ],
    answer: 0,
    explanation: "except quá rộng có thể bắt cả những lỗi không dự kiến, khiến chương trình tiếp tục chạy sai mà khó phát hiện nguyên nhân."
  },
  {
    id: "pyint_i_024",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "try / except",
    question: "Đoạn code nào bắt riêng lỗi chia cho 0?",
    code: "",
    options: [
      "except ZeroDivisionError:",
      "except FileNotFoundError:",
      "except KeyError:",
      "except IndexError:"
    ],
    answer: 0,
    explanation: "ZeroDivisionError là exception xảy ra khi chia cho 0, ví dụ 10 / 0."
  },
  {
    id: "pyint_i_025",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "else / finally",
    question: "Trong try/except, block finally chạy khi nào?",
    code: "",
    options: [
      "Chỉ khi không có lỗi",
      "Chỉ khi có lỗi",
      "Luôn chạy sau try/except, dù có lỗi hay không",
      "Không bao giờ chạy"
    ],
    answer: 2,
    explanation: "finally luôn chạy sau try/except, thường dùng để cleanup tài nguyên như đóng kết nối hoặc file."
  },
  {
    id: "pyint_i_026",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "Raising Exceptions",
    question: "Câu lệnh nào dùng để chủ động raise exception?",
    code: "",
    options: [
      "raise ValueError(\"Invalid value\")",
      "except ValueError(\"Invalid value\")",
      "throw ValueError(\"Invalid value\")",
      "error ValueError(\"Invalid value\")"
    ],
    answer: 0,
    explanation: "Python dùng từ khóa raise để chủ động phát sinh exception."
  },
  {
    id: "pyint_i_027",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "JSON Basics",
    question: "Module chuẩn nào thường dùng để đọc và ghi JSON trong Python?",
    code: "",
    options: [
      "json",
      "csv",
      "pathlib",
      "logging"
    ],
    answer: 0,
    explanation: "Module json trong standard library dùng để parse JSON string và đọc/ghi dữ liệu JSON."
  },
  {
    id: "pyint_i_028",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "CSV Basics",
    question: "Module chuẩn nào có thể dùng để đọc file CSV cơ bản trong Python?",
    code: "",
    options: [
      "csv",
      "json",
      "random",
      "math"
    ],
    answer: 0,
    explanation: "Module csv thuộc standard library và dùng để đọc/ghi CSV cơ bản."
  },
  {
    id: "pyint_i_029",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "pathlib Basics",
    question: "Ưu điểm của pathlib so với nối path bằng string thủ công là gì?",
    code: "",
    options: [
      "Code xử lý đường dẫn rõ ràng hơn và ít phụ thuộc dấu / hoặc \\\\ hơn",
      "pathlib chỉ dùng cho JSON",
      "pathlib tự động phân tích dữ liệu",
      "pathlib thay thế hoàn toàn pandas"
    ],
    answer: 0,
    explanation: "pathlib cung cấp object Path giúp nối và xử lý đường dẫn rõ ràng, dễ đọc và portable hơn so với nối string thủ công."
  },
  {
    id: "pyint_i_030",
    library: "Python Intermediate",
    level: "Intermediate",
    topic: "__name__ == \"__main__\"",
    question: "Mục đích phổ biến của if __name__ == \"__main__\": là gì?",
    code: "",
    options: [
      "Chỉ chạy một phần code khi file được chạy trực tiếp, không chạy khi import",
      "Tạo package mới",
      "Bắt lỗi import",
      "Tự động cài thư viện"
    ],
    answer: 0,
    explanation: "Block này giúp tách code chạy trực tiếp khỏi code được import như module."
  },
  {
    id: "pyint_a_001",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Generator",
    question: "Kết quả của đoạn code sau là gì?",
    code: "gen = (x * 2 for x in [1, 2, 3])\nprint(next(gen))\nprint(next(gen))",
    options: [
      "2 rồi 4",
      "1 rồi 2",
      "[2, 4, 6]",
      "StopIteration ngay lập tức"
    ],
    answer: 0,
    explanation: "Generator expression sinh giá trị từng lần. next đầu trả 2, next tiếp theo trả 4."
  },
  {
    id: "pyint_a_002",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Iterator",
    question: "Kết quả của đoạn code sau là gì?",
    code: "it = iter([10, 20])\nprint(next(it))\nprint(next(it))",
    options: [
      "10 rồi 20",
      "20 rồi 10",
      "[10, 20] rồi [10, 20]",
      "TypeError"
    ],
    answer: 0,
    explanation: "iter([10, 20]) tạo iterator. Mỗi lần next lấy phần tử kế tiếp: 10 rồi 20."
  },
  {
    id: "pyint_a_003",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Memory Efficiency",
    question: "Khi xử lý file rất lớn, cách nào thường tiết kiệm bộ nhớ hơn?",
    code: "",
    options: [
      "Đọc từng dòng bằng vòng lặp trên file object",
      "Đọc toàn bộ file bằng read() ngay lập tức",
      "Copy file thành nhiều list",
      "Chuyển toàn bộ file thành string trước khi xử lý"
    ],
    answer: 0,
    explanation: "Duyệt từng dòng giúp xử lý streaming và tránh nạp toàn bộ file lớn vào bộ nhớ."
  },
  {
    id: "pyint_a_004",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Deep Copy",
    question: "Khi nào cần cân nhắc deepcopy thay vì shallow copy?",
    code: "",
    options: [
      "Khi object có cấu trúc lồng nhau và cần copy độc lập cả object con",
      "Khi chỉ copy số nguyên",
      "Khi muốn hai biến luôn trỏ cùng object",
      "Khi muốn xóa biến gốc"
    ],
    answer: 0,
    explanation: "deepcopy tạo bản sao độc lập cho cả object lồng bên trong, phù hợp khi dữ liệu nested cần được chỉnh sửa độc lập."
  },
  {
    id: "pyint_a_005",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Shallow Copy",
    question: "Kết quả của đoạn code sau là gì?",
    code: "a = [[1], [2]]\nb = a.copy()\nb[0].append(99)\nprint(a)",
    options: [
      "[[1], [2]]",
      "[[1, 99], [2]]",
      "[[99], [2]]",
      "TypeError"
    ],
    answer: 1,
    explanation: "a.copy() là shallow copy. List con bên trong vẫn được chia sẻ, nên append vào b[0] cũng làm a[0] thay đổi."
  },
  {
    id: "pyint_a_006",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Mutable Default Argument",
    question: "Cách sửa nào phù hợp cho mutable default argument?",
    code: "def add_item(x, items=[]):\n    items.append(x)\n    return items",
    options: [
      "def add_item(x, items=None):\n    if items is None:\n        items = []\n    items.append(x)\n    return items",
      "def add_item(x, items={}):\n    items.append(x)\n    return items",
      "def add_item(x, items=[]):\n    return x",
      "def add_item(x):\n    items.append(x)\n    return items"
    ],
    answer: 0,
    explanation: "Dùng None làm default rồi tạo list mới bên trong function giúp tránh việc dùng lại cùng một list giữa các lần gọi."
  },
  {
    id: "pyint_a_007",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Closure Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "def make_multiplier(n):\n    def multiply(x):\n        return x * n\n    return multiply\n\ndouble = make_multiplier(2)\nprint(double(5))",
    options: [
      "5",
      "10",
      "2",
      "NameError"
    ],
    answer: 1,
    explanation: "multiply ghi nhớ giá trị n từ outer function. double là function nhân với 2, nên double(5) trả về 10."
  },
  {
    id: "pyint_a_008",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Decorator Basics",
    question: "Decorator trong Python thường dùng để làm gì?",
    code: "",
    options: [
      "Bọc thêm hành vi cho function mà không sửa trực tiếp logic gốc",
      "Chỉ dùng để tạo list",
      "Chỉ dùng để đọc CSV",
      "Thay thế toàn bộ exception handling"
    ],
    answer: 0,
    explanation: "Decorator nhận function và trả về function đã được bọc thêm hành vi, ví dụ logging, timing hoặc validation."
  },
  {
    id: "pyint_a_009",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Exception Handling",
    question: "Trong try/except/else, block else chạy khi nào?",
    code: "",
    options: [
      "Khi try không phát sinh exception",
      "Khi except bắt được lỗi",
      "Luôn chạy dù có lỗi hay không",
      "Chỉ chạy trước try"
    ],
    answer: 0,
    explanation: "else chạy nếu block try hoàn tất mà không có exception. finally mới là block luôn chạy."
  },
  {
    id: "pyint_a_010",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Custom Error Message",
    question: "Cách nào tạo thông báo lỗi rõ ràng khi input không hợp lệ?",
    code: "",
    options: [
      "raise ValueError(\"amount must be non-negative\")",
      "print(\"error\") rồi bỏ qua",
      "return None trong mọi trường hợp",
      "except: pass"
    ],
    answer: 0,
    explanation: "raise ValueError với message rõ ràng giúp người dùng hoặc developer hiểu nguyên nhân lỗi và xử lý tốt hơn."
  },
  {
    id: "pyint_a_011",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "File Handling",
    question: "Vì sao nên dùng encoding khi đọc/ghi text file?",
    code: "with open(path, \"r\", encoding=\"utf-8\") as f:\n    text = f.read()",
    options: [
      "Để giảm rủi ro lỗi ký tự khi file có nội dung không phải ASCII",
      "Để file tự động thành JSON",
      "Để xóa file sau khi đọc",
      "Để bỏ qua mọi lỗi logic"
    ],
    answer: 0,
    explanation: "Chỉ định encoding như utf-8 giúp xử lý ký tự ổn định hơn, đặc biệt khi dữ liệu có dấu hoặc ký tự quốc tế."
  },
  {
    id: "pyint_a_012",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "JSON Basics",
    question: "Hàm nào dùng để chuyển JSON string thành Python object?",
    code: "import json\ntext = '{\"x\": 1}'",
    options: [
      "json.loads(text)",
      "json.dumps(text)",
      "json.read(text)",
      "json.to_dict(text)"
    ],
    answer: 0,
    explanation: "json.loads() parse JSON string thành Python object. json.dumps() làm chiều ngược lại: chuyển object thành JSON string."
  },
  {
    id: "pyint_a_013",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "JSON Basics",
    question: "Hàm nào dùng để chuyển Python object thành JSON string?",
    code: "import json\ndata = {\"x\": 1}",
    options: [
      "json.loads(data)",
      "json.dumps(data)",
      "json.parse(data)",
      "json.read(data)"
    ],
    answer: 1,
    explanation: "json.dumps() chuyển Python object như dict/list thành JSON string."
  },
  {
    id: "pyint_a_014",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Import Patterns",
    question: "Vì sao thường tránh import * trong code production hoặc analytics project lớn?",
    code: "",
    options: [
      "Vì làm namespace khó kiểm soát và khó biết object đến từ đâu",
      "Vì Python không hỗ trợ import *",
      "Vì import * luôn làm sai kết quả tính toán",
      "Vì import * chỉ dùng cho file CSV"
    ],
    answer: 0,
    explanation: "import * đưa nhiều tên vào namespace hiện tại, dễ gây conflict và làm code khó đọc, khó debug."
  },
  {
    id: "pyint_a_015",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Packages",
    question: "Package trong Python thường khác module ở điểm nào?",
    code: "",
    options: [
      "Package là thư mục chứa các module liên quan",
      "Package luôn là một biến string",
      "Package chỉ dùng để bắt lỗi",
      "Package không thể import"
    ],
    answer: 0,
    explanation: "Module thường là một file .py. Package thường là thư mục chứa nhiều module liên quan để tổ chức code tốt hơn."
  },
  {
    id: "pyint_a_016",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Logging Basics",
    question: "Vì sao logging thường phù hợp hơn print trong script xử lý dữ liệu định kỳ?",
    code: "",
    options: [
      "Logging hỗ trợ level, timestamp, output ra file và kiểm soát tốt hơn",
      "Logging làm code không bao giờ lỗi",
      "Logging tự động sửa dữ liệu sai",
      "Logging thay thế được toàn bộ test"
    ],
    answer: 0,
    explanation: "logging giúp ghi lại quá trình chạy có cấu trúc hơn print, ví dụ INFO, WARNING, ERROR và ghi ra file log."
  },
  {
    id: "pyint_a_017",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Debugging Basics",
    question: "Khi debug một lỗi dữ liệu, bước nào thường hợp lý nhất?",
    code: "",
    options: [
      "Kiểm tra shape/schema/sample input ở từng bước xử lý",
      "Xóa toàn bộ exception",
      "Dùng except: pass để bỏ qua lỗi",
      "Chỉ nhìn output cuối cùng"
    ],
    answer: 0,
    explanation: "Kiểm tra dữ liệu ở từng bước giúp khoanh vùng lỗi nhanh hơn, đặc biệt trong pipeline phân tích dữ liệu."
  },
  {
    id: "pyint_a_018",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Performance Basics",
    question: "Trong Python thuần, vì sao nên tránh nối list lớn bằng cách tạo list mới liên tục trong vòng lặp nếu không cần?",
    code: "",
    options: [
      "Vì có thể tạo nhiều object trung gian và tốn bộ nhớ/thời gian",
      "Vì Python không hỗ trợ list lớn",
      "Vì list không thể chứa nhiều kiểu dữ liệu",
      "Vì vòng lặp for không chạy với list"
    ],
    answer: 0,
    explanation: "Tạo nhiều object trung gian trong vòng lặp có thể làm code chậm và tốn bộ nhớ. Nên dùng append/extend hoặc cách phù hợp hơn."
  },
  {
    id: "pyint_a_019",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Common Errors",
    question: "Vấn đề chính khi sửa list trong lúc đang loop trực tiếp trên chính list đó là gì?",
    code: "",
    options: [
      "Có thể bỏ sót phần tử hoặc tạo hành vi khó đoán",
      "Python luôn báo SyntaxError",
      "List sẽ tự động chuyển thành tuple",
      "Không thể dùng if trong loop"
    ],
    answer: 0,
    explanation: "Khi xóa/thêm phần tử trong list đang được duyệt, index và nội dung list thay đổi, dễ dẫn đến bỏ sót phần tử hoặc lỗi logic."
  },
  {
    id: "pyint_a_020",
    library: "Python Intermediate",
    level: "Advanced",
    topic: "Best Practice for Data Analytics Python Code",
    question: "Best practice nào phù hợp khi viết script xử lý dữ liệu có nhiều bước?",
    code: "",
    options: [
      "Tách bước load, transform, validate, export thành function rõ ràng",
      "Viết toàn bộ logic vào một dòng duy nhất",
      "Dùng biến global cho mọi dữ liệu trung gian",
      "Bỏ qua validation để code ngắn hơn"
    ],
    answer: 0,
    explanation: "Tách pipeline thành các function rõ trách nhiệm giúp code dễ đọc, dễ test, dễ debug và dễ tái sử dụng."
  },
  {
    id: "pyint_e_001",
    library: "Python Intermediate",
    level: "Expert",
    topic: "Iterator vs Iterable",
    question: "Kết quả của đoạn code sau là gì?",
    code: "values = [1, 2]\nit = iter(values)\nprint(iter(it) is it)",
    options: [
      "True",
      "False",
      "TypeError",
      "None"
    ],
    answer: 0,
    explanation: "Iterator thường trả về chính nó khi gọi iter(iterator), nên iter(it) is it là True."
  },
  {
    id: "pyint_e_002",
    library: "Python Intermediate",
    level: "Expert",
    topic: "Generator",
    question: "Kết quả của đoạn code sau là gì?",
    code: "gen = (x for x in [1, 2])\nprint(list(gen))\nprint(list(gen))",
    options: [
      "[1, 2] rồi [1, 2]",
      "[1, 2] rồi []",
      "[] rồi [1, 2]",
      "TypeError"
    ],
    answer: 1,
    explanation: "Generator bị consume sau khi duyệt. Lần list(gen) đầu lấy hết giá trị, lần thứ hai không còn gì nên trả []."
  },
  {
    id: "pyint_e_003",
    library: "Python Intermediate",
    level: "Expert",
    topic: "Closure Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "funcs = []\nfor i in range(3):\n    funcs.append(lambda: i)\n\nprint([f() for f in funcs])",
    options: [
      "[0, 1, 2]",
      "[2, 2, 2]",
      "[1, 1, 1]",
      "NameError"
    ],
    answer: 1,
    explanation: "Lambda đóng trên biến i, không đóng trên giá trị hiện tại của i ở mỗi vòng. Sau loop, i bằng 2 nên cả ba function trả về 2."
  },
  {
    id: "pyint_e_004",
    library: "Python Intermediate",
    level: "Expert",
    topic: "Exception Handling",
    question: "Trong code xử lý dữ liệu, vì sao except Exception as e: rồi chỉ pass thường là anti-pattern?",
    code: "",
    options: [
      "Vì nó che giấu lỗi và làm pipeline có thể tiếp tục với trạng thái sai",
      "Vì Python không cho phép dùng Exception",
      "Vì pass luôn gây SyntaxError",
      "Vì exception chỉ dùng cho OOP"
    ],
    answer: 0,
    explanation: "Bỏ qua lỗi mà không log hoặc xử lý phù hợp khiến lỗi thật bị ẩn, dữ liệu output có thể sai mà không ai biết."
  },
  {
    id: "pyint_e_005",
    library: "Python Intermediate",
    level: "Expert",
    topic: "Decorator Basics",
    question: "Mô tả nào đúng nhất về decorator @decorator đặt trên function f?",
    code: "@decorator\ndef f():\n    return 1",
    options: [
      "Tương đương với f = decorator(f)",
      "Tương đương với decorator = f(decorator)",
      "Làm f tự động trở thành class",
      "Chỉ là comment, không ảnh hưởng gì"
    ],
    answer: 0,
    explanation: "Cú pháp @decorator phía trên function tương đương với việc truyền function đó vào decorator rồi gán kết quả lại cho tên function."
  }
];