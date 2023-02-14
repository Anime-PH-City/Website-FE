import MainLayout from "components/mainlayout";
import React from "react";
import Image from "next/image";
import contact from "public/assets/imgs/contact-hero.png";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues : {
      name: "",
      email: "",
      message: ""
    }
  });
  return (
    <MainLayout>
      <div className="h-[150px]"></div>
      <div className="grid grid-cols-[40%_60%] w-[80%] mx-auto ">
        <div className="flex justify-end p-6 mt-5">
          <Image src={contact} alt="sensei" />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-3xl">
            Contact <span className="text-otaku-red-1">Us</span>
          </h1>
          <form
            className="flex flex-col pl-10 items-start mt-5 font-bold"
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <label htmlFor="name">Name</label>
            <input
              {...register("name", { required: "Enter your name please" })}
              id="name"
              className="bg-otaku-gray-1 px-6 py-2 rounded-2xl w-[100%]"
            />
            <p className="text-sm text-otaku-red-1 font-normal">{errors.name?.message}</p>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", { required: "Enter your email please" })}
              id="email"
              className="bg-otaku-gray-1 px-6 py-2 rounded-2xl w-[100%]"
            />
            <p className="text-sm text-otaku-red-1 font-normal">{errors.email?.message}</p>
            <label htmlFor="message">Message</label>
            <textarea
              {...register("message", {
                required: "This field cannot be empty",
              })}
              id="message"
              className="bg-otaku-gray-1 px-6 py-2 rounded-2xl w-[100%] h-36 resize-none"
            />
            <p className="text-sm text-otaku-red-1 font-normal">{errors.message?.message}</p>
            <div className="w-[90%] flex justify-end mt-6">
              <input
                type="submit"
                className="px-5 py-2 bg-otaku-red-1 text-white rounded-lg cursor-pointer "
              />
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
