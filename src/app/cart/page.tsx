// 'use client'
// import Banner from "../components/Banner";
// import Image from "next/image";
// import { useState } from "react";
// import Footer from "../components/Footer";
// import { ShopCardProps } from "../../../types/type";
// import Link from "next/link";
// const Cart = () => {
 

//   return (
//     <>
//       <div>
//         <Banner mainHeading="Shopping Cart" name="Shopping Cart" />
//       </div>
//       <div className="w-full max-w-[1920px] relative mx-auto"></div>
//       <section className="w-full sm:w-[550px] md:w-full xl:w-[1320px] h-[765px] items-center absolute top-[570px] ms:left-[-5px] xsm:left-[-35px] lg:left-0 md:left-[-50px] sm:left-[15px] xl:left-[70px] xxl:left-[130px] xxxl:left-[301px] flex flex-col justify-between">
//       <div className="w-[300px] lg:w-[700px] md:w-[600px] sm:w-[550px] xl:w-[1325.86px] h-[29.04px] relative lg:left-[-85px] sm:left-[20px] xl:left-0 top-[-30px] flex justify-between">
//         <h2 className="w-[50px] sm:w-[100px] h-[29.04px] font-inter font-bold text-[16px] md:text-[18px] text-[#333333]">
//           Product
//         </h2>

//         <div className="flex md:justify-between justify-center md:gap-0 gap-4 sm:gap-10 items-center absolute top-0 left-[60px] ms:left-[80px] xsm:left-[120px] sm:left-[160px] md:left-[260px] lg:left-[400px] xl:left-[530px] w-[250px] sm:w-[400px] xl:w-[730px] list-none">
//           <li className="md:w-[58.55px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Price</li>
//           <li className="md:w-[94.59px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Quantity</li>
//           <li className="md:w-[55.18px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Total</li>
//           <li className="md:w-[121.61px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Remove</li>
//         </div>
//       </div>

    
//       </section>

//       {/*  coupan code and sub total part */}
 
//     <div className="w-[300px] xl:w-[1320px] h-[338px] absolute sm:top-[1350px] top-[1270px] xl:top-[1414px] left-[10px] ms:left-[35px] sm:left-[50px] md:left-[80px] lg:left-[30px] xl:left-[50px]  xxl:left-[130px] xxxl:left-[301px]  flex justify-between">
//          <div className="w-[300px]  xl:w-[648px] h-[252px]  justify-between  flex flex-col">
//            <h1 className="font-halvetica text-[22px] sm:text-[28px] xl:text-[32px] font-bold  text-black ">
//              Coupon Code
//            </h1>
//            <div className="flex flex-col justify-center xl:pr-0 pr-2 pl-2 xl:pl-6 gap-[20px] w-[300px] ms:w-[320px] sm:w-[500px] lg:w-[400px] xl:w-[648px] h-[188px] rounded-[6px] border-[1px] border-[#E0E0E0] relative xl:top-0 top-[-15px]">
//              <p className="font-inter font-normal text-[14px] sm:text-[14px] xl:text-[18px] text-[#828282] w-[300px] sm:w-[400px]  xl:w-[472px]">
//                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//                diam pellentesque bibendum non
//              </p>
//              <div className=" w-[280px] md:w-[420px] lg:w-[380px] xl:w-[598px] h-[50px] xl:h-[62px] rounded-[6px] border-[1px] border-[#E0E0E0] flex justify-between left-[-10px] ">
//                <input
//                  type="text"
//                  placeholder="Enter Here code"
//                  className="font-inter text-[14px] xl:text-[16px] font-normal text-[#828282] pl-4 border-none outline-none  xl:w-[480px]"
//                />
//                <button className="w-[89px] h-[50px] xl:h-[62px] rounded-[6px] bg-[#FF9F0D] flex justify-center items-center text-white font-normal font-inter whitespace-nowrap text-[12px] xl:text-[18px]">
//                  Apply
//                </button>
//              </div>
//            </div>
//          </div>
//          <div className="w-[250px] xl:w-[648px] h-[337px] flex flex-col justify-center relative md:top-[280px] lg:top-0 top-[280px] xl:right-0 lg:right-[-150px] right-[300px] gap-[20px]">
//            <h1 className="font-halvetica text-[22px] sm:text-[28px] xl:text-[32px] font-bold text-[#333333]">
//              Total Bill
//            </h1>

//            <div className="w-[300px] sm:w-[500px] xl:w-[648px] h-[185px] rounded-[6px] border-[1px] border-[#E0E0E0] flex justify-center flex-col gap-[15px] py-4">
//              <div className="flex justify-between w-[300px] sm:w-[450px] xl:w-[600px] pt-4 xl:pt-6 xl:px-0 px-2 mx-auto">
//                <p className="font-halvetica text-[16px] xl:text-[20px] font-bold text-[#333333] ">
//                  Cart Subtotal
//                </p>
//                <p className="font-bold font-inter text-[14px] xl:text-[18px] text-[#333333] ">
//                  $120.00
//                </p>
//              </div>
//              <div className="flex justify-between w-[300px] sm:w-[450px] xl:w-[600px] pt-4 xl:pt-6 xl:px-0 px-2 mx-auto">
//                <p className="font-inter text-[14px] xl:text-[18px] font-normal text-[#4F4F4F] ">
//                  Shipping Charge
//                </p>
//                <p className="font-inter text-[18px] font-normal text-[#4F4F4F] ">
//                  $00.00
//                </p>
//              </div>

//              <div className="w-[300px]   sm:w-[500px] border-b-[1px] border-[#BDBDBD]"></div>
//              <div className="flex justify-between w-[300px] sm:w-[450px] xl:w-[600px] mt-[-20px] xl:mt-[-30px] pt-4 xl:pt-6 xl:px-0 px-2 mx-auto items-center">
//                <p className="font-halvetica text-[16px] xl:text-[20px] font-bold text-[#333333]">
//                  Total Amount
//                </p>
//                <p className="font-bold font-inter text-[14px] xl:text-[18px] text-[#333333] ">
//                  $205.00
//                </p>
//              </div>
//            </div>
//            <Link href="/checkout"> 
//            <div className="w-[300px] sm:w-[500px]  xl:w-[648px] h-[64px] flex justify-center items-center gap-[10px] bg-[#FF9F0D]">
//              <p className="text-white font-normal text-[14px] xl:text-[18px] font-inter">
//               Proceed to Checkout
//              </p>
//              <Image
//                src="/CheckSquareOffset.svg"
//                alt=""
//                height={20}
//                width={20}
//                className="h-[20px] w-[20px]"
//              />
//            </div>
//            </Link>
//          </div>
//      </div> 
// {/* 
//       <div className="absolute xl:top-[1872px] top-[2000px]">
//         <Footer />
//       </div> */}
//     </>
//   );
// };

// export default Cart;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

