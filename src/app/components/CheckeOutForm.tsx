import React from "react";
import Image from "next/image";
const CheckoutForm = () => {
  return (
    <>
      <section className="w-[1320px] h-[723px] absolute left-[300px] top-[530px] flex justify-between">
        <div className="w-[872px] h-[723px]">
          <h1 className="text-[20px] font-bold font-roboto text-black  mb-3">
            Shipping Address
          </h1>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between ">
              <div className="w-[424px] h-[88px]   flex flex-col justify-between">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  First name
                </label>
                <input
                  type="text"
                  className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
              <div className="w-[424px] h-[88px]   flex flex-col justify-between">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="w-[424px] h-[88px] flex flex-col justify-between">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  Email address
                </label>
                <input
                  type="text"
                  className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
              <div className="w-[424px] h-[88px] flex flex-col justify-between">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[424px] h-[88px] flex flex-col justify-between">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  Company
                </label>
                <input
                  type="text"
                  className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>

              <div className="w-[424px] h-[88px] flex flex-col justify-between relative">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  Country
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4 pr-10 font-roboto text-[16px] text-black/70 font-normal"
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
            <div className="flex justify-between">
              <div className="w-[424px] h-[88px] flex flex-col justify-between relative">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  City
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4 pr-10 font-roboto text-[16px] text-black/70 font-normal"
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
              <div className="w-[424px] h-[88px] flex flex-col justify-between">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  Zip code
                </label>
                <input
                  type="text"
                  className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] px-4 outline-none"
                />
              </div>
            </div>
            <div className="flex justify-between ">
              <div className="w-[424px] h-[88px] flex flex-col justify-between">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  Address 1
                </label>
                <input
                  type="text"
                  className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
              <div className="w-[424px] h-[88px] flex flex-col justify-between">
                <label
                  htmlFor=""
                  className="text-[16px] font-roboto font-normal text-black"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0] outline-none px-4"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-[20px] font-roboto text-black font-bold mt-[20px]">
              Billing Address
            </h1>
            <div className="flex items-center gap-[6px] mt-1">
              <div className="w-[20px] h-[20px] border-[1px] border-[#BDBDBD]"></div>
              <p className="font-normal text-[14px] text-[#4F4F4F] font-roboto">
                Same as shipping address
              </p>
            </div>
          </div>
          <div className="flex justify-start gap-[20px] relative top-[30px] ">
            <button className="w-[424px] h-[56px] border-[1px] border-[#E0E0E0]">
              <div className="flex justify-center items-center gap-[8px]">
                <Image
                  src="/CaretLeft.svg"
                  alt=""
                  height={24}
                  width={24}
                  className="w-[24px] h-[24px]"
                />
                <p className="text-[#4F4F4F] text-[16px] font-roboto font-normal">
                  Back to cart
                </p>
              </div>
            </button>
            <button className="w-[424px] h-[56px]  bg-[#FF9F0D] ">
              <div className="flex justify-center items-center gap-[8px]">
                <p className="text-white text-[16px] font-roboto font-normal">
                  Proceed to shipping
                </p>
                <Image
                  src="/CaretLeft (1).svg"
                  alt=""
                  height={24}
                  width={24}
                  className="w-[24px] h-[24px]"
                />
              </div>
            </button>
          </div>
        </div>

        <div className="right w-[424px] h-[700px] border-[1px] border-[#E0E0E0] px-8 py-3">
          <div className="flex flex-col ">
            <div className="w-[376px] h-[104px] flex flex-col justify-center gap-[10px]">
              <div className="flex gap-[10px]">
                <Image
                  src="/checkeout.svg"
                  alt="food-image"
                  height={88}
                  width={82.72}
                  className="h-[88px] w-[82.72]"
                />
                <div className="flex flex-col justify-center gap-[5px]">
                  <h1 className="text-[16px] font-bold text-black font-roboto">
                    Chicken Tikka Kabab
                  </h1>
                  <p className="text-[14px] font-normal text-[#4F4F4F] font-roboto">
                    150 gm net
                  </p>
                  <p className="text-[14px] font-normal text-[#4F4F4F] font-roboto">
                    50$
                  </p>
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="w-[353.44px] border-b-[1px] border-[#E0E0E0] mx-auto  mt-3 mb-3"></div>
          </div>
          <div className="flex flex-col gap-[10px] mt-2 ">
            <div className="w-[376px] h-[104px] flex flex-col justify-between">
              <div className="flex gap-[10px]">
                <Image
                  src="/checkeout.svg"
                  alt="food-image"
                  height={88}
                  width={82.72}
                  className="h-[88px] w-[82.72]"
                />
                <div className="flex flex-col justify-center gap-[5px]">
                  <h1 className="text-[16px] font-bold text-black font-roboto">
                    Chicken Tikka Kabab
                  </h1>
                  <p className="text-[14px] font-normal text-[#4F4F4F] font-roboto">
                    150 gm net
                  </p>
                  <p className="text-[14px] font-normal text-[#4F4F4F] font-roboto">
                    50$
                  </p>
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="w-[353.44px] border-b-[1px] border-[#E0E0E0] mx-auto  mb-5"></div>
          </div>
          <div className="flex flex-col gap-[10px] ">
            <div className="w-[376px] h-[104px]  flex flex-col justify-between">
              <div className="flex gap-[10px]">
                <Image
                  src="/checkeout.svg"
                  alt="food-image"
                  height={88}
                  width={82.72}
                  className="h-[88px] w-[82.72]"
                />
                <div className="flex flex-col justify-center  gap-[5px]">
                  <h1 className="text-[16px] font-bold text-black font-roboto">
                    Chicken Tikka Kabab
                  </h1>
                  <p className="text-[14px] font-normal text-[#4F4F4F] font-roboto">
                    150 gm net
                  </p>
                  <p className="text-[14px] font-normal text-[#4F4F4F] font-roboto">
                    50$
                  </p>
                </div>
              </div>
              <div className=""></div>
            </div>
            <div className="w-[353.44px] border-b-[1px] border-[#E0E0E0] mx-auto  mb-5"></div>
          </div>

          <div className="w-[376px] h-[264px] mx-auto flex flex-col justify-between ">
            <div className="flex flex-col justify-center gap-[10px]">
              <div className="flex justify-between items-center w-[376px] h-[24px]">
                <p className="font-normal font-roboto text-[16px] text-[#4F4F4F]">
                  Sub-total
                </p>
                <p className="text-[#333333] font-normal font-roboto text-[16px] ">
                  130$
                </p>
              </div>
              <div className="flex justify-between items-center w-[376px] h-[24px]">
                <p className="font-normal font-roboto text-[16px] text-[#4F4F4F]">
                  Shipping
                </p>
                <p className="text-[#333333] font-normal font-roboto text-[16px] ">
                  Free
                </p>
              </div>
              <div className="flex justify-between items-center w-[376px] h-[24px]">
                <p className="font-normal font-roboto text-[16px] text-[#4F4F4F]">
                  Discount
                </p>
                <p className="text-[#333333] font-normal font-roboto text-[16px] ">
                  25%
                </p>
              </div>
              <div className="flex justify-between items-center w-[376px] h-[24px]">
                <p className="font-normal font-roboto text-[16px] text-[#4F4F4F]">
                  Tax
                </p>
                <p className="text-[#333333] font-normal font-roboto text-[16px] ">
                  54.76$
                </p>
              </div>
              <div className="w-[353.44px] border-b-[1px] border-[#E0E0E0] mx-auto mb-5"></div>

              <div className="flex justify-between items-center w-[376px] h-[24px]">
                <p className="font-normal font-roboto text-[18px] text-[#333333]">
                  Total
                </p>
                <p className="font-bold font-roboto text-[18px] text-[#333333] ">
                  432.65$
                </p>
              </div>
            </div>
            <button className="w-[376px] h-[58px] py-[16px] px-[48px] rounded-[6px] bg-[#FF9F0D]">
              <div className="flex justify-center items-center gap-[12px]">
                <p className="text-[18px] font-normal text-white font-roboto">
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
      </section>
    </>
  );
};

export default CheckoutForm;
