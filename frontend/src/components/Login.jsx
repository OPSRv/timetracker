import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, getCurrentUsers } from "../Actions/TimeTrackerActions";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.scss";
import { Loading } from "./Loading";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isloading = useSelector((state) => state.loading.isLoading);

  const handleLogin = (event) => {
    event.preventDefault();
    let newAuth = {
      username: username,
      password: password,
    };
    dispatch(getAuth(newAuth));
  };

  const auth_token = useSelector(
    (state) => state.timetracker.Authorization.auth_token
  );
  const currentUser = useSelector((state) => state.timetracker.CurrentUser);

  useEffect(() => {
    if (currentUser && currentUser.length !== 0) {
      dispatch(getCurrentUsers(auth_token));
    }
  }, []);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export { Login };
