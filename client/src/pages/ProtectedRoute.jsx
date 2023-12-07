import React from 'react'
import { useAuthContext } from '../context/AuthContext/authContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext()
  if (!user) {
    // user is not authenticated
    return (
      <Navigate
        to="/"
        replace
      />
    )
  }
  return children
}

export default ProtectedRoute
