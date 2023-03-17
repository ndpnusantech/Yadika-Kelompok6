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
import React, { useState, useEffect } from 'react';



function EditProductModal(props) {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const newProducts = [...products];
      const index = products.findIndex((p) => p.id === id);
      newProducts[index] = { id, image, name, category, stock };
      setProducts(newProducts);
      setId('');
    } else {
      setProducts([...products, { id: Date.now(), image, name, category, stock }]);
    }
    setImage('');
    setName('');
    setCategory('');
    setStock('');
  };

  const handleEdit = (product) => {
    setId(product.id);
    setImage(product.image);
    setName(product.name);
    setCategory(product.category);
    setStock(product.stock);
  };

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  
 
  
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton style={{ backgroundColor: '#094067', color: '#fff', padding: '10px'}}>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Gambar:</label>
          <input type="text" id="image" value={image} onChange={handleImageChange} />
        </div>
        <div>
          <label htmlFor="name">Nama Produk:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="category">Kategori:</label>
          <input type="text" id="category" value={category} onChange={handleCategoryChange} />
        </div>
        <div>
          <label htmlFor="stock">Stok:</label>
          <input type="text" id="stock" value={stock} onChange={handleStockChange} />
        </div>
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: '#094067', color: '#fff', padding: '10px'}}>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleSave}>
          Save Changess
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function AddProductModal(props) {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const newProducts = [...products];
      const index = products.findIndex((p) => p.id === id);
      newProducts[index] = { id, image, name, category, stock };
      setProducts(newProducts);
      setId('');
    } else {
      setProducts([...products, { id: Date.now(), image, name, category, stock }]);
    }
    setImage('');
    setName('');
    setCategory('');
    setStock('');
  };

  const handleEdit = (product) => {
    setId(product.id);
    setImage(product.image);
    setName(product.name);
    setCategory(product.category);
    setStock(product.stock);
  };

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  const handleAdd = (product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="title">Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Gambar:</label>
          <input type="text" id="image" value={image} onChange={handleImageChange} />
        </div>
        <div>
          <label htmlFor="name">Nama Produk:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="category">Kategori:</label>
          <input type="text" id="category" value={category} onChange={handleCategoryChange} />
        </div>
        <div>
          <label htmlFor="stock">Stok:</label>
          <input type="text" id="stock" value={stock} onChange={handleStockChange} />
        </div>
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function TabelStorage() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleStockChange = (e) => {
    setStock(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const newProducts = [...products];
      const index = products.findIndex((p) => p.id === id);
      newProducts[index] = { id, image, name, category, stock };
      setProducts(newProducts);
      setId('');
    } else {
      setProducts([...products, { id: Date.now(), image, name, category, stock }]);
    }
    setImage('');
    setName('');
    setCategory('');
    setStock('');
  };

  const handleEdit = (product) => {
    setId(product.id);
    setImage(product.image);
    setName(product.name);
    setCategory(product.category);
    setStock(product.stock);
  };

  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
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
            <th>Gambar</th>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th> <div className="addProduct"><Button variant="primary" onClick={handleAddProductModalOpen}>
        Add Product
      </Button></div></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>
              <Button variant="primary" onClick={handleEditProductModalOpen}>
         EDIT
      </Button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
    </Table>
               
            </div>
            </div>

            
      


      <EditProductModal show={showEditProductModal} handleClose={handleEditProductModalClose} />
      <AddProductModal show={showAddProductModal} handleClose={handleAddProductModalClose} />
    </div>
  );
}

export default TabelStorage;

