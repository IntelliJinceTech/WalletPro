import express from 'express';
import passport from 'passport';

import dotenv from 'dotenv';

dotenv.config();
// import User from '../models/User.js';


const router = express.Router();


// GOOGLE
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/dashboard');
  });

export default router