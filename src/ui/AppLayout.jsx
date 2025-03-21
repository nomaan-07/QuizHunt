import { Outlet } from "react-router";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="container mt-4 mb-20 w-full md:w-180">
      <Header />
      <div className="mt-10 w-full space-y-10 rounded-xl bg-slate-50 p-4 md:space-y-14 md:p-7 dark:bg-cyan-900">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
