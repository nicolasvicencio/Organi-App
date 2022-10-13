import React, { useEffect } from 'react'
import DrawerPanel from './DrawerPanel'
import TopPanel from './TopPanel'

export default function UserPanels({ children }) {

	return (
		<div className='relative'>
			<TopPanel />
			<div className='flex'>
				<DrawerPanel />
				<div className='basis-4/5'>
				{children}
				</div>
			</div>
		</div>
	)
}


