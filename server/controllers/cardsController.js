import mongoose from 'mongoose'
import CreditCard from '../models/CreditCard.js'

export const getCards = async (req, res) => {
  try {
    const allCards = await CreditCard.find().lean()
    console.log(`allCreditCards: ${allCards}`)
    return res.json({ allCards })
  } catch (error) {
    console.error(error)
  }
}
export const addCard = async (req, res) => {
  try {
    // destructure from req.body
    const { bank, name, network, rewardType, annualFee, rewards } = req.body

    // create array to hold rewards data
    const rewardsData = []

    // loop through rewards array in req.body and populate the rewardsData
    for (const reward of rewards) {
      const { rewardsCategory, categoryPercent, rewardLimit } = reward
      rewardsData.push({
        rewardsCategory,
        categoryPercent,
        rewardLimit,
      })
    }

    const newCard = await CreditCard.create({
      bank,
      name,
      network,
      rewardType,
      annualFee,
      rewards: rewardsData,
    })

    console.log('credit card created')
    res.json(newCard)
  } catch (error) {
    console.error(error)
  }
}
// updating credit card information such as rewards or payment schedule
export const updateCards = async (req, res) => {
  try {
    const creditCardId = req.params.cardId
    const updateData = req.body
    console.log(creditCardId)

    const updatedCard = await CreditCard.findByIdAndUpdate(creditCardId, { ...updateData }, { new: true })

    if (!updatedCard) {
      return res.status(404).json({ error: 'credit card not found' })
    }
    // updatedCard.save()
    // card.set(updateData)
    await updatedCard.save()
    res.json(updatedCard)
  } catch (error) {
    console.error(error)
    return res.status(500)
  }
}
export const deleteCards = async (req, res) => {
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
