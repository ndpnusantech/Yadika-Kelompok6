import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const Popup = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="pupup mt-2">
      <Button
        onClick={handleShow}
        className={props.classBtn}
        style={props.stylesBtn}
      >
        {props.btnName}
      </Button>
      <Modal show={show} onHide={handleClose} style={props.stylesModal}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center justify-content-evenly d-flex pb-4 pt-4">
          <Button className="fw-semibold" style={{ backgroundColor: "#3DA9FC" }} onClick={props.onclickBtnKiri}>{props.btnKiri}</Button>
          <Button className="fw-semibold" style={{ backgroundColor: "#3DA9FC" }} onClick={props.onclickBtnKanan}>{props.btnKanan}</Button>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default Popup;
