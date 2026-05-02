const NUMPY_QUESTIONS = [
  {
    id: "np_f_001",
    library: "NumPy",
    level: "Foundation",
    topic: "Array Creation",
    question: "Alias phổ biến nhất khi import NumPy là gì?",
    code: "import numpy as ?",
    options: ["pd", "np", "plt", "sns"],
    answer: 1,
    explanation: "NumPy thường được import bằng alias np: import numpy as np. pd dùng cho pandas, plt cho matplotlib.pyplot, sns cho seaborn."
  },
  {
    id: "np_f_002",
    library: "NumPy",
    level: "Foundation",
    topic: "Array Creation",
    question: "Hàm nào thường dùng để tạo ndarray từ Python list?",
    code: "import numpy as np\narr = np.array([1, 2, 3])",
    options: ["np.asarray_list()", "np.array()", "np.ndarray()", "np.to_numpy()"],
    answer: 1,
    explanation: "np.array() dùng để tạo ndarray từ list hoặc các object dạng sequence. np.to_numpy() thường là method của pandas object, không phải hàm NumPy phổ biến để tạo array từ list."
  },
  {
    id: "np_f_003",
    library: "NumPy",
    level: "Foundation",
    topic: "ndarray Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3])\nprint(type(arr).__name__)",
    options: ["list", "array", "ndarray", "Series"],
    answer: 2,
    explanation: "np.array tạo ra object kiểu numpy.ndarray. type(arr).__name__ trả về tên class là ndarray. Python list có type là list, còn Series thuộc pandas."
  },
  {
    id: "np_f_004",
    library: "NumPy",
    level: "Foundation",
    topic: "Shape & Dimension",
    question: "Thuộc tính nào cho biết kích thước theo từng chiều của ndarray?",
    code: "import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])",
    options: ["arr.ndim", "arr.shape", "arr.size", "arr.dtype"],
    answer: 1,
    explanation: "arr.shape trả về tuple mô tả số phần tử theo từng chiều, ví dụ (2, 3). arr.size là thuộc tính tổng số phần tử, không phải method."
  },
  {
    id: "np_f_005",
    library: "NumPy",
    level: "Foundation",
    topic: "Shape & Dimension",
    question: "Kết quả của arr.ndim trong đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[1, 2], [3, 4], [5, 6]])\nprint(arr.ndim)",
    options: ["1", "2", "3", "6"],
    answer: 1,
    explanation: "arr là mảng 2 chiều vì có dạng hàng và cột. ndim trả về số chiều, nên kết quả là 2."
  },
  {
    id: "np_f_006",
    library: "NumPy",
    level: "Foundation",
    topic: "Shape & Dimension",
    question: "Kết quả của arr.shape trong đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr.shape)",
    options: ["(3, 2)", "(2, 3)", "(6,)", "(2, 2)"],
    answer: 1,
    explanation: "Mảng có 2 hàng và 3 cột, nên shape là (2, 3)."
  },
  {
    id: "np_f_007",
    library: "NumPy",
    level: "Foundation",
    topic: "dtype",
    question: "dtype của ndarray dùng để làm gì?",
    code: "",
    options: [
      "Cho biết số chiều của array",
      "Cho biết kiểu dữ liệu của phần tử",
      "Cho biết tổng số phần tử",
      "Cho biết array đã được sort chưa"
    ],
    answer: 1,
    explanation: "dtype mô tả kiểu dữ liệu của các phần tử, ví dụ int64, float64, bool. Số chiều dùng ndim, tổng số phần tử dùng size."
  },
  {
    id: "np_f_008",
    library: "NumPy",
    level: "Foundation",
    topic: "dtype",
    question: "Kết quả hợp lý nhất của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3.5])\nprint(arr.dtype.kind)",
    options: ["i", "f", "b", "U"],
    answer: 1,
    explanation: "Vì có 3.5 là số thực, NumPy sẽ upcast các phần tử thành float. dtype.kind của float là 'f'."
  },
  {
    id: "np_f_009",
    library: "NumPy",
    level: "Foundation",
    topic: "Array Creation",
    question: "Hàm nào tạo array gồm toàn số 0?",
    code: "import numpy as np\narr = np.?(3)",
    options: ["np.zeros", "np.ones", "np.empty", "np.arange"],
    answer: 0,
    explanation: "np.zeros tạo array toàn số 0. np.ones tạo toàn số 1, np.empty tạo array chưa khởi tạo giá trị rõ ràng, np.arange tạo dãy số."
  },
  {
    id: "np_f_010",
    library: "NumPy",
    level: "Foundation",
    topic: "Array Creation",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.arange(2, 8, 2)\nprint(arr.tolist())",
    options: ["[2, 4, 6]", "[2, 4, 6, 8]", "[0, 2, 4, 6]", "[2, 3, 4, 5]"],
    answer: 0,
    explanation: "np.arange(start, stop, step) tạo dãy từ start đến trước stop. Vì stop=8 không được lấy, kết quả là [2, 4, 6]."
  },
  {
    id: "np_f_011",
    library: "NumPy",
    level: "Foundation",
    topic: "Indexing & Slicing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([10, 20, 30, 40])\nprint(arr[1])",
    options: ["10", "20", "30", "40"],
    answer: 1,
    explanation: "NumPy dùng zero-based indexing giống Python list. arr[1] là phần tử thứ hai, có giá trị 20."
  },
  {
    id: "np_f_012",
    library: "NumPy",
    level: "Foundation",
    topic: "Indexing & Slicing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([10, 20, 30, 40, 50])\nprint(arr[1:4].tolist())",
    options: ["[10, 20, 30]", "[20, 30, 40]", "[30, 40, 50]", "[10, 20, 30, 40]"],
    answer: 1,
    explanation: "Slicing [1:4] lấy từ index 1 đến trước index 4, nên kết quả là [20, 30, 40]."
  },
  {
    id: "np_f_013",
    library: "NumPy",
    level: "Foundation",
    topic: "Aggregation",
    question: "Hàm nào tính trung bình cộng của các phần tử trong array?",
    code: "import numpy as np\narr = np.array([1, 2, 3])",
    options: ["np.median(arr)", "np.mean(arr)", "np.sum(arr)", "np.average_all(arr)"],
    answer: 1,
    explanation: "np.mean(arr) tính trung bình cộng. np.avg, np.middle và np.total không phải hàm chuẩn tương ứng trong NumPy."
  },
  {
    id: "np_f_014",
    library: "NumPy",
    level: "Foundation",
    topic: "Aggregation",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(np.sum(arr))",
    options: ["4", "10", "24", "[1, 2, 3, 4]"],
    answer: 1,
    explanation: "np.sum cộng tất cả phần tử nếu không truyền axis. 1 + 2 + 3 + 4 = 10."
  },
  {
    id: "np_f_015",
    library: "NumPy",
    level: "Foundation",
    topic: "Vectorization",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3])\nprint((arr * 2).tolist())",
    options: ["[1, 2, 3, 1, 2, 3]", "[2, 4, 6]", "[3, 4, 5]", "[1, 4, 9]"],
    answer: 1,
    explanation: "Với ndarray, phép nhân với scalar được áp dụng theo từng phần tử. Đây là khác biệt quan trọng so với Python list, nơi list * 2 sẽ lặp list."
  },
  {
    id: "np_f_016",
    library: "NumPy",
    level: "Foundation",
    topic: "Boolean Masking",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3, 4])\nmask = arr > 2\nprint(mask.tolist())",
    options: ["[False, False, True, True]", "[True, True, False, False]", "[False, True, True, True]", "[True, False, True, False]"],
    answer: 0,
    explanation: "arr > 2 trả về boolean array theo từng phần tử. Chỉ 3 và 4 lớn hơn 2, nên mask là [False, False, True, True]."
  },
  {
    id: "np_f_017",
    library: "NumPy",
    level: "Foundation",
    topic: "Boolean Masking",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3, 4])\nprint(arr[arr > 2].tolist())",
    options: ["[False, False, True, True]", "[1, 2]", "[3, 4]", "[2, 3, 4]"],
    answer: 2,
    explanation: "arr[arr > 2] lọc các phần tử thỏa điều kiện lớn hơn 2, nên kết quả là [3, 4]."
  },
  {
    id: "np_f_018",
    library: "NumPy",
    level: "Foundation",
    topic: "Reshape & Flatten",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.arange(6).reshape(2, 3)\nprint(arr.shape)",
    options: ["(6,)", "(3, 2)", "(2, 3)", "(2, 2)"],
    answer: 2,
    explanation: "np.arange(6) có 6 phần tử. reshape(2, 3) chuyển thành mảng 2 hàng, 3 cột."
  },
  {
    id: "np_f_019",
    library: "NumPy",
    level: "Foundation",
    topic: "Missing / NaN Handling",
    question: "Trong NumPy, giá trị nào thường dùng để biểu diễn missing value trong array số thực?",
    code: "import numpy as np",
    options: ["np.null", "np.nan", "np.missing", "np.none"],
    answer: 1,
    explanation: "np.nan thường dùng để biểu diễn missing value trong numeric array dạng float. None có thể làm array chuyển sang dtype object, không phải lựa chọn chuẩn cho tính toán số."
  },
  {
    id: "np_f_020",
    library: "NumPy",
    level: "Foundation",
    topic: "Random",
    question: "Hàm nào dưới đây tạo 3 số ngẫu nhiên phân phối đều trong khoảng [0, 1)?",
    code: "import numpy as np",
    options: ["np.random.random(3)", "np.random.zeros(3)", "np.random.arange(3)", "np.random.sample_int(3)"],
    answer: 0,
    explanation: "np.random.random(3) tạo 3 số ngẫu nhiên trong khoảng [0, 1). Các lựa chọn còn lại không có ý nghĩa tương ứng."
  },
  {
    id: "np_i_001",
    library: "NumPy",
    level: "Intermediate",
    topic: "Axis Logic",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(np.sum(arr, axis=0).tolist())",
    options: ["[6, 15]", "[5, 7, 9]", "[1, 2, 3]", "[4, 5, 6]"],
    answer: 1,
    explanation: "axis=0 nghĩa là gộp theo chiều hàng, tính tổng theo từng cột. Kết quả là [1+4, 2+5, 3+6] = [5, 7, 9]."
  },
  {
    id: "np_i_002",
    library: "NumPy",
    level: "Intermediate",
    topic: "Axis Logic",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(np.sum(arr, axis=1).tolist())",
    options: ["[5, 7, 9]", "[6, 15]", "[1, 5, 6]", "[21]"],
    answer: 1,
    explanation: "axis=1 nghĩa là tính theo từng hàng. Hàng đầu: 1+2+3=6, hàng hai: 4+5+6=15."
  },
  {
    id: "np_i_003",
    library: "NumPy",
    level: "Intermediate",
    topic: "Broadcasting",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\na = np.array([[1, 2, 3], [4, 5, 6]])\nb = np.array([10, 20, 30])\nprint((a + b).tolist())",
    options: ["[[11, 22, 33], [14, 25, 36]]", "[[11, 12, 13], [24, 25, 26]]", "[[10, 20, 30], [11, 22, 33]]", "[[1, 2, 3], [14, 25, 36]]"],
    answer: 0,
    explanation: "b có shape (3,) được broadcast theo từng hàng của a có shape (2, 3). Kết quả là cộng từng cột tương ứng."
  },
  {
    id: "np_i_004",
    library: "NumPy",
    level: "Intermediate",
    topic: "Broadcasting",
    question: "Hai shape nào dưới đây broadcast được với nhau?",
    code: "",
    options: ["(3, 4) và (4,)", "(3, 4) và (3,)", "(2, 3) và (2,)", "(5, 2) và (5,)"],
    answer: 0,
    explanation: "Broadcasting so sánh từ chiều cuối. (3, 4) và (4,) tương thích vì chiều cuối đều là 4, chiều thiếu được xem như 1. Các option còn lại có chiều cuối không khớp và không phải 1."
  },
  {
    id: "np_i_005",
    library: "NumPy",
    level: "Intermediate",
    topic: "Indexing & Slicing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[10, 20, 30], [40, 50, 60]])\nprint(arr[1, 2])",
    options: ["20", "30", "50", "60"],
    answer: 3,
    explanation: "arr[1, 2] lấy hàng index 1 và cột index 2, tức phần tử 60."
  },
  {
    id: "np_i_006",
    library: "NumPy",
    level: "Intermediate",
    topic: "Indexing & Slicing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr[:, 1].tolist())",
    options: ["[1, 4]", "[2, 5]", "[3, 6]", "[4, 5]"],
    answer: 1,
    explanation: "arr[:, 1] lấy tất cả hàng ở cột index 1. Kết quả là [2, 5]."
  },
  {
    id: "np_i_007",
    library: "NumPy",
    level: "Intermediate",
    topic: "Boolean Masking",
    question: "Cách đúng để lọc các phần tử lớn hơn 2 và nhỏ hơn 5 là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3, 4, 5, 6])",
    options: ["arr[arr > 2 and arr < 5]", "arr[(arr > 2) & (arr < 5)]", "arr[arr > (2 & arr) < 5]", "arr[(arr > 2) && (arr < 5)]"],
    answer: 1,
    explanation: "Với NumPy boolean array, dùng toán tử & và cần ngoặc quanh từng điều kiện. and dùng cho boolean scalar, không dùng trực tiếp cho array."
  },
  {
    id: "np_i_008",
    library: "NumPy",
    level: "Intermediate",
    topic: "Fancy Indexing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([10, 20, 30, 40])\nidx = [3, 0, 2]\nprint(arr[idx].tolist())",
    options: ["[40, 10, 30]", "[10, 30, 40]", "[3, 0, 2]", "[30, 10, 40]"],
    answer: 0,
    explanation: "Fancy indexing cho phép dùng list hoặc array index để lấy phần tử theo thứ tự chỉ định. arr[[3,0,2]] là [40,10,30]."
  },
  {
    id: "np_i_009",
    library: "NumPy",
    level: "Intermediate",
    topic: "Fancy Indexing",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[1, 2], [3, 4], [5, 6]])\nprint(arr[[0, 2], [1, 0]].tolist())",
    options: ["[[1, 2], [5, 6]]", "[2, 5]", "[1, 6]", "[[2], [5]]"],
    answer: 1,
    explanation: "arr[[0,2], [1,0]] lấy các cặp tọa độ (0,1) và (2,0), nên kết quả là [2, 5]."
  },
  {
    id: "np_i_010",
    library: "NumPy",
    level: "Intermediate",
    topic: "Copy vs View",
    question: "Điều gì xảy ra sau đoạn code sau?",
    code: "import numpy as np\narr = np.array([1, 2, 3, 4])\nview = arr[1:3]\nview[0] = 99\nprint(arr.tolist())",
    options: ["[1, 2, 3, 4]", "[1, 99, 3, 4]", "[99, 2, 3, 4]", "[1, 2, 99, 4]"],
    answer: 1,
    explanation: "Slice cơ bản thường tạo view, không phải copy. Sửa view[0] tương ứng với arr[1], nên arr thành [1, 99, 3, 4]."
  },
  {
    id: "np_i_011",
    library: "NumPy",
    level: "Intermediate",
    topic: "Copy vs View",
    question: "Cách nào đảm bảo tạo bản sao độc lập của một slice?",
    code: "import numpy as np\narr = np.array([1, 2, 3, 4])",
    options: ["part = arr[1:3]", "part = arr[1:3].copy()", "part = arr[1:3].view()", "part = np.asarray(arr[1:3])"],
    answer: 1,
    explanation: ".copy() tạo bản sao độc lập. Nếu chỉ dùng arr[1:3], kết quả thường là view và thay đổi có thể ảnh hưởng array gốc."
  },
  {
    id: "np_i_012",
    library: "NumPy",
    level: "Intermediate",
    topic: "Reshape & Flatten",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.arange(6)\nprint(arr.reshape(3, 2).tolist())",
    options: ["[[0, 1, 2], [3, 4, 5]]", "[[0, 1], [2, 3], [4, 5]]", "[[1, 2], [3, 4], [5, 6]]", "[[0, 2], [1, 3], [4, 5]]"],
    answer: 1,
    explanation: "np.arange(6) tạo [0,1,2,3,4,5]. reshape(3,2) tạo 3 hàng, 2 cột: [[0,1],[2,3],[4,5]]."
  },
  {
    id: "np_i_013",
    library: "NumPy",
    level: "Intermediate",
    topic: "Reshape & Flatten",
    question: "Ý nghĩa của -1 trong reshape là gì?",
    code: "import numpy as np\narr = np.arange(12)\narr.reshape(3, -1)",
    options: [
      "Xóa chiều đó khỏi array",
      "Tự suy ra kích thước phù hợp",
      "Đảo ngược thứ tự của array",
      "Ép toàn bộ array về 1 chiều"
    ],
    answer: 1,
    explanation: "-1 cho NumPy tự suy ra kích thước còn lại dựa trên tổng số phần tử. Với 12 phần tử và 3 hàng, số cột được suy ra là 4."
  },
  {
    id: "np_i_014",
    library: "NumPy",
    level: "Intermediate",
    topic: "Concatenate / Stack / Split",
    question: "Kết quả shape của đoạn code sau là gì?",
    code: "import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nc = np.stack([a, b])\nprint(c.shape)",
    options: ["(6,)", "(2, 3)", "(3, 2)", "(1, 6)"],
    answer: 1,
    explanation: "np.stack tạo thêm một axis mới. Stack hai array shape (3,) theo axis mặc định 0 sẽ tạo shape (2, 3)."
  },
  {
    id: "np_i_015",
    library: "NumPy",
    level: "Intermediate",
    topic: "Concatenate / Stack / Split",
    question: "Khác biệt chính giữa np.concatenate và np.stack là gì?",
    code: "",
    options: [
      "concatenate nối axis có sẵn, stack tạo axis mới",
      "concatenate tạo axis mới, stack nối axis có sẵn",
      "concatenate chỉ dùng cho list, stack chỉ dùng ndarray",
      "concatenate luôn sort dữ liệu, stack giữ nguyên thứ tự"
    ],
    answer: 0,
    explanation: "np.concatenate nối các array theo một axis hiện có. np.stack gom các array bằng cách tạo thêm một chiều mới."
  },
  {
    id: "np_i_016",
    library: "NumPy",
    level: "Intermediate",
    topic: "Sorting",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([3, 1, 2])\nprint(np.sort(arr).tolist())\nprint(arr.tolist())",
    options: ["[1, 2, 3] và [3, 1, 2]", "[1, 2, 3] và [1, 2, 3]", "[3, 2, 1] và [3, 1, 2]", "[3, 1, 2] và [1, 2, 3]"],
    answer: 0,
    explanation: "np.sort(arr) trả về array đã sort và không sửa arr gốc. Nếu muốn sort inplace có thể dùng arr.sort()."
  },
  {
    id: "np_i_017",
    library: "NumPy",
    level: "Intermediate",
    topic: "Sorting",
    question: "np.argsort(arr) trả về gì?",
    code: "import numpy as np\narr = np.array([30, 10, 20])\nprint(np.argsort(arr).tolist())",
    options: ["[10, 20, 30]", "[1, 2, 0]", "[0, 1, 2]", "[2, 1, 0]"],
    answer: 1,
    explanation: "np.argsort trả về index sẽ sắp xếp array tăng dần. Giá trị 10 ở index 1, 20 ở index 2, 30 ở index 0, nên kết quả là [1, 2, 0]."
  },
  {
    id: "np_i_018",
    library: "NumPy",
    level: "Intermediate",
    topic: "Missing / NaN Handling",
    question: "Kết quả của np.mean với array có np.nan thường là gì?",
    code: "import numpy as np\narr = np.array([1.0, np.nan, 3.0])\nprint(np.mean(arr))",
    options: ["2.0", "nan", "0.0", "3.0"],
    answer: 1,
    explanation: "np.mean không tự bỏ qua NaN. Nếu array có NaN, kết quả thường là nan. Muốn bỏ qua NaN có thể dùng np.nanmean."
  },
  {
    id: "np_i_019",
    library: "NumPy",
    level: "Intermediate",
    topic: "Missing / NaN Handling",
    question: "Hàm nào tính trung bình và bỏ qua np.nan?",
    code: "import numpy as np\narr = np.array([1.0, np.nan, 3.0])",
    options: ["np.mean(arr)", "np.nanmean(arr)", "np.skipmean(arr)", "np.mean_na(arr)"],
    answer: 1,
    explanation: "np.nanmean bỏ qua giá trị NaN khi tính trung bình. skipna=True là tham số quen thuộc trong pandas, không phải cách dùng chuẩn của np.mean."
  },
  {
    id: "np_i_020",
    library: "NumPy",
    level: "Intermediate",
    topic: "Random",
    question: "Cách hiện đại được khuyến nghị để tạo random generator riêng trong NumPy là gì?",
    code: "import numpy as np",
    options: ["rng = np.random.default_rng(42)", "rng = np.random.RandomState(42)", "rng = np.random.seed(42)", "rng = np.random.generator(42)"],
    answer: 0,
    explanation: "np.random.default_rng(seed) tạo Generator hiện đại, giúp quản lý random state rõ ràng hơn so với dùng global random state."
  },
  {
    id: "np_i_021",
    library: "NumPy",
    level: "Intermediate",
    topic: "Linear Algebra Basics",
    question: "Toán tử @ giữa hai ndarray 2D thường dùng để làm gì?",
    code: "import numpy as np\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\nc = a @ b",
    options: ["Nhân từng phần tử", "Nhân ma trận", "Nối hai ma trận", "So sánh hai ma trận"],
    answer: 1,
    explanation: "Toán tử @ thực hiện matrix multiplication. Nhân từng phần tử dùng a * b."
  },
  {
    id: "np_i_022",
    library: "NumPy",
    level: "Intermediate",
    topic: "Linear Algebra Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(np.dot(a, b))",
    options: ["[4, 10, 18]", "32", "[5, 7, 9]", "77"],
    answer: 1,
    explanation: "Với hai vector 1D, np.dot tính tích vô hướng: 1*4 + 2*5 + 3*6 = 32."
  },
  {
    id: "np_i_023",
    library: "NumPy",
    level: "Intermediate",
    topic: "Performance & Memory",
    question: "Vì sao phép toán vectorized trong NumPy thường nhanh hơn vòng lặp Python thuần?",
    code: "",
    options: [
      "Vì NumPy tự động chuyển mọi dữ liệu sang pandas",
      "Vì nhiều phép toán chạy ở tầng C trên dữ liệu đồng nhất",
      "Vì NumPy luôn dùng GPU cho mọi phép toán array",
      "Vì NumPy bỏ qua toàn bộ kiểm tra lỗi khi tính toán"
    ],
    answer: 1,
    explanation: "NumPy tối ưu bằng mảng kiểu dữ liệu đồng nhất và nhiều operation chạy ở tầng C. NumPy không mặc định dùng GPU và không phụ thuộc pandas."
  },
  {
    id: "np_i_024",
    library: "NumPy",
    level: "Intermediate",
    topic: "Performance & Memory",
    question: "Thuộc tính nào cho biết tổng số byte mà dữ liệu trong ndarray đang chiếm?",
    code: "import numpy as np\narr = np.array([1, 2, 3])",
    options: ["arr.itemsize", "arr.nbytes", "arr.size", "arr.dtype"],
    answer: 1,
    explanation: "arr.nbytes trả về số byte phần dữ liệu của array. arr.size là số phần tử, không phải số byte."
  },
  {
    id: "np_i_025",
    library: "NumPy",
    level: "Intermediate",
    topic: "dtype",
    question: "Lý do nào hợp lý để dùng dtype=np.float32 thay vì float64?",
    code: "import numpy as np\narr = np.array([1.0, 2.0, 3.0], dtype=np.float32)",
    options: [
      "float32 luôn chính xác hơn float64",
      "float32 tiết kiệm bộ nhớ nhưng kém chính xác hơn",
      "float32 biến toàn bộ array thành string",
      "float32 bắt buộc nếu muốn dùng np.mean"
    ],
    answer: 1,
    explanation: "float32 dùng ít bộ nhớ hơn float64 nhưng có độ chính xác số học thấp hơn. Không phải lúc nào cũng phù hợp nếu cần độ chính xác cao."
  },
  {
    id: "np_i_026",
    library: "NumPy",
    level: "Intermediate",
    topic: "Common Errors",
    question: "Lỗi phổ biến khi chạy đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3])\nif arr > 1:\n    print('ok')",
    options: [
      "ValueError vì truth value của array không rõ",
      "TypeError vì array không so sánh được với số",
      "SyntaxError vì điều kiện if thiếu dấu ngoặc",
      "Không lỗi vì NumPy tự hiểu là dùng any()"
    ],
    answer: 0,
    explanation: "arr > 1 tạo boolean array nhiều phần tử. Python không biết nên coi cả array là True hay False. Cần dùng .any() hoặc .all() tùy logic."
  },
  {
    id: "np_i_027",
    library: "NumPy",
    level: "Intermediate",
    topic: "Common Errors",
    question: "Cách đúng để kiểm tra có ít nhất một phần tử lớn hơn 1 là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3])",
    options: ["if arr > 1:", "if (arr > 1).any():", "if (arr > 1).all():", "if np.where(arr > 1):"],
    answer: 1,
    explanation: "(arr > 1).any() trả về True nếu có ít nhất một phần tử thỏa điều kiện. .all() dùng khi tất cả phần tử phải thỏa điều kiện."
  },
  {
    id: "np_i_028",
    library: "NumPy",
    level: "Intermediate",
    topic: "Vectorization",
    question: "Cách vectorized nào thay thế vòng lặp cộng 10 vào từng phần tử?",
    code: "import numpy as np\narr = np.array([1, 2, 3])",
    options: ["arr + 10", "arr.append(10)", "np.add_axis(arr, 10)", "np.loop(arr, 10)"],
    answer: 0,
    explanation: "arr + 10 áp dụng phép cộng cho từng phần tử theo cách vectorized. Vòng lặp for x in arr: x + 10 không tự cập nhật arr."
  },
  {
    id: "np_i_029",
    library: "NumPy",
    level: "Intermediate",
    topic: "Aggregation",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[1, 2], [3, 4]])\nprint(np.max(arr, axis=0).tolist())",
    options: ["[2, 4]", "[3, 4]", "[4, 3]", "[1, 3]"],
    answer: 1,
    explanation: "axis=0 lấy max theo từng cột: max(1,3)=3 và max(2,4)=4. Kết quả là [3,4]."
  },
  {
    id: "np_i_030",
    library: "NumPy",
    level: "Intermediate",
    topic: "Array Creation",
    question: "Sự khác biệt chính giữa np.arange và np.linspace là gì?",
    code: "import numpy as np",
    options: [
      "arange dùng step, linspace dùng số lượng điểm",
      "arange chỉ tạo float, linspace chỉ tạo int",
      "arange luôn gồm stop, linspace luôn bỏ stop",
      "arange và linspace luôn cho cùng kết quả"
    ],
    answer: 0,
    explanation: "np.arange dùng start, stop, step. np.linspace dùng start, stop và số lượng điểm num. Theo mặc định linspace bao gồm stop."
  },
  {
    id: "np_a_001",
    library: "NumPy",
    level: "Advanced",
    topic: "Broadcasting",
    question: "Kết quả shape của phép cộng sau là gì?",
    code: "import numpy as np\na = np.ones((3, 1, 4))\nb = np.ones((1, 5, 4))\nc = a + b\nprint(c.shape)",
    options: ["(3, 5, 4)", "(1, 1, 4)", "(3, 1, 4)", "(1, 5, 4)"],
    answer: 0,
    explanation: "Broadcasting so sánh từ phải sang trái: 4 khớp 4, 1 broadcast lên 5, 3 broadcast với 1. Kết quả là (3, 5, 4)."
  },
  {
    id: "np_a_002",
    library: "NumPy",
    level: "Advanced",
    topic: "Broadcasting",
    question: "Đoạn code nào chuyển vector shape (3,) thành cột shape (3, 1)?",
    code: "import numpy as np\narr = np.array([1, 2, 3])",
    options: ["arr[:, None]", "arr[None, :]", "arr.reshape(1, 3)", "arr.flatten()"],
    answer: 0,
    explanation: "arr[:, None] thêm một axis ở vị trí thứ hai, tạo shape (3, 1). arr[None, :] tạo shape (1, 3)."
  },
  {
    id: "np_a_003",
    library: "NumPy",
    level: "Advanced",
    topic: "Copy vs View",
    question: "Fancy indexing thường trả về gì?",
    code: "import numpy as np\narr = np.array([10, 20, 30, 40])\npart = arr[[1, 2]]",
    options: ["View của array gốc", "Copy mới", "Scalar", "Iterator"],
    answer: 1,
    explanation: "Fancy indexing thường tạo copy, khác với slicing cơ bản thường tạo view. Vì vậy sửa part không làm đổi arr gốc."
  },
  {
    id: "np_a_004",
    library: "NumPy",
    level: "Advanced",
    topic: "Copy vs View",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([10, 20, 30, 40])\npart = arr[[1, 2]]\npart[0] = 99\nprint(arr.tolist())",
    options: ["[10, 99, 30, 40]", "[10, 20, 30, 40]", "[99, 20, 30, 40]", "[10, 20, 99, 40]"],
    answer: 1,
    explanation: "arr[[1, 2]] tạo copy. Sửa part không ảnh hưởng arr gốc, nên arr vẫn là [10, 20, 30, 40]."
  },
  {
    id: "np_a_005",
    library: "NumPy",
    level: "Advanced",
    topic: "Performance & Memory",
    question: "Khi xử lý array lớn, vì sao biểu thức (a + b + c) có thể tốn bộ nhớ hơn np.add dùng out?",
    code: "import numpy as np",
    options: [
      "Vì có thể tạo temporary array trung gian",
      "Vì NumPy tự convert array sang pandas",
      "Vì np.add luôn chạy bằng GPU riêng",
      "Vì toán tử + không hỗ trợ ndarray"
    ],
    answer: 0,
    explanation: "Biểu thức a + b + c có thể tạo array trung gian cho a + b rồi mới cộng c. Dùng out trong một số trường hợp giúp tái sử dụng bộ nhớ."
  },
  {
    id: "np_a_006",
    library: "NumPy",
    level: "Advanced",
    topic: "Performance & Memory",
    question: "Ý nghĩa chính của tham số out trong nhiều ufunc NumPy là gì?",
    code: "import numpy as np\na = np.array([1, 2, 3])\nout = np.empty_like(a)\nnp.add(a, 10, out=out)",
    options: [
      "Chỉ định nơi ghi kết quả",
      "Xuất kết quả ra file CSV",
      "In kết quả ra màn hình",
      "Chuyển array sang list"
    ],
    answer: 0,
    explanation: "out cho phép ghi kết quả vào array đã có sẵn, hữu ích khi muốn kiểm soát memory allocation."
  },
  {
    id: "np_a_007",
    library: "NumPy",
    level: "Advanced",
    topic: "Vectorization",
    question: "np.where(condition, x, y) hoạt động như thế nào?",
    code: "import numpy as np\narr = np.array([1, 2, 3, 4])\nres = np.where(arr % 2 == 0, arr, -1)\nprint(res.tolist())",
    options: ["[1, -1, 3, -1]", "[-1, 2, -1, 4]", "[2, 4]", "[False, True, False, True]"],
    answer: 1,
    explanation: "np.where chọn giá trị từ x nếu condition True, ngược lại chọn từ y. Số chẵn giữ nguyên, số lẻ thành -1."
  },
  {
    id: "np_a_008",
    library: "NumPy",
    level: "Advanced",
    topic: "Aggregation",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[1, 2], [3, 4]])\nprint(np.sum(arr, axis=1, keepdims=True).tolist())",
    options: ["[3, 7]", "[[3], [7]]", "[[4, 6]]", "[10]"],
    answer: 1,
    explanation: "axis=1 tính tổng theo hàng. keepdims=True giữ chiều bị reduce dưới dạng size 1, nên shape là (2,1), kết quả [[3],[7]]."
  },
  {
    id: "np_a_009",
    library: "NumPy",
    level: "Advanced",
    topic: "Axis Logic",
    question: "keepdims=True hữu ích nhất trong tình huống nào?",
    code: "",
    options: [
      "Giữ chiều sau aggregation để dễ broadcast lại",
      "Tăng tốc mọi phép tính lên đúng gấp đôi",
      "Ép dtype của kết quả aggregation thành int",
      "Tự động sort kết quả theo từng axis"
    ],
    answer: 0,
    explanation: "keepdims=True giữ số chiều của array sau reduction, giúp các phép như chuẩn hóa theo hàng/cột broadcast thuận tiện hơn."
  },
  {
    id: "np_a_010",
    library: "NumPy",
    level: "Advanced",
    topic: "Linear Algebra Basics",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\na = np.array([[1, 2], [3, 4]])\nprint(round(np.linalg.det(a), 1))",
    options: ["-2.0", "2.0", "10.0", "4.0"],
    answer: 0,
    explanation: "Định thức ma trận [[1,2],[3,4]] là 1*4 - 2*3 = -2. NumPy thường trả về dạng float."
  },
  {
    id: "np_a_011",
    library: "NumPy",
    level: "Advanced",
    topic: "Linear Algebra Basics",
    question: "Cách phù hợp hơn để giải hệ tuyến tính Ax = b là gì?",
    code: "import numpy as np",
    options: ["np.linalg.solve(A, b)", "np.linalg.inv(A) @ b", "A / b", "np.dot(A, b)"],
    answer: 0,
    explanation: "np.linalg.solve(A, b) thường ổn định và hiệu quả hơn việc tự tính inverse rồi nhân. A / b là chia element-wise, không giải hệ tuyến tính."
  },
  {
    id: "np_a_012",
    library: "NumPy",
    level: "Advanced",
    topic: "Missing / NaN Handling",
    question: "Cách đúng để kiểm tra NaN trong NumPy là gì?",
    code: "import numpy as np\narr = np.array([1.0, np.nan])",
    options: ["arr == np.nan", "np.isnan(arr)", "arr.isna()", "np.isnull(arr)"],
    answer: 1,
    explanation: "NaN không bằng chính nó, nên arr == np.nan không dùng để kiểm tra NaN. Trong NumPy dùng np.isnan(arr). isna/isnull quen thuộc hơn trong pandas."
  },
  {
    id: "np_a_013",
    library: "NumPy",
    level: "Advanced",
    topic: "Missing / NaN Handling",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([np.nan])\nprint((arr[0] == arr[0]))",
    options: ["True", "False", "nan", "Lỗi"],
    answer: 1,
    explanation: "Theo chuẩn floating-point, NaN không bằng chính nó. Vì vậy arr[0] == arr[0] trả về False."
  },
  {
    id: "np_a_014",
    library: "NumPy",
    level: "Advanced",
    topic: "Random",
    question: "Vì sao nên dùng cùng một seed khi cần kết quả random có thể tái lập?",
    code: "import numpy as np\nrng = np.random.default_rng(42)",
    options: [
      "Để chuỗi random có thể tạo lại giống nhau",
      "Để random nhanh hơn trong mọi trường hợp",
      "Để loại bỏ hoàn toàn tính ngẫu nhiên",
      "Để array tự động sort sau khi tạo"
    ],
    answer: 0,
    explanation: "Seed giúp random generator tạo chuỗi số có thể tái lập, hữu ích cho debug, testing và notebook phân tích."
  },
  {
    id: "np_a_015",
    library: "NumPy",
    level: "Advanced",
    topic: "Sorting",
    question: "Kết quả của đoạn code sau là gì?",
    code: "import numpy as np\narr = np.array([[3, 1], [2, 4]])\nprint(np.sort(arr, axis=0).tolist())",
    options: ["[[1, 3], [2, 4]]", "[[2, 1], [3, 4]]", "[[1, 2], [3, 4]]", "[[3, 1], [2, 4]]"],
    answer: 1,
    explanation: "axis=0 sort theo từng cột. Cột đầu [3,2] thành [2,3], cột hai [1,4] giữ [1,4]. Kết quả [[2,1],[3,4]]."
  },
  {
    id: "np_a_016",
    library: "NumPy",
    level: "Advanced",
    topic: "Concatenate / Stack / Split",
    question: "Kết quả shape của đoạn code sau là gì?",
    code: "import numpy as np\na = np.ones((2, 3))\nb = np.zeros((2, 3))\nc = np.concatenate([a, b], axis=1)\nprint(c.shape)",
    options: ["(4, 3)", "(2, 6)", "(2, 3, 2)", "(6, 2)"],
    answer: 1,
    explanation: "axis=1 nối theo chiều cột. Hai array đều shape (2,3), nối cột tạo shape (2,6)."
  },
  {
    id: "np_a_017",
    library: "NumPy",
    level: "Advanced",
    topic: "Common Errors",
    question: "Nguyên nhân của lỗi reshape phổ biến sau là gì?",
    code: "import numpy as np\narr = np.arange(10)\narr.reshape(3, 4)",
    options: [
      "10 phần tử không khớp shape mới cần 12",
      "reshape không hỗ trợ array hai chiều",
      "np.arange luôn tạo dữ liệu dạng float",
      "reshape bắt buộc phải truyền axis=1"
    ],
    answer: 0,
    explanation: "reshape không được thay đổi tổng số phần tử. Shape (3,4) cần 12 phần tử nhưng arr chỉ có 10."
  },
  {
    id: "np_a_018",
    library: "NumPy",
    level: "Advanced",
    topic: "Common Errors",
    question: "Lý do đoạn code sau lỗi là gì?",
    code: "import numpy as np\na = np.ones((2, 3))\nb = np.ones((2, 2))\nprint(a + b)",
    options: [
      "Hai shape không tương thích broadcasting",
      "Không thể cộng hai array toàn số 1",
      "np.ones chỉ hỗ trợ tạo vector 1D",
      "Cần ép cả hai array sang dtype object"
    ],
    answer: 0,
    explanation: "Shape (2,3) và (2,2) không tương thích vì chiều cuối 3 và 2 khác nhau và không có chiều nào là 1."
  },
  {
    id: "np_a_019",
    library: "NumPy",
    level: "Advanced",
    topic: "dtype",
    question: "Điều gì có thể xảy ra khi tạo array từ các phần tử có kiểu rất khác nhau?",
    code: "import numpy as np\narr = np.array([1, '2', 3])",
    options: [
      "NumPy có thể upcast sang dtype string",
      "NumPy luôn giữ từng phần tử đúng kiểu riêng",
      "NumPy tự động tạo pandas Series",
      "NumPy luôn báo lỗi khi trộn kiểu"
    ],
    answer: 0,
    explanation: "NumPy ndarray thường có dtype đồng nhất. Khi trộn int và string, NumPy có thể upcast các phần tử thành string."
  },
  {
    id: "np_a_020",
    library: "NumPy",
    level: "Advanced",
    topic: "ndarray Basics",
    question: "np.asarray khác np.array ở điểm nào trong tình huống input đã là ndarray phù hợp?",
    code: "import numpy as np\narr = np.array([1, 2, 3])",
    options: [
      "asarray có thể trả về object gốc nếu không cần copy",
      "asarray luôn tạo copy mới từ input ndarray",
      "asarray chỉ dùng được cho pandas object",
      "asarray luôn đổi dtype của array thành float"
    ],
    answer: 0,
    explanation: "np.asarray cố gắng tránh copy nếu input đã là ndarray phù hợp. np.array mặc định thường linh hoạt hơn và có thể tạo copy tùy tham số."
  },
  {
    id: "np_e_001",
    library: "NumPy",
    level: "Expert",
    topic: "Performance & Memory",
    question: "Trong NumPy, memory layout C-contiguous nghĩa là gì?",
    code: "",
    options: [
      "Dữ liệu lưu theo thứ tự hàng trước",
      "Dữ liệu lưu theo thứ tự cột trước",
      "Array bắt buộc chỉ có một chiều",
      "Array không thể bị slice thành view"
    ],
    answer: 0,
    explanation: "C-contiguous nghĩa là dữ liệu được lưu liên tục theo row-major order. Fortran-contiguous thường là column-major."
  },
  {
    id: "np_e_002",
    library: "NumPy",
    level: "Expert",
    topic: "Performance & Memory",
    question: "Tại sao arr.T đôi khi không copy dữ liệu ngay?",
    code: "import numpy as np\narr = np.arange(6).reshape(2, 3)\nt = arr.T",
    options: [
      "Vì transpose có thể tạo view bằng strides khác",
      "Vì transpose luôn nén dữ liệu trước khi trả về",
      "Vì arr.T chỉ hoạt động với Python list",
      "Vì NumPy bỏ qua dữ liệu gốc sau transpose"
    ],
    answer: 0,
    explanation: "Transpose thường có thể được biểu diễn bằng view với strides khác, nên không nhất thiết copy dữ liệu ngay."
  },
  {
    id: "np_e_003",
    library: "NumPy",
    level: "Expert",
    topic: "Performance & Memory",
    question: "strides của ndarray mô tả điều gì?",
    code: "import numpy as np\narr = np.arange(6).reshape(2, 3)\nprint(arr.strides)",
    options: [
      "Số byte cần nhảy theo từng chiều",
      "Số chiều hiện tại của array",
      "Tổng số phần tử trong array",
      "Kiểu dữ liệu của từng phần tử"
    ],
    answer: 0,
    explanation: "strides cho biết cần nhảy bao nhiêu byte trong memory khi tăng index ở từng axis. Nó liên quan trực tiếp đến view, transpose và slicing."
  },
  {
    id: "np_e_004",
    library: "NumPy",
    level: "Expert",
    topic: "Broadcasting",
    question: "Khi dùng np.broadcast_to, điểm cần cẩn thận là gì?",
    code: "import numpy as np\narr = np.array([1, 2, 3])\nb = np.broadcast_to(arr, (2, 3))",
    options: [
      "Kết quả có thể là read-only view đặc biệt",
      "Kết quả luôn copy toàn bộ dữ liệu gốc",
      "Kết quả luôn có dtype object",
      "Kết quả không thể dùng trong phép toán"
    ],
    answer: 0,
    explanation: "np.broadcast_to thường tạo view broadcasted, có thể read-only và không copy dữ liệu như một array độc lập thông thường."
  },
  {
    id: "np_e_005",
    library: "NumPy",
    level: "Expert",
    topic: "Vectorization",
    question: "Khi nào np.vectorize thường KHÔNG phải là giải pháp tăng tốc thực sự?",
    code: "import numpy as np",
    options: [
      "Khi nó chỉ bọc Python function theo từng phần tử",
      "Khi input truyền vào là ndarray một chiều",
      "Khi output của function là một số scalar",
      "Khi function chỉ nhận một tham số đầu vào"
    ],
    answer: 0,
    explanation: "np.vectorize chủ yếu tiện về cú pháp, không biến Python function thành ufunc C-level. Nó thường không nhanh như ufunc NumPy thật hoặc code vectorized đúng nghĩa."
  },
  {
    id: "np_e_006",
    library: "NumPy",
    level: "Expert",
    topic: "Linear Algebra Basics",
    question: "Vì sao không nên dùng np.linalg.inv(A) @ b để giải hệ Ax=b nếu có thể dùng solve?",
    code: "import numpy as np",
    options: [
      "Tính inverse thường kém ổn định và tốn hơn solve",
      "np.linalg.inv không tồn tại trong NumPy",
      "Toán tử @ không hỗ trợ nhân với vector",
      "solve chỉ dùng được cho ma trận đường chéo"
    ],
    answer: 0,
    explanation: "Giải hệ bằng np.linalg.solve thường ổn định số học và hiệu quả hơn so với tính inverse rồi nhân với b."
  },
  {
    id: "np_e_007",
    library: "NumPy",
    level: "Expert",
    topic: "dtype",
    question: "Vấn đề tiềm ẩn của phép cộng integer array với giá trị vượt quá giới hạn dtype là gì?",
    code: "import numpy as np\narr = np.array([127], dtype=np.int8)\nprint((arr + 1)[0])",
    options: [
      "Có thể overflow theo giới hạn dtype",
      "NumPy luôn chuyển sang Python int vô hạn",
      "NumPy luôn báo lỗi trước khi overflow",
      "Kết quả luôn được chuyển thành float64"
    ],
    answer: 0,
    explanation: "Với integer dtype cố định như int8, phép toán có thể overflow theo giới hạn biểu diễn. Đây là điểm khác Python int thuần có độ lớn linh hoạt."
  },
  {
    id: "np_e_008",
    library: "NumPy",
    level: "Expert",
    topic: "Copy vs View",
    question: "Tại sao np.shares_memory(a, b) hữu ích khi debug?",
    code: "import numpy as np\na = np.arange(5)\nb = a[1:4]",
    options: [
      "Kiểm tra hai array có chia sẻ vùng nhớ không",
      "Kiểm tra hai array có cùng dtype không",
      "So sánh giá trị từng phần tử của hai array",
      "Ép array thành C-contiguous trong bộ nhớ"
    ],
    answer: 0,
    explanation: "np.shares_memory giúp kiểm tra quan hệ memory giữa các array, rất hữu ích khi cần biết thay đổi một array có thể ảnh hưởng array khác hay không."
  },
  {
    id: "np_e_009",
    library: "NumPy",
    level: "Expert",
    topic: "Performance & Memory",
    question: "Khi nào np.ascontiguousarray thường hữu ích?",
    code: "import numpy as np\narr = np.arange(6).reshape(2, 3).T",
    options: [
      "Khi cần đảm bảo dữ liệu liên tục theo C-order",
      "Khi muốn sort array tăng dần theo từng cột",
      "Khi muốn loại bỏ toàn bộ NaN khỏi array",
      "Khi muốn chuyển integer array thành string"
    ],
    answer: 0,
    explanation: "Một số thao tác hoặc thư viện native cần C-contiguous memory. np.ascontiguousarray sẽ trả về array C-contiguous, copy nếu cần."
  },
  {
    id: "np_e_010",
    library: "NumPy",
    level: "Expert",
    topic: "Common Errors",
    question: "Trong tính toán số, vì sao so sánh float bằng == thường không an toàn?",
    code: "import numpy as np\na = np.array([0.1 + 0.2])\nb = np.array([0.3])",
    options: [
      "Vì floating-point có sai số biểu diễn",
      "Vì NumPy không hỗ trợ so sánh float",
      "Vì == luôn trả về True với float",
      "Vì float trong NumPy là string"
    ],
    answer: 0,
    explanation: "Floating-point có sai số biểu diễn nhị phân, nên các giá trị nhìn có vẻ bằng nhau có thể khác rất nhỏ. np.isclose phù hợp hơn khi so sánh gần đúng."
  }
];