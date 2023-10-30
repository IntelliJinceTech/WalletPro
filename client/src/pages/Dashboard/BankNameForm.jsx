import { useForm } from 'react-hook-form'

export const BankNameForm = ({ editModeOn, bank, name }) => {
  if (editModeOn) {
    return (
      <form>
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
            className="text-sm max-w-[70%] sm:max-w-full rounded-md border-0 ring-1 ring-inset ring-gray-300 p-1 placeholder:font-semibold"
            placeholder={name}
          />
        </div>
      </form>
    )
  } else {
    return (
      <div>
        <h3 className="text-base font-semibold leading-6 text-gray-900">{bank}</h3>
        <h4 className="text-sm">{name}</h4>
      </div>
    )
  }
}
