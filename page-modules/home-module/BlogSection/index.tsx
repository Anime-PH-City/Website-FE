import Button from "components/button";
import React, {useState} from "react";
import Image from "next/image";
import img from "../../../public/assets/imgs/blog-section-image.png";
import { Container } from "./style";
import Payment from "modal/payment-module";

const BlogSection = () => {
  const [ isPaymentOpen, setIsPaymentOpen ] = useState(false)

  const togglePaymentOverlay = () => {
      setIsPaymentOpen(!isPaymentOpen)
  }
  return (
    <>
    <Payment isOpen = {isPaymentOpen} onClose = {togglePaymentOverlay} header = "Dona tion"/>
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
          <Button color="primary" padding="big" onClick={togglePaymentOverlay}>
            Donate
          </Button>
        </div>
      </div>
      <div className="mt-40 w-[77%] flex flex-col items-center justify-center">
        <h1 className="font-bold mb-16 text-5xl text-otaku-blue-1">Blog</h1>
        <div className="w-[100%] grid grid-cols-2 gap-[15%] px-5">
          <div className="h-[500px] bg-white rounded-[20px] grid grid-rows-[60%_40%] ">
            <div className="bg-kakashi bg-cover p-[5%] text-white flex items-end rounded-[20px_20px_0_0]">
              <h1 className="font-bold text-3xl">The Hype that October brings to the Otaku Community</h1>
            </div>
            <div className="p-[5%] flex flex-col justify-around ">
              <p>
                With the expected realese of multiple long awaited anime serise
                and movies the thought to be discontinued Bleach anime is said
                to make a return along with others{" "}
              </p>
              <span className="flex items-center">
                <h1 className="font-bold text-3xl mr-[2%]">Read More</h1>
                {`>>>`}
              </span>
            </div>
          </div>
          <div className="h-[500px] bg-white rounded-[20px] grid grid-rows-[60%_40%] ">
            <div className="bg-kakashi bg-cover p-[5%] text-white flex items-end rounded-[20px_20px_0_0]">
              <h1 className="font-bold text-3xl">The Hype that October brings to the Otaku Community</h1>
            </div>
            <div className="p-[5%] flex flex-col justify-around ">
              <p>
                With the expected realese of multiple long awaited anime serise
                and movies the thought to be discontinued Bleach anime is said
                to make a return along with others{" "}
              </p>
              <span className="flex items-center">
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
