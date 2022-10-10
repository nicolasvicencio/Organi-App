import AuthContextProvider from '../context/AuthContext'
import UserContextProvider from '../context/UserContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
