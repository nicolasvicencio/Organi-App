import React, { useState } from "react";
import Link from 'next/link'
import Spinner from "../../components/Spinner/Spinner";
import { useRouter } from "next/router";
import { supabase } from "../../supabase/connection";
import { FcGoogle } from "react-icons/fc";
import { useUsers } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import Error from '../../components/Error/Error'

export default function Login() {
	const { userData } = useUsers()
	const { setSession } = useAuth()

	const [email, setEmail] = useState();
	const [pass, setPass] = useState();
	const [isLoaded, setIsLoaded] = useState(true)
	const [error, setError] = useState(null)
	const [remember, setRemeber] = useState(false)
	const router = useRouter()

	const handleClick = (e) => {
		e.preventDefault()
		setIsLoaded(false)
		supabase.auth.signInWithPassword({ email: email, password: pass })
			.then(({ data, error }) => {
				if (error) {
					const newError = JSON.stringify(error.message)
					setError(newError)
					return setIsLoaded(true)
				}
				if (data) {
					setSession(data.session.access_token)
					if(remember) localStorage.setItem('session', data.session.access_token)
					if (userData) {
						setIsLoaded(false)
						!userData.first_name ? router.push('/login/first') : router.push('/inicio')
					}
				}
			})
	};

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
									Ingresar a tu cuenta
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
											placeholder="name@mail.com"
											onChange={(e) => setEmail(e.target.value)}
											required=""
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="mb-2 block text-sm font-medium text-gray-900 "
										>
											Contrase??a
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="????????????????????????"
											className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm "
											onChange={(e) => setPass(e.target.value)}
											required=""
										/>
									</div>
									<div className="flex items-center justify-between">
										<div className="flex items-start">
											<div className="flex h-5 items-center">
												<input
													id="remember"
													aria-describedby="remember"
													type="checkbox"
													className="focus:ring-3 focus:ring-primary-300 h-4 w-4 rounded border border-gray-300 bg-gray-50 "
													required=""
													onChange={() => setRemeber(true)}
												/>
											</div>
											<div className="ml-3 text-sm">
												<label htmlFor="remember" className="text-gray-500 ">
													Recordarme
												</label>
											</div>
										</div>
										<Link href={'/login/recuperar'}>
											<a
												href="#"
												className="text-sm font-medium text-gray-500 hover:underline "
											>
												??Olvidaste tu contrase??a?
											</a>
										</Link>
									</div>

									<div
										className="focus:ring-primary-300 w-full cursor-pointer rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4"
										onClick={e => handleClick(e)}
									>
										Ingresar
									</div>

									<div className="my-2 flex justify-center border-y-2 ">
										<div className="rounded-lg p-2 hover:bg-gray-300">
											<FcGoogle size={40} />
										</div>
									</div>

									<p className="mr-2 text-sm font-light text-gray-700">
										??Aun no tienes cuenta?
									</p>
									<Link href={"/registro"}>
										<span className="font-small text-gray-500 hover:underline">
											Crear cuenta
										</span>
									</Link>
								</form>
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
