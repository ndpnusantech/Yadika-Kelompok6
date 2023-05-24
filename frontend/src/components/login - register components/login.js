import "./login.css";
import { Link } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  const profile = "/assets/Profile User/profile.png";
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // console.log(formData);

  // const user = JSON.parse(localStorage.getItem(formData.username));
  const handleSubmit = (e) => {
    e.preventDefault();

    // Login
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
      alert("Username not registered");
    } else {
      if (formData.password !== user.password) {
        alert("Password wrong");
      } else {
        window.open("/home", "_self");
      }
    }

    // End
  };



  return (
    <Container>
      <div className="login d-flex flex-column align-items-center p-3 mx-auto">
        <div className="title mb-2 mt-3">
          <h1 className="fw-semibold">Sign In</h1>
        </div>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <div className="pro mx-auto rounded-circle mb-4">
            <img src={profile} alt="profile" width="100px" />
          </div>
          <Form.Control
            type="text"
            name="username"
            placeholder="username"
            required
            className="mb-3 p rounded-3"
            onChange={handleChange}
          />
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            required
            className="mb-3 p rounded-3"
            onChange={handleChange}
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
        </Form>
      </div>
    </Container>
  );
};

export default Login;



