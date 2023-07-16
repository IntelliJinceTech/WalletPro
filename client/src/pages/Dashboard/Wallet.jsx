import CreditCard from "./CreditCard"
import Categories from './CreditCardCategories'

const Wallet = () => {
  return (

      <div className="flex flex-col lg:flex-row px-3 mx-auto">
          <div className="grid grid-cols-3 gap-3 max-h-1/2">
            <CreditCard />
            <Categories />
          </div>
          
          {/* <CreditCard  />
          <div className="border-solid border-2 border-sky-300 col-span-2">Categories</div> */}


      </div>

  )
}

export default Wallet