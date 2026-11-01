// Tạo một mảng lưu trữ tên của các bạn nữ trong lớp: Linh, Quyên, Lan, Hằng, Hạ
let arrSinhVienNu = ["Linh", "Quyên", "Lan", "Hằng", "Hạ", "Hà"];
console.log(arrSinhVienNu);

// .length kiểm tra độ dài xác định tổng số phần tử có trong mảng
let doDaiMang = arrSinhVienNu.length;
console.log(doDaiMang);

// Vị trí index
// Các phần tử trong mảng đều có vị trí index từ 0 -> n
// Truy cặp tới phần tử trong mảng thông qua vị trí index
let sinhVienLan = arrSinhVienNu[2];
console.log(sinhVienLan);

let sinhVienHa = arrSinhVienNu[4];
console.log(sinhVienHa);

// Gán lại giá trị phần tử trong mảng thông qua vị trí index
arrSinhVienNu[1] = "Thư";
console.log(arrSinhVienNu);

// Vị trí index của phần tử cuối cùng có thể tìm thấy thông qua (tổng độ dài mảng - 1)

// -------------------- Một số phương thức thao tác với mảng --------------------
// .push - phương thức này giúp thêm 1 hoặc nhiều phần tử vào cuối mảng
arrSinhVienNu.push("Huệ");
console.log(arrSinhVienNu);

// .pop - phương thức này giúp lấy phần tử ở cuối mảng ra và có thể tạo biến để lưu trữ
let sinhVienHue = arrSinhVienNu.pop();

console.log(arrSinhVienNu);
console.log(sinhVienHue);

// .unshift - phương thức này giúp thêm 1 hoặc nhiều phần tử vào đầu mảng
arrSinhVienNu.unshift("Cường");
console.log(arrSinhVienNu);

// .shift - phương thức này giúp lấy phần tử ở đầu mảng ra và có thể tạo biến để lưu trữ
arrSinhVienNu.shift();
console.log(arrSinhVienNu);

// -------------------- Thao tác sử dụng vòng lặp để duyệt mảng --------------------
// Nhà hàng C thực hiện chạy phương án bán hàng, rồi các món hàng được bán bao gồm: mì sủi cảo, bún mọc, bún giò heo, xá xíu, với các món vừa kể trên sẽ có giá lần lượt là: 40000, 55000, 32000, 48000. Thực hiện tính tổng giá cho tất cả các món ăn
let arrTienMonAn = [40000, 55000, 32000, 48000, 100000];
let tongTienMonAn = 0;
for (let i = 0; i < arrTienMonAn.length; i++) {
  // console.log(i);
  // console.log(arrTienMonAn[i]);
  tongTienMonAn += arrTienMonAn[i];
}
console.log(tongTienMonAn);

// -------------------- Kỹ thuật rest parameter trong function --------------------
function tinhDiemTb(...listDiem) {
  console.log(listDiem);
  let tongDiem = 0;
  for (let i = 0; i < listDiem.length; i++) {
    tongDiem += listDiem[i];
  }
  let diemTb = tongDiem / listDiem.length;
  console.log(diemTb);

  return diemTb;
}

// tinhDiemTb();
// Khãi đỗ: 9, 10, 8
tinhDiemTb(9, 10, 8);

// Khãi đỗ: 7, 8, 7, 9, 5
tinhDiemTb(7, 8, 7, 9, 5);

// Bài tập thêm sinh viên vào đầu hoặc cuối mảng
// let danhSachSinhVien = ["Nhân", "Thư", "Bình"];
// document.getElementById("kq1").innerHTML = danhSachSinhVien;

let danhSachSinhVien = [];

function layDuLieu(id) {
  return document.getElementById(id).value;
}

document.querySelector(".btn-dark").onclick = function () {
  let tenSinhVien = layDuLieu("nhapTen");

  danhSachSinhVien.unshift(tenSinhVien);

  document.getElementById("kq1").innerHTML = danhSachSinhVien;
};

document.querySelector(".btn-success").onclick = function () {
  let tenSinhVien = layDuLieu("nhapTen");

  danhSachSinhVien.push(tenSinhVien);

  document.getElementById("kq1").innerHTML = danhSachSinhVien;
};

// -------------------- Phương thức indexOf và lastIndexOf --------------------
// Phương thức thao tác với mảng
let arrMonAn = [
  "Bún chả",
  "Mì cay",
  "Mì hoành thánh",
  "Bánh bao hồng kông",
  "Mì cay",
  "Tôm hùm sốt bơ",
];

// .indexOf - Phương thức duyệt mảng giống vòng lặp sẽ đi tìm vị trí phần tử và có thể lưu vị trí phần tử vào biến (duyệt từ vị trí bắt đầu 0 -> n)

// let viTriMiCay = arrMonAn.indexOf("Mì cay");
let viTriMiCay = arrMonAn.indexOf("Mì cay", 2);
console.log(viTriMiCay);

// .lastIndexOf - Phương thức duyệt mảng giống vòng lặp sẽ đi tìm vị trí phần tử và có thể lưu vị trí phần tử vào biến (duyệt từ cuối mảng)
let viTriBanhBao = arrMonAn.lastIndexOf("Bánh bao hồng kông");
console.log(viTriBanhBao);

// Khi sử dụng các phương thức này nó sẽ trả về vị trí phần tử đầu tiên mà nó kiếm được
// Ngoài ra ta có thể truyền tham số thứ 2 để thay đổi vị trí bắt đầu duyệt
// Khi không tìm thấy phần tử trong mảng nó sẽ trả về giá trị index là -1

// Ở cửa hàng spa thú cưng, có một số con mèo lần lượt là: Bánh bao, shopee, quýt, na, cà lem. Bây giờ sẽ thực hiện công việc khách hàng muốn tìm kiếm vị trí của shopee trong mảng. Sau khoảng thời gian hoạt động, cửa hàng có thêm một thú số thú cưng nữa là Bánh bao, Money, Xá xíu. Thực hiện tìm kiếm con mèo Bánh bao cuối cùng thỏa điều kiện
let arrThuCung = [
  "Bánh bao",
  "Shopee",
  "Quýt",
  "Na",
  "Cà Lem",
  "Bánh bao",
  "Money",
  "Xá xíu",
];

document.querySelector(".btn-primary").onclick = function () {
  let viTriShopee = -1;
  for (let i = 0; i < arrThuCung.length; i++) {
    if (arrThuCung[i] == "Shopee") {
      viTriShopee = i;
      break;
    }
  }

  alert(`Vị trí shopee là: ${viTriShopee}`);
};

document.querySelector(".btn-warning").onclick = function () {
  let viTriBanhBao = -1;
  for (let i = arrThuCung.length - 1; i >= 0; i--) {
    if (arrThuCung[i] == "Bánh bao") {
      viTriBanhBao = i;
      break;
    }
  }

  alert(`Vị trí bánh bao là: ${viTriBanhBao}`);
};

// -------------------- Phương thức reverse , sort --------------------
// .reverse - Phương thức cho phép đảo ngược phần tử trong mảng đó lại
// let arrXeHoi = ["BMW", "Toyota", "Ferrari", "Mercedes"];
// let newArrXeHoi = arrXeHoi.reverse();
// console.log(arrXeHoi);
// console.log(newArrXeHoi);

// .sort - Phương thức cho phép sắp xếp phần tử trong mảng
let soNgauNhien = [9, 0, 15, 1, 32, 3];
let tenMonAn = ["Mì", "Bún", "Bánh cuốn", "Màn thầu"];

// Sắp xếp mảng string theo thứ tự từ A - Z
tenMonAn.sort().reverse();
console.log(tenMonAn);

// Sắp xếp số sẽ hơi đặc biệt khi nó dùng số đứng trước để so sánh ví dụ: [0, 1, 15, 3, 32, 9]
// Nên khi muốn sắp xếp số ta cần truyền function vào phương thức sort

// Sắp xếp tăng dần
soNgauNhien.sort((a, b) => a - b);
console.log(soNgauNhien);

// Sắp xếp giảm dần
soNgauNhien.sort((a, b) => b - a);
console.log(soNgauNhien);

// -------------------- Phương thức split, join --------------------
// Đảo ngược chuỗi
// Khách hàng cung cắp một nội dung chuỗi bất kì, yêu cầu developer sẽ thực hiện đảo ngược chuổi cho họ. VD: "Cybersoft" => "tfosrebyC"
// .split("") - Phương thức giúp phần tử chuỗi tách chữ cái thành mảng
// .join("") - Phương thức giúp gộp mảng thành chuỗi

// console.log(tenMonAn.join(","));

function reverseString(string) {
  console.log(string.split("").reverse().join(""));
}

reverseString("Cybersoft");

// -------------------- Phương thức slice và splice --------------------
// Khách hàng cung cấp cho lặp trình viên 1 mảng có 10 phần tử xe hơi, khi hiển thị lên giao diện khách chỉ muốn hiển thị 4 phần tử đầu tiên
let arrXeHoi = [
  "BMW",
  "Toyota",
  "Mercedes",
  "Ferrari",
  "Lamborghini",
  "Audi",
  "Mazda",
  "Kia",
  "Hyundai",
  "For",
];

// .slice - Phương thức giúp cắt phần tử có trong mảng nhận vào vị trí bắt đầu cắt và kết thúc trả về mảng mới và cần biến để lưu trữ mảng đó (Không thay đổi mảng cũ)
let newArrXeHoi = arrXeHoi.slice(3, 7);
console.log(newArrXeHoi);

// Nhà hàng cung cấp một mảng các món ăn trong quán, sau một thời gian buôn bán, nhà hàng loại bỏ món đi, yêu cầu lập trình viên tìm và xóa đi
let arrMonAnMoi = [
  "Bún chả",
  "Mì cay",
  "Mì hoành thánh",
  "Bánh bao hồng kông",
  "Mì cay",
  "Tôm hùm sốt bơ",
];

// .splice - Phương thức giúp xóa phần tử ra khỏi mảng. Ta cần vị trí index của phần tử cần xóa và số lượng phần tử muốn xóa
function xoaMonAn(arrMonAn, tenMon) {
  let index = arrMonAn.indexOf(tenMon);
  // console.log(index);

  // Kiểm tra index khác -1 mới xóa
  if (index != -1) {
    arrMonAn.splice(index, 1);
  }
}

xoaMonAn(arrMonAnMoi, "Mì cay");
console.log(arrMonAnMoi);

// Ngoài ra phương thức .splice còn có thể thêm phần vào mảng lưu ý khi truyền phần tử vào mảng từ vị trí bắt đầu thêm ngược vào đằng sau
// Vd: thêm phần tử vào giữa mảng
let arrKyTu = ["a", "b", "c"];
arrKyTu.splice(2, 0, "e", "f", "r", "k");
console.log(arrKyTu);

// -------------------- Phương thức concat --------------------
let arrTraiCay = ["Táo", "Cam", "Lê", "Dưa hấu", "Dừa"];
let arrTraiCay2 = ["Xoài", "Chuối", "Dừa"];

// .concat - Phương thức nhận rest parameter sẽ giúp gộp lại thành một mảng mới và được lưu trữ ở một biến khác (Không làm thay đổi mảng cũ)
let arrTongHop = arrTraiCay.concat(arrTraiCay2);
console.log(arrTongHop);

// -------------------- Vòng lặp dùng để duyệt mảng for in và for of (ES6) --------------------

let arrPokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];
// Vòng lặp for...in
// Giúp duyệt mảng và trả vị trí index của phần tử trong mảng
for (let i in arrPokemon) {
  // console.log(i);
  // console.log(arrPokemon[i]);
  if (arrPokemon[i] == "Charmander") {
    console.log(i);
  }
}

// Vòng lặp for...of
// Giúp duyệt mảng và trả về phần tử trong mảng
for (let pokemon of arrPokemon) {
  console.log(pokemon);
}

// -------------------- Phương thức filter --------------------
// .filter - Phương thức này là một phương thức của mảng được sử dụng để tạo một mảng mới để lọc ra các phần tử từ mảng hiện có (Trả về True false)
let arrSoNguyenNgauNhien = [
  87, 90, 45, 67, 34, 23, 56, 78, 89, 90, 130, 140, 150, 160,
];
// Khách hàng yêu cầu thực hiện lọc và trả về các số đáp ứng điều kiện lớn hơn 90
let arrKetQua = arrSoNguyenNgauNhien.filter((item, index) => {
  // console.log(item);
  // console.log(index);
  return item > 90;
});
console.log(arrKetQua);

// Với yêu cầu khách hàng đang có ở trên, không sử dụng filter, thực hiện xử lí và lọc ra tất cả sản phẩm mà người dùng cần. Ở đây là yêu cầu cần lọc và tìm kiếm mỗi lúc sẽ khác nhau, có lúc kiếm lớn, có lúc nhỏ hơn
function filterTheoYeuCau(arrCanLoc, fnDieuKienCheck) {
  let arrDaLoc = [];

  for (let item of arrCanLoc) {
    // console.log(fnDieuKienCheck(item));

    // Kiến thức truthy và falsy
    // Khi điều kiện if true sẽ thực hiện trong vòng if
    if (fnDieuKienCheck(item)) {
      arrDaLoc.push(item);
    }
  }

  console.log(arrDaLoc);
}

// Lọc cho anh các số nguyên < 80
function locSoNguyenBeHon80(item, index) {
  let check = item < 80; // nếu item < 80 trả về true | nếu item lớn hơn 80 trả về false
  return check;
}

filterTheoYeuCau(arrSoNguyenNgauNhien, locSoNguyenBeHon80);
filterTheoYeuCau(arrSoNguyenNgauNhien, (soNguyen, index) => soNguyen > 80);

// -------------------- Phương thức forEach và map --------------------
let arrSinhVienNam = ["Khải", "Sang", "Phúc", "Bình", "Lâm", "Hoàng"];

// .map - Phương thức này tạo ra mảng mới tử mảng hiện tại để thay đổi các phần tử trong mảng theo theo ý người dùng mà không làm thay đổi mảng cũ
let newArrSinhVienNam = arrSinhVienNam.map((item, index) => {
  // Trả về một phần tử muốn thêm vào mảng mới
  return "Sinh Viên " + item; // Sinh Viên Khải
});

// Không thay đổi được mảng hiện tại chỉ clone ra mảng mới
arrSinhVienNam.map((item) => "Anh " + item);

console.log(arrSinhVienNam);
console.log(newArrSinhVienNam);

// Các số điểm của trường ==> đếm xem có bao nhiêu sinh viên có điểm
let arrSoDiem = [6, 3, 9, 7, 1, 5];

let count = 0;

// .forEach - Phương thức này dùng để duyệt mảng giống vòng lặp nó chỉ duyệt và không trả về mảng mới giống map và filter
arrSoDiem.forEach((item, index) => {
  if (item > 6) {
    count++;
  }
});

console.log(count);
