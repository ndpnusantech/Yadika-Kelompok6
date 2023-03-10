import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigationBar.css";

const NavigationBar = () => {
  const logo = "/assets/logo/logo.svg";
  const profile = "/assets/Profile User/person-circle 1.png";

  const styleImage = {
    width: 50,
    marginRight: 7,
  };

  const dataStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

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
            <div className="profile">
              <img src={profile} width="40px" alt="" />
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
