import React from 'react'
import DrawerPanel from './DrawerPanel'
import TopPanel from './TopPanel'

export default function UserPanels({ children }) {

	return (
		<div>
			<TopPanel />
			<div className='flex'>
				<DrawerPanel className='sticky top-0'/>
				<div className='basis-4/5'>
				{children}
				</div>
			</div>
		</div>
	)
}
