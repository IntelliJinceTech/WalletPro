import { useContext, useEffect, useRef } from 'react'
import { ModalContext } from '../context/ModalContext/ModalContext'

const Modal = ({ children }) => {
  const { isModalOpen, setIsModalOpen, handleClose } = useContext(ModalContext)

  return (
    <dialog className="modal" open={isModalOpen}>
      <div method="dialog" className="modal-box">
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

export default Modal
