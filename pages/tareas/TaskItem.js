import React, { useState } from 'react'
import { TiTick, TiDelete, TiEdit } from 'react-icons/ti'
import Spinner from '../../components/Spinner/Spinner';
import { supabase } from '../../supabase/connection';
import { useRouter } from 'next/router';
import EditTaskItem from './EditTaskItem';

export default function TaskItem({ data }) {
	const [isEdit, setIsEdit] = useState(false)

	const handleDelete = async () => {
		const { data: svData, error } = await supabase.from('task').delete().eq('id', data.id)
		if (error) return error
	}
	const handleComplete = async () => {
		const { data: svData, error } = await supabase.from('task').update({ state: 2 }).eq('id', data.id)
		if (error) return error

	}

	if (!data) return <Spinner />
	const priority = data.priority ? "★".repeat(data.priority).padEnd(3, "☆") : null;
	if (isEdit) return <EditTaskItem data={data} setIsEdit={setIsEdit} />

	return (
		<div className='cardBg px-6 py-3 rounded-md drop-shadow-sm shadow-2xl bg-gray-100 flex flex-col justify-between '>
			<div class="flex flex-col justify-between border-b-2 border-black mb-6">
				<h3 className='font-semibold'>{data.name}</h3>
				<div className='flex justify-between items-end'>
					<span className='text-sm'>{data.state === 1 ? 'En Proceso' : 'Terminada'}</span>
					<span className='font-semibold'>{priority}</span>
				</div>
			</div>
			<p className='font-light my-8 '>{data.description}</p>
			<div className='flex justify-end items-end '>
				<button><TiTick size={30} onClick={handleComplete} className='hover:text-gray-500' /></button>
				<button><TiEdit size={30} className='hover:text-gray-500' onClick={() => setIsEdit(true)} /></button>
				<button onClick={handleDelete}><TiDelete size={30} className='hover:text-gray-500' /></button>
			</div>
		</div>
	)
}
