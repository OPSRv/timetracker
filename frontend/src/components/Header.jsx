import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/header.scss";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUsers, outLogin } from "../Actions/TimeTrackerActions";
import { getUsers } from "../Actions/TimeTrackerActions";
import { CgLogOut } from "react-icons/cg";
import { LoadingSmall } from "./LoadingSmall";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.timetracker);
  const usersAuth = useSelector((state) => state.timetracker.CurrentUser);
  const auth_token = useSelector(
    (state) => state.timetracker.Authorization.auth_token
  );

  const getUsersIdDispatch = useCallback(() => {
    dispatch(getCurrentUsers(auth_token));
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUsers());
      getUsersIdDispatch();
    }
  }, [dispatch]);

  const isLogOut = () => {
    dispatch(outLogin());
    navigate("/login");
  };

  return (
    <>
      {isAuthenticated ? (
        usersAuth && usersAuth.username ? (
          <div className="header-wrapper">
            <img
              className="header-userpicture"
              src={usersAuth.user_picture}
              alt="user_picture"
            />
            <p className="header-text-name">{usersAuth.username}</p>
            <CgLogOut onClick={() => isLogOut()} />
          </div>
        ) : (
          <div className="header-wrapper">
            <LoadingSmall />
          </div>
        )
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
