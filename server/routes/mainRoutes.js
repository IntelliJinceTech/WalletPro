import express from 'express'
import authController from '../controllers/authController.js'
import { verifyGoogle } from '../middlewares/googleVerify.js'

const router = express.Router()

// router.get('/getUsers', authController.getUsers)
router.get('/getUser', authController.getUser)

// router.get('/', (req, res) => {
//   res.send(`hello, ${req.query.person}`)
// })

export default router
