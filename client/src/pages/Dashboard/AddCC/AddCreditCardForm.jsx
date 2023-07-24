import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import CCCategorySelect from './CCCategorySelect'
import { ErrorMessage } from '@hookform/error-message'

const AddCreditCardForm = () => {
  const methods = useForm()
  const { register, handleSubmit, errors } = methods
  const onSubmit = (data) => console.log(data)

  return (
    <FormProvider {...methods}>
      <form method="post" className="form-control w-full max-w-lg place-content-center" onSubmit={methods.handleSubmit(onSubmit)}>
        <label className="label" htmlFor="bank">
          <span className="label-text">Credit Card Bank?</span>
          <input
            {...methods.register('bank', {
              required: 'This input is required',
              pattern: {
                value: /[a-zA-Z]+$/,
                message: 'Alphabetic input only',
              },
            })}
            name="bank"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <ErrorMessage
            errors={errors}
            name="multipleErrorInput"
            render={({ messages }) => messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)}
          />
        </label>
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
        <hr></hr>
        <CCCategorySelect tier="1st" />
        <CCCategorySelect tier="2nd" />
        <CCCategorySelect tier="3rd" />
        <CCCategorySelect tier="4th" />
        <button type="submit">Add</button>
      </form>
    </FormProvider>
  )
}

export default AddCreditCardForm