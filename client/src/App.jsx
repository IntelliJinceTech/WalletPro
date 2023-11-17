import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext/authContext'
import LandingPage from './pages/Home/LandingPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //for testing
  const { user, setUser } = useAuthContext()
  const { isAuthenticated } = useAuthContext()

  return (
    <BrowserRouter>
      <Navbar />
      {/* <LandingPage /> */}
      {/* {isAuthenticated === true && <Dashboard />} */}
      {/* <Dashboard /> */}
      {/* {!isLoggedIn && <Dashboard />} */}
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Home />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignUp />}
        />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/signup" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
