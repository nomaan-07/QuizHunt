import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="font-roboto container my-20 text-sky-900">
      <Outlet />
    </div>
  );
}

export default AppLayout;
