const foodSchema = {
    name: 'food',
    type: 'document',
    title: 'Food',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'title',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        description:
          'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Current Price',
      },
      {
        name: 'originalPrice',
        type: 'number',
        title: 'Original Price',
        description: 'Price before discount (if any)',
      },
      {
        name: 'tags',
        type: 'string',
        title: 'Tags',
        options: {
          list: [
            { title: 'In Stock', value: 'In Stock' },
            { title: 'Out of Stock', value: 'Out Of Stock' },
          ],
          layout: 'radio', 
        },
        description: 'Select whether the item is in stock or out of stock',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Food Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short description of the food item',
      },
      {
        name: 'available',
        type: 'boolean',
        title: 'Available',
        description: 'Availability status of the food item',
      },
      {
        name: 'discountPrice',
        type: 'number',
        title: 'Discount Price',
        description: 'Discounted price of the food item (if applicable)',
      },
      {
        name: 'sell',
        type: 'string',
        title: 'Sell',
        description: 'Selling status or label (e.g., Best Seller)',
      },
      {
        name: 'ratingImage',
        type: 'image',
        title: 'Rating Image',
        description: 'Image representing the rating (e.g., stars)',
      },
      {
        name: 'ratingNum',
        type: 'number',
        title: 'Rating Number',
        description: 'Numeric rating of the food item',
      },
      {
        name: 'reviews',
        type: 'number',
        title: 'Reviews',
        description: 'Number of reviews for the food item',
      },
      {
        name: 'text',
        type: 'string',
        title: 'Text',
        description: 'Additional text or label for the food item',
      },
      {
        name: 'bottomDetail',
        type: 'string',
        title: 'Bottom Detail',
        description: 'Extra detail displayed at the bottom',
      },
      {
        name: 'bottomDetail2',
        type: 'string',
        title: 'Bottom Detail 2',
        description: 'Additional bottom detail for the food item',
      },
    ],
  };
  
  export default foodSchema;