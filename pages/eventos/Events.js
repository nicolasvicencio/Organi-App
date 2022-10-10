import React, { useContext, useEffect, useState } from "react";
import EventItem from "./EventItem";
import Spinner from "../../components/Spinner/Spinner";
import { supabase } from "../../supabase/connection";
import { useUsers } from "../../context/UserContext";
import UserPanels from "../../components/UserPanel/UserPanels";

export default function Events() {
	const [events, setEvents] = useState();
	const { userData } = useUsers()

	const getEvents = async () => {
		if(userData){
			const { data, error } = await supabase.from('event').select().eq('id_user', userData.id)
			if (error) console.log(error)
			if (data) {
				console.log(data)
				console.log(userData.id)
				setEvents(data)
			}
		}
	}

	useEffect(() => {
		getEvents()
	}, [])


	return (

		<UserPanels>
			<div className="background">

				<h2 className="title">Eventos</h2>
				<p className="subTitle">Proximos eventos</p>
				{!events ? (
					<Spinner />
				) : (
					events.length === 0 
							? <div class="grid place-content-center h-40"><p className="text-xl text-gray-600">Aun no hay eventos!</p></div>
					: events.map((event) => <EventItem key={event.id} data={event} />)
				)}
			</div>
		</UserPanels>
	);
}
