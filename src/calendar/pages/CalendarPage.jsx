import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import { Navbar } from '../components/Navbar'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dayjsLocalizer(dayjs)

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
      name: 'Fernando'
    }
  }]

  return (
    <>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)' }}
      />
    </>
  )
}
