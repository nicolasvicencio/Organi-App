import React, { useState } from 'react'
import UserPanels from '../../../components/UserPanel/UserPanels'
import { useUsers } from '../../../context/UserContext'
import { supabase } from '../../../supabase/connection'
import Error from '../../../components/Error/Error'
import { useRouter } from 'next/router'



export default function index() {
	const {userData} = useUsers()
	const router = useRouter()
	const [name, setName] = useState()
	const [description, setDescription] = useState() 
	const [date, setDate] = useState()
	const [priority, setPriority] = useState()
	const [error, setError] = useState(false)

	const handleCreate = async (e) => {
		e.preventDefault()
		console.log(name, description, priority, date )
		if(!name || !description || !priority || date < new Date()) {
			setError('Todos los campos deben ser validos')
			return
		}
		setError(null)
		if(!error){
			const {data, error} = await supabase.from('event').insert([{name: name, description: description, id_priority: priority, date_limit: date, id_user: userData.id }])
			if(error) return setError('Ha ocurrido un problema con el envio de datos')
			router.push('/eventos')
		}
	}

	return (
		<UserPanels>
			<div className="background ">
				<h1 className='title '>Nuevo evento</h1>
				<div className='cardBg p-6 '>
							{error ? <Error message={error} /> : null}
					<form className='' >
						<div className="flex gap-6 items-center">
							<div className="flex flex-col gap-1 ">
								<label for="" className='ml-2 text-gray-800'>Evento</label>
								<input id='name' type="text" placeholder='Nombre evento' className='profileInput' onChange={(e) => setName(e.target.value)}/>
							</div>
							<div className="flex flex-col gap-1 ">
								<label for="" className='ml-2 text-gray-800'>Prioridad</label>
								<select name="priority" id="priority" className='profileInput' onChange={(e) => setPriority(e.target.value)}>
									<option value="1">Baja</option>
									<option value="2">Media</option>
									<option value="3">Alta</option>
								</select>
							</div>
						</div>

						<div className=" flex flex-col gap-3 mt-8">
							<label for="" className='ml-2 text-gray-800'>Descripcion</label>
							<textarea
								rows={5}
								cols={50}
								className='profileInput'
								onChange={(e) => setDescription(e.target.value)}
								placeholder='Descripcion del evento'></textarea>			
						</div>
						<div class="flex mt-8 justify-between items-end">
							<div className="flex flex-col gap-1  ">
								<label for="date" className='ml-2 text-gray-800'>Fecha</label>
								<input id='date' type="date" placeholder='Nombre evento' className='profileInput w-fit' onChange={(e) => setDate(e.target.value)} />
							</div>
							<button className='button p-2 h-fit bg-green-900 rounded-sm' onClick={e => handleCreate(e)}>Crear</button>
						</div>

					</form>
				</div>
			</div>
		</UserPanels>
	)
}
