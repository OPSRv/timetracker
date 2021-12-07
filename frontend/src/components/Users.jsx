import ApiService from "../services/ApiService";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../assets/css/users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    ApiService.getAll("/auth/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err, "USER_LIST ERR ApiService");
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const listMenu = users.map((item) => (
    <Link to={`users/${item.username}`} key={item.id}>
      <div className="user-card">
        <img src={item.user_picture} alt="userpicture" />
        <p>{item.username}</p>
        <p>{item.position}</p>
      </div>
    </Link>
  ));

  return <div className="users ">{listMenu}</div>;
};
export { Users };
