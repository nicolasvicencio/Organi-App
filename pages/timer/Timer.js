import React, { useState } from 'react'
import UserPanels from '../../components/UserPanel/UserPanels'
import { TimerFocus, TimerInactive, TimerRest } from './TimerDisplay'
import TimerControls from './TimerControls'


export default function Timer() {
	const [data, setData] = useState({
		focus: 30,
		rest: 5,
		sessions: 4,
		restSessions: 15,
		tag: 'Default',
		colorTag: '#1f2937' 
	})
	const [isStart, setIsStart] = useState(false)
	const [isRest, setIsRest] = useState(false)

	const startTimer = () => setIsStart(!isStart)
	console.log('render!')
	return (
		<UserPanels>
			<div className="background">
				<h2 className="title">Timer</h2>
				<div className=" rounded-xl bg-white p-7">
					{/* <p>Configura tu timer</p> */}
					<article className='flex justify-between'>
						<TimerControls setData={setData} data={data}/>
						<div className='flex flex-col items-center gap-6 p-3'>
							<div>
								{
									isStart
									? <TimerFocus focus={data.focus} session={data.sessions} restSession={data.restSessions} color={data.colorTag} isStart={isStart} setIsStart={setIsStart}/>
										:<TimerInactive color={data.color} focus={data.focus} />
								}
							
							</div>
							 <p className={`font-bold text-xl bg-[${data.colorTag}]`}>{data.tag === 'Default' ? 'Etiqueta' : data.tag}</p> 
							<button onClick={startTimer} className='button'>{isStart ? 'Terminar' : 'Comenzar'}</button>
						</div>
						<div>
							<p></p>
						</div>
					</article>
				</div>
			</div>

		</UserPanels>
	)
}
