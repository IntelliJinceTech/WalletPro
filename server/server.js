import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
const PORT = process.env.PORT || 8000
import cors from 'cors'
import logger from 'morgan'
// const googleRoutes = require('./routes/googleRoutes.js')

// use .env file in config folder

import connectDB from './config/database.js'

app.use(cors());

// body parsing
app.use(express.json());

//logging
app.use(logger('dev'))

// test routes
app.get('/' , async (req,res) => {
  res.json('hello world')
})

// app.use('/auth', googleRoutes)

//connect to database
connectDB()

app.listen(PORT, () => {
  console.log("Server is running, you better catch it!");
});