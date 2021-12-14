import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import "../assets/css/users.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Actions/TimeTrackerActions";

import { Loading } from "./Loading";

const Users = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.timetracker.UserList);

  const loading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const listMenu = userList.map((item) => (
    <Link to={`users/${item.username}`} key={item.id}>
      <div className="user-card">
        <img
          className="user-picture"
          src={item.user_picture}
          alt="userpicture"
        />
        <div>{item.username}</div>
        <div>{item.position}</div>
      </div>
    </Link>
  ));
  return <div className="users "> {listMenu} </div>;
};
export { Users };
