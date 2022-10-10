import { BsCalendar3, BsCalendarEvent, BsCardChecklist } from "react-icons/bs";
import { IoTimerSharp } from 'react-icons/io'
import { AiOutlineHome } from "react-icons/ai";
import { FaTasks } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

export const types = {
	1: {
		icon: () => <AiOutlineHome />
	},
	2: {
		icon: () => <BsCalendarEvent />
	},
	3: {
		icon: () => <FaTasks />,
	},
	4: {
		icon: () => <BsCalendar3 />,
	},
	5: {
		icon: () => <BsCardChecklist />,
	},
	6: {
		icon: () => <IoTimerSharp />,
	},
	7: {
		icon: () => <CgProfile />,
	}
}
