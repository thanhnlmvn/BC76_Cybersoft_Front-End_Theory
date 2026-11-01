import React from "react";
import { Modal } from "antd";
const ModalXeDetail = (props) => {
  let { isModalOpen, setModalCancel, xeDetail } = props;
  return (
    <Modal
      title={<h3 className="text-red-500">Hiển thị thông tin xe</h3>}
      open={isModalOpen}
      onCancel={setModalCancel}
    >
      {/* Sử dụng dấu ? là optional dữ liệu state props để khi có dữ liệu mới đưa phần dữ liệu đó lên giao diện không có sẽ trả về false */}
      {/* <div>
        <img src={xeDetail?.img} alt="" />
        <p>{xeDetail?.name}</p>
        <p>{xeDetail?.price}</p>
      </div> */}

      {/* Cách thứ 2 sử dụng toán tử && để xử lý giao diện khi có dữ liệu */}
      {/* {xeDetail && (
        <div>
          <img src={xeDetail.img} alt="" />
          <p>{xeDetail.name}</p>
          <p>{xeDetail.price}</p>
        </div>
      )} */}

      {/* Cách thứ 3 sử dụng toán tử điều kiện để xử lý nhiều giao diện khác nhau */}
      {xeDetail ? (
        <div>
          <img src={xeDetail.img} alt="" />
          <p>{xeDetail.name}</p>
          <p>{xeDetail.price}</p>
        </div>
      ) : (
        <p>Không có dữ liệu xe</p>
      )}
    </Modal>
  );
};

export default ModalXeDetail;
