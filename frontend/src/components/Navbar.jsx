import  { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, logout } from "../redux/authSlice";
import API from "../utils/api";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleLogout = async () => {
    await API.get("/auth/logout");
    dispatch(logout());
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div>
        <Link to="/" className="mr-4">Home</Link>
        {user && <Link to="/dashboard" className="mr-4">Dashboard</Link>}
        {user?.role === "admin" && <Link to="/admin">Admin Panel</Link>}
      </div>
      <div>
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
        ) : (
          <a href="http://localhost:8000/auth/google" className="bg-green-500 px-3 py-1 rounded">Login with Google</a>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
