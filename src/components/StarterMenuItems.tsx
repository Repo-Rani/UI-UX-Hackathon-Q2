import React from 'react'
import { StarterMenuProps } from '../../types/type'

const StarterMenuItems = ({names,desc,text,price}: StarterMenuProps) => {
  return (
    <div className="md:w-[760px] md:h-[111px] w-[390px] h-[80px] flex justify-between flex-col relative md:left-[20px] ">
    <div className="md:w-[760px] md:h-[111px] w-[320px] h-[80px] flex justify-between  ">
    <div className="flex justify-between flex-col ">
    <h1 className='md:text-[24px] text-[18px] font-helvetica text-[#333333] hover:text-[#FF9F0D] font-bold mt-[10px] cursor-pointer '>{names}</h1>
    <p className='md:text-[16px] text-[10px] font-helvetica font-normal text-[#4F4F4F]'>{desc}</p>
    <p className='md:text-[16px] text-[10px] font-helvetica font-normal text-[#4F4F4F]'>{text}</p>
    </div>
    <div className="">
      <p className='font-helvetica md:text-[24px] text-[18px] font-bold text-[#FF9F0D]'>{price}</p>
    </div>
    
        </div>
       
           
        </div>



  )
}

export default StarterMenuItems 