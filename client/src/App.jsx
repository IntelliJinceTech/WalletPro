import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //for testing

  useEffect(() => {
    themeChange(false)
  }, [])

  const selectTheme = () => {
    <select data-choose-theme>
    <option value="">Default</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="corporate">Corporate</option>
    <option value="business">Business</option>
  </select>
  }

  return (
    <>
      <Navbar/>
      {/* <Home  /> */}
      {!isLoggedIn && <Dashboard />}
    </>
  )
}

export default App
