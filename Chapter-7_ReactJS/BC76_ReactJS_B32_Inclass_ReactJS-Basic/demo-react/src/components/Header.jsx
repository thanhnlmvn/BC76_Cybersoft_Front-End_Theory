// import giúp file khác import được file này và sử dụng
import React from "react";

const Header = () => {
  let hoTen = "Minh Thành";
  let classLayout = "bg-[#F9DE70] p-section-padding text-center";
  let sinhVien = {
    name: "Lý tín",
    tuoi: 15,
  };
  let theP = <div>Hello</div>;
  // console.log(<div>Hello</div>);

  let arrString = ["Lan", "My", "Huỳnh", 4, 20, 15, <p>Hello Thành</p>];

  let arrData = [
    {
      hoTen: "Công Bình",
      tuoi: 40,
    },
    {
      hoTen: "Trương Tuấn Khải",
      tuoi: 35,
    },
  ];

  console.log(arrData);
  let newArrData = arrData.map((item, index) => {
    return (
      <div>
        <p>{item.hoTen}</p>
        <p>{item.tuoi}</p>
      </div>
    );
  });

  console.log(newArrData);

  // return về thẻ jsx giúp viết html
  // Trong file js, jsx là object của react

  /* Data binding cho phép truyền {data} vào thẻ jsx lên giao diện */
  // Các dữ liệu có thể đưa lên giao diện: string, number, array(JSX)

  return (
    <div className={classLayout}>
      {hoTen}
      <div className={classLayout}>{10 + 15}</div>
      {/* Không được truyền nguyên object bình thường vào data binding */}
      <p>{sinhVien.name}</p>

      {/* Tuy nhiên có object đặc biệt cho phép truyền vì thẻ JSX là object nên nó cho phép truyền data chứa object JSX */}
      <div>{theP}</div>
      <div>{arrString}</div>
      <div className="data">{newArrData} </div>
    </div>
  );
};

// export giúp các file khác import được file này và sử dụng
export default Header;
