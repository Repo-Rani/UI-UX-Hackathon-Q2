import React from 'react'
import Faq from '../components/Faq'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const FaqPage = () => {
  return (

    <>
    <section className="relative mx-auto w-[390px] md:w-[1920px] xl:w-[1484px] xxl:w-[1920px] lg:w-[1920px] max-w-[1920px] md:h-[2126px] h-[2200px] "
   
  >
    <div className=''>
      <Banner mainHeading="FAQ Page" name="faq"/>
    </div>

<div className='w-[300px] md:w-[1320px] h-[702px] absolute top-[440px] md:top-[530px] md:left-[305px] xl:left-[100px] xxl:left-[305px] left-[30px] '>
  <h1 className=' w-[320px] md:w-[501px] h-[56px] relative md:left-[435px] font- font-helvetica font-bold text-[24px] md:text-[48px] text-[#333333] text-center'>Questions Look Here</h1>
  <p className=' relative  md:left-[305px] left-0  w-[320px] md:w-[771px] md:top-[10px]  font-inter font-normal text-[12px] md:text-[16px] text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>

  <div className='w-[320px] md:w-[1320px] md:h-[558px]  relative top-[60px] '>
    <div>
      <Faq/>
    </div>
    </div>
    </div>
    </section>
    <div className='absolute md:top-[1352px] top-[1400px]'>
    <Footer/>
    </div> 
    </>
  )
}

export default FaqPage