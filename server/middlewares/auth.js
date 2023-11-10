export async function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}
// export const ensureAuth = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     return next()
//   } else {
//     return res.sendStatus(401) // 401 is unauthorized
//   }
// }
