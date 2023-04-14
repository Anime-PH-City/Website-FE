import Button from "components/button";
import React, { useState } from "react";
import Image from "next/image";
import img from "../../../public/assets/imgs/blog-section-image.png";
import { Container } from "./style";
import Payment from "components/modal/payment-module";
import BlogPost from "components/modal/blogpost-module";
import PayMethod from "components/modal/payment-module/pay-method";
import CardMethod from "components/modal/payment-module/card-payment";
import OTPModal from "components/modal/otpModal";
import SuccessModal from "components/modal/payment-module/success-modal";
import Transfer from "components/modal/payment-module/transfer-payment";

const BlogSection = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isBlogPostOpen, setIsBlogPostOpen] = useState(false)
  const [isPayMethodOpen, setIsPayMethodOpen] = useState(false)
  const [isCardMethodOpen, setIsCardMethodOpen] = useState(false)
  const [isTransferMethodOpen, setIsTransferMethodOpen] = useState(false)
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)


  const togglePaymentOverlay = () => {
    setIsPaymentOpen(!isPaymentOpen);
  };

  const toggleBlogPostOverlay = () => {
    setIsBlogPostOpen(!isBlogPostOpen);
  }

  const togglePayMethodOverlay = () => {
    setIsPayMethodOpen(!isPayMethodOpen);
  }

  const toggleCardMethodOverlay = () => {
    setIsCardMethodOpen(!isCardMethodOpen);
  }

  const toggleTransferMethodOverlay = () => {
    setIsTransferMethodOpen(!isTransferMethodOpen);
  }

  const toggleOTPModalOverlay = () => {
    setIsOTPModalOpen(!isOTPModalOpen);
  }

  const toggleSuccessModalOverlay = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen);
  }


  return (
    <>
      <Payment
        isOpen={isPaymentOpen}
        onClose={togglePaymentOverlay}
        header="Dona tion"
      />
      <PayMethod 
        isOpen={isPayMethodOpen}
        onClose={togglePayMethodOverlay}
        header="Dona tion"
        cardOpen={toggleCardMethodOverlay}
        transferOpen = {toggleTransferMethodOverlay}
      />
      <CardMethod 
        isOpen={isCardMethodOpen}
        onClose={toggleCardMethodOverlay}
        header="Dona tion"
      />
      <Transfer 
        isOpen={isTransferMethodOpen}
        onClose={toggleTransferMethodOverlay}
        header="Dona tion"
      />
      <BlogPost 
        isOpen={isBlogPostOpen}
        onClose={toggleBlogPostOverlay}
        header=""
      />
      <OTPModal 
        isOpen={isOTPModalOpen}
        onClose={toggleOTPModalOverlay}
        header="Dona tion"
        source = "phone number"
        reason = "payment"
      />
      <SuccessModal 
        isOpen={isSuccessModalOpen}
        onClose={toggleSuccessModalOverlay}
        header="Dona tion"
      />
      <Container>
        <div className="absolute top-[18%] left-[10%] z-50 w-[35%]">
          <Image src={img} alt="background-photo" />
        </div>
        <div className="w-[77%] text-white">
          <h1 className="font-bold text-5xl mb-6">Support the community</h1>
          <p>
            elementum vitae volutpat. Ornare dignissim nunc, placerat ut. Sed
            massa pharetra ultrices aenean dui odio placerat. A ornare lectus
            turpis purus placerat volutpat, risus interdum. Massa in et egestas
            odio.
          </p>
          <div className="w-[100%] flex justify-end mt-11">
            <Button
              color="primary"
              padding="big"
              onClick={togglePaymentOverlay}
            >
              Donate
            </Button>
          </div>
        </div>
        <div className="mt-40 w-[77%] flex flex-col items-center justify-center">
          <h1 className="font-bold mb-16 text-5xl text-otaku-blue-1">Blog</h1>
          <div className="w-[100%] grid grid-cols-2 gap-[15%] px-5">
            <div className="h-[500px] bg-white rounded-[20px] grid grid-rows-[60%_40%] ">
              <div className="bg-kakashi bg-cover p-[5%] text-white flex items-end rounded-[20px_20px_0_0]">
                <h1 className="font-bold text-3xl">
                  The Hype that October brings to the Otaku Community
                </h1>
              </div>
              <div className="p-[5%] flex flex-col justify-around ">
                <p>
                  With the expected realese of multiple long awaited anime
                  serise and movies the thought to be discontinued Bleach anime
                  is said to make a return along with others{" "}
                </p>
                <span className="flex items-center cursor-pointer" onClick={toggleBlogPostOverlay}>
                  <h1 className="font-bold text-3xl mr-[2%]">Read More</h1>
                  {`>>>`}
                </span>
              </div>
            </div>
            <div className="h-[500px] bg-white rounded-[20px] grid grid-rows-[60%_40%] ">
              <div className="bg-kakashi bg-cover p-[5%] text-white flex items-end rounded-[20px_20px_0_0]">
                <h1 className="font-bold text-3xl">
                  The Hype that October brings to the Otaku Community
                </h1>
              </div>
              <div className="p-[5%] flex flex-col justify-around ">
                <p>
                  With the expected realese of multiple long awaited anime
                  serise and movies the thought to be discontinued Bleach anime
                  is said to make a return along with others{" "}
                </p>
                <span className="flex items-center cursor-pointer" onClick={toggleBlogPostOverlay}>
                  <h1 className="font-bold text-3xl mr-[2%]">Read More</h1>
                  {`>>>`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogSection;
