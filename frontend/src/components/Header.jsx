import { NavLink } from "react-router-dom";
import "../assets/css/header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <NavLink to="login">Log in</NavLink>
      <span> & </span>
      <NavLink to="signup">Sign up</NavLink>
    </div>
  );
};

export { Header };
