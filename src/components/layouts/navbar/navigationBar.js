import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navigationBar.css";

const NavigationBar = () => {
  const logo = "/assets/logo/logo.svg";
  const profile = "/assets/Profile User/person-circle 1.svg";

  const styleImage = {
    width: 50,
    marginRight: 7,
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
          <Link to="/obat" className="nav-link">
            Riwayat
          </Link>
          <Link to="/obat" className="nav-link">
            Pesanan Saya
          </Link>
          <Link to="/obat" className="nav-link">
            Contact
          </Link>
        </Nav>
        <div className="profileUser">
          <a href="/profileUser">
            <div className="profile">
              <img src={profile} width="40px" alt="" />
            </div>
            <div className="username">
              <h5>Iqbal</h5>
            </div>
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
