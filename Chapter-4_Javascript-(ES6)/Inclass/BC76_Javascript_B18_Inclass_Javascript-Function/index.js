// Định nghĩa về hàm
// Khách hàng yêu cầu thực hiện cung cấp giá món hoành thánh là 50k và số tiền đó giảm giá là 10%. Yêu cầu viết chức năng tính toán số tiền

// Function Declarations
// Lệnh trả về (return), tham số và đối số, default parameter
// (tham số)
// default parameter sẽ gán giá trị mặc định nếu tham giá không có đối số tương ứng
function tinhSoTienMonAN(tienMonAn, giamGia = 10) {
  // Những xử lý của hàm khi được gọi tới
  let ketQua = tienMonAn * (1 - giamGia / 100);
  // console.log(tienMonAn);
  // console.log(giamGia);
  // console.log(ketQua);

  return ketQua;
}

// Gọi hàm
// (đối số)
// tinhSoTienMonAN(100000);
// tinhSoTienMonAN(200000, 20);

// Khi có một hàm có xử dụng lệnh return, thì kết quả sẽ được trả về và có thể tạo biến để lưu trữ, nếu không sử dụng return kết quả nhật được sẽ là undifined
let ketQua = tinhSoTienMonAN(100000);

console.log(ketQua);

//  Thực hiện tính toán giúp cho bên trường đại học về điểm số của các sinh viên. Có 3 môn Toán Văn Anh cần tính toán, sau khi tính toán sẽ thực hiện xử lý kiểm tra xem sinh viên xếp loại gì: trên 8 là học sinh giỏi, 6 < dtb < 8 (sinh viên khá), 6 > dtb (sinh viên trung bình). Nhà trường yêu cầu về phần xử lý của tính điểm trung bình và xếp loại sẽ được tách ra thành 2 function riêng để nhà trường có thể mang đi sử dụng ở các nơi khác

function tinhDiemTB(diemToan, diemVan, diemAnh) {
  return (diemToan + diemVan + diemAnh) / 3;
}

function xepLoai(diemTB) {
  let xepLoai = "";
  if (diemTB >= 8) {
    xepLoai = "Giỏi";
  } else if (diemTB < 8 && diemTB > 6) {
    xepLoai = "Khá";
  } else if (diemTB <= 6) {
    xepLoai = "Trung bình";
  }

  return xepLoai;
}

function layValue(id) {
  return document.getElementById(id).value;
}

document.getElementById("btnKiemTraXH").onclick = function () {
  const DIEM_TOAN = layValue("diemToan") * 1;
  const DIEM_VAN = layValue("diemVan") * 1;
  const DIEM_ANH = layValue("diemAnh") * 1;

  const DIEM_TB = tinhDiemTB(DIEM_TOAN, DIEM_VAN, DIEM_ANH);

  const XEP_LOAI_SV = xepLoai(DIEM_TB);

  document.getElementById("kqXH").innerHTML = `
  Tổng điểm trung bình: ${DIEM_TB.toFixed(1)}
  <br>
  Xếp loại: ${XEP_LOAI_SV}
  `;
};

// Function Expresstion
// Tên xe, hãng xe, màu sắc, giá tiền
let hienThiThongTinXe = function (tenXe, hangXe, mauSac, giaTien) {
  console.log(
    `Chiếc xe này ${tenXe} của hãng ${hangXe} có màu ${mauSac} và có giá tiền ${giaTien}`,
  );
};

hienThiThongTinXe("May bach S450", "Mercedes", "Màu đen", "4 tỏi 8");

// Sự khác nhau giữ function declaration và expression là hosting
// function declaration có cơ chế hosting sẽ đưa function lên đầu dạng global nên khi gọi hàm sử dụng được trên toàn bộ file
// Ngược lại function expression không có cơ chế hosting nên khi khai báo hàm này chỉ sử dụng được từ phần dưới được khai báo

// Arrow function (hàm mũi tên)
// tương tự với function expression hàm arrow không có cơ chế hosting
// let gioiThieuMonAn = (tenMon) => {
//   return `Món ${tenMon} là món ngon nhất thế giới`;
// };

// Biến thể đặc biệt
// Biến thể 1: khi arrow function chỉ có một lệnh return chạy cho phép loại bỏ {} và return để cú pháp ngắn hơn
let gioiThieuMonAn = (tenMon) => `Món ${tenMon} là món ngon nhất thế giới`;
// Biến thể 2: Khi arrow function chỉ có 1 tham số, cho phép loại bỏ ()

let gioiThieu = gioiThieuMonAn("Bún bò");
console.log(gioiThieu);

// Callback function
// Nhà trường yêu cầu thực hiện tính điểm TB cho 3 môn toán hóa sinh. Nhà trường yêu cầu ở mỗi lần chạy hàm tính điểm TB sẽ muốn thực hiện thêm một số hành động khác nhau: vd khi tính xong điểm tb sẽ thông báo cho sinh viên đó biết hoặc khi tính xong điểm sẽ xếp loại sinh viên đó
function thongBaoSinhVien(diem) {
  console.log(`Thông báo, điểm của bạn là ${diem}`);
}

function xepLoaiSV(diem) {
  if (diem >= 8) {
    console.log("Sinh viên loại giỏi");
  } else {
    console.log("Sinh viên loại khá");
  }
}

function diemTB(toan, hoa, sinh, chucNang) {
  let diemTB = (toan + hoa + sinh) / 3;
  // console.log(diemTB);
  // console.log(chucNang);

  // Callback
  // Tham số chức năng đóng vai trò là một callback function giúp thực các xử lý khác nhau khi tính toán điểm TB
  chucNang(diemTB);
}

// Ý nghĩa của việc sử dụng callback function: tạo cầu nối giúp xử lý những tác vụ khác nhau từ các giá trị được tính toán trong function, với tham số đóng vai trò callback function, giờ đây mỗi lần function có một kết quả, ta có thể truyền vào một function khác để xử lý các hành động từ kết quả đó
diemTB(8, 6, 9, xepLoaiSV); // Vinh 8 6 9 // xếp loại
diemTB(3, 2, 4, thongBaoSinhVien); // Khải 3 2 4 // thông báo điểm
