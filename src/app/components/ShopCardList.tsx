import React from 'react';
import ShopCard from './ShopCard';
import { shopCardData } from '../../../data/data';

const ShopCardList = () => {
  return (
    <section>
    <div className="absolute left-[300px] top-[650px]  ">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]  ">
  {shopCardData.map((item, index) => (
    <ShopCard
      key={index}
      image={item.image}
      title={item.title}
      price={item.price}
      discountPrice={item.disccountPrice || ''}
      sell={item.sell || ''}
    />
  ))}
</div>
</div>
</section>
  );
};

export default ShopCardList;
