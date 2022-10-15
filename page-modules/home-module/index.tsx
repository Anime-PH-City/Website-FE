import MainLayout from "components/mainlayout";
import React from "react";

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
    </MainLayout>
  );
};

export default Home;
