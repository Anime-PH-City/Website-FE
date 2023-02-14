import React, {useState} from 'react'
import Image from 'next/image'
import naira from "../../../public/assets/svgs/naira.svg"
import Select from "react-dropdown-select"

const Ticket = ({level, price, quantity, details}:{
  level:string
  price: number
  quantity: number
  details: string
}) => {
  const [values, setValues] = useState({})
  const options = [
    {
      value: 0,
      label: "None"
    },
    { 
      value: 1,
      label: "1"
    },
    {
      value:  2,
      label: "2"
    },
    { 
      value: 3,
      label: "3"
    },
    { 
      value: 4,
      label: "4"
    }
  ];
  return (
    <div className='w-[95%] h-[220px] my-7 border border-[#D9D9D9] grid grid-rows-[70%_30%] shadow-[0px_0px_4px_2px_rgba(0,_0,_0,_0.25)]'>
      <div className='border-b border-black'>
        <div className='w-[80%] flex justify-between m-auto h-[90%]  '>
          <div className='flex flex-col justify-around'>
            <p className='font-bold text-2xl'>{level}</p>
            <p className='text-3xl flex '>
              <Image src={naira} alt="naira"/>
              {price}
            </p>
          </div>
          <div className='flex flex-col justify-around items-end'>
            <Select 
              options={options} 
              onChange={(values) => {
                setValues(values) ; 
                console.log(values[0].value)
              }}
              className = ' bg-otaku-gray-2'
              style={{ borderRadius : '10px', padding: '7px 15px'}}
              placeholder = ""
              searchable = {false}
            />
            <p>{quantity} remaining tickets</p>
          </div>
        </div>
      </div>
      <div className='w-[80%] flex items-center px-14'>
        {details}
      </div>
    </div>
  )
}

export default Ticket