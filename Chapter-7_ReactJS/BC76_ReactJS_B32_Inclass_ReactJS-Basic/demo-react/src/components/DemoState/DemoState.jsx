import React, { useState } from "react";
import BaiTapState1 from "./BaiTapState1";
import BaiTapState2 from "./BaiTapState2";
import Wrapper from "./Wrapper";
import { Link } from "react-router";

const DemoState = () => {
  // State sẽ trả về 2 giá trị
  // giá trị đại diện cho state và phương thức cập nhật dữ liệu từ state
  // 2 giá trị này sẽ được bóc tách bằng destructuring (tự đặt tên cho giá trị đại diện và phương thức)
  // useState(giá trị ban đầu) khi không có giá trị ban đầu giá trị đại diện sẽ bằng undefined
  const [score, setScore] = useState(9);
  const [inforUser, setInforUser] = useState({
    hoTen: "Minh Thành",
    lop: "BC76",
    diaChi: "Quận 3",
  });

  function handleScore() {
    setScore(score + 1);
  }

  console.log(inforUser);

  return (
    <div>
      {/* <Link> đến từ thư viện react route giúp tạo nút chuyển hướng người dùng (giống thẻ a) */}
      {/* to thuộc tính cho truyền đường dẫn muốn chuyển hướng vào */}
      <Link
        to="/dtdd"
        className="border-2 border-blue-500 py-2 px-5 rounded mt-6 ml-2 "
      >
        Bấm để chuyển hướng
      </Link>
      <h2 className="text-center text-4xl">Bài tập demo state trong react</h2>
      <div>
        <p>Số điểm: {score}</p>
        <button
          onClick={handleScore}
          className="py-2 px-5 bg-black text-white rounded-md"
        >
          Tăng điểm số
        </button>
      </div>
      <div className="mt-5">
        <h3 className="text-2xl">Bài tập thay đổi tên người dùng</h3>

        {/* Sự kiện onChange giống oninput */}
        <input
          onChange={(event) => {
            console.log(event.target.value);
            setInforUser({ ...inforUser, hoTen: event.target.value });
          }}
          type="text"
          placeholder="Vui lòng nhập tên mới"
          className="p-2 border-black border rounded"
        />
        <div>
          <h4>{inforUser.hoTen}</h4>
          <p>{inforUser.lop}</p>
          <p>{inforUser.diaChi}</p>
        </div>
      </div>

      <BaiTapState1 />
      <BaiTapState2 />
      <Wrapper>
        <input
          className="bg-white"
          type="text"
          placeholder="Vui lòng nhập tên"
        />
      </Wrapper>
      <Wrapper>
        <button>Xem chi tiết</button>
      </Wrapper>
    </div>
  );
};

export default DemoState;
