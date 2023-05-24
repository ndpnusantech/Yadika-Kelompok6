import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
const EditModal = (props) => {
  const [category, setCategory] = useState("cair");

  function handleChange(event) {
    setCategory(event.target.value);
  }

  return (
    <Modal show={props.showedit} onHide={props.Closedit}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Kategori</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              type="text"
              value={category}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.Closedit}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default EditModal;
