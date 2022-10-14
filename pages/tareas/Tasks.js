import React, { useState, useEffect, useMemo } from 'react'
import UserPanels from '../../components/UserPanel/UserPanels'
import Link from 'next/link'
import { useUsers } from '../../context/UserContext'
import { supabase } from '../../supabase/connection'
import Spinner from '../../components/Spinner/Spinner'
import TaskItem from './TaskItem'

export default function Tasks() {
	const { userData } = useUsers()
	const [error, setError] = useState()
	const [tasks, setTasks] = useState()
	const [filter, setFilter] = useState(3)

	const getTasks = useMemo(async () => {
		if (userData) {
			const { data, error } = await supabase.from('task').select().eq('user_id', userData.id)
			if (error) return setError(error)
			if (data) return setTasks(data)
		}
	}, [tasks])

		
	const handleFilter = (e) => setFilter(e.target.event)
	
	useEffect(() => {
		getTasks
	}, [userData, tasks])
	
	return (
		<UserPanels>
			<div className="background">
				<h2 className="title">Tareas</h2>
				<div class="flex gap-3 justify-start p-6 cardBg">
					<Link href={'/tareas/crear'}>
						<a className="button-light p-2">Crear tarea</a>
					</Link>

					<div className='flex items-center gap-2 mx-6'>
						<p>Filtrar: </p>
						<select name="state" id="state" className='profileInput w-fit' onClick={e => handleFilter(e)}>
							<option value="3">Mostrar todas</option>
							<option value="2">Solo terminadas</option>
							<option value="1">Solo en Proceso</option>
						</select>
					</div>

				</div>
				<div className="grid grid-cols-4 place-content-evenly gap-6 mt-5 p-6 cardBg">
					{!tasks
						? <Spinner />
						: tasks.map(task => <TaskItem key={task.id} data={task}/> )
					}
			
					
				
				</div>
			</div>
		</UserPanels>
	)
}
