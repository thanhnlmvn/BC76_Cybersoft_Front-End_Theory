console.log("Tôi đang trong file index.js");
// --------------- Biến (variable) ---------------
// Khởi tại biến: let tenBien = giá trị lưu trữ
// console.log(content);
let content = "Anh thành say ba";

// Gán giá trị mới cho biến
content = "Anh 5 say halo";
console.log(content);
console.log(content);
console.log(content);
console.log(content);
console.log(content);
console.log(content);
console.log(content);
console.log(content);
console.log(content);
console.log(content);

// Hằng số (constant)
// Giá trị sẽ không bao giờ gán lại giá trị mới được được
const SO_PI = 3.14;
// SO_PI = 3.15;
console.log(SO_PI);
// console.log(Math.PI);

// --------------- Kiểu dữ liệu ---------------
// Trong js các biến sẽ tự hiểu kiểu dữ liệu khi được khai báo
// Kiểu dữ liệu số (number)
let diemToan = 8;
let diemVan = 5;

// Kiểu dữ liệu chuỗi (string)
let thongBao = "Hôm nay trời mưa";
// let diemSinh = "9"

// Kiểu dữ liệu luận lý (boolean true/false)
let emDung = true;
let troiMua = true;
let ngayMaiChuNha = false;

// --------------- Toán tử (Operator) ---------------
let soDiem = 89;
let tong = 8 + "9"; // ==> "89"
// typeof kiểm tra kiểu dữ liệu
console.log(typeof tong);

let phepChia = 30 / 3 + 10;
console.log(phepChia);

// Phép tăng ++, Phép giảm -- (dùng giống nhau)
let diemToanTan = 7;
// diemToanTan++;
// ++diemToanTan;
// console.log(diemToanTan);

// ++diemToanTan sẽ +1 ngay lặp tức sẽ lên 8
// let tinhTong = 5 + ++diemToanTan + 7; // 5 + 8 + 7 = 20

// diemToanTan++ sẽ được tăng sau khi thực hiện phép toán
// let tinhTong = 5 + diemToanTan++ + 7; // 5 + 7 + 7 = 19

let tinhTong = 5 + diemToanTan++ + 7 + diemToanTan; // 5 + 7 + 7 + 8 = 27
console.log(tinhTong);
console.log(diemToanTan);

// Phép gán =
let bienA = 8;
bienA = bienA + 5; // 8 + 5 = 13
bienA += 5; //bienA = bienA + 5
console.log(bienA); // 18

let bienB = 5;
bienB %= 2;
console.log(bienB); // 1
bienB *= 5;
console.log(bienB); // 5


