import CreditCard from './CreditCard'
import Categories from './CreditCardCategories'

const Wallet = ({ allCreditCards, setAllCreditCards }) => {
  return (
    <div>
      <div className="flex xs:flex-col lg:flex-row px-3 mx-auto mb-5 place-content-center">
        {/* <div className=""> */}
        <div className="grid lg:grid-cols-3 gap-3 max-h-1/2">
          {/* <CreditCards allCreditCards={allCreditCards} setAllCreditCards={setAllCreditCards} /> */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8">
            {allCreditCards.map((card) => (
              <CreditCard key={card.id} bank={card.bank} name={card.name} network={card.network} rewardType={card.rewardType} setAllCreditCards={setAllCreditCards} id={card.id} />
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
