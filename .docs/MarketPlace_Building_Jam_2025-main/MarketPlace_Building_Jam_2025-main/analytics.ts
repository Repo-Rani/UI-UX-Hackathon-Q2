export default {
    name: 'analytics',
    type: 'document',
    title: 'Analytics',
    fields: [
      {
        name: 'month',
        type: 'string',
        title: 'Month',
        description: 'Month for which the analytics report is generated.',
      },
      {
        name: 'totalSales',
        type: 'number',
        title: 'Total Items Sold',
        description: 'Total number of items sold in this month.',
      },
      {
        name: 'totalRevenue',
        type: 'number',
        title: 'Total Revenue',
        description: 'Total revenue generated in this month.',
      },
      {
        name: 'totalProfit',
        type: 'number',
        title: 'Total Profit',
        description: 'Total profit earned in this month.',
      },
      {
        name: 'productsSold',
        type: 'array',
        title: 'Products Sold',
        description: 'Details of products sold in this month.',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'productId',
                type: 'reference',
                to: [{ type: 'product' }],
                title: 'Product',
                description: 'Reference to the product sold.',
              },
              {
                name: 'quantity',
                type: 'number',
                title: 'Quantity Sold',
              },
            ],
          },
        ],
      },
      {
        name: 'remainingStock',
        type: 'array',
        title: 'Remaining Stock',
        description: 'Stock details of products after sales.',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'productId',
                type: 'reference',
                to: [{ type: 'product' }],
                title: 'Product',
                description: 'Reference to the product.',
              },
              {
                name: 'stock',
                type: 'number',
                title: 'Remaining Stock',
              },
            ],
          },
        ],
      },
      {
        name: 'expenses',
        type: 'object',
        title: 'Expenses',
        description: 'Details of expenses incurred in this month.',
        fields: [
          {
            name: 'marketing',
            type: 'number',
            title: 'Marketing Expense',
          },
          {
            name: 'restocking',
            type: 'number',
            title: 'Restocking Expense',
          },
        ],
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Report Created At',
        description: 'Timestamp when this report was created.',
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
  };
  