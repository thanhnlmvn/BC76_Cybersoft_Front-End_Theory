// Tổng hợp các chức năng sẽ thực hiện trong bài tập QLSV
/**
 * Thêm sinh viên
 * Xóa sinh viên
 * Cập nhật sinh viên
 * Clear dữ liệu đang có trong form
 * Render dữ liệu lên giao diện
 * Lưu trữ và sử dụng dữ liệu ở local storage
 * Validation dữ liệu
 * Tìm kiếm sinh viên
 */

// CRUD - (Create - Read - Update - Delete)

let arrSinhVien = [];

// Sự kiện onsubmit sử dụng trong form khi nhập hết dữ liệu trong form cho phép nhấn enter để gửi dữ liệu
// Khi gửi dữ liệu qua event onsubmit sẽ reload lại trang
document.getElementById("formQLSV").onsubmit = function (event) {
  // Để ngăn chặn việc reload trang web ta có phương thức preventDefault
  event.preventDefault();

  // Thực hiện xử lý và truy cập lấy tất cả dữ liệu từ các input đang có trên giao diện
  // console.log(arrInput);

  let sinhVien = layDuLieuSV();
  if (sinhVien) {
    arrSinhVien.push(sinhVien);
    // console.log(arrSinhVien);

    setLocalStorage("arrSinhVien", arrSinhVien);

    renderDataSV();

    // .target - con trỏ gọi ngược lại document.getElementById("formQLSV")
    // .reset() - phương thức sau khi gọi lại nguyên cái thẻ form của sự kiện reset value của toàn bộ input
    event.target.reset();
    document.getElementById("txtMaSV").disabled = false;
  }
};

// Hàm window là một object cho phép trỏ tới trình duyệt
// Sự kiện onload sẽ chạy sau khi toàn bộ thông tin html css js xong hết mới chạy
window.onload = function () {
  let dataLocal = getLocalStorage("arrSinhVien");
  if (dataLocal) {
    arrSinhVien = dataLocal;
    renderDataSV();
  }
};

// --------- Thêm sinh viên ---------
function layDuLieuSV() {
  let arrInput = document.querySelectorAll("#formQLSV input, #formQLSV select");

  let sinhVien = new SinhVien();
  // console.log(sinhVien);

  // Tạo biến cờ để check trường hợp khi nào trả về đối tượng sinh viên
  let flag = true;
  for (let item of arrInput) {
    // console.log(item);

    let { value, id } = item; // destructuring
    // console.log(value);
    // console.log(id);
    // console.log(sinhVien[id]);

    sinhVien[id] = value;
    // console.log(sinhVien[id]);

    // Truy cập tới thẻ cha gần nhất của input
    // .parentElement - Sẽ gọi DOM đến thẻ cha gần nhất của item
    // Từ DOM đến thẻ cha có chúng ta có thể DOM tiếp đến thẻ con bằng các lệnh DOM
    let theThongBao = item.parentElement.querySelector("span");
    // console.log(theThongBao);

    if (!checkEmtyValue(theThongBao, value)) {
      flag = false;
    } else {
      // if (id == "txtPass" && !checkMinMaxValue(theThongBao, value, 4, 10)) {
      //   flag = false;
      // }
      // if (id == "txtEmail" && !checkEmailValue(theThongBao, value)) {
      //   flag = false;
      // }
      // ------- Data attribute -------
      // Truy xuất tới các thược tính data-validation
      // .getAttribute - Phương giúp lấy data attribute truyền tên data muốn lấy
      let dataValue = item.getAttribute("data-validation"); // undifined || email || minMax
      let dataMin = item.getAttribute("data-min");
      let dataMax = item.getAttribute("data-max");

      if (dataValue == "email" && !checkEmailValue(theThongBao, value)) {
        flag = false;
      } else if (
        dataValue == "minMax" &&
        !checkMinMaxValue(theThongBao, value, dataMin * 1, dataMax * 1)
      ) {
        flag = false;
      } else if (
        dataValue == "pass" &&
        !checkPasswordValue(theThongBao, value) &&
        !checkMinMaxValue(theThongBao, value, 6, 10)
      ) {
        flag = false;
      }
    }
  }

  // console.log(sinhVien);
  return flag ? sinhVien : null;
}

// --------- Hiển thị thông tin sinh viên lên table ---------
function renderDataSV(arr = arrSinhVien) {
  let content = "";
  for (let sinhVien of arr) {
    // console.log(sinhVien);

    // dữ liệu lấy từ local ==> dữ liệu không có phương thức vì JSON không đi kèm được với phương thức
    // Tạo ra một object mới ==> Sẽ có phương thức nhưng không có dữ liệu

    let newSinhVien = new SinhVien();
    // console.log(newSinhVien);

    Object.assign(newSinhVien, sinhVien);

    let { txtMaSV, txtTenSV, txtEmail, txtNgaySinh, khSV } = newSinhVien;

    content += `
      <tr>
        <td>${txtMaSV}</td>
        <td>${txtTenSV}</td>
        <td>${txtEmail}</td>
        <td>${txtNgaySinh}</td>
        <td>${khSV}</td>
        <td>${newSinhVien.tinhdiemTB().toFixed(2)}</td>
        <td>
          <button onclick="deleteSinhVien('${txtMaSV}')" class="btn btn-danger">Xóa</button>
          <button onclick="getInfoSinhVien('${txtMaSV}')" class="btn btn-warning">Sửa</button>
        </td>
      </tr>
      `;
  }

  // console.log(content);
  document.getElementById("tbodySinhVien").innerHTML = content;
}

// --------- Local Storage ---------
// // Các phương thức chính: setItem, getItem, removeItem

// // .setItem - phương thức dùng để đưa dữ liệu lên localStorage
// //  Phương thức này nhận 2 giá trị key và value
// localStorage.setItem("hoTen", "Minh Thành");

// // Lưu ý ở trên localStorage sẽ chỉ nhận giá trị chuỗi
// // localStorage.setItem("arr", [{ hoten: "Thành" }]);

// let arrMonAn = [
//   {
//     tenMon: "Màn thầu",
//   },
//   {
//     tenMon: "Xí quách",
//   },
// ];

// let dataString = JSON.stringify(arrMonAn);
// // console.log(dataString);
// // console.log(typeof dataString);

// localStorage.setItem("arr", dataString);

// // .getItem - Phương thức lấy dữ liệu từ localStorage
// // Phương thức này nhận key để lấy dữ liệu
// let dataLocal = localStorage.getItem("leu leu");

// console.log(dataLocal);

// let parseValue = dataLocal ? JSON.parse(dataLocal) : null;
// console.log(parseValue);

// // .removeItem - Phương thức dùng để xóa dữ liệu dưới localStorage
// // Phương thức này nhận key để xóa dữ liệu
// localStorage.removeItem("hoTen");

// Tạo function sẽ giúp đưa bất kì dữ liệu nào xuống local storage lưu trữ
function setLocalStorage(key, value) {
  let dataString = JSON.stringify(value);
  // console.log(dataString);

  localStorage.setItem(key, dataString);
}

function getLocalStorage(key) {
  let dataLocal = localStorage.getItem(key);
  // console.log(dataLocal);

  return dataLocal ? JSON.parse(dataLocal) : null;
}

// --------- Xóa sinh viên ---------
function deleteSinhVien(maSV) {
  // Khi xóa 1 phần tử sử dụng phương thức splice
  // console.log(maSV);

  // Xử lý tìm kiếm vị trí sinh viên trong mảng
  // Cách 1: Xử lý thông qua vòng lặp
  // let viTriSinhVien = -1;
  // for (let i in arrSinhVien) {
  //   let { txtMaSV } = arrSinhVien[i];

  //   if (txtMaSV == maSV) {
  //     viTriSinhVien = i;
  //   }
  // }

  // Cách 2: Phương thước findIndex
  // .findIndex - Phương thức tìm vị trí index cho phép bốc tách item và index giống vòng lặp
  // Thường sử dụng để tìm vị trí object trong array
  let viTriSinhVien = arrSinhVien.findIndex((sinhVien, index) => {
    return sinhVien.txtMaSV == maSV;
  });
  // console.log(viTriSinhVien);

  // Thao tác xóa sinh viên và cập nhật dữ liệu
  if (viTriSinhVien != -1) {
    arrSinhVien.splice(viTriSinhVien, 1);
    setLocalStorage("arrSinhVien", arrSinhVien);
    renderDataSV();
  }
}

// --------- Get info SinhVien ---------
// B1. Gắn function getInfoSinhVien vào button sửa và lấy maSV
// B2. Thực hiện tìm kiếm sinh viên trong mảng
// B3. Thực hiện đưa dữ liệu lên input trong form cho người dùng chỉnh sửa
// B4. Ngăn chặn người dùng chỉnh sửa mã SV (disable, readonly)
function getInfoSinhVien(maSV) {
  let sinhVien = arrSinhVien.find(
    (sinhVien, index) => sinhVien.txtMaSV == maSV,
  );

  console.log(sinhVien);

  if (sinhVien) {
    let arrInputSv = document.querySelectorAll(
      "#formQLSV input, #formQLSV select",
    );
    // console.log(arrInputSv);

    for (let field of arrInputSv) {
      // console.log(field.id);
      // console.log(field.value);
      field.value = sinhVien[field.id];
      if (field.id == "txtMaSV") {
        field.disabled = "true";
      }
    }
  }
}

// ---------Cập nhật sinh viên---------
// B1. DOM tới nút button cập nhật và tạo một sự kiện click
// B2. Xử lí lấy dữ liệu người dùng đã cập nhật trên form
// B3. Tìm kiếm tới vị trí của phần tử được cập nhật
// B4. Thay thế dữ liệu mới vào vị trí của phần tử được cập nhật
// B5. Thực hiện chạy lại hàm render và cập nhật xuống localStorage
// B6. Clear toàn bộ dữ liệu của form và tắt readOnly của input mã SV
document.querySelector(".btn-info").onclick = function () {
  let sinhVien = layDuLieuSV();
  // console.log(sinhVien);

  let viTriSinhVienFix = arrSinhVien.findIndex((item, index) => {
    return item.txtMaSV == sinhVien.txtMaSV;
  });

  if (viTriSinhVienFix != -1) {
    arrSinhVien[viTriSinhVienFix] = sinhVien;
    setLocalStorage("arrSinhVien", arrSinhVien);
    renderDataSV();

    document.getElementById("txtMaSV").disabled = false;
    document.getElementById("formQLSV").reset();
  }
};

document.querySelector(".btn-dark").onclick = function (event) {
  document.getElementById("txtMaSV").disabled = false;
  document.getElementById("formQLSV").reset();
};

// --------- Tìm kiếm sinh viên ---------
document.getElementById("txtSearch").oninput = function (event) {
  // .trim() - Phương thức này giúp loại bỏ các khoảng trắng đứng trước giá trị dữ liệu
  // .toLowerCase() - Phương thức này giúp biến các chữ in hoa thành chữ thường
  let keyWord = event.target.value.trim().toLowerCase();
  // console.log(keyWord);

  let newKeyWord = removeVietnameseTones(keyWord);
  // console.log(newKeyWord);

  let arrSearch = arrSinhVien.filter((sinhVien, i) => {
    let newTenSV = removeVietnameseTones(
      sinhVien.txtTenSV.trim().toLowerCase(),
    );

    // .includes() - Phướng thức này sẽ kiểm tra phần tử sử dụng phương thức xem trong tham số có ký tự giống không nếu có trả về true còn không có trả về false
    return newTenSV.includes(newKeyWord);
  });

  renderDataSV(arrSearch);
};
