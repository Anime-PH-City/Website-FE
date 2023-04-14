import Overlay from "components/modal/overlay";
import React from "react";
import { useForm } from "react-hook-form";
import add from "public/assets/svgs/add-circle.svg";
import Image from "next/image";
import twitter from "public/assets/svgs/twitter.svg";
import instagram from "public/assets/svgs/instagram.svg";
import web from "public/assets/svgs/web.svg";
import hyperlink from "public/assets/svgs/hyperlink.svg";
import Button from "components/button";


const Profile = ({
  isOpen,
  onClose,
  header,
}: {
  isOpen: boolean;
  onClose: () => void;
  header: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      picture: "",
      fullName: "",
      email: "",
      nickname: "",
      bio: "",
      tags: [],
      social: {
        twitter: "",
        instagram: "",
        website: "",
        link: "",
      },
    },
  });
  return (
    <Overlay isOpen={isOpen} onClose={onClose} header={header}>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="w-[12rem] h-[12rem] rounded-full flex justify-center items-center bg-otaku-gray-1">
              <p className="p-2 bg-white rounded-xl mt-7">Choose Image</p>
            </div>
            <label
              htmlFor="full-name"
              className="text-sm text-otaku-gray-2 font-bold block my-4"
            >
              Full Name
            </label>
            <input
              {...register("fullName", { required: "Enter your name please" })}
              id="full-name"
              className="bg-otaku-gray-1 px-6 py-2 rounded-lg w-[90%] block"
            />
            <p className="text-sm text-otaku-red-1 font-normal">
              {errors.fullName?.message}
            </p>
            <label
              htmlFor="email"
              className="text-sm text-otaku-gray-2 font-bold block my-4"
            >
              Email
            </label>
            <input
              {...register("email", { required: "Enter your email please" })}
              id="email"
              className="bg-otaku-gray-1 px-6 py-2 rounded-lg w-[90%] block"
            />
            <p className="text-sm text-otaku-red-1 font-normal">
              {errors.email?.message}
            </p>
            <label
              htmlFor="nickname"
              className="text-sm text-otaku-gray-2 font-bold block my-4"
            >
              Nick name
            </label>
            <input
              {...register("nickname", {
                required: "Kindly tell your moniker",
              })}
              id="nickname"
              className="bg-otaku-gray-1 px-6 py-2 rounded-lg w-[90%] block"
              placeholder="@moniker"
            />
            <p className="text-sm text-otaku-red-1 font-normal">
              {errors.nickname?.message}
            </p>
          </div>
          <div>
            <label htmlFor="bio" className="text-xl font-bold block mb-5">
              Bio
            </label>
            <textarea
              {...register("bio", {
                required: "This field cannot be empty",
              })}
              id="bio"
              className="bg-otaku-gray-1 px-6 py-2 rounded-lg w-[100%] h-40 resize-none"
            />
            <div>
              <p className="text-xl font-bold block my-6">Tags</p>
              <div className="flex flex-wrap gap-2">
                <div className="font-bold flex justify-around py-2 px-4 bg-otaku-gray-1 rounded-2xl">
                  Add
                  <Image src={add} alt="add" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[97%] my-10 mx-auto">
          <h2 className="text-xl font-bold">Socials</h2>
          <div className="grid grid-cols-2 gap-5 mt-4">
            <div className="bg-otaku-gray-1 p-5 flex flex-col justify-center items-center rounded-3xl my-1">
              <div className="flex items-center w-[100%]">
                <Image src={twitter} alt="twitter" />
                <label htmlFor="twitter" className="font-bold text-xl ml-1">
                  Twitter
                </label>
              </div>
              <input
                {...register("social.twitter")}
                id="twitter"
                className="px-6 py-2 rounded-lg w-[100%] block mt-3"
              />
            </div>
            <div className="bg-otaku-gray-1 p-5 flex flex-col justify-center items-center rounded-3xl my-1">
              <div className="flex items-center w-[100%]">
                <Image src={instagram} alt="instagram" />
                <label htmlFor="instagram" className="font-bold text-xl ml-1">
                  Instagram
                </label>
              </div>
              <input
                {...register("social.instagram")}
                id="instagram"
                className="px-6 py-2 rounded-lg w-[100%] block mt-3"
              />
            </div>
            <div className="bg-otaku-gray-1 p-5 flex flex-col justify-center items-center rounded-3xl my-1">
              <div className="flex items-center w-[100%]">
                <Image src={web} alt="website" />
                <label htmlFor="website" className="font-bold text-xl ml-1">
                  Website
                </label>
              </div>
              <input
                {...register("social.website")}
                id="website"
                className="px-6 py-2 rounded-lg w-[100%] block mt-3"
              />
            </div>
            <div className="bg-otaku-gray-1 p-5 flex flex-col justify-center items-center rounded-3xl my-1">
              <div className="flex items-center w-[100%]">
                <Image src={hyperlink} alt="link" />
                <label htmlFor="link" className="font-bold text-xl ml-1">
                  Link
                </label>
              </div>
              <input
                {...register("social.link")}
                id="link"
                className="px-6 py-2 rounded-lg w-[100%] block mt-3"
              />
            </div>
          </div>
        </div>
        <p className="[word-spacing:5px] tracking-wide"><b>Note<span className="text-otaku-red-1">*</span></b> your e-ticket will be sent to the email provided above please do well to ensure that the email is correct</p>
        <div className="w-[100%] flex justify-center my-7">
          <Button color="primary" padding="long">
          Done
          </Button>
        </div>
      </form>
    </Overlay>
  );
};

export default Profile;
