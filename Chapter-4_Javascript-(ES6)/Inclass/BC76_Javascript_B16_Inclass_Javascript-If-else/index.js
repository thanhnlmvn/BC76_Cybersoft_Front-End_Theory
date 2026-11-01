//  --------------- Toán tử ---------------
// Toán tử so sánh
// 1. So sánh bằng giá trị (==)
let hoTenA = "Minh Long";
// let hoTenB = "minh long";
let hoTenB = "Minh Long";
let ketQua = hoTenA == hoTenB;
console.log(ketQua);

let diemToan = 8;
// let diemVan = 5;
// let diemVan = 8;

// So sánh số khi so sánh == nó sẽ ép về kiểu dữ liệu số
let diemVan = "8";
// let diemVan = "6";
console.log(diemToan == diemVan);

// 2. So sánh bằng giá trị và kiểu dữ liệu (===)
console.log(diemToan === diemVan);
console.log(hoTenA === hoTenB);

// 3. So sánh khác (!=)
let hocSinhA = "Bảo Long";
let hocSinhB = "Văn Đạt";
console.log(hocSinhA != hoTenB); // true
// Tương tự với so sánh bằng == cũng sẽ ép kiểu dữ liệu về số để so sánh
console.log(diemToan != diemVan); // false

// 4. So sánh khác giá trị hoặc kiểu dữ liệu (!==)
console.log(diemToan !== diemVan); // true
console.log(hoTenA !== hoTenB); // false

// 5. So sánh lớn hơn (>) và lớn hơn hoặc bằng (>=)
let ketQua1 = 25 * 11 - 10;
let ketQua2 = 98 - 50 * 3;
console.log(ketQua1);
console.log(ketQua2);
console.log(ketQua1 > ketQua2); // true
console.log(ketQua2 >= ketQua1); // false

// 6. Toán tử phủ định (!)
let mayMan = true;
console.log(!mayMan); //false
console.log(mayMan);

// 7. Toán tử và (&&)
// Trường đại học C yêu cầu học sinh khi ứng tuyển phải có tổng điểm trên 20 và điểm toán phải đạt trên 8
let sinhVienA = "Lâm";
let diemToanA = 7.5;
let diemVanA = 6;
let diemAnhA = 9;

// Thực hiện từ trái sang phải nếu đk đầu false sẽ ngưng lại và trả về false
let ketQua3 = diemAnhA + diemVanA + diemAnhA > 20 && diemToanA > 8;
console.log(ketQua3);

// 8. Toán tử hoặc (||)
// Mẹ đưa 50k ra chợ mua đồ, nếu như 50k đủ mua bịch muối thì mua 1 bịch, còn không thì mua bó rau
let bichMuoi = 55000;
let boRau = 25000;

// Thực hiện từ trái sang phải nếu đk đầu true sẽ ngưng lại và trả về true
// Nếu kết quả đầu false sẽ xét tiếp đk2 lần lượt nếu tất cả đều sai sẽ trả về false
let ketQua4 = bichMuoi < 50000 || boRau < 50000; //true
console.log(ketQua4);

// --------------- Cấu trúc điều kiện (if else,...) ---------------
// Công ty thực hiện tính toán lương cho nhân viên, nếu như làm trên 180t thì sẽ được tính lương, còn nếu không dủ thì lương trả vào tháng sau
let thoiGianLam = 190;
let tienLuong = 0;
let soTienLuong1h = 100000;

if (thoiGianLam > 180) {
  // Tất cả hành động xử lý khi điều kiện đúng
  tienLuong = thoiGianLam * soTienLuong1h;
}
console.log(tienLuong);

// Ép kiểu dữ liệu từ string thành number
let number = "9";

// Phương thức Number
// console.log(Number(number));
// console.log(typeof Number(number));

// console.log(number * 1);
// console.log(typeof (number * 1));

// console.log(+number);
// console.log(typeof +number);

// Yêu cầu tính toán kết quả lương nhân viên khi họ bấm vào nút tính tiền lương. Nếu người dùng làm việc chăm chỉ và trên 150h thì lương sẽ được tính toán theo công thức = soTienLuong * soGioLam * 2, còn nếu không đủ 150h thì công thức = soTienLuong * soGioLam. Tính toán xong thì thực hiện đưa dữ liệu lên thẻ div có class ketQua (tìm hiểu về cách chuyển đổi số thành kiểu tiền tệ đề hiển thị)
let soTienLuong = 150000;

document.querySelector(".btn-dark").onclick = function () {
  let soGioLam = document.getElementById("thoiGianLam").value * 1;

  let tienLuong = 0;

  let heSoLuong = 1;

  if (soGioLam > 150) {
    heSoLuong = 2;
  }

  tienLuong = soGioLam * soTienLuong * heSoLuong;

  document.querySelector(".ketQua").innerHTML =
    `Tiền lương: ${tienLuong.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    })}`;
};

// Cấu trúc điều kiện if else
// Quán ăn hadikao mở tiệc ưu đãi khách hàng, với hóa đơn trên 150k thì được giảm 30% còn nếu ăn ít hơn hoặc bằng  150k thì sẽ giảm 10%

let soTienAn = 500000;
let giaUuDai = 0;

if (soTienAn > 150000) {
  // Các hành động xử lý khi soTienAn lớn hơn 150000
  giaUuDai = 0.3;
} else {
  // Nơi xử lý khi biểu thức điều kiện trả về false ( < 150000)
  giaUuDai = 0.1;
}

let tienAnDaGiamGia = soTienAn * (1 - giaUuDai);
console.log(giaUuDai);
console.log(tienAnDaGiamGia);

// Một nhà hàng lớn mở khai chương, nhà hàng có khuyến mãi là nếu khách hàng đi trên 5 người và có số tiền ăn trên 3000000 thì giảm giá 40%, còn nếu đi trên 5 người mà số tiền ăn dưới 3000000 thì giảm 30%, nếu đi dưới 5 người và có hóa đơn trên 3000000 thì giảm 20% còn nếu đi dưới 5 người và có hóa đơn dưới 3000000 thì giảm 10%

document.querySelector(".btn-primary").onclick = function () {
  let soTienAn = document.getElementById("soTienAn").value * 1;
  let soNguoiAn = document.getElementById("soNguoi").value * 1;

  let heSoGiamGia = 0;
  let tienAnPhaiTra = 0;

  if (soNguoiAn >= 5) {
    if (soTienAn >= 3000000) {
      heSoGiamGia = 0.4;
    } else {
      heSoGiamGia = 0.3;
    }
  } else {
    if (soTienAn >= 3000000) {
      heSoGiamGia = 0.2;
    } else {
      heSoGiamGia = 0.1;
    }
  }

  tienAnPhaiTra = soTienAn * (1 - heSoGiamGia);

  document.querySelector(".ketQua2").innerHTML =
    `Tiền cần phải trả: ${tienAnPhaiTra.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    })} <br>
  Được giảm: ${heSoGiamGia * 100}%
  `;
};

// Tìm số lớn nhất
document.getElementById("btnTimSLN").onclick = function () {
  /**
   * Input: Lấy value input
   * number1 (number)
   * number2 (number)
   */
  let number1 = document.getElementById("number1").value * 1;
  let number2 = document.getElementById("number2").value * 1;

  // Output: soLN (number)
  let soLN = 0;

  // Progress
  // // Cách 1: Tạo biến cờ cho soLN gán number1
  // soLN = number1;

  // // Nếu number1 < number2 sẽ gán lại soLN = number2
  // if (soLN < number2) {
  //   soLN = number2;
  // }

  // // Cách 2: Xử lý = if else
  // if (number1 > number2) {
  //   soLN = number1;
  // } else {
  //   soLN = number2;
  // }

  // Cách 3: Xử lý = toán tử 3 ngôi
  soLN = number1 > number2 ? number1 : number2;

  document.getElementById("outputTimSLN").innerHTML = `Số lớn nhất là: ${soLN}`;
};

// Toán tử ba ngôi
// Condidtion ? "Đúng" : "Sai"
const TODAY = 2;
// if (today == 2) {
//   console.log("Hôm nay đi học");
// } else {
//   console.log("Hôm nay đi chơi");
// }

TODAY == 2 ? console.log("Hôm nay đi học") : console.log("Hôm nay đi chơi");

// Cấu trúc điều kiện if else if
// Dạy bé đọc số
const TXT_NUMBER = 3;
if (TXT_NUMBER == 1) {
  console.log("Đây là số 1");
} else if (TXT_NUMBER == 2) {
  console.log("Đây là số 2");
} else if (TXT_NUMBER == 3) {
  console.log("Đây là số 3");
} else {
  console.log("Không biết đọc");
}

// Viết chương trình nhập vào thông tin 1 mặt hàng Tên, số lượng, đơn giá. Tính và xuất tiền phải trả dựa theo nguyên tắc: Nếu mua với số lượng từ 50 - 100 sẽ được giảm 8%, mua với số lượng trên 100 thì số lượng từ 100 trở đi sẽ được giảm 12%

/**
 * Giả sử
 * soLuong = 1
 * donGian = 10000
 *
 * - Nếu soLuong < 50
 * tong = soLuong * donGian
 *
 * - Nếu soLuong >= 50 && soLuong <=100 (giảm 8%)
 * tong = 49 * donGia + (soLuong - 49) * (donGian * (1 - 0.08))
 *
 * - Nếu soLuong > 100
 * tong = 49 * donGia + 51 * (donGian * (1- 0.08)) + (soLuong - 100) * (donGian * (1 - 0.12))
 */

document.getElementById("btnTinhTienMuaHang").onclick = function () {
  /**
   * Input:
   * Tên mặt hàng (string)
   * Số lượng mua (number)
   * Đơn giá (number)
   */
  let tenHang = document.getElementById("tenMatHang").value;
  let soLuongMua = document.getElementById("soLuongMua").value * 1;
  let donGia = document.getElementById("donGia").value;

  /**
   * Output:
   * result (string)
   */
  let tongTien = 0;
  let result = "";

  // Progress
  const TY_lE_GIAM_1 = 8 / 100;
  const TY_lE_GIAM_2 = 12 / 100;

  tongTien = soLuongMua * donGia;
  if (soLuongMua >= 50 && soLuongMua <= 100) {
    tongTien = 49 * donGia + (soLuongMua - 49) * donGia * (1 - TY_lE_GIAM_1);
  } else if (soLuongMua >= 100) {
    tongTien =
      49 * donGia +
      51 * donGia * (1 - 0.08) +
      (soLuongMua - 100) * donGia * (1 - TY_lE_GIAM_2);
  }

  result = `<p class='alert alert-success'>Tên mặt hàng: ${tenHang}
  <br>
  Số lượng mua: ${soLuongMua}
  <br>
  Đơn giá: ${donGia.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}
  <br>
  Tổng tiền cần thanh toán: ${tongTien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}
  </p>
  `;

  document.getElementById("kqTienMuaHang").innerHTML = result;
};

document.getElementById("btnTinhDiemTB").onclick = function () {
  const HO_TEN_HS = document.getElementById("hoTenHS").value;
  const DIEM_TOAN = document.getElementById("diemToan").value * 1;
  const DIEM_LY = document.getElementById("diemLy").value * 1;
  const DIEM_HOA = document.getElementById("diemHoa").value * 1;

  const DIEM_TB = ((DIEM_TOAN + DIEM_LY + DIEM_HOA) / 3).toFixed(1);
  let xepLoai = "";

  if (DIEM_TB < 5 && DIEM_TB >= 0) {
    xepLoai = "Yếu";
  } else if (DIEM_TB >= 5 && DIEM_TB < 6.5) {
    xepLoai = "Trung Bình";
  } else if (DIEM_TB >= 6.5 && DIEM_TB < 8.5) {
    xepLoai = "Khá";
  } else if (DIEM_TB >= 8.5 && DIEM_TB <= 10) {
    xepLoai = "Giỏi";
  } else {
    xepLoai = "Học sinh siêu nhân điểm vượt qua hệ 10";
  }

  const RESULT = `
  <p class="alert alert-success">
  Họ tên: ${HO_TEN_HS}
  <br>
  Điểm Trung Bình: ${DIEM_TB}
  <br>
  Xếp loại: ${xepLoai}
  </p>
  `;

  document.getElementById("kqDiemTB").innerHTML = RESULT;
};

// Cấu trúc điều kiện switch case
let nguoiDung = "Ba";

// Kiểm tra dữ liệu đang có trong biến người dùng, nếu kiểm tra người dùng là Ba thì thông báo cho phép sử dụng, còn lại là mẹ và chị thì không cho phép
switch (nguoiDung) {
  // Case là các trường hợp có thể xảy ra từ người dùng
  case "Ba": {
    console.log("Cho phép sử dụng máy tính");

    // Break để ngưng switch case nếu đã thuộc vào case cần xử lý
    break;
  }
  case "Mẹ": {
    console.log("Không cho phép sử dụng");
    break;
  }
  case "Chị": {
    console.log("Không cho phép sử dụng");
    break;
  }

  // default dùng để xử lý các giá trị không thuộc vào case nào
  default: {
    console.log("Ai vậy?");
  }
}

// Một nhà hàng mở quá ăn và yêu cầu viết cho họ một chương trình tính số tiền ăn của mỗi khách hàng, biết rằng ở đây sẽ được cung cấp 3 giá trị bao gồm số lượng người, tổng số tiền và số % giảm giá. Hãy tính toán với 3 dữ kiện được cung cấp và trả kết quả cho người dùng biết về số tiền mỗi người cần thanh toán (yêu cầu có sử dụng cấu trúc điều kiện switch case). Nếu như số lượng khách đủ 3 người thì bonus giảm thêm 400k còn nếu đủ 5 người thì sẽ giảm thêm 1tr

document.getElementById("btnTinhTien").onclick = function () {
  const SO_NGUOI = document.getElementById("soNguoi1").value * 1;
  const SO_TIEN_AN = document.getElementById("soTienAn1").value * 1;
  const TIEN_GIAM_GIA = document.getElementById("soTienGiamGia").value * 1;

  let tongTien = 0;
  let tongTienMoiNguoiCanTra = 0;
  let bonus = 0;

  switch (SO_NGUOI) {
    case 3:
      bonus = 400000;
      break;
    case 5:
      bonus = 1000000;
      break;
  }

  tongTien = SO_TIEN_AN * (1 - TIEN_GIAM_GIA / 100) - bonus;
  tongTienMoiNguoiCanTra = Math.ceil(tongTien / SO_NGUOI);

  const RESULT = `
  Tổng tiền cần thanh toán: ${tongTien.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}
  <br>
  Mỗi người cần trả: ${tongTienMoiNguoiCanTra.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  })}
  `;

  document.getElementById("kqTinhTien").innerHTML = RESULT;
};
