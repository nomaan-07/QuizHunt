import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="font-roboto container">
      <Outlet />
    </div>
  );
}

export default AppLayout;
