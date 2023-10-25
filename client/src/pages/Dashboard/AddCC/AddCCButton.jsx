import { useContext } from 'react'
import { ModalContext } from '../../../context/ModalContext/ModalContext'

const AddCCButton = ({ children }) => {
  const { handleOpen } = useContext(ModalContext)
  return (
    <button
      type="button"
      className="rounded-full w-[80%] place-self-center bg-indigo-600 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={handleOpen}
    >
      {children}
    </button>
  )
}

export default AddCCButton
