import React from 'react'
import { chefsData } from '../../../data/data'
import ChefCards from './ChefCards'
const ChefCardsItem = () => {
  return (
    <div className='grid grid-cols-3 md:grid-cols-4 md:gap-[20px]'>
       {chefsData.map((item, index) => (
    <ChefCards
   
      key={index}
      image={item.image}
      name={item.name}
      
     
      
    />
  ))}
    </div>
  )
}

export default ChefCardsItem