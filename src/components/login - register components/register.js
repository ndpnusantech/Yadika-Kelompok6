import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <Container>
      <div className="boxLogin d-flex flex-column align-items-center p-3 mx-auto">
        <div className="title mb-4 mt-2">
          <h1 className="fw-semibold">Sign Up</h1>
        </div>
        <form className="d-flex flex-column">
          <input
            type="text"
            placeholder="Full name"
            className="mb-3 rounded-3"
          />
          <input type="email" placeholder="Email" className="mb-3 rounded-3" />
          <input
            type="text"
            placeholder="Username"
            className="mb-3 rounded-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-3 rounded-3"
          />
          <input
            type="password"
            placeholder="Repeat password"
            className="mb-3 rounded-3"
          />
          <select name="gender" className="mb-4">
            <option value="Perempuan">Perempuan</option>
            <option value="Laki - Laki">Laki - Laki</option>
          </select>
          <button className="btn btn-md p-2 fs-5 mb-3 text-white fw-semibold">
            Sign Up
          </button>
          <p className="mt-2 text-center">
            Already have an account? <Link to='/register'>Sign in</Link>
          </p>
        </form>
      </div>
    </Container>
  );
};

export default Register;
