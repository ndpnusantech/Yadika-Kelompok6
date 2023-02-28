import { Container } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  const surat = "./assets/contact/surat.svg";
  const telpon = "./assets/contact/telpon.svg";
  const gedung = "./assets/contact/gedung.svg";
  const jam = "./assets/contact/jam.svg";

  return (
    <Container>
      <div className="contact">
        <div className="title">
          <h1>Contact Us</h1>
        </div>

        <p>
          Lorem ipsum dolor sit amet, deleniti <br></br> repellat voluptatem
          error exercitationem.
        </p>
        <div className="form">
          <label>Name</label> <br />
          <input type="text" className="mb-2" /> <br />
          <label>Email</label> <br />
          <input type="text" className="mb-2" /> <br />
          <label>Message</label> <br />
          <input type="text" className="mb-2" /> <br />
        </div>
        <button>Send</button>
        <div className="box-1"></div>
        <div className="box-2">
          <h1 align="left">Info</h1>
          <table>
            <tr>
              <td>
                <img src={surat} alt="" />
              </td>
              <td>lenacahyani82@gmail.com</td>
            </tr>
            <tr>
              <td className="pt-5 pe-4">
                <img src={telpon} alt="" />
              </td>
              <td className="pt-5">lenacahyani82@gmail.com</td>
            </tr>
            <tr>
              <td className="pt-5">
                <img src={gedung} alt="" />
              </td>
              <td className="pt-5">lenacahyani82@gmail.com</td>
            </tr>
            <tr>
              <td className="pt-5">
                <img src={jam} alt="" />
              </td>
              <td className="pt-5">lenacahyani82@gmail.com</td>
            </tr>
          </table>
        </div>
        <div className="box-3"></div>
      </div>
    </Container>
  );
};

export default Contact;
