import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../supabase/connection";
import { useAuth } from "./AuthContext";


export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
	const { session } = useAuth()
	const [userData, setUserData] = useState()

	const getUserData = async () => {
		if (session) {
			const { data: { user } } = await supabase.auth.getUser(session)
			const { data, error } = await supabase.from('users').select().eq('id', user.id)
			error && console.log(error)
			data && setUserData(data[0])
		}
	}

	const postUserNames = async (firstName, lastName) => {
		if (userData) {
			const { data, error } = await supabase.from('users').update({ first_name: firstName, last_name: lastName }).eq('id', userData.id)
			if (error) console.log(error)
			if (data) {
				const { data, error } = await supabase.from('components_user').insert([{ user_id: userData.id }])
				if (error) console.error
			}
		}
	}

	useEffect(() => {
		getUserData()
	}, [userData, session])

	return (
		<UserContext.Provider value={{
			userData,
			setUserData,
			postUserNames,
			getUserData
		}
		}>
			{children}
		</UserContext.Provider>
	)
}

export const useUsers = () => {
	const context = useContext(UserContext)
	if (!context) console.log('Error deploying userContext!!')
	return context
}

export default UserContextProvider