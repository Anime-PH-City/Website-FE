import React from "react";
import Image, { StaticImageData } from "next/image";
import instagram from "../../../public/assets/svgs/instagram.svg";
import twitter from "../../../public/assets/svgs/twitter.svg";
import web from "../../../public/assets/svgs/web.svg";
import hyperlink from "../../../public/assets/svgs/hyperlink.svg";


const index = ({
  image,
  username,
  userId,
  bio
}: {
  image: StaticImageData;
  username: string;
  userId: string;
  bio: string;
}) => {
  return (
    <div>
      <div className="h-[60px] bg-otaku-gray-1 text-2xl font-bold px-28 flex items-center">
        Organiser
      </div>
      <div className="px-28 py-8 bg-[#EDEDED]">
        <div className="grid grid-cols-[10%_80%] gap-6">
          <div className="flex justify-center">
            <Image src={image} alt="display" style={{ borderRadius: "50%" }} />
          </div>
          <div className="flex flex-col justify-evenly">
            <h1 className="font-bold text-2xl">{username}</h1>
            <p>{`@${userId}`}</p>
          </div>
        </div>
        <p className="mt-4 tracking-[1%]">{bio}</p>
        <div className="flex mt-6 w-[25%] justify-between">
            <Image src={instagram} alt="instagram"/>
            <Image src={twitter} alt="twitter"/>
            <Image src={web} alt="web"/>
            <Image src={hyperlink} alt="hyperlink"/>
        </div>
      </div>
    </div>
  );
};

export default index;
