import React from 'react'
import { StarterMenuProps } from '../../../types/type'

const StarterMenuItems = ({names,desc,text,price}: StarterMenuProps) => {
  return (
    <div className="xxl:w-[760px] sm:w-[475px] md:w-[520px] lg:w-[475px] sm:h-[111px] xsm:w-[390px] ms:w-[350px] w-[275px] h-[80px] flex justify-between flex-col relative   ">
    <div className="xxl:w-[760px] sm:w-[475px] md:w-[520px] lg:w-[475px] sm:h-[111px] w-[275px] ms:w-[320px] h-[80px] flex justify-between  relative left-[10px] md:left-0">
    <div className="flex justify-between flex-col ">
    <h1 className='xlg:text-[24px] sm:text-[20px] xsm:text-[18px] text-[16px] font-helvetica text-[#333333] hover:text-[#FF9F0D] font-bold mt-[10px] cursor-pointer '>{names}</h1>
    <p className='xlg:text-[16px] sm:text-[14px] text-[10px] font-helvetica font-normal text-[#4F4F4F]'>{desc}</p>
    <p className='xlg:text-[16px] sm:text-[14px]  text-[10px] font-helvetica font-normal text-[#4F4F4F]'>{text}</p>
    </div>
    <div className="">
      <p className='font-helvetica xlg:text-[24px] md:text-[20px] xsm:text-[18px] text-[16px] font-bold text-[#FF9F0D]'>{price}</p>
    </div>
    </div>
        
       
           
        </div>



  )
}

export default StarterMenuItems 