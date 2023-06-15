import express from 'express'
import { login, logout } from '../controllers/auth.js'
// import { verifyToken } from '../middleware/verifyToken.js'

const router = express.Router()

// router.get('/islogin', isLogin)
router.post('/login', login)
router.delete('/logout', logout)

export default router