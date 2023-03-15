import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "./popup.css";
import PopupTautkan from "./popupTautkan";
import ContentPopup from "./contentPopop";

const Popup = (props) => {
  const [show, setShow] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick2 = () => {
    setShowPopup2(true);
    setShow(false);
  };

  const handlePopupClose2 = () => setShowPopup2(false);

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
    setShowPopup2(false);
  };

  const handleClosePopup = () => {
    setShowPopup2(false);
    setShowPopup(false);
  };

  return (
    <div className="popup mt-2">
      <Button
        onClick={handleShow}
        className="mt-2"
        style={{ backgroundColor: "#094067", fontSize: "14px" }}
      >
        Pilih Metode Pembayaran
      </Button>
      <Modal show={show} onHide={handleClose} style={{ marginTop: "100px" }}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            Silakan pilih metode pembayaran
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center justify-content-evenly d-flex pb-4 pt-4">
          <Button
            className="fw-semibold"
            style={{ backgroundColor: "#3DA9FC" }}
            onClick={props.onclickCash}
          >
            Cash
          </Button>
          <Button
            className="fw-semibold"
            style={{ backgroundColor: "#3DA9FC" }}
            onClick={handleButtonClick2}
          >
            E-wallet
          </Button>
        </Modal.Body>
      </Modal>

      <Modal
        show={showPopup2}
        onHide={handlePopupClose2}
        style={{ marginTop: "100px" }}
        className="large-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Silakan pilih e-wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="e-wallet d-flex align-items-center justify-content-evenly">
            <img
              src="/assets/icon e-wallet/dana.svg"
              alt=""
              width="100px"
              onClick={handleOpenPopup}
            />
            <img
              src="/assets/icon e-wallet/ovo.svg"
              alt=""
              width="90px"
              onClick={handleOpenPopup}
            />
            <img
              src="/assets/icon e-wallet/gopay.svg"
              alt=""
              width="100px"
              onClick={handleOpenPopup}
            />
            <img
              src="/assets/icon e-wallet/shopeePay.svg"
              alt=""
              width="100px"
              onClick={handleOpenPopup}
            />
          </div>
        </Modal.Body>
      </Modal>

      <PopupTautkan
        show={showPopup}
        onClose={handleClosePopup}
        title="Silakan tautkan akun anda"
        content={<ContentPopup/>}
      />
    </div>
  );
};

export default Popup;
