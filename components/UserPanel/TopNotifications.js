import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import { RiMessageFill } from "react-icons/ri";

export default function TopNotifications() {
	return (
		<div className="flex gap-2 items-center">
			<IoIosNotifications size={25} color="white" />
			<RiMessageFill size={23} color="white" />
		</div>
	);
}