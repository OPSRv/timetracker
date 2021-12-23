import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth } from "../Actions/TimeTrackerActions";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    let newAuth = {
      username: username,
      password: password,
    };
    dispatch(getAuth(newAuth));
    navigate(fromPage, { replace: true });
  };

  return (
    <>
      <div className="container-login">
        <div className="form-box">
          <form className="login-container" onSubmit={handleLogin}>
            <input
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              placeholder="Name"
              autoComplete="username"
              name="username"
              required
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="btn-save" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export { Login };
