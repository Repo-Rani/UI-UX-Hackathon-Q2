import React from 'react'
import TestimonialCards from './TestimonialCards'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className='w-[1273px] h-[770px]  '>
        <span className='w-[128px] h-[40px] relative left-[4px] font-greatvibes text-[32px] font-normal text-[#ff9f0d]'>Testimonials</span>
        <h2 className='w-[599px] h-[56px] font-roboto font-bold text-[48px] text-[#333333]'>What Our Client are saying</h2>
<div className='relative top-[227px] '>
  <TestimonialCards/>
</div>

    </div>
  )
}

export default Testimonial