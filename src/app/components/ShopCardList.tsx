import React from 'react';
import { shopCardData } from '../../../data/data';
import ShopCard from './ShopCard';
const ShopCardList = () => {
  return (
    <section>
    <div className="absolute left-[300px] top-[650px]  ">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]  ">
    {shopCardData.map((item) => (
    <ShopCard
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        discountPrice={item.disccountPrice || ''}
        sell={item.sell || ''}
        des={item.des}
        ratingImage={item.ratingImage}
        raingNum={item.ratingNum}
        reviews={item.reviews}
        text={item.text}
        bottomDetail={item.bottomDetail}
        bottomDetail2={item.bottomDetail2}
    />
))}
</div>
</div>
</section>
  );
};

export default ShopCardList;






// import React from 'react';
// import ShopCard from './ShopCard';
// import { shopCardData } from '../../../data/data';

// const ShopCardList = () => {
//   return (
//     <section>
//     <div className="absolute md:left-[300px] xsm:left-[200px] top-[650px]  ">
//     <div className="grid grid-cols-2 xsm:grid-cols-3  gap-[25px] ">
//   {shopCardData.map((item, index) => (
//     <ShopCard
//       key={index}
//       image={item.image}
//       title={item.title}
//       price={item.price}
//       discountPrice={item.disccountPrice || ''}
//       sell={item.sell || ''}
//     />
//   ))}
// </div>
// </div>
// </section>
//   );
// };

// export default ShopCardList;
