const express = require('express')
const { getCatePenyakit, createCatePenyakit, createJenisObat, getJenisObat } = require('../controllers/categoryController.js')

const router = express.Router()

router.get('/categoryPenyakit', getCatePenyakit)
router.get('/categoryJenisObat', getJenisObat)
router.post('/categoryPenyakit', createCatePenyakit)
router.post('/categoryJenisObat', createJenisObat)

module.exports = router