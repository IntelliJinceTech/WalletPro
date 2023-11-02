import dotenv from 'dotenv'

import Token from '../models/Token.js'

dotenv.config()

export async function auth(req, res, next) {
  res.locals.loggedIn = req.isAuthenticated()

  if (res.locals.loggedIn) {
    const { username, hasPassword, googleId } = req.user
    res.locals.user = {
      username,
      hasPassword,
      googleId,
    }
    next()
  }
}
// export const ensureAuth = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next()
//   } else {
//     return res.sendStatus(401) // 401 is unauthorized
//   }
// }
