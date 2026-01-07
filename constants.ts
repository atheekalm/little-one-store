import { Product } from './types';

export const WHATSAPP_NUMBER = '94761291315'; // Replace with your store's WhatsApp number

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cozy Bear Romper',
    category: 'baby-boy',
    ageGroup: '0-1',
    type: 'romper',
    price: 24.99,
    image: 'https://picsum.photos/seed/boy1/600/800',
    description: 'Keep your little one warm and cuddly in this soft fleece bear romper. Perfect for chilly days.',
    features: ['100% Cotton Lining', 'Snap closure', 'Machine washable'],
    isNew: true
  },
  {
    id: '2',
    name: 'Floral Summer Dress',
    category: 'baby-girl',
    ageGroup: '1-2',
    type: 'dress',
    price: 29.99,
    originalPrice: 35.00,
    image: 'https://picsum.photos/seed/girl1/600/800',
    description: 'A breezy floral dress perfect for summer picnics and family gatherings.',
    features: ['Lightweight fabric', 'Back button closure', 'Includes matching bloomers']
  },
  {
    id: '3',
    name: 'Denim Overalls',
    category: 'baby-boy',
    ageGroup: '1-2',
    type: 'pants',
    price: 32.50,
    image: 'https://picsum.photos/seed/boy2/600/800',
    description: 'Classic denim overalls with adjustable straps for growing toddlers.',
    features: ['Durable denim', 'Adjustable straps', 'Functional pockets']
  },
  {
    id: '4',
    name: 'Pink Ballerina Tutu',
    category: 'baby-girl',
    ageGroup: '2-3',
    type: 'dress',
    price: 45.00,
    image: 'https://picsum.photos/seed/girl2/600/800',
    description: 'Every little girl needs a tutu! This pink sparkly number is perfect for dance class or dress up.',
    features: ['Multi-layer tulle', 'Elastic waistband', 'Satin bow detail'],
    isNew: true
  },
  {
    id: '5',
    name: 'Striped Cotton Tee',
    category: 'baby-boy',
    ageGroup: '2-3',
    type: 'shirt',
    price: 15.99,
    image: 'https://picsum.photos/seed/boy3/600/800',
    description: 'A staple for any wardrobe. Soft, breathable cotton with classic navy stripes.',
    features: ['100% Organic Cotton', 'Tagless label', 'Reinforced stitching']
  },
  {
    id: '6',
    name: 'Soft Knit Beanie',
    category: 'baby-girl',
    ageGroup: '0-1',
    type: 'accessory',
    price: 12.00,
    image: 'https://picsum.photos/seed/girl3/600/800',
    description: 'Keep that precious head warm with our ultra-soft knit beanie.',
    features: ['Hypoallergenic yarn', 'Stretchy fit', 'Pom-pom detail']
  },
  {
    id: '7',
    name: 'Dino Print Pajamas',
    category: 'baby-boy',
    ageGroup: '1-2',
    type: 'romper',
    price: 22.00,
    originalPrice: 28.00,
    image: 'https://picsum.photos/seed/boy4/600/800',
    description: 'Roar into bedtime with these fun dinosaur print pajamas.',
    features: ['Snug fit for safety', 'Soft cuffs', 'Easy zipper access']
  },
  {
    id: '8',
    name: 'First Steps Sneakers',
    category: 'baby-girl',
    ageGroup: '0-1',
    type: 'shoes',
    price: 28.99,
    image: 'https://picsum.photos/seed/girl4/600/800',
    description: 'Supportive and cute sneakers for those wobbly first steps.',
    features: ['Non-slip sole', 'Velcro straps', 'Cushioned insole']
  },
  {
    id: '9',
    name: 'Bow Tie & Suspenders Set',
    category: 'baby-boy',
    ageGroup: '0-1',
    type: 'accessory',
    price: 18.50,
    image: 'https://picsum.photos/seed/boy5/600/800',
    description: 'Get him ready for the special occasion with this dapper set.',
    features: ['Adjustable suspenders', 'Clip-on bow tie', 'Various colors']
  },
  {
    id: '10',
    name: 'Sunny Day Hat',
    category: 'baby-girl',
    ageGroup: '2-3',
    type: 'accessory',
    price: 14.99,
    image: 'https://picsum.photos/seed/girl5/600/800',
    description: 'Wide-brimmed hat to protect delicate skin from the sun.',
    features: ['UPF 50+ protection', 'Chin strap', 'Breathable material']
  }
];