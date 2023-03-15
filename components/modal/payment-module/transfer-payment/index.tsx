import React from 'react'
import Image from "next/image";
import exclude from "public/assets/imgs/exclude.png";
import Overlay from "components/modal/overlay";
import { useForm } from "react-hook-form";
import Button from 'components/button';

const TransferMethod = ({
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
      amount: ""
    },
  });
  return (
    <Overlay isOpen={isOpen} onClose={onClose} header={header}>
    <div className="grid grid-cols-[52%_48%] px-[3%]">
      <div>
      <div className="border-2 border-otaku-gray-1 h-[100%] w-[90%]">
            <div className="w-[100%] pl-8 h-[15%] flex items-center border-b-4 border-b-otaku-gray-1">
              <h2 className="font-bold text-2xl">Bank Transfer</h2>
            </div>
            <div className='w-[90%] mx-auto my-6'>
            <label htmlFor="amount" className="font-bold text-otaku-blue-1">
                  AMOUNT PAID
                </label>
                <input
                  {...register("amount", {
                    required: "There has to be an amount"
                  })}
                  id="amount"
                  className="bg-otaku-gray-1 px-6 py-2  w-[100%] block mt-3 mb-2 rounded-md "
                />
                <p className="text-sm text-otaku-red-1 font-normal">
                  {errors.amount?.message}
                </p>
                <div className='text-center mt-5'>
                  <Button color='primary' padding='long'><p>CONTINUE</p></Button>
                </div>
            </div>
          </div>
      </div>
      <div>
        <Image src={exclude} alt="zoro" height={700} />
      </div>
    </div>
  </Overlay>
  )
}

export default TransferMethod