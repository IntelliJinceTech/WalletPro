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

  useEffect(() => {
    // check authentication status
    async function getUser() {
      try {
        const data = await DataService.getUser()
        if (data.isLoggedIn) {
          console.log('we are logged in as per isLoggedIn data: ', data.isLoggedIn)
          setIsAuthenticated(true)
          console.log('authentication state: ', isAuthenticated)
        }
      } catch (error) {
        console.log(`the useEffect for checking auth status did not work: `, error)
      }
    }
    getUser()
  }, [])

  // useEffect(() => {
  //   console.log('authentication state: ', isAuthenticated)
  // }, [isAuthenticated])

  const login = async (loginData) => {
    // const login = async () => {
    console.log('clicked to login', 'loginData: ', loginData)

    try {
      const response = await DataService.login(loginData)
      // const response = await DataService.login({
      //   email: 'cjin@gmail.com',
      //   password: 'ajumbleoftesting',
      // })
      setUser(response.data.user)
      console.log(response)

      setCurrentPage('dashboard')

      setIsAuthenticated(true)
      // console.log('authentication: ', isAuthenticated)
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
      // console.log(user)
    } catch (error) {
      console.error('Logout Error', error.message)
    }
  }

  // useMemo is a Hook that lets you cache the result of a calculation between re-renders.
  const authValue = useMemo(() => ({ isAuthenticated, login, logout }), [isAuthenticated])

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export { useAuthContext, AuthProvider }
