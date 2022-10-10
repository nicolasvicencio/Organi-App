import { useRouter } from "next/router";
import React, { useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { useUsers } from "../../../context/UserContext";


export default function First() {
	const [isLoaded, setIsLoaded] = useState(true)
	const {postUserNames} = useUsers()
	const router = useRouter()

	const [firstName, setFirstName] = useState()
	const [lastName, setLastName] = useState()

	const handleClick = (e) => {
		e.preventDefault()
		setIsLoaded(false)
		if (!lastName || !firstName) return console.log("Debe ingresar los campos")
		postUserNames(firstName, lastName)
		router.push('/inicio')
	}

	return (
		<section className="bg-gray-800  leading-normal">
			<div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
				<h3 className="mb-6 flex items-center text-3xl  font-bold text-white ">
					OrganiApp
				</h3>
				<div className="w-full rounded-lg bg-white shadow dark:border sm:max-w-md md:mt-0 xl:p-0 ">
					<div className="space-y-4 p-6 sm:p-8 md:space-y-6">
						{!isLoaded ? (
							<Spinner />
						) : (
							<>
								<h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
									Bienvenido desconocido! ¿Cual es tu nombre?
								</h1>
								<form className="space-y-4 md:space-y-6" action="#">
									<div>
										<label
											htmlFor="name"
											className="mb-2 block text-sm font-medium text-gray-900"
										>
											Nombre
										</label>
										<input
											type="text"
											name="name"
											id="name"
											className="focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:ring-gray-600 sm:text-sm "
											placeholder="Ingresa tu nombre"
											onChange={(e) => setFirstName(e.target.value)}
											required=""
										/>
									</div>
									<div>
										<label
											htmlFor="lastName"
											className="mb-2 block text-sm font-medium text-gray-900 "
										>
											Apellido
										</label>
										<input
											type="text"
											name="lastName"
											id="lastName"
											placeholder="Ingresa tu apellido"
											className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm mb-14 "
											onChange={(e) => setLastName(e.target.value)}
											required=""
										/>
									</div>
									<button className="button" onClick={e => handleClick(e)}>Ingresar</button>
								</form>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
