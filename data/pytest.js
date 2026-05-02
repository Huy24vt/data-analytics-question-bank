const PYTEST_QUESTIONS = [
  {
    id: "pytest_f_001",
    library: "pytest",
    level: "Foundation",
    topic: "assert",
    question: "Trong pytest, mục đích chính của assert là gì?",
    code: "",
    options: [
      "In kết quả ra màn hình để review",
      "Kiểm tra điều kiện đúng như kỳ vọng",
      "Tự động sửa lỗi trong source code",
      "Tạo file dữ liệu mới cho test"
    ],
    answer: 1,
    explanation: "assert dùng để kiểm tra điều kiện trong test. Nếu điều kiện sai, test fail. Đây là cách kiểm tra tự động thay vì chỉ print rồi xem thủ công."
  },
  {
    id: "pytest_f_002",
    library: "pytest",
    level: "Foundation",
    topic: "pytest Overview",
    question: "pytest thường được dùng để làm gì trong Python project?",
    code: "",
    options: [
      "Tạo dashboard tương tác bằng Python",
      "Huấn luyện model deep learning",
      "Viết và chạy automated tests",
      "Thay thế hoàn toàn pandas"
    ],
    answer: 2,
    explanation: "pytest là framework phổ biến để viết và chạy test tự động trong Python, giúp kiểm tra logic code có hoạt động đúng như kỳ vọng không."
  },
  {
    id: "pytest_f_003",
    library: "pytest",
    level: "Foundation",
    topic: "Test Function Naming",
    question: "Tên function test trong pytest thường nên bắt đầu bằng gì để được discovery tự động?",
    code: "",
    options: [
      "check_",
      "run_",
      "test_",
      "case_"
    ],
    answer: 2,
    explanation: "pytest thường tự động phát hiện các function có tên bắt đầu bằng test_, ví dụ test_clean_data()."
  },
  {
    id: "pytest_f_004",
    library: "pytest",
    level: "Foundation",
    topic: "Test File Naming",
    question: "Tên file test nào thường được pytest tự động phát hiện?",
    code: "",
    options: [
      "transform_check.txt",
      "run_transform.md",
      "test_transform.py",
      "pytest_data.csv"
    ],
    answer: 2,
    explanation: "pytest thường discovery các file có pattern như test_*.py hoặc *_test.py. Vì vậy test_transform.py là tên file test hợp lệ."
  },
  {
    id: "pytest_f_005",
    library: "pytest",
    level: "Foundation",
    topic: "Expected vs Actual",
    question: "Trong testing, expected và actual thường có nghĩa là gì?",
    code: "",
    options: [
      "expected là lỗi, actual là file test",
      "expected là input, actual là function",
      "expected là thư viện, actual là CLI",
      "expected là kỳ vọng, actual là kết quả thật"
    ],
    answer: 3,
    explanation: "Test thường so sánh actual result từ function với expected result đã biết trước. Nếu khác nhau, test nên fail."
  },
  {
    id: "pytest_f_006",
    library: "pytest",
    level: "Foundation",
    topic: "Running pytest",
    question: "Command phổ biến nào dùng để chạy pytest trong terminal?",
    code: "",
    options: [
      "run-pandas",
      "python test all",
      "pytest",
      "assert all"
    ],
    answer: 2,
    explanation: "Command pytest sẽ chạy test theo cơ chế discovery mặc định trong project hoặc thư mục hiện tại."
  },
  {
    id: "pytest_f_007",
    library: "pytest",
    level: "Foundation",
    topic: "Test Discovery",
    question: "Test discovery trong pytest nghĩa là gì?",
    code: "",
    options: [
      "pytest tự tìm file/function test để chạy",
      "pytest tự sửa bug trong source code",
      "pytest tự tạo DataFrame mẫu",
      "pytest tự deploy app lên cloud"
    ],
    answer: 0,
    explanation: "Test discovery là việc pytest tự tìm các file/function test theo naming convention như test_*.py, *_test.py và test_*."
  },
  {
    id: "pytest_f_008",
    library: "pytest",
    level: "Foundation",
    topic: "Unit Test",
    question: "Unit test thường kiểm tra điều gì?",
    code: "",
    options: [
      "Toàn bộ hệ thống production",
      "Một logic nhỏ hoặc function độc lập",
      "Chỉ giao diện website",
      "Chỉ tốc độ internet"
    ],
    answer: 1,
    explanation: "Unit test tập trung kiểm tra một đơn vị nhỏ như function transform dữ liệu, giúp phát hiện lỗi logic nhanh và rõ."
  },
  {
    id: "pytest_f_009",
    library: "pytest",
    level: "Foundation",
    topic: "Integration Test Basics",
    question: "Integration test khác unit test ở điểm nào?",
    code: "",
    options: [
      "Integration test không cần assert",
      "Integration test chỉ format code",
      "Integration test chỉ kiểm tra phép cộng",
      "Integration test kiểm tra nhiều phần phối hợp"
    ],
    answer: 3,
    explanation: "Integration test kiểm tra cách nhiều phần tương tác, ví dụ đọc dữ liệu, transform và ghi output. Unit test nhỏ và cô lập hơn."
  },
  {
    id: "pytest_f_010",
    library: "pytest",
    level: "Foundation",
    topic: "Test Data",
    question: "Trong test function xử lý dữ liệu, test data nhỏ nên có đặc điểm nào?",
    code: "",
    options: [
      "Nhỏ, rõ expected result và dễ suy luận",
      "Càng lớn càng tốt dù chưa rõ output",
      "Phải phụ thuộc database thật",
      "Không cần kiểm soát input"
    ],
    answer: 0,
    explanation: "Test data nên nhỏ và có expected output rõ ràng để dễ hiểu lỗi khi test fail."
  },
  {
    id: "pytest_f_011",
    library: "pytest",
    level: "Foundation",
    topic: "Edge Cases",
    question: "Edge case trong testing là gì?",
    code: "",
    options: [
      "Dòng code đầu tiên của file",
      "Tên folder chứa test",
      "Trường hợp biên hoặc ít gặp",
      "Một loại chart kiểm thử"
    ],
    answer: 2,
    explanation: "Edge case là trường hợp đặc biệt như list rỗng, giá trị 0, null, dữ liệu một dòng hoặc input cực trị."
  },
  {
    id: "pytest_f_012",
    library: "pytest",
    level: "Foundation",
    topic: "assert",
    question: "Test nào dưới đây sẽ pass?",
    code: "def add_one(x):\n    return x + 1\n\ndef test_add_one():\n    assert add_one(2) == 3",
    options: [
      "Fail vì assert không dùng với pytest",
      "Pass vì add_one(2) bằng 3",
      "Fail vì function phải tên check_",
      "Bị skip theo mặc định của pytest"
    ],
    answer: 1,
    explanation: "add_one(2) trả về 3 và assert kiểm tra đúng điều kiện này, nên test pass."
  },
  {
    id: "pytest_i_001",
    library: "pytest",
    level: "Intermediate",
    topic: "Exception Testing",
    question: "Khi muốn kiểm tra function raise ValueError, nên dùng pattern nào?",
    code: "",
    options: [
      "with pytest.error(ValueError):",
      "assert ValueError:",
      "with pytest.raises(ValueError):",
      "try ValueError:"
    ],
    answer: 2,
    explanation: "pytest.raises dùng để kiểm tra một block code có raise exception kỳ vọng hay không."
  },
  {
    id: "pytest_i_002",
    library: "pytest",
    level: "Intermediate",
    topic: "pytest.raises",
    question: "Test sau kiểm tra điều gì?",
    code: "import pytest\n\ndef parse_positive(x):\n    if x < 0:\n        raise ValueError(\"x must be non-negative\")\n    return x\n\ndef test_parse_positive_negative():\n    with pytest.raises(ValueError):\n        parse_positive(-1)",
    options: [
      "parse_positive(-1) phải trả về -1",
      "parse_positive(-1) phải raise ValueError",
      "parse_positive(-1) phải trả về None",
      "parse_positive không được gọi"
    ],
    answer: 1,
    explanation: "with pytest.raises(ValueError) kỳ vọng block bên trong raise ValueError. Nếu không raise, test sẽ fail."
  },
  {
    id: "pytest_i_003",
    library: "pytest",
    level: "Intermediate",
    topic: "Fixtures",
    question: "Fixture trong pytest thường dùng để làm gì?",
    code: "",
    options: [
      "Tự động sửa lỗi assert",
      "Thay thế mọi test function",
      "Chuẩn bị data/resource dùng chung",
      "Chỉ dùng để vẽ biểu đồ"
    ],
    answer: 2,
    explanation: "Fixture giúp setup test data, config, connection giả lập hoặc resource dùng lại, tránh lặp code trong nhiều test."
  },
  {
    id: "pytest_i_004",
    library: "pytest",
    level: "Intermediate",
    topic: "Fixtures",
    question: "Cách nào định nghĩa fixture trong pytest?",
    code: "",
    options: [
      "@pytest.test",
      "@fixture.pytest",
      "@pytest.fixture",
      "@assert.fixture"
    ],
    answer: 2,
    explanation: "Decorator @pytest.fixture dùng để khai báo một fixture. Test function có thể nhận fixture qua tên tham số."
  },
  {
    id: "pytest_i_005",
    library: "pytest",
    level: "Intermediate",
    topic: "Fixtures",
    question: "Trong đoạn code sau, fixture sample_values được dùng như thế nào?",
    code: "import pytest\n\n@pytest.fixture\ndef sample_values():\n    return [1, 2, 3]\n\ndef test_sum(sample_values):\n    assert sum(sample_values) == 6",
    options: [
      "sample_values phải gọi thủ công",
      "pytest truyền fixture qua tham số",
      "fixture không thể trả về list",
      "test_sum luôn bị skip"
    ],
    answer: 1,
    explanation: "Khi test function có tham số trùng tên fixture, pytest tự gọi fixture và truyền kết quả vào test."
  },
  {
    id: "pytest_i_006",
    library: "pytest",
    level: "Intermediate",
    topic: "fixture scope Awareness",
    question: "fixture scope trong pytest dùng để kiểm soát điều gì?",
    code: "",
    options: [
      "Số lượng assert trong một test",
      "Tên file output của pytest",
      "Tần suất fixture được tạo lại",
      "Mức coverage bắt buộc"
    ],
    answer: 2,
    explanation: "Scope kiểm soát vòng đời fixture. Mặc định thường là function, tức fixture được setup lại cho mỗi test dùng nó."
  },
  {
    id: "pytest_i_007",
    library: "pytest",
    level: "Intermediate",
    topic: "Parametrize",
    question: "pytest.mark.parametrize thường dùng để làm gì?",
    code: "",
    options: [
      "Chạy cùng một test với nhiều bộ case",
      "Tự động mock database thật",
      "Tạo file tạm cho test",
      "Đóng connection sau test"
    ],
    answer: 0,
    explanation: "parametrize giúp tránh viết nhiều test gần giống nhau bằng cách chạy cùng một test function với nhiều case dữ liệu."
  },
  {
    id: "pytest_i_008",
    library: "pytest",
    level: "Intermediate",
    topic: "Parametrize",
    question: "Test sau sẽ được chạy bao nhiêu lần?",
    code: "import pytest\n\n@pytest.mark.parametrize(\"value,expected\", [(1, 2), (2, 3), (3, 4)])\ndef test_add_one(value, expected):\n    assert value + 1 == expected",
    options: [
      "1 lần",
      "2 lần",
      "3 lần",
      "0 lần"
    ],
    answer: 2,
    explanation: "Có 3 bộ tham số trong parametrize, nên pytest chạy test_add_one 3 lần."
  },
  {
    id: "pytest_i_009",
    library: "pytest",
    level: "Intermediate",
    topic: "Negative Cases",
    question: "Negative case trong test thường là gì?",
    code: "",
    options: [
      "Test luôn phải fail",
      "Input lỗi hoặc tình huống không hợp lệ",
      "Test không có assert",
      "Test chỉ chạy trên số âm"
    ],
    answer: 1,
    explanation: "Negative case kiểm tra code phản ứng đúng với input lỗi, ví dụ raise exception rõ ràng hoặc trả thông báo phù hợp."
  },
  {
    id: "pytest_i_010",
    library: "pytest",
    level: "Intermediate",
    topic: "tmp_path",
    question: "tmp_path fixture trong pytest thường dùng để làm gì?",
    code: "",
    options: [
      "Tạo API token tạm",
      "Chạy test song song",
      "Tạo thư mục tạm để test file I/O",
      "Tự động kiểm tra coverage"
    ],
    answer: 2,
    explanation: "tmp_path cung cấp pathlib.Path tới thư mục tạm cho từng test, giúp test file I/O an toàn và cô lập."
  },
  {
    id: "pytest_i_011",
    library: "pytest",
    level: "Intermediate",
    topic: "capsys Awareness",
    question: "capsys fixture thường dùng để kiểm tra điều gì?",
    code: "",
    options: [
      "Nội dung database thật",
      "Output stdout/stderr",
      "Tốc độ network",
      "Mức nén Parquet"
    ],
    answer: 1,
    explanation: "capsys cho phép capture output từ print hoặc stderr để assert trong test."
  },
  {
    id: "pytest_i_012",
    library: "pytest",
    level: "Intermediate",
    topic: "monkeypatch Awareness",
    question: "monkeypatch fixture thường hữu ích khi nào?",
    code: "",
    options: [
      "Khi cần train model",
      "Khi muốn bỏ mọi assert",
      "Khi cần tạo chart",
      "Khi cần thay đổi tạm env/function"
    ],
    answer: 3,
    explanation: "monkeypatch giúp thay đổi tạm thời môi trường hoặc behavior trong test và tự khôi phục sau test."
  },
  {
    id: "pytest_i_013",
    library: "pytest",
    level: "Intermediate",
    topic: "Testing pandas Transformations",
    question: "Test nào kiểm tra đúng logic tạo cột amount_x2 trong pandas?",
    code: "import pandas as pd\n\ndef add_amount_x2(df):\n    df = df.copy()\n    df[\"amount_x2\"] = df[\"amount\"] * 2\n    return df",
    options: [
      "def test_add_amount_x2():\n    df = pd.DataFrame({\"amount\": [10, 20]})\n    result = add_amount_x2(df)\n    assert result[\"amount_x2\"].tolist() == [20, 40]",
      "def test_add_amount_x2():\n    df = pd.DataFrame({\"amount\": [10, 20]})\n    print(add_amount_x2(df))",
      "def test_add_amount_x2():\n    assert add_amount_x2",
      "def test_add_amount_x2():\n    assert True"
    ],
    answer: 0,
    explanation: "Test đúng cần tạo input nhỏ, chạy function và assert output cụ thể. Chỉ print hoặc assert True không kiểm tra logic transformation."
  },
  {
    id: "pytest_i_014",
    library: "pytest",
    level: "Intermediate",
    topic: "Testing DataFrame Schema",
    question: "Cách nào kiểm tra DataFrame result có đủ các cột bắt buộc?",
    code: "required_cols = {\"user_id\", \"amount\"}",
    options: [
      "assert result.columns == required_cols",
      "assert required_cols.issubset(set(result.columns))",
      "print(result.columns)",
      "assert len(result) > 0"
    ],
    answer: 1,
    explanation: "issubset kiểm tra các cột bắt buộc có nằm trong result.columns hay không, không yêu cầu DataFrame chỉ có đúng các cột đó."
  },
  {
    id: "pytest_i_015",
    library: "pytest",
    level: "Intermediate",
    topic: "Testing Null Handling",
    question: "Cách nào kiểm tra cột user_id không có null trong pandas DataFrame result?",
    code: "",
    options: [
      "assert result[\"user_id\"].empty",
      "print(result[\"user_id\"])",
      "assert result[\"user_id\"].notna().all()",
      "assert result[\"user_id\"].isna().all()"
    ],
    answer: 2,
    explanation: "notna().all() đảm bảo tất cả giá trị trong cột user_id không bị null. isna().all() lại kiểm tra tất cả đều null."
  },
  {
    id: "pytest_i_016",
    library: "pytest",
    level: "Intermediate",
    topic: "Testing Duplicates",
    question: "Cách nào kiểm tra cột order_id không bị duplicate?",
    code: "",
    options: [
      "assert result[\"order_id\"].duplicated().all()",
      "assert not result[\"order_id\"].duplicated().any()",
      "assert result[\"order_id\"].isna().any()",
      "print(result[\"order_id\"].duplicated())"
    ],
    answer: 1,
    explanation: "duplicated().any() cho biết có giá trị trùng hay không. not ... any() đảm bảo không có duplicate trong order_id."
  },
  {
    id: "pytest_i_017",
    library: "pytest",
    level: "Intermediate",
    topic: "Testing Numeric Tolerance",
    question: "Vì sao không nên luôn so sánh số float bằng == tuyệt đối?",
    code: "",
    options: [
      "Vì pytest không hỗ trợ float",
      "Vì float không thể test",
      "Vì sai số số thực có thể rất nhỏ",
      "Vì assert chỉ dùng cho string"
    ],
    answer: 2,
    explanation: "Số thực có thể có sai số nhỏ do biểu diễn binary. Với float nên dùng tolerance như pytest.approx khi phù hợp."
  },
  {
    id: "pytest_i_018",
    library: "pytest",
    level: "Intermediate",
    topic: "pytest.approx",
    question: "pytest.approx thường dùng để làm gì?",
    code: "",
    options: [
      "Mock API response",
      "So sánh float với sai số cho phép",
      "Tạo fixture mới",
      "Skip test"
    ],
    answer: 1,
    explanation: "pytest.approx giúp assert các giá trị float gần bằng nhau trong phạm vi tolerance, tránh fail vì sai số rất nhỏ."
  },
  {
    id: "pytest_i_019",
    library: "pytest",
    level: "Intermediate",
    topic: "Deterministic Tests",
    question: "Deterministic test là test như thế nào?",
    code: "",
    options: [
      "Test lúc pass lúc fail ngẫu nhiên",
      "Test không có expected result",
      "Cùng input kiểm soát thì kết quả giống nhau",
      "Test chỉ dùng print để xem"
    ],
    answer: 2,
    explanation: "Deterministic test ổn định và đáng tin. Test phụ thuộc random, thời gian hiện tại hoặc API thật có thể trở nên flaky nếu không kiểm soát."
  },
  {
    id: "pytest_i_020",
    library: "pytest",
    level: "Intermediate",
    topic: "Test Organization",
    question: "Cách tổ chức test nào thường dễ maintain hơn?",
    code: "",
    options: [
      "Một file rất lớn, tên test mơ hồ",
      "Chỉ viết test khi production lỗi",
      "Không dùng assert để tránh fail",
      "Nhóm theo module và đặt tên rõ behavior"
    ],
    answer: 3,
    explanation: "Tên test và cách tổ chức rõ ràng giúp hiểu nhanh test đang bảo vệ logic nào và dễ debug khi fail."
  },
  {
    id: "pytest_a_001",
    library: "pytest",
    level: "Advanced",
    topic: "Mocking Basics",
    question: "Mocking trong test thường dùng để làm gì?",
    code: "",
    options: [
      "Tự động tăng coverage lên 100%",
      "Thay dependency thật bằng object giả lập",
      "Xóa mọi exception khỏi source code",
      "Chạy test mà không cần assert"
    ],
    answer: 1,
    explanation: "Mocking giúp tránh gọi thật API, database hoặc service chậm/không ổn định, từ đó test logic của code một cách cô lập và deterministic hơn."
  },
  {
    id: "pytest_a_002",
    library: "pytest",
    level: "Advanced",
    topic: "Mock External API",
    question: "Vì sao nên mock external API trong unit test?",
    code: "",
    options: [
      "Để bypass quyền truy cập trái phép",
      "Để không cần kiểm tra output",
      "Để tránh phụ thuộc mạng/API thật",
      "Để test luôn pass dù code sai"
    ],
    answer: 2,
    explanation: "Unit test nên ổn định và nhanh. Gọi API thật có thể fail do mạng, quota hoặc dữ liệu thay đổi, nên mock response là hợp lý."
  },
  {
    id: "pytest_a_003",
    library: "pytest",
    level: "Advanced",
    topic: "Mock Database Call",
    question: "Trong unit test function transform dữ liệu, vì sao thường không nên gọi database thật?",
    code: "",
    options: [
      "Vì pytest không thể chạy với database",
      "Vì database thật làm test chậm và khó cô lập",
      "Vì database luôn trả dữ liệu sai",
      "Vì assert không dùng được với database"
    ],
    answer: 1,
    explanation: "Unit test nên kiểm tra logic nhỏ với input kiểm soát. Database thật phù hợp hơn cho integration test có setup riêng."
  },
  {
    id: "pytest_a_004",
    library: "pytest",
    level: "Advanced",
    topic: "Mocking Basics",
    question: "Mock object thường có thể kiểm tra điều gì?",
    code: "",
    options: [
      "Coverage có luôn đạt 100% không",
      "Database thật có online không",
      "Dependency có được gọi đúng tham số không",
      "CPU của máy có đủ mạnh không"
    ],
    answer: 2,
    explanation: "Mock có thể ghi nhận call count, arguments và return_value, giúp kiểm tra interaction với dependency."
  },
  {
    id: "pytest_a_005",
    library: "pytest",
    level: "Advanced",
    topic: "Test Isolation",
    question: "Test isolation nghĩa là gì?",
    code: "",
    options: [
      "Chỉ chạy một test trong project",
      "Mỗi test độc lập với state test khác",
      "Không dùng fixture trong test",
      "Không cần cleanup dữ liệu tạm"
    ],
    answer: 1,
    explanation: "Test độc lập giúp kết quả không phụ thuộc thứ tự chạy. Nếu test chia sẻ state không kiểm soát, test có thể flaky."
  },
  {
    id: "pytest_a_006",
    library: "pytest",
    level: "Advanced",
    topic: "Avoid Flaky Tests",
    question: "Flaky test là gì?",
    code: "",
    options: [
      "Test luôn fail vì bug rõ ràng",
      "Test không có tên bắt đầu test_",
      "Test chỉ dùng cho dữ liệu float",
      "Test lúc pass lúc fail dù code không đổi"
    ],
    answer: 3,
    explanation: "Flaky test không ổn định, thường do phụ thuộc thời gian, random, external service, thứ tự test hoặc dữ liệu ngoài không kiểm soát."
  },
  {
    id: "pytest_a_007",
    library: "pytest",
    level: "Advanced",
    topic: "Setup / Teardown Basics",
    question: "Setup/teardown trong testing dùng để làm gì?",
    code: "",
    options: [
      "Chuẩn bị resource và cleanup sau test",
      "Tăng số lượng assert trong test",
      "Tự động sửa test đang fail",
      "Chuyển unit test thành model"
    ],
    answer: 0,
    explanation: "Setup tạo dữ liệu/resource cần cho test. Teardown cleanup tài nguyên sau test, ví dụ file tạm hoặc connection giả lập."
  },
  {
    id: "pytest_a_008",
    library: "pytest",
    level: "Advanced",
    topic: "conftest.py Basics",
    question: "conftest.py trong pytest thường dùng để làm gì?",
    code: "",
    options: [
      "Lưu dữ liệu production chính",
      "Thay thế mọi file test",
      "Tạo dashboard test",
      "Chia sẻ fixtures/cấu hình cho nhiều test"
    ],
    answer: 3,
    explanation: "conftest.py giúp định nghĩa fixtures/hook dùng chung trong một thư mục test mà không cần import trực tiếp trong từng file test."
  },
  {
    id: "pytest_a_009",
    library: "pytest",
    level: "Advanced",
    topic: "Markers",
    question: "Markers trong pytest thường dùng để làm gì?",
    code: "",
    options: [
      "Đổi tên tất cả function",
      "Gắn nhãn để phân loại/chọn test",
      "Tự động mock API",
      "Tính accuracy model"
    ],
    answer: 1,
    explanation: "Markers như slow, integration, smoke giúp phân loại test và chạy chọn lọc bằng pytest -m."
  },
  {
    id: "pytest_a_010",
    library: "pytest",
    level: "Advanced",
    topic: "skip",
    question: "pytest.mark.skip thường dùng khi nào?",
    code: "",
    options: [
      "Khi muốn test fail nếu code đúng",
      "Khi muốn mock database",
      "Khi muốn tạo fixture session",
      "Khi muốn bỏ qua test có chủ đích"
    ],
    answer: 3,
    explanation: "skip dùng để bỏ qua test, ví dụ test phụ thuộc môi trường chưa có. Nên có reason rõ để người khác hiểu vì sao bỏ qua."
  },
  {
    id: "pytest_a_011",
    library: "pytest",
    level: "Advanced",
    topic: "xfail",
    question: "pytest.mark.xfail thường dùng để biểu thị điều gì?",
    code: "",
    options: [
      "Test được kỳ vọng fail do bug đã biết",
      "Test bắt buộc pass 100%",
      "Test không được pytest discovery",
      "Test chỉ chạy trên production"
    ],
    answer: 0,
    explanation: "xfail đánh dấu test dự kiến fail, thường dùng cho bug đã biết hoặc tính năng chưa hỗ trợ. Nếu test pass bất ngờ, pytest có thể báo xpass."
  },
  {
    id: "pytest_a_012",
    library: "pytest",
    level: "Advanced",
    topic: "CI Basics",
    question: "Trong CI, pytest thường được dùng như thế nào?",
    code: "",
    options: [
      "Tự động viết toàn bộ source code",
      "Tự động chạy test khi push/PR",
      "Tự động cấp quyền database production",
      "Tự động bỏ qua mọi lỗi"
    ],
    answer: 1,
    explanation: "CI giúp chạy test tự động khi có thay đổi code, giảm rủi ro merge code làm hỏng logic hiện có."
  },
  {
    id: "pytest_a_013",
    library: "pytest",
    level: "Advanced",
    topic: "Coverage Awareness",
    question: "Code coverage cao có nghĩa là gì?",
    code: "",
    options: [
      "Code chắc chắn không còn bug",
      "Test không cần assert nữa",
      "Nhiều dòng/nhánh code đã được test chạy qua",
      "Model chắc chắn chính xác"
    ],
    answer: 2,
    explanation: "Coverage cho biết phần code được test đi qua. Coverage cao là tín hiệu tốt nhưng vẫn cần test case chất lượng và assert đúng logic."
  },
  {
    id: "pytest_a_014",
    library: "pytest",
    level: "Advanced",
    topic: "Best Practice for Data Analytics Projects",
    question: "Best practice nào phù hợp khi test pipeline xử lý dữ liệu?",
    code: "",
    options: [
      "Chạy job lớn rồi nhìn output thủ công",
      "Bỏ qua edge case để test ngắn",
      "Gọi API thật trong mọi unit test",
      "Test transformation nhỏ với expected rõ"
    ],
    answer: 3,
    explanation: "Pipeline dữ liệu nên được bảo vệ bằng test nhỏ, deterministic và assert rõ ràng về logic, schema và chất lượng output."
  },
  {
    id: "pytest_e_001",
    library: "pytest",
    level: "Expert",
    topic: "Mocking Strategy",
    question: "Trong unit test, dấu hiệu nào cho thấy nên dùng mock?",
    code: "",
    options: [
      "Function phụ thuộc API/database/file system",
      "Function chỉ cộng hai số trong memory",
      "Test không có expected result",
      "Test đã dùng assert"
    ],
    answer: 0,
    explanation: "Nếu dependency bên ngoài làm test chậm, không ổn định hoặc khó kiểm soát, mock giúp cô lập logic cần test."
  },
  {
    id: "pytest_e_002",
    library: "pytest",
    level: "Expert",
    topic: "Testing Data Pipelines",
    question: "Vì sao nên test transformation logic bằng input nhỏ trước khi chạy job lớn?",
    code: "",
    options: [
      "Vì job lớn không bao giờ lỗi",
      "Vì pytest không chạy được pandas",
      "Vì test nhỏ dễ debug và rõ expected output",
      "Vì test nhỏ thay thế monitoring production"
    ],
    answer: 2,
    explanation: "Input nhỏ giúp test nhanh, deterministic và dễ hiểu. Sau đó vẫn cần integration test hoặc monitoring cho pipeline lớn."
  },
  {
    id: "pytest_e_003",
    library: "pytest",
    level: "Expert",
    topic: "Test Design",
    question: "Test nào có giá trị hơn trong Data Analytics project?",
    code: "",
    options: [
      "Test chỉ assert True để tăng số lượng",
      "Test chỉ print DataFrame ra màn hình",
      "Test kiểm tra rule cụ thể của dữ liệu",
      "Test phụ thuộc dữ liệu live không kiểm soát"
    ],
    answer: 2,
    explanation: "Test có giá trị cần kiểm tra rule rõ ràng và fail khi logic sai. assert True hoặc print thủ công không bảo vệ pipeline hiệu quả."
  },
  {
    id: "pytest_e_004",
    library: "pytest",
    level: "Expert",
    topic: "Best Practice for Data Analytics Projects",
    question: "Trong analytics project production-like, chiến lược test nào hợp lý nhất?",
    code: "",
    options: [
      "Chỉ mở dashboard xem bằng mắt",
      "Chỉ viết test sau khi production lỗi",
      "Bỏ qua test vì dữ liệu thay đổi",
      "Kết hợp unit test, integration test, mock và CI"
    ],
    answer: 3,
    explanation: "Một project analytics tốt nên có nhiều lớp test: unit test cho logic nhỏ, integration test cho workflow, mock dependency bên ngoài và CI để chạy tự động."
  }
];