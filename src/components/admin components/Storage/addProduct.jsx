import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "./style.css";

const AddProductModal = (props) => {
  return (
    <div className="addProduct">
      <Modal
        show={props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="text-light"
          style={{ backgroundColor: "#094067" }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ width: "90%" }}>
          <Form>
            <Row>
              <Col>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" required className="mb-2" />
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Rp."
                  className="mb-2"
                />
                <Form.Label className="me-2">Image</Form.Label>
                <input type="file" name="image" className="mb-2" />
                <Form.Label>Category : </Form.Label>
                <select
                  name="category"
                  style={{ width: "140px" }}
                  className="mb-2 ms-2"
                >
                  <option value="" disabled></option>
                  <option value="Asma">Asma</option>
                  <option value="Sakit Perut">Sakt Perut</option>
                  <option value="Sakit Kepala">Sakit Kepala</option>
                </select>{" "}
                <br />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  style={{ border: "1px solid black", borderRadius: "5px" }}
                  className="mb-2"
                />
              </Col>
              <Col>
                <Form.Label>Indikasi Umum</Form.Label>
                <Form.Control type="text" required className="mb-2" />
                <Form.Label>Komposisi</Form.Label>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  style={{ border: "1px solid black", borderRadius: "5px" }}
                  className="mb-2"
                />
                <Form.Label>Aturan Pakai</Form.Label>
                <Form.Control type="text" required className="mb-2" />
                <Form.Label>Kontra Indikasi</Form.Label>
                <Form.Control type="text" required className="mb-2" />
                <Form.Label>Efek Samping</Form.Label>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  style={{ border: "1px solid black", borderRadius: "5px" }}
                  className="mb-2"
                />
                <Form.Label className="me-2">Golongan Product :</Form.Label>
                <select
                  name="Golongan"
                  style={{ width: "140px" }}
                  className="mb-2 ms-2"
                >
                  <option value="" disabled></option>
                  <option value="Asma">Obat Bebas</option>
                  <option value="Sakit Perut">Obat Keras</option>
                  <option value="Sakit Kepala">Resep Dokter</option>
                </select>
                <Form.Label className="me-2">Expired Product :</Form.Label>
                <input type="date" name="expiredProduct" />
              </Col>
              {/* <Col>
              </Col> */}
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="text-light"
          style={{ backgroundColor: "#094067" }}
        >
          <Button onClick={props.onHide} className="btn-danger">
            Cancel
          </Button>
          <Button onClick={props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProductModal;
