import passport from 'passport'
import { validationResult } from 'express-validator'
import User from '../models/User.js'

// req needs isAuthenticated State

const getUser = (req, res) => {
  console.log(req.isAuthenticated())
  console.log('this is to get the users')
  if (req.isAuthenticated()) {
    console.log(req.user)
    return res.json({
      isLoggedIn: true,
      user: req.user,
    })
  }
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

      console.log(user)
      // Authentication and login successful
      return res.status(200).json({ message: 'Login successful' })
    })
  })(req, res, next)
}

const signup = async (req, res, next) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    const { email, password, username } = req.body
    const user = await User.signup(email, password, username)

    // Log in the newly registered user
    req.login(user, (err) => {
      if (err) {
        // Handle login error
        return res.status(500).json({ error: 'Login error' })
      }
      // User is logged in
      return res.status(200).json({ message: 'Signup and login successful' })
    })
  } catch (err) {
    next(err)
  }
}

const logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  res.json({ message: 'Logged out successfully' })
}

export default { getUser, login, signup, logout }
