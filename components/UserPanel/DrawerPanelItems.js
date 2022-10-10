import React from 'react'
import Link from 'next/link'
import icons from 'react-icons'

export default function DrawerPanelItems({ name, icon }) {
	
	const toLower = (str) => {
		return str.toLowerCase()
	}

	return (
		<div className="mt-5 flex flex-col ml-4">
			<Link className="navItem" href={`${toLower(name)}`}>
				<div className='flex'>
					
					<p className="ml-3 ">{name}</p>
				</div>
			</Link>
		</ div>
	);
}
