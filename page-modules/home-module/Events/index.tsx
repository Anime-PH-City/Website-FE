import React, { useState } from "react";
import Image from "next/image";
import flier from "../../../public/assets/imgs/flier.png";
import { Container } from "./styles";
import EventsSlide from "./Slider";
import nerdwork from "../../../public/assets/imgs/nerdwork.png";
import EventCard from "./EventCard";
import EventOverlay from "components/modal/event-module/EventOverlay";

const Events = () => {
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [futureEvents, setFutureEvents] = useState(true);

  const toggleEventOverlay = () => {
    setIsEventOpen(!isEventOpen);
  };

  const handleFutureEvents = () => {
    setFutureEvents(true);
    toggleEventOverlay();
  };

  const handlePreviousEvents = () => {
    setFutureEvents(false);
    toggleEventOverlay();
  };

  return (
    <>
      <EventOverlay
        isOpen={isEventOpen}
        onClose={toggleEventOverlay}
        header="Events"
        futureEvents={futureEvents}
      />
      <Container>
        <h1 className="text-5xl text-otaku-blue-1 font-bold mt-[-30px]">
          Events
        </h1>

        <div className="flex justify-between w-[100%] mt-10">
          <p className="text-3xl font-bold">
            Up Coming Sponsored <span className="text-otaku-red-2">Events</span>
          </p>
          <p
            className="font-bold text-otaku-red-2 cursor-pointer"
            onClick={handleFutureEvents}
          >
            View All
          </p>
        </div>
        <div className="mt-10 w-[100%]">
          <EventsSlide>
            <EventCard
              eventFlier={flier}
              eventName="Otaku PH City Casual Hangout"
              eventDescription="Calling all Port-Harcourt Weebs/Otakus"
              eventLocation="Port Harcourt, Pleasure Park"
              eventDate="September 17, 2022"
              eventTime="10am"
            />
            <EventCard
              eventFlier={flier}
              eventName="Otaku PH City Casual Hangout"
              eventDescription="Calling all Port-Harcourt Weebs/Otakus"
              eventLocation="Port Harcourt, Pleasure Park"
              eventDate="September 17, 2022"
              eventTime="10am"
            />
            <div>IS</div>
            <div>COMING</div>
          </EventsSlide>
        </div>
        <div className="mt-8 w-[100%] h-[600px] grid grid-rows-[20%_80%]">
          <div className="flex justify-between w-[100%] mt-10">
            <p className="text-3xl font-bold">
              Previous <span className="text-otaku-red-2">Events</span>
            </p>
            <p
              className="font-bold text-otaku-red-2 cursor-pointer"
              onClick={handlePreviousEvents}
            >
              View All
            </p>
          </div>
          <div className="flex justify-between">
            <div className="h-[100%]  w-[30%] text-center grid grid-rows-[90%_10%]">
              <div>
                <Image src={nerdwork} alt="event" />
              </div>
              <p className="font-bold">Nerd Work Comic Con 2022</p>
            </div>
            <div className="h-[100%] w-[30%] text-center grid grid-rows-[90%_10%]">
              <div>
                <Image src={nerdwork} alt="event" />
              </div>
              <p className="font-bold">Nerd Work Comic Con 2022</p>
            </div>
            <div className="h-[100%] w-[30%] text-center grid grid-rows-[90%_10%]">
              <div>
                <Image src={nerdwork} alt="event" />
              </div>
              <p className="font-bold">Nerd Work Comic Con 2022</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Events;
