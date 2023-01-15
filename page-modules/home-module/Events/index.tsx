import React from "react";
import Image from "next/image";
import flier from "../../../public/assets/imgs/flier.png";
import location from "../../../public/assets/svgs/location.svg";
import calendar from "../../../public/assets/svgs/calendar.svg";
import { Container } from "./styles";
import EventSlide from "./Slider";
import Button from "components/button";
import nerdwork from "../../../public/assets/imgs/nerdwork.png"

const Events = () => {
  return (
    <Container>
      <h1 className="text-5xl text-otaku-blue-1 font-bold mt-[-30px]">
        Events
      </h1>

      <div className="flex justify-between w-[100%] mt-10">
        <p className="text-3xl font-bold">
          Up Coming Sponsored <span className="text-otaku-red-2">Events</span>
        </p>
        <p className="font-bold text-otaku-red-2">View All</p>
      </div>
      <div className="mt-10 w-[100%]">
        <EventSlide>
          <div className="grid grid-rows-[80%_20%]">
            <div className="grid grid-cols-2 gap-[5%]">
              <Image
                src={flier}
                alt="event flier"
                height={480}
                style= {{ objectFit: "cover" }}
              />
              <div className="flex flex-col justify-around">
                <div className="flex flex-col items-start">
                  <h1 className="font-bold text-[1.8rem]">
                    Otaku PH City Casual Hangout
                  </h1>
                  <p>Calling all Port-Harcourt Weebs/Otakus </p>
                </div>
                <div className="my-3 relative">
                  <div className="h-[120%] border-[5C5C5C] w-[1px] border z-50 absolute top-[-10%] left-6"></div>
                  <div className="h-[120%] border-[5C5C5C] w-[1px] border z-50 absolute top-[-10%] left-28"></div>
                  <div className="h-[120%] border-[5C5C5C] w-[1px] border z-50 absolute top-[-10%] right-6"></div>
                  <div className="border-b-2 border-[5C5C5C]"></div>
                  <div className="border-b-2 py-4 border-[5C5C5C] flex items-start gap-12 pl-12">
                    <Image src={location} alt="location" />
                    <h1 className="font-bold">Port Harcourt, Pleasure Park</h1>
                  </div>
                  <div className="border-b-2 py-3 border-[5C5C5C] flex items-start  gap-12 pl-12">
                    <Image src={calendar} alt="calendar" />
                    <div className="flex items-start flex-col">
                      <h1 className="font-bold">September 17, 2022</h1>
                      <p>10am</p>
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
          <div>OBI</div>
          <div>IS</div>
          <div>COMING</div>
        </EventSlide>
      </div>
      <div className="mt-8 w-[100%] h-[600px] grid grid-rows-[20%_80%]" >
        <div className="flex justify-between w-[100%] mt-10">
          <p className="text-3xl font-bold">
            Previous <span className="text-otaku-red-2">Events</span>
          </p>
          <p className="font-bold text-otaku-red-2">View All</p>
        </div>
        <div className="flex justify-between">
          <div className="h-[100%]  w-[30%] text-center grid grid-rows-[90%_10%]">
            <div>
              <Image src = {nerdwork} alt = "event"/>
            </div>
            <p className="font-bold">Nerd Work Comic Con 2022</p>
          </div>
          <div className="h-[100%] w-[30%] text-center grid grid-rows-[90%_10%]">
            <div>
              <Image src = {nerdwork} alt = "event"/>
            </div>
            <p className="font-bold">Nerd Work Comic Con 2022</p>
          </div>
          <div className="h-[100%] w-[30%] text-center grid grid-rows-[90%_10%]">
            <div>
              <Image src = {nerdwork} alt = "event"/>
            </div>
            <p className="font-bold">Nerd Work Comic Con 2022</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Events;
