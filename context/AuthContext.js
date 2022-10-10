import React, {createContext, useState, useContext, useEffect} from 'react'
import { supabase } from '../supabase/connection'
import { useUsers } from './UserContext'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
	const [logInData, setLogInData] = useState()
	const [session, setSession] = useState()

	const getSession = async() => {
		const {data, error} = await supabase.auth.getSession()
		if(error) console.log(error)
		if(data.session){
			setSession(data.session.access_token)
		}
	}

	const signOutUser = async () => {
		const {error} = await supabase.auth.signOut()
		error && console.log(error)
	}

	useEffect(() => {
		getSession()
	}, [])

	return (
		<AuthContext.Provider value={{
			session,
			signOutUser,
			getSession
		}}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		console.error('Error deploying Auth Context!!!');
	}
	return context
}

export default AuthContextProvider