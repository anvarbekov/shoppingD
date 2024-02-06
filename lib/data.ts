import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Muhammadnozim',
      email: 'admin@example.com',
      password: bcrypt.hashSync('reactjs01'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
    },
  ],
}

export default data
