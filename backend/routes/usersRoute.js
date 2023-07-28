const express = require('express')
const { getAllUsers, getUserById, RegisterUser, LoginUser, logout, updateUser, deleteUser } = require('../controllers/usersController.js')
const { verifyToken } = require('../middleware/verifyToken.js')

const router = express.Router()

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/users', RegisterUser)
router.post('/user/login', LoginUser)
router.delete('/user/logout', logout)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router