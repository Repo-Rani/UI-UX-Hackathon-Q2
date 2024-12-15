import React from 'react'
import Image from 'next/image'

const page = () => {
  // Sign up card
  return (
    <div className='w-[424px] h-[624px] absolute top-[530px] left-[743px] bg-[#ffffff]'>
 <h1 className='w-[76px] h-[28px] absolute left-[780px] top-[562px] font-inter font-bold text-[20px] text-[#000000]'>Sign Up</h1>
 <div className='w-[360px] flex justify-between'>
  <div className='flex justify-start gap-[10px]'>
    <Image  src="/User (1).svg" alt="user" height={24} width={24}/>
  <input type="text" placeholder='Name'  />
  
  </div>

 </div>
    </div>
  )
}

export default page


