// import { Button, Modal } from "react-bootstrap";
// import React, { useState } from "react";


// const Popup = (props) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div className="pupup mt-2">
//       <Button
//         onClick={handleShow}
//         className={props.classBtn}
//         style={props.stylesBtn}
//       >
//         {props.btnName}
//       </Button>
//       <Modal show={show} onHide={handleClose} style={props.stylesModal}>
//         <Modal.Header closeButton>
//           <Modal.Title className="fs-5">{props.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="text-center justify-content-evenly d-flex pb-4 pt-4">
//           <Button className="fw-semibold" style={{ backgroundColor: "#3DA9FC" }} onClick={props.onclickBtnKiri}>{props.btnKiri}</Button>
//           <Button className="fw-semibold" style={{ backgroundColor: "#3DA9FC" }} onClick={props.onclickBtnKanan}>{props.btnKanan}</Button>
//         </Modal.Body>
//       </Modal>

//     </div>
//   );
// };

// export default Popup;

import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const Popup = (props) => {
  const [show, setShow] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [clickedButton, setClickedButton] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick1 = () => {
    setClickedButton(props.btnKiri);
    setShowPopup1(true);
  }

  const handlePopupClose1 = () => setShowPopup1(false);
  const handlePopupShow1 = () => setShowPopup1(true);

  const handleButtonClick2 = () => {
    setClickedButton(props.btnKanan);
    setShowPopup2(true);
  }

  const handlePopupClose2 = () => setShowPopup2(false);
  const handlePopupShow2 = () => setShowPopup2(true);

  return (
    <div className="popup mt-2">
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
          <Button className="fw-semibold" style={{ backgroundColor: "#3DA9FC" }} onClick={handleButtonClick1}>
            {clickedButton === props.btnKiri ? "Cash" : props.btnKiri}
          </Button>
          <Button className="fw-semibold" style={{ backgroundColor: "#3DA9FC" }} onClick={handleButtonClick2}>
            {clickedButton === props.btnKanan ? "E-Wallet" : props.btnKanan}
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showPopup1} onHide={handlePopupClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Popup 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is popup 1!</p>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      <Modal show={showPopup2} onHide={handlePopupClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Popup 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is popup 2!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePopupClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Popup;
