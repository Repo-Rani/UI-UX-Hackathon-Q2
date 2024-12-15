import React from 'react'
import { faqData } from '../../../data/data'
import FaqCard from './FaqCard'

const Faq = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[10px] '>
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