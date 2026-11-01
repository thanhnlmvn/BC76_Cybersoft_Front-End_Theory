// ------------ Vòng lặp while ------------
// Sếp khải yêu cầu thực hiện tạo cho sếp 10 cái console.log với nội dung Sếp khải vip pro

// Biến bước nhảy để làm điều kiện dừng vòng lặp
let index = 1;
let count = 0;

// Điều kiện dừng vòng lặp
while (index <= 100) {
  // Xử lý các hành động khi vòng lặp chạy
  if (index % 2 == 0) {
    console.log(`Sếp khải vip pro ${index}`);
    // Đếm xem có bao nhiêu console.log mang giá trị chẵn
    count++;
  }

  // Tăng hoặc giảm biến bước nhảy để vòng lặp tới lúc thỏa điều kiện thì ngừng
  index++;
}

console.log(`Có ${count} console.log chẵn`);

// Đề bài yêu cầu xử lý tính toán tổng từ 1 đến N
// Người dùng thực hiện cung cấp một giá trị số N bất kì. Thực hiện tính toán và thông báo cho người dùng biết tổng từ 1 đến N của số đó là bao nhiêu. VD: N cung cấp là 5 => 1 + 2 + 3 + 4 + 5 = 15

document.getElementById("btnBt1").onclick = function () {
  let soN = document.getElementById("soN").value * 1;

  let tongN = 0;

  let i = 1;
  while (i <= soN) {
    console.log(i);
    tongN += i;
    i++;
  }

  document.getElementById("kqBt1").innerHTML =
    `Tổng từ 1 đến ${soN} là: ${tongN}`;
};

// ------------ Vòng lặp do...while ------------
// Thực hiện yêu cầu tính toán và đếm xem từ A cho đến số B có bao nhiêu số chia hết cho 3
document.querySelector(".btn-primary").onclick = function () {
  let soA = document.getElementById("soA").value * 1;
  let soB = document.getElementById("soB").value * 1;

  let bienDem = 0;
  let index = soA;
  do {
    // Thực hiện xử lý các hành động khi vòng lặp chạy
    if (index % 3 == 0) {
      bienDem++;
    }

    // Tăng hoặc giảm biến bước nhảy
    index++;
  } while (index <= soB);

  document.getElementById("kqBt2").innerHTML =
    `Có ${bienDem} số chia hết cho 3 trong khoảng từ ${soA} đến ${soB}`;
};

// Khách hàng yêu cầu thực hiện một tính năng là thực hiện tạo một nút button, khi khách bấm vào sẽ tự động tạo ra cho khách 10 cái thẻ div, với thẻ div nằm ở vị trí chẵn sẽ có màu nền là màu đỏ, còn thẻ div nằm ở vị trí lẻ sẽ có nền là màu xanh là cây (sử dụng vòng lặp)
document.getElementById("btnBt3").onclick = function () {
  let theDiv = "";
  let index = 1;
  while (index <= 10) {
    if (index % 2 == 0) {
      theDiv += `<div class="bg-danger p-3 my-2"></div>`;
    } else {
      theDiv += `<div class="bg-success p-3 my-2"></div>`;
    }

    index++;
  }

  // console.log(theDiv);
  document.getElementById("theDiv").innerHTML = theDiv;
};

// ------------ Vòng lặp for ------------
// Bên trường C yêu cầu tạo giúp một chương trình xử lí đếm xem với các giá trị từ 0 cho đến 1000 có bao nhiêu số chia hết cho 3
let bienDem = 0;
// for (let i = 0; i <= 1000; i++) {
//   if (i % 3 == 0) {
//     bienDem++;
//   }
// }

for (let i = 0; i <= 1000; i += 3) {
  bienDem++;
}

console.log(bienDem);

// BT vòng lặp for
/**
  BT 1. In tất cả số nguyên dương lẻ / chẵn nhỏ hơn 100. - Dùng bước nhảy và dùng % 2

  BT 2. Tính tổng các số chẵn từ 1 đến n. Với n nhập từ người dùng

  BT 3. Có bao nhiêu số chia hết cho 3 từ 0-1000

  BT 4. Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh

  BT 5. Tìm số nguyên dương nhỏ nhất sao cho: 1+2+...+ n > 10000

  BT 6. Viết chương trình nhập vào 2 số x, n, tính tổng: S(n)=x+x^2+x^3+...+x^n (Sử dụng vòng lặp và hàm)

  BT 7. Nhập vào n. Tính giai thừa 1×2x...xn

  BT 8. Viết chương trình có một input, một button. Khi click vào button thì in ra các số nguyên từ 1 tới giá trị của input.
 */

// Làm BT 2, 5, 6 ,7

// BT 2. Tính tổng các số chẵn từ 1 đến n. Với n nhập từ người dùng
document.getElementById("btnBtTinhTongChan").onclick = function () {
  let soN = document.getElementById("so_N").value * 1;

  let tongChan = 0;
  for (let i = 2; i <= soN; i += 2) {
    tongChan += i;
  }

  document.getElementById("kqBtTinhTongChan").innerHTML =
    `Tổng chẵn từ 1 đến ${soN} là: ${tongChan}`;
};

// BT 5. Tìm số nguyên dương nhỏ nhất sao cho: 1+2+...+ n > 10000
let tong = 0;
for (let i = 1; i <= 10000; i++) {
  tong += i;
  if (tong >= 10000) {
    console.log(`Số nguyên dương nhỏ nhất là: ${i}`);

    // Lệnh break sẽ dừng vòng lặp luôn không cần lặp nữa
    break;
  }
}

// BT 6. Viết chương trình nhập vào 2 số x, n, tính tổng: S(n)=x+x^2+x^3+...+x^n (Sử dụng vòng lặp và hàm)

function tinhTongMu(x, n) {
  let tong = 0;
  for (let i = 1; i <= n; i++) {
    tong += Math.pow(x, i);
  }
  return tong;
}

document.getElementById("btnTinhTongMu").onclick = function () {
  let soX = document.getElementById("x").value * 1;
  let soN = document.getElementById("n").value * 1;

  let tong = tinhTongMu(soX, soN);

  document.getElementById("kqTinhTongMu").innerHTML = `Tổng: ${tong}`;
};

// BT 7. Nhập vào n. Tính giai thừa 1×2x...xn
document.getElementById("btnTinhGiaiThua").onclick = function () {
  let soN = document.getElementById("nGiaiThua").value * 1;

  let tong = 1;
  for (let i = 1; i <= soN; i++) {
    tong *= i;
  }

  document.getElementById("kqTinhGiaiThua").innerHTML =
    "Tổng giai thừa là: " + tong;
};

// Một khách hàng tên B yêu cầu một chức năng, là tìm xem trong khoảng từ 1 đến 1000 có số nào mà tổng các ký số + lại = 10 không. 123 ==> 1 + 2 + 3

// let soTuNhien = 91;
// let hangTram = Math.floor(soTuNhien / 100);
// console.log(hangTram);
// let hangChuc = Math.floor((soTuNhien % 100) / 10);
// console.log(hangChuc);
// let donVi = soTuNhien % 10;
// console.log(donVi);

for (let index = 1; index < 1000; index++) {
  // Index = 8
  // Sử dụng lệnh continue để khi index <= 10 sẽ đi tới vòng lặp tiếp theo, không đi xuống xử lý bất kì hành dộng gì ở bên dưới
  if (index <= 10) {
    continue;
  }

  // 11
  let hangTram = Math.floor(index / 100); // 0
  let hangChuc = Math.floor((index % 100) / 10); // 1
  let donVi = index % 10; // 1

  if (hangChuc + hangTram + donVi == 10) {
    console.log(index);
  }
}

// ------------ Vòng lặp lồng nhau ------------
// Kiến thức mở rộng (độ phức tập của thuật toán o^2)

/**
 * *
 * **
 * ***
 * ****
 */

let ngoiSao = "*";
let yeuCauKhachHang = 4;
let ketQua = "";
// Vòng lặp lớn nhất tạo các dòng theo yêu cầu

for (let index = 1; index <= yeuCauKhachHang; index++) {
  let dongNgoiSao = "";
  for (let z = 1; z <= index; z++) {
    dongNgoiSao += ngoiSao;
  }

  // Thêm dongNgoiSao vào kết quả và kết hợp thêm thẻ br để xuống dòng
  ketQua += dongNgoiSao + "<br/>";
}

console.log(ketQua);
