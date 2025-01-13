import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <section>
    <div>
      <Banner mainHeading='Our Pages' name="Pages"/>
    </div>
   
    </section>
    <div className='absolute  top-[1300px]'>
      <Footer/>
    </div>
    </>
  )
}

export default page