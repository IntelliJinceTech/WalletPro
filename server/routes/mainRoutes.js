import express from 'express'
import authController from '../controllers/authController.js'
import { ensureAuth } from '../middlewares/auth.js'

const router = express.Router()

router.get('/getUser', authController.getUser)
router.get('/logout', authController.logout)

router.post('/login', authController.login)
router.post('/signup', authController.signup)

router.get('/', (req, res) => {
  res.send(`hello, ${req.query.person}`)
})

export default router
