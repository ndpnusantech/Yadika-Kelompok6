import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const profile = "/assets/Profile User/profile.png";

  return (
    <div className="login d-flex flex-column align-items-center p-3 mx-auto">
      <div className="title mb-2 mt-3">
        <h1 className="fw-semibold">Sign In</h1>
      </div>
      <form className="d-flex flex-column">
        <div className="pro mx-auto rounded-circle mb-4">
          <img src={profile} alt="profile" width="100px" />
        </div>
        <input
          type="text"
          placeholder="Email / Username"
          required
          className="mb-3 p rounded-3"
        />
        <input
          type="password"
          placeholder="password"
          required
          className="mb-3 p rounded-3"
        />
        <Link to="/forgot" className="mt-2 mb-2">
          Forgot password?
        </Link>
        <p className="mb-4">
          No have an account? <Link to="/register">Sign up </Link>
        </p>
        <button className="btn btn-md p-2 fs-5 mb-5 text-white fw-semibold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
