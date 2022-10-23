import React, { useState } from 'react'
import { supabase } from '../../supabase/connection'

export default function EditTaskItem({ data , setIsEdit}) {
	const [name, setName] = useState(data.name)
	const [priority, setPriority] = useState(data.priority)
	const [description, setDescription] = useState(data.description)
	const [error, setError] = useState(null)


	const handleUpdate = async () => {
		console.log(data)
		if (data) {
			const { res, error } = await supabase
				.from('task')
				.update({ name: name, priority: priority, description: description })
				.eq('id', data.id)
			if (error) return setError(error)
			setIsEdit(false)
		}
	}

	return (
		<div className='cardBg px-6 py-3 rounded-md drop-shadow-sm shadow-2xl bg-gray-100 flex flex-col justify-between '>
			{error ? <Error message={error} /> : null}
			<div class="flex flex-col justify-between gap-6">
				<div>
					<label className=''>Nombre</label>
					<input type="text" placeholder={data.name} className='profileInput' onChange={e => setName(e.target.value)} />
				</div>
				<div className='flex flex-col justify-between '>
					<label for="profileLabel">Prioridad</label>
					<select name="priority" id="priority" className='profileInput' onChange={(e) => setPriority(e.target.value)}>
						<option value="1">Baja</option>
						<option value="2">Media</option>
						<option value="3">Alta</option>
					</select>
				</div>
				<div>
					<label>Descripcion</label>
					<textarea
						name="description"
						id="description"
						cols="30"
						rows="3"
						className='profileInput'
						placeholder={data.description}
						onChange={e => setDescription(e.target.value)}></textarea>
				</div>
				<div className='flex'>
					<button className='button py-1' onClick={handleUpdate}>Actualizar</button>
				</div>
			</div>
		</div>
	)
}
