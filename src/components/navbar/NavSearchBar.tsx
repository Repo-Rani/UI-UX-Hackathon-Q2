"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ProductSuggestion } from "../../../types/type";
const NavSearchBar = () => {
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
    <div className="flex-1 border-[1px] border-[#FF9F0D] h-[40px] rounded-[27px] flex items-center px-4  ">
              <input
                type="text"
                value={query}
      onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 font-inter font-normal bg-transparent border-none outline-none text-[14px] text-[#FFFFFF]"
              />
              <Image
                src="/Vector (1).svg"
                alt="search-vector"
                width={20}
                height={20}
                className="cursor-pointer relative ms:right-0 right-4"
              />
           
 
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

export default NavSearchBar;