import { Modal, Accordion } from "react-bootstrap";
import "./order.css";

const OrderModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.hide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ marginTop: "-90px" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Vicks Formula 44 100ml</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div>
                    <img
                      src="assets/obat/Vicks Formula.png"
                      alt=""
                      width="140px"
                    />
                  </div>
                  <div>
                    <h4>Vicks Formula 44 100ml</h4>
                    <table>
                      <tr>
                        <td>Id Product</td>
                        <td className="px-2">:</td>
                        <td>btk-267290</td>
                      </tr>
                      <tr>
                        <td>Id Pesanan</td>
                        <td className="px-2">:</td>
                        <td>682763715628</td>
                      </tr>
                    </table>
                    <div className="mt-4">
                      <button className="btn btn-md btn-primary me-3 px-3">
                        Accept
                      </button>
                      <button className="btn btn-md btn-danger px-3">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
                <h5>3x</h5>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Bintang Toedjo Masuk Angin 15ml</Accordion.Header>
            <Accordion.Body>
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div>
                    <img
                      src="assets/obat/Bintang Toedjoe.png"
                      alt=""
                      width="140px"
                    />
                  </div>
                  <div>
                    <h4>Bintang Toedjo Masuk Angin 15ml</h4>
                    <table>
                      <tr>
                        <td>Id Product</td>
                        <td className="px-2">:</td>
                        <td>msk-288921</td>
                      </tr>
                      <tr>
                        <td>Id Pesanan</td>
                        <td className="px-2">:</td>
                        <td>776352688181</td>
                      </tr>
                    </table>
                    <div className="mt-4">
                      <button className="btn btn-md btn-primary me-3 px-3">
                        Accept
                      </button>
                      <button className="btn btn-md btn-danger px-3">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
                <h5>5x</h5>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
