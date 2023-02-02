import React from 'react'
import Image, { StaticImageData } from "next/image";
import instagram from "../../../public/assets/svgs/instagram.svg";
import twitter from "../../../public/assets/svgs/twitter.svg";
import web from "../../../public/assets/svgs/web.svg";
import hyperlink from "../../../public/assets/svgs/hyperlink.svg";


const MemberCard = ({image, username, userId, bio, tags}:{
    image:StaticImageData,
    username: string,
    userId: string,
    bio: string
    tags: string[]
}) => {
  return (
    <div className=' bg-[#FAF9F9] p-4 my-8'>
        <div className="flex justify-center">
          <Image
            src={image}
            alt="display"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className='text-center w-[100%] my-2'>
            <h1 className='font-bold'>{username}</h1>
            <p>{userId}</p>
        </div>
        <div className='mb-4 flex flex-wrap'>
          {tags.map(tag => 
            <div className='py-1 px-2 bg-otaku-gray-1 font-bold h-fit w-fit text-[0.55rem] rounded-xl mr-2 my-1'>{tag}</div>
          )} 
        </div>
        <div className='text-sm'>
            <p>{bio}</p>
        </div>
        <div className="flex mt-6 w-[70%] justify-between">
            <Image src={instagram} alt="instagram"/>
            <Image src={twitter} alt="twitter"/>
            <Image src={web} alt="web"/>
            <Image src={hyperlink} alt="hyperlink"/>
        </div>
    </div>
  )
}

export default MemberCard