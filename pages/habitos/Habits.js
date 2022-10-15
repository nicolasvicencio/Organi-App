import React, { useState } from 'react'
import UserPanels from '../../components/UserPanel/UserPanels'
import { BsCircle, BsCircleFill } from 'react-icons/bs'


const HABITS = [
	{
		name: 'Hacer ejercicio',
		finish: 60,
		streak: 4,
		maximun_streak: 10,
		color : 'red',
		creation_date: new Date(),
		priority: 3
	},
	{
		name: 'Dormir temprano',
		finish: 60,
		streak: 5,
		maximun_streak: 10,
		color: 'blue',
		creation_date: new Date(),
		priority: 3
	},
	{
		name: 'Estudiar',
		finish: 60,
		streak: 2,
		maximun_streak: 10,
		color: 'green',
		creation_date: new Date(),
		priority: 3
	},
	{
		name: 'Leer',
		finish: 60,
		streak: 8,
		maximun_streak: 10,
		color: 'yellow',
		creation_date: new Date(),
		priority: 3
	}
]


export default function Habits() {
	const [habits, setHabits] = useState(HABITS)

	const x = 'x'
	const check = '✓'
	const array = new Array(7)

	const handleCreate = () => { }

	return (
		<UserPanels>
			<div class="background">
				<h1 class="title">Habitos</h1>
				<article className='cardBg p-6'>
					<div className='flex gap-4'>
						<input type="text" name="" id="" className='inputLabel' placeholder='Nuevo habito' />
						<button onClick={handleCreate} className='button-light p-2'>Crear</button>
					</div>
					{
						habits.map(habit => (
							<div class="flex justify-between p-4">
								<div className='flex-1'>{habit.name}</div>
								<div className='flex-1'>{check.repeat(habit.streak).padEnd(7, x)}</div>
							
							</div>
						))
					}
				</article>
			</div>
		</UserPanels>
	)
}
