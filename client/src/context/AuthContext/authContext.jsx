import { createContext, useContext, useState, useMemo, useEffect } from 'react'
import axios from 'axios'
import DataService from '../../services/apiService'
import { useNavigate } from 'react-router-dom'

// Create a named context
const AuthContext = createContext()

// Custom hook to allow components to consume the context(authentication)
const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function authCheck() {
      try {
        const response = await DataService.getUser()

        const userData = await response.data.user
        const loggedInStatus = await response.data.isLoggedIn

        if (loggedInStatus) {
          setIsAuthenticated(true)
          setUser(userData)
          navigate('/dashboard')
        }
      } catch (err) {
        console.log(`the useEffect for checking auth status did not work: `, err)
      }
    }
    authCheck()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated)
      console.log(user)
      navigate('/dashboard')
    }
  }, [isAuthenticated])

  const signup = async (data) => {
    try {
      const response = await DataService.signup(data)
      console.log(response)
      if (response.status >= 200 && response.status < 300) {
        const { user } = response.data
        console.log(user)
        setUser(user)
        setIsAuthenticated(true)
        navigate('/dashboard')
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
      navigate('/dashboard')
    } catch (err) {
      console.error('login error', err.message)
    }
  }

  const logout = async () => {
    try {
      await DataService.logout()
      setIsAuthenticated(false)
      setUser(null)
      navigate('/', { replace: true })
    } catch (error) {
      console.error('Logout Error', error.message)
    }
  }

  // useMemo is a Hook that lets you cache the result of a calculation between re-renders.
  const authValue = useMemo(() => ({ user, login, logout, setIsAuthenticated, signup }), [user])

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export { useAuthContext, AuthProvider }
