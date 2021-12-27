import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { createUser } from "../../Actions/AuthActions";

const Signup = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  const [birth_date, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const navigate = useNavigate();

  const onSendDataUs = (event) => {
    event.preventDefault();
    let newUserData = {
      username: username,
      position: position,
      email: email,
      birth_date: birth_date,
      password: password,
      passwordConf: passwordConf,
    };
    console.log(newUserData);
    dispatch(createUser(newUserData));
    navigate("/login");
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
            onChange={(event) => setPosition(event.target.value)}
            type="text"
            placeholder="Position"
            name="position"
            required
          />
          <input
            onChange={(event) => setBirthdate(event.target.value)}
            type="date"
            placeholder="Birth date"
            name="birth_date"
            required
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            required
          />
          <input
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
          />
          <input
            onChange={(event) => setPasswordConf(event.target.value)}
            type="password"
            placeholder="Confirm password"
            name="password"
            autoComplete="current-password"
            required
          />
          <button className="btn-save" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export { Signup };
