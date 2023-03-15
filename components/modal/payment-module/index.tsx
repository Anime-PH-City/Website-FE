import Overlay from "../overlay";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import donation from "public/assets/imgs/donation-bg.png";
import Button from "components/button";

const Payment = ({
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
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
  });
  return (
    <Overlay isOpen={isOpen} onClose={onClose} header={header}>
      <div className="grid grid-cols-[52%_48%] px-[3%]">
        <div>
          <h1 className="font-bold text-2xl mt-6">Billing Details</h1>
          <div className="mt-3 border-t w-[95%] border-black">
            <form>
              <div className="flex justify-between mt-6">
                <div>
                  <label htmlFor="first-name" className="font-bold ">
                    First Name
                  </label>
                  <input
                    {...register("firstName", {})}
                    id="first-name"
                    className="bg-otaku-gray-1 px-6 py-2  w-[92%] block mt-3 mb-6"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="font-bold ">
                    Last Name
                  </label>
                  <input
                    {...register("lastName", {})}
                    id="last-name"
                    className="bg-otaku-gray-1 px-6 py-2  w-[100%] block mt-3 mb-6"
                  />
                </div>
              </div>
              <label htmlFor="phone" className="font-bold">
                Phone Number
              </label>
              <input
                {...register("phone", { required: "Enter your name please" })}
                id="phone"
                className="bg-otaku-gray-1 px-6 py-2  w-[100%] mt-2 mb-4"
              />

              <label htmlFor="email" className="font-bold">
                <span className="text-red-500">*</span>Email
              </label>
              <input
                {...register("email", { required: "Your email is required" })}
                id="email"
                className="bg-otaku-gray-1 px-6 py-2  w-[100%] mt-2"
              />
              <p className="text-sm text-otaku-red-1 font-normal">
                {errors.email?.message}
              </p>
              <p>
                <span className="font-bold text-otaku-red-1">Note</span> your
                e-ticket would be sent to the email provided above please do
                well to ensure that the email is correct.
              </p>
              <div className="w-[100%] text-center mt-8 ">
                {" "}
                <Button padding="long" color="primary">
                  <p className="text-sm">CONTINUE</p>
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-[2%]">
          <Image src={donation} alt="zoro" height={670} />
        </div>
      </div>
    </Overlay>
  );
};

export default Payment;
