import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const { isAuthenticated } = useSelector((state) => state.timetracker);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
export { RequireAuth };
