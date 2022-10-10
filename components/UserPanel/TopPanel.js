import React from 'react'
import TopProfileCard from './TopProfileCard';
import Link from 'next/link'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import TopNotifications from './TopNotifications';

export default function TopPanel() {
	return (
		<div className=" sticky top-0 flex items-center justify-between bg-gray-800 w-full z-20 ">
			<Link href="/">
				<h3 className="flex items-center gap-4 rounded-br-lg bg-gray-800 px-4 py-2  text-3xl font-bold text-white">
					OrganiApp
					<AiOutlinePlusCircle size={30} className='pt-1' />
				</h3>
			</Link>
			<div className='flex gap-4'>
				<TopNotifications />
				<TopProfileCard />
			</div>
		</div>
	);
}
