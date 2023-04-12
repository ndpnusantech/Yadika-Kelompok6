import "./style.css";
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const KatPenya = () => {
  const [show, setShow] = useState(false);
  const [showedit, setShowedit] = useState(false);

  const handleClosedit = () => setShowedit(false);
  const handleShowdit = () => setShowedit(true);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mainkatpen">
        <h2>Kategori Penyakit</h2>
        <a className="addcateg mt-2 mb-2" onClick={handleShow}>Add Category</a>
        <div className="tablekatpen">
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
                <td colSpan={2}>Masuk Angin</td>
                <td>
                  <button className="btn btn-md btn-success me-3">Edit</button>
                  <button className="btn btn-md btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td colSpan={2}>Sakit Gigi</td>
                <td>
                  <button className="btn btn-md btn-success me-3">Edit</button>
                  <button className="btn btn-md btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Batuk & Pilek</td>
                <td>
                  <button className="btn btn-md btn-success me-3">Edit</button>
                  <button className="btn btn-md btn-danger">Delete</button>
                </td>
              </tr>

              {/* <a className=" editcattab"onClick={handleShowdit} >Edit</a> */}

            </tbody>
          </Table>
          <div className="modal">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Category</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nama Kategori</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      autoFocus
                    />
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

            <Modal show={showedit} onHide={handleClosedit}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClosedit}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClosedit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}

export default KatPenya;