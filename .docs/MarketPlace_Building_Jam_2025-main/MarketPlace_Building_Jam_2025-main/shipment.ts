export default {
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      {
        name: 'orderId',
        type: 'reference',
        to: [{ type: 'order' }],
        title: 'Order ID',
        description: 'Reference to the order associated with this shipment.',
        validation: Rule => Rule.required().error('Order ID is required'),
      },
      {
        name: 'trackingNumber',
        type: 'string',
        title: 'Tracking Number',
        description: 'Unique tracking number for the shipment.',
        validation: Rule => Rule.required().error('Tracking number is required'),
      },
      {
        name: 'carrier',
        type: 'string',
        title: 'Carrier',
        description: 'Shipping carrier (e.g., FedEx, DHL, UPS).',
        validation: Rule => Rule.required().error('Carrier is required'),
      },
      {
        name: 'status',
        type: 'string',
        title: 'Shipment Status',
        description: 'Current status of the shipment.',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'In Transit', value: 'in_transit' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
        validation: Rule => Rule.required().error('Shipment status is required'),
      },
      {
        name: 'shipmentDate',
        type: 'datetime',
        title: 'Shipment Date',
        description: 'Date when the shipment was dispatched.',
        validation: Rule => Rule.required().error('Shipment date is required'),
      },
      {
        name: 'deliveryDate',
        type: 'datetime',
        title: 'Estimated Delivery Date',
        description: 'Expected date of delivery.',
      },
      {
        name: 'deliveryAddress',
        type: 'object',
        title: 'Delivery Address',
        description: 'Address where the shipment will be delivered.',
        fields: [
          { name: 'street', type: 'string', title: 'Street' },
          { name: 'city', type: 'string', title: 'City' },
          { name: 'state', type: 'string', title: 'State' },
          { name: 'zipCode', type: 'string', title: 'ZIP Code' },
          { name: 'country', type: 'string', title: 'Country' },
        ],
      },
      {
        name: 'shipmentLogs',
        type: 'array',
        title: 'Shipment Logs',
        description: 'Log of shipment updates.',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'timestamp',
                type: 'datetime',
                title: 'Timestamp',
                description: 'Time of the update.',
              },
              {
                name: 'status',
                type: 'string',
                title: 'Status',
                description: 'Status at the time of the update.',
              },
              {
                name: 'location',
                type: 'string',
                title: 'Location',
                description: 'Location of the shipment during the update.',
              },
            ],
          },
        ],
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Record Created At',
        description: 'Timestamp when this shipment record was created.',
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
    ],
  };
  