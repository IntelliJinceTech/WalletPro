import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import User from '../models/User.js'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcrypt'

export default function passportConfig() {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const user = await User.findOne({ email })
        if (!user) {
          return done(null, false, {
            message: `Email ${email} does not exist`,
          })
        }
        if (!user.password) {
          return done(null, false, {
            message: `Password is required`,
          })
        }

        // compare input password with password stored on db
        const match = await bcrypt.compare(password, user.password)

        if (match) {
          return done(null, user)
        }
        return done(null, false, {
          message: `Incorrect password`,
        })
      } catch (error) {
        return done(error)
      }
    })
  )
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:8888/auth/google/callback',
        // passReqToCallback: true,
      },
      async function (request, accessToken, refreshToken, profile, done) {
        // console.log('profile from google: ', profile)
        const newUser = {
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        }

        try {
          let user = await User.findOne({ googleId: profile.id })
          if (user) {
            done(null, user)
          } else {
            user = await User.create(newUser)
            done(null, user)
          }
        } catch (error) {
          console.error(error)
        }
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
