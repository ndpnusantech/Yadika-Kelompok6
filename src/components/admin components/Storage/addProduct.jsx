import { Modal, Button, Form } from "react-bootstrap";

const AddProductModal = (props) => {
  const saveDataToLocalStorage = (data) => {
    localStorage.setItem("products", JSON.stringify(data));
  };

  const handleSave = () => {
    const image = document.querySelector('input[type="file"]').files[0];
    const name = document.querySelector('input[type="text"]').value;
    const category = document.querySelector('select').value;
    const stock = document.querySelector('input[name="stock"]').value;
  
    const reader = new FileReader();
    reader.onload = () => {
      const data = { image: reader.result, name, category, stock };
      saveDataToLocalStorage(data);
      props.handleClose();
    };
    reader.readAsDataURL(image);
  };
  
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="title">Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" className="mb-2" />
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" className="mb-2" />
          <Form.Label>Category</Form.Label>
          <Form.Select className="mb-2">
            <option value="Cair">Cair</option>
            <option value="Tablet">Tablet</option>
            <option value="Oles">Oles</option>
          </Form.Select>
          <Form.Label className="me-2">Stock :</Form.Label>
          <input type="number" name="stock" />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
