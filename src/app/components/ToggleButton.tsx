import React from "react";
import { ToggleButtonProps } from "../../../types/type";



const ToggleButton = ({ onClick, isOpen }: ToggleButtonProps) => {
  return (
    <button onClick={onClick} className="text-white z-10  ">
      {isOpen ? (  <i className="bx bx-x text-2xl cursor-pointer "></i> 
):(
  <i className="bx bx-menu-alt-right text-2xl  cursor-pointer"></i>

)}
      
    </button>
  );
};
export default ToggleButton;
