import { useForm } from 'react-hook-form'
import CCCategorySelect from './CCCategorySelect'

const AddCreditCardForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form method="post" className="form-control w-full max-w-lg place-content-center" onSubmit={handleSubmit(onSubmit)}>
      <label className="label" htmlFor="bank">
        <span className="label-text">Credit Card Bank?</span>
        <input {...register('bank')} name="bank" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      <label className="label">
        <span className="label-text">Name of your Credit Card?</span>
        <input {...register('name')} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      <label className="label">
        <span className="label-text">Network?</span>
        <input {...register('network')} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      <hr></hr>
      <CCCategorySelect tier="1st" />
      <CCCategorySelect tier="2nd" />
      <CCCategorySelect tier="3rd" />
      <CCCategorySelect tier="4th" />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddCreditCardForm
