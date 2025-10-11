import React from 'react'

const EventsDiv = (props) => {
  return (
    <div className='min-w-[100%] flex flex-col justify-center items-flex-start'>
      <div className="text-4xl font-semibold font-['Montserrat']">{props.eventName}</div>
      <div className="border-t-[0.5px] pt-2 border-[#6b6b6b] mt-8 text-6xl font-semibold font-['Montserrat']">{props.eventDate}</div>
      <div className='flex flex-row gap-6 mt-6 pr-[200px]'>
        <img className="w-[20vw] h-auto aspect-square object-cover rounded-xl" src={props.imageUrl} alt="Event Image" />
        <div className="justify-end flex flex-col text-2xl font-normal font-['Montserrat'] w-[40%]">{props.description}</div>
      </div>
    </div>
  )
}

export default EventsDiv
