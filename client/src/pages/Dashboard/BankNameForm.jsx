import { useForm } from 'react-hook-form'
import apiService from '../../services/apiService'

export const BankNameForm = ({ checkCardEditModeActive, bank, name, Id, clearEditActive, getAllCards }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data, e) => {
    e.preventDefault()
    try {
      // console.log(data)
      const response = await apiService.updateCard(Id, data)
      console.log('cardupdated: ', response)
    } catch (error) {
      throw new Error(error)
    }
    await getAllCards()
    await clearEditActive()
    console.log(checkCardEditModeActive)
  }
  if (checkCardEditModeActive) {
    return (
      <form
        className="flex lg:min-w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-around">
          <label
            htmlFor="bank"
            className="sr-only"
          >
            Bank
          </label>
          <input
            id="bank"
            type="text"
            placeholder={bank}
            className=" max-w-[70%] text-sm sm:max-w-full rounded-md border-0 ring-1 ring-inset ring-gray-300 p-1 placeholder:font-semibold"
            value={bank}
            {...register('bank')}
          />
        </div>
        <div className="flex justify-around">
          <label
            htmlFor="card-name"
            className="sr-only"
          ></label>
          <input
            id="card-name"
            type="text"
            className="text-sm max-w-[75%] sm:max-w-full rounded-md border-0 ring-1 ring-inset ring-gray-300 p-1 placeholder:font-semibold"
            placeholder={name}
            value={name}
            {...register('name')}
          />
        </div>
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
            />
          </svg>
        </button>
      </form>
    )
  } else {
    return (
      <div className="flex justify-between">
        <h3 className="text-base font-semibold leading-6 text-gray-900">{bank}</h3>
        <h4 className="text-sm">{name}</h4>
      </div>
    )
  }
}
