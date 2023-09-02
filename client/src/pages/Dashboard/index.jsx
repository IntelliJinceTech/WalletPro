import { useState, useContext } from 'react'
import DashboardNavBar from './DashboardNavBar'
import Wallet from './Wallet'
import Bank from './Bank'
import Modal from '../../components/Modal'
import { ModalContext } from '../../context/ModalContext/ModalContext'
import AddCreditCardForm from './AddCC/AddCreditCardForm'
import TimeBasedStats from './Stats/TimeBasedStats'

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false)
  const { isModalOpen, setIsModalOpen, handleClose, handleModal, handleOpen } = useContext(ModalContext)

  return (
    <div className="min-h-screen">
      <TimeBasedStats />
      <div className="flex flex-col w-full border-opacity-50">
        <Wallet />
        <button className="btn w-4/5 p-5 mb-4 place-content-center mx-auto" onClick={handleOpen}>
          Add Credit Card
        </button>
        <Modal>
          <AddCreditCardForm />
        </Modal>
      </div>

      {isMobile && <DashboardNavBar />}
    </div>
  )
}

export default Dashboard
