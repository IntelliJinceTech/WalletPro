import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext/authContext'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false) //for testing
  const { user, setUser, isAuthenticated } = useAuthContext()

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </>
  )
}

export default App
