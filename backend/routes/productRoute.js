import express from 'express'
import { getProduct, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/products.js'


const router = express.Router()

router.get('/products', getProduct)
router.get('/products/:id', getProductById)
router.get('/products', createProduct)
router.get('/products/:id', updateProduct)
router.get('/products/:id', deleteProduct)

export default router