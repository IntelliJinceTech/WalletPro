import { useContext, useEffect, useRef } from 'react'
import { ModalContext } from '../context/ModalContext/ModalContext'

const Modal = ({ children }) => {
  const { isModalOpen, setIsModalOpen, handleClose } = useContext(ModalContext)

  return (
    <dialog className="modal" open={isModalOpen}>
      <div method="dialog" className="modal-box">
        {children}
      </div>
      <form method="dialog" className="modal-backdrop bg-slate-700 opacity-50">
        <button onClick={handleClose}>close</button>
      </form>
    </dialog>
  )
}

export default Modal
