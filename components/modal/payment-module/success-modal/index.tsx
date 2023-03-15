import React from "react";
import Image from "next/image";
import exclude from "public/assets/imgs/exclude.png";
import Overlay from "components/modal/overlay";
import success from "public/assets/svgs/success.svg"

const SuccessModal = ({
  isOpen,
  onClose,
  header,
}: {
  isOpen: boolean;
  onClose: () => void;
  header: string;
}) => {
  return (
    <Overlay isOpen={isOpen} onClose={onClose} header={header}>
      <div className="grid grid-cols-[52%_48%] px-[3%]">
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center flex-col w-[50%]">
                <Image src= {success} alt = "done" />
                <p className="text-2xl font-bold mt-6">Thank you for your generous {header.replace(" ","").toLowerCase()}</p>
            </div>
        </div>
        <div>
          <Image src={exclude} alt="zoro" height={700} />
        </div>
      </div>
    </Overlay>
  );
};

export default SuccessModal;
