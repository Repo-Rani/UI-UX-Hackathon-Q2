import React from 'react'
import Faq from '../components/Faq'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const FaqPage = () => {
  return (

    <>
    <section className="relative mx-auto w-[390px] md:w-[1920px] lg:w-[1920px] max-w-[1920px] "
   
  >
    <div className=''>
      <Banner mainHeading="FAQ Page" name="faq"/>
    </div>

<div className='w-[1320px] h-[702px] absolute top-[530px] left-[305px] '>
  <h1 className='w-[501px] h-[56px] relative left-[435px] font-roboto font-bold text-[48px] text-[#333333]'>Questions Look Here</h1>
  <p className=' relative top-[10px] font-inter font-normal text-[16px] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>

  <div className='w-[1320px] h-[558px] relative top-[60px] '>
    <div>
      <Faq/>
    </div>
    </div>
    </div>
    </section>
    <div className='absolute top-[1352px]'>
    <Footer/>
    </div> 
    </>
  )
}

export default FaqPage