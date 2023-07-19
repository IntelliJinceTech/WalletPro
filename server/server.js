import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
const PORT = process.env.PORT || 8000
import cors from 'cors'
import logger from 'morgan'
import MongoStore from 'connect-mongo'
import passport from 'passport'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import oauthRoutes from './routes/oauthRoutes.js'
// const googleRoutes = require('./routes/googleRoutes.js')

// use .env file in config folder

import connectDB from './config/database.js'
import google from './config/googleAuth.js'

import User from './models/User.js'




// body parsing
app.use(express.json());

//logging
app.use(logger('dev'))

app.use(
    cors({
        // need this while in development, since front/backend are running on seperate origins
        origin: 'http://localhost:5173',
        credentials: true,
    })
);




app.use(
  session({
      secret: 'keyboard cat', //secret used to sign the session ID cookie
      resave: true, //save session on every request 
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: process.env.DB_STRING,
        dbName: 'WalletPro'
      }), //save uninitialized sessions (new and not modified)
      cookie: {
          sameSite: "none", //allow cross-site requests from different origin
          // secure: true, //requires HTTPS. For local environment you may skip this.
          maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
      }
  })
);
app.use(cookieParser());
// passport middleware
app.use(passport.initialize());
app.use(passport.session())
passport.use(User.createStrategy())
passport.use(google)
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


// test routes
app.get('/' , async (req,res) => {
  res.json('hello world')
})

app.use('/auth', oauthRoutes)

//connect to database
connectDB()

app.listen(PORT, () => {
  console.log("Server is running, you better catch it!");
});