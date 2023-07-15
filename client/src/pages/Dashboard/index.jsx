import { useState } from 'react'
import DashboardNavBar from './DashboardNavBar'


const Dashboard = () => {
  
  const [isMobile,setIsMobile] = useState(true)

  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <h1>Wallet Dashboard</h1>
        </div>
        <div className="divider"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
          <h1>Credit Card Points Dashboard</h1>
        </div>
      </div>
      <DashboardNavBar />
    </div>
  )
}

export default Dashboard
