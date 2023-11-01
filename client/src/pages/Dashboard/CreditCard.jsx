import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
// import {} from 'react-icons/lia'
import { FaCcVisa } from 'react-icons/fa'
import { BookmarkIcon, EllipsisHorizontalIcon, PencilSquareIcon, TrashIcon, XCircleIcon } from '@heroicons/react/20/solid'
import APIService from '../../services/apiService'
import { capitalizeFirst } from '../../utils/capitalize'
import { AmexIcon, MasterCardIcon, VisaIcon } from '../../components/BankingIcons'
import { BankNameForm } from './BankNameForm'
import apiService from '../../services/apiService'
import { FaCcAmex } from 'react-icons/fa'
import find from 'lodash.find'

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
    return <FaCcAmex className="fill-blue-500 w-8 xs:h-auto xs:flex-shrink-0" />
  }
}

const CreditCard = ({
  bank,
  name,
  network,
  rewardType,
  setAllCreditCards,
  id,
  checkCardEditModeActive,
  editTargetCardId,
  clearEditActive,
  isFavorite,
  lastFourDigits,
  expiryDate,
  annualFee,
  getAllCards,
  allCreditCards,
  deleteCard,
  toggleFavorite,
}) => {
  const [creditCardOrder, setCreditCardOrder] = useState([])

  // const deleteCard = async (cardId) => {
  //   try {
  //     // const response = await apiService.deleteCard(id)
  //     // console.log(response)
  //     // await setAllCreditCards((prevCards) => prevCards.filter((card) => card.id !== id))
  //     setAllCreditCards(allCreditCards.filter((c) => c.id !== cardId))
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  const toggleFave = () => {
    const test = find(allCreditCards, { _id: id })
    console.log(test)
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
        <div className="bg-white shadow xs:rounded-lg min-w-full">
          <div className="px-4 py-5 sm:p-6">
            <div className="">
              <BankNameForm
                checkCardEditModeActive={checkCardEditModeActive}
                bank={bank}
                name={name}
                clearEditActive={clearEditActive}
                Id={id}
                getAllCards={getAllCards}
                setAllCreditCards={setAllCreditCards}
              />
            </div>
            <div className="mt-5 flex bg-gray-50">
              <div className="rounded-md px-6 py-5 sm:flex sm:items-start sm:justify-between xs:w-full">
                <h4 className="sr-only">{network}</h4>
                <div className="sm:flex sm:items-start">
                  {/* network icon selection */}
                  {networkIcon(network.toLowerCase())}
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
                {!checkCardEditModeActive ? (
                  <PencilSquareIcon
                    className="mr-2 text-grey-500 w-6 hover:text-gray-300"
                    onClick={editTargetCardId}
                    cursor="pointer"
                  />
                ) : (
                  <XCircleIcon
                    className="mr-2 text-orange-300 w-6 hover:text-gray-600"
                    onClick={clearEditActive}
                  />
                )}

                <TrashIcon
                  onClick={() => deleteCard(id)}
                  className="w-6 text-red-500 hover:text-red-400"
                  cursor="pointer"
                />
                <BookmarkIcon
                  className={isFavorite ? 'w-6 text-green-500' : 'w-6'}
                  onClick={() => toggleFave(id)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6 bg-blue-800 text-gray-50">
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="">Average Weekly Point Accumulation</dt>
          <dd className="">1000</dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="">Best Category</dt>
          <dd className="flex items-start gap-x-2">Travel</dd>
        </div>
      </dl>
    </div>
  )
}

export default CreditCard
