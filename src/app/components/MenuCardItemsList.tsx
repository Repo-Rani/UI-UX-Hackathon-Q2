import React from 'react'
import { menuCardData } from '../../../data/data'
import MenuCard from './MenuCard'

const MenuCardItemsList = () => {
  return (
    <div className='grid grid-cols-1 xsm:grid-cols-2 gap-[15px] gap-x-36'>
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