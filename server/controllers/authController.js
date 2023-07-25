import passport from 'passport'
import { validationResult, body } from 'express-validator'
import User from '../models/User.js'

// req needs isAuthenticated State

const getUser = (req, res) => {
  console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    console.log(req.user)
    return res.json({
      isLoggedIn: true,
      user: req.user,
    })
  }
  console.log('Not signed in')
  return res.json({ isLoggedIn: false })
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
    // await body('username').notEmpty().withMessage('Username is required').run(req)
    // await body('email').isEmail().withMessage('Invalid email address').run(req)
    // await body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').run(req)

    const errors = validationResult(req)
    // console.log(errors)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    console.log(email)
    const newUser = new User({ email })
    await User.register(newUser, password)

    passport.authenticate('local')(req, res, () => {
      return res.json({ message: 'Registration successful', user: req.user })
    })
    // req.login(newUser, (err) => {
    //   if (err) return res.status(500).json({ error: 'login error' })
    // })
    // return res.status(200).json({ message: 'signup and login successful' })
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
