import "./footer.css";

const Footer = () => {
  const logo = "/assets/logo/logo2.svg";
  const ig = "/assets/Icon Sosial Media/Instagram.png";
  const twt = "/assets/Icon Sosial Media/twitter.png";

  const styleImage = {
    width: 150,
    marginLeft: 107,
  };

  return (
    <footer className="d-flex justify-content-around pt-5 pb-5 border-top">
      <div className="logo d-flex align-items-center">
        <img src={logo} alt="" />
        <h2 className="fs-1">Healtify</h2>
      </div>
      <div className="location mt-4">
        <h5>Location</h5>
        <p className="opacity-80">
          Jln buah batu, Number 107, RT 02, RW 11, Kab Bandung
        </p>
      </div>
      <div className="sosmed mt-4">
        <h5>Social Media</h5>
        <div className="instagram d-flex align-items-center mb-3">
          <a href="">
            <img src={ig} alt="" className="me-2" width="25px" />{" "}
            @healtifyofficial
          </a>
        </div>
        <div className="twitter d-flex align-items-center">
          <a href="">
            <img src={twt} alt="" className="me-2" width="25px" />{" "}
            @healtifyofficial
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
