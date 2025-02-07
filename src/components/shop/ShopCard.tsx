"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { ShopCardProps } from "../../../types/type";
import Pagination from "./Pagination";
import ShopSidebar from "./ShopSidebar";
import ComparisonTable from "./ComparisionTable";
import { CartProps } from "../../../types/type";
import { Button } from "@/components/ui/button";
import { FaCartArrowDown } from "react-icons/fa";
import { PiTrashFill } from "react-icons/pi";
import { IoAddOutline } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";
import { PiSmileySad } from "react-icons/pi";
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

const fetchProducts = async (category: string | null): Promise<ShopCardProps[]> => {
  const query = category
    ? `*[_type=="food" && category == "${category}"] {
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
        bottomDetail,
        price
      }`
    : `*[_type=="food"] {
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
        bottomDetail,
        price
      }`;

  const products = await client.fetch(query);
  return products.map((product: any) => ({
    id: product._id,
    imageUrl: product.imageUrl,
    name: product.name,
    price: product.price,
    discountPrice: product.discountPrice,
    sell: product.sell,
    ratingUrl: product.ratingUrl,
    ratingNum: product.ratingNum,
    reviews: product.reviews,
    text: product.text,
    bottomDetail: product.bottomDetail,
    bottomDetail2: product.bottomDetail2,
  }));
};

const ShopCard: React.FC = () => {
  const [products, setProducts] = useState<ShopCardProps[]>([]);
  const [product, setProduct] = useState<ShopCardProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartProps[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [comparisonList, setComparisonList] = useState<ShopCardProps[]>([]);
  const [showCompareDialog, setShowCompareDialog] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const productsPerPage = 15;
  const { toast } = useToast();

  // Fetch wishlist status for the current product
  useEffect(() => {
    if (product) {
      const storedWishlist = localStorage.getItem("wishlist");
      const wishlist: ShopCardProps[] = storedWishlist ? JSON.parse(storedWishlist) : [];
      setIsWishlisted(wishlist.some((item) => item.id === product.id));
    }
  }, [product]);

  // Toggle wishlist for the current product
  const toggleWishlist = () => {
    if (!product) {
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

  // Add to cart functionality
  const addToCart = (product: ShopCardProps) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item
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

  // Remove from cart functionality
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Fetch products based on selected category
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(selectedCategory);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [selectedCategory]);

  // Handle category change
  const handleCategoryChange = (category: string, index: number) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Pagination logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Add to comparison list
  const addToCompare = (product: ShopCardProps) => {
    if (comparisonList.length === 2) {
      if (
        window.confirm(
          "You can only compare two items at a time. Do you want to clear the comparison list?"
        )
      ) {
        setComparisonList([]);
      }
      return;
    }

    const isAlreadyAdded = comparisonList.some((item) => item.id === product.id);

    if (!isAlreadyAdded) {
      const updatedList = [...comparisonList, product];
      setComparisonList(updatedList);

      if (updatedList.length === 1) {
        alert("First product selected successfully. Now select the second product.");
      } else if (updatedList.length === 2) {
        alert("Second product selected successfully.");
        setShowCompareDialog(true);
      }
    } else {
      alert("This item is already in the comparison list.");
    }
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

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

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

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="product-list mt-24">
      <ShopSidebar handleCategoryChange={handleCategoryChange} />

      <div className="absolute w-full flex justify-center md:justify-start  top-[660px] md:top-[650px] ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xsm:gap-x-[30px] xsm:gap-y-[75px] ms:gap-x-[25px] gap-x-[10px] gap-y-[65px] sm:gap-x-[25px] sm:gap-y-[80px] lg:gap-x-[25px] lg:gap-y-[30px] xl:gap-x-[15px] xl:gap-y-[70px] xl:gap-[25px]">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="w-[150px] xl:w-[312px] h-[160px] xl:h-[330px]  xlg:h-[250px] lg:h-[235px] sm:w-[150px] md:w-[180px]  md:left-[20px] xlg:left-[100px] xl:left-[30px] xxl:left-[60px] xxxl:left-[200px] relative group"
            > 
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  height={267}
                  width={312}
                  className="xl:w-[312px] xlg:w-[240px]   ms:w-[165px] w-[150px]  h-[140px] ms:h-[160px] sm:w-[150px] sm:h-[140px] md:w-[180px] md:h-[155px] xlg:h-[175px] xl:h-[267px] object-cover rounded-md"
                />
                {/* Hidden Div */}
                <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black bg-opacity-50">
                  <div className="md:w-[146px] h-[34px] w-[120px] flex justify-between">
                    <div
                      className="bg-[#ffffff] md:w-[40.1px] md:h-[34px] w-[30px] h-[25px] rounded-[2px] flex justify-center items-center cursor-pointer"
                      onClick={() => addToCompare(product)}
                    >
                      <Image
                        src="/GitDiff.svg"
                        alt="gitdiff-image"
                        height={12.03}
                        width={14.04}
                      />
                    </div>
                    <div
                      className="bg-[#ff9f0d] md:w-[40.1px] md:h-[34px] w-[30px] h-[25px] rounded-[2px] flex justify-center items-center cursor-pointer"
                      onClick={() => addToCart(product)}
                    >
                      <Image
                        src="/Tote (1).svg"
                        alt="tote-image"
                        height={12.03}
                        width={14.04}
                      />
                    </div>
                    <div
                      className="bg-[#ffffff] md:w-[40.1px] md:h-[34px] w-[30px] h-[25px] rounded-[2px] flex justify-center items-center cursor-pointer"
                      onClick={() => {
                        setProduct(product); // Set the current product
                        toggleWishlist(); // Toggle wishlist for the current product
                      }}
                    >
                      {isWishlisted && product.id === product.id ? (
                        <RiHeart3Fill className="text-[#ff9f0d]" />
                      ) : (
                        <RiHeart3Line className="text-[#ff9f0d]" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Sell Badge */}
                {product.sell && (
                  <div className="absolute top-[20px] left-[20px] bg-[#ff9f0d] rounded-[6px] w-[40px] h-[18px] md:w-[52px] md:h-[22px] flex items-center justify-center">
                    <span className="font-inter font-normal text-[12px] md:text-[14px] text-[#ffffff]">
                      {product.sell}
                    </span>
                  </div>
                )}
              </div>

              {/* Title Section */}
              <Link href={`/shopDetails/${product.id}`} passHref>
                <h2 className="md:mt-4 mt-2 font-bold text-[14px] sm:text-[16px] xl:text-[18px] text-[#333333] font-inter">
                  {product.name}
                </h2>
              </Link>

              {/* Price Section */}
              <div className="flex justify-between items-center mt-1 xl:mt-2">
                <span className="text-[#FF9F0D] font-medium font-inter text-[14px] sm:text-[16px] xl:text-[18px]">
                  ${product.price}.00
                </span>
                {product.discountPrice && (
                  <span className="line-through text-[#828282] relative xl:right-[11rem] xlg:right-[1rem] lg:right-[15rem] right-[1rem] xsm:right-0 font-inter text-[14px] sm:text-[16px] xl:text-[18px]">
                    ${product.discountPrice}.00
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Section */}
      <div className="absolute xl:top-[2700px] xlg:top-[2100px] top-[2500px] sm:top-[1900px] md:top-[2580px] lg:top-[2000px] xl:left-[380px] md:left-0 lg:left-[200px] xxxl:left-[635px] sm:left-[100px]">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
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
    <SheetClose
      asChild
      className="border-none outline-none"
    ></SheetClose>
  </SheetFooter>
</SheetContent>
        </Sheet>
    </div>
    
  );
};

export default ShopCard;
