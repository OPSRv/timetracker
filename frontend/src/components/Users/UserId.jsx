import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getUserId } from "../../Actions/UserActions";

const UserId = () => {
  const dispatch = useDispatch();
  const url = useLocation();

  const userId = useSelector((state) => state.timetracker.UserId);

  useEffect(() => {
    dispatch(getUserId(url.pathname));
  }, [dispatch, url]);

  return (
    <>
      <div className="userId gd">
        <img
          className="user-picture"
          src={userId.user_picture}
          alt="userpicture"
        />
        <p>{userId.username}</p>
        <p>{userId.position}</p>
        <p>{userId.email}</p>
        <p>{userId.birth_date}</p>
        <Link to="/">
          <button className="btn-blue">Back</button>
        </Link>
      </div>
    </>
  );
};
export { UserId };
