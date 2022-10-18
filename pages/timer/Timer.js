import React, { useCallback, useEffect, useMemo, useState } from 'react'
import UserPanels from '../../components/UserPanel/UserPanels'
import TimerFocus from './TimerDisplay'
import TimerControls from './TimerControls'


export default function Timer() {
	const [showTimer, setShowTimer] = useState(false)
	const [data, setData] = useState({
		focus: 30,
		rest: 5,
		sessions: 4,
		tag: 'Sin Etiqueta',
		colorTag: '#4caf50'
	}
	)
	const handleSetData = useCallback((data) => setData(data))

	return (
		<UserPanels>
			<div className="background">
				<h2 className="title">Timer</h2>
				<div className=" rounded-xl bg-white p-7">
					{/* <p>Configura tu timer</p> */}
					<article className='flex justify-between ml-6 '>
						<TimerControls handleSetData={handleSetData} />
						<div className='flex flex-col items-center gap-6 p-3'>
							<div>
								{showTimer
									? <TimerFocus timerData={data} />
									: <div className='flex flex-col items-center text-center justify-center mt-20'>
										<p>Presiona el boton iniciar para activar el temporizador!</p>
										<button onClick={() => setShowTimer(true)} className='p-2 bg-zinc-600 text-white rounded-md my-4'>Iniciar</button>
									</div>
								}
							</div>
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
