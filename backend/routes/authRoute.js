import express from 'express'
import { login } from '../controllers/auth.js'

const router = express.Router()

// router.get('/islogin', isLogin)
router.post('/login', login)
// router.delete('/logout', logout)
 
export default router