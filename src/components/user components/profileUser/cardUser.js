import "./cardUser.css";
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import ContentModalBody from "./modal";

const CardUser = () => {
  const photo = "assets/Profile User/profile.png";
  const backIcon = "assets/Icon Sosial Media/arrow-right-circle 1.png";

  const dataStorage = JSON.parse(localStorage.getItem("user"));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="back-logout d-flex justify-content-between align-items-center mb-3">
        <div className="back ms-3">
          <a href="/home">
            <img src={backIcon} alt="" width="55px" />
          </a>
        </div>
        <div className="logout me-3">
          <a href="/">
            <h3>Logout</h3>
          </a>
        </div>
      </div>
      <div className="card mx-auto">
        <div className="profile text-center bg-primary p-4 text-white">
          <div className="photo rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto">
            <img src={photo} alt="" width="120px" />
          </div>
          <div className="name mt-2">
            <h5 className="fw-semibold">
              {dataStorage.username ? dataStorage.username : "Guest"}
            </h5>
          </div>
          <div className="opacity-50 fw-semibold">
            {dataStorage.noHandphone ? `+${dataStorage.noHandphone}` : "-"}
          </div>
          <div className="opacity-50 fw-semibold">
            {dataStorage.email ? dataStorage.email : "-"}
          </div>

          <Button
            v
            className="btn-md btn-light mt-2 w-50 fw-semibold"
            onClick={handleShow}
          >
            Setting
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              <ContentModalBody />
              <div className="btnClose pe-3 ps-3">
                <Button onClick={handleClose} className="w-100">
                  Close
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <div className="dataUser pt-4 pb-4">
          <table className="mx-auto">
            <tr>
              <td style={{ paddingRight: "150px" }}>Usia</td>
              <td>{dataStorage.age ? dataStorage.age : "-"}</td>
            </tr>
            <br />
            <tr>
              <td style={{ paddingRight: "150px" }}>Berat Badan</td>
              <td>{dataStorage.beratBadan ? dataStorage.beratBadan : "-"}</td>
              <br />
            </tr>
            <br />
            <tr>
              <td style={{ paddingRight: "150px" }}>tinggi Badan</td>
              <td>{dataStorage.tinggiBadan ? dataStorage.tinggiBadan : "-"}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default CardUser;
