export default {
    name: 'salesRecord',
    type: 'document',
    title: 'Sales Record',
    fields: [
      {
        name: 'saleId',
        type: 'string',
        title: 'Sale ID',
        description: 'A unique identifier for the sale.',
        validation: Rule => Rule.required().error('Sale ID is required'),
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Sale Date',
        description: 'The date and time of the sale.',
        validation: Rule => Rule.required().error('Sale date is required'),
      },
      {
        name: 'customer',
        type: 'reference',
        title: 'Customer',
        description: 'The customer who made the purchase.',
        to: [{ type: 'user' }],
        validation: Rule => Rule.required().error('Customer reference is required'),
      },
      {
        name: 'products',
        type: 'array',
        title: 'Products Sold',
        description: 'List of products sold in this sale.',
        of: [
          {
            type: 'object',
            fields: [
              { 
                name: 'productId', 
                type: 'reference', 
                title: 'Product', 
                to: [{ type: 'product' }],
                validation: Rule => Rule.required().error('Product reference is required'),
              },
              { 
                name: 'quantity', 
                type: 'number', 
                title: 'Quantity Sold',
                validation: Rule => Rule.min(1).error('Quantity must be at least 1'),
              },
              { 
                name: 'price', 
                type: 'number', 
                title: 'Price per Unit',
                validation: Rule => Rule.min(0).error('Price must be a positive number'),
              },
            ],
          },
        ],
      },
      {
        name: 'totalAmount',
        type: 'number',
        title: 'Total Amount',
        description: 'The total amount for this sale.',
        validation: Rule => Rule.min(0).error('Total amount must be a positive number'),
      },
      {
        name: 'paymentStatus',
        type: 'string',
        title: 'Payment Status',
        description: 'The status of the payment for this sale.',
        options: {
          list: [
            { title: 'Paid', value: 'paid' },
            { title: 'Pending', value: 'pending' },
            { title: 'Failed', value: 'failed' },
          ],
        },
        validation: Rule => Rule.required().error('Payment status is required'),
      },
      {
        name: 'paymentMethod',
        type: 'string',
        title: 'Payment Method',
        description: 'The method used for payment.',
        options: {
          list: [
            { title: 'Credit Card', value: 'creditCard' },
            { title: 'Debit Card', value: 'debitCard' },
            { title: 'Cash', value: 'cash' },
            { title: 'Online Payment', value: 'online' },
          ],
        },
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Record Created At',
        description: 'The date and time when this record was created.',
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
  };
  