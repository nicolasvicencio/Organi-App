import React, { useEffect, useMemo, useState } from "react";
import EventItem from "./EventItem";
import Spinner from "../../components/Spinner/Spinner";
import { supabase } from "../../supabase/connection";
import { useUsers } from "../../context/UserContext";
import UserPanels from "../../components/UserPanel/UserPanels";
import Link from "next/link";

export default function Events() {
	const [events, setEvents] = useState();
	const [error, setError] = useState()
	const { userData } = useUsers()

	const getEvents = useMemo(async () => {
		if (userData) {
			const { data, error } = await supabase.from('event').select().eq('id_user', userData.id)
			if (error) return setError(error)
			if (data) {
				setEvents(data)
			}
		}
	}, [userData])

	useEffect(() => {
		getEvents
	}, [events, getEvents])
	
	return (
		<UserPanels>
			<div className="background">
				<h2 className="title">Eventos</h2>
				<div class="flex gap-3 justify-start p-6 cardBg">
					<Link href={'/eventos/crear'}>
						<a className="button-light p-2">Crear Evento</a>
					</Link>
				</div>
				<div className="cardBg">
					{error ? <Error message={error} /> : null}
					{!events ? (
						<Spinner />
					) : (
						events.length === 0
							? <div class="grid place-content-center h-40"><p className="text-xl text-gray-600">Aun no hay eventos!</p></div>
							: events.map((event) => <EventItem key={event.id} data={event} />)
					)}
				</div>
			</div>
		</UserPanels>
	);
}
