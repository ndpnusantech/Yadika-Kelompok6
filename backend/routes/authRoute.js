import express from 'express'
import { login, logout, me } from '../controllers/auth.js'

const router = express.Router()

router.get('/islogin?', me)
router.post('/login', login)
router.delete('/logout', logout)

export default router