import React, { useEffect, useState } from 'react'
import UserPanels from '../../components/UserPanel/UserPanels'
import { BsCircle, BsCircleFill } from 'react-icons/bs'


const HABITS = [
	{
		id: 1,
		name: 'Hacer ejercicio',
		array: new Array(7).fill('✗'),
		finish: 60,
		streak: 4,
		maximun_streak: 10,
		color: 'red',
		creation_date: new Date(),
		priority: 3
	},
	{
		id: 2,
		name: 'Dormir temprano',
		array: new Array(7).fill('✗'),
		finish: 60,
		streak: 5,
		maximun_streak: 10,
		color: 'blue',
		creation_date: new Date(),
		priority: 3
	},
	{
		id: 3,
		name: 'Estudiar',
		array: new Array(7).fill('✗'),
		finish: 60,
		streak: 2,
		maximun_streak: 10,
		color: 'green',
		creation_date: new Date(),
		priority: 3
	},
	{
		id: 4,
		name: 'Leer',
		array: new Array(7).fill('✗'),
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
	const check = '✓'

	const handleClick = (habit, index) => {
		const draft = habits.map(el => {
			if (el.id === habit.id) {
				let newArray = el.array
				newArray[index] === '✗' ? newArray[index] = check : newArray[index] = '✗'
				console.log(el)

				return {
					...el,
					array: newArray,
				}
			}
			return el
		})

		setHabits(draft)
	}


	const handleCreate = () => { }

	return (
		<UserPanels>
			<div className="background">
				<h1 className="title">Habitos</h1>
				<article className='cardBg p-6 '>
					<div className='flex gap-4 mb-6'>
						<input type="text" name="" id="" className='inputLabel' placeholder='Nuevo habito' />
						<button onClick={handleCreate} className='button-light p-2'>Crear</button>
					</div>
					<table className='w-full border-1 border-gray-800 '>
						<thead className='rounded-md'>
							<tr className='bg-gray-800 text-white font-bold '>
								<th  className='py-5'>Habitos</th>
								<th  className='py-5'>Lun</th>
								<th  className='py-5'>Mar</th>
								<th  className='py-5'>Mie</th>
								<th  className='py-5'>Jue</th>
								<th  className='py-5'>Vie</th>
								<th  className='py-5'>Sab</th>
								<th  className='py-5'>Dom</th>
							</tr>
						</thead>
						<tbody>
							{
								habits.map((habit => (
									<tr key={habit.id}className='w-full border-b-2'>
										<td className='p-4'>
											<p className='font-semibold'>{habit.name}</p>
											<span className='font-light'>Racha: {habit.streak} </span>
										</td>
										{habit.array.map((el, index) => <td key={index} onClick={() => handleClick(habit, index)} className='px-3 py-2 hover:bg-zinc-300 text-center'>{el}</td>)}
									</tr>
								)))}
						</tbody>
					</table>
				</article>
			</div>
		</UserPanels>
	)
}
