import React, { useEffect, useState } from 'react'
import { useUsers } from '../../context/UserContext'
import { supabase } from '../../supabase/connection'
import DrawerPanelItems from './DrawerPanelItems'
import { types } from './IconsDrawerItem'

export default function DrawerPanel() {
	const { userData } = useUsers()
	const [list, setList] = useState()
	
	const getListCollections = async() => {
		if(userData){
			const {data, error} = await supabase.from('components_user').select().eq('user_id', userData.id)
			if(error) console.log(error)
			if(data){
				console.log(data)
				// return data[0].components_list
			}
		}
	}

	const getItemCollections = async(array) => {
		// if(userData){
		// 	const {data, error} = await supabase.from('components').select().in('id', array)
		// 	if(error) return error
		// 	if(data) return data
		// }
		
	}


	useEffect(() => {
		if(userData)
		getListCollections().then((array) => {
			getItemCollections(array).then(data => {
				setList(data)
			})
		})
	}, [])


	return (
		<div className=" min-h-screen bg-gray-200 shadow-2xl pt-10 basis-2/12 ">
			<div className="flex flex-col justify-between">
				{!list 
				? null 
				: <ul>
					{/* {list.map(component => <li><DrawerPanelItems key={component.id} name={component.name} /></li>)}			 */}
				</ul>}
				
			</div>
		</div>
	)
}
