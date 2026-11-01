import React, { useState } from "react";
import ListXe from "./ListXe";
import ModalXeDetail from "./ModalXeDetail";

const BaiTapRenderXe = () => {
  const ARR_LIST_XE = [
    {
      id: 1,
      img: "./public/imgCar/products/black-car.jpg",
      name: "black car",
      price: 1000,
    },
    {
      id: 2,
      img: "./public/imgCar/products/red-car.jpg",
      name: "red car",
      price: 2000,
    },
    {
      id: 3,
      img: "./public/imgCar/products/silver-car.jpg",
      name: "silver car",
      price: 3000,
    },
    {
      id: 4,
      img: "./public/imgCar/products/steel-car.jpg",
      name: "steel car",
      price: 4000,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  function setModalCancel() {
    setIsModalOpen(false);
  }

  // Tạo một state để quản lý thông tin chi tiết xe
  // Xử lí lấy dữ liệu chi tiết loại xe người dùng cần coi khi bấm setModalOpen
  // Đưa dữ liệu từ state xuống component modal để hiển thị thông tin chi tiết xe

  const [xeDetail, setXeDetail] = useState();

  function setModalOpen(item) {
    setIsModalOpen(true);
    // Cập nhật giá trị xe vào state hiển thị thông tin chi tiết xe
    setXeDetail(item);
  }
  // console.log(xeDetail);

  return (
    <div>
      <h2>Bài tập hiển thị danh sách xe</h2>
      {/* Hiển thị danh sách xe */}
      <ListXe danhSachXe={ARR_LIST_XE} setModalOpen={setModalOpen} />

      {/* modal hiển thị thông tin chi tiết xe */}
      <ModalXeDetail
        isModalOpen={isModalOpen}
        setModalCancel={setModalCancel}
        xeDetail={xeDetail}
      />
    </div>
  );
};

export default BaiTapRenderXe;
