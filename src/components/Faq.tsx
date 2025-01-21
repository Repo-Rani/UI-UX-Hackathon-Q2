import React from 'react'
import { faqData } from '../../data/data'
import FaqCard from './FaqCard'

const Faq = () => {
  return (
    
    <div className='grid grid-cols-1 xl:grid-cols-2  md:gap-[10px] gap-[20px]  '>
        {faqData.map((item, index) => (
    <FaqCard
      key={index}
      image={item.image}
      question={item.question}
      answer={item.answer}


      
     
      
    />
  ))}
    </div>
  )
}

export default Faq