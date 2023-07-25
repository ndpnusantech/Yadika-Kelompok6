const express = require('express')
const { getAllUsers, getUserById, RegisterUser, updateUser, deleteUser } = require('../controllers/usersController.js')

const router = express.Router()

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/users', RegisterUser)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router