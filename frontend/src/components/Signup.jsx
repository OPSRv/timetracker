import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  const [birth_date, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toogle = (event) => {
    setUsername(username);
    setPosition(position);
    setBirthdate(birth_date);
    setEmail(email);
    setPassword(password);
  };

  const onSendDataUs = (event) => {
    event.preventDefault();
    let createUser = {
      username: username,
      position: position,
      email: email,
      birth_date: birth_date,
      password: password,
    };
    console.log(createUser);
    // singIn(newAuth);
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
          <button className="btn-save" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

// "username": "",
// "position": "",
// "email": "",
// "birth_date": null,
// "user_picture": null

export { Signup };
