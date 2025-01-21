export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'fullName',
        type: 'string',
        title: 'Full Name',
        description: 'The full name of the user.',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email Address',
        description: 'The email address of the user.',
        validation: Rule =>
          Rule.required()
            .email()
            .error('A valid email address is required'),
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
        description: 'The password for the user account.',
        hidden: true, 
        validation: Rule => Rule.required().error('Password is required'),
      },
      {
        name: 'phoneNumber',
        type: 'string',
        title: 'Phone Number',
        description: 'The contact number of the user.',
        validation: Rule => Rule.min(10).max(15).error('Invalid phone number'),
      },
      {
        name: 'address',
        type: 'object',
        title: 'Address',
        description: 'The address of the user.',
        fields: [
          { name: 'street', type: 'string', title: 'Street' },
          { name: 'city', type: 'string', title: 'City' },
          { name: 'state', type: 'string', title: 'State' },
          { name: 'zipCode', type: 'string', title: 'ZIP Code' },
          { name: 'country', type: 'string', title: 'Country' },
        ],
      },
      {
        name: 'role',
        type: 'string',
        title: 'Role',
        description: 'The role of the user in the system.',
        options: {
          list: [
            { title: 'Customer', value: 'customer' },
            { title: 'Admin', value: 'admin' },
          ],
        },
        validation: Rule => Rule.required().error('Role is required'),
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Account Created At',
        description: 'The date and time when the user account was created.',
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
      {
        name: 'orders',
        type: 'array',
        title: 'Orders',
        description: 'List of orders placed by the user.',
        of: [
          {
            type: 'reference',
            to: [{ type: 'order' }],
          },
        ],
      },
      {
        name: 'isActive',
        type: 'boolean',
        title: 'Is Active',
        description: 'Indicates whether the user account is active.',
        initialValue: true,
      },
    ],
  };
  