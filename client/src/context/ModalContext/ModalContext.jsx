import { createContext, useMemo, useState } from 'react'

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModal = () => {
    setIsModalOpen((prevState) => !prevState)
    console.log(isModalOpen)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    console.log(isModalOpen)
  }

  const handleOpen = () => {
    setIsModalOpen(true)
    console.log(isModalOpen)
  }
  const modalValue = useMemo(() => ({ isModalOpen, setIsModalOpen, handleModal, handleClose, handleOpen }), [isModalOpen])

  return <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>
}

export { ModalContext, ModalProvider }
