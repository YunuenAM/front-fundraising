import { createContext, useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

// Create the context
const AuthContext = createContext()

// Create the context provider
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [userPayload, setUserPayload] = useState(null)

  // function that help to do login

  const login = (token) => {
    // To save in the localStorage
    localStorage.setItem('token', token)

    // To decode token to obtain users data
    const decoded = jwtDecode(token)
    setUserPayload(decoded)
    setIsAuth(true)
  }

  const signoff = () => {
    // To eliminate token from local storage
    localStorage.removeItem('token')
    setUserPayload(null) // To eliminate the payload from the state
    setIsAuth(false) // I'm logged out
  }

  useEffect(() => {
    // to recover the token if the token does not exist it will return nothing
    const token = localStorage.getItem('token')
    if (token) {
      const decoded = jwtDecode(token)
      setUserPayload(decoded)
      setIsAuth(true)
    }
  }, [])
  return (
    <AuthContext.Provider value={{ isAuth, userPayload, login, signoff }}>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
