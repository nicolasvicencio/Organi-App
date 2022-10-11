import AuthContextProvider from '../context/AuthContext'
import UserContextProvider from '../context/UserContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <div className='overflow-hidden'>
          <Component {...pageProps} />
        </div>
      </UserContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
