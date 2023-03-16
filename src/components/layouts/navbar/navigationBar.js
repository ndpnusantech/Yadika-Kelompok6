import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigationBar.css";

const NavigationBar = () => {
  const logo = "/assets/logo/logo.svg";
  const photoGuest = "assets/Profile User/profile.png";
  const male = "assets/Profile User/male.svg";
  const female = "assets/Profile User/female.svg";

  var user = JSON.parse(localStorage.getItem("user")) || {};

  const styleImage = {
    width: 50,
    marginRight: 7,
  };

  const borderStyle = {
    border: "1px solid black",
    borderRadius: "50%",
  };

  const dataStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const getProfilePicture = () => {
    if (!user.username) {
      return photoGuest;
    } else {
      if (user.gender == "Male") {
        return male;
      } else {
        return female;
      }
    }
  };

  return (
    <Navbar variant="light" className="p-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logo} alt="logo healtify" style={styleImage} /> Healtify
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/home" className="nav-link">
            Home
          </Link>
          <Link to="/obat" className="nav-link">
            Obat
          </Link>
          <Link to="/riwayat" className="nav-link">
            Riwayat
          </Link>
          <Link to="/pesananSaya" className="nav-link">
            Pesanan Saya
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </Nav>
        <div className="profileUser">
          <Link to="/profile">
            <div className="profile" style={borderStyle}>
              <img src={getProfilePicture()} width="40px" alt="" />
            </div>
            <div className="username">
              <h5>{dataStorage.username ? dataStorage.username : "Guest"}</h5>
            </div>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
