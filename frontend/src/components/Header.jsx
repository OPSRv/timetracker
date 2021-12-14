import { NavLink } from "react-router-dom";
import "../assets/css/header.scss";
import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUsers } from "../Actions/TimeTrackerActions";

const Header = () => {
  const dispatch = useDispatch();

  const getUser = useSelector((state) => state.timetracker.CurrentUser);

  const loading = useSelector((state) => state.loading.isLoading);

  return (
    <>
      <div className="header-wrapper">
        <NavLink to="login">Log in</NavLink>
        <span> & </span>
        <NavLink to="signup">Sign up</NavLink>
      </div>

      {/* <div className="header-wrapper">
        <p>Привіт, {getUser.username}</p>
        <img className="header-userpicture" src={getUser.user_picture} alt="" />
      </div> */}
    </>
  );
};

export { Header };
