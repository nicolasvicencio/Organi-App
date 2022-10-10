import React from 'react'

export default function Button(props) {
	const {text, handler} = props
	return (
		<button {...props} onClick={handler}>{text}</button>
	)
}
