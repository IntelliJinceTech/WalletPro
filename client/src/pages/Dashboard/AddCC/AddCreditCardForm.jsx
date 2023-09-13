import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import CCCategorySelect from './CCCategorySelect'
import { ErrorMessage } from '@hookform/error-message'

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

  return (
    <FormProvider {...methods}>
      <form method="post" className=" w-full max-w-lg place-content-center" onSubmit={methods.handleSubmit(onSubmit)}>
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
        <label className="label">
          <span className="label-text">Name of your Credit Card?</span>
          <input
            {...methods.register('name', {
              required: 'This input is required',
              pattern: {
                value: /[a-zA-Z]+$/,
                message: 'Alphabetic input only',
              },
            })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ messages }) =>
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <p className="text-red-500 before:inline before:content-['⚠\00a0']" key={type}>
                {message}
              </p>
            ))
          }
        />
        <label className="label">
          <span className="label-text">Network?</span>
          <input
            {...methods.register('network', {
              required: 'This input is required',
              pattern: {
                value: /[a-zA-Z]+$/,
                message: 'Alphabetic input only',
              },
            })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
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
        <hr></hr>
        <CCCategorySelect tier="1st" />
        <CCCategorySelect tier="2nd" />
        <CCCategorySelect tier="3rd" />
        <CCCategorySelect tier="4th" />
        <button
          className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Add Credit Card
        </button>
      </form>
    </FormProvider>
  )
}

export default AddCreditCardForm
