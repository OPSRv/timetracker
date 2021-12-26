import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.timetracker);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export { RequireAuth };
