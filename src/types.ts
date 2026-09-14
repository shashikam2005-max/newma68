export type ThemeMode = 'royal-violet' | 'obsidian-noir' | 'champagne-luxe' | 'atelier-light' | 'emerald-velvet' | 'sapphire-twilight';

export interface ThemeConfig {
  id: ThemeMode;
  name: string;
  category: 'dark' | 'light';
  primaryAccent: string;
  secondaryAccent: string;
  bgColor: string;
  cardBg: string;
  textColor: string;
  badge: string;
  swatchColors: string[];
}

export interface LookItem {
  id: string;
  name: string;
  brand: string;
  retailer: string;
  price: number;
  image: string;
  galleryImages?: string[];
  fabricNote?: string;
  category: 'top' | 'bottom' | 'outerwear' | 'footwear' | 'accessories' | 'jewelry';
  inStock: boolean;
  sizeAvailable: string[];
}

export interface LookbookLook {
  id: string;
  title: string;
  subtitle: string;
  vibe: string;
  matchScore: number;
  description: string;
  imageUrl: string;
  detailImages?: string[];
  tags: string[];
  occasion: string;
  colorPalette: string[];
  stylingTips: string[];
  items: LookItem[];
}

export interface RunwaySnapshot {
  id: string;
  title: string;
  designer: string;
  location: string;
  season: string;
  image: string;
  category: string;
  palette: string[];
  stylistNote: string;
}

export interface RetailerPartner {
  id: string;
  name: string;
  logo: string;
  image: string;
  category: string;
  integrationType: string;
  stockSyncSpeed: string;
  inventoryCount: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  outletOrAvatar: string;
  avatarUrl: string;
  isPress?: boolean;
}

export interface StylingQuizAnswer {
  genderFit?: string;
  aesthetic?: string;
  bodyProfile?: string;
  budgetTier?: string;
  occasionFocus?: string;
  favoriteColors?: string[];
}
