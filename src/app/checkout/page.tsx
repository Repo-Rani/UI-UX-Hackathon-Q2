import React from "react";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Link from "next/link";
import CheckoutForm from "../components/CheckoutForm";
const Checkout = () => {
  return (
    <>
    <section className="md:h-[2147px] h-[2500px]">

      <Banner name="Checkout" mainHeading="Checkout Page"/>
      <div className="w-[390px] md:w-[1320px] h-[723px] absolute md:left-[300px] xl:left-[100px] xxl:left-[300px] md:top-[630px] top-[530px] flex md:justify-between">

       
{/* Left Side */}

<CheckoutForm/>
{/* Right Side */}
        <div className="w-[320px] md:w-[424px] h-[620px] md:h-[700px] border-[1px] border-[#E0E0E0] px-8 py-3 relative md:top-[30px] top-[650px] md:right-0 right-[285px]">
          <div className="flex flex-col relative md:top-0 top-[5px] ">
            <div className="w-[250px] md:w-[376px] h-[80px] md:h-[104px] flex flex-col justify-center gap-[10px]">
              <div className="flex gap-[10px]">
                <Image
                  src="/checkeout.svg"
                  alt="food-image"
                  height={88}
                  width={82.72}
                  className="h-[60px] md:h-[88px] w-[60px] md:w-[82.72] "
                />
                <div className="flex flex-col justify-center gap-[5px]">
                  <h1 className="text-[14px] md:text-[16px] font-bold text-black font-helvetica">
                    Chicken Tikka Kabab
                  </h1>
                  <p className="text-[12px] md:text-[14px] font-normal text-[#4F4F4F] font-helvetica">
                    150 gm net
                  </p>
                  <p className="text-[12px] md:text-[14px] font-normal text-[#4F4F4F] font-helvetica">
                    50$
                  </p>
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="w-[200px] md:w-[353.44px] border-b-[1px] border-[#E0E0E0] mx-auto  mt-3 mb-3"></div>
          </div>
          <div className="flex flex-col gap-[10px] mt-2 ">
            <div className="w-[250px] md:w-[376px] h-[80px] md:h-[104px] flex flex-col justify-between">
              <div className="flex gap-[10px]">
                <Image
                  src="/checkeout.svg"
                  alt="food-image"
                  height={88}
                  width={82.72}
                  className="h-[60px] md:h-[88px] w-[60px] md:w-[82.72]"
                />
                <div className="flex flex-col justify-center gap-[5px]">
                  <h1 className="text-[14px] marker:md:text-[16px] font-bold text-black font-helvetica">
                    Chicken Tikka Kabab
                  </h1>
                  <p className="text-[12px] md:text-[14px] font-normal text-[#4F4F4F] font-helvetica">
                    150 gm net
                  </p>
                  <p className="text-[12px] md:text-[14px] font-normal text-[#4F4F4F] font-helvetica">
                    50$
                  </p>
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="w-[200px] md:w-[353.44px] border-b-[1px] border-[#E0E0E0] mx-auto  mb-5"></div>
          </div>
          <div className="flex flex-col gap-[10px] ">
            <div className="w-[250px] md:w-[376px] h-[80px] md:h-[104px] flex flex-col justify-between">
              <div className="flex gap-[10px]">
                <Image
                  src="/checkeout.svg"
                  alt="food-image"
                  height={88}
                  width={82.72}
                  className="h-[60px] md:h-[88px] w-[60px] md:w-[82.72]"
                />
                <div className="flex flex-col justify-center  gap-[5px]">
                  <h1 className="text-[14px] md:text-[16px] font-bold text-black font-helvetica">
                    Chicken Tikka Kabab
                  </h1>
                  <p className="text-[12px] md:text-[14px] font-normal text-[#4F4F4F] font-helvetica">
                    150 gm net
                  </p>
                  <p className="text-[12px] md:text-[14px] font-normal text-[#4F4F4F] font-helvetica">
                    50$
                  </p>
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="w-[200px] md:w-[353.44px] border-b-[1px] border-[#E0E0E0] mx-auto  mb-5"></div>
          </div>

          <div className="w-[250px] md:w-[376px] h-[80px] md:h-[104px] mx-auto flex flex-col justify-between ">
            <div className="flex flex-col justify-center gap-[10px]">
              <div className="flex justify-between items-center md:w-[376px] h-[24px]">
                <p className="font-normal font-helvetica text-[14px] md:text-[16px] text-[#4F4F4F]">
                  Sub-total
                </p>
                <p className="text-[#333333] font-normal font-helvetica text-[14px] md:text-[16px] ">
                  130$
                </p>
              </div>
              <div className="flex justify-between items-center md:w-[376px] h-[24px]">
                <p className="font-normal font-helvetica text-[14px] md:text-[16px] text-[#4F4F4F]">
                  Shipping
                </p>
                <p className="text-[#333333] font-normal font-helvetica text-[14px] md:text-[16px] ">
                  Free
                </p>
              </div>
              <div className="flex justify-between items-center md:w-[376px] h-[24px]">
                <p className="font-normal font-helvetica text-[14px] md:text-[16px] text-[#4F4F4F]">
                  Discount
                </p>
                <p className="text-[#333333] font-normal font-helvetica text-[14px] md:text-[16px] ">
                  25%
                </p>
              </div>
              <div className="flex justify-between items-center md:w-[376px] h-[24px]">
                <p className="font-normal font-helvetica text-[14px] md:text-[16px] text-[#4F4F4F]">
                  Tax
                </p>
                <p className="text-[#333333] font-normal font-helvetica text-[14px] md:text-[16px] ">
                  54.76$
                </p>
              </div>
              <div className="w-[200px] md:w-[353.44px] border-b-[1px] border-[#E0E0E0] mx-auto mb-5"></div>

              <div className="flex justify-between items-center md:w-[376px] h-[24px]">
                <p className="font-normal font-helvetica text-[14px] md:text-[16px] text-[#333333]">
                  Total
                </p>
                <p className="font-bold font-helvetica text-[14px] md:text-[18px]text-[#333333] ">
                  432.65$
                </p>
              </div>
            </div>
            <button className=" w-[180px] md:w-[376px] h-[40px] md:h-[58px] py-[10px] md:py-[16px] px-[48px] rounded-[6px] bg-[#FF9F0D] relative md:top-0 top-[15px] md:left-0 left-[30px]">
              <div className="flex justify-center items-center gap-[12px]">
                <p className="text-[16px] md:text-[18px] font-normal text-white font-helvetica whitespace-nowrap">
                  Place an order
                </p>
                <Image
                  src="/ArrowRight.svg"
                  alt=""
                  height={20}
                  width={20}
                  className="h-[20px] w-[20px]"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute md:top-[1500px] top-[1900px]">
      <Footer/>
      </div>
      </section>
    </>
  );
};

export default Checkout;
