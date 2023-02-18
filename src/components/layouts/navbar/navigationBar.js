import { Container, Nav, Navbar } from "react-bootstrap";
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
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/obat">Obat</Nav.Link>
          <Nav.Link href="/riwayat">Riwayat</Nav.Link>
          <Nav.Link href="/pesananSaya">Pesanan Saya</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
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
