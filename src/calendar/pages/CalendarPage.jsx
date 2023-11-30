import { Calendar } from 'react-big-calendar'
import dayjs from 'dayjs'
import { Navbar, CalendarEvent } from '../components'

import { localizer } from '../../helpers'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getMessagesEs } from '../../helpers'

export const CalendarPage = () => {

  const days = dayjs()

  const myEventsList = [{
    title: 'All Day Event very long title',
    notes: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    // allDay: true,
    start: new Date(days.add(2, 'days').format('YYYY-MM-DD')),
    end: days.add(2, 'hours'),
    bgColor: '#fafafa',
    user: {
      id: 1,
      name: 'Luis Miguel'
    }
  }]

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white'
    }
    return { style }
  }

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)' }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
      />
    </>
  )
}
