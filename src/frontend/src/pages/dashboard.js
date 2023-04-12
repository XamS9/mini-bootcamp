import DashboardSideBar from "../components/adminSideBar";
function Dashboard() {

    return (
      <div className="container-fluid">
        <h1 className="text-bg-dark text-center rounded">Dashboard</h1>
        <DashboardSideBar />
      </div>
    );
  }

export default Dashboard;
