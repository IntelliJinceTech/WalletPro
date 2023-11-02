import dotenv from 'dotenv'
import { OAuth2Client } from 'google-auth-library'

import Token from '../models/Token.js'

dotenv.config()

const oAuth2Client = new OAuth2Client(process.env.GOOGLE_ID, process.env.GOOGLE_SECRET)

async function verifyGoogle(req, res, next) {
  const authHeader = req.headers.authorization
  const tokenArray = authHeader.split(' ')
  const token = tokenArray[1]

  try {
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_ID,
    })
    console.log('token is valid', ticket)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
