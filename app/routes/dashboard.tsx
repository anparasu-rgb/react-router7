import { Link, Outlet } from "react-router";
function Dashboard() {
return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to your dashboard. Here you can manage your account and view your data.</p>
      <Link to="/dashboard/settings" className="text-blue-600 hover:underline">
        Go to Settings {'>>>'}
      </Link>
      <hr />
      <Outlet />
    </div>
);
}

export default Dashboard;