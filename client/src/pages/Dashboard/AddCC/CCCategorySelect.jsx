import { useFormContext } from 'react-hook-form'

const CCCategorySelect = (props) => {
  const { register, errors } = useFormContext()
  const categorySelect = `${props.tier}-Category`
  const percentCategorySelect = `${props.tier}-percent`
  return (
    <div className="flex gap-2 place-items-center">
      <label className="label">
        <span className="label-text">{props.tier} category </span>
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
        <input
          type="number"
          placeholder="%"
          className="ml-2 input input-bordered w-full max-w-xs invalid:border-red-500"
          {...register(percentCategorySelect, { min: 0, max: 99 })}
        />
      </label>
    </div>
  )
}

export default CCCategorySelect
