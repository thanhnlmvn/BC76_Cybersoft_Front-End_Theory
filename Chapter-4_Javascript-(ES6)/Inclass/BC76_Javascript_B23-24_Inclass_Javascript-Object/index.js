// Đối tượng (object) thông tin của một sinh viên: mssv(123), tên Khải, giới tính Nam, điểm toán 10
let sinhVienKhai = {
  // Thuộc tính và giá trị (property và value)
  mssv: 123,
  hoTen: "Quang Khải",
  gioiTinh: true, // true là nam và false là nữ
  diemToan: 10,

  // Phương thức
  tinhDiemTB: function () {
    // Con trỏ this sẽ là object VD: ở đây this sẽ đại diện cho object sinhVienKhai
    let diemTb = (this.diemToan + this.diemVan + this.diemLy) / 3;
    console.log(diemTb);
  },
};
console.log(sinhVienKhai);

// Truy suất dữ liệu
console.log(sinhVienKhai.diemToan);
// console.log(sinhVienKhai.abc); // Khi gọi thuộc tính không có trong object sẽ trả về undefineđ

// DOM là kiểu dữ liệu object
console.log(document.getElementById("demo"));
console.log(typeof document.getElementById("demo"));

// Truy suất dữ liệu cách 2
// Điểm khác nhau là cách 2 này sẽ linh động hơn khi có thể truyền biến hay string để truy xuất dữ liệu
let abc = "hoTen";
let tenSinhVien = sinhVienKhai[abc];
console.log(tenSinhVien);

let idTheH2 = document.getElementById("hoTen").id; // "hoTen"
// console.log(idTheH2);
let tenSinhVien2 = sinhVienKhai[idTheH2]; // ["hoTen"]
console.log(tenSinhVien2);

// Gán lại giá trị
sinhVienKhai.mssv = "FE140";
console.log(sinhVienKhai);

sinhVienKhai["diemToan"] = 8;
console.log(sinhVienKhai);

// Tạo thuộc tính mới
sinhVienKhai.diemVan = 5;
console.log(sinhVienKhai);

sinhVienKhai["diemLy"] = 9;
console.log(sinhVienKhai);

// Gọi phương thức chứa function
sinhVienKhai.tinhDiemTB();

// Tham trị - tham chiếu
// Giá trị tham trị là khi biến tạo ra gán cho biến được tạo trước đó sẽ lấy được giá trị của biến trước đó ra
// Khi cần xử lý biến tạo ra cần gán giá trị khác thì biến mang giá trị trước đó sẽ không bị ảnh hưởng
let a = 5;
let b = "Hello";
let c = true;
let d = c;
console.log(d);
d = false;
console.log(c); // true vẫn giữ được giá trị ban đầu

// Giá trị tham chiếu gồm array và object
// Khi tạo 2 kiểu dữ liệu này sẽ tạo ra 1 vùng nhớ biến được tạo gán giá trị của biến trước đó sẽ trỏ chung vào vùng nhớ nên là khi thay đổi giá trị biến được clone ra thì giá trị của biến trước đó cũng sẽ thay đổi
let soA = {
  thuTu: 1,
  ten: "Năm văn A",
};

let soB = soA;

// console.log(soB);
// soB.ten = "Quang Khải";
// console.log(soA); // object soA bị thay đổi giá trị ten giống soB

let soC = {
  thuTu: 1,
  ten: "Năm văn A",
};

console.log(soA == soB); // Giống vùng nhớ nên ra true
console.log(soA == soC); // Dù giống nhau về thuộc tính và giá trị vẫn ra false vì khác vùng nhớ

// ------- Kỹ thuật clone object và array -------
// -Kỹ thuật clone Speard operator (ES6)-
let xeHoi = {
  ten: "Xpander",
  hang: "mitsu",
  mauSac: "Cam",

  hienThiXeHoi: function () {
    console.log("Tôi là xe hơi");
  },
};

// ...object sẽ clone được và tạo ra vùng nhớ khác để lưu trữ (Speard operator)
let xeTai = { ...xeHoi, ten: "Volvo", soLuong: 10 };

console.log(xeTai == xeHoi);

// xeTai.ten = "Volvo";
console.log(xeHoi);
console.log(xeTai);

// Clone array
let arrSinhVien = ["Thư", "Hoàng", "Tro"];
let arrNewSinhVien = [...arrSinhVien];
console.log(arrNewSinhVien);

// -Kỹ thuật clone Object.assign (ES5)-
// Object.assign dữ liệu nhận vào sẽ là một object nhận dữ liệu  và một object cho dữ liệu
let xeContainer = Object.assign({}, xeHoi);
xeContainer.ten = "Hổ vồ";
console.log(xeHoi == xeContainer);
console.log(xeContainer);

// -Kỹ thuật clone bằng phương thức JSON-
// JSON.stringify nhận và 1 array hoặc object sẽ chuyển đổi về thành chuỗi dữ liệu
let objectString = JSON.stringify(xeHoi);
console.log(objectString);
console.log(typeof objectString);

// JSON.parse sẽ nhận JSON.stringify có cấu trúc của array hoặc object và đổi lại thành dữ liệu tương ứng
// Tuy nhiên điểm yếu của việc clone bằng JSON này sẽ không thể clone các phương thức đi kèm của object được khai báo
let xeBanTai = JSON.parse(objectString);
xeBanTai.ten = "Mini bus";
console.log(xeBanTai);
console.log(xeHoi);

// ------- Destructuring (ES6) -------
// Kỹ thuật bóc tách nhanh giá trị
let monMiXao = {
  tenMon: "Mì xào bò",
  soLuongMon: 5,
  giaTienMonAn: 14000,
};
// let tenMon = monMiXao.tenMon;

// Cách sử dụng khai báo biến cùng tên với thuộc tính của object
let { tenMon, soLuongMon, giaTienMonAn } = monMiXao;
console.log(tenMon);
console.log(soLuongMon);
console.log(giaTienMonAn);

// Cách sử dụng với array
// Điểm yếu của cách này khi muốn lấy phần tử nằm ở vị trí lớn cần phải khai báo hết toàn bộ tên biến tới phần cần lấy
// VD: [a,b,c,d,...,phanTu10]
let arrMonAn = ["Mì xào giòn", "Hủ tiếu", "Cua rang me"];
let [miXao, huTieu, cuaRangMe] = arrMonAn;

console.log(miXao);
console.log(huTieu);
console.log(cuaRangMe);

// Loại bỏ phần tử trùng lặp khỏi mảng
let arrNumber = [14, 25, 11, 14, 7, 4, 2, 98, 25, 35, 7];
// Khách hàng tên K cung cấp một mảng các số tự nhiên. Yêu cầu lập trình viên xử lý loại bỏ các phần tử trùng lặp khỏi mảng

// // Cách tối ưu nhất sử dụng 1 vòng lặp và object rất hay
// let abcd = {};
// let arrNewNumber = [];
// for (let number of arrNumber) {
//   if (!abcd[number]) {
//     abcd[number] = true;
//     arrNewNumber.push(number);
//   }
// }

// console.log(arrNewNumber);

// // Cách 2 sort mảng
// let arrNumberSort = arrNumber.sort((a, b) => a - b);
// // console.log(arrNumberSort);
// let newArrNumber = [];

// // [2, 4, 7, 7, 11, 14, 14, 25, 25, 35, 98]
// for (let number of arrNumber) {
//   let viTriCuoiCung = newArrNumber.length - 1;
//   if (newArrNumber[viTriCuoiCung] != number) {
//     newArrNumber.push(number);
//   }
// }

// console.log(newArrNumber);

// Cách 3 sử dụng 2 vòng lặp để duyệt mảng
// [14, 25, 11, 14, 7, 4, 2, 98, 25, 35, 7]
for (let i = 0; i < arrNumber.length; i++) {
  for (let z = i + 1; z < arrNumber.length; z++) {
    if (arrNumber[i] == arrNumber[z]) {
      arrNumber.splice(z, 1);
    }
  }
}

console.log(arrNumber);

// Sử dụng vòng lặp for in để duyệt object, giá trị nhận được sẽ là key (tên thuộc tính)
let sinhVienChamChi = {
  mssv: 124,
  hoTen: "Nguyễn Văn A",
  gioiTinh: true,
  diemToan: 9,
  diemVan: 8,
  diemLy: 10,
};

for (let key in sinhVienChamChi) {
  // console.log(key);
  console.log(sinhVienChamChi[key]);
}

// ------- Object Literal (ES6) -------
let tenPokemon = "Charmender";
let pokemon = {
  he: "Lửa",
  tanCong: 120,
  phongThu: 60,
  // Object Literal khi gán biến vào object thuộc tính và giá trị sẽ được lưu trữ vào object luôn
  tenPokemon,
};

console.log(pokemon);

// ------- Lớp đối tượng OOP -------
// hoTen, email, sdt, gioiTinh
class SinhVien {
  hoTen = "";
  email = "";
  sdt = "";
  gioiTinh = "";

  // Phương thức khởi tạo để gán giá trị vào thuộc tính
  constructor(ten, email, phone, gioiTinh) {
    // console.log(ten);
    // console.log(email);
    // console.log(phone);
    // console.log(gioiTinh);

    // Con trỏ this ở đây đại diện cho object mà object tạo ra từ class SinhVien
    // Vd sinhVienThu =  new SinhVien() thì this ở đây là sinhVienThu
    this.hoTen = ten;
    this.email = email;
    this.sdt = phone;
    this.gioiTinh = gioiTinh;
  }

  hienThiThongTin = function () {
    console.log(`Chúc mừng sinh viên ${this.hoTen} đã đậu vào trường C`);
  };
}

// Cách sử dụng lớp đối tượng để thực hiện và tạo ra một lớp đối tượng mới có cấu trúc thuộc tính và phương thức giống với lớp đối tượng
let sinhVienThu = new SinhVien("Thư", "thu@gmail.com", "0909123123", false);
console.log(sinhVienThu);
sinhVienThu.hienThiThongTin();
