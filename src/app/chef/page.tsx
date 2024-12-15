import React from 'react'
import Banner from '../components/Banner'
import ChefCardsItem from '../components/ChefCardsItem'
import Footer from '../components/Footer'

const Chef = () => {
  return (
    <>
 <section>
    <Banner mainHeading="Our Chef" name="Chef"/>
    <div className='w-[1320px] h-[1386px] absolute top-[580px] md:left-[300px] xsm:left-[225px]  '>
      <ChefCardsItem/>
    </div>
 </section>
 <div className='absolute top-[2036px]'>
 <Footer/>
 </div>
 </>
  )
}

export default Chef