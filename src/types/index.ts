export interface Product {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  weight: string; // e.g. "100g", "250g", "300g"
  availableWeights?: { weight: string; price: number }[];
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  isTraditional?: boolean;
  shortDescription: string;
  description: string;
  ingredients: string[];
  features: string[]; // e.g. "Roasted, not fried", "Zero trans fat", "Pure Desi Ghee"
  storageInstructions: string;
  images: string[];
  tags: string[];
}

export type ProductCategory =
  | "Makhana"
  | "Thekua"
  | "Traditional Cookies"
  | "Namak Para"
  | "Traditional Indian Snacks";

export interface CategoryItem {
  id: string;
  name: ProductCategory;
  slug: string;
  hindiName: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight: string;
  unitPrice: number;
}
