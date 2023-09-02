import express from 'express'
import passport from 'passport'
import session from 'express-session'
import MongoStore from 'connect-mongo'
import cors from 'cors'
import logger from 'morgan'
import connectDB from './config/database.js'

// routes
import mainRoutes from './routes/mainRoutes.js'
import oauthRoutes from './routes/oauthRoutes.js'
import cardRoutes from './routes/cardRoutes.js'
// import walletRoutes from './routes/walletRoutes.js'
// const googleRoutes = require('./routes/googleRoutes.js')

// general setup
import dotenv from 'dotenv'
dotenv.config()

const app = express()

// import google from './config/googleAuth.js'
import User from './models/User.js'

// body parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//logging
app.use(logger('dev'))

app.use(
  cors({
    // need this while in development, since front/backend are running on seperate origins
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.use(
  session({
    // name: 'walletpro',
    secret: 'keyboard cat', //secret used to sign the session ID cookie
    resave: true, //save session on every request
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING,
      dbName: 'WalletPro',
    }),
    cookie: {
      sameSite: 'none', //allow cross-site requests from different origin
      // secure: true, //requires HTTPS. For local environment you may skip this.
      maxAge: 1000 * 60 * 60 * 24 * 7, // One Week
    },
  })
)

// cookie parser middleware no longer needs to be used for express-session to work
// app.use(cookieParser())
// passport middleware
app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy(User.authenticate()))
// passport.use(google)
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Routes
app.use('/', mainRoutes)
app.use('/auth', oauthRoutes)
app.use('/cards', cardRoutes)
// app.use('/wallet', walletRoutes)

//connect to database
connectDB()

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}, you better catch it!`)
})
