import Overlay from 'modal/overlay'
import React from 'react'

const Profile = ({isOpen, onClose, header}: {
    isOpen : boolean
    onClose : () => void
    header: string
  }) => {
  return (
    <Overlay isOpen = {isOpen} onClose = {onClose} header = {header}>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <div className='z-[150] bg-otaku-gray-1 text-otaku-blue-1 h-[5vh] rounded-[50%] w-5 '>
            <p>Choose Image</p>
          </div>  
        </div>
        <div></div>
      </div>
    </Overlay>
  )
}

export default Profile