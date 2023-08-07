import mongoose from 'mongoose'
import CreditCard from '../models/CreditCard.js'

// export const showCardsCarry = async (req, res) => {
//   try {
//     const allCards = await CreditCard.find().lean()
//     console.log(`allCreditCards: ${allCards}`)
//     return res.json({ allCards })
//   } catch (error) {
//     console.error(error)
//   }
// }
// export const addCard = async (req, res) => {
//   try {
//     res.json(req.body)
//   } catch (error) {
//     console.error(error)
//   }
// }

// export const removeCardFromWallet = async (req, res) => {
//   try {
//     const creditCardId = req.params.cardId
//     console.log(creditCardId)

//     // Use findByIdAndDelete to find the document by ID and delete it
//     const deletedCard = await CreditCard.findByIdAndDelete(creditCardId)

//     if (!deletedCard) {
//       // If the credit card with the given ID was not found, return a 404 response
//       return res.status(404).json({ error: 'Credit card not found' })
//     }

//     res.json({ message: 'Credit card deleted successfully' })
//   } catch (error) {
//     console.error('error: ', error)
//   }
// }
