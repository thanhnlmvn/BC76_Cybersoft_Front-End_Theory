import React from "react";

// Tính chất thứ 2 của props
// Truyền jsx vào bên trong lớp phủ
// Ở đây thay vì ta khai báo props.chilren để lấy dữ liệu jsx của component con
// Ta có thể dùng destructuring
const Wrapper = ({ children }) => {
  return <div className="bg-red-500 p-2">{children}</div>;
};

export default Wrapper;
