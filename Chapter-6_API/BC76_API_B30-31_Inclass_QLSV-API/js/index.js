// function nauAn() {
//   console.log("Nấu ăn");
// }

// function giatDo() {
//   // setTimeout() - Là hàm sẽ chờ khoản thời gian sẽ được thực thi
//   // Nhận 2 tham số, tham số đầu nhận hàm xử lý thực thi, tham số thứ 2 sẽ truyền vào thời gian chờ thực hiện tình bằng millisecond
//   // Khi sử dụng hàm file js sẽ chạy toàn bộ trước và đưa phần xử lý hàm này trả về kết quả sau khi chạy xong
//   setTimeout(() => {
//     console.log("Giặt đồ");
//   }, 3000);
// }

// function ruaChen() {
//   console.log("Rửa chén");
// }

// // nauAn();
// // giatDo();
// // ruaChen();

// // --------- Bất đồng bộ ---------
// // Promise()
// // Đối tượng promise nhận vào tham số chứa arrow function để xử lý
// // Trong phần xử lý này cần trả về 2 tham số resolve hoặc reject
// let promise = new Promise((resolve, reject) => {
//   let diemTrungBinh = 1 + 5;
//   // diemTrungBinh > 7 ==> tốt || ==> kém
//   setTimeout(() => {
//     if (diemTrungBinh > 7) {
//       resolve("Loại tốt");
//     } else {
//       reject("Loại kém");
//     }
//   }, 5000);
// });

// promise
//   // Phương thức .then bắt được phần xử lý trả về giá trị resolve của đối tượng promise xử lý
//   // Và nhận vào arrow function chứa tham số res = resolve của đối tượng promise để xử lý tiếp phần trong function
//   .then((res) => {
//     console.log(res);
//   })
//   // Phương thức .catch bắt được phần xử lý trả về giá trị reject của đối tượng promise xử lý
//   // Và nhận vào arrow function chứa tham số err = reject của đối tượng promise để xử lý tiếp phần trong function
//   .catch((err) => {
//     console.log(err);
//   });

// // Async Await
// // Restful API (GET - POST - PUT - DELETE)
// // Hàm async sẽ bắt những phần khai báo await cần phải chờ lấy được trả về được hoặc không mới xử lý tiếp các phần ở bên dưới hàm
// // await sẽ chờ dữ liệu được lấy về mới thực hiện phần code bên dưới nếu không có nó sẽ trả về promise pending và không xử lý khi không có dữ liệu
// async function getDanhSachSV() {
//   // Try catch giống với phương thức .then và .cacth ở trên
//   // Trong phần try sẽ chạy lần lượt nếu xảy ra lỗi trả về kết quả cho tham số error (giống if else)
//   try {
//     // Thư viện axios nhận 3 tham số url, method, data
//     let promise = await axios({
//       // url : Đường dẫn API
//       url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVie",
//       // method : Phương thức
//       method: "GET",
//     });
//     console.log(promise);
//     console.log("hello");
//   } catch (error) {
//     console.log(error);
//   }
// }

// getDanhSachSV();

const HTTP = axios.create({
  // Là đoạn sử dụng chung đường link API
  baseURL: "https://svcy.myclass.vn/api/SinhVienApi",
  timeout: 30000,
});

// --------- Hiển thị danh sách sinh viên trong hệ thống ---------
function getDataSinhVien() {
  // let promise = axios({
  //   // url : Request URL
  //   url: "https://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
  //   // method: Phương thức(GET - POST - PUT - DELETE))
  //   method: "GET",
  // });

  // Gọi biến HTTP chứa axios.create ở trên
  // .method() phương thức cần sử dụng và truyền vào đường dẫn còn lại của api vào ()
  let promise = HTTP.get("/LayDanhSachSinhVien");

  // Thành công .then || Thất bại .catch
  promise
    .then((res) => {
      console.log(res.data);
      renderDataSinhVien(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getDataSinhVien();

function renderDataSinhVien(arr) {
  let content = ``;

  for (let sinhVien of arr) {
    let {
      maSinhVien,
      tenSinhVien,
      email,
      soDienThoai,
      loaiSinhVien,
      diemToan,
      diemLy,
      diemHoa,
      diemRenLuyen,
    } = sinhVien;

    let diemTb = ((diemToan + diemLy + diemHoa) / 3 + diemRenLuyen).toFixed(2);

    content += `
    <tr>
      <td>${maSinhVien}</td>
      <td>${tenSinhVien}</td>
      <td>${email}</td>
      <td>${soDienThoai}</td>
      <td>${loaiSinhVien}</td>
      <td>${diemTb}</td>
      <td>
          <button onclick="deleteSV('${maSinhVien}')" class="btn btn-danger">Xóa</button>
          <button onclick="getInfoSV('${maSinhVien}')" class="btn btn-warning">Sửa</button>
      </td>
    </tr>
    `;
  }
  document.getElementById("tableSV").innerHTML = content;
}

// --------- Thêm sinh viên vào hệ thống ---------
function getValueForm() {
  let arrDomSV = document.querySelectorAll("#QLSV-API input, #QLSV-API select");
  // console.log(arrDomSV);

  let sinhVien = {};

  for (let fieldInput of arrDomSV) {
    let { id, value } = fieldInput;
    // console.log(id);
    // console.log(value);

    sinhVien[id] = value;
  }
  // console.log(sinhVien);
  return sinhVien;
}

document.querySelector("#QLSV-API").onsubmit = function (event) {
  event.preventDefault();
  let sinhVien = getValueForm();

  // Sử dụng API từ backend để thêm dữ liệu vào CSDL
  // let promise = axios({
  //   url: "https://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
  //   method: "POST",
  //   // data: Truyền dữ liệu lên CSDL
  //   data: sinhVien,
  // });

  // Các phương thức cần data để truyền dùng , để truyền data vào
  let promise = HTTP.post("/ThemSinhVien", sinhVien);

  promise
    .then((res) => {
      console.log(res);
      // Gọi lại dữ liệu từ backend để cập nhật lên table
      getDataSinhVien();

      renderThongBao("Thêm sinh viên thành công", "success");
    })
    .catch((err) => {
      console.log(err);
      renderThongBao(err.response.data);
    });
};

function renderThongBao(content, error = "danger") {
  const BG_ERROR = error == "success" ? "green" : "red";

  Toastify({
    text: content,
    duration: 3000,
    // Chuyển hường người dùng khi bấm thông báo
    // destination: "https://github.com/apvarun/toastify-js",

    // Chuyển sang tab mới khi bấm thông báo
    // newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: BG_ERROR,
    },
    onClick: function () {
      console.log("Tôi đã bấm vào thông báo");
    }, // Callback after click
  }).showToast();
}

function deleteSV(maSV) {
  console.log(maSV);

  // let promise = axios({
  //   url: `https://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSV}`,
  //   method: "DELETE",
  // });

  let promise = HTTP.delete(`/XoaSinhVien?maSinhVien=${maSV}`);

  promise
    .then((res) => {
      console.log(res);
      getDataSinhVien();
      renderThongBao(res.data, "success");
    })
    .catch((err) => {
      console.dir(err);
      getDataSinhVien();
      renderThongBao("Sinh viên không tồn tại");
    });
}

function getInfoSV(maSV) {
  console.log(maSV);
  let promise = axios({
    url: `https://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSV}`,
    method: "GET",
  });

  promise
    .then((res) => {
      // console.log(res.data);
      let arrDomSV = document.querySelectorAll(
        "#QLSV-API input, #QLSV-API select",
      );
      for (let fieldInput of arrDomSV) {
        let { id } = fieldInput;
        // console.log(res.data[id]);

        fieldInput.value = res.data[id];
        if (id == "maSinhVien") {
          fieldInput.disabled = true;
        }
      }
    })
    .catch((err) => {
      console.log(err);
      renderThongBao(err.response.data);
      getDataSinhVien();
    });
}

function updateSV() {
  let sinhVien = getValueForm();
  console.log(sinhVien.diemRenLuyen);
  console.log(sinhVien.diemHoa);
  console.log(sinhVien);
  // let promise = axios({
  //   url: `https://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${sinhVien.maSinhVien}`,
  //   method: "PUT",
  //   data: sinhVien,
  // });

  let promise = HTTP.put(
    `/CapNhatThongTinSinhVien?maSinhVien=${sinhVien.maSinhVien}`,
    sinhVien,
  );

  promise
    .then((res) => {
      console.log(res);
      getDataSinhVien();
      renderThongBao(res.data, "success");
    })
    .catch((err) => {
      console.log(err);
      renderThongBao("Lỗi cập nhật vui lòng thử lại sau");
    });
}

document.querySelector(".btn-primary").onclick = function (event) {
  updateSV();
};
