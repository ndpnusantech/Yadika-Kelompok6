import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const AddProductModal = (props) => {
  const [product, setProduct] = useState({
    image: "",
    productName: "",
    jenis: "",
    category: "",
    stock: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const file = e.target.file.files[0];
    const newProduct = {
      ...product,
      image: URL.createObjectURL(file),
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    // menghapus URL objek agar browser tidak memakan memory yang tidak perlu
    URL.revokeObjectURL(newProduct.image);

    props.handleClose();
    alert("Product added successfully.");
    window.location.reload();
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="title">Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" className="mb-2" name="file" required />
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            className="mb-2"
            name="productName"
            required
            value={product.productName}
            onChange={handleInputChange}
          />
          <Form.Label>Jenis Obat</Form.Label>
          <Form.Select
            className="mb-2"
            name="jenis"
            required
            value={product.jenis}
            onChange={handleInputChange}
          >
            <option value="" disabled></option>
            <option value="Cair">Cair</option>
            <option value="Tablet">Tablet</option>
            <option value="Oles">Oles</option>
          </Form.Select>
          <Form.Label>Category Penyakit</Form.Label>
          <Form.Control
            type="text"
            // placeholder="Category Obat"
            name="category"
            value={product.category}
            className="mb-3"
            required
            onChange={handleInputChange}
          />
          <Form.Label className="me-2">Stock :</Form.Label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            required
            onChange={handleInputChange}
          />{" "}
          <br /> <br />
          <button className="btn btn-primary">Save Changes</button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProductModal;
