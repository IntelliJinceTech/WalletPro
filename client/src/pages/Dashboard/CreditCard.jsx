const CreditCard = () => {
  return (
    <div className="card h-1/2 bg-primary shadow-xl text-primary-content rounded w-5/6 place-self-center">
      <div className="card-body rounded">
        <h2 className="card-title">Chase</h2>
        <p>Sapphire Preferred</p>
        <div className="card-actions justify-end">
          <button className="btn">VISA</button>
        </div>
      </div>
      
      <button className="mt-10 btn btn-outline btn-error">Delete Card</button>
    </div>
  )
}

export default CreditCard
