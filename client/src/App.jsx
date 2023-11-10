import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useRoutingContext } from './context/RoutingContext/routingContext'
import { useAuthContext } from './context/AuthContext/authContext'
import LandingPage from './pages/Home/LandingPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) //for testing
  const { currentPage } = useRoutingContext()
  const { user, setUser } = useAuthContext()
  const { isAuthenticated } = useAuthContext()

  return (
    <BrowserRouter>
      <Navbar />
      {/* <LandingPage /> */}
      {/* {currentPage === 'LandingPage' && <Home />} */}
      {/* {isAuthenticated === true && <Dashboard />} */}
      {/* <Dashboard /> */}
      {/* {!isLoggedIn && <Dashboard />} */}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
        />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
