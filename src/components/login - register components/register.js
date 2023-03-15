import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Success from "../success animation/success";
import "./register.css";


const Register = () => {
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullnameRegist = e.target.fullname.value;
    const emailRegist = e.target.email.value;
    const usernameRegist = e.target.username.value;
    const passRegist = e.target.password.value;
    const noHpRegist = e.target.noHp.value;
    const gender = e.target.gender.value

    const newUser = {
      fullname: fullnameRegist,
      email: emailRegist,
      username: usernameRegist,
      noHandphone: noHpRegist,
      password: passRegist,
      gender: gender
    };


    localStorage.setItem('user', JSON.stringify(newUser));
    setSuccess(true)
    setTimeout(() => {
      window.open("/", "_self");
    }, 2500);


  }


  return (
    success ? (<Success success="Success Signup" />) :
      (
        <Container>
          <div className="boxLogin d-flex flex-column align-items-center p-3 mx-auto">
            <div className="title mb-4 mt-2">
              <h1 className="fw-semibold">Sign Up</h1>
            </div >
            <Form className="d-flex flex-column" onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                name="fullname"
                placeholder="Full name"
                className="mb-3 rounded-3"
                required
              />
              <Form.Control type="email" name="email" placeholder="Email" className="mb-3 rounded-3" required />

              <Form.Control
                type="tel"
                name="noHp"
                placeholder="No Handphone"
                className="mb-3 rounded-3"
                required
              />
              <Form.Control
                type="text"
                name="username"
                placeholder="Username"
                className="mb-3 rounded-3"
                required
              />
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                className="mb-3 rounded-3"
                required
              />
              <div className="d-flex align-items-center mb-3">

                <Form.Label className="me-3 mt-1">Gender :</Form.Label>
                <select name="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <button className="btn btn-md p-2 fs-5 mb-3 text-white fw-semibold">
                Sign Up
              </button>
              <p className="mt-2 text-center">
                Already have an account? <Link to='/'>Sign in</Link>
              </p>
            </Form>
          </div >
        </Container >
      )


  );
}

export default Register
