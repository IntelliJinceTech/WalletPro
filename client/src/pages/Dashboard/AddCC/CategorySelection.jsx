import { Fragment, useState } from 'react'
import { PiPercentLight } from 'react-icons/pi'

function classNames(...classes) {
  return classes.filter(Boolean).join('  ')
}

const allCategories = [
  { id: 1, category: 'Groceries' },
  { id: 2, category: 'Travel' },
  { id: 3, category: 'Dining' },
  { id: 4, category: 'Gas' },
  { id: 5, category: 'Other' },
]
const CategorySelection = ({ creditCardIncentiveType }) => {
  const [selected, setSelected] = useState(allCategories[0])
  return (
    <div className="flex justify-around">
      <div className="flex items-center gap-x-1">
        <label htmlFor="ccCategory" className="inline-block text-sm font-medium leading-6 text-gray-900 mr-3 pt-1">
          Category
        </label>
        <select
          id="ccCategory"
          name="ccCategory"
          className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue=""
        >
          <option value="groceries">Groceries</option>
          <option value="Travel">Travel</option>
          <option value="Dining">Dining</option>
          <option value="Gas">Gas</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {creditCardIncentiveType === 'percentage' && (
        <div>
          <label htmlFor="percent" className="sr-only">
            Percent
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <PiPercentLight className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="number"
              name="percent"
              id="percent"
              className="block w-[60%] rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="5 = 5%"
            />
          </div>
        </div>
      )}
      {creditCardIncentiveType === 'points' && (
        <div>
          <label htmlFor="points" className="sr-only">
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
              name="points"
              id="points"
              className="block w-[60%] rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="5 = 5x"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default CategorySelection
