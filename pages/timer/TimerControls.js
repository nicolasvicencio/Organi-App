import React, { memo, useEffect, useState } from 'react'
import NumberSelector from './NumberSelector'
import ColorSelector from './ColorSelector'

 function TimerControls({ handleSetData}) {
	const [focus, setFocus] = useState(30)
	const [rest, setRest] = useState(5)
	const [sessions, setSessions] = useState(4)
	const [restSessions, setRestSessions] = useState(15)
	const [tag, setTag] = useState('Sin Etiqueta')
	const [colorTag, setColorTag] = useState('#4caf50')

useEffect(() => {
	handleSetData({
		focus,
		rest,
		sessions,
		restSessions,
		tag,
		colorTag
	})
},[focus, rest, sessions, restSessions, tag, colorTag])

	return (
		<div className='flex flex-col gap-10 mt-4 '>
			<div className='flex gap-6'>
				<div>
					<p className='timerText'>Enfoque</p>
					<NumberSelector defaultValue={focus} handler={setFocus} gap={5} />
				</div>
				<div>
					<p className='timerText'>Descanso</p>
					<NumberSelector defaultValue={rest} handler={setRest} gap={1} />
				</div>
			</div>
			<div className='flex gap-6'>
				<div>
					<p className='timerText'>Sesiones</p>
					<NumberSelector defaultValue={sessions} handler={setSessions} gap={1} />
				</div>
				<div>
					<p className='timerText'>Descanso sesiones</p>
					<NumberSelector defaultValue={restSessions} handler={setRestSessions} gap={5} />
				</div>
			</div>
			<div>
				<ColorSelector setTag={setTag} setColorTag={setColorTag} />
			</div>
		</div>
	)
}

export default memo(TimerControls)