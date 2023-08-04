import CreditCard from '../models/CreditCard.js'

export const getCards = async (req, res) => {
  try {
    const userId = req.user.id
    const allCards = await CreditCard.find().lean()
    console.log(`userId: ${userId}`, `allCreditCards: ${allCards}`)
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
// export const editCards = () => {}
// export const deleteCards = () => {}
