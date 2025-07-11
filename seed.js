const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./db/connection');
const Product = require('./models/product');

dotenv.config();

const products = [
  {
    name: "NextCart Circles T-Shirt",
    price: 20.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1920&q=75",
    description: "A classic tee with a bold, minimalist design. Made from 100% premium cotton for ultimate comfort and breathability.",
  },
  {
    name: "NextCart Drawstring Bag",
    price: 12.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-dark.png%3Fv%3D1689796304&w=640&q=75",
    description: "A versatile and lightweight drawstring bag, perfect for the gym, a day trip, or carrying your everyday essentials.",
  },
  {
    name: "Acme Cup",
    price: 15.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=640&q=75",
    description: "Start your day right with the Acme Cup. Sleek, durable, and designed for the perfect sip of your favorite beverage.",
  },
  {
    name: "NextCart Slip-On Shoes",
    price: 45.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fshoes-1.png%3Fv%3D1690004109&w=640&q=75",
    description: "Effortless style and comfort combined. These slip-on shoes are perfect for a casual day out, offering a snug fit and a timeless look."
  },
  {
    name: "NextCart Circles T-Shirt",
    price: 20.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1920&q=75",
    description: "A classic tee with a bold, minimalist design. Made from 100% premium cotton for ultimate comfort and breathability."
  },
  {
    name: "Acme Drawstring Bag",
    price: 12.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbag-1-light.png%3Fv%3D1689796304&w=1920&q=75",
    description: "A versatile and lightweight drawstring bag, perfect for the gym, a day trip, or carrying your everyday essentials."
  },
  {
    name: "NextCart Keyboard",
    price: 150.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fkeyboard.png%3Fv%3D1690003507&w=640&q=75",
    description: "Experience typing like never before. This mechanical keyboard combines tactile feedback with a sleek design for the modern professional."
  },
  {
    name: "NextCart Prism T-Shirt",
    price: 25.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-spiral-1.png%3Fv%3D1690003571&w=640&q=75",
    description: "Stand out with the Prism T-Shirt. Its vibrant, geometric design is a true conversation starter, printed on our signature soft cotton."
  },
  {
    name: "NextCart T-Shirt",
    price: 20.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-color-black.png%3Fv%3D1690003675&w=640&q=75",
    description: "The essential NextCart T-Shirt. A comfortable, durable, and stylish staple for any wardrobe."
  },
  {
    name: "NextCart Sticker",
    price: 4.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fsticker.png%3Fv%3D1690003619&w=640&q=75",
    description: "Personalize your gear with the NextCart Sticker. Made from durable, weather-resistant vinyl, it's perfect for laptops, water bottles, and more."
  },
  {
    name: "NextCart Rainbow Sticker",
    price: 4.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fsticker-rainbow.png%3Fv%3D1690003602&w=640&q=75",
    description: "Add a splash of color to your life with the NextCart Rainbow Sticker. A vibrant design on high-quality, long-lasting material."
  },
  {
    name: "NextCart Pacifier",
    price: 10.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fpacifier-1.png%3Fv%3D1690003544&w=640&q=75",
    description: "Soothe your little one with the NextCart Pacifier. Designed for comfort and safety, it's a must-have for new parents."
  },
  {
    name: "Acme Mug",
    price: 15.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fmug-1.png%3Fv%3D1690003527&w=640&q=75",
    description: "The perfect companion for your morning coffee or evening tea. The Acme Mug is sturdy, stylish, and built to last."
  },
  {
    name: "Acme Hoodie",
    price: 50.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=640&q=75",
    description: "Stay warm and cozy with the Acme Hoodie. Made from a soft cotton blend, it's perfect for chilly days and relaxed evenings."
  },
  {
    name: "NextCart Cap",
    price: 20.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhat-1.png%3Fv%3D1690002833&w=640&q=75",
    description: "Top off your look with the NextCart Cap. A classic design with an adjustable fit for all-day comfort."
  },
  {
    name: "NextCart Dog Sweater",
    price: 20.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fdog-sweater-1.png%3Fv%3D1690003132&w=640&q=75",
    description: "Keep your furry friend warm and stylish with the NextCart Dog Sweater. Made from soft, comfortable fabric, it's a winter essential for your pet."
  },
  {
    name: "Acme Cup",
    price: 15.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcup-black.png%3Fv%3D1690003088&w=640&q=75",
    description: "Start your day right with the Acme Cup. Sleek, durable, and designed for the perfect sip of your favorite beverage."
  },
  {
    name: "NextCart Cowboy Hat",
    price: 160.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fcowboy-hat-black-1.png%3Fv%3D1690208765&w=640&q=75",
    description: "Embrace your inner cowboy with this classic hat. Made from premium materials, it offers both style and protection from the sun."
  },
  {
    name: "NextCart Bomber Jacket",
    price: 50.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbomber-jacket-army.png%3Fv%3D1690002722&w=640&q=75",
    description: "A modern take on a classic silhouette. The NextCart Bomber Jacket is versatile, stylish, and perfect for any season."
  },
  {
    name: "NextCart Baby Onesie",
    price: 10.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-onesie-beige-1.png%3Fv%3D1690002632&w=640&q=75",
    description: "Dress your little one in comfort and style with the NextCart Baby Onesie. Made from the softest cotton for delicate skin."
  },
  {
    name: "NextCart Baby Cap",
    price: 10.00,
    image: "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fbaby-cap-black.png%3Fv%3D1690002570&w=640&q=75",
    description: "Keep your baby's head warm and protected with the NextCart Baby Cap. Cute, comfortable, and made from soft, breathable fabric."
  }
];

const seedDB = async () => {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Database seeded!');
    mongoose.connection.close();
};

seedDB().catch(err => {
    console.error(err);
    mongoose.connection.close();
}); 