import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="container my-20">
      <Outlet />
    </div>
  );
}

export default AppLayout;
