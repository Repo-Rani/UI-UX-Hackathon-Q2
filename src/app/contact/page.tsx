import React from 'react'
import Banner from '@/components/banner/Banner';
// import Footer from '@/components/footer/Footer';
import ContactForm from '@/components/contact/ContactForm';
import {   Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator, } from '@/components/ui/breadcrumb';
import Link from "next/link";

const Contact = () => {
  return (
    <>
    <section>
    <div>
      <Banner mainHeading='Contact Us' name="Contact"/>
    </div>
    <div className="absolute top-[160px] left-[100px]"> 
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/" className="font-satoshi">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link href="/helpCenter" className="font-satoshi">
              Help Center
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <Link href="/conatct" className="font-satoshi">
             Contact
            </Link>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
    <div className="mt-28 lg:mt-44 md:mt-32">
      <h1 className="flex justify-center items-center w-full mx-auto text-[25px] md:text-[28px] xxl:text-[42px] lg:text-[35px] text-black font-extrabold font-integralCf tracking-wider">Contact Us</h1>
      <ContactForm />
    </div>
    </section>
    {/* <div className='absolute  top-[1300px]'>
      <Footer/>
    </div> */}
    </>
  )
}

export default Contact;
