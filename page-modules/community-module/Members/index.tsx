import React, { useState } from "react";
import MemberCard from "./MemberCard";
import dp from "../../../public/assets/imgs/display-picture.png";

const index = () => {
  const [tag, setTag] = useState("");
  function handleChange(event: React.FormEvent) {
    let target = event.target as HTMLInputElement;
    setTag(target.value);
  }
  return (
    <div className="mt-10">
      <div className="w-[90%] flex justify-between items-center pl-6">
        <h1 className="font-bold text-2xl">Our Members and Contributors</h1>
        <input
          placeholder="Search by name, nickname or tags"
          value={tag}
          onChange={handleChange}
          name="searchvalue"
          className="bg-otaku-gray-1 px-6 py-2 rounded-2xl w-[40%]"
        />
      </div>
      <div className="w-[110%] mx-auto grid grid-cols-3 gap-8 mt-8">
        <MemberCard
          image={dp}
          username="Nwamadi David Zamani"
          userId="@zamani"
          bio="My name is Nwamadi David Zamani, I’m an otaku my favorite anime’s are bleach first and foremost, one piece i mean why not, code queas i don’t know the correct spelling God help me and lastly noragami don’t you see it I could have a cutlas as my wepon, that would be awsome that would be all for now so good buy. "
          tags = {['UI/UX Designer', 'No Code', 'One Piece', 'Bleach','Bleach','Bleach']}
        />
        <MemberCard
          image={dp}
          username="Nwamadi David Zamani"
          userId="@zamani"
          bio="My name is Nwamadi David Zamani, I’m an otaku my favorite anime’s are bleach first and foremost, one piece i mean why not, code queas i don’t know the correct spelling God help me and lastly noragami don’t you see it I could have a cutlas as my wepon, that would be awsome that would be all for now so good buy. "
          tags = {['UI/UX Designer', 'No Code', 'One Piece', 'Bleach','Bleach','Bleach']}
        />
        
      </div>
    </div>
  );
};

export default index;
