import Button from "components/button";
import MainLayout from "components/mainlayout";
import React  from "react";
import { useForm } from "react-hook-form";
import CartItem from "./CartItem";

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
        <div className="w-[100%] grid grid-cols-[40%_60%]">
            <div></div>
            <div>
                <form>
                    <input  
                        {...register("coupon")}
                        placeholder = "Coupon Code"
                        className="mr-4  border-[2px] border-[#848484] px-6 py-4 rounded-lg text-sm font-bold bg-[##F9F8F8] text-black"
                    />
                    <Button padding="small" color="primary2">Apply Code</Button>
                </form>
            </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
