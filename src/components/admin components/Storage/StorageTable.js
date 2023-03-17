import React, { useState, useEffect } from 'react';
import { ModalBody } from 'react-bootstrap';
import { Modal, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import "./style.css"


const Product = () => {

    
  
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

 




  const handleDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  const [showModal, setShowModal] = useState(false);
const [isEditMode, setIsEditMode] = useState(false);

const openModal = () => setShowModal(true);
const closeModal = () => {
  setShowModal(false);
  setIsEditMode(false);
};

const handleEdit = (product) => {
    setId(product.id);
    setImage(product.image);
    setName(product.name);
    setCategory(product.category);
    setStock(product.stock);
    setIsEditMode(true);
    openModal();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      const newProducts = [...products];
      const index = products.findIndex((p) => p.id === id);
      newProducts[index] = { id, image, name, category, stock };
      setProducts(newProducts);
      setIsEditMode(false);
    } else {
      setProducts([...products, { id: Date.now(), image, name, category, stock }]);
    }
    closeModal();
    setImage('');
    setName('');
    setCategory('');
    setStock('');
  };

  return (
    <div className='mainBoxStorage'>
        <div className='bgT'>
          <h1>Storage</h1>
          </div>


       <Modal show={showModal} onHide={closeModal}>
  <Modal.Header closeButton>
    <Modal.Title>{isEditMode ? 'Edit Product' : 'Add Product'}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form onSubmit={handleSubmit}>
        <table className='formModal'>
            <tr>
                <td><label htmlFor="image">Gambar:</label></td>
                <td><input type="text" placeholder='URL/link' id="image" value={image} onChange={handleImageChange} /></td>
            </tr>
            <tr>
                <td><label htmlFor="name">Nama Produk:</label></td>
                <td><input type="text" id="name" value={name} onChange={handleNameChange} /></td>
            </tr>
            <tr>
                <td><label htmlFor="category">Kategori:</label></td>
                <td><input type="text" id="category" value={category} onChange={handleCategoryChange} /></td>
            </tr>
            <tr>
                <td><label htmlFor="stock">Stok:</label></td>
                <td><input type="number" id="stock" value={stock} onChange={handleStockChange} /></td>
            </tr>
        </table>
    
      <Button variant="primary" type="submit">
        {isEditMode ? 'Update' : 'Add'}
      </Button>
    </form>
  </Modal.Body>
</Modal>
      <table striped bordered hover className='jangSt'>
        <thead>
          <tr>
            <th>Gambar</th>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th></th>
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
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='futah'><button onClick={openModal}>+Add Product</button>
</div>
    </div>
  );
};

export default Product;

