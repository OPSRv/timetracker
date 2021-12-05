import { useState, useEffect } from "react";
import ApiService from "../services/ApiService";
import { Link, useLocation } from "react-router-dom";

const UserId = () => {
  const [userId, setUserId] = useState([]);

  let url = useLocation();

  useEffect(() => {
    const getUserId = () => {
      ApiService.get(url.pathname)
        .then((res) => {
          setUserId(res.data);
        })
        .catch((err) => {
          console.log(err, "USER_ID ERR ApiService");
        });
    };
    getUserId();
  }, [url]);

  return (
    <div>
      <img src={userId.user_picture} alt="userpicture" />
      <p>{userId.username}</p>
      <p>{userId.position}</p>
      <p>{userId.email}</p>
      <p>{userId.birth_date}</p>
      <Link to="/">Back</Link>
    </div>
  );
};
export { UserId };
