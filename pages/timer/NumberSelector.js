import React, { useState } from 'react'

export default function NumberSelector({ handler, defaultValue, gap }) {
	const [count, setCount] = useState(defaultValue)

	const handleIncrement = () => {
		setCount(count + gap)
		handler(count + gap)
	}
	const handleDecrement = () => {
		if(count - gap <= 0) return
		setCount(count - gap)
		handler(count - gap)
	}

	return (
		<div className='flex '>
			<button onClick={handleDecrement} className='bg-zinc-300 h-14 w-14 border text-center font-bold text-gray-500'>-</button>
			<div className='h-14 w-14 border font-bold text-gray-700 grid place-content-center'>{count}</div>
			<button onClick={handleIncrement} className='bg-zinc-300 h-14 w-14 border text-center font-bold text-gray-500'>+</button>
		</div>
	)
}
