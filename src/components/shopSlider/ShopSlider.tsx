'use client'
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import ShopCardsSliders from "./ShopCardsSliders";
import { ShopCardProps } from "../../../types/type";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from "@/sanity/lib/client";
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
    nextArrow: <NextArrow onClick={() => {}}/>,
    prevArrow: <PrevArrow onClick={() => {}}/>,
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
          slidesToShow: 4,
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
                  <Link href={`${product.id}`} passHref key={product.id}>

          <ShopCardsSliders
            key={product.id}
            product={product} 
          />
           </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ShopSliders;
