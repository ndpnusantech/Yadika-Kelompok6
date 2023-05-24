import { Button, Modal } from "react-bootstrap";

const PopupIdPesanan = (props) => {
  return (
    <Modal
      show={props.show}
      size="lg"
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ID Pesanan Anda
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex w-100">
          <img src="assets/obat/Vicks Formula.png" alt="" width="120px" />
          <div>
            <table>
              <td className="pe-3">
                <h5>Vicks Formula 44 100ml</h5>
              </td>
              <td>
                <h5>4x</h5>
              </td>
            </table>
            <span>Id Product : BTK-21673267</span> <br />
            <span>Id Pesanan : 782621673267</span>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>{props.footer}</Modal.Footer>
    </Modal>
  );
};

export default PopupIdPesanan;
