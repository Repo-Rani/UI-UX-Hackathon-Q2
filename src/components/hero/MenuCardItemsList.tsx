import React from 'react'
import { menuCardData } from '../../../data/data'
import MenuCard from './MenuCard'

const MenuCardItemsList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-[20px] gap-x-[130px] lg:gap-x-[280px] xlg:gap-x-[130px]  '>
      {menuCardData.map((item, index) => (
    <MenuCard
   key={index}
      image={item.image}
      name={item.name}
      desc={item.desc}
      price={item.price}
      
     
      
    />
  ))}  
    </div>
  )
}

export default MenuCardItemsList