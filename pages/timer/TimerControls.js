import React, { useEffect, useState } from 'react'
import NumberSelector from './NumberSelector'
import ColorSelector from './ColorSelector'

export default function TimerControls({ setData , data}) {
	const [focus, setFocus] = useState(data.focus)
	const [rest, setRest] = useState(data.rest)
	const [sessions, setSessions] = useState(data.sessions)
	const [restSessions, setRestSessions] = useState(data.restSessions)
	const [tag, setTag] = useState(data.tag)
	const [colorTag, setColorTag] = useState(data.colorTag)

useEffect(() => {
	setData({
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
					<NumberSelector defaultValue={focus} handler={x => setFocus(x)} />
				</div>
				<div>
					<p className='timerText'>Descanso</p>
					<NumberSelector defaultValue={rest} handler={x => setRest(x)} />
				</div>
			</div>
			<div className='flex gap-6'>
				<div>
					<p className='timerText'>Sesiones</p>
					<NumberSelector defaultValue={sessions} handler={x => setSessions(x)} />
				</div>
				<div>
					<p className='timerText'>Descanso sesiones</p>
					<NumberSelector defaultValue={restSessions} handler={x => setRestSessions(x)} />
				</div>
			</div>
			<div>
				<ColorSelector setTag={x => setTag(x)} setColorTag={x => setColorTag(x)} />
			</div>
		</div>
	)
}
