import { useEffect } from "react";
import { Link } from "react-router-dom";

import "../assets/css/users.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Actions/TimeTrackerActions";
import { useNavigate } from "react-router-dom";
import { NoAuth } from "./NoAuth";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.timetracker.UserList);

  return (
    <>
      <div className="users ">
        {userList && userList.length !== 0 ? (
          userList.map((item) => (
            <Link to={`users/${item.username}`} key={item.id}>
              <div className="user-card">
                <img
                  className="user-picture"
                  src={item.user_picture}
                  alt="userpicture"
                />
                <p className="users-username-text">{item.username}</p>
                <span>-</span>
                <p>{item.position}</p>
              </div>
            </Link>
          ))
        ) : (
          <NoAuth />
        )}{" "}
      </div>
    </>
  );
};
export { Users };
