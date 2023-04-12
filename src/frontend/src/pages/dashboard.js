import DashboardSideBar from "../components/adminSideBar";
import { useContext } from "react";
import { AppContext } from "../context/loginContext";
function Dashboard() {
  const context = useContext(AppContext)
    return (
      <div className="container-fluid">
        <h1 className="text-bg-dark text-center rounded">Dashboard</h1>
        <DashboardSideBar />
      </div>
    );
  }

export default Dashboard;
