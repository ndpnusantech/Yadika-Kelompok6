import "./style.css"

// const TabelStorage = () => {
//     return(
//         <div className="mainBoxStorage">
//             <h1>Storage</h1>

//             <div className="Table-storage">
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>image</th>
//                             <th>product</th>
//                             <th>category</th>
//                             <th>stock</th>
//                             <th>action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                         <td>image</td>
//                             <td>product</td>
//                             <td>category</td>
//                             <td>stock</td>
//                             <td><button>Edit</button></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>

//             <div><button>add product</button></div>

//         </div>
//     )
// }

// export default TabelStorage




// bagaimana cara agar membuat popup ketika saya memencet button dari kolom action untuk sistem crud untuk mengedit data barang 

import { Button, Modal, Form, Table } from 'react-bootstrap';
import React, { useState } from 'react';

function EditProductModal(props) {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      name: 'Product 1',
      category: 'Category 1',
      stock: 10,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      name: 'Product 2',
      category: 'Category 2',
      stock: 5,
    },
  ]);
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton style={{ backgroundColor: '#094067', color: '#fff', padding: '10px'}}>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {<form>
          <label>
            Image :
          </label><br />
          <input type="file" id="imageStorage"/><br /><br />
          <label>
            Product :
          </label>
          <input type="text" id="productStorage"/><br /><br />
          <label>
            Category :
          </label>
          <input type="text" id="categoryStorage"/><br /><br />
          <label>
            Stock :
          </label>
          <input type="number" id="stockStorage"/><br /><br />
          </form>}
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: '#094067', color: '#fff', padding: '10px'}}>
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

function AddProductModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="title">Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* form untuk menambah product */}
      </Modal.Body>
      <Modal.Footer>
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

  const handleAddProduct = (product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
    setShowAddProductModal(false);
  };

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
        <tr>
          <td>1</td>
          <td><img src="" alt="" /></td>
          <td></td>
          <td></td>
          <td></td>
          <td><Button variant="primary" onClick={handleEditProductModalOpen}>
        edit 
      </Button></td>
        </tr>
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

