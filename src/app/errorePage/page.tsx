import React from 'react'
import Banner from '@/components/banner/Banner'
import Link from 'next/link'
// import Footer from '@/components/footer/Footer'

const ErrorePage = () => {
  return (
    <>
     <div className="">
        <Banner mainHeading="404 Errore" name="404" />
      </div>
   

    <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col justify-between items-center absolute top-[530px] space-y-4 md:space-y-5 '>

      <h1 className="   font-helvetica text-[#FF9F0D] text-[60px] md:text-[80px] xl:text-[96px] font-bold">
    404
  </h1>
  <h3 className="text-[18px] xsm:text-[20px] md:text-[28px] xl:text-[32px] font-helvetica font-bold text-[#333333]  text-center ">
    Oops! Look likes something going wrong
  </h3>

  <p className="text-[12px] md:text-[18px] font-normal text-[#4F4F4F] font-inter w-[300px] md:w-[490px]  text-center   ">
    Page Cannot be found! we will have it figured out in no time. Menwhile,
    cheek out these fresh ideas:
  </p>
  
  
  <button className=" w-[130px] h-[40px] md:w-[197px] md:h-[58px]  py-[16px] px-[48px] rounded-[6px] text-[14px] md:text-[18px] font-bold text-white font-helvetica flex justify-center items-center bg-[#FF9F0D] whitespace-nowrap">
<Link href="/Home">Go to home</Link>
  </button>
  </div>
  {/* <div className="absolute top-[1050px]">
  <Footer/>
</div> */}
</div>
</>
  )
}

export default ErrorePage