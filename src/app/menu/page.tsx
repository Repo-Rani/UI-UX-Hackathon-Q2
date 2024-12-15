import React from "react";
import Banner from "../components/Banner";
import Image from "next/image";
import StarterMenuItems from "../components/StarterMenuItems";
import Clients from "../components/Client";
import Footer from "../components/Footer";
const OurMenu = () => {
  return (
    <>
      <section
        className="relative mx-auto w-[1920px] lg:w-[1920px] max-w-[1920px]"
       
      >
        <Banner mainHeading="Our Menu" name="Menu" />
        <div className="w-[1320px] h-[628px] absolute top-[531px] left-[300px]  bg-white flex justify-between ">
          <Image
            src="/Rectangle 8874 (1).svg"
            alt="meni-item"
            height={626}
            width={300}
            className="w-[448px] h-[626px] "
          />

          <div className="relative left-[50px]">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={16}
              width={16}
              className="h-[24px] w-[24px] relative left-[20px]"
            />
            <h1 className="font-roboto text-[48px] font-bold text-black relative left-[20px]">
              Starter Menu
            </h1>

            <StarterMenuItems
              names="Alder Grilled Chinook Salmon"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Berries and Creme Tart"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Tormentoso Bush Pizza Pintoage"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Spicy Vegan Potato Curry"
              desc="Spicy Vegan Potato Curry"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
        </div>

        <div className="w-[1320px] h-[628px] absolute top-[1279px] left-[300px]  bg-white flex justify-between flex-row-reverse ">
          <Image
            src="/menu2.svg"
            alt="menu-item"
            height={626}
            width={300}
            className="w-[448px] h-[626px] "
          />

          <div className="relative right-[80px]">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={16}
              width={16}
              className="h-[24px] w-[24px] relative left-[20px]"
            />
            <h1 className="font-roboto text-[48px] font-bold text-black relative left-[20px]">
              Main course
            </h1>

            <StarterMenuItems
              names="Optic Big Breakfast Combo Menu"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Cashew Chicken With Stir-Fry"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names=" Vegetables & Green Salad"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Spicy Vegan Potato Curry"
              desc="Spreadable cream cheese, crumbled blue cheese"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
        </div>

        <div className="absolute top-[2027px]">
          <Clients />
        </div>

        <div className="w-[1320px] h-[628px] absolute top-[2615px] left-[300px]  bg-white flex justify-between ">
          <Image
            src="/menu3.svg"
            alt="meni-item"
            height={626}
            width={300}
            className="w-[448px] h-[626px] "
          />

          <div className="relative left-[50px]">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={16}
              width={16}
              className="h-[24px] w-[24px] relative left-[20px]"
            />
            <h1 className="font-roboto text-[48px] font-bold text-black relative left-[20px]">
              Dessert
            </h1>

            <StarterMenuItems
              names="Fig and lemon cake"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Creamy mascarpone cake"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Pastry, blueberries, lemon juice"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Pain au chocolat"
              desc="Spreadable cream cheese, crumbled blue cheese"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
        </div>

        <div className="w-[1320px] h-[628px] absolute top-[3363px] left-[300px]  bg-white flex justify-between flex-row-reverse ">
          <Image
            src="/menu4.svg"
            alt="menu-item"
            height={626}
            width={300}
            className="w-[448px] h-[626px] "
          />

          <div className="relative right-[80px]">
            <Image
              src="/Coffee.svg"
              alt="coffee-cup"
              height={16}
              width={16}
              className="h-[24px] w-[24px] relative left-[20px]"
            />
            <h1 className="font-roboto text-[48px] font-bold text-black relative left-[20px]">
              Drinks
            </h1>

            <StarterMenuItems
              names="Caffè macchiato"
              desc="Toasted French bread topped with romano, cheddar"
              text="560 CAL"
              price="32$"
            />
            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
            <StarterMenuItems
              names="Aperol Spritz Capacianno"
              desc=" Gorgonzola, ricotta, mozzarella, taleggio "
              text="700 CAL"
              price="43$"
            />

            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Caffe Latte Campuri"
              desc="Ground cumin, avocados, peeled and cubed"
              text="1000 CAL"
              price="14$"
            />

            <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>

            <StarterMenuItems
              names="Tormentoso BushTea Pintoage"
              desc="Spreadable cream cheese, crumbled blue cheese"
              text="560 CAL"
              price="35$"
            />
          </div>
          <div className="w-[760px] border-b-[1px] border-dotted border-[#E0E0E0]"></div>
        </div>

        <div className="w-[1322px] h-[275px] absolute top-[4111px] left-[295px] bg-white">
          <span className="font-inter font-normal text-[18px] text-[#333333] relative left-[600px]">
            Partners & Clients
          </span>
          <h2 className="font-roboto font-bold text-[48px] leading-[56px] text-[#333333] relative left-[360px]">
            We work with the best pepole
          </h2>
          <div className="w-[1322px] h-[129.37px]  relative top-[60px] flex items-center justify-between bg-white">
            <Image
              src="/m1.svg"
              alt="menu-logo"
              height={129.23}
              width={240.96}
              className="w-[240.96px] h-[129.23px] "
            />
            <Image
              src="/m2.svg"
              alt="menu-logo"
              height={128.68}
              width={166.04}
              className="w-[166.04px] h-[128.68px] "
            />
            <Image
              src="/m3.svg"
              alt="menu-logo"
              height={127.01}
              width={143.98}
              className="w-[143.98px] h-[127.01px] "
            />
            <Image
              src="/m6.svg"
              alt="menu-logo"
              height={129.37}
              width={130.98}
              className="w-[130.98px] h-[129.37px] "
            />
            <Image
              src="/m4.svg"
              alt="menu-logo"
              height={129.17}
              width={169.97}
              className="w-[169.97px] h-[129.17px] "
            />
            <Image
              src="/m5.svg"
              alt="menu-logo"
              height={129.08}
              width={113.98}
              className="w-[113.98px] h-[129.08px] "
            />
          </div>
        </div>
      </section>
      <div className="absolute top-[4550px]">
        <Footer />
      </div>
    </>
  );
};

export default OurMenu;
