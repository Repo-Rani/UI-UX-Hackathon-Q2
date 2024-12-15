import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <section
  className="relative mx-auto w-[390px] md:w-[1920px] lg:w-[1920px] max-w-[1920px]"
 
>
  <div className=''>
    <Banner mainHeading="404 Errore" name="404"/>
  </div>

  <div className='w-[630px] h-[342px] absolute top-[530px] left-[645px] rounded-[6px] bg-purple-700'></div>
  </section>
  <div className='absolute top-[992px]'>
    <Footer/>
  </div>
  </>
  )
}

export default page