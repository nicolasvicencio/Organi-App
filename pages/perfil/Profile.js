import React from "react";
import Spinner from '../../components/Spinner/Spinner'
import UserPanel from '../../components/UserPanel/UserPanels'
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileInfoDetails from "./ProfileInfoDetails";

export default function Profile() {


	return (
		<UserPanel>
			<div className="background overflow-scroll">

				<h3 className="title rounded-lg bg-white pl-2 text-left">Perfil</h3>
				{false ? (
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
