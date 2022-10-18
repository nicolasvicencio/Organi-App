import React, {createContext, useState, useContext, useEffect, useMemo} from 'react'
import { supabase } from '../supabase/connection'


export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
	const [session, setSession] = useState()

	const getSession = async() => {
		const {data, error} = await supabase.auth.getSession()
		if(error) return error
		if(data.session){
			setSession(data.session.access_token)
		}
	}

	const signOutUser = async () => {
		const {error} = await supabase.auth.signOut()
		error && error
	}

	useEffect(() => {
		getSession()
	}, [session])

	const values = useMemo(() => ({
		session,
		setSession,
		signOutUser,
		getSession
	}),[session])

	return (
		<AuthContext.Provider value={values}>
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