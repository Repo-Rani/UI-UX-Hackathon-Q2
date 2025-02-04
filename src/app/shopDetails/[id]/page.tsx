"use client";
import React from "react";
import Image from "next/image";
import Banner from "@/components/banner/Banner";
// import Footer from "@/components/Footer";
import ShopSliders from "@/components/shopSlider/ShopSlider";
import Link from "next/link";
import ErrorePage from "@/app/errorePage/page";
import { ShopCardProps } from "../../../../types/type";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaCartArrowDown } from "react-icons/fa";
import { PiTrashFill } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { PiSmileySad } from "react-icons/pi";
// import { RxCross2 } from "react-icons/rx";
import { Product } from "../../../../types/type";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";





import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

interface Props {
  params: {
    id: string;
  };
}
const ShopCardsDetails: React.FC<Props> = ({ params }) => {
  const [product, setProduct] = useState<ShopCardProps | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  const { id } = params;

  const { toast } = useToast();
const [isWishlisted, setIsWishlisted] = useState(false);

useEffect(() => {
  if (product) { // Check if product is not null or undefined
    const storedWishlist = localStorage.getItem("wishlist");
    const wishlist: ShopCardProps[] = storedWishlist ? JSON.parse(storedWishlist) : [];
    setIsWishlisted(wishlist.some((item) => item.id === product.id));
  }
}, [product?.id]); // Optional chaining to avoid errors if product is null/undefined

const toggleWishlist = () => {
  if (!product) { // Check if product is not null or undefined
    toast({ description: "Product is not available." });
    return;
  }

  const storedWishlist = localStorage.getItem("wishlist");
  const wishlist: ShopCardProps[] = storedWishlist ? JSON.parse(storedWishlist) : [];

  if (isWishlisted) {
    const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast({ description: "Item removed from wishlist." });
  } else {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    toast({ description: "Item added to wishlist successfully." });
  }

  setIsWishlisted(!isWishlisted);
};
  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type=="food" && _id == $id] {
        ratingNum,
        description,
        reviews,
        name,
        text,
        bottomDetail2,
        _id,
        category,
        "imageUrl": image.asset->url, 
        originalPrice,
        discountPrice,
        "ratingUrl": ratingImage.asset->url, 
        sell,
        tags,
        bottomDetail,
        price
      }`;
      try {
        const productData: ShopCardProps[] = await client.fetch(query, { id });
        if (!productData || productData.length === 0) {
          notFound();
        } else {
          setProduct(productData[0]);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
      const updatedCart = [
        ...cart,
        {
          id: product.id,
          name: product.name,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: 1,
        },
      ];
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

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

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

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  

if (!product) {
  return <ErrorePage />;
}


  return (
    <>
      <section className="">
        {/* banner */}
        <Banner name="shop Details" mainHeading="Shop Details"/>

        <div className="absolute top-[70px] ">
        <div className="w-[300px] sm:w-[500px]  xl:h-[596px]  h-[365px] absolute top-[450px] md:top-[500px] xl:top-[530px] left-[10px] ms:left-[35px] xsm:left-[50px] md:left-[150px] lg:left-[50px] xl:left-[100px] xxl:left-[200px] xxxl:left-[340px] flex gap-[5px] md:gap-[13px] ">
          <div className="flex flex-col gap-[20px]">
            <Image
              src={product.imageUrl}
              alt="food-image"
              height={129}
              width={132}
              className="h-[80px] lg:h-[129px] w-[150px] lg:w-[132px] object-cover rounded-lg"
            />
            <Image
              src={product.imageUrl}
              alt="food-image"
              height={129}
              width={132}
              className="h-[80px] lg:h-[129px] w-[150px] lg:w-[132px] object-cover rounded-lg"
            />
            <Image
              src={product.imageUrl}
              alt="food-image"
              height={129}
              width={132}
              className="h-[80px] lg:h-[129px]   w-[150px] lg:w-[132px] object-cover rounded-lg"
            />
            <Image
              src={product.imageUrl}
              alt="food-image"
              height={129}
              width={132}
              className="h-[80px] lg:h-[129px] w-[150px] lg:w-[132px]  object-cover rounded-lg"
            />
          </div>
          <div className="ml-[10px]">
            <Image
              src={product.imageUrl}
              alt="large-food-image"
              height={596}
              width={491}
              className="w-[340px] lg:w-[520px] xl:w-[491px] xl:h-[596px] md:h-[378px] lg:h-[400px] h-[360px]  object-cover rounded-lg"
            />
          </div>
        </div>
        <span className="w-[80px] h-[30px] sm:w-[100px] md:h-[33px] absolute top-[860px] md:top-[920px] sm:top-[860px] lg:top-[500px] xl:top-[534px] left-[15px] ms:left-[35px] xsm:left-[50px] lg:left-[600px]  xl:left-[690px] xxl:left-[785px] xxxl:left-[950px] rounded-[6px] bg-[#FF9F0D] text-white font-normal text-[10px] md:text-[14px] font-inter flex justify-center items-center whitespace-nowrap">
          {product.tags}
        </span>
        <div className="sm:w-[152px] w-[140px] h-[26px] absolute left-[180px]  sm:left-[400px] md:left-[545px] lg:left-[860px] xl:left-[1100px] xxl:left-[1200px]   xxxl:left-[1478px] md:top-[920px] sm:top-[860px] lg:top-[500px] top-[860px] xl:top-[530px]  flex md:justify-between justify-center md:gap-0 gap-[10px] items-center">
          <div className="flex justify-start gap-[6px]">
            <Image
              src="/Project Status.svg"
              alt=""
              width={24}
              height={24}
               className="h-[18px] w-[18px] md:h-[24px] md:w-[24px]"
            />
            <button className="text-[14px] md:text-[18px] font-normal font-inter text-[#828282]">
              Prev
            </button>
          </div>
          <div className="flex justify-start gap-[6px]">
            <button className="text-[14px] md:text-[18px] font-normal font-inter text-[#828282]">
              Next
            </button>
            <Image
              src="/ArrowRight.svg"
              alt=""
              width={24}
              height={24}
              className="h-[18px] w-[18px] md:h-[24px] md:w-[24px]"
            />
          </div>
        </div>

        <h1 className="text-[24px] md:text-[32px] xl:text-[48px] font-bold font-helvetica text-[#333333] absolute left-[15px] ms:left-[35px] xsm:left-[50px] sm:left-[50px] lg:left-[600px] xl:left-[690px] xxl:left-[785px] xxxl:left-[950px] md:top-[960px] lg:top-[535px]  sm:top-[905px] top-[915px] xl:top-[580px] whitespace-nowrap">
          {product.name}
        </h1>

        <p className="w-[275px] ms:w-[300px] xl:w-[608px] sm:w-[500px] lg:w-[400px] h-[97px] absolute md:top-[1010px] top-[955px] lg:top-[585px] xl:top-[660px] left-[15px] ms:left-[35px] xsm:left-[50px] lg:left-[600px] xl:left-[690px] xxl:left-[785px] xxxl:left-[950px] text-[#4F4F4F] font-normal font-inter text-[14px] md:text-[16px] xl:text-[18px] md:leading-[26px]">
          {product.description}
        </p>

        <div className="w-[275px] ms:w-[300px] xl:w-[611px] sm:w-[500px] md:w-[600px] lg:w-[400px] border-b-[1px] border-[#E0E0E0] absolute left-[15px] ms:left-[35px] xsm:left-[50px] xl:left-[690px] xxl:left-[785px] lg:left-[600px] xxxl:left-[950px] sm:top-[1045px] md:top-[1100px] top-[1060px] lg:top-[730px] xl:top-[779px]"></div>

        <h3 className="font-helvetica font-bold md:text-[32px] lg:text-[28px] xl:text-[32px] text-[20px] absolute sm:top-[1080px] md:top-[1130px] lg:top-[745px] top-[1100px] xl:top-[811px] left-[15px] ms:left-[35px] xsm:left-[50px] lg:left-[600px] xl:left-[690px] xxl:left-[785px] xxxl:left-[950px] text-[#333333]">
          ${product.price}.00
        </h3>

        <div className="w-[300px] md:w-[333px] h-[24px] absolute top-[1150px] sm:top-[1125px] md:top-[1185px] lg:top-[790px]  xl:top-[867px] left-[15px] ms:left-[35px] xsm:left-[50px] xl:left-[690px] lg:left-[600px] xxl:left-[785px] xxxl:left-[950px] flex justify-between">
          <Image
            src="/Star (2).svg"
            alt=""
            width={116}
            height={20}
            className=" h-[20px] w-[116px]"
          />
          <div className="w-[203px] h-[24px] flex justify-between">
            <Image
              src="/Line 35.svg"
              alt=""
              height={10}
              width={10}
              className=" w-[13px]"
            />
            <p className="font-inter text-[14px] whitespace-nowrap md:text-[16px]  font-normal text-[#828282] ">
              {product.ratingNum} Rating
            </p>

            <Image
              src="/Line 35.svg"
              alt=""
              height={10}
              width={10}
              className=" xl:h-[24px] h-[23px] w-[8px] md:w-[10px]"
            />
            <p className="font-inter text-[14px] whitespace-nowrap md:text-[16px] font-normal text-[#828282] ">
              {product.reviews} Reviews
            </p>
          </div>
        </div>

        <p className="w-[300px] absolute top-[1190px] sm:top-[1170px] md:top-[1220px] lg:top-[825px] xl:top-[913px] left-[15px] ms:left-[35px] xsm:left-[50px] xl:left-[690px] xxl:left-[785px] lg:left-[600px] xxxl:left-[950px] font-normal text-[14px] md:text-[18px] font-inter text-[#333333]">
          {product.text}
        </p>

        <div className="lg:w-[181px] w-[100px] h-[40px] lg:h-[50px] absolute left-[15px] ms:left-[35px] xsm:left-[50px] lg:left-[600px] xl:left-[690px] xxl:left-[785px] xxxl:left-[950px] top-[1230px] sm:top-[1210px] md:top-[1270px] lg:top-[870px] xl:top-[964px] border-[#828282] border-[1px] flex justify-center gap-[10px] items-center pl-4 pr-4 cursor-pointer
        ">
          <Image
            src="/Minus.svg"
            alt=""
            width={20}
            height={20}
             className="lg:h-[20px] h-[14px] w-[14px] lg:w-[20px]"
             onClick={handleDecrement}
          />
          <div className="border-b-[1px] rotate-90 border-[#828282] w-full  "></div>
          <p className="font-helvetica text-[14px] md:text-[20px] font-bold text-[#333333]">
          {count}
          </p>
          <div className="border-b-[1px] rotate-90 border-[#828282] w-full "></div>
          <Image
            src="/Plus.svg"
            alt=""
            width={20}
            height={20}
            className="lg:h-[20px] h-[14px] w-[14px] lg:w-[20px]"
            onClick={handleIncrement}

          />
        </div>

        <div className="lg:w-[181px] w-[110px] h-[40px] lg:h-[50px] absolute  ms:left-[155px]  xsm:left-[170px] md:left-[180px] lg:left-[800px] left-[130px]  xxl:left-[1000px] xl:left-[1000px] xxxl:left-[1220px] top-[1230px] lg:top-[870px] sm:top-[1210px] md:top-[1270px] xl:top-[964px]  bg-[#FF9F0D] hover:border-[1px] hover:border-[#FF9F0D] hover:bg-white flex justify-center items-center gap-[10px] md:px-0 px-3">

          <Image
            src="/Bag.svg"
            alt="bag"
            height={20}
            width={20}
            className="lg:h-[20px] h-[16px] w-[16px] lg:w-[20px] bg-[#FF9F0D]"
          />
          
          <button  onClick={() => {
               
               addToCart(product);
             }}
           className="font-normal text-[14px] lg:text-[18px] whitespace-nowrap text-white font-inter  hover:text-[#FF9F0D] "
            
          >
       
            Add to cart
          </button>

        </div>

        <Sheet open={showCart} onOpenChange={setShowCart}>
          <SheetTrigger asChild>
          <Button
  variant="outline"
  className="fixed bottom-6 right-6 font-satoshi bg-black text-white p-4 rounded-full flex items-center justify-center text-lg cursor-pointer w-[50px] h-[50px] hover:text-white hover:bg-black"
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
    <SheetClose
      asChild
      className="border-none outline-none"
    ></SheetClose>
  </SheetFooter>
</SheetContent>
        </Sheet>

       <div className="w-[275px] sm:w-[500px] md:w-[600px] lg:w-[400px] xl:w-[618px] border-b-[1px] border-[#E0E0E0] absolute left-[15px] ms:left-[35px] lg:left-[600px] xsm:left-[50px] xl:left-[690px] xxl:left-[785px] xxxl:left-[950px]  top-[1300px] md:top-[1350px] lg:top-[950px] xl:top-[1048px]"></div>

        <div className="w-[278px] h-[26px] absolute top-[1330px] left-[15px] ms:left-[35px] xsm:left-[50px] lg:left-[600px] md:top-[1380px] lg:top-[970px] xl:top-[1072px] xl:left-[690px] xxl:left-[785px] xxxl:left-[950px] flex justify-between items-center">
          <div className="flex justify-start gap-[5px] items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist();
            }}
            className="absolute top-2 left-2 text-black font-thin text-3xl z-10"
          >
            {isWishlisted ? <RiHeart3Fill /> : <RiHeart3Line />}
          </button>
            <button className="font-inter text-[14px] md:text-[18px] font-normal text-[#4F4F4F]">
              Add to Wishlist
            </button>
          </div>
          <div className="flex justify-start gap-[5px] items-center">
            <Image
              src="/GitDiff (1).svg"
              alt=""
              height={20}
              width={20}
               className="md:h-[20px] h-[16px] w-[16px] md:w-[20px]"
            />
            <p className="font-inter text-[14px] md:text-[18px] font-normal text-[#4F4F4F]">
              Compare
            </p>
          </div>
        </div>
 
         <p className=" absolute top-[1370px] xl:top-[1106px] md:top-[1420px] lg:top-[1000px] left-[15px] lg:left-[600px] ms:left-[35px] xsm:left-[50px] xl:left-[690px] xxl:left-[785px] xxxl:left-[950px] font-inter text-[#333333] text-[14px] md:text-[18px] font-normal whitespace-nowrap">
          Category: {product.category}
        </p>

        <p className="absolute left-[15px] ms:left-[35px] xsm:left-[50px] lg:left-[600px] top-[1400px] md:top-[1450px] lg:top-[1030px] xl:top-[1140px] xl:left-[690px] xxl:left-[785px] xxxl:left-[950px] font-inter text-[#333333] text-[14px] md:text-[18px] font-normal whitespace-nowrap">
          Tag: Our Shop
        </p>

        <div className="w-[250px] h-[26px] absolute left-[15px] ms:left-[35px] xsm:left-[50px] xl:left-[690px] lg:left-[600px] xxl:left-[785px] xxxl:left-[950px]  top-[1430px] md:top-[1485px] lg:top-[1060px] xl:top-[1190px] flex justify-between items-center">
          <p className="font-inter text-[16px] md:text-[18px] font-normal text-[#333333]">
            Share :
          </p> 
          <div className="w-[184px]  h-[24px] flex justify-between items-center">
            <Image
              src="/Vector (3).svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/Vector (4).svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/Vector (5).svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/Vector (6).svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
            <Image
              src="/Group 3.svg"
              alt=""
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
          </div>
        </div> 

         <div className="w-[250px] sm:w-[500px] md:w-[600px] lg:w-[400px] xl:w-[606px] absolute top-[1480px] md:top-[1540px]  lg:top-[1120px] xl:top-[1248px] xl:left-[690px] xxl:left-[785px] lg:left-[600px] xxxl:left-[950px] left-[15px] ms:left-[35px] xsm:left-[50px] border-b-[1px] border-[#E0E0E0]"></div>

        <div className=" w-[300px] xl:w-[1320px] h-[458px] absolute xl:left-[60px]  xxl:left-[100px] xxxl:left-[300px] top-[1500px] left-[15px] ms:left-[35px] xsm:left-[50px] lg:top-[1200px] md:top-[1570px] xl:top-[1304px] ">
          <button className=" w-[130px] md:w-[165px] h-[40px] md:h-[50px]  bg-[#FF9F0D] flex justify-center items-center text-white font-normal text-[14px] md:text-[16px] font-helvetica">
            Description
          </button>
        </div>

        <p className="font-normal text-[14px] md:text-[16px] font-helvetica text-[#333333] absolute  xl:left-[289px] xxxl:left-[489px] left-[180px] sm:left-[220px] md:left-[255px] xsm:left-[210px] top-[1510px] md:top-[1575pxl lg:top-[1210px] xl:top-[1317px] whitespace-nowrap flex items-center">
          Reviews ({product.reviews})
        </p> 
         <p className="w-[300px] sm:w-[500px] lg:w-[900px] xl:w-[1320px] h-[72px] absolute left-[15px] ms:left-[35px] xsm:left-[50px] xl:left-[60px] xxl:left-[100px] xxxl:left-[300px] top-[1575px] xl:top-[1386px] md:top-[1645px] lg:top-[1270px] font-helvetica text-[14px] md:text-[16px] font-normal text-[#828282] md:leading-[24px]">
          {product.bottomDetail}
        </p>

        <p className="w-[300px] sm:w-[500px] lg:w-[900px] xl:w-[1320px] h-[72px] absolute left-[15px] ms:left-[35px] xsm:left-[50px] xl:left-[60px] xxl:left-[100px] xxxl:left-[300px] sm:top-[1660px] top-[1680px] md:top-[1710px] lg:top-[1340px] xl:top-[1482px] font-helvetica text-[14px] md:text-[16px] font-normal text-[#828282] md:leading-[24px]">
          {product.bottomDetail2}
        </p>  

         <div className="md:w-[476px] w-[300px] h-[184px] absolute ms:left-[35px] left-[25px]  xsm:left-[50px]   xl:left-[100px] xxxl:left-[300px] top-[1800px] sm:top-[1750px] md:top-[1800px] lg:top-[1420px] xl:top-[1578px]">
          <h1 className="font-inter font-normal text-[14px] md:text-[18px] text-[#4F4F4F] ">
            Key Benefits
          </h1>
          <ul className="list-disc  xl:ml-9 mt-4 sm:px-0 px-3">
            <li className="font-helvetica font-normal text-[12px] sm:text-[14px] text-[#4F4F4F]  mt-2 ">
            Crafted with premium ingredients for unmatched quality and taste.
            </li>
            <li className="font-helvetica font-normal text-[12px] sm:text-[14px] text-[#4F4F4F] mt-2">
            Designed to provide an exceptional sensory experience.
            </li>
            <li className="font-helvetica font-normal text-[12px] sm:text-[14px] text-[#4F4F4F]  mt-2">
            Perfectly balanced to suit a variety of preferences and occasions.
            </li>
            <li className="font-helvetica font-normal text-[12px] sm:text-[14px] text-[#4F4F4F]  mt-2">
            Sustainably sourced and ethically produced to support a better planet.
            </li>
            <li className="font-helvetica font-normal text-[12px] sm:text-[14px] text-[#4F4F4F]  mt-2">
            Backed by rigorous quality checks for a trustworthy experience.
            </li>
          </ul>
        </div> 
        </div>
         <div className="w-[275px] ms:w-[300px] md:w-full xl:w-[1320px] md:h-[401px] h-[285px] absolute top-[2200px] lg:top-[1750px] xl:top-[1950px] left-[20px] ms:left-[35px] xsm:left-[50px] sm:left-[150px] md:left-0  xl:left-[70px] xxl:left-[100px] xxxl:left-[300px]">
      <h2 className="md:w-[255px] w-[200px] h-[39px] font-helvetica font-bold text-[20px] md:text-[28px] xl:text-[32px] text-[#333333] relative bottom-[30px] sm:left-[-110px] md:left-[35px] xl:left-[10px]">Similar Products</h2>
     <ShopSliders/>
     </div> 

    
      </section>

 {/* <div className="absolute md:top-[2403px] top-[2700px]">
        <Footer/>
      </div>  */}
    </>
  );
};

export default ShopCardsDetails;
