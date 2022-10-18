import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useUsers } from '../../context/UserContext'

export default function RequireAuth({ children }) {
	const { session } = useAuth()
	const { userData } = useUsers()
	const router = useRouter()



	useEffect(() => {
		if (session) {
			router.push('/inicio')
		} else {
			router.push('/login')
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [session])

	return (
		<>{children}</>
	)
}
