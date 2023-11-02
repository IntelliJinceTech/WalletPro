import express from 'express'
import authController from '../controllers/authController.js'

const router = express.Router()

router.get('/getUsers', authController.getUsers)
router.get('/getUser', authController.getUser)
router.delete('/logout', authController.logout)

router.post('/login', authController.login)
router.post('/signup', authController.signup)

// router.get('/', (req, res) => {
//   res.send(`hello, ${req.query.person}`)
// })

export default router
