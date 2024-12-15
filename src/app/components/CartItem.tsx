import React from "react";
import { cartData } from "../../../data/data";
import ProductCart from "./ProductCart";

const CartItem = () => {
  return (
    <div className="w-[1320px] h-[115.15px]  flex flex-col justify-center gap-[20px]">
      {cartData.map((item, index) => (
        <ProductCart
          key={index}
          image={item.image}
          name={item.name}
          img={item.img}
          price={item.price}
          quantity={item.quantity}
          total={item.total}
        />
      ))}
    </div>
  );
};

export default CartItem;
