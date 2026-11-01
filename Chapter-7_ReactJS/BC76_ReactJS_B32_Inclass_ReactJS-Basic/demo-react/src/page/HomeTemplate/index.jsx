import { Outlet } from "react-router";
import Header from "./_component/Header";

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      {/* Outlet của thư viện react router sẽ giúp trang lớn định tuyến được các trang nhỏ mà nó đang quản lý */}
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
