import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import CCCategorySelect from './CCCategorySelect'
import { ErrorMessage } from '@hookform/error-message'
import CategorySelection from './CategorySelection'

const AddCreditCardForm = () => {
  const methods = useForm({
    criteriaMode: 'all', // all errors from each field will be gathered
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods
  const onSubmit = (data) => console.log(data)

  const creditCardTypes = [
    { id: 'ccPoints', type: 'Points Multiplier' },
    { id: 'ccPercentage', type: 'Percentage' },
  ]

  let creditCardType = null

  return (
    <FormProvider {...methods}>
      <form method="post" className=" w-full max-w-lg place-content-center" onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className="text-base font-semibold leading-7 text-gray-900">General Info</h2>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="bank" className="block text-xs font-medium text-gray-900">
            Credit Card Bank
          </label>
          <input
            {...methods.register('bank', {
              required: 'This input is required',
              pattern: {
                value: /[a-zA-Z]+$/,
                message: 'Alphabetic input only',
              },
            })}
            type="text"
            name="bank"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Example: Chase"
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="bank"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 before:inline before:content-['⚠\00a0']" key={type}>
                {message}
              </p>
            ))
          }
        />
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 mt-1">
          <label htmlFor="ccName" className="block text-xs font-medium text-gray-900">
            Name
          </label>
          <input
            {...methods.register('bank', {
              required: 'This input is required',
              pattern: {
                value: /[a-zA-Z]+$/,
                message: 'Alphabetic input only',
              },
            })}
            type="text"
            name="ccName"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Example: Sapphire Preferred"
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="ccName"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 before:inline before:content-['⚠\00a0']" key={type}>
                {message}
              </p>
            ))
          }
        />
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 mt-1">
          <label htmlFor="ccNetwork" className="block text-xs font-medium text-gray-900">
            Network
          </label>
          <input
            {...methods.register('bank', {
              required: 'This input is required',
              pattern: {
                value: /[a-zA-Z]+$/,
                message: 'Alphabetic input only',
              },
            })}
            type="text"
            name="ccNetwork"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Example: VISA"
          />
        </div>
        <ErrorMessage
          errors={errors}
          name="network"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 before:inline before:content-['⚠\00a0']" key={type}>
                {message}
              </p>
            ))
          }
        />
        <div className="mt-2">
          <label className="text-base font-semibold text-gray-900">Reward/Incentive Type</label>
          <p className="text-sm text-gray-500">What kind of credit card incentives does it deploy?</p>
          <fieldset className="mt-4">
            <legend className="sr-only">Credit Card Reward Types</legend>
            <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
              {creditCardTypes.map((creditCardType) => (
                <div key={creditCardType.id} className="flex items-center">
                  <input
                    id={creditCardType.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={creditCardType.id === 'ccPoints'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor={creditCardType.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                    {creditCardType.type}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        <div>
          <div>
            <CategorySelection creditCardIncentiveType={creditCardType} />
          </div>
          <button
            type="button"
            className="rounded bg-green-600 px-2 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full my-2"
          >
            Add Category
          </button>
        </div>
        <button
          className="rounded bg-indigo-600 px-2 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
          type="submit"
        >
          Add Credit Card
        </button>
      </form>
    </FormProvider>
  )
}

export default AddCreditCardForm
