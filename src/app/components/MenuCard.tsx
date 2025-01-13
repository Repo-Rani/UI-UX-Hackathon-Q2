import React from 'react'
import Image from 'next/image'
import { MenuCardProps } from '../../../types/type'
const MenuCard = ({id, image,name,desc,price}: MenuCardProps) => {
  return (
    <div className='w-[376px] h-[79px] '>
        <div className='flex md:justify-between justify-center gap-[25px] md:gap-0 '>
            <Image src={image} alt={name}
            height={79} width={80} className='w-[80px] h-[79px] rounded-[6px]'/>
            <div className='flex flex-col justify-between'>
                <h3 className='md:w-[154px] md:h-[28px] font-inter font-bold md:text-[20px] text-[16px] text-[#ffffff] whitespace-nowrap'>{name}</h3>
           < p className='md:w-[287px] md:h-[22px] font-inter font-normal md:text-[14px] text-[10px] text-[#ffffff] whitespace-nowrap'>{desc}</p>  
           <span className='md:w-[49px] md:h-[26px] font-inter font-bold md:text-[18px] text-[12px] text-[#ff9f0d]'>{price}</span>                                                                            
            </div>

        </div>
    </div>
  )
}

export default MenuCard