import { useUsers } from "../../context/UserContext"

const {userData} = useUsers()

export const api = {
	list: useMemo(async () => {
		if (userData) {
			const { data, error } = await supabase.from('event').select().eq('id_user', userData.id)
			if (error) console.log(error)
			if (data) {
				return data
			}
		}
	}, [userData]),
	
	


}