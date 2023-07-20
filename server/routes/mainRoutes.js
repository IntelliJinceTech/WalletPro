import express from 'express'

const router = express.Router()

router.get('/getUser', (req,res) => (
  res.json(req.user)
) )

router.get('/logout', function(req, res, next){
  req.logout(function(err) {
      console.log("logged out");
      if (err) { return next(err); }
      res.send('done');
  });
});

router.get('/', (req, res) => {
res.send('Hello World!');
});

export default router