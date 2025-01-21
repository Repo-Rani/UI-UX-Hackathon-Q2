import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CheckoutForm = () => {
  return (
<>
      <div className="w-[320px] xl:w-[872px] xl:h-[723px] relative  md:top-[30px]  xl:left-0 md:left-[50px] ms:left-[30px] xsm:left-[40px] px-3 ">
    <h1 className="text-[20px] font-bold font-helvetica text-black  mb-3">
      Shipping Address
    </h1>
    <div className="relative flex flex-col gap-[10px] xl:gap-[20px]">
      <div className="flex xl:justify-between justify-center gap-[20px] ">
        <div className="xl:w-[424px] xl:h-[88px]   flex flex-col xl:justify-between justify-center gap-[10px]">
          <label
            htmlFor=""
            className="text-[14px] xl:text-[16px] font-helvetica font-normal text-black"
          >
            First name
          </label>
          <input
            type="text"
            className=" w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
          />
        </div>
        <div className="xl:w-[424px] xl:h-[88px]   flex flex-col xl:justify-between justify-center gap-[10px]">
          <label
            htmlFor=""
            className="text-[14px] xl:text-[16px]  font-helvetica font-normal text-black"
          >
            Last Name
          </label>
          <input
            type="text"
            className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
          />
        </div>
      </div>
      <div className="flex xl:justify-between justify-center gap-[20px] ">
        <div className="xl:w-[424px] xl:h-[88px]   flex flex-col xl:justify-between justify-center gap-[10px]">
          <label
            htmlFor=""
            className="text-[14px] xl:text-[16px]  font-helvetica font-normal text-black"
          >
            Email address
          </label>
          <input
            type="text"
            className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
          />
        </div>
        <div className="xl:w-[424px] xl:h-[88px]   flex flex-col xl:justify-between justify-center gap-[10px]">
          <label
            htmlFor=""
            className="text-[14px] xl:text-[16px] font-helvetica font-normal text-black"
          >
            Phone number
          </label>
          <input
            type="text"
            className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
          />
        </div>
      </div>
      <div className="flex xl:justify-between justify-center gap-[20px] ">
        <div className="xl:w-[424px] xl:h-[88px]   flex flex-col xl:justify-between justify-center gap-[10px]">
          <label
            htmlFor=""
            className="text-[14px] xl:text-[16px]  font-helvetica font-normal text-black"
          >
            Company
          </label>
          <input
            type="text"
            className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
          />
        </div>

        <div className="xl:w-[424px] xl:h-[88px]   flex flex-col xl:justify-between justify-center gap-[10px]">
          <label
            htmlFor=""
            className="text-[14px] xl:text-[16px]  font-helvetica font-normal text-black"
          >
            Country
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4 pr-10 font-helvetica text-[12px] xl:text-[16px] text-black/70 font-normal"
              placeholder="Choose country"
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <Image
                src="/CaretDown.svg"
                alt="dropdown"
                height={24}
                width={24}
                className="h-[24px] w-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex xl:justify-between justify-center gap-[20px] ">
        <div className="xl:w-[424px] xl:h-[88px]   flex flex-col xl:justify-between justify-center gap-[10px]">
          <label
            htmlFor=""
            className="text-[12px] xl:text-[16px]  font-helvetica font-normal text-black"
          >
            City
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4 pr-10 font-helvetica text-[10px] xl:text-[16px] text-black/70 font-normal"
              placeholder="Choose city"
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <Image
                src="/CaretDown.svg"
                alt="dropdown"
                height={24}
                width={24}
                className="h-[24px] w-[24px]"
              />
            </div>
          </div>
        </div>
        <div className="xl:w-[424px] xl:h-[88px]   flex flex-col xl:justify-between justify-center gap-[10px]">
          <label
            htmlFor=""
            className="text-[14px] xl:text-[16px] font-helvetica font-normal text-black"
          >
            Zip code
          </label>
          <input
            type="text"
            className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] px-4 outline-none"
          />
        </div>
      </div>
      <div className="flex xl:justify-between justify-center gap-[20px] ">
      <div className="xl:w-[424px] xl:h-[88px]  flex flex-col xl:justify-between justify-center gap-[10px]">
      <label
            htmlFor=""
            className="text-[14px] xl:text-[16px] font-helvetica font-normal text-black"
          >
            Address 1
          </label>
          <input
            type="text"
            className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
          />
        </div>
        <div className="xl:w-[424px] h-[88px] flex flex-col xl:justify-between justify-center gap-[10px]">
          <label
            htmlFor=""
            className="text-[14px] xl:text-[16px] font-helvetica font-normal text-black"
          >
            Address 2
          </label>
          <input
            type="text"
            className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <h1 className="text-[16px] xl:text-[20px]  font-helvetica text-black font-bold mt-[20px]">
        Billing Address
      </h1>
      <div className="flex items-center gap-[6px] mt-1">
        <div className="w-[20px] h-[20px] border-[1px] border-[#BDBDBD]"></div>
        <p className="font-normal text-[12px] xl:text-[16px]  text-[#4F4F4F] font-helvetica whitespace-nowrap">
          Same as shipping address
        </p>
      </div>
    </div>
    <div className="flex justify-start gap-[20px] relative top-[30px] ">
      <button className="w-[150px] xl:w-[424px] h-[35px] xl:h-[56px] border-[1px] border-[#E0E0E0]">
        <div className="flex justify-center items-center gap-[8px]">
          <Image
            src="/CaretLeft (1).svg"
            alt=""
            height={24}
            width={24}
            className="xl:w-[24px] xl:h-[24px] w-[18px] h-[18px] "
          />
          <p className="text-[#4F4F4F] text-[12px] xl:text-[16px] font-helvetica font-normal">
           <Link href="/cart"> Back to cart</Link>
          </p>
        </div>
      </button>
      <button className="w-[160px] xl:w-[424px] h-[35px] xl:h-[56px]  bg-[#FF9F0D] ">
        <div className="flex justify-center items-center gap-[8px]">
          <p className="text-white text-[12px] xl:text-[16px] font-helvetica font-normal whitespace-nowrap pl-2">
            Proceed to shipping
          </p>
          <Image
            src="/CaretLeft.svg"
            alt=""
            height={24}
            width={24}
            className="w-[24px] h-[24px]"
          />
        </div>
      </button>
    </div>
  </div>
  </>

  )
}

export default CheckoutForm