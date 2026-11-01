import React from "react";

const BaiTapRenderDienThoai = () => {
  let arrPhone = [
    {
      ten: "Iphone 18 promax",
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/370982/iphone-18-pro-max-bac-thumb-1-600x600.jpg",
      giaTien: "25.000.000",
      trangThai: true,
    },
    {
      ten: "Iphone duo",
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/370987/iphone-duo-white-thumb-600x600.jpg",
      giaTien: "64.000.000",
      trangThai: true,
    },
    {
      ten: "OPPO Reno",
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/368250/oppo-reno16-f-trang-thumb-600x600.jpg",
      giaTien: "13.000.000",
      trangThai: false,
    },
  ];

  /** Bài tập render điện thoại
   * Từ cấu trúc layout được cung cấp, hãy xử lí cho thẻ div bên dưới h2 sẽ có cấu trúc 3 cột, mỗi cột sẽ hiển thị thông tin của một điện thoại đang có trên mảng arrPhone
   * Cấu trúc hiển thị bao gồm: Hình ảnh, tên điện thoại, giá tiền, trạng thái : còn hàng nếu thuộc tính true và ngược lại
   */

  let hoTen = "Minh Thành";

  function renderDienThoai() {
    return arrPhone.map((item, i) => {
      return (
        <div className="border-2 border-blue-500 p-5" key={i}>
          <img src={item.hinhAnh} alt="" />
          <p>{item.ten}</p>
          <p>{item.giaTien}</p>
          <p>{item.trangThai ? "Còn hàng" : "Hết hàng"} </p>
        </div>
      );
    });
  }

  return (
    <div className="container my-16">
      <h2>Bài tập render danh sách điện thoại của {hoTen}</h2>

      <div className="grid grid-cols-3 gap-10">
        {renderDienThoai()}
        {renderDienThoai()}
        {renderDienThoai()}
      </div>
    </div>
  );
};

export default BaiTapRenderDienThoai;
