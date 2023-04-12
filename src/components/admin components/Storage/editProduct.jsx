import { useState, useEffect } from "react";
import { Form, Modal } from "react-bootstrap";

const EditProduct = (props) => {
  const productId = props.productId;
  const products = JSON.parse(localStorage.getItem("products"));
  const productData = products && products.find((product) => product.id === productId);
  const [product, setProduct] = useState(productData || {});

  useEffect(() => {
    // load product data from localStorage when the modal is first shown
    const products = JSON.parse(localStorage.getItem("products"));
    const productToUpdate = products && products.find((p) => p.id === props.productId);
    setProduct(productToUpdate || {});
  }, [props.productId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const products = JSON.parse(localStorage.getItem("products"));
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return { ...p, ...product };
      }
      return p;
    });
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    window.location.reload();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
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
            value={product ? product.productName || "" : ""}
            onChange={handleInputChange}
          />
          <Form.Label>Jenis Obat</Form.Label>
          <Form.Select
            className="mb-2"
            name="jenis"
            required
            value={product ? product.jenis || "" : ""}
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
            name="category"
            value={product ? product.category || "" : ""}
            className="mb-3"
            required
            onChange={handleInputChange}
          />
          <Form.Label className="me-2">Stock :</Form.Label>
          <input
            type="number"
            name="stock"
            value={product ? product.stock || "" : ""}
            required
            onChange={handleInputChange}
          />
          <br /> <br />
          <button className="btn btn-primary">Save Changes</button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProduct;
