// 'use client'
// import Image from "next/image";
// import { useState } from "react"; 
// import { CartProps } from "../../../types/type";
// const ProductCart = ({
//   image,
//   name,
//   price,
//   // img,
//   quantity: initialQuantity, 
//   total,
// }: CartProps) => {
  
  
//   const [quantity, setQuantity] = useState(initialQuantity);

  
//   const increment = () => {
//     setQuantity(quantity + 1);
//   };

  
//   const decrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1); 
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-start items-center w-full">
//         <div className="w-[65px] sm:w-[205px] md:w-[225.34px] h-[97.13px] relative flex sm:flex-row flex-col justify-center sm:left-[-125px] lg:left-[-45px] md:left-[-40px] xl:left-0 xl:gap-0 gap-2 items-center xl:justify-between">
//           <Image
//             src={image}
//             alt={name}
//             width={93.14}
//             height={97.13}
//             className="sm:w-[93.14px] sm:h-[97.13px] w-[50px] h-[50px]"
//           />
//           <div className="flex flex-col justify-center items-center sm:items-start">
//             <span className="font-inter font-bold text-[12px] sm:text-[14px] xl:text-[16px] text-[#333333] whitespace-nowrap">
//               {name}
//             </span>
//             {/* <Image
//               src={img}
//               alt="rating-star"
//               width={116}
//               height={20}
//               className="xl:w-[116px] sm:h-[20px] md:w-[100px] sm:w-[90px] w-[80px] h-[10px]"
//             /> */}
//           </div>
//           <div className="flex justify-between items-center absolute md:left-[300px] lg:left-[400px] xl:left-[550px] w-[200px] xsm:left-[120px] sm:left-[240px] left-[65px] ms:left-[80px] sm:w-[280px] md:w-[350px] xl:w-[730px]">
//             <span className="w-[49px] h-[24px] font-halvetica font-normal text-[12px] sm:text-[14px] xl:text-[16px] text-[#333333] relative xl:left-0 left-3 sm:left-0">
//               ${price}
//             </span>
//             <div className="flex justify-center items-center xl:gap-[20px] gap-[10px] w-[60px] md:w-[100px] h-[24px] md:h-[32px] border-[1px] rounded-[18px] border-[#e0e0e0] relative xl:right-[60px]">
//               <Image
//                 src="/Minus (1).svg"
//                 alt="minus icon"
//                 height={16}
//                 width={16}
//                 className="xl:h-[16px] xl:w-[16px] lg:w-[14px] lg:h-[14px] h-[10px] w-[10px]"
//                 onClick={decrement} 
//               />
//               <span className="font-inter font-normal text-[12px] sm:text-[14px] xl:text-[16px] text-[#33333]">
//                 {quantity}
//               </span>
//               <Image
//                 src="/Plus (1).svg"
//                 alt="plus-icon"
//                 height={16}
//                 width={16}
//                 className="xl:h-[16px] xl:w-[16px] lg:w-[14px] lg:h-[14px] h-[10px] w-[10px]"
//                 onClick={increment} 
//               />
//             </div>
//             <span className="w-[65px] h-[24px] font-inter font-bold text-[12px] sm:text-[14px] xl:text-[16px] text-[#33333] relative xl:left-[-75px] left-5">
//               ${total}
//             </span>
//             <button>
//             <Image
//               src="/X.svg"
//               alt="cross icon"
//               height={16}
//               width={16}
//               className="xl:h-[16px] xl:w-[16px] sm:w-[14px] sm:h-[14px] h-[10px] w-[10px] relative xl:left-[-100px] left-5"
//             />
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="relative sm:left-0 left-[15px] w-[300px] md:w-[550px] lg:w-[800px] xl:w-[1320px] border-[1px] border-[#e0e0e0]"></div>
//     </>
//   );
// };

// export default ProductCart;
