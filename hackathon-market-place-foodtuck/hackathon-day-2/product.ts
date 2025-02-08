export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock Quantity',
      },
      {
        name: 'category',
        type: 'reference',
        title: 'Category',
        to: [{ type: 'category' }],
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true, 
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alt Text',
            description: 'Important for accessibility and SEO.',
          },
        ],
      },
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        of: [{ type: 'string' }],
        description: 'Keywords to help identify and categorize the product.',
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At',
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
  };
  