import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const MyCalendar = ({style}) => {
    const localizer = momentLocalizer(moment)
    return (
        <div>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, padding:'30px', }}
            />
        </div>
    );
};

export default MyCalendar;