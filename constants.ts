import { Product, Category, AgeGroup, ProductType } from './types';

// Domain Configuration
export const SITE_URL = 'https://littleonestore.lk'; 

// Configurable WhatsApp Number (Country code + Number, no spaces/symbols)
export const WHATSAPP_NUMBER = '94771669699';

export const CATEGORIES: { label: string; value: Category }[] = [
  { label: 'Baby Boy', value: 'baby-boy' },
  { label: 'Baby Girl', value: 'baby-girl' },
];

export const AGE_GROUPS: { label: string; value: AgeGroup }[] = [
  { label: '0-1 Years', value: '0-1' },
  { label: '1-2 Years', value: '1-2' },
  { label: '2-3 Years', value: '2-3' },
];

export const PRODUCT_TYPES: { label: string; value: ProductType }[] = [
  { label: 'Rompers', value: 'romper' },
  { label: 'Dresses', value: 'dress' },
  { label: 'Shirts', value: 'shirt' },
  { label: 'Pants', value: 'pants' },
  { label: 'Onesies', value: 'onesie' },
  { label: 'Shoes', value: 'shoes' },
  { label: 'Accessories', value: 'accessory' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Blue Bear Romper',
    category: 'baby-boy',
    ageGroup: '0-1',
    type: 'romper',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&q=80&w=400',
    description: 'Soft cotton romper with cute bear ears hood.',
    isNew: true,
  },
  {
    id: 'p2',
    name: 'Floral Summer Dress',
    category: 'baby-girl',
    ageGroup: '1-2',
    type: 'dress',
    price: 22.50,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=400',
    description: 'Lightweight floral dress perfect for hot weather.',
    isNew: true,
  },
  {
    id: 'p3',
    name: 'Dino Print Shirt',
    category: 'baby-boy',
    ageGroup: '2-3',
    type: 'shirt',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=400',
    description: 'Fun dinosaur print shirt made from breathable cotton.',
  },
  {
    id: 'p4',
    name: 'Pink Frill Onesie',
    category: 'baby-girl',
    ageGroup: '0-1',
    type: 'onesie',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&q=80&w=400',
    description: 'Adorable pink onesie with frill details.',
  },
  {
    id: 'p5',
    name: 'Denim Overalls',
    category: 'baby-boy',
    ageGroup: '1-2',
    type: 'pants',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1519238809107-7e7895d2dd86?auto=format&fit=crop&q=80&w=400',
    description: 'Sturdy denim overalls for active toddlers.',
  },
  {
    id: 'p6',
    name: 'White Lace Dress',
    category: 'baby-girl',
    ageGroup: '2-3',
    type: 'dress',
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400',
    description: 'Elegant white lace dress for special occasions.',
    isNew: true,
  },
  {
    id: 'p7',
    name: 'Cozy Knit Cardigan',
    category: 'baby-girl',
    ageGroup: '1-2',
    type: 'shirt',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1621452773781-0f992fd03d90?auto=format&fit=crop&q=80&w=400',
    description: 'Warm knit cardigan for cooler evenings.',
  },
  {
    id: 'p8',
    name: 'Smart Bowtie Set',
    category: 'baby-boy',
    ageGroup: '0-1',
    type: 'onesie',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1514326640560-7d8dba26856f?auto=format&fit=crop&q=80&w=400',
    description: 'Formal onesie with attached bowtie.',
  },
  {
    id: 'p9',
    name: 'Leather Baby Shoes',
    category: 'baby-boy',
    ageGroup: '0-1',
    type: 'shoes',
    price: 25.00,
    image: 'https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?auto=format&fit=crop&q=80&w=400',
    description: 'Soft sole leather shoes for first steps.',
    isNew: true,
  },
  {
    id: 'p10',
    name: 'Polka Dot Leggings',
    category: 'baby-girl',
    ageGroup: '1-2',
    type: 'pants',
    price: 10.00,
    image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=400',
    description: 'Stretchy leggings with fun polka dots.',
  }
];