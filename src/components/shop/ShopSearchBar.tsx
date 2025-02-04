"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ProductSuggestion } from "../../../types/type";
const ShopSearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<ProductSuggestion[]>([]);
  const router = useRouter();
  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    const fetchProducts = async () => {
      const searchQuery = `*[_type in [  "food"] && name match "${query}*" ] {
        _id,
        name,
        "imageUrl": image.asset->url,
        price,
        _type
      }`;
      try {
        const results: ProductSuggestion[] = await client.fetch(searchQuery);
        setSuggestions(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    fetchProducts();
  }, [query]);
  const handleSelect = (product: ProductSuggestion) => {
    setQuery("");
    setSuggestions([]);
    switch (product._type) {
      case "food":
        router.push(`/shopDetails/${product._id}`);
        break;
      default:
        console.warn(`Unknown product type: ${product._type}`);
    }
  };
  return (
    <div className="w-[248px] h-[46px] p-3 relative left-[25px] top-[1.5rem] bg-red-100 ">
          <input
            type="text"
            placeholder="Search Porduct"
            className="bg-transparent outline-none border-none placeholder-[#828282] font-inter font-normal text-[16px] realtive left-[20px] top-[11px]"
          />
          <div className="bg-[#ff9f0d] w-[46px] h-[46px] relative left-[200px] -top-9 flex items-center justify-center">
            <Image
              src="/MagnifyingGlass (1).svg"
              alt="magnifyin-search"
              height={20}
              width={20}
            />
          </div>
        
           
 
      {suggestions.length > 0 && (
        <div className="absolute left-[60px] top-[calc(100%+4px)] md:w-[calc(100vw-80vw)] w-[calc(100vw-30vw)]  border-[1px] border-[#FF9F0D] shadow-lg rounded-md  md:z-20 z-[999] max-h-60 text-white bg-black overflow-auto">
          <ScrollArea>
            <ul className="p-2">
              {suggestions.map((product) => (
                <li
                  key={product._id}
                  className="flex items-center gap-2 py-4 px-2 hover:bg-[#FF9F0D] bg-opacity-50 cursor-pointer"
                  onClick={() => handleSelect(product)}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    height={40}
                    width={40}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div className="flex flex-col justify-between w-full">
                  <span>{product.name}</span>
                  <span>${product.price}.00</span>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
        
      )}
    </div>
    
    
  );
};

export default ShopSearchBar