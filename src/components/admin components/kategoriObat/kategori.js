import "./kategori.css";
import Table from "react-bootstrap/Table";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import EditModal from "./editModal";

const KatObat = () => {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowEdit = () => setShowEdit(true);
  const handleClosedit = () => setShowEdit(false);

  return (
    <>
      <div className="mainkatbat">
        <h2>Kategori Jenis Obat</h2>
        <a className="addcateg mt-1 mb-2" onClick={handleShow}>
          Add Category
        </a>
        <div className="tablekatbat">
          <Table striped bordered hover variant="dark" className="text-center">
            <thead>
              <tr>
                <th>#</th>
                <th colSpan={2}>Kategori</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td colSpan={2}>Cair</td>
                <td>
                  <button
                    className="btn btn-md btn-success me-3"
                    onClick={handleShowEdit}
                  >
                    Edit
                  </button>
                  <button className="btn btn-md btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td colSpan={2}>Tablet</td>
                <td>
                  <button
                    className="btn btn-md btn-success me-3"
                    onClick={handleShowEdit}
                  >
                    Edit
                  </button>
                  <button className="btn btn-md btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Kapsul</td>
                <td>
                  <button
                    className="btn btn-md btn-success me-3"
                    onClick={handleShowEdit}
                  >
                    Edit
                  </button>
                  <button className="btn btn-md btn-danger">Delete</button>
                </td>
              </tr>

              {/* <a className=" editcattab"onClick={handleShowdit} >Edit</a> */}
            </tbody>
          </Table>
          <div className="modal">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Category Obat</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nama Kategori</Form.Label>
                    <Form.Control type="text" placeholder="" autoFocus />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <EditModal showedit={showEdit} Closedit={handleClosedit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default KatObat;
