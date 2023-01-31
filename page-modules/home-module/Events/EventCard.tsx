import React from 'react'
import Image, { StaticImageData } from "next/image";
import Button from "components/button";
import location from "../../../public/assets/svgs/location.svg";
import calendar from "../../../public/assets/svgs/calendar.svg";

export type EventCardProps = {
    eventFlier: StaticImageData,
    eventName: string,
    eventDescription: string,
    eventLocation: string,
    eventDate: string,
    eventTime: string
}

const EventCard = (props:EventCardProps) => {
  return (
    <div className="grid grid-rows-[80%_20%]">
            <div className="grid grid-cols-2 gap-[5%]">
              <Image
                src={props.eventFlier}
                alt="event flier"
                height={480}
              />
              <div className="flex flex-col justify-around">
                <div className="flex flex-col items-start">
                  <h1 className="font-bold text-[1.8rem]">
                    {props.eventName}
                  </h1>
                  <p>{props.eventDescription}</p>
                </div>
                <div className="my-3 relative">
                  <div className="h-[120%] border-[5C5C5C] w-[1px] border z-50 absolute top-[-10%] left-6"></div>
                  <div className="h-[120%] border-[5C5C5C] w-[1px] border z-50 absolute top-[-10%] left-28"></div>
                  <div className="h-[120%] border-[5C5C5C] w-[1px] border z-50 absolute top-[-10%] right-6"></div>
                  <div className="border-b-2 border-[5C5C5C]"></div>
                  <div className="border-b-2 py-4 border-[5C5C5C] flex items-start gap-12 pl-12">
                    <Image src={location} alt="location" />
                    <h1 className="font-bold">{props.eventLocation}</h1>
                  </div>
                  <div className="border-b-2 py-3 border-[5C5C5C] flex items-start  gap-12 pl-12">
                    <Image src={calendar} alt="calendar" />
                    <div className="flex items-start flex-col">
                      <h1 className="font-bold">{props.eventDate}</h1>
                      <p>{props.eventTime}</p>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="w-[80%] flex justify-between">
                  <Button color="primary2" padding="small">
                    Get Tickets
                  </Button>
                  <Button color="primary" padding="small">
                    Set Reminder
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-8"></div>
          </div>
  )
}

export default EventCard