const PYTEST_QUESTIONS = [
  {
    id: "pytest_f_001",
    library: "pytest",
    level: "Foundation",
    topic: "assert",
    question: "Trong pytest, mục đích chính của assert là gì?",
    code: "",
    options: [
      "In kết quả ra màn hình để xem thủ công",
      "Kiểm tra một điều kiện có đúng như kỳ vọng hay không",
      "Tự động sửa lỗi trong code",
      "Tạo file dữ liệu mới"
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
      "Viết và chạy automated tests cho code Python",
      "Tạo dashboard tương tác",
      "Huấn luyện model deep learning",
      "Thay thế hoàn toàn pandas"
    ],
    answer: 0,
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
      "test_",
      "check_",
      "run_",
      "case_"
    ],
    answer: 0,
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
      "test_transform.py",
      "transform_check.txt",
      "run_transform.md",
      "pytest_data.csv"
    ],
    answer: 0,
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
      "expected là kết quả kỳ vọng, actual là kết quả thực tế code trả về",
      "expected là lỗi, actual là file test",
      "expected là input, actual là tên function",
      "expected là thư viện, actual là command line"
    ],
    answer: 0,
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
      "pytest",
      "run-pandas",
      "python test all",
      "assert all"
    ],
    answer: 0,
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
      "Quá trình pytest tự tìm file test và function test để chạy",
      "Quá trình tự động sửa bug trong source code",
      "Quá trình tạo DataFrame mới",
      "Quá trình deploy app lên cloud"
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
      "Một function hoặc một logic nhỏ, độc lập",
      "Toàn bộ hệ thống production",
      "Chỉ giao diện website",
      "Chỉ tốc độ internet"
    ],
    answer: 0,
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
      "Integration test kiểm tra nhiều thành phần phối hợp với nhau",
      "Integration test chỉ kiểm tra một phép cộng",
      "Integration test không cần assert",
      "Integration test chỉ dùng để format code"
    ],
    answer: 0,
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
      "Càng lớn càng tốt dù không biết expected",
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
      "Trường hợp biên hoặc ít gặp nhưng có thể làm code lỗi",
      "Dòng code đầu tiên của file",
      "Tên folder chứa test",
      "Một loại chart"
    ],
    answer: 0,
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
      "Test pass vì add_one(2) trả về 3",
      "Test fail vì assert không dùng được trong pytest",
      "Test fail vì function phải tên là check_add_one",
      "Test bị bỏ qua mặc định"
    ],
    answer: 0,
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
      "with pytest.raises(ValueError):",
      "with pytest.error(ValueError):",
      "assert ValueError:",
      "try ValueError:"
    ],
    answer: 0,
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
      "parse_positive(-1) phải raise ValueError",
      "parse_positive(-1) phải trả về -1",
      "parse_positive(-1) phải trả về None",
      "parse_positive không được gọi"
    ],
    answer: 0,
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
      "Chuẩn bị dữ liệu hoặc resource dùng chung cho nhiều test",
      "Tự động sửa lỗi assert",
      "Thay thế mọi test function",
      "Chỉ dùng để vẽ biểu đồ"
    ],
    answer: 0,
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
      "@pytest.fixture",
      "@pytest.test",
      "@fixture.pytest",
      "@assert.fixture"
    ],
    answer: 0,
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
      "pytest truyền giá trị trả về của fixture vào test_sum qua tham số sample_values",
      "sample_values phải được gọi thủ công bằng sample_values() trong test",
      "fixture không thể trả về list",
      "test_sum sẽ luôn bị skip"
    ],
    answer: 0,
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
      "Tần suất fixture được tạo lại, ví dụ function/module/session",
      "Số lượng assert trong một test",
      "Tên file output",
      "Mức độ coverage bắt buộc"
    ],
    answer: 0,
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
      "Chạy cùng một test với nhiều bộ input/expected khác nhau",
      "Tự động mock database",
      "Tạo file tạm",
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
      "3 lần",
      "1 lần",
      "2 lần",
      "0 lần"
    ],
    answer: 0,
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
      "Trường hợp input không hợp lệ hoặc tình huống lỗi cần được xử lý đúng",
      "Test luôn phải fail",
      "Test không có assert",
      "Test chỉ chạy trên số âm"
    ],
    answer: 0,
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
      "Tạo đường dẫn thư mục tạm để test logic đọc/ghi file mà không phụ thuộc file thật",
      "Tạo API token tạm",
      "Chạy test song song",
      "Tự động kiểm tra coverage"
    ],
    answer: 0,
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
      "Output được in ra stdout/stderr",
      "Nội dung database thật",
      "Tốc độ network",
      "Mức độ nén file Parquet"
    ],
    answer: 0,
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
      "Khi cần thay đổi tạm thời biến môi trường, attribute hoặc function trong phạm vi test",
      "Khi cần train model",
      "Khi cần tạo chart",
      "Khi muốn bỏ toàn bộ assert"
    ],
    answer: 0,
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
      "assert required_cols.issubset(set(result.columns))",
      "assert result.columns == required_cols",
      "print(result.columns)",
      "assert len(result) > 0"
    ],
    answer: 0,
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
      "assert result[\"user_id\"].notna().all()",
      "assert result[\"user_id\"].isna().all()",
      "assert result[\"user_id\"].empty",
      "print(result[\"user_id\"])"
    ],
    answer: 0,
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
      "assert not result[\"order_id\"].duplicated().any()",
      "assert result[\"order_id\"].duplicated().all()",
      "assert result[\"order_id\"].isna().any()",
      "print(result[\"order_id\"].duplicated())"
    ],
    answer: 0,
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
      "Vì sai số biểu diễn số thực có thể làm hai kết quả gần bằng nhau nhưng không exactly equal",
      "Vì pytest không hỗ trợ float",
      "Vì float không thể test",
      "Vì assert chỉ dùng cho string"
    ],
    answer: 0,
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
      "So sánh số thực với sai số cho phép",
      "Mock API response",
      "Tạo fixture mới",
      "Skip test"
    ],
    answer: 0,
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
      "Cùng input và môi trường kiểm soát thì cho kết quả giống nhau mỗi lần chạy",
      "Test lúc pass lúc fail ngẫu nhiên",
      "Test không có expected result",
      "Test chỉ dùng print"
    ],
    answer: 0,
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
      "Nhóm test theo module/chức năng và đặt tên test mô tả behavior cần kiểm tra",
      "Để mọi test trong một file rất lớn không có tên rõ ràng",
      "Chỉ viết test sau khi production lỗi",
      "Không dùng assert để tránh fail"
    ],
    answer: 0,
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
      "Thay thế dependency bên ngoài bằng object giả lập để test logic cô lập hơn",
      "Tự động tăng coverage lên 100%",
      "Xóa mọi exception",
      "Chạy test không cần assert"
    ],
    answer: 0,
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
      "Để test không phụ thuộc internet, rate limit hoặc trạng thái API thật",
      "Để bypass quyền truy cập trái phép",
      "Để không cần kiểm tra output",
      "Để test luôn pass dù code sai"
    ],
    answer: 0,
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
      "Vì database thật làm test chậm, không cô lập và phụ thuộc trạng thái bên ngoài",
      "Vì pytest không thể chạy nếu có database",
      "Vì database luôn trả dữ liệu sai",
      "Vì assert không dùng được với dữ liệu database"
    ],
    answer: 0,
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
      "Một function/dependency có được gọi với tham số kỳ vọng hay không",
      "Coverage có luôn đạt 100% không",
      "Database thật có đang online không",
      "CPU của máy có đủ mạnh không"
    ],
    answer: 0,
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
      "Mỗi test nên độc lập, không phụ thuộc trạng thái do test khác để lại",
      "Chỉ chạy một test duy nhất trong project",
      "Không dùng fixture trong test",
      "Không cần cleanup dữ liệu tạm"
    ],
    answer: 0,
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
      "Test lúc pass lúc fail dù code không đổi",
      "Test luôn fail vì bug rõ ràng",
      "Test không có tên bắt đầu bằng test_",
      "Test chỉ dùng cho dữ liệu float"
    ],
    answer: 0,
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
      "Chuẩn bị resource trước test và cleanup sau test",
      "Tăng số lượng assert",
      "Tự động sửa test fail",
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
      "Chia sẻ fixtures hoặc cấu hình pytest cho nhiều file test",
      "Lưu dữ liệu production chính",
      "Thay thế mọi file test",
      "Tạo dashboard test"
    ],
    answer: 0,
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
      "Gắn nhãn test để chọn lọc hoặc phân loại test khi chạy",
      "Đổi tên tất cả function",
      "Tự động mock API",
      "Tính accuracy model"
    ],
    answer: 0,
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
      "Khi muốn bỏ qua một test có chủ đích và nêu lý do rõ ràng",
      "Khi muốn test fail nếu code đúng",
      "Khi muốn mock database",
      "Khi muốn tạo fixture session"
    ],
    answer: 0,
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
      "Test được kỳ vọng fail do bug/limitation đã biết",
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
      "Tự động chạy test khi push code hoặc tạo pull request",
      "Tự động viết toàn bộ source code",
      "Tự động cấp quyền database production",
      "Tự động bỏ qua mọi lỗi"
    ],
    answer: 0,
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
      "Nhiều dòng/nhánh code đã được test chạy qua, nhưng không đảm bảo code đúng hoàn toàn",
      "Code chắc chắn không còn bug",
      "Test không cần assert nữa",
      "Model chắc chắn chính xác"
    ],
    answer: 0,
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
      "Test từng transformation nhỏ với input nhỏ, expected rõ, kiểm tra schema/null/duplicate khi cần",
      "Chỉ chạy job lớn rồi nhìn output thủ công",
      "Bỏ qua edge case để test ngắn hơn",
      "Gọi API và database thật trong mọi unit test"
    ],
    answer: 0,
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
      "Function phụ thuộc API/database/file system bên ngoài nhưng logic cần test nằm ở xử lý kết quả",
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
      "Vì input nhỏ giúp phát hiện lỗi logic nhanh, dễ debug và có expected output rõ",
      "Vì job lớn không bao giờ lỗi",
      "Vì pytest không chạy được với pandas",
      "Vì test nhỏ thay thế hoàn toàn monitoring production"
    ],
    answer: 0,
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
      "Test kiểm tra rule cụ thể như amount >= 0, key không null, schema đủ cột",
      "Test chỉ assert True để tăng số lượng test",
      "Test chỉ print DataFrame ra màn hình",
      "Test phụ thuộc dữ liệu live thay đổi mỗi phút mà không kiểm soát"
    ],
    answer: 0,
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
      "Kết hợp unit test cho transformation nhỏ, integration test cho luồng chính, mock external dependency và chạy test trong CI",
      "Chỉ test bằng cách mở dashboard xem bằng mắt",
      "Chỉ viết test sau khi deploy production lỗi",
      "Bỏ qua test vì dữ liệu có thể thay đổi"
    ],
    answer: 0,
    explanation: "Một project analytics tốt nên có nhiều lớp test: unit test cho logic nhỏ, integration test cho workflow, mock dependency bên ngoài và CI để chạy tự động."
  }
];