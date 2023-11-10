import express from 'express'
import authController from '../controllers/authController.js'

// /auth
const router = express.Router()

router.delete('/logout', authController.logout)

router.post('/login', authController.login)
router.post('/signup', authController.signup)
router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  })
})

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'sucessful',
      user: req.user,
      cookies: req.cookies,
    })
  }
})

// GOOGLE
router.get('/google', authController.googleLogin)
// router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
// router.post('/google', verifyGoogle, authController.googleLogin)

router.get('/google/callback', authController.googleCallback)
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:5173/' }), function (req, res) {
//   res.redirect('http://localhost:5173/')
// })

export default router
