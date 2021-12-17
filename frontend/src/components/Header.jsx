import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/header.scss";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUsers } from "../Actions/TimeTrackerActions";
import { Loading } from "./Loading";
import { getUsers } from "../Actions/TimeTrackerActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.timetracker);

  const auth_token = useSelector(
    (state) => state.timetracker.Authorization.auth_token
  );

  const getUsersIdDispatch = useCallback(() => {
    dispatch(getCurrentUsers(auth_token));
  }, [auth_token]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUsers());

      getUsersIdDispatch();
    }
  }, [dispatch]);

  const usersAuth = useSelector((state) => state.timetracker.CurrentUser);
  // console.log(usersAuth);
  return (
    <>
      {usersAuth ? (
        <div className="header-wrapper">
          <p>Hello, {usersAuth.username}</p>
          <img
            className="header-userpicture"
            src={usersAuth.user_picture}
            alt="user_picture"
          />
        </div>
      ) : (
        <div className="header-wrapper">
          <NavLink to="login">Log in</NavLink>
          <span> & </span>
          <NavLink to="signup">Sign up</NavLink>
        </div>
      )}
    </>
  );
};

export { Header };
