import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useUsers } from '../../context/UserContext'
import { supabase } from '../../supabase/connection'

export default function RequireAuth({ children }) {
	const { session } = useAuth()
	const {userData} = useUsers()
	const router = useRouter()

	useEffect(() => {
		if(!session || !userData) {
			router.push('/login')
		}else{
			router.push('/inicio')
		}
	}, [session])

	return (
		<>{children}</>
	)
}
