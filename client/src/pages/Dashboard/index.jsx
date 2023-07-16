import { useState } from 'react'
import DashboardNavBar from './DashboardNavBar'
import Wallet from './Wallet'

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(true)

  return (
    <div className='min-h-screen'>
      <div className="flex flex-col w-full border-opacity-50">
        <Wallet />
        {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <h1>Credit Card Database</h1>
        </div> */}
      </div>
      {isMobile && <DashboardNavBar />}
    </div>
  )
}

export default Dashboard
