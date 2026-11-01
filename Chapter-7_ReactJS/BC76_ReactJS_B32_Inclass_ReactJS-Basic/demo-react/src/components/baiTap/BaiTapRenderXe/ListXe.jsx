import React from "react";

const ListXe = (props) => {
  console.log(props.danhSachXe);
  let { danhSachXe, setModalOpen } = props;
  // console.log(danhSachXe);
  return (
    <div>
      <h3>Danh sách xe</h3>
      {/* Chia cấu trúc 4 cột */}
      <div className="container">
        <div className="grid grid-cols-4 gap-10">
          {danhSachXe.map((item, index) => {
            return (
              <div className="car border border-black rounded " key={index}>
                <img src={item.img} alt="" />
                <div className="car__title space-y-5 p-4">
                  <h2 className="capitalize">{item.name}</h2>
                  <p>{item.price}</p>
                  <button
                    onClick={() => {
                      setModalOpen(item);
                    }}
                    className=" rounded bg-green-700  py-3 px-2 cursor-pointer text-white"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListXe;
