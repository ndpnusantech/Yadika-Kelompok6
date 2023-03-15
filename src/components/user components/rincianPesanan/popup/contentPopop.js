import { Form } from "react-bootstrap";

const ContentPopup = () => {
  return (
    <div className="ContentPopup">
      <Form>
        <Form.Label>Masukan akun Anda</Form.Label>
        <Form.Control placeholder="08726715632" />

        <button className="mt-3 btn btn-md btn-primary">Konfirmasi</button>
      </Form>
    </div>
  );
};

export default ContentPopup;
