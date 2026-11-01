import React from "react";

// Nhúng css theo component
// Các file css theo component khi nhúng vào component sẽ ăn theo toàn bộ css sẽ bị trùng các className khi sử dụng sẽ gây nhiều lỗi khi xây dựng layout
// Để khác phục điều này với mỗi componnet sử dụng theo css theo component ta nên đặt thêm id vào thẻ cha lớn nhất và mỗi khi khai báo className bên css nên bắt đầu bằng id đã đặt
import "./navigation.css";

const Navigation = () => {
  return (
    <div
      className="bg-[#F19960] text-center p-section-padding text-white w-[30%]"
      id="navigation"
    >
      Navigation
      {/* Có các loại css sau */}
      {/* module css - global css - css theo component */}
      <img className="theHinhAnh" src="./public/img1.jpg" alt="" />
      <button className="btn__primary">click</button>
      {/* global css sẽ nằm ở trong file index.css  */}
    </div>
  );
};

export default Navigation;
