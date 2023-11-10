// import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
// import dotenv from 'dotenv'
// import User from '../models/User.js'

// import 'dotenv/config'

// const google = new GoogleStrategy(
//   {
//     clientID: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_SECRET,
//     callbackURL: 'http://localhost:8888/auth/google/callback',
//     passReqToCallback: true,
//   },
//   async function (accessToken, refreshToken, profile, cb) {
// try {
//   const oldUser = await User.findOne({ email: profile.email });

//   if (oldUser) {
//     return done(null, oldUser);
//   }
// } catch (err) {
//   console.log(err);
// }
// try {
//   const newUser = await new User({
//     provider: 'google',
//     googleId: profile.id,
//     username: `user${profile.id}`,
//     email: profile.email,
//     name: profile.displayName,
//     avatar: profile.picture,
//   }).save();
//   done(null, newUser);
// } catch (err) {
//   console.log(err);
// }
//     let user = await User.findOne({ googleId: profile.id })
//     if (!user) {
//       user = await User.findOne({ username: profile.emails[0].value })
//       if (user) {
//         user.googleId = profile.id
//       } else {
//         user = new User({
//           username: profile.emails[0].value,
//           googleId: profile.id,
//           hasPassword: false,
//         })
//       }
//     }
//     user.googleToken = accessToken
//     await user.save()
//     return cb(null, user)
//   }
// )

// export default google
