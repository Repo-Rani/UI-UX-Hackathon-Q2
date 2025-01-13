import Banner from "../components/Banner";
import CartItem from "../components/CartItem";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
const Cart = () => {
  return (
    <>
      <div>
        <Banner mainHeading="Shopping Cart" name="Shopping Cart" />
      </div>
      <section className="w-[100px] md:w-[1320px] h-[765px] absolute top-[570px] left-[10px] md:left-[301px] xl:left-[100px] xxl:left-[301px] flex flex-col justify-between">
        <div className="w-[300px] md:w-[1225.86px] h-[29.04px] ">
          <h2 className="w-[100px] md:w-[87.83px] h-[29.04px] font-inter font-bold text-[16px] md:text-[18px] text-[#333333]">
            Product
          </h2>
          <div className="flex md:justify-between justify-center md:gap-0 gap-4 items-center absolute top-0 left-[100px] md:left-[500px] w-[250px] md:w-[730px] list-none ">
            <li className=" md:w-[58.55px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">
              Price
            </li>
            <li className="md:w-[94.59px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">
              Quantity
            </li>
            <li className="md:w-[55.18px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">
              Total
            </li>
            <li className="md:w-[121.61px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">
              Remove
            </li>
          </div>
        </div>
        <div className="absolute top-[290px] md:top-[350px]">
          <CartItem />
        </div>
      </section>

      <div className="w-[300px] md:w-[1320px] h-[338px] absolute top-[1270px] md:top-[1414px] left-[35px] md:left-[301px] xl:left-[100px] xxl:left-[301px]  flex justify-between">
        <div className="w-[300px] md:w-[648px] h-[252px]  justify-between flex flex-col">
          <h1 className="font-halvetica text-[22px] md:text-[32px] font-bold text-black ">
            Coupon Code
          </h1>
          <div className="flex flex-col justify-center md:pr-0 pr-2 pl-2 md:pl-6 gap-[20px] w-[300px] md:w-[648px] h-[188px] rounded-[6px] border-[1px] border-[#E0E0E0] relative md:top-0 top-[-15px]">
            <p className="font-inter font-normal text-[14px] md:text-[18px] text-[#828282] w-[320px] md:w-[472px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non
            </p>
            <div className=" w-[280px]md:w-[598px] h-[50px] md:h-[62px] rounded-[6px] border-[1px] border-[#E0E0E0] flex justify-between ">
              <input
                type="text"
                placeholder="Enter Here code"
                className="font-inter text-[14px] md:text-[16px] font-normal text-[#828282] pl-4 border-none outline-none  md:w-[480px]"
              />
              <button className="w-[89px] h-[50px] md:h-[62px] rounded-[6px] bg-[#FF9F0D] flex justify-center items-center text-white font-normal font-inter whitespace-nowrap text-[12px] md:text-[18px]">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="w-[250px] md:w-[648px] h-[337px] flex flex-col justify-center relative md:top-0 top-[280px] md:right-0 right-[300px] gap-[20px]">
          <h1 className="font-halvetica text-[22px] md:text-[32px] font-bold text-[#333333]">
            Total Bill
          </h1>

          <div className="w-[300px] md:w-[648px] h-[185px] rounded-[6px] border-[1px] border-[#E0E0E0] flex justify-center flex-col gap-[15px] py-4">
            <div className="flex justify-between w-[300px] md:w-[600px] pt-4 md:pt-6 md:px-0 px-2 mx-auto">
              <p className="font-halvetica text-[16px] md:text-[20px] font-bold text-[#333333] ">
                Cart Subtotal
              </p>
              <p className="font-bold font-inter text-[14px] md:text-[18px] text-[#333333] ">
                $120.00
              </p>
            </div>
            <div className="flex justify-between w-[300px] md:w-[600px]pt-4 md:pt-6 md:px-0 px-2 mx-auto">
              <p className="font-inter text-[14px] md:text-[18px] font-normal text-[#4F4F4F] ">
                Shipping Charge
              </p>
              <p className="font-inter text-[18px] font-normal text-[#4F4F4F] ">
                $00.00
              </p>
            </div>

            <div className="w-[300px] md:w-[648px] border-b-[1px] border-[#BDBDBD]"></div>
            <div className="flex justify-between w-[300px] md:w-[600px] pt-4 md:pt-6 md:px-0 px-2 mx-auto items-center">
              <p className="font-halvetica text-[16px] md:text-[20px] font-bold text-[#333333]">
                Total Amount
              </p>
              <p className="font-bold font-inter text-[14px] md:text-[18px] text-[#333333] ">
                $205.00
              </p>
            </div>
          </div>
          <Link href="/checkout"> 
          <div className="w-[300px] md:w-[648px] h-[64px] flex justify-center items-center gap-[10px] bg-[#FF9F0D]">
            <p className="text-white font-normal text-[14px] md:text-[18px] font-inter">
             Proceed to Checkout
            </p>
            <Image
              src="/CheckSquareOffset.svg"
              alt=""
              height={20}
              width={20}
              className="h-[20px] w-[20px]"
            />
          </div>
          </Link>
        </div>
      </div>

      <div className="absolute md:top-[1872px] top-[2000px]">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
