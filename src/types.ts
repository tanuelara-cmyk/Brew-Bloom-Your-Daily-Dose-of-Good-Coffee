export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'coffee' | 'cold' | 'bakery' | 'savory' | 'dessert';
  image: string;
  isPopular?: boolean;
  dietary?: 'veg' | 'non-veg' | 'vegan';
  tags?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  quote: string;
  rating: number;
  favoriteItem?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'coffee' | 'interior' | 'pastries' | 'moments' | 'breakfast' | 'exterior';
  image: string;
  alt: string;
  caption: string;
}

export interface CafeInfo {
  name: string;
  tagline: string;
  address: string;
  area: string;
  city: string;
  hours: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  googleMapsUrl: string;
  foundedYear: number;
}
