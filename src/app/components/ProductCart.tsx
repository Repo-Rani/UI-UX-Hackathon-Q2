import Image from "next/image";
import { CartProps } from "../../../types/type";

const ProductCart = ({
  image,
  name,
  price,
  img,
  quantity,
  total,
}: CartProps) => {
  return (
    <>
      <div className="w-[225.34px] h-[97.13px]   flex justify-between">
        <Image src={image} alt={name} width={93.14} height={97.13} />
        <div className="flex flex-col justify-center items-start">
          <span className=" font-inter font-bold text-[16px] text-[#333333] whitespace-nowrap">
            {name}
          </span>
          <Image src={img} alt="rating-star" width={116} height={20} />
        </div>
        <div className="flex justify-between items-center absolute  left-[500px] w-[730px]">
          <span className="w-[49px] h-[24px] font-halvetica font-normal text-[16px] text-[#333333] relative top-[37px]">
            ${price}
          </span>
          <div className="flex justify-center items-center gap-[20px] w-[110px] h-[32px] border-[1px] rounded-[18px] border-[#e0e0e0] relative top-[37px] right-[60px] ">
           
          <Image src="/Minus (1).svg" alt="minus icon" height={16} width={16} className="h-[16px] w-[16px]"/>

         
            <span className=" font-inter font-normal text-[16px] text-[#33333]">
              {quantity}
            </span>
            <Image src="/Plus (1).svg" alt="plus-icon" height={16} width={16} className="h-[16px] w-[16px]"/> 

          </div>
          <span className="w-[65px] h-[24px] font-inter font-bold text-[16px] text-[#33333] relative top-[35px]">
            ${total}
          </span>
          {/* <span className="w-[20px] h-[20px] text-[#1f242e]">x</span> */}
          <Image src="/X.svg" alt="cross icon" height={16} width={16} className="h-[16px] w-[16px] relative top-[35px]"/>
        </div>
      </div>
      <div className="w-[1318px] border-[1px] border-[#e0e0e0]"></div>
    </>
  );
};

export default ProductCart;
