import React, { useEffect, useState } from 'react'
import DrawerPanelItems from './DrawerPanelItems'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function DrawerPanel() {

	return (
		<div className="sticky bottom-0 min-h-screen max-h-full bg-gray-200 shadow-2xl basis-2/12 z-50 ">	
			<h3 className="flex items-center gap-4 rounded-br-lg bg-gray-800  p-4 py-7 text-3xl font-bold text-white">
				OrganiApp
				<AiOutlinePlusCircle size={30} className='pt-1' />
			</h3>
				<nav>
					<ul>
				 <DrawerPanelItems/>
					</ul>
				</nav>		
		</div>
	)
}

