'use client'

import dynamic from 'next/dynamic'
import dayGridPlugin from '@fullcalendar/daygrid'

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false })

const events = [
  { title: 'Meeting', start: new Date() }
]

export default function Calendar() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

function renderEventContent(eventInfo: any) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
