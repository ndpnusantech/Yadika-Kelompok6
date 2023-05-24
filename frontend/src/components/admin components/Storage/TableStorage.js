import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import AddProductModal from "./addProduct";
import "./style.css";
import EditProduct from "./editProduct";

function TabelStorage() {
  const [products, setProducts] = useState([]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleAddProductModalOpen = () => setShowAddProductModal(true);
  const handleAddProductModalClose = () => setShowAddProductModal(false);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (index) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmation) {
      const filteredProducts = products.filter((p, i) => i !== index);
      localStorage.setItem("products", JSON.stringify(filteredProducts));
      setProducts(filteredProducts);
      // alert("Product deleted successfully.");
    }
  };

  const handleEdit = () => {
    alert("Belum jadi");
  };

  return (
    <div className="mainBoxStorage">
      <h2 className="mt-3 mb-2">Storage</h2>
      <div className="bg">
        <div className="addProduct me-3 mb-3 d-flex justify-content-end">
          <Button variant="primary" onClick={handleAddProductModalOpen}>
            Add Product
          </Button>
        </div>
        <div className="Table-storage">
          {Array.isArray(products) && products.length > 0 ? (
            <Table
              striped
              bordered
              hover
              variant="dark"
              className="text-center"
            >
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Jenis Obat</th>
                  <th>Category Penyakit</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <img src={product.image} alt="product" />
                    </td>
                    <td>{product.productName}</td>
                    <td>{product.jenis}</td>
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Button
                        variant="warning"
                        className="me-2"
                        onClick={handleShowEditModal}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
      <AddProductModal
        show={showAddProductModal}
        onHide={handleAddProductModalClose}
      />

      <EditProduct show={showEditModal} handleClose={handleCloseEditModal} />
    </div>
  );
}

export default TabelStorage;
