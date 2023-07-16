const CreditCard = () => {
  return (
    <div className="card h-1/2 bg-primary text-primary-content rounded w-5/6 place-self-center">
      <div className="card-body rounded">
        <h2 className="card-title">Chase</h2>
        <p>Sapphire Preferred</p>
        <div className="card-actions justify-end">
          <button className="btn">VISA</button>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
