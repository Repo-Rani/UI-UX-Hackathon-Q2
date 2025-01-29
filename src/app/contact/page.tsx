import React from 'react'
import Banner from '@/components/banner/Banner';
import Footer from '@/components/footer/Footer';

const page = () => {
  return (
    <>
    <section>
    <div>
      <Banner mainHeading='Contact Us' name="Contact"/>
    </div>
   
    </section>
    <div className='absolute  top-[1300px]'>
      <Footer/>
    </div>
    </>
  )
}

export default page
