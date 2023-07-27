import { createContext, useContext, useState, useMemo, useEffect } from 'react'
import { useRoutingContext } from '../RoutingContext/routingContext'
import axios from 'axios'
import DataService from '../../services/apiService'

// Create a named context
const AuthContext = createContext()

// Custom hook to allow components to consume the context(authentication)
const useAuthContext = () => useContext(AuthContext)

// Creating a provider to wrap components that needs to access Auth/User's data
// a provider is a component that allows you to share context with its nested components
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { setCurrentPage } = useRoutingContext() // temp
  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   async function getUser() {
  //     try {
  //       const data = await DataService.getUser()
  //       if (data.isLoggedIn) {
  //         console.log('logged in')
  //         setIsAuthenticated(true)
  //       }
  //       console.log(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getUser()
  // }, [isAuthenticated])

  const login = async (loginData) => {
    console.log('clicked to login')

    try {
      const response = await DataService.login(loginData)
      setUser(response.data.user)
      console.log(response)

      setCurrentPage('dashboard')

      setIsAuthenticated(true)
      console.log(isAuthenticated)
    } catch (err) {
      console.error('login error', err.message)
    }
  }

  const logout = async () => {
    try {
      await DataService.logout()
      setIsAuthenticated(false)
      setCurrentPage('LandingPage')
      setUser(null)
      console.log(user)
    } catch (error) {
      console.error('Logout Error', error.message)
    }
  }

  // useMemo is a Hook that lets you cache the result of a calculation between re-renders.
  const authValue = useMemo(() => ({ isAuthenticated, login, logout }), [isAuthenticated])

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export { useAuthContext, AuthProvider }