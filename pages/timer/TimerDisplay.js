import { memo, useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'



const TimerFocus = ({ timerData }) => {
	const { focus, rest, sessions, colorTag, tag } = timerData
	const [count, setCount] = useState(1)
	const [restCount, setRestCount] = useState()
	const [isStart, setIsStart] = useState(true)
	const [isRest, setIsRest] = useState(false)
	const restColor = '#f59e0b'

	const startTimer = () => setIsStart(!isStart)


	const handleComplete = () => {
		if (!isRest) {
			if(count === sessions) {
				setIsStart(false)
			}
			setCount(count + 1)
			setIsRest(true)
			return { shouldRepeat: true, newInitialRemainingTime: focus }
		}else{
			setRestCount(restCount + 1)
			setIsRest(false)
			return { shouldRepeat: true, newInitialRemainingTime: rest }
		}
	}

	return (
		<div className='flex flex-col gap-3 justify-center items-center'>
			<CountdownCircleTimer
				isPlaying={isStart}
				duration={!isRest ? focus * 60 : rest * 60}
				colors={[!isRest ? colorTag : restColor]}
				size={300}
				onComplete={handleComplete}
			>
				{({ remainingTime }) => {
					const minutes = Math.floor(remainingTime / 60)
					const seconds = remainingTime % 60
					return (
						<div className={`text-5xl font-semibold text-black flex flex-col items-center gap-2`}>
							<>
								{isStart ? <span className='text-sm text-black'>{isRest ? 'Descanso' : `Sesion ${count}-${sessions}`}</span> : null}
								{isStart ? `${minutes}:${seconds}` : count === sessions ? 'Fin' : null}
								{isStart ? <span className='text-sm text-black'>{!isRest ? 'Enfocate!' : 'Toma un descanso!'}</span> : null}
							</>
						</div>
					)
				}}
			</CountdownCircleTimer>

			{isStart ? <BsPauseFill onClick={startTimer} size={52} /> : <BsFillPlayFill onClick={startTimer} size={52} />}
		</div>
	)
}


export default memo(TimerFocus)