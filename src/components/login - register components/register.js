import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css";


const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullnameRegist = e.target.fullname.value;
    const emailRegist = e.target.email.value;
    const usernameRegist = e.target.username.value;
    const passRegist = e.target.password.value;
    const repeatPass = e.target.repeat.value;
    const gender = e.target.gender.value

    const newUser = {
      fullname: fullnameRegist,
      email: emailRegist,
      username: usernameRegist,
      password: passRegist,
      gender: gender
    };

    if (passRegist !== repeatPass) {
      alert("Password don't match");
    } else {
      if (localStorage.getItem(usernameRegist) === null) {
        alert("Succes");
        localStorage.setItem(usernameRegist, JSON.stringify(newUser));
        window.open("/", "_self");
      } else {
        alert("Username already exists");
      }
    }
  }


  return (
    <Container>
      <div className="boxLogin d-flex flex-column align-items-center p-3 mx-auto">
        <div className="title mb-4 mt-2">
          <h1 className="fw-semibold">Sign Up</h1>
        </div>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            name="fullname"
            placeholder="Full name"
            className="mb-3 rounded-3"
          />
          <Form.Control type="email" name="email" placeholder="Email" className="mb-3 rounded-3" />
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            className="mb-3 rounded-3"
          />
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            className="mb-3 rounded-3"
          />
          <Form.Control
            type="password"
            name="repeat"
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
            Already have an account? <Link to='/'>Sign in</Link>
          </p>
        </Form>
      </div>
    </Container >
  );
}

export default Register
