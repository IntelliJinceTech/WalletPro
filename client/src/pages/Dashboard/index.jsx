import { useState, useContext, useEffect } from 'react'
import Wallet from './Wallet'
import Bank from './Bank'
import Modal from '../../components/Modal'
import { ModalContext } from '../../context/ModalContext/ModalContext'
import AddCreditCardForm from './AddCC/AddCreditCardForm'
import TimeBasedStats from './Stats/TimeBasedStats'
import CategoryBadge from './CategoryDisplay/CategoryBadge.jsx'
import APIService from '../../services/apiService'
import { EditingModeContext } from '../../context/EditingModeContext/EditingModeContext'
import AddCCButton from './AddCC/AddCCButton'

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { isModalOpen, setIsModalOpen, handleClose, handleModal, handleOpen } = useContext(ModalContext)
  const [allCreditCards, setAllCreditCards] = useState([])

  const getAllCards = async () => {
    try {
      const response = await APIService.getCards()
      // console.log(response)
      setAllCreditCards(response.data)
      console.log(allCreditCards)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllCards()
  }, [])

  const sortCreditCardsByCategory = (selectedCategory, typeCategory) => {
    // todo: replicate for all categories
    if (selectedCategory === 'groceries') {
      const sortedCards = allCreditCards
        .map((card) => ({
          ...card,
          rewards: card.rewards.sort((a, b) => (b[typeCategory] || 0) - (a[typeCategory] || 0)),
        }))
        .sort((a, b) => (b.rewards[0][typeCategory] || 0) - (a.rewards[0][typeCategory] || 0))

      setAllCreditCards(sortedCards)
      console.log(allCreditCards)
    }
  }

  return (
    <div className="min-h-screen">
      <TimeBasedStats />
      <CategoryBadge sortCreditCardsByCategory={sortCreditCardsByCategory} />
      <div className="flex flex-col w-full border-opacity-50">
        <Wallet
          allCreditCards={allCreditCards}
          setAllCreditCards={setAllCreditCards}
          getAllCards={getAllCards}
        />
        <AddCCButton>Add Credit Card</AddCCButton>
      </div>
      <Modal>
        <AddCreditCardForm
          getAllCards={getAllCards}
          setAllCreditCards={setAllCreditCards}
        />
      </Modal>
    </div>
  )
}

export default Dashboard
