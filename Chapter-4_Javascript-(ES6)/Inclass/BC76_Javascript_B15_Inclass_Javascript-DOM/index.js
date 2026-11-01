// Truy cập vào phần tử html thông qua ID
// Thay đổi nội dung HTML (.innerHTML)
let theH1 = document.getElementById("demo");
// theH1.innerHTML = "Hôm nay trời mưa";
// Thay đổi css của một thẻ (inline-style)
theH1.style.backgroundColor = "orange";
theH1.style.textAlign = "center";

// Lưu trữ nội dung trong thẻ HTML
let content = theH1.innerHTML;
console.log(content);
let idTheH1 = theH1.id;
console.log(idTheH1);
// theH1.innerHTML = content + " Lớp học vào tối thứ 2 và thứ 6";
theH1.innerHTML += " Lớp học vào tối thứ 2 và thứ 6";

// Tương tác với img để thay đổi hình ảnh
let theImg = document.getElementById("hinhAnh");
theImg.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCP56_EkafnTah16Cunkazu1kzyC7kjZYSEOzoLPazQXOgD9CIDpVqN6u6&s=10";

document.title = "Trang của Minh Thành";

// NV1: Bạn được cung cấp một thẻ p, thực hiện truy cặp tới thẻ p để thay đổi màu chữ thành màu vàng nền màu đen và nội dung sẽ được canh giữa
let theP = document.getElementById("txtText");
theP.style.color = "yellow";
theP.style.backgroundColor = "black";
theP.style.textAlign = "center";

// Truy cập tương tác với thẻ html thông qua querySelector
// querySelector sẽ tương tác với các thẻ html đầu tiên thỏa mãn điều kiện của selector bên trong. Nên lưu ý viết selector để truy cập đúng chính xác thẻ cần sử dụng
let theH3 = document.querySelector(".container .demo2");
console.log(theH3);
theH3.style.fontSize = "20px";

// Các sự kiện người dùng tương tác với trang web
// Sự kiện onclick
document.querySelector(".btn-dark").onclick = function () {
  // Xử lý các chức năng khi sự kiện được kích hoạt
  // console.log("Tôi đã bị click");
  let taiKhoan = document.getElementById("taiKhoan").value;
  let matKhau = document.getElementById("matKhau").value;
  console.log(taiKhoan);
  console.log(matKhau);
};

// NV2: Sau khi đã được cung cấp layout, thực hiện tạo ra chức năng bấm vào nút bật đèn thì hiện bóng đèn sáng và ngược lại (gợi ý dùng sự kiện onclick và thay đổi src)

// Phạm vi hoạt của biến trong function thì chỉ sử dụng được trong function
// hinhBongDen được khai báo biến ở bên ngoài function, phạm vi hoạt động sẽ là global (nghĩa là có thể mang đi và sử dụng ở bất kì đâu trong file.js tùy thích)
let hinhBongDen = document.getElementById("hinhBongDen");

document.querySelector(".btn-danger").onclick = function () {
  hinhBongDen.src = "./img/pic_bulboff.gif";
};

document.querySelector(".btn-success").onclick = function () {
  hinhBongDen.src = "./img/pic_bulbon.gif";
};

// onmouseenter, onmouseleave, onmousemove
hinhBongDen.addEventListener("mouseenter", function () {
  console.log("tôi đã đi vào trong thẻ bóng đèn");
  hinhBongDen.src = "./img/pic_bulbon.gif";
});

hinhBongDen.addEventListener("mouseleave", function () {
  console.log("Tôi đã đi ra ngoài");
  hinhBongDen.src = "./img/pic_bulboff.gif";
});

hinhBongDen.addEventListener("mousemove", function () {
  console.log("Tôi đang đi");
});

// Tương tác với class trong css
// Tương tác với class thông qua thuộc tính className
document.getElementById("demo_class").className = "text__green fs-1";
// document.getElementById("demo_class").className += " border";
document.getElementById("demo_class").className = "border abc xyz";

// Tương tác với classList
document.querySelector(".btn-primary").onclick = function () {
  // document.getElementById("demo_class").classList.add("fs-1"); // Thêm class
  // document.getElementById("demo_class").classList.remove("abc"); // Xóa class
  document.querySelector("body").classList.toggle("dark"); // Tắt mở class (thưởng sử dụng làm dark theme)
};

// Lưu ý className và classList khác nhau className sẽ gán lại hoặc cộng dồn class (vd fs-1 fs-1 fs-1 ...) còn classList sẽ truyền và kiểm tra nếu class đó đã tồn tại trong thẻ cần được thêm sẽ không add thêm nữa

// Hướng dẫn tạo html từ JS
let hoTen = "Minh Thành";
// document.querySelector(".demo_add_html").innerHTML +=
//   "<p class='demo1'>Tôi đang học buổi tối T6</p>";
// document.querySelector(".demo_add_html").innerHTML +=
//   "<p class='demo1'>" + hoTen + "</p>";

// String template
// Sử dụng string template để tạo HTML
// Truyền biến bằng cách ${}
document.querySelector(".demo_add_html").innerHTML +=
  `<p class='demo1'>${hoTen}</p>`;
document.querySelector(".demo_add_html").innerHTML +=
  `<p class='demo2'>${(24 * 5) / 10}</p>`;

// Sử dụng phương thức createElement để tạo html
let img = document.createElement("img");

img.src =
  "https://cdn-media.sforum.vn/storage/app/media/vantien/huskyflyaway/game-Chaos-Zero-Nightmare%20(1).jpg";
img.className = "img_homelander demo3 w-25";

document.querySelector(".demo_add_html").appendChild(img);
