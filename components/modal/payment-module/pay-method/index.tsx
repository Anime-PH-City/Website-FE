import Overlay from 'components/modal/overlay'
import React from 'react'
import Image from "next/image";
import exclude from "public/assets/imgs/exclude.png";

const PayMethod = ({
  isOpen,
  onClose,
  header,
  cardOpen,
  transferOpen,
  ussdOpen
}: {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  cardOpen: () => void
  transferOpen: () => void
  ussdOpen?: () => void
}) => {
  const handleCardClick = () => {
    onClose()
    cardOpen()
  }
  const handleTransferClick = () => {
    onClose()
    transferOpen()
  }
  return (
    <Overlay isOpen={isOpen} onClose={onClose} header={header}>
      <div className="grid grid-cols-[52%_48%] px-[3%]">
        <div>
          <div className='border-2 border-otaku-gray-1 h-[100%] w-[90%]'>
            <div className='w-[100%] pl-8 h-[15%] flex items-center border-b-4 border-b-otaku-gray-1'>
              <h2 className='font-bold text-2xl'>Payment Methods</h2>
            </div>
            <div 
              className='my-2 h-[15%] pl-8 flex items-center border-y border-otaku-gray-1'
              onClick={handleCardClick}>
              <p className='font-bold text-2xl text-otaku-gray-2'>Card</p>
            </div>
            <div 
              className='my-2 h-[15%] pl-8 flex items-center border-y border-otaku-gray-1'
              onClick={handleTransferClick}>
              <p className='font-bold text-2xl text-otaku-gray-2'>Bank Transfer</p>
            </div>
            <div className='my-2 h-[15%] pl-8 flex items-center border-y border-otaku-gray-1'>
              <p className='font-bold text-2xl text-otaku-gray-2'>USSD</p>
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

export default PayMethod