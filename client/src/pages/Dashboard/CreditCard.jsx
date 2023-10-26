import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
// import {} from 'react-icons/lia'
import { FaCcVisa } from 'react-icons/fa'
import { BookmarkIcon, EllipsisHorizontalIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid'
import APIService from '../../services/apiService'
import { capitalizeFirst } from '../../utils/capitalize'
import { AmexIcon, MasterCardIcon, VisaIcon } from '../../components/BankingIcons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const networkIcon = (network) => {
  const networkToLower = network.toLowerCase()
  if (networkToLower === 'visa') {
    return <VisaIcon />
  } else if (networkToLower === 'mastercard') {
    return <MasterCardIcon />
  } else if (networkToLower === 'amex') {
    return <AmexIcon />
  }
}

const CreditCard = ({
  bank,
  name,
  network,
  rewardType,
  setAllCreditCards,
  id,
  inEditingMode,
  isEditActive,
  clearEditActive,
  isFavorite,
  lastFourDigits,
  expiryDate,
  annualFee,
}) => {
  const [creditCardOrder, setCreditCardOrder] = useState([])

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="bg-white shadow xs:rounded-lg min-w-full">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between">
              {inEditingMode ? (
                <div>
                  <label
                    htmlFor="bank"
                    className="sr-only"
                  >
                    Bank
                  </label>
                  <input
                    id="bank"
                    type="text"
                    placeholder={bank}
                    className="rounded-md border-0 ring-1 ring-inset ring-gray-300 p-1 placeholder:font-semibold"
                  />
                </div>
              ) : (
                <h3 className="text-base font-semibold leading-6 text-gray-900">{bank}</h3>
              )}
              {inEditingMode ? (
                <div>
                  <label
                    htmlFor="card-name"
                    className="sr-only"
                  ></label>
                  <input
                    id="card-name"
                    type="text"
                    className="rounded-md border-0 ring-1 ring-inset ring-gray-300 p-1"
                    placeholder={name}
                  />
                </div>
              ) : (
                <h4 className="text-sm">{name}</h4>
              )}
            </div>
            <div className="mt-5 flex bg-gray-50">
              <div className="rounded-md px-6 py-5 sm:flex sm:items-start sm:justify-between xs:w-full">
                <h4 className="sr-only">{network}</h4>
                <div className="sm:flex sm:items-start">
                  {/* network icon selection */}
                  {networkIcon(network)}
                  <div>
                    <div className="mt-3 sm:ml-4 sm:mt-0 flex xs:justify-start sm:justify-around">
                      <div className="text-sm font-medium text-gray-900 pt-1 ">Ending with {lastFourDigits}</div>
                      <div className="mt-1 ml-3 text-sm text-gray-600 sm:flex sm:items-center">Expires {expiryDate}</div>
                    </div>
                    <div className="text-sm text-gray-600 sm:flex sm:items-center xs:ml-0 sm:ml-4 mt-3">{`Reward Type: ${capitalizeFirst(rewardType)}`}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-around">
                {!inEditingMode ? (
                  <PencilSquareIcon
                    className="mr-2 text-orange-300 w-6 hover:text-gray-600"
                    onClick={isEditActive}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={clearEditActive}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                  </button>
                )}
                <TrashIcon className="w-6 text-red-500 hover:text-red-400" />

                {/* favorite toggle */}
                <button type="button">
                  <BookmarkIcon className={isFavorite ? 'w-6 text-green-500' : 'w-6'} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6 bg-blue-800 text-gray-50">
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="">Average Weekly Point Accumulation</dt>
          <dd className="">9000</dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="">Best Category</dt>
          <dd className="flex items-start gap-x-2">Groceries</dd>
        </div>
      </dl>
    </div>
  )
}

export default CreditCard
