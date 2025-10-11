import React from 'react'

const EventsDiv = ({ eventName, eventDate, imageUrl, description, isLast = false, isActive = true }) => {
  return (
    <div className='min-w-full flex flex-col justify-center items-flex-start'>
      <div className={`text-4xl font-semibold font-['Montserrat'] transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
        {eventName}
      </div>
      <div className="relative mt-8">
        <div 
          className="absolute top-0 left-0 h-[0.5px] bg-[#6b6b6b]"
          style={{ width: isLast ? 'auto' : '100%', right: isLast ? 'auto' : 0 }}
        >
          {isLast && (
            <div className="inline-block">
              <span className="text-6xl font-semibold font-['Montserrat'] invisible">
                {eventDate.slice(0, Math.ceil(eventDate.length / 2))}
              </span>
            </div>
          )}
        </div>
        <div className={`pt-2 text-6xl font-semibold font-['Montserrat'] transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
          {eventDate}
        </div>
      </div>
      <div className={`flex flex-row gap-6 mt-6 pr-[200px] transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
        <img 
          className="w-[20vw] h-auto aspect-square object-cover rounded-xl" 
          src={imageUrl} 
          alt={`${eventName} event`}
          loading="lazy"
        />
        <div className="justify-end flex flex-col text-2xl font-normal font-['Montserrat'] w-[40%]">
          {description}
        </div>
      </div>
    </div>
  )
}

export default EventsDiv;
