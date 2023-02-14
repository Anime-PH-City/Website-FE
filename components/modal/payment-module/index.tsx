import Overlay from '../overlay'
import React from 'react'

const Payment = ({isOpen, onClose, header}: {
  isOpen : boolean
  onClose : () => void
  header: string
}) => {
  return (
    <Overlay isOpen = {isOpen} onClose = {onClose} header = {header}>
      <div className='w-[100%]  flex justify-end text-otaku-blue-1 font-bold'>
        <div className='text-otaku-red-1 bg-otaku-blue-1'>Word is bond</div>
        <div></div>
      </div>
    </Overlay>
  )
}

export default Payment