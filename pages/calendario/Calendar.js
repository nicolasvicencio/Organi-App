import React from 'react'
import UserPanels from '../../components/UserPanel/UserPanels'
import Scheduler from './Scheduler'


export default function Calendar() {
	const month = new Intl.DateTimeFormat('es-CL', { month: 'long' }).format(new Date());

	return (
		<UserPanels>
			<div className="background">
				<h2 className="title">Calendario</h2>
			
					<h3 className='text-center text-5xl my-6 font-semibold cardBg py-2'>{month}</h3>
					<Scheduler />

				</div>
		
		</UserPanels>
	)
}
