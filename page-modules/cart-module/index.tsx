import Button from "components/button";
import MainLayout from "components/mainlayout";
import Image from "next/image";
import React  from "react";
import { useForm } from "react-hook-form";
import CartItem from "./CartItem";
import kakashi from "public/assets/imgs/kakashi-cart.png"

const Cart = () => {
    const {
        register,
        handleSubmit
    } = useForm({
        defaultValues : {
            coupon: ""
          }
    })
  return (
    <MainLayout>
      <div className="h-[150px]"></div>
      <div className="mt-6  w-[75%] mx-auto ">
        <h2 className="my-2  ml-2 font-bold text-lg">Tickets</h2>
        <div className="grid grid-cols-[32%_20%_14%_14%_20%] font-extrabold h-[42px] bg-otaku-gray-1 place-items-center">
          <div></div>
          <div className="w-[100%]">
            <p>Product</p>
          </div>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="pb-20">
          <CartItem />
          <CartItem />
          <CartItem />
          <div className="h-16 w-[100%] bg-[#F2F2F2]  rounded-md"></div>
        </div>
        <div className="w-[100%] grid grid-cols-[40%_60%] pb-32">
            <div>
                <div className="mt-56">
                    <Image src = {kakashi} alt = "kakashi"/>
                </div>
            </div>
            <div>
                <form>
                    <input  
                        {...register("coupon")}
                        placeholder = "Coupon Code"
                        className="mr-4  border-[2px] border-[#848484] px-6 py-5 rounded-lg text-sm font-bold bg-[##F9F8F8] text-black"
                    />
                    <Button padding="big" color="secondary2">
                        <p className="text-sm">Apply Code</p>
                    </Button>
                </form>
                <div className="w-[100%] mt-6 rounded-xl border-[3px] border-[#8F8F8F]">
                    <div className="bg-otaku-gray-1 px-6 pt-4 pb-5 rounded-t-lg">
                        <h1 className="font-extrabold text-xl">Cart Total</h1>
                    </div>
                    <div className="px-8 pb-16">
                        <div className="w-[100%] flex justify-between border-b-2 pt-6 pb-1">
                            <p className="text-xl font-semibold">Subtotal</p>
                            <p className="text-xl"><span>&#8358;</span>3000.00</p>
                        </div>
                        <div className="w-[100%] flex justify-between border-b-2 pt-6 pb-1">
                            <p className="text-xl font-semibold">Coupon</p>
                            <p className="text-xl">- <span>&#8358;</span>500.00</p>
                        </div>
                        <div className="w-[100%] flex justify-between border-b-2 pt-6 pb-1">
                            <p className="text-xl font-semibold">Fee</p>
                            <p className="text-xl"><span>&#8358;</span>1200.00</p>
                        </div>
                        <div className="w-[100%] flex justify-between border-b-2 pt-6 pb-1">
                            <p className="text-xl font-semibold text-[#F7941D]">Total</p>
                            <p className="text-xl "><span>&#8358;</span>3700.00</p>
                        </div>
                        <div className="mt-6 flex justify-center">
                            <Button color="secondary2" padding="big">Proceed to Payment</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
