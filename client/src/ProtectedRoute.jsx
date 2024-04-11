import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user.user);

  if (user && user.data && user.data.token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export { ProtectedRoute };
