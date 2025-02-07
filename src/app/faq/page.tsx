import React from "react";
import Banner from "@/components/banner/Banner";
import FaqCard from "@/components/faq/FaqCard";
// import Footer from "@/components/footer/Footer";

const FaqPage = () => {
  return (
    <>
      <div>
        <Banner mainHeading="FAQ Page" name="faq" />
      </div>
      <section className="relative mx-auto w-full flex justify-center items-center  max-w-[1920px] md:h-[2040px] h-[2200px] ">
        <div className="w-[300px] md:w-[650px]  sm:w-[450px] xl:w-[1320px] h-[702px]  flex justify-center items-center flex-col absolute md:top-[100px] top-[50px]">
          <h1 className=" w-[300px] md:w-[501px] h-[56px] relative  font- font-helvetica font-bold text-[24px] md:text-[32px] lg:text-[48px] text-[#333333] text-center ">
            Questions Look Here
          </h1>
          <p className=" relative  w-[318px] md:w-[600px]  md:top-[15px]  font-inter font-normal xl:w-[815px] text-[12px] md:text-[16px] text-center md:px-0 px-5 ">
            Find answers to your most common questions here. We are here to help
            you with all the information you need!
          </p>

          <div className="w-[300px] sm:w-full xl:w-[1320px] md:h-[558px]  relative top-[60px] ">
            <div>
              <FaqCard />
            </div>
          </div>
        </div>
      </section>
      {/* <div className="absolute xl:top-[1352px] top-[1500px]">
        <Footer />
      </div> */}
    </>
  );
};

export default FaqPage;
