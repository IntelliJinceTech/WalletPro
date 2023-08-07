import express from 'express'
import * as walletController from '../controllers/walletController.js'

const router = express.Router()

// show all the cards in the wallet
// router.get('/', walletController.showCardsCarry)

// adding credit cards and removing credit cards from the wallet can be done through frontend state.
// // Add Credit card to Wallet
// router.post('/addCards', walletController.addCard)

// // Remove credit card from wallet
// router.delete('/removeCard/:cardId', walletController.removeCardFromWallet)

export default router
