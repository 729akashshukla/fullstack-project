import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, role }) {
  const { user } = useSelector((state) => state.auth);

  if (!user) return <Navigate to="/" />; // Redirect to home if not logged in
  if (role && user.role !== role) return <Navigate to="/" />; // Restrict access by role

  return <Component />;
}

// ✅ Add Prop Validation
ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Must be a React component
  role: PropTypes.string, // Role is optional
};

export default ProtectedRoute;
