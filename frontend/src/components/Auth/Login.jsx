import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { getUser, getAuth } from "../../Actions/AuthActions";
import "../../assets/css/login.scss";
import { WelcomePage } from "./WelcomePage";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const currentUser = useSelector((state) => state.timetracker.CurrentUser);
  const { username } = currentUser;

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    let newAuth = {
      username: usernameInput,
      password: passwordInput,
    };
    setUsernameInput("");
    setPasswordInput("");
    dispatch(getAuth(newAuth));
    navigate(fromPage, { replace: true });
  };

  useEffect(() => {
    const auth_token = Cookies.get("auth_token");
    if (auth_token) {
      dispatch(getUser());
    }
  }, [dispatch]);

  if (username && username.length !== 0) {
    return <WelcomePage />;
  }

  return (
    <>
      <div className="container-login">
        <div className="form-box">
          <form className="login-container" onSubmit={handleLogin}>
            <input
              onChange={(event) => setUsernameInput(event.target.value)}
              type="text"
              placeholder="Name"
              autoComplete="username"
              name="username"
              required
            />
            <input
              onChange={(event) => setPasswordInput(event.target.value)}
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
