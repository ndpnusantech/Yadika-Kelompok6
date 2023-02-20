import "./footer.css";

const Footer = () => {
    const logo = "/assets/logo/Lgo.svg";
    const ig = "/assets/Icon Sosial Media/Instagram.png";
    const twt = "/assets/Icon Sosial Media/twitter.png";


const styleImage = {
    width: 150,
    marginLeft: 107,
  };

return(
    <footer>
        <img src={logo} alt="logo healtify" style={styleImage} /> 
        <h3>Healtify</h3>
        <div className="loc">
        <h5>Location</h5>
        <p>Jln buah batu, Number 107, RT <br></br> 02, RW 11, Kab Bandung</p>
        </div>
        <div className="so">
        <h5>Social media</h5>
        <img src={ig} alt="logo instagram" />@healtifyofficial <br></br>
        <img src={twt} alt="logo twitter" />@healtifyofficial
    
        
        </div>
    </footer>
)
}
export default Footer;


