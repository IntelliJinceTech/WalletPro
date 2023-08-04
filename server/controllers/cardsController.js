import CreditCard from '../models/CreditCard.js'

export const getCards = async (req, res) => {
  try {
    const userId = req.user.id
    console.log(userId)
  } catch (error) {
    console.error(error)
  }
}
export const addCards = () => {}
export const editCards = () => {}
export const deleteCards = () => {}
