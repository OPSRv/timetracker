import { Link } from "react-router-dom";

const NoAuth = () => {
  return (
    <div className="noauth">
      <Link to="/login">
        <button className="btn-blue">Log in</button>
      </Link>
      <h3>or</h3>
      <Link to="/signup">
        <button className="btn-blue">Sign up</button>
      </Link>
    </div>
  );
};
export { NoAuth };
