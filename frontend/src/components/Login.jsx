import React from "react";
import { useState } from "react";
import "../assets/css/login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toogle = (event) => {
    setUsername(username);
    setPassword(password);
  };
  const onSendDataUs = (event) => {
    event.preventDefault();
    let newAuth = {
      username: username,
      password: password,
    };
    console.log(newAuth);
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
