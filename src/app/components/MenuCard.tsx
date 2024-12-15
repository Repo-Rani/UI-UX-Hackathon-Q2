import React from 'react'
import Image from 'next/image'
import { MenuCardProps } from '../../../types/type'
const MenuCard = ({id, image,name,desc,price}: MenuCardProps) => {
  return (
    <div className='w-[376px] h-[79px] '>
        <div className='flex justify-between gap-[10px] '>
            <Image src={image} alt={name}
            height={79} width={80} className='rounded-[6px]'/>
            <div className='flex flex-col justify-between'>
                <h3 className='w-[154px] h-[28px] font-inter font-bold text-[20px] text-[#ffffff] whitespace-nowrap'>{name}</h3>
           < p className='w-[287px] h-[22px] font-inter font-normal text-[14px] text-[#ffffff] whitespace-nowrap'>{desc}</p>  
           <span className='w-[49px] h-[26px] font-inter font-bold text-[18px] text-[#ff9f0d]'>{price}</span>                                                                            
            </div>

        </div>
    </div>
  )
}

export default MenuCard