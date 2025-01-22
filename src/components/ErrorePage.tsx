import React from 'react'
import Footer from './Footer'
import Link from 'next/link'

const ErrorePage = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <h1 className="absolute top-[580px]   font-helvetica text-[#FF9F0D] text-[60px] md:text-[80px] xl:text-[96px] font-bold">
    404
  </h1>
  <h3 className="text-[18px] xsm:text-[20px] md:text-[28px] xl:text-[32px] font-helvetica font-bold text-[#333333] absolute  ms:top-[670px] top-[660px] md:top-[685px] xl:top-[700px] text-center ">
    Oops! Look likes something going wrong
  </h3>

  <p className="text-[12px] md:text-[18px] font-normal text-[#4F4F4F] font-inter w-[300px] md:w-[490px] absolute  text-center top-[730px] ms:top-[710px] md:top-[730px] xl:top-[760px]  ">
    Page Cannot be found! we will have it figured out in no time. Menwhile,
    cheek out these fresh ideas:
  </p>

  <button className=" w-[130px] h-[40px] md:w-[197px] md:h-[58px] absolute top-[790px] md:top-[810px] ms:top-[770px] xl:top-[840px] py-[16px] px-[48px] rounded-[6px] text-[14px] md:text-[18px] font-bold text-white font-helvetica flex justify-center items-center bg-[#FF9F0D] whitespace-nowrap">
<Link href="/Home">Go to home</Link>
  </button>
  <div className="absolute top-[1050px]">
  <Footer/>
</div>
</div>
  )
}

export default ErrorePage