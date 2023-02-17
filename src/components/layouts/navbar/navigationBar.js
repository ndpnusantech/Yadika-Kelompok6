import { Container, Nav, Navbar } from "react-bootstrap";
import "./navigationBar.css";

const NavigationBar = () => {
  const logo = "/assets/logo/logo.svg";

  const styleImage = {
    width: 50,
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img src={logo} alt="logo healtify" style={styleImage} /> Healtify
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Obat</Nav.Link>
          <Nav.Link href="#pricing">Pesanan Saya</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
