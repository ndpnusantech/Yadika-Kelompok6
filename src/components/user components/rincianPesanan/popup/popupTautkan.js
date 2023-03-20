import "./popup.css";
import { Form } from "react-bootstrap";

const PopupTautkan = (props) => {
  const { show, onClose, title } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <div className={`center-popup ${show ? "show" : ""}`}>
        <div className="popup-content">
          <div className="popup-header">
            <h4>{title}</h4>
            <button className="close-button" onClick={handleClose}>
              X
            </button>
          </div>
          <div className="popup-body">
            <div className="ContentPopup">
              <div className="d-flex">
                <img
                  src="assets/icon e-wallet/qr-code.png"
                  alt=""
                  width="140px"
                />
                <div>
                  <h6 className="mt-3">
                    Silakan scan QR Code di samping untuk membayar
                  </h6>
                  <p>
                    5 Items <br /> Total : 95,000
                  </p>
                </div>
              </div>
              <div className="inputFile mt-3 ms-4">
                <h6>Silakan masukan bukti pembayaran</h6>
                <input type="file" name="file" />
              </div>
              <div className="d-flex justify-content-end mt-3 me-4">
                <button className="btn btn-md btn-primary">Konfirmasi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupTautkan;
