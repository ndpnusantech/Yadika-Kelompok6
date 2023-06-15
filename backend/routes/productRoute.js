import express from 'express'
import { getProduct, getProductById, createProduct, updateProduct, deleteProduct, createCateObat, createCatePenyakit } from '../controllers/products.js'


const router = express.Router()

router.get('/products', getProduct)
router.get('/products/:id', getProductById)
router.post('/products', createProduct)
router.patch('/products/:id', updateProduct)
router.delete('/products/:id', deleteProduct)
router.post('/categoryObat', createCateObat)
router.post('/categoryPenyakit', createCatePenyakit)

export default router