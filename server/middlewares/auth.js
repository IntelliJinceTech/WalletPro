export const ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  } else {
    return res.sendStatus(401) // 401 is unauthorized
  }
}
