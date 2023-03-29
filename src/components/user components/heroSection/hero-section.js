import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AnimationAOS } from "../../../AnimationAOS";
import "./heroSection.css";

const HeroSection = () => {
  const logo = "/assets/logo/healtify.png";

  AnimationAOS();

  return (
    <div className="hero-section">
      <Container className="d-flex align-items-center justify-content-between">
        <div className="title" data-aos="fade-right">
          <h5>Welcome....</h5>
          <h1>HEALTIFY FOR FAMILY HEALTH</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem harum
            eligendi optio maiores beatae fuga ex.
          </p>
          <Link to="/contact">
            <button className="btn  btn-md">Contact Us</button>
          </Link>
        </div>
        <div className="logo">
          <img src={logo} alt="" width="300px" />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
