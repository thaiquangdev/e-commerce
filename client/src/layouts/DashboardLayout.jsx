import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="max-w-1170 mx-auto">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
