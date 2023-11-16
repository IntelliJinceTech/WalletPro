import passport from 'passport'
import { validationResult, body } from 'express-validator'
import validator from 'validator'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

// req needs isAuthenticated State

const clientHost = 'http://localhost:5173'

const getUser = (req, res) => {
  if (req.isAuthenticated()) {
    console.log(`responding from the server, the user is: ${req.user}`)
    return res
      .json({
        isLoggedIn: true,
        user: req.user,
      })
      .toJSON()
  }
  console.log('Not signed in')
  return res.json({ isLoggedIn: false })
}

const getUsers = async (req, res) => {
  const users = await User.find({})
  res.json(users)
}

const login = (req, res, next) => {
  console.log(req.body)
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      // Handle authentication error
      return next(err)
    }
    if (!user) {
      // Handle authentication failure
      return res.status(401).json({ message: info.message })
    }

    req.login(user, (err) => {
      if (err) {
        // Handle login error
        return next(err)
      }
      // Authentication and login successful
      return res.status(200).json({ message: 'Login successful' })
    })
  })(req, res, next)
}

const signup = async (req, res, next) => {
  try {
    res.send({ message: 'this is working!' })
  } catch (err) {
    next(err)
  }
}

const logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  res.json({ message: 'Logged out successfully' })
  res.redirect(clientHost)
}

/**
 * @desc Google OAuth 2.0 via passport
 * @route /google
 * @method GET
 */
export const googleLogin = (req, res, next) => {
  // scope tells us how much to ask from google
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next)
}

/**
 * @desc Google OAuth 2.0 via passport callback. used to redirect after authentication
 * @route /google/callback
 * @method GET
 */
export const googleCallback = (req, res) => {
  passport.authenticate('google', {
    failureRedirect: clientHost,
    successMessage: true,
    failureMessage: true,
  })(req, res, () => {
    // console.log(req)
    res.redirect('http://localhost:5173/dashboard')
  })
}

export default { getUser, login, signup, logout, getUsers, googleLogin, googleCallback }
