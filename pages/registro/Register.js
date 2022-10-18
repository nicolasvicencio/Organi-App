import React, { useState } from "react";
import Link from 'next/link'
import { supabase } from "../../supabase/connection";
import { useRouter } from "next/router";
import Error from '../../components/Error/Error'

export default function Register() {
	const router = useRouter()
	const [email, setEmail] = useState();
	const [pass, setPass] = useState();
	const [pass2, setPass2] = useState();
	const [error, setError] = useState()

	const handleClick = async (e) => {
		e.preventDefault()
		if (pass !== pass2) return setError('Las contraseñas no coinciden');
		 
		const {data, error} = await supabase.auth.signUp({ email: email, password: pass })
				if (error) {
					const newError = JSON.stringify(error.message)
					return setError(newError)
				} 
				if (data) router.push('/login')		
	};

	return (
		<section className="bg-gray-800  leading-normal">
			<div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
				{/* <a href="#" className="">
          <img
            className="mr-2 h-8 w-8"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
        </a> */}
				<h3 className="mb-6 flex items-center text-3xl  font-bold text-white ">
					OrganiApp
				</h3>
				<div className="w-full rounded-lg bg-white shadow dark:border sm:max-w-md md:mt-0 xl:p-0 ">
					<div className="space-y-4 p-6 sm:p-8 md:space-y-6">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
							Crear Cuenta
						</h1>
						{error ? <Error message={error} /> : null}
						<form className="space-y-4 md:space-y-6" action="#">
							<div>
								<label
									htmlFor="email"
									className="mb-2 block text-sm font-medium text-gray-900"
								>
									Correo Electronico
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:ring-gray-600 sm:text-sm "
									placeholder="Ingresa tu email"
									required=""
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="mb-2 block text-sm font-medium text-gray-900 "
								>
									Contraseña
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
									required=""
									onChange={(e) => setPass(e.target.value)}
								/>
							</div>

							<div>
								<label
									htmlFor="password2"
									className="mb-2 block text-sm font-medium text-gray-900 "
								>
									Repite Contraseña
								</label>
								<input
									type="password"
									name="password2"
									id="password2"
									placeholder="••••••••"
									className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
									required=""
									onChange={(e) => setPass2(e.target.value)}
								/>
							</div>

							<div
								className="focus:ring-primary-300 mb-4 w-full cursor-pointer rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4"
								onClick={e => handleClick(e)}
							>
								Enviar Datos
							</div>
							<Link href={"/login"}>
								<span className="mt-4 block text-gray-500 hover:underline">
									Volver
								</span>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
