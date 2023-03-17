import "./style.css"



// bagaimana cara agar membuat popup ketika saya memencet button dari kolom action untuk sistem crud untuk mengedit data barang 

import { Button, Modal, Form, Table } from 'react-bootstrap';
import React, { useState } from 'react';
import AddProductModal from "./addProduct";

function EditProductModal(props) {


  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton style={{ backgroundColor: '#094067', color: '#fff', padding: '10px' }}>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {<form>
          <label>
            Image :
          </label><br />
          <input type="file" id="imageStorage" /><br /><br />
          <label>
            Product :
          </label>
          <input type="text" id="productStorage" /><br /><br />
          <label>
            Category :
          </label>
          <input type="text" id="categoryStorage" /><br /><br />
          <label>
            Stock :
          </label>
          <input type="number" id="stockStorage" /><br /><br />
        </form>}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: '#094067', color: '#fff', padding: '10px' }}>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function TabelStorage() {
  const [products, setProducts] = useState(() => {
    const localData = localStorage.getItem("products");
    return localData ? JSON.parse(localData) : [];
  });

 

  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const handleEditProductModalOpen = () => setShowEditProductModal(true);
  const handleEditProductModalClose = () => setShowEditProductModal(false);

  const handleAddProductModalOpen = () => setShowAddProductModal(true);
  const handleAddProductModalClose = () => setShowAddProductModal(false);



  return (
    <div className='mainBoxStorage'>
      <h1>Storage</h1>
      <div className="bg">
        <div className="Table-storage">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>image</th>
                <th>product</th>
                <th>category</th>
                <th>stock</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((barang) => (
                <tr key={barang.id}>
                  <td>{barang.id}</td>
                  <td>{barang.nama}</td>
                  <td>{barang.harga}</td>
                  <td>{barang.jumlah}</td>
                  <td>{barang.deskripsi}</td>
                  <td>
                    <button>Hapus</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="addProduct"><Button variant="primary" onClick={handleAddProductModalOpen}>
            Add Product
          </Button></div>
        </div>
      </div>





      <EditProductModal show={showEditProductModal} handleClose={handleEditProductModalClose} />
      <AddProductModal show={showAddProductModal} handleClose={handleAddProductModalClose} />
    </div>
  );
}

export default TabelStorage;

