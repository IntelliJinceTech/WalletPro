import { useContext, useState } from 'react'
import CreditCard from './CreditCard'
import Categories from './CreditCardCategories'
import { EditingModeContext } from '../../context/EditingModeContext/EditingModeContext'

const Wallet = ({ allCreditCards, setAllCreditCards }) => {
  const { setEditingMode, editingMode, toggleEditingMode } = useContext(EditingModeContext)
  const [activeEditModeIndex, setActiveEditModeIndex] = useState()
  console.log(allCreditCards)

  return (
    <div>
      <div className="flex xs:flex-col lg:flex-row px-3 mx-auto mb-5 place-content-center">
        {/* <div className=""> */}
        <div className="grid lg:grid-cols-3 gap-3 max-h-1/2">
          {/* <CreditCards allCreditCards={allCreditCards} setAllCreditCards={setAllCreditCards} /> */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8">
            {allCreditCards.map((card, idx) => (
              <CreditCard
                key={card._id}
                bank={card.bank}
                name={card.name}
                network={card.network}
                rewardType={card.rewardType}
                setAllCreditCards={setAllCreditCards}
                id={card.id}
                isFavorite={card.isFavorite}
                inEditingMode={activeEditModeIndex === idx}
                isEditActive={() => setActiveEditModeIndex(idx)}
                clearEditActive={() => setActiveEditModeIndex(null)}
              />
            ))}
          </div>
          {/* <div className="sm:hidden ">
            <Categories />
          </div> */}
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row px-3 mx-auto mb-5 place-content-center">
        <div className="">
          <CreditCard />
          <Categories />
        </div>
      </div> */}
    </div>
  )
}

export default Wallet
