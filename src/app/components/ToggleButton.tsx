import React from "react";
import { ToggleButtonProps } from "../../../types/type";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";



const ToggleButton = ({ onClick, isOpen }: ToggleButtonProps) => {
  return (
    <button onClick={onClick} className="text-white z-10  ">
      {isOpen ? (  <BiMenuAltRight  className=" text-2xl cursor-pointer "/>
):(
  <MdOutlineClose  className=" text-2xl  cursor-pointer"/>

)}
      
    </button>
  );
};
export default ToggleButton;
