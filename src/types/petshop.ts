export interface Product {
  id: string;
  name: string;
  englishName?: string;
  category: 'food' | 'treats' | 'supplements' | 'supplies' | 'hygiene' | 'apparel' | 'toys';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  discountRate?: number;
  image: string;
  description: string;
  tags?: string[];
  rating: number;
  reviewCount: number;
  isPopular?: boolean;
  isNewMemberDeal?: boolean;
  isSpecialOffer?: boolean;
  specialBadge?: string;
  weightOrQuantity?: string;
  features?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
}

export interface Review {
  id: string;
  productId: string;
  productName: string;
  author: string;
  dogName: string;
  dogBreed: string;
  rating: number;
  comment: string;
  date: string;
  pointsEarned: number;
  helpfulCount: number;
}

export interface PointHistoryItem {
  id: string;
  type: 'earn' | 'use';
  description: string;
  amount: number;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  tag?: string;
  image: string;
  readTime: string;
}
