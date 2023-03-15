import Overlay from "components/modal/overlay";
import React from "react";
import Image from "next/image";
import exclude from "public/assets/imgs/exclude.png";
import { useForm } from "react-hook-form";
import Button from "components/button";

const CardMethod = ({
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
      cardNumber: "",
      expirationDate: "",
      ccv: "",
      amount: "",
    },
  });
  return (
    <Overlay isOpen={isOpen} onClose={onClose} header={header}>
      <div className="grid grid-cols-[52%_48%] px-[3%]">
        <div>
          <div className="border-2 border-otaku-gray-1 h-[100%] w-[90%]">
            <div className="w-[100%] pl-8 h-[15%] flex items-center border-b-4 border-b-otaku-gray-1">
              <h2 className="font-bold text-2xl">Card details</h2>
            </div>
            <form>
              <div className="w-[90%] mx-auto my-3">
                <label
                  htmlFor="exp-date"
                  className="font-bold text-otaku-gray-2"
                >
                  CARD NUMBER
                </label>
                <input
                  {...register("cardNumber", {
                    required: "This field cannot be empty",
                  })}
                  id="exp-date"
                  className="bg-otaku-gray-1 px-6 py-2  w-[100%] block mt-1 mb-2"
                />
                <p className="text-sm text-otaku-red-1 font-normal">
                  {errors.cardNumber?.message}
                </p>
              </div>
              <div className="w-[90%] mx-auto my-3 grid grid-cols-[70%_30%]">
                <div>
                  <label
                    htmlFor="exp-date"
                    className="font-bold text-otaku-gray-2"
                  >
                    EXP DATE
                  </label>
                  <input
                    {...register("expirationDate", {
                      required: "Required!",
                    })}
                    id="exp-date"
                    className="bg-otaku-gray-1 px-6 py-2  w-[80%] block mt-1 mb-2"
                  />
                  <p className="text-sm text-otaku-red-1 font-normal">
                    {errors.expirationDate?.message}
                  </p>
                </div>
                <div>
                  <label htmlFor="ccv" className="font-bold text-otaku-gray-2">
                    CCV
                  </label>
                  <input
                    {...register("ccv", {
                      required: "Required!",
                    })}
                    id="ccv"
                    className="bg-otaku-gray-1 px-6 py-2  w-[100%] block mt-1 mb-2"
                  />
                  <p className="text-sm text-otaku-red-1 font-normal">
                    {errors.ccv?.message}
                  </p>
                </div>
              </div>
              <div className="w-[90%] mx-auto my-3">
                <label htmlFor="amount" className="font-bold text-otaku-gray-2">
                  AMOUNT
                </label>
                <input
                  {...register("amount", {
                    required: "There has to be an amount",
                  })}
                  id="amount"
                  className="bg-otaku-gray-1 px-6 py-2  w-[100%] block mt-1 mb-2"
                />
                <p className="text-sm text-otaku-red-1 font-normal">
                  {errors.amount?.message}
                </p>
              </div>
              <div className="w-[90%] mx-auto mb-3 mt-[4.5rem] text-center">
                <Button padding="big" color="primary">COMPLETE PAYMENT</Button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <Image src={exclude} alt="zoro" height={700} />
        </div>
      </div>
    </Overlay>
  );
};

export default CardMethod;
