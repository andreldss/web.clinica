'use client'

import dynamic from 'next/dynamic'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from 'react';
import Modal from '../ui/modal';
import TextInput from '../ui/text-input';
import Button from '../ui/button';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false })

const events = []

const PtBr = {
  code: 'pt-br',
  week: {
    dow: 1,
    doy: 4
  },
  buttonText: {
    prev: 'Anterior',
    next: 'Próximo',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    list: 'Lista'
  },
  weekText: 'Sem',
  allDayText: 'dia todo',
  moreLinkText: 'mais',
  noEventsText: 'Não há eventos para mostrar'
};

export default function Calendar() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          locale={PtBr}
          height={700}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'agendarButton dayGridMonth,timeGridWeek,timeGridDay'
          }}
          customButtons={{
            agendarButton: {
              text: 'Agendar',
              click: () => {
                setOpenModal(true)
              }
            }
          }}
        />
      </div>
      {openModal === true &&
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <div className='flex flex-col gap-5'>
            <select name="" id="" className='w-full p-3 border border-black rounded-xl hover:text-content-body active:border-[#97979B] focus:outline-none'>
              <option value="">Selecione um paciente</option>
            </select>
            <TextInput type='datetime-local' className='border-black text-black'></TextInput>
            <select name="" id="" className='w-full p-3 border border-black rounded-xl hover:text-content-body active:border-[#97979B] focus:outline-none'>
              <option value="">Selecione um médico</option>
            </select>
            <div>
              <span>Observação</span>
              <textarea name="" id="" className='w-full h-[75px] border border-black rounded hover:text-content-body active:border-[#97979B] focus:outline-none resize-none'></textarea>
            </div>
            <Button variant='secondary'>Agendar</Button>
          </div>
        </Modal>
      }
    </>
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
