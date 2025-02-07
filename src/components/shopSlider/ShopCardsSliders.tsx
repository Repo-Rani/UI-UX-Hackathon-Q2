"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { ShopCardProps, CartProps } from "../../../types/type";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { PiTrashFill } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { PiSmileySad } from "react-icons/pi";
import ComparisonTable from "../shop/ComparisionTable";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ShopCardsSlidersProps {
  Cardproduct: ShopCardProps;
  addToCart: (product: ShopCardProps) => void;
  toggleWishlist: (product: ShopCardProps) => void;
  addToCompare: (product: ShopCardProps) => void;
  isWishlisted: boolean;
  cart: CartProps[];
  setCart: (cart: CartProps[]) => void;
}

const ShopCardsSliders: React.FC<ShopCardsSlidersProps> = React.memo(
  ({ Cardproduct, addToCart, toggleWishlist, addToCompare, isWishlisted, cart, setCart }) => {
    const [showCart, setShowCart] = useState(false);
    const [comparisonList, setComparisonList] = useState<ShopCardProps[]>([]);
    const [showCompareDialog, setShowCompareDialog] = useState(false);

    // Remove from cart functionality
    const removeFromCart = (productId: string) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Increase quantity in cart
    const increaseQuantity = (productId: string) => {
      const updatedCart = cart.map((item) =>
        item.id === productId ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Decrease quantity in cart
    const decreaseQuantity = (productId: string) => {
      const updatedCart = cart.map((item) => {
        if (item.id === productId && (item.quantity ?? 0) > 1) {
          return { ...item, quantity: (item.quantity ?? 0) - 1 };
        } else {
          return item;
        }
      });

      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Remove item from comparison list
    const removeCompareItem = (productId: string) => {
      const updatedList = comparisonList.filter((item) => item.id !== productId);
      setComparisonList(updatedList);
      if (updatedList.length === 0) {
        setShowCompareDialog(false);
      }
      alert("Item removed from comparison list.");
    };

    return (
      <div className="w-[150px] xl:w-[312px] h-[160px] xl:h-[330px] lg:h-[235px] sm:w-[150px] md:w-[200px] relative group">
        <div className="relative">
          <Image
            src={Cardproduct.imageUrl}
            alt={Cardproduct.name}
            height={267}
            width={312}
            className="xl:w-[312px] ms:w-[150px] w-[130px] h-[140px] ms:h-[160px] sm:w-[150px] sm:h-[140px] md:w-[200px] xl:h-[267px] object-cover rounded-md"
          />
          <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-[146px] h-[34px] flex justify-between">
              <div
                className="bg-[#ffffff] w-[40.1px] h-[34px] rounded-[2px] flex justify-center items-center cursor-pointer"
                onClick={() => addToCompare(Cardproduct)}
              >
                <Image
                  src="/GitDiff.svg"
                  alt="gitdiff-image"
                  height={12.03}
                  width={14.04}
                />
              </div>
              <div
                className="bg-[#ff9f0d] w-[40.1px] h-[34px] rounded-[2px] flex justify-center items-center cursor-pointer"
                onClick={() => addToCart(Cardproduct)}
              >
                <Image
                  src="/Tote (1).svg"
                  alt="tote-image"
                  height={12.03}
                  width={14.04}
                />
              </div>
              <div
                className="bg-[#ffffff] w-[40.1px] h-[34px] rounded-[2px] flex justify-center items-center cursor-pointer"
                onClick={() => toggleWishlist(Cardproduct)}
              >
                {isWishlisted ? (
                  <RiHeart3Fill className="text-[#ff9f0d]" />
                ) : (
                  <RiHeart3Line className="text-[#ff9f0d]" />
                )}
              </div>
            </div>
          </div>
        </div>

        <h2 className="md:mt-4 mt-2 font-bold text-[14px] sm:text-[16px] xl:text-[18px] text-[#333333] font-inter">
          {Cardproduct.name}
        </h2>

        <div className="flex justify-between items-center mt-1 xl:mt-2">
          <span className="text-[#FF9F0D] font-medium font-inter text-[14px] sm:text-[16px] xl:text-[18px]">
            ${Cardproduct.price}.00
          </span>
          {Cardproduct.discountPrice && (
            <span className="line-through text-[#828282] relative xl:right-[11rem] lg:right-[15rem] right-[1rem] xsm:right-0 font-inter text-[14px] sm:text-[16px] xl:text-[18px]">
              ${Cardproduct.discountPrice}.00
            </span>
          )}
        </div>

        {/* Comparison Dialog */}
        {showCompareDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-1/2">
              <h2 className="text-xl font-bold mb-4">Product Comparison</h2>
              <ComparisonTable
                products={comparisonList}
                removeCompareItem={removeCompareItem}
              />
              <button
                onClick={() => setShowCompareDialog(false)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Cart Sheet */}
        <Sheet open={showCart} onOpenChange={setShowCart}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="fixed bottom-6 right-6 font-satoshi bg-[#FF9F0D] text-white p-4 rounded-full flex items-center justify-center text-lg cursor-pointer w-[50px] h-[50px] hover:text-white hover:bg-black"
              onClick={() => setShowCart(!showCart)}
            >
              <div className="w-[15px] h-[15px] flex justify-center items-center bg-white text-black rounded-full text-[10px] absolute top-[8px] left-[25px]">
                {cart.length}
              </div>
              <FaCartArrowDown className="text-white h-7 w-7 ml-[-10px]" />
            </Button>
          </SheetTrigger>

          <SheetContent className="overflow-y-auto h-auto">
            <SheetHeader>
              <h2 className="text-2xl font-semibold mb-4 font-integralCf uppercase">
                Your Cart
              </h2>
            </SheetHeader>
            <div>
              {cart.length === 0 ? (
                <div className="flex justify-start gap-1 items-center">
                  <p className="text-lg text-gray-500 font-satoshi">
                    Your cart is empty
                  </p>
                  <PiSmileySad className="h-[20px] w-[20px] text-gray-500" />
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="border-b py-4">
                    <div className="flex justify-center items-center w-full px-4 gap-[10px]">
                      <Image
                        src={item.imageUrl}
                        alt="product-image"
                        height={40}
                        width={40}
                        className="h-[60px] w-[60px] object-cover"
                      />
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center w-[270px]">
                          <h3 className="font-semibold text-black font-satoshi">
                            {item.name}
                          </h3>
                          <PiTrashFill
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 h-5 w-5 cursor-pointer hover:text-red-400"
                          />
                        </div>

                        <div className="flex justify-between items-center w-[270px]">
                          <p className="text-black font-satoshi font-bold text-[16px]">
                            ${item.price}
                          </p>
                          <div className="flex justify-center items-center gap-[10px] w-[100px] bg-BannerBgColor rounded-[50px] px-3 py-2 h-8">
                            <IoAddOutline
                              onClick={() => increaseQuantity(item.id)}
                              className="h-4 w-4 text-black cursor-pointer"
                            />
                            <p className="text-[14px] text-black font-satoshi font-bold">
                              {item.quantity}
                            </p>
                            <RiSubtractLine
                              onClick={() => decreaseQuantity(item.id)}
                              className="h-4 w-4 text-black cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-4 flex justify-center gap-[20px] items-center">
              <Link
                href="/cart"
                className="w-full h-[50px] bg-[#FF9F0D] text-white font-helvetica text-[15px] font-medium rounded-[50px] flex justify-center items-center"
              >
                <button>View cart</button>
              </Link>
            </div>
            <SheetFooter>
              <SheetClose asChild className="border-none outline-none"></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );
  }
);

export default ShopCardsSliders;