import React from 'react'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { FaTasks } from 'react-icons/fa'
import { BsCalendarEvent, BsCalendar3, BsCardChecklist } from 'react-icons/bs'
import { RiTimer2Line } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

export default function DrawerPanelItems() {
	return (
		<div className="mt-5 flex flex-col ml-4">
			<li className="navItem pl-0">
				<Link href="/inicio">
					<div className="flex gap-4">
						<AiOutlineHome size={25} color="gray" />
						<p className="ml-3 ">Inicio</p>
					</div>
				</Link>
			</li>
			<li className="navItem pl-0">
				<Link href="/tareas">
					<div className="flex gap-4">
						<FaTasks size={25} color="gray" />
						<p className="ml-3 ">Tareas</p>
					</div>
				</Link>
			</li>
			<li className="navItem pl-0">
				<Link href="/eventos">
					<div className="flex gap-4">
						<BsCalendarEvent size={25} color="gray" />
						<p className="ml-3 ">Eventos</p>
					</div>
				</Link>
			</li>
			<li className="navItem pl-0">
				<Link href="/calendario">
					<div className="flex gap-4">
						<BsCalendar3 size={23} color="gray" />
						<p className="ml-3 ">Calendario</p>
					</div>
				</Link>
			</li>
			<li className="navItem pl-0">
				<Link href="/timer">
					<div className="flex gap-4">
						<RiTimer2Line size={23} color="gray" />
						<p className="ml-3 ">Timer</p>
					</div>
				</Link>
			</li>
			<li className="navItem pl-0">
				<Link href="/habitos">
					<div className="flex gap-4">
						<BsCardChecklist size={23} color="gray" />
						<p className="ml-3 ">Habitos</p>
					</div>
				</Link>
			</li>
			<li className="navItem pl-0">
				<Link href="/perfil">
					<div className="flex gap-4">
						<CgProfile size={25} color="gray" />
						<p className="ml-3 ">Perfil</p>
					</div>
				</Link>
			</li>
		</ div>
	)
}
