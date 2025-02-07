'use client';
import Banner from "@/components/banner/Banner";
import Image from "next/image";
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
        <section className="w-full max-w-[1320px] mx-auto px-4 py-8">
          {/* Headings */}
          <div className="w-full flex justify-between mb-4">
            <h2 className="font-inter font-bold text-[16px] md:text-[18px] text-[#333333]">
              Product
            </h2>
            <div className="flex justify-between w-[60%] list-none">
              <li className="text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Price</li>
              <li className="text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Quantity</li>
              <li className="text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Total</li>
              <li className="text-[#333333] font-inter font-bold text-[14px] md:text-[18px]">Remove</li>
            </div>
          </div>

          {/* Product List */}
          <div className="w-full">
            {cart.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center w-full border-b border-gray-200 py-4"
              >
                {/* Product Column */}
                <div className="flex items-center gap-4 w-[40%]">
                  <Image
                    width={93.14}
                    height={97.13}
                    className="w-[50px] h-[50px] sm:w-[93.14px] sm:h-[97.13px]"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <span className="font-inter font-bold text-[12px] sm:text-[14px] xl:text-[16px] text-[#333333]">
                    {product.name}
                  </span>
                </div>

                {/* Price Column */}
                <div className="w-[15%] text-center">
                  <p className="text-[14px] md:text-[16px] font-satoshi font-bold text-black">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Column */}
                <div className="w-[15%] text-center">
                  <div className="flex justify-center items-center gap-[10px] w-[60px] md:w-[100px] h-[24px] md:h-[32px] border-[1px] rounded-[18px] border-[#e0e0e0]">
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
                <div className="w-[15%] text-center">
                  <p className="text-[14px] md:text-[16px] font-satoshi font-bold text-black">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Remove Column */}
                <div className="w-[15%] text-center">
                  <PiTrashFill
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 md:h-[24px] md:w-[24px] h-[20px] w-[20px] cursor-pointer hover:text-red-400"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Coupon Code and Summary Section */}
          <div className="w-full flex flex-col lg:flex-row gap-8 mt-8">
            {/* Coupon Code */}
            <div className="w-full lg:w-[48%]">
              <h1 className="font-helvetica text-[22px] sm:text-[28px] xl:text-[32px] font-bold text-black mb-4">
                Coupon Code
              </h1>
              <div className="p-6 border border-[#E0E0E0] rounded-[6px]">
                <p className="font-inter font-normal text-[14px] sm:text-[14px] xl:text-[18px] text-[#828282] mb-4">
                  Unlock exclusive savings with our special coupon code! Enjoy amazing discounts on your favorite products. Limited-time offer grab your deal now!
                </p>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter Here code"
                    className="w-full p-2 border border-[#E0E0E0] rounded-[6px] outline-none"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="w-[100px] bg-[#FF9F0D] text-white font-inter font-normal text-[14px] xl:text-[18px] rounded-[6px] flex justify-center items-center"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="w-full lg:w-[48%]">
              <h1 className="font-helvetica text-[22px] sm:text-[28px] xl:text-[32px] font-bold text-[#333333] mb-4">
                Total Bill
              </h1>
              <div className="p-6 border border-[#E0E0E0] rounded-[6px]">
                <div className="flex justify-between mb-4">
                  <p className="font-helvetica text-[16px] xl:text-[20px] font-bold text-[#333333]">
                    Cart Subtotal
                  </p>
                  <p className="font-bold font-inter text-[14px] xl:text-[18px] text-[#333333]">
                    ${subtotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between mb-4">
                  <p className="font-inter text-[14px] xl:text-[18px] font-normal text-[#4F4F4F]">
                    Shipping Charge
                  </p>
                  <p className="font-inter text-[18px] font-normal text-[#4F4F4F]">
                    ${deliveryFee.toFixed(2)}
                  </p>
                </div>
                <div className="border-b border-[#BDBDBD] mb-4"></div>
                <div className="flex justify-between">
                  <p className="font-helvetica text-[16px] xl:text-[20px] font-bold text-[#333333]">
                    Total Amount
                  </p>
                  <p className="font-bold font-inter text-[14px] xl:text-[18px] text-[#333333]">
                    ${total.toFixed(2)}
                  </p>
                </div>
              </div>
              <Link href="/checkout">
                <div className="w-full h-[64px] flex justify-center items-center gap-[10px] bg-[#FF9F0D] mt-4 rounded-[6px]">
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

      {/* Checkout Buttons */}
      <div className="flex justify-between lg:items-center mt-6 lg:flex-row flex-col lg:gap-0 gap-4">
        <button
          onClick={handleOpenModal}
          className="px-6 py-2 bg-darkPrimary text-black rounded-md hover:bg-navbarColor"
        >
          Go to checkout
        </button>
        <button className="px-6 py-2 bg-darkPrimary text-black rounded-md hover:bg-navbarColor">
          <Link href="/products">Continue Shopping</Link>
        </button>
      </div>

      {/* Checkout Modal */}
      {isModalOpen && (
        <CheckoutModal
          isOpen={setIsModalOpen}
          onSubmit={handleSubmitForm}
          cartItems={cart}
          closeModal={handleCloseModal}
          orderSuccess={setOrderSuccess}
          setCartItems={setCart}
          calculateSubtotal={subtotal}
        />
      )}
    </>
  );
};

export default Cart;