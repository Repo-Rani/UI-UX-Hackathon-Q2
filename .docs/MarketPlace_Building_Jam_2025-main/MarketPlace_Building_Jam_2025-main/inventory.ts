export default {
    name: 'inventory',
    type: 'document',
    title: 'Inventory',
    fields: [
      {
        name: 'product',
        type: 'reference',
        to: [{ type: 'product' }],
        title: 'Product',
        description: 'Reference to the product in the inventory.',
        validation: Rule => Rule.required().error('Product reference is required'),
      },
      {
        name: 'quantity',
        type: 'number',
        title: 'Quantity in Stock',
        description: 'Current stock quantity of the product.',
        validation: Rule => Rule.min(0).error('Quantity must be a positive number'),
      },
      {
        name: 'lowStockAlert',
        type: 'number',
        title: 'Low Stock Alert Threshold',
        description: 'Alert threshold for low stock.',
        validation: Rule => Rule.min(0).error('Low stock threshold must be a positive number'),
      },
      {
        name: 'supplier',
        type: 'string',
        title: 'Supplier Name',
        description: 'Name of the supplier for this product.',
      },
      {
        name: 'lastRestocked',
        type: 'datetime',
        title: 'Last Restocked Date',
        description: 'Date when the product was last restocked.',
      },
      {
        name: 'restockHistory',
        type: 'array',
        title: 'Restock History',
        description: 'History of restocking events for this product.',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'restockedAt',
                type: 'datetime',
                title: 'Restocked At',
                description: 'Date and time of restocking.',
              },
              {
                name: 'quantityAdded',
                type: 'number',
                title: 'Quantity Added',
                description: 'Quantity added during restocking.',
                validation: Rule => Rule.min(1).error('Restocked quantity must be at least 1'),
              },
            ],
          },
        ],
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Record Created At',
        description: 'Timestamp when this inventory record was created.',
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
  };
  