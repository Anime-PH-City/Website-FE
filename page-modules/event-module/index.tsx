import Button from "components/button";
import MainLayout from "components/mainlayout";
import Image from "next/image";
import dp from "../../public/assets/imgs/display-picture.png";
import share from "../../public/assets/svgs/share.svg";
import location from "../../public/assets/svgs/location.svg";
import calendar from "../../public/assets/svgs/calendar.svg";
import React from "react";
import Ticket from "./Ticket";
import Organizer from "./Organizer";

const EventModule = () => {
  return (
    <MainLayout>
      <div className="h-[150px]"></div>
      <div className="w-[77%] mx-auto mt-7 mb-[150px]">
        <h1 className="font-bold text-3xl mb-3 tracking-wide">
          Otaku PH City Casual Hangout
        </h1>
        <div className="w-[100%] h-[90vh] bg-flier-event bg-center  bg-no-repeat bg-cover"></div>
        <div className="grid grid-cols-[70%_30%]">
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-2xl mb-3 mt-7">
              Otaku PH City Casual Hangout
            </h1>
            <p className="">
              Tired of watching anime alone? Looking for the perfect date
              location or generally tired of staying indoors and lonesome? Anime
              City brings to you the cinema viewing experience you’ve been
              waiting for with vendors waiting to serve you while you binge
              anime with others, connect with new people and possibly find a
              binge buddy.
            </p>
            <div className="flex flex-col w-[95%] mt-4">
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
                    <h1 className="font-bold">September 17th, 2022</h1>
                    <p>10am</p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className=" p-2 text-2xl font-bold bg-[#D9D9D9] w-[95%] mt-10">Tickets</div>
            <Ticket 
              level="Regular"
              price={500}
              quantity = {20}
              details = "One medium popcorn"
            />
            <Ticket 
              level="VIP"
              price={1000}
              quantity = {10}
              details = "One medium popcorn and one juice"
            />
            <Ticket 
              level="VVIP"
              price={1500}
              quantity = {10}
              details = "One medium popcorn, one soft drink and face paint"
            />
            <div className="w-[95%] flex justify-end mb-20">
              <Button color="secondary" padding="small">Continue</Button>
            </div>
          </div>
          <div className="flex flex-col pl-5 items-start border-l border-l-[#5C5C5C]">
            <div className="mt-8"></div>
            <Button color="primary" padding="big">
              Set Reminder
            </Button>
            <h1 className="font-bold text-2xl my-3">Share page</h1>
            <Image src={share} alt="share" />
          </div>
        </div>
        <Organizer 
          image={dp}
          username = "House of Gold"
          userId='zamani' 
          bio="My name is Nwamadi David Zamani, I’m an otaku my favorite anime’s are bleach first and foremost, one piece i mean why not, code queas i don’t know the correct spelling God help me and lastly noragami don’t you see it I could have a cutlas as my wepon, that would be awsome that would be all for now so good buy. "       
        />
      </div>
    </MainLayout>
  );
};

export default EventModule;
