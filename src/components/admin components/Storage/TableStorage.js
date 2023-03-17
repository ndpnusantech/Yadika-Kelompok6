import { Button, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import AddProductModal from "./addProduct";
import "./style.css";

function TabelStorage() {
  const [products, setProducts] = useState([]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const handleAddProductModalOpen = () => setShowAddProductModal(true);
  const handleAddProductModalClose = () => setShowAddProductModal(false);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (index) => {
    const filteredProducts = products.filter((p, i) => i !== index);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    setProducts(filteredProducts);
    // alert("Product deleted successfully.");
  };

  const handleEdit = () => {
    alert("Belum jadi");
  };

  return (
    <div className="mainBoxStorage">
      <h1>Storage</h1>
      <div className="bg">
        <div className="Table-storage">
          {Array.isArray(products) && products.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
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
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Button
                        variant="warning"
                        className="me-2"
                        onClick={() => handleEdit(index)}
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
        <div className="addProduct">
          <Button variant="primary" onClick={handleAddProductModalOpen}>
            Add Product
          </Button>
        </div>
      </div>
      <AddProductModal
        show={showAddProductModal}
        handleClose={handleAddProductModalClose}
        handleAddProduct={(newProduct) => {
          const updatedProducts = [...products, newProduct];
          localStorage.setItem("products", JSON.stringify(updatedProducts));
          setProducts(updatedProducts);
          alert("Product added successfully.");
        }}
      />
    </div>
  );
}

export default TabelStorage;
