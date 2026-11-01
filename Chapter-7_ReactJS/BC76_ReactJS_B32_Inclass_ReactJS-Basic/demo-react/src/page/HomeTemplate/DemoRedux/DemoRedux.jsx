import React from "react";
import { useSelector } from "react-redux";

const DemoRedux = () => {
  // useSelector là hook của thư viện react-redux dùng để trích xuất (extract) một phần dữ liệu từ Redux store state trong các functional component
  // Nhận vào một callbackfn có tham số state đại diện cho reducer của react redux
  const data = useSelector((state) => state.inputSlice);
  console.log(data);
  return (
    <div>
      <h2>Demo về cách sử dụng redux toolkit</h2>
      <form action="">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="John"
            required
            value={data.hoTen}
          />
        </div>
      </form>
    </div>
  );
};

export default DemoRedux;
