import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import dotenv from 'dotenv'
import User from '../models/User.js'

import 'dotenv/config'

const google = new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost:8888/auth/google/callback",
    passReqToCallback   : true
  },
  async function(request, accessToken, refreshToken, profile, done) {
    let user = await User.findOne({googleId: profile.id})
    if(!user) {
      user = await User.findOne({username: profile.emails[0].value})
      if(user) {
        user.googleId = profile.id;
      } else {
        user = new User({
          username: profile.emails[0].value,
          google: {
            id: profile.id,
            name: profile.name,
            email: profile.emails[0].value,
          }
        })
      }
    }
    await user.save()
    return done(null,user)
  }
)

export default google