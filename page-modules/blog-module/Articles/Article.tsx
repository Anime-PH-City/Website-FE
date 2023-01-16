import React from "react";
import Image, { StaticImageData } from "next/image";
import { Url } from "url";

const Article = (props: {
  image: StaticImageData;
  username: string;
  userId: string;
  articleTitle: string;
  articleImage: StaticImageData;
  articleIntro: string;
}) => {
  return (
    <div className="grid grid-rows-[20%_80%] h-[500px] gap-4 mb-14">
      <div className="grid grid-cols-[10%_80%] gap-6">
        <div className="flex justify-center">
          <Image
            src={props.image}
            alt="display"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <h1 className="font-bold text-2xl">{props.username}</h1>
          <p>{`@${props.userId}`}</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <Image
          src={props.articleImage}
          alt="article image"
          style={{ objectFit: "cover" }}
        />
        <div className="px-[5%] flex flex-col justify-start">
            <h1 className="font-bold text-4xl [line-height:_130%]">{props.articleTitle}</h1>
            <p className="tracking-wide leading-7">{props.articleIntro}</p>
            <span className="flex items-center mt-7">
              <h1 className="font-bold text-3xl mr-[2%]">Read More</h1>
              {`>>>`}
            </span>
        </div>
      </div>
    </div>
  );
};

export default Article;
