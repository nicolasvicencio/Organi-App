import { useRouter } from "next/router";
import { useState } from "react";
import { useUsers } from "../../../context/UserContext";
import { supabase } from "../../../supabase/connection";
import Spinner from "../../../components/Spinner/Spinner";
import Error from "../../../components/Error/Error";


export default function First() {
	const [newEmail, setNewEmail] = useState()
	const [error, setError] = useState()
	const [isSend, setIsSend] = useState(false)

	const { userData } = useUsers()
	const router = useRouter()

	const handleChangeEmail = async (e) => {
		e.preventDefault()
		if (newEmail === userData.email) return setError('El email ingresado es igual al anterior')
		const { data, error } = await supabase.auth.updateUser({email: newEmail})
		if (error){
			setError(error.message)
			return 
		} 
		if (data){
			setIsSend(true)
			return 
		} 
	}

	return (
		<section className="bg-gray-800  leading-normal">
			<div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
				<div className="w-full rounded-lg bg-white shadow dark:border sm:max-w-md md:mt-0 xl:p-0 ">
					{isSend
						?
						<div className="space-y-4 p-6 sm:p-8 md:space-y-6">
							<div className="flex flex-col  items-center gap-6">
								<h3 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Cambio de email</h3>
								<p className="text-light">Hemos enviado un correo a <span className="font-bold">{newEmail}</span> por favor siga las instrucciones</p>
								<button onClick={() => router.back()} className='button'>Volver</button>
							</div>
						</div>
						: <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
							{!userData ? (
								<Spinner />
							) : (
								<>
									<h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
										Cambio de Email
									</h1>
									{error ? <Error message={error} /> : null}
									<p className="text-center">Tu email actual es {userData.email} </p>
									<form className="space-y-4 md:space-y-6" action="#">
										<div>
											<label
												htmlFor="name"
												className="mb-2 block text-sm font-medium text-gray-900"
											>
												Nuevo Email
											</label>
											<input
												type="text"
												name="name"
												id="name"
												className="focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:ring-gray-600 sm:text-sm "
												placeholder="Ingresa nuevo email"
												onChange={(e) => setNewEmail(e.target.value)}
												required=""
											/>
										</div>
										<button className="button" onClick={e => handleChangeEmail(e)}>Cambiar</button>
									</form>
								</>
							)}
						</div>}
				</div>
			</div>
		</section>
	);
}
