import { useSelector } from "react-redux";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  return <div className="p-4">Dashboard - Welcome {user?.name}</div>;
}

export default Dashboard;