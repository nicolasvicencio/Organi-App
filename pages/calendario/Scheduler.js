import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
	Scheduler,
	MonthView,
	Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';





const currentDate = new Date();

function Calendar() {
	return (
		<Paper className='cardBg p-6'>
			<Scheduler
			>
				<ViewState
					currentDate={currentDate}
				/>
				<MonthView />
				<Appointments />
			</Scheduler>
		</Paper>
	)
}

export default Calendar
