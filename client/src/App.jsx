import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'
import { useRoutingContext } from './context/RoutingContext/routingContext'
import { useAuthContext } from './context/AuthContext/authContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //for testing
  const { currentPage } = useRoutingContext()
  const { isAuthenticated } = useAuthContext()

  useEffect(() => {
    themeChange(false)
  }, [])

  const selectTheme = () => (
    <select data-choose-theme>
      <option value="">Default</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="corporate">Corporate</option>
      <option value="business">Business</option>
    </select>
  )

  return (
    <>
      <Navbar />
      {/* {currentPage === 'LandingPage' && <Home />} */}
      {/* {isAuthenticated === true && <Dashboard />} */}
      <Dashboard />
      {/* {!isLoggedIn && <Dashboard />} */}
    </>
  )
}

export default App
