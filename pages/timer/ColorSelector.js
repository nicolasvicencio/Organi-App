import React from 'react'
import { CirclePicker } from 'react-color'

export default function ColorSelector({ setTag, setColorTag }) {
	const handleColor = (e) => setColorTag(e.hex)
	const handleTag = (e) =>setTag(e.target.value)
	
	return (
		<>
			<div className='flex flex-col'>
				<select name="tag" id="tag" onClick={e => handleTag(e)} className='py-3 my-7'>
					<option value="Default">Selecciona una Etiqueta</option>
					<option value="Trabajo">Trabajo</option>
					<option value="Estudio">Estudio</option>
					<option value="Ocio">Ocio</option>
					<option value="Productividad">Productividad</option>
				</select>
				<div className="flex flex-col gap-2 ">
					<div className="inputLabel">Color</div>
					<CirclePicker onChange={e => handleColor(e)} width={'280px'} /> 
				</div>
			</div>

		</>
	)
}
