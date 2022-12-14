import React from "react";
import Link from 'next/link'
import { useUsers } from "../../context/UserContext";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthContext";
import Image from "next/image";

export default function TopProfileCard() {
	const { userData } = useUsers()
	const { signOutUser } = useAuth()
	const router = useRouter()

	const handleLogOut = () => {
		signOutUser()
		return router.push('/login')
	}

	return (
		<div className="flex items-center gap-3 py-0 pr-5">
			<Link href="/perfil" className="font-bold text-sky-400 hover:text-sky-600">
				<a href="">
					<Image
						src="https://placeimg.com/30/30/people"
						alt="imagen de perfil"
						width={30}
						height={30}
						className="ml-4 rounded-full border-2 border-sky-400"
					/>
				</a>
			</Link>
			<div className="flex flex-col">
				<Link href="/perfil">
					<p className="font-semibold text-white hover:text-zinc-300">
						{userData
							? `${userData.first_name} ${userData.last_name}`
							: "Cargando..."}
					</p>
				</Link>
				<div >
					<p className=" font-small text-end cursor-pointer text-zinc-400 hover:text-zinc-300" onClick={handleLogOut}>
						Cerrar sesion
					</p>
				</div>
			</div>
		</div>
	);
}
