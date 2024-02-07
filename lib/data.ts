import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('admin'),
      isAdmin: true,
    },
    {
      name: 'Example User',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'iPhone 14 PRO MAX',
      slug: '14promax',
      category: 'Phones',
      image: '/images/14promax.png',
      price: 900,
      brand: 'Apple',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'iPhone 14 Pro Max eng yaxshi va sifatli smartfonlardan biri',
    },
  ],
}

export default data
