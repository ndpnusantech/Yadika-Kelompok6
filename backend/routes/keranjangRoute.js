const express = require('express')

const router = express.Router()

const { getAllkeranjang } = require('../controllers/keranjangController.js')

router.get('/keranjang', getAllkeranjang)

module.exports = router