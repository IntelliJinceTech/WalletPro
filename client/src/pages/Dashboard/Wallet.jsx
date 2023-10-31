import { useContext, useState } from 'react'
import CreditCard from './CreditCard'
import Categories from './CreditCardCategories'
import { EditingModeContext } from '../../context/EditingModeContext/EditingModeContext'

const Wallet = ({ allCreditCards, setAllCreditCards, getAllCards }) => {
  const { setEditingMode, editingMode, toggleEditingMode } = useContext(EditingModeContext)
  const [activeEditModeId, setActiveEditModeId] = useState()
  const [favoriteCard, setFavorateCard] = useState(false)

  return (
    <div>
      <div className="flex xs:flex-col lg:flex-row px-3 mx-auto mb-5 place-content-center sm:min-w-max">
        <div className="grid  lg:grid-cols-3 gap-3 max-h-1/2">
          {/* <CreditCards allCreditCards={allCreditCards} setAllCreditCards={setAllCreditCards} /> */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8">
            {allCreditCards.map((card) => (
              <CreditCard
                key={card._id}
                bank={card.bank}
                name={card.name}
                network={card.network}
                rewardType={card.rewardType}
                setAllCreditCards={setAllCreditCards}
                id={card._id}
                isFavorite={card.isFavorite}
                lastFourDigits={card.lastFourDigits}
                expiryDate={card.expiryDate}
                annualFee={card.annualFee}
                checkCardEditModeActive={activeEditModeId === card._id}
                editTargetCardId={() => setActiveEditModeId(card._id)}
                clearEditActive={() => setActiveEditModeId(null)}
                getAllCards={getAllCards}
                setFavorateCard={setFavorateCard}
                favoriteCard={favoriteCard}
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
