import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import CCCategorySelect from './CCCategorySelect'

const AddCreditCardForm = () => {
  const methods = useForm()
  const { register, handleSubmit, errors } = methods
  const onSubmit = (data) => console.log(data)

  return (
    <FormProvider {...methods}>
      <form method="post" className="form-control w-full max-w-lg place-content-center" onSubmit={methods.handleSubmit(onSubmit)}>
        <label className="label" htmlFor="bank">
          <span className="label-text">Credit Card Bank?</span>
          <input {...methods.register('bank')} name="bank" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="label">
          <span className="label-text">Name of your Credit Card?</span>
          <input {...methods.register('name')} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="label">
          <span className="label-text">Network?</span>
          <input {...methods.register('network')} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <hr></hr>
        <CCCategorySelect definition="firstCategory" tier="1st" />
        <CCCategorySelect tier="2nd" />
        <CCCategorySelect tier="3rd" />
        <CCCategorySelect tier="4th" />
        <button type="submit">Add</button>
      </form>
    </FormProvider>
  )
}

export default AddCreditCardForm
