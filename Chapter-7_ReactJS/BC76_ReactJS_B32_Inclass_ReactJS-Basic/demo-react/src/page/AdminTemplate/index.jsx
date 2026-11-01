import { Outlet } from "react-router";

export default function AdminTemplate() {
  return (
    <div>
      <h3>Navigation</h3>
      <Outlet />
    </div>
  );
}
