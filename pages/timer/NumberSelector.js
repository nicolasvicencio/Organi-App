import React, { useState } from 'react'

export default function NumberSelector({handler, defaultValue}) {
	const [count, setCount] = useState(defaultValue)

	const handleIncrement = () => {
		setCount(count + 1)
		handler(count)
	}
	const handleDecrement = () => {
		setCount(count - 1)
		handler(count)
	}

	return (
		<div className='flex '>
			<button onClick={handleDecrement} className='bg-zinc-300 h-14 w-14 border text-center font-bold text-gray-500'>-</button>
			<div className='h-14 w-14 border font-bold grid place-content-center'>{count}</div>
			<button onClick={handleIncrement} className='bg-zinc-300 h-14 w-14 border text-center font-bold text-gray-500'>+</button>
		</div>
	)
}
