import React from 'react'
import img from '../../images/iceland.jpeg'

const LandingPage = () => {
  return (
    <div className="sm:bg-contain md:bg-cover lg:bg-cover hero min-h-screen" style={{backgroundImage: `url(${img})`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-6xl font-bold sm:text-7xl">Welcome to WalletPro</h1>
          <p className="mb-5">Ever wonder how you could travel for FREE?</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage