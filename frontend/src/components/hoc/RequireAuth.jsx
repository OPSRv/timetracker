import { useLocation, Navigate } from "react-router-dom";

import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUsers, getUsers } from "../../Actions/TimeTrackerActions";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.timetracker);

  const auth_token = useSelector(
    (state) => state.timetracker.Authorization.auth_token
  );

  const getUsersIdDispatch = useCallback(() => {
    dispatch(getCurrentUsers(auth_token));
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      getUsersIdDispatch();
      dispatch(getUsers());
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};
export { RequireAuth };
