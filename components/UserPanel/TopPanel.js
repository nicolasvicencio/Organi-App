import React from 'react'
import TopProfileCard from './TopProfileCard';


import TopNotifications from './TopNotifications';

export default function TopPanel() {
	return (
		<div className="fixed flex items-center justify-end bg-gray-800 w-full z-20 ">
			<div className='flex gap-4'>
				<TopNotifications />
				<TopProfileCard />
			</div>
		</div>
	);
}
