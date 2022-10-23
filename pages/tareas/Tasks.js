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
	const [filter, setFilter] = useState('3')
	const [matches, setMatches] = useState()

	const getTasks = useMemo(async () => {
		if (userData) {
			const { data, error } = await supabase.from('task').select().eq('user_id', userData.id)
			if (error) return setError(error)
			if (data) return setTasks(data)
		}
	}, [userData])


	const handleFilter = (e) => {
		setFilter(e.target.value)
	}

	useEffect(() => {
		getTasks
	}, [tasks, getTasks, matches])

	useEffect(() => {
		if (tasks) {
			if (filter === '2') {
				const newTasks = tasks.filter(task => task.state === 2)
				setMatches(newTasks)
			} else if (filter === '1') {
				const newTasks = tasks.filter(task => task.state === 1)
				setMatches(newTasks)
			} else {
				setMatches(tasks)
			}
		}

	}, [filter, tasks, matches])

	return (
		<UserPanels>
			<div className="background">
				<h2 className="title">Tareas</h2>
				<div className="flex gap-3 justify-start p-6 cardBg">
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
					{!matches
						? <Spinner />
						: matches.map(task => <TaskItem key={task.id} data={task} />)
					}

				</div>
			</div>
		</UserPanels>
	)
}
