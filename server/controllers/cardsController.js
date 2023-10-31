import mongoose from 'mongoose'
import CreditCard from '../models/CreditCard.js'
import { convertDateToMonthYear } from '../utils/convertDateToMonthYear.js'

export const getCards = async (req, res) => {
  try {
    const allCards = await CreditCard.find().lean()
    return res.json(allCards)
  } catch (error) {
    console.error(error)
  }
}
export const addCard = async (req, res) => {
  try {
    // destructure from req.body
    const { bankName, ccName, ccNetwork, rewardType, annualFee, categories, expiryDate, lastFourDigits } = req.body
    // console.log(req.body)
    console.log(categories)
    let rewardCategories = categories.map((category) => {
      category.pointsMultiplier = parseInt(category.pointsMultiplier) || 0
      category.percentage = parseInt(category.percentage) || 0
      if (rewardType === 'percentage') {
        return {
          category: category.categoryType,
          percent: category.percentage,
        }
      } else if (rewardType === 'points') {
        return {
          category: category.categoryType,
          pointsMultiplier: category.pointsMultiplier,
        }
      }
    })
    console.log('new reward categories array:  ', rewardCategories)

    const newCard = await CreditCard.create({
      bank: bankName,
      name: ccName,
      network: ccNetwork,
      rewardType: rewardType.toLowerCase(),
      annualFee: annualFee,
      favorite: false,
      expiryDate: convertDateToMonthYear(expiryDate),
      lastFourDigits: lastFourDigits,
      rewards: rewardCategories,
    })

    console.log('credit card created')
    res.json(newCard)
  } catch (error) {
    console.error(error)
  }
}

// todo testing needed
// updating credit card information such as rewards or payment schedule
export const updateCard = async (req, res) => {
  try {
    const { cardId } = req.params
    const { bank, name } = req.body
    const card = await CreditCard.findById(cardId)

    if (card) {
      card.bank = bank
      card.name = name
      await card.save()
      return res.json({ card })
    }
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}
export const deleteCard = async (req, res) => {
  try {
    const creditCardId = req.params.cardId
    console.log(creditCardId)

    // Use findByIdAndDelete to find the document by ID and delete it
    const deletedCard = await CreditCard.findByIdAndDelete(creditCardId)

    if (!deletedCard) {
      // If the credit card with the given ID was not found, return a 404 response
      return res.status(404).json({ error: 'Credit card not found' })
    }

    res.json({ message: 'Credit card deleted successfully' })
  } catch (error) {
    console.error('error: ', error)
  }
}
