const express = require('express')

const router = express.Router()

const { getAllkeranjang, getKeranjangById, createKeranjang } = require('../controllers/keranjangController.js')

router.get('/keranjang', getAllkeranjang)
router.get('/keranjang/:id', getKeranjangById)
router.post('/keranjang', createKeranjang)

module.exports = router