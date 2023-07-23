const express = require('express')
const router = express.Router()

const { getAllGolongan, getGolonganById, createGolongan, deleteGolongan, updateGolongan } = require('../controllers/golonganController.js')

router.get('/golongan', getAllGolongan)
router.get('/golongan/:id', getGolonganById)
router.post('/golongan', createGolongan)
router.delete('/golongan/:id', deleteGolongan)
router.patch('/golongan/:id', updateGolongan)

module.exports = router