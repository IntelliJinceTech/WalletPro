import { Fragment, useState } from 'react'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { PiPercentLight } from 'react-icons/pi'

function classNames(...classes) {
  return classes.filter(Boolean).join('  ')
}

const CategorySelection = ({ creditCardIncentiveType, index }) => {
  const [selected, setSelected] = useState(null)
  const { register, control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    name: 'categories',
  })

  return (
    <div className="flex justify-around">
      <div className="flex items-center gap-x-1">
        <label htmlFor={`categories[${index}.categoryType]`} className="sr-only">
          Category
        </label>
        <select
          id={`categories[${index}].categoryType`}
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...register(`categories[${index}].categoryType`)}
        >
          <option value="groceries">Groceries</option>
          <option value="travel">Travel</option>
          <option value="portalPurchase">Purchases through Portal</option>
          <option value="dining">Dining</option>
          <option value="gas">Gas</option>
          <option value="other">Other</option>
        </select>
      </div>
      {/* Refactor for DRY later */}
      {creditCardIncentiveType === 'percentage' && (
        <div>
          <label htmlFor={`categories[${index}].categoryPercent`} className="sr-only">
            Percent
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <PiPercentLight className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="number"
              id={`categories[${index}].categoryPercent`}
              className="block w-[60%] rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="5 = 5%"
              {...register(`categories.[${index}].percentage`, { min: 0, max: 99 })}
            />
          </div>
        </div>
      )}
      {creditCardIncentiveType === 'points' && (
        <div>
          <label htmlFor={`categories[${index}].pointsMultiplier`} className="sr-only">
            Percent
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className=" text-gray-400 pt-1" aria-hidden="true">
                *
              </span>
            </div>
            <input
              type="number"
              id={`categories[${index}].pointsMultiplier`}
              className="block w-[60%] rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              placeholder="5 = 5x"
              {...register(`categories[${index}].pointsMultiplier`, { min: 0, max: 99 })}
            />
          </div>
        </div>
      )}
      {/* <button
        type="button"
        className="block rounded-md border-0 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-pink-600 content-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button> */}
    </div>
  )
}

export default CategorySelection
