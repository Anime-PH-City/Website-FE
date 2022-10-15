import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <p className=" text-center font-bold text-3xl xl:text-4xl">
        Sign up to our news letter to be updated at all times
      </p>
      <div className="flex w-[40vw] mx-auto text-otaku-gray-2 font-[600] text-xl mt-9">
        <input
          type="text"
          placeholder="Email"
          className=" border-otaku-gray-1 border-2 rounded-l-[30px] w-[75%] px-4 py-4  outline-none pl-9"
        />
        <button className="rounded-r-[30px] bg-otaku-red-2 w-[25%] text-white mon-hover">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
