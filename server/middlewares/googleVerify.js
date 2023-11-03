import dotenv from 'dotenv'
import { OAuth2Client } from 'google-auth-library'

import Token from '../models/Token.js'

dotenv.config()

const oAuth2Client = new OAuth2Client(process.env.GOOGLE_ID, process.env.GOOGLE_SECRET)

export async function verifyGoogle(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    next(res.status(401).send('Unauthorized'))
  }
  const tokenArray = authHeader.split(' ')
  const token = tokenArray[1]

  try {
    const ticket = await oAuth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_ID,
    })
    console.log('token is valid', ticket)
    const payload = ticket.getPayload()
    if (payload) {
      req.userId = payload['sub']
      next()
      return
    }
  } catch (error) {
    res.status(401).send('Unauthorized')
  }
}
