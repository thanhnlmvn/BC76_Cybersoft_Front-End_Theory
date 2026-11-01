import React, { useState } from "react";

const BaiTapState1 = () => {
  let styleBtn = "py-2 px-5 text-white rounded";

  const [fontSize, setFontSize] = useState(16);

  // console.log(fontSize);
  function updateFontSize(type) {
    if (type) {
      setFontSize(fontSize + 2);
    } else {
      setFontSize(fontSize - 2);
    }
  }
  return (
    <div>
      <h2
        className="my-10"
        id="h2"
        style={{
          fontSize: fontSize,
        }}
      >
        Thực hiện sử dụng và tạo state để giúp thực hiện tăng giảm font size cho
        nội dung đang có trong thẻ h2
      </h2>
      <button
        onClick={() => {
          updateFontSize(true);
        }}
        className={`${styleBtn} bg-black`}
      >
        Tăng font size
      </button>
      <button
        onClick={() => {
          updateFontSize(false);
        }}
        className={`${styleBtn} bg-purple-500`}
      >
        Giảm font size
      </button>
    </div>
  );
};

export default BaiTapState1;
