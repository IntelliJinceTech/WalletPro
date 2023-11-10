import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import User from '../models/User.js'

export default function passportConfig() {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:8888/auth/google/callback',
        // passReqToCallback: true,
      },
      async function (request, accessToken, refreshToken, profile, done) {
        try {
          console.log('profile from google: ', profile)
          done(null, profile)
          // const user = await User.findOne({ googleId: profile.id })
          // if (user) {
          //   return done(null, user)
          // }
          // const newUser = await User.create({
          //   googleId: profile.id,
          //   email: profile.emails[0].value,
          //   password:null,
          // })
        } catch (error) {
          console.log(error)
        }
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return cb(err, user)
        // })
      }
    )
  )
  passport.serializeUser((user, done) => {
    done(null, user._id)
  })

  // returrn as much user info as you want via deserialization to req.user
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id)
      done(null, user)
    } catch (err) {
      done(err)
    }
  })
}
