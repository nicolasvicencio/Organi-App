import { useEffect } from 'react'
import RequireAuth from '../components/RequireAuth/RequireAuth'
import AuthContextProvider from '../context/AuthContext'
import UserContextProvider from '../context/UserContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <UserContextProvider>
        <RequireAuth>
          <Component {...pageProps} />
        </RequireAuth>
      </UserContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
