// NV1: Thực hiện tạo một sự kiện click cho nút button tính tiền và dom tới các input để lấy dữ liệu
// NV2: Viết 4 function riêng biệt có nhận tham số để từ các dữ liệu người dùng nhập sẽ xử lý trả về giá kmDauTien, giá kmTu1Den19 và giá kmTu19TroLen và giá thoiGianCho
// NV3: Sau khi đã tìm được các giá tièn phù hợp, áp dụng tính toán và trả về kết quả phù hợp nhất
// NV4: Kiểm tra ở phần dưới button tính tiền có một layout dùng để hiển thị tổng tiền, xử lý khi click vô nút tính tiền sẽ xuất hiện layout đó và trả kết quả (đã chuyển đổi kiểu tiền tệ) vào bên trong để hiển thị người dùng

function checkGiaKmDau(hangXe) {
  let giaKmDau = 0;
  switch (hangXe) {
    case "grabCar":
      giaKmDau = 8000;
      break;
    case "grabSUV":
      giaKmDau = 9000;
      break;
    case "grabBlack":
      giaKmDau = 10000;
      break;
  }

  return giaKmDau;
}

function checkGiaTu1Den19Km(hangXe) {
  let giaKm1Den19 = 0;
  switch (hangXe) {
    case "grabCar":
      giaKm1Den19 = 7500;
      break;
    case "grabSUV":
      giaKm1Den19 = 8500;
      break;
    case "grabBlack":
      giaKm1Den19 = 9500;
      break;
  }

  return giaKm1Den19;
}

function checkGiaTren19Km(hangXe) {
  let giaTren19Km = 0;
  switch (hangXe) {
    case "grabCar":
      giaTren19Km = 7000;
      break;
    case "grabSUV":
      giaTren19Km = 8000;
      break;
    case "grabBlack":
      giaTren19Km = 9000;
      break;
  }

  return giaTren19Km;
}

function checkGiaThoiGianCho(hangXe) {
  let giaThoiGianCho = 0;
  switch (hangXe) {
    case "grabCar":
      giaThoiGianCho = 2000;
      break;
    case "grabSUV":
      giaThoiGianCho = 3000;
      break;
    case "grabBlack":
      giaThoiGianCho = 3500;
      break;
  }

  return giaThoiGianCho;
}

function tinhTienPhat(thoiGianCho, giaThoiGianCho) {
  let soLanPhat = Math.floor(thoiGianCho / 3);

  let tienPhat = giaThoiGianCho * soLanPhat;

  return tienPhat;
}

function tinhTienXe(soKm, giaKmDau, giaKm1Den19, giaTren19Km) {
  let tienXe = 0;
  if (soKm <= 1) {
    tienXe = soKm * giaKmDau;
  } else if (soKm > 1 && soKm <= 19) {
    tienXe = giaKmDau + (soKm - 1) * giaKm1Den19;
  } else if (soKm > 19) {
    tienXe = giaKmDau + 18 * giaKm1Den19 + (soKm - 19) * giaTren19Km;
  }

  return tienXe;
}

document.getElementById("btnTinhTien").onclick = function () {
  // Input
  let checkXe = document.querySelector("input[name='selector']:checked");
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;

  if (checkXe == null) {
    alert("Vui lòng chọn loại xe");
    return;
  }

  // Output
  let tongTien = 0;

  // Progress
  let giaKmDau = checkGiaKmDau(checkXe.value);
  let giaKm1Den19 = checkGiaTu1Den19Km(checkXe.value);
  let giaTren19Km = checkGiaTren19Km(checkXe.value);
  let giaThoiGianCho = checkGiaThoiGianCho(checkXe.value);

  let tienPhat = tinhTienPhat(thoiGianCho, giaThoiGianCho);
  let tienXe = tinhTienXe(soKm, giaKmDau, giaKm1Den19, giaTren19Km);

  tongTien = tienXe + tienPhat;

  document.getElementById("xuatTien").innerHTML = tongTien.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    },
  );

  document.getElementById("divThanhTien").style.display = "block";
};

// Tạo một chức năng click cho nút in hóa đơn
document.getElementById("btnInHoaDon").onclick = function () {
  // Input
  let checkXe = document.querySelector("input[name='selector']:checked");
  let soKm = document.getElementById("txt-km").value * 1;
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;

  // Output
  let tongTien = 0;

  // Progress
  if (checkXe == null) {
    alert("Vui lòng chọn loại xe");
    return;
  }

  let giaKmDau = checkGiaKmDau(checkXe.value);
  let giaKm1Den19 = checkGiaTu1Den19Km(checkXe.value);
  let giaTren19Km = checkGiaTren19Km(checkXe.value);
  let giaThoiGianCho = checkGiaThoiGianCho(checkXe.value);

  let tienPhat = tinhTienPhat(thoiGianCho, giaThoiGianCho);
  let tienXe = tinhTienXe(soKm, giaKmDau, giaKm1Den19, giaTren19Km);

  tongTien = tienXe + tienPhat;

  $("#modalInHoaDon").modal("show");

  if (soKm <= 1) {
    document.querySelector(".modal-body").innerHTML = `
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col" colspan="2">Loại xe</th>
          <th scope="col">${checkXe.value}</th>
          <th scope="col">Số km: ${soKm}</th>
        </tr>
      </thead>
    <tbody>
      <tr>
        <th scope="row">Chi tiết</th>
        <td>SỬ DỤNG</td>
        <td>ĐƠN GIÁ (VNĐ)</td>
        <td>THÀNH TIỀN(VNĐ)</td>
      </tr>
      <tr>
        <th scope="row">KM đầu tiên</th>
        <td>1km</td>
        <td>${giaKmDau}</td>
        <td>${giaKmDau}</td>
      </tr>
      <tr>
        <th scope="row">Thời gian chờ</th>
        <td>Chờ ${thoiGianCho} tính tiền ${Math.floor(thoiGianCho / 3)} lần</td>
        <td>${giaThoiGianCho}</td>
        <td>${tienPhat}</td>
      </tr>
    </tbody>
  </table>
  <h5 class="text-right">Tổng tiền: <span class="text-danger">${tongTien.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    },
  )}</span></h5>
  `;
  } else if (soKm > 1 && soKm < 19) {
    document.querySelector(".modal-body").innerHTML = `
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col" colspan="2">Loại xe</th>
          <th scope="col">${checkXe.value}</th>
          <th scope="col">Số km: ${soKm}</th>
        </tr>
      </thead>
    <tbody>
      <tr>
        <th scope="row">Chi tiết</th>
        <td>SỬ DỤNG</td>
        <td>ĐƠN GIÁ (VNĐ)</td>
        <td>THÀNH TIỀN(VNĐ)</td>
      </tr>
      <tr>
        <th scope="row">KM đầu tiên</th>
        <td>1km</td>
        <td>${giaKmDau}</td>
        <td>${giaKmDau}</td>
      </tr>
        <tr>
        <th scope="row">Giá từ 1 đến ${soKm - 1}KM</th>
        <td>${soKm - 1}</td>
        <td>${giaKm1Den19}</td>
        <td>${(soKm - 1) * giaKm1Den19}</td>
      </tr>
      <tr>
        <th scope="row">Thời gian chờ</th>
        <td>Chờ ${thoiGianCho} tính tiền ${Math.floor(thoiGianCho / 3)} lần</td>
        <td>${giaThoiGianCho}</td>
        <td>${tienPhat}</td>
      </tr>
    </tbody>
  </table>
  <h5 class="text-right">Tổng tiền: <span class="text-danger">${tongTien.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    },
  )}</span></h5>
  `;
  } else if (soKm > 19) {
    document.querySelector(".modal-body").innerHTML = `
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col" colspan="2">Loại xe</th>
          <th scope="col">${checkXe.value}</th>
          <th scope="col">Số km: ${soKm}</th>
        </tr>
      </thead>
    <tbody>
      <tr>
        <th scope="row">Chi tiết</th>
        <td>SỬ DỤNG</td>
        <td>ĐƠN GIÁ (VNĐ)</td>
        <td>THÀNH TIỀN(VNĐ)</td>
      </tr>
      <tr>
        <th scope="row">KM đầu tiên</th>
        <td>1km</td>
        <td>${giaKmDau}</td>
        <td>${giaKmDau}</td>
      </tr>
      <tr>
        <th scope="row">Giá từ 1 đến 19KM</th>
        <td>18KM</td>
        <td>${giaKm1Den19}</td>
        <td>${18 * giaKm1Den19}</td>
      </tr>
       <tr>
        <th scope="row">Giá trên 19KM</th>
        <td>${soKm - 19}</td>
        <td>${giaTren19Km}</td>
        <td>${(soKm - 19) * giaTren19Km}</td>
      </tr>
      <tr>
        <th scope="row">Thời gian chờ</th>
        <td>Chờ ${thoiGianCho} tính tiền ${Math.floor(thoiGianCho / 3)} lần</td>
        <td>${giaThoiGianCho}</td>
        <td>${tienPhat}</td>
      </tr>
    </tbody>
  </table>
  <h5 class="text-right">Tổng tiền: <span class="text-danger">${tongTien.toLocaleString(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    },
  )}</span></h5>
  `;
  }
};
