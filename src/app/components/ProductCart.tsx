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
      <div className="w-[50px] md:w-[225.34px] h-[97.13px]   flex md:flex-row flex-col justify-center md:gap-0 gap-2 md:justify-between">
        <Image src={image} alt={name} width={93.14} height={97.13} className="md:w-[93.14px] md:h-[97.13px] w-[50px] h-[50px]" />
        <div className="flex flex-col justify-center items-start">
          <span className=" font-inter font-bold text-[12px] md:text-[16px] text-[#333333] whitespace-nowrap">
            {name}
          </span>
          <Image src={img} alt="rating-star" width={116} height={20} className="md:w-[116px] md:h-[20px] w-[80px] h-[10px] " />
        </div>
        <div className="flex justify-between items-center absolute  md:left-[500px] w-[200px] left-[110px]  md:w-[730px]">
          <span className="w-[49px] h-[24px] font-halvetica font-normal text-[12px] md:text-[16px] text-[#333333] relative md:top-[37px] md:left-0 left-3">
            ${price}
          </span>
          <div className="flex justify-center items-center md:gap-[20px] gap-[10px] w-[80px] md:w-[110px] h-[24px] md:h-[32px] border-[1px] rounded-[18px] border-[#e0e0e0] relative md:top-[37px] md:right-[60px]  ">
           
          <Image src="/Minus (1).svg" alt="minus icon" height={16} width={16} className="md:h-[16px] md:w-[16px] h-[10px] w-[10px]"/>
            <span className=" font-inter font-normal text-[12px] md:text-[16px] text-[#33333]">
              {quantity}
            </span>
            <Image src="/Plus (1).svg" alt="plus-icon" height={16} width={16}  className="md:h-[16px] md:w-[16px] h-[10px] w-[10px]"/> 

          </div>
          <span className="w-[65px] h-[24px] font-inter font-bold text-[12px] md:text-[16px] text-[#33333] relative md:top-[35px] md:left-0 left-5 ">
            ${total}
          </span>
          <Image src="/X.svg" alt="cross icon" height={16} width={16} className="md:h-[16px] md:w-[16px] h-[10px] w-[10px] relative md:top-[35px] md:left-0 left-5"/>
        </div>
      </div>
      <div className="relative md:left-0 left-[15px] w-[300px] md:w-[1318px] border-[1px] border-[#e0e0e0]"></div>
    </>
  );
};

export default ProductCart;
