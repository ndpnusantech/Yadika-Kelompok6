import { Container } from "react-bootstrap";
import "./heroSection.css";

const HeroSection = () => {
  const wallpaperGelombang = "/assets/gelombang.svg";
  const logo = "/assets/logo/healtify.png";

  const wallpaper = {
    backgroundImage: `url(${wallpaperGelombang})`,
    backgroundSize: "cover",
  };

  return (
    <div className="hero-section" style={wallpaper}>
      <Container className="d-flex align-items-center justify-content-between">
        <div className="title">
          <h5>Welcome....</h5>
          <h1>HEALTIFY FOR FAMILY HEALTH</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem harum
            eligendi optio maiores beatae fuga ex.
          </p>
          <button className="btn  btn-md">Contact Us</button>
        </div>
        <div className="logo">
          <img src={logo} alt="" width="300px" />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
