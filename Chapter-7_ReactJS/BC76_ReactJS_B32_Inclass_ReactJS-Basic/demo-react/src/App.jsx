import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import hinhAnh1 from "./assets/img/img1.jpg";
import BaiTapRenderDienThoai from "./components/baiTap/BaiTapRenderDienThoai";
import DemoState from "./components/DemoState/DemoState";
import { DatePicker } from "antd";
import BaiTapRenderXe from "./components/baiTap/BaiTapRenderXe/BaiTapRenderXe";
import { Route, Routes } from "react-router";
import HomeTemplate from "./page/HomeTemplate";
import AdminTemplate from "./page/AdminTemplate";
import Home from "./page/HomeTemplate/Home";
import About from "./page/HomeTemplate/About";
import ListMovie from "./page/HomeTemplate/ListMovie";
import Dashboard from "./page/AdminTemplate/Dashboard";
import AddUser from "./page/AdminTemplate/AddUser";

import { renderRoute } from "./routes";

function App() {
  return (
    <>
      {/* <Header />
      <div className="flex">
        <Navigation />
        <Content />
      </div>
      <Footer /> */}
      {/* Cách đầu tiên để hiển thị hình ảnh (đường dẫn bắt đầu đi từ index.html) */}
      {/* <img src="./public/img1.jpg" alt="" /> */}

      {/* Cách thứ 2 sử dụng import tạo biến để nhúng hình ảnh vào file */}
      {/* <div className="my-container">
        <img src={hinhAnh1} className="theHinhAnh" alt="" />
      </div>

      <BaiTapRenderDienThoai /> */}
      {/* <DatePicker /> */}
      {/* <DemoState /> */}
      {/* <BaiTapRenderXe /> */}

      {/* Routes đến từ thư viện react route dùng để bộc các thẻ route */}
      <Routes>
        {/* Route định danh các tuyến đường (path) (là địa chỉ / các trang con) */}
        {/* element sẽ đưa các component hoặc các thẻ jsx cần hiển thị */}
        {/* <Route
          path="/dtdd"
          element={
            <div className="h-screen flex items-center justify-center text-4xl text-red-500">
              Hello tôi là trang dtdd đây
            </div>
          }
        /> */}

        {/* Tạo tuyến đường cho trang chủ hiển thị component DemoState */}
        {/* <Route path="/" element={<DemoState />} /> */}

        {/* Định tuyến trang HomeTemplate - localhost:5173 */}
        {/* <Route path="" element={<HomeTemplate />}> */}
        {/* Định tuyến trang Home - localhost:5173 */}
        {/* <Route path="" element={<Home />} /> */}

        {/* Định tuyến trang About - localhost:5173/about */}
        {/* <Route path="about" element={<About />} /> */}

        {/* Định tuyến trang ListMovie - localhost:5173/list-movie */}
        {/* <Route path="list-movie" element={<ListMovie />} /> */}
        {/* </Route> */}

        {/* Định tuyến trang AdminTemplate - localhost:5173/admin */}
        {/* <Route path="admin" element={<AdminTemplate />}> */}
        {/* Định tuyến trang Dashboard - localhost:5173/dashboard */}
        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Định tuyến trang AddUser - localhost:5173/add-user */}
        {/* <Route path="add-user" element={<AddUser />} /> */}
        {/* </Route> */}

        {renderRoute()}
      </Routes>
    </>
  );
}

export default App;
