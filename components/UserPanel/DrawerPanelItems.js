import React, { memo } from 'react'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { FaTasks } from 'react-icons/fa'
import { BsCalendarEvent, BsCalendar3, BsCardChecklist } from 'react-icons/bs'
import { RiTimer2Line } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

export default function DrawerPanelItems() {
	return (
		<div className="mt-5 flex flex-col ml-4 ">
			<li >
				<Link href="/inicio">
					<a className=" navItem pl-0 flex gap-4">
						<AiOutlineHome size={25} color="gray" />
						<p className="ml-3 ">Inicio</p>
					</a>
				</Link>
			</li>
			<li >
				<Link href="/tareas">
					<a className=" navItem pl-0 flex gap-4">
						<FaTasks size={25} color="gray" />
						<p className="ml-3 ">Tareas</p>
					</a>
				</Link>
			</li>
			<li >
				<Link href="/eventos">
					<a className=" navItem pl-0 flex gap-4">
						<BsCalendarEvent size={25} color="gray" />
						<p className="ml-3 ">Eventos</p>
					</a>
				</Link>
			</li>
			<li >
				<Link href="/calendario">
					<a className=" navItem pl-0 flex gap-4">
						<BsCalendar3 size={23} color="gray" />
						<p className="ml-3 ">Calendario</p>
					</a>
				</Link>
			</li>
			<li >
				<Link href="/timer">
					<a className=" navItem pl-0 flex gap-4">
						<RiTimer2Line size={23} color="gray" />
						<p className="ml-3 ">Timer</p>
					</a>
				</Link>
			</li>
			<li >
				<Link href="/habitos">
					<a className=" navItem pl-0 flex gap-4">
						<BsCardChecklist size={23} color="gray" />
						<p className="ml-3 ">Habitos</p>
					</a>
				</Link>
			</li>
			<li >
				<Link href="/perfil">
					<a className=" navItem pl-0 flex gap-4">
						<CgProfile size={25} color="gray" />
						<p className="ml-3 ">Perfil</p>
					</a>
				</Link>
			</li>
		</ div>
	)
}
