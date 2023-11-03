import passport from 'passport'
import { validationResult, body } from 'express-validator'
import validator from 'validator'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

// req needs isAuthenticated State

const getUser = (req, res) => {
  console.log('authentication status: ', req.isAuthenticated())
  console.log(req.session)
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
}

export default { getUser, login, signup, logout, getUsers }
