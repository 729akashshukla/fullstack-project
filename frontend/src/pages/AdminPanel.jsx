import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminPanel() {
  const { user } = useSelector((state) => state.auth);
  if (user?.role !== "admin") return <Navigate to="/" />;

  return <div className="p-4">Admin Panel - Only for Admins</div>;
}

export default AdminPanel;