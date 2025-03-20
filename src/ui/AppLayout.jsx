import { Outlet } from "react-router";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="container my-20">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
