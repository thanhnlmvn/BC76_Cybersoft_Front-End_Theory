/**
 * Kiểm tra dữ liệu rỗng
 * Kiểm tra định dạng email
 * Kiểm tra giới hạn ký tự
 * Kiểm tra xem giá trị nhập vào có trong khoảng hay không
 * Kiểm tra nhập vào chữ không cho phép số
 */

function checkEmtyValue(theThongBao, value) {
  if (value == "") {
    // Thông báo lỗi
    theThongBao.innerHTML = "Vui lòng không bỏ trống";
    return false;
  } else {
    // Xóa thông báo lỗi khi không còn lỗi
    theThongBao.innerHTML = "";
    return true;
  }
}

function checkMinMaxValue(theThongBao, value, min, max) {
  let doDai = value.length;
  if (doDai < min || doDai > max) {
    theThongBao.innerHTML = `Vui lòng nhập trên ${min} và dưới ${max}  ký tự`;
    return false;
  } else {
    theThongBao.innerHTML = "";
    return true;
  }
}

function checkEmailValue(theThongBao, value) {
  // Chuỗi regex để validation các chuỗi ký tự đặc biệt
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Khi sử dụng chuỗi regex ta có phương thước test
  // .test() - Dùng để kiểm tra dữ liệu xem có đúng dữ liệu mà regex đang khai báo (Trả về true || false)
  let checkEmail = regexEmail.test(value);
  if (checkEmail) {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML = "Vui lòng nhập đúng định dạng email";
    return false;
  }
}

function checkPasswordValue(theThongBao, value) {
  let regexPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,20}$/;
  let checkPass = regexPassword.test(value);

  if (checkPass) {
    theThongBao.innerHTML = "";
    return true;
  } else {
    theThongBao.innerHTML =
      "Vui lòng nhập 1 ký tự đặc biệt, 1 ký tự in hoa, và 1 ký tự số";
    return false;
  }
}
