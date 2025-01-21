import React from 'react'
import Faq from '@/components/Faq'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

const FaqPage = () => {
  return (

    <>
    <section className="relative mx-auto w-full  max-w-[1920px] md:h-[2040px] h-[2200px] "
   
  >
    <div className=''>
      <Banner mainHeading="FAQ Page" name="faq"/>
    </div>
<div className='w-full flex justify-center items-center px-5'>
<div className='w-[300px] md:w-[650px] sm:w-[450px] xl:w-[1320px] h-[702px] absolute top-[440px] md:top-[530px] md:left-[85px] sm:left-[150px] lg:left-[200px] xl:left-[70px] xxl:left-[150px] xxxl:left-[250px]  '>
  <h1 className=' w-[300px] md:w-[501px] h-[56px] relative xl:left-[435px] font- font-helvetica font-bold text-[24px] md:text-[32px] lg:text-[48px] text-[#333333] text-center md:left-[50px]'>Questions Look Here</h1>
  <p className=' relative  xl:left-[305px] left-0  w-[300px] md:w-[600px] xl:w-[771px] md:top-[15px]  font-inter font-normal text-[12px] md:text-[16px] text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>

  <div className='w-[300px] sm:w-full xl:w-[1320px] md:h-[558px]  relative top-[60px] '>
    <div>
      <Faq/>
    </div>
    </div>
    </div>
    </div>
    </section>
    <div className='absolute xl:top-[1352px] top-[1500px]'>
    <Footer/>
    </div> 
    </>
  )
}

export default FaqPage