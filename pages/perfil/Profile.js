import React, { useEffect } from "react";
import Spinner from '../../components/Spinner/Spinner'
import UserPanel from '../../components/UserPanel/UserPanels'
import { useUsers } from "../../context/UserContext";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileInfoDetails from "./ProfileInfoDetails";

export default function Profile() {
	const {userData} = useUsers()

	return (
		<UserPanel>
			<div className="background overflow-scroll">

				<h3 className="title rounded-lg bg-white pl-2 text-left">Perfil</h3>
				{!userData ? (
					<Spinner />
				) : (
					<div className="flex gap-5">
						<ProfileInfoCard />
						<ProfileInfoDetails />
					</div>
				)}
			</div>
		</UserPanel>
	);
}
