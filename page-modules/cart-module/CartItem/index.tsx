import Image from 'next/image'
import React from 'react'
import naira from "public/assets/svgs/naira.svg"
import flier from "public/assets/imgs/flier.png"
import close from "public/assets/svgs/close-circle.svg"

const CartItem = () => {
  return (
    <>
    <div className='h-3 w-[100%] bg-[#F2F2F2] mb-1 rounded-3xl'></div>
    <div className='grid grid-cols-[32%_20%_14%_14%_20%] mb-1 place-items-center bg-white'>
        <div className='grid grid-cols-[20%_5%_55%_20%] w-[100%]'>
            <div className='bg-[#F2F2F2] flex justify-center items-center cursor-pointer'>
                <Image  src={close} alt =  "close" />
            </div>
            <div></div>
            <div className='w-[100%] h-[100%]' >
                <Image  src={flier} alt =  "flier"/>
            </div>
            <div></div>
        </div>
        <div className=''>
            <p className='font-bold'>Otaku PH City Casual Hangout</p>
            <p >Regular</p>
        </div>
        <div className='flex items-center'>
            <Image src = {naira} alt = "naira" width={25} />
            <span>500.00</span>
        </div>
        <div className='flex justify-start w-[100%] '>
            <div className=' bg-otaku-gray-1 ml-7 py-2 w-20 rounded-[1.25rem]'>
                <p className='ml-5'>6</p>
            </div>
        </div>
        <div className='flex items-center'>
            <Image src = {naira} alt = "naira" width={25}/>
            <span>3000.00</span>
        </div>
    </div>
    </>
  )
}

export default CartItem