export type Category = 'baby-boy' | 'baby-girl';
export type AgeGroup = '0-1' | '1-2' | '2-3';
export type ProductType = 'romper' | 'dress' | 'shirt' | 'pants' | 'accessory' | 'onesie' | 'shoes';

export interface Product {
  id: string;
  name: string;
  category: Category;
  ageGroup: AgeGroup;
  type: ProductType;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
}

export interface FilterState {
  category: Category | 'all';
  ageGroup: AgeGroup[];
  type: ProductType[];
  minPrice: number;
  maxPrice: number;
}
