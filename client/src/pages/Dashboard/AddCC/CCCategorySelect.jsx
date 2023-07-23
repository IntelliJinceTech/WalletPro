import { useFormContext } from 'react-hook-form'

const CCCategorySelect = (props) => {
  const { register, errors } = useFormContext()
  const categorySelect = `${props.tier}-Category`
  const percentCategorySelect = `${props.tier}-percent`
  return (
    <div className="flex min-w-content">
      <label className="label">
        <span className="label-text">Pick your {props.tier} category </span>
      </label>
      <select className="select select-bordered w-full max-w-xs" {...register(categorySelect)} defaultValue="">
        <option value="groceries">Groceries</option>
        <option value="Travel">Travel</option>
        <option value="Dining">Dining</option>
        <option value="Gas">Gas</option>
        <option value="Other">Other</option>
      </select>
      <label className="label">
        <span className="label-text">Reward Percentage?</span>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" {...register(percentCategorySelect)} />
      </label>
    </div>
  )
}

export default CCCategorySelect
