import Overlay from '../overlay'
import flier from "../../public/assets/imgs/flier.png";
import nerdwork from "../../public/assets/imgs/nerdwork.png"
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import EventCard from 'page-modules/home-module/Events/EventCard';

const EventOverlay = ({isOpen, onClose, header, futureEvents}: {
    isOpen : boolean
    onClose : () => void
    header: string
    futureEvents: boolean
}) => {
  const [showFutureEvents, setShowFutureEvents] = useState(futureEvents)

  useEffect(() => {
    setShowFutureEvents(futureEvents)
  },[futureEvents])
  
  const handleClick = () => {
    setShowFutureEvents(!showFutureEvents)
  }
  
  return (
    <Overlay isOpen = {isOpen} onClose = {onClose} header = {header}>
        <div className='w-[100%] flex justify-end text-otaku-blue-1 font-bold' 
              onClick={handleClick}
              >
                {showFutureEvents ? `View Previous Events` : 'View Upcoming Events'} 
        </div>
        {showFutureEvents ? <UpcomingEvents /> : <PreviousEvents />}
    </Overlay>

  )
}

export default EventOverlay

export const UpcomingEvents = () => {
  return(
    <>
      <EventCard 
            eventFlier={flier}
            eventName = "Otaku PH City Casual Hangout"
            eventDescription="Calling all Port-Harcourt Weebs/Otakus"
            eventLocation="Port Harcourt, Pleasure Park"
            eventDate="September 17, 2022"
            eventTime="10am"
          />
          <EventCard 
            eventFlier={flier}
            eventName = "Otaku PH City Casual Hangout"
            eventDescription="Calling all Port-Harcourt Weebs/Otakus"
            eventLocation="Port Harcourt, Pleasure Park"
            eventDate="September 17, 2022"
            eventTime="10am"
          />
    </>
  )
} 

export const PreviousEvents = () => {
  return(
    <>
    <div className="grid grid-cols-3 mt-4">
          <div className="h-[100%] gap-1 mt-3  text-center grid grid-rows-[85%_10%]">
            <div>
              <Image src = {nerdwork} alt = "event"/>
            </div>
            <p className="font-bold">Nerd Work Comic Con 2022</p>
          </div>
          <div className="h-[100%] gap-1 mt-3 text-center grid grid-rows-[85%_10%]">
            <div>
              <Image src = {nerdwork} alt = "event"/>
            </div>
            <p className="font-bold">Nerd Work Comic Con 2022</p>
          </div>
          <div className="h-[100%] gap-1 mt-3 text-center grid grid-rows-[85%_10%]">
            <div>
              <Image src = {nerdwork} alt = "event"/>
            </div>
            <p className="font-bold">Nerd Work Comic Con 2022</p>
          </div>
          <div className="h-[100%] gap-1 mt-3 text-center grid grid-rows-[85%_10%]">
            <div>
              <Image src = {nerdwork} alt = "event"/>
            </div>
            <p className="font-bold">Nerd Work Comic Con 2022</p>
          </div>
          <div className="h-[100%] gap-1 mt-3 text-center grid grid-rows-[85%_10%]">
            <div>
              <Image src = {nerdwork} alt = "event"/>
            </div>
            <p className="font-bold">Nerd Work Comic Con 2022</p>
          </div>
        </div>
    </>
  )
}