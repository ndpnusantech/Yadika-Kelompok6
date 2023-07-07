const express = require('express')
const { getProducts, getProductById, createProduct, deleteProduct, editProduct } = require('../controllers/productsController.js')

const router = express.Router()

router.get('/products', getProducts)
router.get('/products/:id', getProductById)
router.post('/products', createProduct)
router.patch('/products/:id', editProduct)
router.delete('/products/:id', deleteProduct)



module.exports = router