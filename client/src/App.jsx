import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useRoutingContext } from './context/RoutingContext/routingContext'
import { useAuthContext } from './context/AuthContext/authContext'
import LandingPage from './pages/Home/LandingPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //for testing
  const { currentPage } = useRoutingContext()
  const { isAuthenticated } = useAuthContext()

  return (
    <>
      <Navbar />
      {/* <LandingPage /> */}
      {currentPage === 'LandingPage' && <Home />}
      {/* {isAuthenticated === true && <Dashboard />} */}
      {/* <Dashboard /> */}
      {/* {!isLoggedIn && <Dashboard />} */}
    </>
  )
}

export default App
