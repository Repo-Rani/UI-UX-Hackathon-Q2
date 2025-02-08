"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShopCardProps, CartProps } from "../../../types/type";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import ShopCardsSliders from "./ShopCardsSliders";
import { toast } from "sonner";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const fetchProducts = async (): Promise<ShopCardProps[]> => {
  const products = await client.fetch(`
    *[_type=="food"] {
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
    }
  `);
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

const ShopSliders: React.FC = () => {
  const [products, setProducts] = useState<ShopCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartProps[]>([]);
  const [wishlist, setWishlist] = useState<ShopCardProps[]>([]);
  const [comparisonList, setComparisonList] = useState<ShopCardProps[]>([]);
  const [showCompareDialog, setShowCompareDialog] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

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

  if (loading) {
    return <p>Loading products...</p>;
  }

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="md:w-full md:left-0 left-[35px] w-[250px] ms:w-[300px] max-w-[1320px] mx-auto">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <ShopCardsSliders
              Cardproduct={product}
              addToCart={addToCart}
              toggleWishlist={(product) => {
                const storedWishlist = localStorage.getItem("wishlist");
                const wishlist: ShopCardProps[] = storedWishlist ? JSON.parse(storedWishlist) : [];
                const isWishlisted = wishlist.some((item) => item.id === product.id);

                if (isWishlisted) {
                  const updatedWishlist = wishlist.filter((item) => item.id !== product.id);
                  localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
                  toast("Item removed from wishlist."); // Pass a string
                } else {
                  wishlist.push(product);
                  localStorage.setItem("wishlist", JSON.stringify(wishlist));
                  toast("Item added to wishlist successfully."); // Pass a string
                }

                setWishlist(wishlist);
              }}
              addToCompare={addToCompare}
              isWishlisted={wishlist.some((item) => item.id === product.id)}
              cart={cart}
              setCart={setCart}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopSliders;