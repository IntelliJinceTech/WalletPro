import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { useEffect, useState } from 'react'
// import CCCategorySelect from './CCCategorySelect'
import { ErrorMessage } from '@hookform/error-message'
import CategorySelection from './CategorySelection'

const AddCreditCardForm = () => {
  const [cardType, setCardType] = useState(null)
  const numberBestCategories = 3
  const methods = useForm({
    criteriaMode: 'all', // all errors from each field will be gathered
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods
  const onSubmit = (data, e) => console.log(data, e)

  const creditCardTypes = [
    { id: 'ccPoints', type: 'Points Multiplier', reference: 'points' },
    { id: 'ccPercentage', type: 'Percentage', reference: 'percentage' },
  ]

  useEffect(() => {
    console.log(cardType)
  }, [cardType])

  const handleRadioChange = (e) => {
    console.log(e)
  }

  return (
    <FormProvider {...methods}>
      <form className=" w-full max-w-lg place-content-center" onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className="text-base font-semibold leading-7 text-gray-900">General Info</h2>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="bankName" className="block text-xs font-medium text-gray-900">
            Credit Card Bank
          </label>
          <input
            {...methods.register(
              'bankName'
              // {
              //   required: 'This input is required',
              //   pattern: {
              //     value: /[a-zA-Z]+$/,
              //     message: 'Alphabetic input only',
              //   },
              // }
            )}
            id="bankName"
            type="text"
            name="bankName"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Example: Chase"
          />
        </div>
        {/* <ErrorMessage
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
        /> */}
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 mt-1">
          <label htmlFor="ccName" className="block text-xs font-medium text-gray-900">
            Name
          </label>
          <input
            id="ccName"
            {...methods.register('ccName')}
            type="text"
            name="ccName"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Example: Sapphire Preferred"
          />
        </div>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 mt-1">
          <label htmlFor="ccNetwork" className="block text-xs font-medium text-gray-900">
            Network
          </label>
          <input
            {...methods.register(
              'ccNetwork'
              // {
              //   required: 'This input is required',
              //   pattern: {
              //     value: /[a-zA-Z]+$/,
              //     message: 'Alphabetic input only',
              //   },
              // }
            )}
            id="ccNetwork"
            type="text"
            name="ccNetwork"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Example: VISA"
          />
        </div>
        {/* <ErrorMessage
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
        /> */}
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
                    name="rewardType"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    defaultChecked={creditCardType.id === `ccPoints`}
                    value={creditCardType.reference}
                    // checked={creditCardType.
                    onChange={handleRadioChange}
                    {...register('rewardType', { required: 'This input is required' })}
                  />
                  <label htmlFor={creditCardType.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                    {creditCardType.type}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
        {/* <div>
          <div className="mt-3">
            <label className="text-base font-semibold text-gray-900">Best 3 Categories</label>
            <p className="text-sm text-gray-500">Setup the best categories that this credit card covers</p>
            {cardType && [...Array(numberBestCategories)].map((_, i) => <CategorySelection key={i} creditCardIncentiveType={cardType} />)}
          </div>
        </div> */}
        <button
          className="mt-5 rounded bg-indigo-600 px-2 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
          type="submit"
        >
          Add Credit Card
        </button>
      </form>
    </FormProvider>
  )
}

export default AddCreditCardForm
