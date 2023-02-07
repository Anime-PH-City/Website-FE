import MainLayout from "components/mainlayout";
import React from "react";
import Image from "next/image";
import shinra from "../../public/assets/imgs/shinra.png";
import Button from "components/button";
import Members from "./Members";

const Community = () => {
  return (
    <MainLayout>
    <div className="h-[150px]"></div>
      <div className="mt-6  w-[70%] mx-auto ">
        <div className="relative">
          <div className="w-[100%] text-center">
            <h1 className="font-bold text-4xl">
              Comm<span className="text-otaku-red-2">unity</span>
            </h1>
          </div>
          <div className="absolute right-10 top-[-10%] opacity-[0.3]">
            <Image src={shinra} alt="shinra" height={350} width={250} />
            <div className="w-[39px] h-[100px] absolute bg-white top-[46%] opacity-100"></div>
          </div>
          <div className="mt-8 w-[72%] text-2xl">
            <p>Contribute to Otaku Port Harcourt</p>
          </div>
          <div className="z-10 mt-8">
            <h1 className="font-bold text-4xl mb-8">Join the community</h1>
            <p>
              elementum vitae volutpat. Ornare dignissim nunc, placerat ut. Sed
              massa pharetra ultrices aenean dui odio placerat. A ornare lectus
              turpis purus placerat volutpat, risus interdum. Massa in et
              egestas odio.
            </p>
            <div className="w-[100%] flex justify-end mt-14">
              <Button color="primary" padding="long">
                Join
              </Button>
            </div>
          </div>
        </div>
        <Members />
      </div>
    </MainLayout>
  );
};

export default Community;
