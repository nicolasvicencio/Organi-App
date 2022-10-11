import React, { useState } from 'react'
import { CirclePicker } from 'react-color'

export default function ColorSelector({ setTag, setColorTag }) {

	const handleColor = (e) => {
		setColorTag(e.hex)
		
	}
	
	function handleTag(e) {
		setTag(e.target.value)
	}

	return (
		<>
			<select name="tag" id="tag" onClick={e => handleTag(e)} className='py-3 my-7'>
				<option value="Default">Selecciona una Etiqueta</option>
				<option value="Trabajo">Trabajo</option>
				<option value="Estudio">Estudio</option>
				<option value="Ocio">Ocio</option>
				<option value="Productividad">Productividad</option>
			</select>
			<CirclePicker onChange={e => handleColor(e)} />
		</>
	)
}
