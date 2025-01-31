import React from 'react'
import Image from 'next/image'
import { MenuCardProps } from '../../../types/type'
const MenuCard = ({id, image,name,desc,price}: MenuCardProps) => {
  return (
    <div className='w-[250px] xsm:w-[300px] sm:w-[376px] md:w-[300px] xlg:w-[376px] h-[79px] relative left-[25px] sm:left-0 md:left-[-100px]  xlg:left-0 '>
        <div className='flex xlg:justify-between justify-center gap-[15px] sm:gap-[30] xlg:gap-0 '>
            <Image src={image} alt={name}
            height={79} width={80} className='w-[80px] h-[79px] md:w-[65px] md:h-[60px] lg:w-[80px] lg:h-[79px] rounded-[6px]'/>
            <div className='flex flex-col justify-between '>
                <h3 className='sm:w-[154px]  sm:h-[28px] font-inter font-bold lg:text-[20px] text-[16px] text-[#ffffff] whitespace-nowrap '>{name}</h3>
           < p className='sm:w-[287px] md:w-[150px] lg:w-[220px] xlg:w-[287px] sm:h-[22px] font-inter font-normal lg:text-[14px] text-[10px] xl:whitespace-nowrap text-[#ffffff] '>{desc}</p>  
           <span className='sm:w-[49px] sm:h-[26px] lg:w-[49px] font-inter font-bold lg:text-[18px] text-[12px] md:mt-4 xl:mt-0 text-[#ff9f0d]'>{price}</span>                                                                            
            </div>

        </div>
    </div>
  )
}

export default MenuCard