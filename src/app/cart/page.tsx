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
      <section className="w-[1320px] h-[765px] absolute top-[570px] left-[301px] flex flex-col justify-between">
        <div className="w-[1225.86px] h-[29.04px] ">
          <h2 className="w-[87.83px] h-[29.04px] font-inter font-bold text-[18px] text-[#333333]">
            Product
          </h2>
          <div className="flex justify-between items-center absolute top-0 left-[500px] w-[730px] list-none ">
            <li className="w-[58.55px] h-[29.04px] text-[#333333] font-inter font-bold text-[18px]">
              Price
            </li>
            <li className="w-[94.59px] h-[29.04px] text-[#333333] font-inter font-bold text-[18px]">
              Quantity
            </li>
            <li className="w-[55.18px] h-[29.04px] text-[#333333] font-inter font-bold text-[18px]">
              Total
            </li>
            <li className="w-[121.61px] h-[29.04px] text-[#333333] font-inter font-bold text-[18px]">
              Remove
            </li>
          </div>
        </div>
        <div className="absolute top-[350px]">
          <CartItem />
        </div>
      </section>

      <div className="w-[1320px] h-[338px] absolute top-[1414px] left-[301px]  flex justify-between">
        <div className="w-[648px] h-[252px]  justify-between flex flex-col">
          <h1 className="font-halvetica text-[32px] font-bold text-black">
            Coupon Code
          </h1>
          <div className="flex flex-col justify-center pl-6 gap-[20px] w-[648px] h-[188px] rounded-[6px] border-[1px] border-[#E0E0E0]">
            <p className="font-inter font-normal text-[18px] text-[#828282] w-[472px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non
            </p>
            <div className="w-[598px] h-[62px] rounded-[6px] border-[1px] border-[#E0E0E0] flex justify-between ">
              <input
                type="text"
                placeholder="Enter Here code"
                className="font-inter text-[16px] font-normal text-[#828282] pl-4 border-none outline-none w-[480px]"
              />
              <button className="w-[89px] h-[62px] rounded-[6px] bg-[#FF9F0D] flex justify-center items-center text-white font-normal font-inter whitespace-nowrap text-[18px]">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="w-[648px] h-[337px] flex flex-col justify-center gap-[20px]">
          <h1 className="font-halvetica text-[32px] font-bold text-[#333333]">
            Total Bill
          </h1>

          <div className="w-[648px] h-[185px] rounded-[6px] border-[1px] border-[#E0E0E0] flex justify-center flex-col gap-[15px] py-4">
            <div className="flex justify-between w-[600px] pt-6 mx-auto">
              <p className="font-halvetica text-[20px] font-bold text-[#333333] ">
                Cart Subtotal
              </p>
              <p className="font-bold font-inter text-[18px] text-[#333333] ">
                $120.00
              </p>
            </div>
            <div className="flex justify-between w-[600px] pt-3 mx-auto">
              <p className="font-inter text-[18px] font-normal text-[#4F4F4F] ">
                Shipping Charge
              </p>
              <p className="font-inter text-[18px] font-normal text-[#4F4F4F] ">
                $00.00
              </p>
            </div>

            <div className="w-[648px] border-b-[1px] border-[#BDBDBD]"></div>
            <div className="flex justify-between w-[600px] mx-auto items-center">
              <p className="font-halvetica text-[20px] font-bold text-[#333333]">
                Total Amount
              </p>
              <p className="font-bold font-inter text-[18px] text-[#333333] ">
                $205.00
              </p>
            </div>
          </div>
          <Link href="/checkout"> 
          <div className="w-[648px] h-[64px] flex justify-center items-center gap-[10px] bg-[#FF9F0D]">
            <p className="text-white font-normal text-[18px] font-inter">
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

      <div className="absolute top-[1872px]">
        <Footer />
      </div>
    </>
  );
};

export default Cart;
