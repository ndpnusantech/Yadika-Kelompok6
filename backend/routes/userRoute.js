import express from 'express'
import { getUser, getUserById, register, updateUser, deleteUser } from '../controllers/users.js'


const router = express.Router()

router.get('/users', getUser)
router.get('/users/:id', getUserById)
router.post('/users', register)
router.patch('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router