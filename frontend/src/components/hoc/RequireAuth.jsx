import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { getUser } from "../../Actions/AuthActions";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const auth_token = Cookies.get("auth_token");
    if (auth_token) {
      dispatch(getUser());
    }
  }, [dispatch]);

  const { isAuthenticated } = useSelector((state) => state.timetracker);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export { RequireAuth };
