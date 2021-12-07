import React, { useState } from "react";
import "../assets/css/login.scss";
import ApiService from "../services/ApiService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const onSendDataUs = (event) => {
    event.preventDefault();
    let newAuth = {
      username: username,
      password: password,
    };
    console.log(newAuth);
    ApiService.authorization(newAuth)
      .then((res) => {
        console.log(res.data.auth_token);
        setToken(res.data.auth_token);
        localStorage.setItem("token", `Token ${res.data.auth_token}`);
        localStorage.setItem("isAuthenticated", true);
      })
      .catch((err) => {
        console.log(err, "newAuth ERR ApiService");
      });
    console.log(
      localStorage.getItem("token"),
      'localStorage.getItem("token")LOGIN JSX,'
    );
    ApiService.userInfo()
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "userInfo ERR ApiService");
      });
  };

  return (
    <div className="container-login">
      <div className="form-box">
        <form className="login-container" onSubmit={onSendDataUs}>
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
  );
};

export { Login };
