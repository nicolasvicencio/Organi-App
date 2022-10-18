import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useUsers } from '../../context/UserContext'

export default function RequireAuth({ children }) {
	const { session } = useAuth()
	const { userData } = useUsers()
	const router = useRouter()

	useEffect(() => {
		if (!session) {
			router.push('/login')
			return
		} else {
			router.push('/inicio')
			return
		}
	}, [session])

	return (
		<>{children}</>
	)
}
