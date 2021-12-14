import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAuth, getCurrentUsers } from "../Actions/TimeTrackerActions";

import "../assets/css/login.scss";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const auth_token = useSelector(
    (state) => state.timetracker.Authorization.auth_token
  );

  const handleLogin = (event) => {
    event.preventDefault();
    let newAuth = {
      username: username,
      password: password,
    };
    dispatch(getAuth(newAuth));
    navigate("/");
  };

  const getUsersIdDispatch = useCallback(() => {
    dispatch(getCurrentUsers(auth_token));
  }, []);

  useEffect(() => {
    getUsersIdDispatch();
    dispatch(getCurrentUsers(auth_token));
  }, []);

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
