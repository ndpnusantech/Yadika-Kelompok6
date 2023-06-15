import express from 'express'
import { getUser, getUserById, register, updateUser, deleteUser } from '../controllers/users.js'
import { verifyToken } from '../middleware/verifyToken.js'
import { refreshToken } from '../controllers/refreshToken.js'


const router = express.Router()

router.get('/users', verifyToken, getUser)
router.get('/users/:id', getUserById)
router.post('/users', register)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.get('/token', refreshToken)

export default router