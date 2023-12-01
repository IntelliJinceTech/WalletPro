import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext/authContext'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false) //for testing
  const { user, setUser } = useAuthContext()
  const { isAuthenticated } = useAuthContext()

  return (
    <>
      <Navbar />
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
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/signup" />}
        />
      </Routes>
    </>
  )
}

export default App
