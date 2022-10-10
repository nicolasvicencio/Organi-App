import React, { useState } from "react";
import { useUsers } from "../../context/UserContext";
import {supabase} from '../../supabase/connection'
import Button from '../../components/Button/Button'


export default function ProfileInfoCard() {
	const [description, setDescription] = useState();
	const [isEdit, setIsEdit] = useState(false);
	const { userData } = useUsers();

	const handleUpdate = async () => {
		const { data: res, error } = await supabase
			.from("users")
			.update({ description: description })
			.eq("id", userData.id);
		setIsEdit(false);
	};

	const handleEdit = () => setIsEdit(true);

	return (
		<div className="flex w-2/5 flex-col  items-center justify-center rounded-xl bg-white p-14 shadow-xl">
			<img
				src="https://placeimg.com/250/250/people"
				alt="profile-picture"
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
						<Button
							text={"Actualizar"}
							handler={handleUpdate}
							className="button-light mt-3"
						/>
					) : (
						<Button
							className="button-light mt-3"
							text={"Editar"}
							handler={handleEdit}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

