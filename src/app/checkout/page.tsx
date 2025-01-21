import React from "react";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Link from "next/link";
import CheckoutForm from "@/components/CheckoutForm";
import PlaceOrder from "@/components/PlaceOrder";
const Checkout = () => {
  return (
    <>
    <section className="xl:h-[2147px] h-[2500px]">

      <Banner name="Checkout" mainHeading="Checkout Page"/>
      <div className="w-full xl:w-[1320px] h-[723px] absolute xxxl:left-[300px]  xl:left-[100px] xxl:left-[200px]  xl:top-[630px] top-[530px] max-w-[1920px] flex  md:justify-between lg:justify-center lg:gap-[200px] xl:gap-[100px]">

       
{/* Left Side */}

<CheckoutForm/>
{/* Right Side */}
<PlaceOrder/>
      </div>
      <div className="absolute xl:top-[1500px] top-[1900px]">
      <Footer/>
      </div>
      </section>
    </>
  );
};

export default Checkout;
