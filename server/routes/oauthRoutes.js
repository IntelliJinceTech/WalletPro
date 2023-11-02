import express from 'express'
import passport from 'passport'

import dotenv from 'dotenv'

dotenv.config()
import User from '../models/User.js'

const router = express.Router()

// GOOGLE
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function (req, res) {
  res.redirect('/dashboard')
})

router.get('/google/revoke', async (req, res) => {
  if (unlinkGoogle(req)) {
    req.session.flash = { type: 'success', message: ['Google account unlinked successfully'] }
    res.redirect('/account')
  } else {
    req.session.flash = { type: 'error', message: ['Could not unlink account'] }
    res.redirect('/account')
  }
})

// export const unlinkGoogle = async (req) => {
//   try {
//     const token = req.user.googleToken
//     const res = await fetch(`https://accounts.google.com/o/oauth2/revoke?token=${token}`, {
//       method: 'post',
//       headers: { 'content-type': 'application/x-www-form-urlencoded' },
//     })
//     const data = await res.json()
//     if (data.error) throw new Error()
//     const user = await User.findById(req.user._id)
//     user.googleId = null
//     user.googleToken = null
//     await user.save()
//     return true
//   } catch (err) {
//     return false
//   }
// }

export default router
