import React, { use, useState } from "react";
import DienThoaiDetail from "./DienThoaiDetail";

const BaiTapState2 = () => {
  let arrDienThoai = [
    {
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/370982/iphone-18-pro-max-bac-thumb-1-600x600.jpg",
      ten: "Iphone 18",
      giaTien: 30000000,
      cameraTruoc: "24MP",
      boNho: "128GB",
    },
    {
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/370987/iphone-duo-white-thumb-600x600.jpg",
      ten: "Iphone duo",
      giaTien: 60000000,
      cameraTruoc: "48MP",
      boNho: "1TB",
    },
    {
      hinhAnh:
        "https://cdn.tgdd.vn/Products/Images/42/369628/xiaomi-redmi-note-17-pro-max-5g-purple-thumb-600x600.jpg",
      ten: "Xiaomi Redmi Note 13",
      giaTien: 8000000,
      cameraTruoc: "36MP",
      boNho: "256GB",
    },
  ];

  // Tạo ra một state giúp dữ liệu thông tin chi tiết các sản phẩm điện thoại
  // Dữ liệu mặc định hiện thị lên sẽ là sản phẩm đầu tiên có trong mảng arrDienThoai
  // Sau khi tạo state, thực hiện đưa các thông tin dữ liệu đang có trong state vào các thành phần jsx nằm trong div thông tin chi tiết
  // Với cấu trúc 3 phần tử đang hiển thị ở dưới tạo một sự kiện click khi khách hàng bấm vào nút thông tin chi tiết, thay đổi thông tin của thẻ div đang có đúng với sản phẩm khách hàng đã bấm

  const [dienThoai, setDienThoai] = useState(arrDienThoai[0]);

  // console.log(dienThoai);
  function renderDienThoaiDetail(item) {
    setDienThoai(item);
  }

  return (
    <div>
      <div className="container my-8">
        <h2>Bài tập hiển thị thông tin chi tiết của sản phẩm</h2>
        <div className="flex items-center">
          <div className="w-4/12">
            <img src={dienThoai.hinhAnh} alt="" className="w-full" />
          </div>
          <div className="w-8/12">
            <h3>Tên sản phẩm: {dienThoai.ten}</h3>
            <p>Giá tiền: {dienThoai.giaTien}</p>
            <p>Camera trước: {dienThoai.cameraTruoc}</p>
            <p>Bộ nhớ: {dienThoai.boNho}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-5">
          {arrDienThoai.map((item, i) => {
            // Truyền props xuống component con (tự đặt tên props ở đây là dienThoai)
            return (
              <DienThoaiDetail
                hoTen="Minh Thành"
                dienThoai={item}
                functionRender={renderDienThoaiDetail}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BaiTapState2;
