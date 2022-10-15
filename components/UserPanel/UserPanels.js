import React, { useEffect } from 'react'
import DrawerPanel from './DrawerPanel'
import TopPanel from './TopPanel'

export default function UserPanels({ children }) {

	return (
		<div className='relative'>
			<TopPanel />
			<DrawerPanel />
			<div className='flex '>
				<div className='basis-1/6'></div>
				<div className='basis-11/12'>
				{children}
				</div>
			</div>
		</div>
	)
}


