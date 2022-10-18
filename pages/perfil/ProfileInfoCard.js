import React, { useState } from "react";
import { useUsers } from "../../context/UserContext";
import {supabase} from '../../supabase/connection'
import Spinner from "../../components/Spinner/Spinner";
import Image from "next/image";


export default function ProfileInfoCard() {
	const [description, setDescription] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const { userData } = useUsers();

	const handleUpdate = async () => {
		const { data: res, error } = await supabase
			.from("users")
			.update({ description: description })
			.eq("id", userData.id);
			if(error) return console.log(error)
		setIsEdit(false);

	};

	const handleEdit = () => setIsEdit(true);

	if(!userData) return (
		<div className="grid place-content-center w-full h-full">
			<Spinner />
		</div>
	)
	

	return (
		<div className="flex w-2/5 flex-col  items-center justify-center rounded-xl bg-white p-14 shadow-xl">
			<Image
				src="https://placeimg.com/250/250/people"
				alt="profile-picture"
				width={250}
				height={250}
				className="rounded-full border-2 border-gray-800 w-60 "
			/>
			<div>
				<article className="text-center">
					<p className="py-4 text-2xl font-semibold text-gray-900">{`${userData.first_name} ${userData.last_name}`}</p>
				</article>

				<div className="flex flex-col">
					{!isEdit ? (
						<p className="rounded-xl bg-zinc-100 p-4 text-center">{userData.description ? userData.description : 'Sin Descripcion'}</p>
					) : (
						<textarea
							rows={5}
							cols={25}
							placeholder={
								userData.description
									? userData.description
									: "Describete a ti mismo!"
							}
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
					)}
					{isEdit ? (
						<button
							onClick={handleUpdate}
							className="button-light mt-3"
						>Actualizar</button>
					) : (
						<button
							className="button-light mt-3"
							onClick={handleEdit}
						>Editar</button>
					)}
				</div>
			</div>
		</div>
	);
}

