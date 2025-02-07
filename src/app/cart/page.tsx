'use client'
import Banner from "@/components/banner/Banner";
import Image from "next/image";
// import Footer from "@/components/footer/Footer";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PiTrashFill } from "react-icons/pi";

import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { CartProps } from "../../../types/type";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import dynamic from "next/dynamic";

const CheckoutModal = dynamic(
  () => import("../../components/OrderSystem/CheckOutModal"),
  {
    ssr: false,
  }
);
const Cart = () => {
  
  const [validPromo, setValidPromo] = useState<boolean>(false);
  const [promoCode, setPromoCode] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderSucess, setOrderSuccess] = useState<any | boolean>(false);


  const [cart, setCart] = useState<CartProps[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? (JSON.parse(savedCart) as CartProps[]) : [];
    }
    return [];
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart) as CartProps[]);
      }
    }
  }, []);
  const updateCart = (updatedCart: CartProps[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };
  const increaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updateCart(updatedCart);
  };
  const decreaseQuantity = (index: number) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updateCart(updatedCart);
    }
  };
  

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discountAmount = validPromo ? subtotal * 0.2 : 0;
  const deliveryFee = 15;
  const total = subtotal - discountAmount + deliveryFee;
  const discount = subtotal ? subtotal * 0.2 : 0;
  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT20") {
      setValidPromo(true);
    } else {
      alert("Invalid Promo Code");
    }
  };
  const handleOpenModal = () => {
    if (cart.length === 0 || subtotal === 0) {
      // subtotal ko call nahi karein, direct use karein
      alert("Please add items to your cart before proceeding to checkout.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleSubmitForm = (formData: any) => {
    console.log(formData);
    localStorage.removeItem("cart");
    setCart([]);
  };

  const handleCloseModal = () => setIsModalOpen(false);



  return (
   
      <>
        <div>
          <Banner mainHeading="Shopping Cart" name="Shopping Cart" />
        </div>
       
           
              {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-y-[10px] h-[400px] xl:mt-32 mt-14">
            <HiOutlineShoppingBag className="w-[100px] h-[100px] text-black/20" />
            <p className="text-black/50 font-satoshi text-[16px] md:text-[20px]">
              Your Cart is Empty!
            </p>
            <Link href="/shop">
              <button className="bg-[#FF9F0D] hover:bg-white text-white hover:text-[#FF9F0D] hover:border-[1px] hover:border-[#FF9F0D] px-6 flex justify-center items-center text-[14px] mt-4 font-satoshi rounded-[50px] w-[200px] h-[50px]">
                Start Shipping
              </button>
            </Link>
          </div>
        ) : (

          <section className="w-full sm:w-[550px] md:w-full xl:w-[1320px] h-[765px] items-center absolute top-[670px] ms:left-[-5px] xsm:left-[-35px] lg:left-0 md:left-[-50px] sm:left-[15px] xl:left-[70px] xxl:left-[130px] xxxl:left-[301px] flex flex-col justify-between">
          {/* Headings */}
          <div className="w-[300px] lg:w-[700px] md:w-[600px] sm:w-[550px] xl:w-[1325.86px] h-[29.04px] relative lg:left-[-85px] sm:left-[20px] xl:left-0 top-[-30px] flex justify-between">
            <h2 className="w-[50px] sm:w-[100px] h-[29.04px] font-inter font-bold text-[16px] md:text-[18px] text-[#333333]">
              Product
            </h2>
            <div className="flex md:justify-between justify-center md:gap-0 gap-4 sm:gap-10 items-center absolute top-0 left-[60px] ms:left-[80px] xsm:left-[120px] sm:left-[160px] md:left-[260px] lg:left-[400px] xl:left-[530px] w-[250px] sm:w-[400px] xl:w-[730px] list-none">
              <li className="md:w-[58.55px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Price</li>
              <li className="md:w-[94.59px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Quantity</li>
              <li className="md:w-[55.18px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Total</li>
              <li className="md:w-[121.61px] h-[29.04px] text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Remove</li>
            </div>
          </div>
        
          {/* Product List */}
          <div className="w-full ">
            {cart.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-full border-b border-gray-200 py-4 relative top-[-580px]"
              >
                {/* Product Column */}
                <div className="flex items-center justify-between w-[200px] sm:w-[300px]">
                  <Image
                    width={93.14}
                    height={97.13}
                    className="w-[50px] h-[50px] sm:w-[93.14px] sm:h-[97.13px]"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                 
                </div>
        
                {/* Price Column */}
                <div className="w-[100px] text-center">
                  <p className="text-[14px] md:text-[16px] font-satoshi font-bold text-black relative md:left-[40px]">
                    ${product.price.toFixed(2)}
                  </p>
                  <span className="font-inter font-bold text-[12px] bg-blue-700 sm:text-[14px] xl:text-[16px] text-[#333333] ml-4">
                    {product.name}
                  </span>
                </div>
        
                {/* Quantity Column */}
                <div className="w-[100px] text-center">
                  <div className="flex justify-center items-center xl:gap-[20px] gap-[10px] w-[60px] md:w-[100px] h-[24px] md:h-[32px] border-[1px] rounded-[18px] border-[#e0e0e0] relative xl:right-[60px] md:left-[5px]">
                    <RiSubtractLine
                      onClick={() => decreaseQuantity(index)}
                      className="md:h-[20px] md:w-[20px] h-[20px] w-[20px] text-black cursor-pointer"
                    />
                    <p className="text-[14px] text-black font-satoshi font-bold">
                      {product.quantity}
                    </p>
                    <IoAddOutline
                      onClick={() => increaseQuantity(index)}
                      className="md:h-[20px] md:w-[20px] h-[20px] w-[20px] text-black cursor-pointer"
                    />
                  </div>
                </div>
        
                {/* Total Column */}
                <div className="w-[100px] text-center">
                  <p className="text-[14px] md:text-[16px] font-satoshi font-bold text-black relative md:left-[-40px]">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>
        
                {/* Remove Column */}
                <div className="w-[100px] text-center ">
                  <PiTrashFill
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 md:h-[24px] md:w-[24px] h-[20px] w-[20px] cursor-pointer hover:text-red-400 relative md:left-[-60px]"
                  />
                </div>
              </div>
            ))}
          </div>
      
           

{/* Coupon code and subtotal part */}
<div className="w-[300px] xl:w-[1320px] h-[338px] absolute sm:top-[1350px] top-[1270px] xl:top-[530px] left-[10px] ms:left-[35px] sm:left-[50px] md:left-[80px] lg:left-[30px] xl:left-[-15px] xxl:left-[130px] xxxl:left-[301px] flex justify-between">
<div className="w-[300px] xl:w-[648px] h-[252px] justify-between flex flex-col">
  <h1 className="font-halvetica text-[22px] sm:text-[28px] xl:text-[32px] font-bold text-black">
    Coupon Code
  </h1>
  <div className="flex flex-col justify-center xl:pr-0 pr-2 pl-2 xl:pl-6 gap-[20px] w-[300px] ms:w-[320px] sm:w-[500px] lg:w-[400px] xl:w-[648px] h-[188px] rounded-[6px] border-[1px] border-[#E0E0E0] relative xl:top-0 top-[-15px]">
    <p className="font-inter font-normal text-[14px] sm:text-[14px] xl:text-[18px] text-[#828282] w-[300px] sm:w-[400px] xl:w-[472px]">
    Unlock exclusive savings with our special coupon code! Enjoy amazing discounts on your favorite products. Limited-time offer grab your deal now!
    </p>
    <div className="w-[280px] md:w-[420px] lg:w-[380px] xl:w-[598px] h-[50px] xl:h-[62px] rounded-[6px] border-[1px] border-[#E0E0E0] flex justify-between left-[-10px]">
      <input
        type="text"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        placeholder="Enter Here code"
        className="font-inter text-[14px] xl:text-[16px] font-normal text-[#828282] pl-4 border-none outline-none xl:w-[480px]"
      />
      <button  onClick={applyPromoCode} 
       className="w-[89px] h-[50px] xl:h-[62px] rounded-[6px] bg-[#FF9F0D] flex justify-center items-center text-white font-normal font-inter whitespace-nowrap text-[12px] xl:text-[18px]">
        Apply
      </button>
    </div>
  </div>
</div>
<div className="w-[250px] xl:w-[648px] h-[337px] flex flex-col justify-center relative md:top-[280px] lg:top-0 top-[280px] xl:right-0 lg:right-[-150px] right-[300px] gap-[20px]">
  <h1 className="font-halvetica text-[22px] sm:text-[28px] xl:text-[32px] font-bold text-[#333333]">
    Total Bill
  </h1>
  <div className="w-[300px] sm:w-[500px] xl:w-[648px] h-[185px] rounded-[6px] border-[1px] border-[#E0E0E0] flex justify-center flex-col gap-[15px] py-4">
    <div className="flex justify-between w-[300px] sm:w-[450px] xl:w-[600px] pt-4 xl:pt-6 xl:px-0 px-2 mx-auto">
      <p className="font-halvetica text-[16px] xl:text-[20px] font-bold text-[#333333]">
        Cart Subtotal
      </p>
      <p className="font-bold font-inter text-[14px] xl:text-[18px] text-[#333333]">
      ${subtotal.toFixed(2)}
      </p>
    </div>
    <div className="flex justify-between w-[300px] sm:w-[450px] xl:w-[600px] pt-4 xl:pt-6 xl:px-0 px-2 mx-auto">
      <p className="font-inter text-[14px] xl:text-[18px] font-normal text-[#4F4F4F]">
        Shipping Charge
      </p>
      <p className="font-inter text-[18px] font-normal text-[#4F4F4F]">
      ${deliveryFee.toFixed(2)}
      </p>
    </div>
    <div className="w-[300px] sm:w-[500px] border-b-[1px] border-[#BDBDBD]"></div>
    <div className="flex justify-between w-[300px] sm:w-[450px] xl:w-[600px] mt-[-20px] xl:mt-[-30px] pt-4 xl:pt-6 xl:px-0 px-2 mx-auto items-center">
      <p className="font-halvetica text-[16px] xl:text-[20px] font-bold text-[#333333]">
        Total Amount
      </p>
      <p className="font-bold font-inter text-[14px] xl:text-[18px] text-[#333333]">
      ${total.toFixed(2)}
      </p>
    </div>
  </div>
  <Link href="/checkout">
    <div className="w-[300px] sm:w-[500px] xl:w-[648px] h-[64px] flex justify-center items-center gap-[10px] bg-[#FF9F0D]">
      <p className="text-white font-normal text-[14px] xl:text-[18px] font-inter">
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



            </section>
             
                  
          
            )}

<div className="flex justify-between lg:items-center mt-6 lg:flex-row flex-col lg:gap-0 gap-4">
<button
            onClick={handleOpenModal}
            className="px-6 py-2 bg-darkPrimary text-black rounded-md hover:bg-navbarColor mt-28"
          >
            Go to checkout
          </button>
        {/* </SignedIn> */}

        {isModalOpen && (
          <CheckoutModal
            isOpen={setIsModalOpen}
            onSubmit={(formData) => {
              console.log("Order Submitted", formData);
              setTimeout(() => {
                setIsModalOpen(false); 
                setOrderSuccess(false); 
              }, 5000);
            }}
            cartItems={cart}
            closeModal={handleCloseModal}
            orderSuccess={setOrderSuccess}
            setCartItems={setCart} 
            calculateSubtotal={subtotal}
          />
        )}

        <button className="px-6 py-2 bg-darkPrimary text-black rounded-md hover:bg-navbarColor">
          <Link href="/products">Continue Shopping</Link>
        </button>
      </div>  
          
      </>
    );
};

export default Cart;



