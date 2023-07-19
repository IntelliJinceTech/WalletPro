const express = require('express');
const app = express()
const PORT = process.env.PORT || 8000
const mongoose = require('mongoose');
const cors = require('cors')
const logger = require('morgan')
// const googleRoutes = require('./routes/googleRoutes.js')

const connectDB = require('./config/database')


// use .env file in config folder
require('dotenv').config({ path: './config/.env' });

//connect to database
connectDB()

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


app.listen(PORT, () => {
  console.log("Server is running, you better catch it!");
});