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
      console.log(response)
      setAllCreditCards(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllCards()
  }, [])

  const orderCards = (category) => {
    // todo: when clicking on category badge
    // todo: sort cards from highest to lowest based on category clicked
    // todo: points > percentage
    // const sortedCards = allCreditCards.sort((a, b) => {})
  }

  return (
    <div className="min-h-screen">
      <TimeBasedStats />
      <CategoryBadge />
      <div className="flex flex-col w-full border-opacity-50">
        <Wallet
          allCreditCards={allCreditCards}
          setAllCreditCards={setAllCreditCards}
        />
        <AddCCButton>Add Credit Card</AddCCButton>
      </div>
      <Modal>
        <AddCreditCardForm />
      </Modal>
    </div>
  )
}

export default Dashboard
