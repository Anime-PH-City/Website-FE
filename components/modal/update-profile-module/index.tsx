import React from 'react'
import MiniOverlay from '../mini-overlay'
import { useForm } from "react-hook-form";
import Button from 'components/button';


const UpdateProfile = ({
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
        formState: { errors }
      } = useForm({
        defaultValues : {
          email: "",
        }
      });
  return (
    <MiniOverlay isOpen={isOpen} onClose={onClose} header={header}>
        <div className='w-[90%] mx-auto flex flex-col items-center'>
            <p className='[word-spacing:4px] tracking-wide font-semibold'>Please enter your email address</p>
            <form>
                <div className='mt-3'>
                <label htmlFor="email" className='text-sm mb-2 font-bold text-otaku-gray-2'>Email</label>
                <input
                {...register("email", { required: "Enter your email please" })}
                id="email"
                className="bg-otaku-gray-1 px-4 py-2 w-[100%]"
                placeholder='@'
                />
                <p className="text-sm text-otaku-red-1 font-normal">{errors.email?.message}</p>
                </div>
                <div className='flex w-[100%] flex-col items-center mt-8 '>
                <p className='mb-5 text-[15px]'>A six digit pin will be sent to this email address</p>
                <Button padding='small' color='primary'>Proceed</Button>
                </div>
            </form>
        </div>
    </MiniOverlay>
  )
}

export default UpdateProfile