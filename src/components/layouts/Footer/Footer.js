import "./Footer.css";

const Footer = () => {
    const logo = "/assets/logo/logo.svg";
    const ig = "/assets/Icon Sosial Media/instagram.png";
    const twitter = "/assets/Icon Sosial Media/twitter.png";
}

const styleImage = {
    width: 50,
    marginRight: 7,
  };

return(
    <footer>
          <img src={logo} alt="logo healtify" style={styleImage} /> Healtify
          <h1>Healtify</h1>
          <p>Jln buah batu, Number 107, RT 02, RW 11, Kab Bandung</p>
          <p>Sosial Media</p>
          <p>@healtifyofficial</p>
    </footer>
)

export default Footer;