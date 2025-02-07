"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PiSmileySad } from "react-icons/pi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaCartArrowDown } from "react-icons/fa";
import { PiTrashFill } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CartProps, ShopCardProps, WishlistItem } from "../../../types/type";

const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [cart, setCart] = useState<CartProps[]>([]);
  const [showCart, setShowCart] = useState(false);

  
  const addToCart = (product: ShopCardProps) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity ?? 0) + 1 }
          : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newCartItem: CartProps = {
        id: product.id ?? "default-id",
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: 1,
        total: product.price,
      };

      const updatedCart: CartProps[] = [...cart, newCartItem];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const increaseQuantity = (productId: string) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: (item.quantity ?? 0) + 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

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
 localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <>
      <div className="md:pt-[65px] pt-[50px]"> 
        {wishlist.length === 0 ? (
          <div className="flex flex-col justify-center gap-y-[10px] w-full items-center mx-auto min-h-screen">
            <h1 className="font-helvetica text-[28px] text-black text-center font-extrabold tracking-wider">
              Your Wishlist
            </h1>
            <div className="flex justify-center items-center gap-2">
              <p className="text-black/50 font-helvetica">
                Your Wishlist is Empty!
              </p>
              <PiSmileySad className="h-5 w-5 text-black/50" />
            </div>
            <Image
              src="/9824477.webp"
              alt=""
              height={1000}
              width={1000}
              priority
              quality={100}
              className="h-[200px] w-[200px]"
            />
            <Link href="/shop">
              <button className="bg-[#FF9F0D] w-[130px] h-[40px] rounded-[50px] border-none outline-none text-white font-helvetica flex justify-center items-center hover:bg-black/80">
                Back to Shop
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center h-auto w-full mx-auto gap-y-[20px] justify-center relative top-[70px]">

<h1 className="font-helvetica text-[28px] text-black text-center font-bold tracking-wider">
              Your Wishlist
            </h1>
            <div className="grid grid-cols-5 xlg:w-[1000px] lg:w-[900px] md:w-[700px] w-[300px] px-6 py-4 bg-[#FF9F0D] border-b-[1px]  text-white rounded-[4px] font-helvetica text-center">
              <div>Product</div>
              <div>Product Name</div>
              <div>Price</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            <div className="flex flex-col gap-y-4 w-[1000px]">
              {wishlist.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-5 items-center px-6 py-4 border-b-[1px] border-gray-300 font-helvetica text-center"
                >
                  <div>
                    <Image
                      height={64}
                      width={64}
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover mx-auto"
                    />
                  </div>
                  <div className="text-gray-700">{item.name}</div>
                  <div className="flex justify-center gap-1 items-center flex-row">
                    <div className="text-gray-700 text-[16px]">
                      ${item.price}
                    </div>
                    {item.discountPercent && (
                      <>
                        <div className="text-gray-500 text-[12px] line-through mt-2">
                          ${item.discountPercent}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="text-[#FF9F0D] font-semibold">Available</div>
                  <div className="flex gap-x-2 justify-center">
                    <button
                      onClick={() => removeFromWishlist(item._id)}
                      className="text-red-500 px-3 py-1 rounded-md"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => {
                        const product: ShopCardProps = {
                          id: item._id,
                          name: item.name,
                          imageUrl: item.imageUrl,
                          price: item.price,
                        };
                        addToCart(product);
                      }}
                      className="bg-[#FF9F0D] text-white font-helvetica text-[14px] rounded-[50px] flex justify-center items-center w-[200px] h-[40px]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cart Sheet */}
        <div className="">
          <Sheet open={showCart} onOpenChange={setShowCart}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="fixed bottom-6 right-6 font-helvetica bg-[#FF9F0D] text-white p-4 rounded-full flex items-center justify-center text-lg cursor-pointer w-[50px] h-[50px] hover:text-white hover:bg-black"
                onClick={() => setShowCart(!showCart)}
              >
                <div className="w-[15px] h-[15px] flex justify-center items-center bg-white text-black rounded-full text-[10px] absolute top-[8px] left-[25px]">
                  {cart.length}
                </div>
                <FaCartArrowDown className="text-white h-7 w-7 ml-[-10px]" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto h-[100vh] max-w-[100vw] w-full px-4 py-6">
              <SheetHeader>
                <h2 className="text-2xl font-semibold mb-4 font-helvetica uppercase">
                  Your Cart
                </h2>
              </SheetHeader>
              <div>
                {cart.length === 0 ? (
                  <div className="flex justify-start gap-1 items-center">
                    <p className="text-lg text-gray-500 font-helvetica">
                      Your cart is empty
                    </p>
                    <PiSmileySad className="h-[20px] w-[20px] text-gray-500" />
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="border-b py-4">
                      <div className="flex flex-row justify-center items-center sm:items-start sm:px-4 gap-4">
                        <Image
                          src={item.imageUrl}
                          alt="product-image"
                          height={40}
                          width={40}
                          className="h-[60px] w-[60px] object-cover"
                        />
                        <div className="flex flex-col">
                          <div className="flex justify-between items-center w-full sm:w-[270px]">
                            <h3 className="font-semibold text-black font-helvetica">
                              {item.name}
                            </h3>
                            <PiTrashFill
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 h-5 w-5 cursor-pointer hover:text-red-400"
                            />
                          </div>
                          <div className="flex justify-between items-center w-full sm:w-[270px]">
                            <p className="text-black font-helvetica font-bold text-[16px]">
                              ${item.price}
                            </p>
                            <div className="flex justify-center items-center gap-2 bg-BannerBgColor rounded-full px-3 py-2 h-8">
                              <IoAddOutline
                                onClick={() => increaseQuantity(item.id)}
                                className="h-4 w-4 text-black cursor-pointer"
                              />
                              <p className="text-[14px] text-black font-helvetica font-bold">
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
              <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 items-center">
                <Link
                  href="/cart"
                  className="w-full sm:w-full h-[50px] bg-[#FF9F0D] text-white font-helvetica text-[15px] font-medium rounded-full flex justify-center items-center"
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
      </div>
    </>
  );
};

export default Wishlist;