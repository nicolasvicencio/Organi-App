import { CountdownCircleTimer } from 'react-countdown-circle-timer'


export const TimerFocus = ({ color, focus, rest, sesion, restSession, setIsRest, isStart, setIsStart }) => (

	<CountdownCircleTimer
		isPlaying={isStart}
		duration={focus * 60}
		colors={[color]}
		size={300}
		onComplete={() => {
			setIsStart(false)
		}}
	>
		{({ remainingTime }) => {
			const minutes = Math.floor(remainingTime / 60)
			const seconds = remainingTime % 60
			return (
				<div className={`text-6xl font-bold text-[${color}]`}>
					{`${minutes}:${seconds}`}
				</div>
			)
		}
		}

	</CountdownCircleTimer>
)


export const TimerInactive = ({ color, focus }) =>
	<CountdownCircleTimer
		isPlaying={true}
		duration={10}
		colors={[color]}
		size={300}
	>
		{({ remainingTime }) => (
			<div className={`text-6xl font-bold text-[${color}]`}>
			</div>
		)}

	</CountdownCircleTimer>
