import React from "react";

const DienThoaiDetail = (props) => {
  console.log(props);
  // props là dạng dữ liệu readOnly không thể thay đổi giá trị
  return (
    <div className="p-5 border border-gray-300 rounded space-y-5">
      <img src={props.dienThoai.hinhAnh} alt="" />
      <h3>{props.dienThoai.ten}</h3>
      <button
        onClick={() => {
          // console.log(item);
          // console.log(setDienThoai(arrDienThoai[i]));
          // setDienThoai(item);
          props.functionRender(props.dienThoai);
        }}
        className="py-2 px-5 bg-black text-white rounded-md"
      >
        Hiển thị thông số
      </button>
    </div>
  );
};

export default DienThoaiDetail;
