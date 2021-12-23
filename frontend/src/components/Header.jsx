import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/header.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { outLogin } from "../Actions/TimeTrackerActions";
import { CgLogOut } from "react-icons/cg";
import { LoadingSmall } from "./LoadingSmall";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.timetracker);
  const currentUser = useSelector((state) => state.timetracker.CurrentUser);

  const isLogOut = () => {
    dispatch(outLogin());
    navigate("/login");
  };

  useEffect(() => {}, [currentUser]);

  return (
    <>
      {isAuthenticated ? (
        currentUser && currentUser.username ? (
          <div className="header-wrapper">
            <img
              className="header-userpicture"
              src={currentUser.user_picture}
              alt="user_picture"
            />
            <p className="header-text-name">{currentUser.username}</p>
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
