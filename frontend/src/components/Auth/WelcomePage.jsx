import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  const currentUser = useSelector((state) => state.timetracker.CurrentUser);
  const { username } = currentUser;

  return (
    <>
      <div className="container-login">
        <div className="form-box">
          <p>Hello, {username} !</p>
          <Link to={"/"}>Start</Link>
        </div>
      </div>
    </>
  );
};
export { WelcomePage };
