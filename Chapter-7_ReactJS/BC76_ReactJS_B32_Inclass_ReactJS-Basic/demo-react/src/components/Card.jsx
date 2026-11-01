import React from "react";

// Nhúng module css
// Chỉ các file được nhúng và gọi biến và className của module css mới có thể sử dụng
// Thường sử dụng để build mẫu cho 1 component có các style có sắn
// Tuy nhiên module css sẽ ít sử dụng vì trong dự án khách hàng sẽ thay đổi liên tục nên thay đổi style rất nhiều
import styleButton from "./button.module.css";

const Card = () => {
  return (
    <div className="text-center bg-[#55BC6E] text-white p-section-padding">
      <button className={styleButton.btn_dark}>Thêm nội dung</button>
    </div>
  );
};

export default Card;
