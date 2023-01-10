import Button from "../../components/button"
import Image from 'next/image'
import fadedNaruto from "../../public/assets/imgs/faded-naruto.png"
import MainLayout from "components/mainlayout";
import React from "react";
import Events from "./Events"

const Home = () => {
  return (
    <MainLayout>
      <div className="h-[100vh] bg-otaku-home-hero bg-cover bg-no-repeat flex items-center justify-center">
        <div className="text-center w-[80vw]">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-[750] text-white font-avenir">
            <span className=" text-otaku-red-1">Otaku </span>Port Harcourt
          </h1>
          <h3 className=" text-white font-poppins font-[500] text-3xl xl:text-4xl pt-4">
            A community for Otakus/Weebs In Port Harcourt to connect and meet
            each other
          </h3>
          <button className=" rounded-[20px] font-bold text-2xl bg-white mt-5 py-5 px-24 mon-hover">
            Join Us
          </button>
        </div>
      </div>
      <div className="h-[900px] bg-about-bg bg-cover bg-no-repeat mt-6 grid grid-rows-[25%_75%] gap-12">
        <div className="w-[80%] lg:w-[100%] mx-auto text-center flex justify-center items-end ">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-otaku-blue-1 lg:pl-24 lg:mb-6">
            About Us
          </h1>
        </div>
        <div className="w-[75%] mx-auto mt-12 flex flex-col gap-4">
          <h1 className=" text-otaku-gray-1 lg:text-4xl font-bold">Our Goal</h1>
          <p className="text-0.25x1 lg:text-0.5x1 xl:text-base xl:[line-height:45px] xl:[letter-spacing:3%] font-semibold  text-otaku-gray-1 [word-spacing:7px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            lorem nulla leo mauris ultricies netus nisl mauris. Dignissim quis
            scelerisque vulputate volutpat volutpat, tristique. Tincidunt nisl
            cursus elit suscipit neque vel nullam. Nunc.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Consequat lorem nulla leo mauris
            ultricies netus nisl mauris. Dignissim quis scelerisque vulputate
            volutpat volutpat, tristique. Tincidunt nisl cursus elit suscipit
            neque vel nullam. Nunc.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Consequat lorem nulla leo mauris ultricies netus
            nisl mauris. Dignissim quis scelerisque vulputate volutpat volutpat,
            tristique. Tincidunt nisl cursus elit suscipit neque vel nullam.
            Nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consequat lorem nulla leo mauris ultricies netus nisl mauris.
            Dignissim quis scelerisque vulputate volutpat volutpat, tristique.
            Tincidunt nisl cursus elit suscipit neque vel nullam. Nunc.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="w-[75%] mx-auto mt-8 pt-4">
        <div className="mb-10">
          <h2 className="xl:text-4xl font-bold mb-6">Become a member</h2>
          <p className="[word-spacing:3px] [letter-spacing:1px]">
            elementum vitae volutpat. Ornare dignissim nunc, placerat ut. Sed
            massa pharetra ultrices aenean dui odio placerat. A ornare lectus
            turpis purus placerat volutpat, risus interdum. Massa in et egestas
            odio.
          </p>
        </div>
        <div className="flex justify-between ">
          <Image 
            src={fadedNaruto}
            alt="faded naruto"
          />
          <div className="mt-[10%]">
            <Button >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <Events />
    </MainLayout>
  );
};

export default Home;
