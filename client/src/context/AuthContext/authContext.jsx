import { createContext, useContext, useState, useMemo, useEffect } from 'react'
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
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function authCheck() {
      try {
        const response = await DataService.getUser()
        if (response.data) {
          setUser(response.data)
          setIsAuthenticated(true)
          console.log(response)
        }
      } catch (err) {
        console.log(`the useEffect for checking auth status did not work: `, err)
      }
    }
    authCheck()
  }, [])

  // useEffect(() => {
  //   console.log('isAuthenticated: ', isAuthenticated)
  // }, [isAuthenticated])

  const signup = async (data) => {
    try {
      const response = await DataService.signup(data)
      if (response.status >= 200 && response.status < 300) {
        const { user } = response.data
        console.log(user)
        setUser(user)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

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
      setUser(null)
      // console.log(user)
    } catch (error) {
      console.error('Logout Error', error.message)
    }
  }

  // useMemo is a Hook that lets you cache the result of a calculation between re-renders.
  const authValue = useMemo(() => ({ isAuthenticated, login, logout, setIsAuthenticated, signup }), [isAuthenticated])

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export { useAuthContext, AuthProvider }
