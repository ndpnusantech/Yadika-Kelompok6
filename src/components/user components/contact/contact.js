import { Container, Form } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  const surat = "./assets/contact/mail.svg";
  const telpon = "./assets/contact/telpon.svg";
  const gedung = "./assets/contact/gedung.svg";
  const jam = "./assets/contact/jam.svg";

  return (
    <Container>
      <div className="contact">
        <div className="title">
          <h1
            className="fw-semibold mt-4 mb-1sssssssss"
            style={{ color: "#094067" }}
          >
            Contact Us
          </h1>
        </div>
        <div className="description mb-2">
          <p className="opacity-50 fw-semibold">
            Lorem ipsum dolor sit amet, deleniti <br></br> repellat voluptatem
            error exercitationem.
          </p>
        </div>
        <Form>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" className="mb-3" />
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" className="mb-3" />
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" className="mb-5" />
          <button
            className="btn btn-md w-100 p-2 fs-4 text-white fw-semibold"
            style={{ backgroundColor: "#094067" }}
          >
            Send
          </button>
        </Form>
        <div className="box-1"></div>
        <div className="box-2">
          <h1 className="mt-5 mb-4 display-5 fw-semibold">Info</h1>
          <table>
            <tr>
              <td>
                <img src={surat} />
              </td>
              <td>healtifyofficial@gmail.com</td>
            </tr>
            <tr>
              <td className="pt-5 pe-4">
                <img src={telpon} />
              </td>
              <td className="pt-5">+62 223-2883-5502</td>
            </tr>
            <tr>
              <td className="pt-5">
                <img src={gedung} />
              </td>
              <td className="pt-5">Healtify Medical Center</td>
            </tr>
            <tr>
              <td className="pt-5">
                <img src={jam} />
              </td>
              <td className="pt-5">08.00 - 21.00 WIB</td>
            </tr>
          </table>
        </div>
        <div className="box-3"></div>
      </div>
    </Container>
  );
};

export default Contact;
