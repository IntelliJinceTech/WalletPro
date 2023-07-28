export const sessionChecker = (req, res, next) => {
  console.log(`%cSession Checker: ${req.session.id}`, 'color:green')
  console.log(req.session)
  if (req.session.profile) {
    console.log(`%cFound user Session`, 'color:green')
    next()
  } else {
    console.log(`No User Session Found`, 'color: red')
    res.redirect('/')
  }
}
