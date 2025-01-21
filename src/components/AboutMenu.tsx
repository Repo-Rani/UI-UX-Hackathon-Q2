import React from "react";
import Link from "next/link";
import Image from "next/image";
const AboutFoodMenu = () => {
  return (
    <>
      <section className="w-[300px] md:w-[1320px] h-[941px] absolute md:top-[3660px] top-[3300px] left-[35px] md:left-[300px] xl:left-[80px] xxl:left-[300px]">
        <Image
          src="/about6.svg"
          alt=""
          height={158.89}
          width={81.48}
          className="w-[60px] h-[144px] md:w-[120.89px] md:h-[288.89px] relative rotate-[36.87] left-[110px]  md:left-[576.33px] top-[85px] md:top-[200px] -z-10"
        />

        <h1 className="text-[28px] md:text-[48px] font-bold font-helvetica text-[#333333] text-center z-30 ">
          Our Food Menu
        </h1>

        <p className="text-[14px] md:text-[16px] font-inter text-center font-normal text-[#4F4F4F] md:w-[418px] mx-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>
        <div className="w-[320px] md:w-[622px] h-[28px] flex md:justify-between justify-center md:gap-0 gap-[25px] items-center flex-wrap relative top-[50px] mx-auto">
          {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map(
            (item, index) => (
              <Link
                className="text-[#4F4F4F] text-[16px] md:text-[20px] font-normal font-inter hover:text-[#ff9f0d] nav_link"
                href="#"
                key={index}
              >
                {item}
              </Link>
            )
          )}
        </div>
        <div className="w-[300px] md:w-[1320px] border-b-[1px] border-[#E0E0E0] relative top-[110px] md:top-[65px]"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[20px] overflow-hidden">
          <div className="md:w-[1320px]  md:h-[600px] relative top-[130px] ">
            <div className="md:w-[648px] h-[111px] flex justify-between flex-col">
              <div className="flex justify-between">
                <div className="flex justify-center flex-col gap-[6px]">
                  <h1 className="text-[18px] md:text-[24px] font-bold font-helvetica text-[#FF9F0D]">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#828282]">
                    560 CAL
                  </p>
                </div>

                <p className="text-[18px] md:text-[24px] font-bold font-helvetica text-[#FF9F0D]">
                  32$
                </p>
              </div>

              <div className="w-[300px] md:w-[648px] border-b-[1px] border-dotted text-[#E0E0E0]"></div>
            </div>
            <div className="w-[300px] md:w-[648px] h-[111px] flex justify-between flex-col">
              <div className="flex justify-between  relative top-[10px]">
                <div className="flex justify-center flex-col gap-[6px]">
                  <h1 className="text-[18px] md:text-[24px] font-bold font-helvetica text-black">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="font-halvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="font-halvetica text-[14px] md:text-[16px] font-normal text-[#828282]">
                    560 CAL
                  </p>
                </div>

                <p className="text-[18px] md:text-[24px] font-bold font-helvetica text-[#FF9F0D]">
                  32$
                </p>
              </div>

              <div className="w-[300px] md:w-[648px] border-b-[1px] border-dotted text-[#E0E0E0]"></div>
            </div>
            <div className="w-[300px] md:w-[648px] h-[111px] flex justify-between flex-col">
              <div className="flex justify-between  relative top-[10px]">
                <div className="flex justify-center flex-col gap-[6px]">
                  <h1 className="text-[18px] md:text-[24px] font-bold font-helvetica text-black">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="font-halvetica text-[14px] md:text-[16px] font-normal text-[#828282]">
                    560 CAL
                  </p>
                </div>

                <p className="text-[18px] md:text-[24px] font-bold font-helvetica text-[#FF9F0D]">
                  32$
                </p>
              </div>

              <div className="w-[300px] md:w-[648px] border-b-[1px] border-dotted text-[#E0E0E0]"></div>
            </div>
            <div className="w-[300px] md:w-[648px] h-[111px] flex justify-between flex-col">
              <div className="flex justify-between  relative top-[10px]">
                <div className="flex justify-center flex-col gap-[6px]">
                  <h1 className="text-[18px] md:text-[24px] font-bold font-helvetica text-black">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#828282]">
                    560 CAL
                  </p>
                </div>

                <p className="text-[24px] font-bold font-helvetica text-[#FF9F0D]">
                  32$
                </p>
              </div>

              <div className="w-[300px] md:w-[648px] border-b-[1px] border-dotted text-[#E0E0E0]"></div>
            </div>
          </div>

          <div className="md:w-[1320px] h-[532px] relative top-[130px] ">
            <div className="w-[300px] md:w-[648px] h-[111px] flex justify-between flex-col">
              <div className="flex justify-between">
                <div className="flex justify-center flex-col gap-[6px]">
                  <h1 className="text-[18px] md:text-[24px] font-bold font-helvetica  text-black">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#828282]">
                    560 CAL
                  </p>
                </div>

                <p className="text-[18px] md:text-[24px] font-bold font-helvetica text-[#FF9F0D]">
                  32$
                </p>
              </div>

              <div className="w-[300px] md:w-[648px] border-b-[1px] border-dotted text-[#E0E0E0]"></div>
            </div>
            <div className="w-[300px] md:w-[648px] h-[111px] flex justify-between flex-col">
              <div className="flex justify-between  relative top-[10px]">
                <div className="flex justify-center flex-col gap-[6px]">
                  <h1 className="text-[18px] md:text-[24px] font-bold font-helvetica text-black">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#828282]">
                    560 CAL
                  </p>
                </div>

                <p className="text-[18px] md:text-[24px] font-bold font-helvetica text-[#FF9F0D]">
                  32$
                </p>
              </div>

              <div className="w-[300px] md:w-[648px] border-b-[1px] border-dotted text-[#E0E0E0]"></div>
            </div>
            <div className="md:w-[648px] h-[111px] flex justify-between flex-col">
              <div className="flex justify-between  relative top-[10px]">
                <div className="flex justify-center flex-col gap-[6px]">
                  <h1 className="text-[18px] md:text-[24px] font-bold font-helvetica text-black">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="font-halvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="font-halvetica text-[14px] md:text-[16px] font-normal text-[#828282]">
                    560 CAL
                  </p>
                </div>

                <p className="text-[18px] md:text-[24px] font-bold font-helvetica text-[#FF9F0D]">
                  32$
                </p>
              </div>

              <div className="w-[300px] md:w-[648px] border-b-[1px] border-dotted text-[#E0E0E0]"></div>
            </div>
            <div className="md:w-[648px] h-[111px] flex justify-between flex-col">
              <div className="flex justify-between  relative top-[10px]">
                <div className="flex justify-center flex-col gap-[6px]">
                  <h1 className="text-[18px] md:text-[24px] font-bold font-helvetica text-black">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#4F4F4F]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="font-helvetica text-[14px] md:text-[16px] font-normal text-[#828282]">
                    560 CAL
                  </p>
                </div>

                <p className="text-[18px] md:text-[24px] font-bold font-halvetica text-[#FF9F0D]">
                  32$
                </p>
              </div>

              <div className="w-[300px] md:w-[648px] border-b-[1px] border-dotted text-[#E0E0E0]"></div>
            </div>
          </div>
        </div>

        <button className="w-[100px]  md:w-[143px] h-[20px] md:h-[52px] flex justify-center items-center py-6 md:py-[14px] px-[20px] md:px-[32px] border-[1px] border-[#FF9F0D] font-helvetica text-[12px] md:text-[16px] font-normal text-[#FF9F0D] relative whitespace-nowrap left-[100px] md:left-[600px] top-[40px]">
          View menu
        </button>
      </section>
    </>
  );
};

export default AboutFoodMenu;
