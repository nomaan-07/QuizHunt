import { Outlet } from "react-router";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="container my-20 w-178">
      <Header />
      <div className="mt-10 w-full space-y-14 rounded-xl bg-slate-50 p-7 dark:bg-cyan-900">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
