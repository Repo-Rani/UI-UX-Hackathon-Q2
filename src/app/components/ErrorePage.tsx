import React from 'react'
import Footer from './Footer'
import Link from 'next/link'

const ErrorePage = () => {
  return (
    <div><h1 className="absolute top-[580px] left-[145px] md:left-[880px] xl:left-[680px] xxl:left-[880px] font-helvetica text-[#FF9F0D] text-[60px] md:text-[96px] font-bold">
    404
  </h1>
  <h3 className="text-[20px] md:text-[32px] font-helvetica font-bold text-[#333333] absolute md:left-[645px] xl:left-[445px] xxl:left-[645px] top-[680px] md:top-[725px] text-center ">
    Oops! Look likes something going wrong
  </h3>

  <p className="text-[14px] md:text-[18px] font-normal text-[#4F4F4F] font-inter w-[320px] md:w-[490px] absolute left-[35px]  md:left-[715px] xl:left-[515px] xxl:left-[715px]  text-center top-[760px] md:top-[790px]  ">
    Page Cannot be found! we will have it figured out in no time. Menwhile,
    cheek out these fresh ideas:
  </p>

  <button className=" w-[130px] h-[40px] md:w-[197px] md:h-[58px] absolute md:left-[862px] xl:left-[662px] xxl:left-[862px] left-[130px] top-[840px] md:top-[870px] py-[16px] px-[48px] rounded-[6px] text-[14px] md:text-[18px] font-bold text-white font-helvetica flex justify-center items-center bg-[#FF9F0D] whitespace-nowrap">
<Link href="/Home">Go to home</Link>
  </button>
  <div className="absolute top-[1050px]">
  <Footer/>
</div>
</div>
  )
}

export default ErrorePage