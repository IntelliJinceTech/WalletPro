import React from 'react'
import { useAuthContext } from '../context/AuthContext/authContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext()
  if (!user) {
    // user is not authenticated
    return (
      <Navigate
        to="/signup"
        replace
      />
    )
  }
  return children
}

export default ProtectedRoute
