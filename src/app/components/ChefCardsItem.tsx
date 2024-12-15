import React from 'react'
import { chefsData } from '../../../data/data'
import ChefCards from './ChefCards'
const ChefCardsItem = () => {
  return (
    <div className='grid grid-cols-2 xsm:grid-cols-4 gap-[20px]'>
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