import "./cardUser.css";
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import ContentModalBody from "./modal";
import Success from "../../success animation/success";

const CardUser = () => {
  const photo = "assets/Profile User/profile.png";
  const backIcon = "assets/Icon Sosial Media/arrow-right-circle 1.png";

  const [success, setSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    const newUsername = e.target.username.value;
    const newEmail = e.target.email.value;
    const newNoHp = e.target.noHp.value;
    const addAge = e.target.age.value;
    const addBB = e.target.beratBadan.value;
    const addTB = e.target.tinggiBadan.value;

    let user = JSON.parse(localStorage.getItem("user")) || {};

    user.username = newUsername;
    user.email = newEmail;
    user.noHandphone = newNoHp;
    user.age = addAge;
    user.beratBadan = addBB;
    user.tinggiBadan = addTB;

    localStorage.setItem("user", JSON.stringify(user));

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  const dataStorage = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return success ? (
    <Success success="Saved" />
  ) : (
    <div className="card mx-auto mt-2">
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
            <ContentModalBody onSubmit={handleSave} />
            <div className="btnClose pe-3 ps-3">
              <Button onClick={handleClose} className="w-100">
                Close
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <div className="dataUser pt-3 pb-3">
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
      <hr />
      <a href="/" className="mb-2 w-100 text-center">
        <button className="btn btn-sm btn-danger w-50">Logout</button>
      </a>
    </div>
  );
};

export default CardUser;
