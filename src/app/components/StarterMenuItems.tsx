import React from 'react'
import { StarterMenuProps } from '../../../types/type'

const StarterMenuItems = ({names,desc,text,price}: StarterMenuProps) => {
  return (
    <div className="w-[760px] h-[111px] flex justify-between flex-col relative left-[20px] ">
    <div className="w-[760px] h-[111px] flex justify-between ">
    <div className="flex justify-between flex-col">
    <h1 className='text-[24px] font-roboto text-black font-bold mt-[10px]'>{names}</h1>
    <p className='text-[16px] font-roboto font-normal text-[#4F4F4F]'>{desc}</p>
    <p className='text-[16px] font-roboto font-normal text-[#4F4F4F]'>{text}</p>
    </div>
    <div className="">
      <p className='font-roboto text-[24px] font-bold text-[#FF9F0D]'>{price}</p>
    </div>
    
        </div>
       
           
        </div>



  )
}

export default StarterMenuItems