import CreditCard from './CreditCard'
import Categories from './CreditCardCategories'

const Wallet = () => {
  return (
    <div>
      <div className="flex xs:flex-col lg:flex-row px-3 mx-auto mb-5 place-content-center">
        {/* <div className=""> */}
        <div className="grid lg:grid-cols-3 gap-3 max-h-1/2">
          <CreditCard />
          <div className="sm:hidden ">
            <Categories />
          </div>
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
