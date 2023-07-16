import CreditCard from "./CreditCard"
import Categories from './CreditCardCategories'

const Wallet = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row px-3 mx-auto mb-5">
          <div className="grid grid-cols-3 gap-3 max-h-1/2">
            <CreditCard />
            <Categories />
          </div>
      </div>
      <div className="flex flex-col lg:flex-row px-3 mx-auto mb-5">
          <div className="grid grid-cols-3 gap-3 max-h-1/2">
            <CreditCard />
            <Categories />
          </div>
      </div>
      </div>

  )
}

export default Wallet