import { MenuItem, Testimonial, GalleryItem, CafeInfo } from '../types';

export const CAFE_INFO: CafeInfo = {
  name: "BREW & BLOOM",
  tagline: "Good coffee. Slow mornings. Better moments.",
  address: "24 Park Street",
  area: "Fort, Colaba District",
  city: "Mumbai 400001",
  hours: "Mon–Sun: 8:00 AM – 10:00 PM",
  phone: "+919876543210",
  displayPhone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "hello@brewandbloom.in",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=24+Park+Street+Mumbai",
  foundedYear: 2022,
};

// 6 Featured items requested specifically by the user:
// 1. Cappuccino — ₹160
// 2. Cold Coffee — ₹190
// 3. Hazelnut Latte — ₹210
// 4. Classic Croissant — ₹140
// 5. Paneer Sandwich — ₹220
// 6. Chocolate Brownie — ₹150
export const FEATURED_ITEMS: MenuItem[] = [
  {
    id: "cappuccino",
    name: "Cappuccino",
    price: 160,
    description: "Double shot espresso balanced with velvety micro-foamed milk and a dusting of organic cocoa.",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    dietary: "veg",
    tags: ["Signature", "House Blend"]
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    price: 190,
    description: "16-hour slow steeped cold brew blended with creamy chilled milk and bourbon vanilla bean.",
    category: "cold",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    dietary: "veg",
    tags: ["Best Seller", "Refreshing"]
  },
  {
    id: "hazelnut-latte",
    name: "Hazelnut Latte",
    price: 210,
    description: "Rich espresso combined with house-roasted hazelnut infusion and silky steamed oat or dairy milk.",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    dietary: "veg",
    tags: ["Barista Pick"]
  },
  {
    id: "classic-croissant",
    name: "Classic Croissant",
    price: 140,
    description: "Pure French cultured butter laminated pastry with a crisp golden honeycomb crumb.",
    category: "bakery",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    isPopular: false,
    dietary: "veg",
    tags: ["Freshly Baked", "Pure Butter"]
  },
  {
    id: "paneer-sandwich",
    name: "Paneer Sandwich",
    price: 220,
    description: "Spiced artisanal malai paneer, char-grilled bell peppers and basil walnut pesto on toasted sourdough.",
    category: "savory",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    dietary: "veg",
    tags: ["Chef Special", "Artisanal Bread"]
  },
  {
    id: "chocolate-brownie",
    name: "Chocolate Brownie",
    price: 150,
    description: "Intense 70% single-origin dark chocolate fudge square with roasted walnuts and sea salt flake.",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    dietary: "veg",
    tags: ["Warm Serve", "Belgian Cocoa"]
  }
];

// Complete menu items for the interactive "Explore Full Menu" view
export const FULL_MENU: MenuItem[] = [
  ...FEATURED_ITEMS,
  {
    id: "espresso-tonic",
    name: "Espresso Tonic",
    price: 200,
    description: "Single-origin espresso poured over chilled botanical tonic water with a slice of candied orange.",
    category: "cold",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    dietary: "vegan",
    tags: ["Crisp"]
  },
  {
    id: "flat-white",
    name: "Flat White",
    price: 180,
    description: "Double ristretto layered with glossy microfoam for a punchy, velvety coffee experience.",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    tags: ["Specialty"]
  },
  {
    id: "pour-over",
    name: "V60 Pour Over",
    price: 220,
    description: "Hand-poured filter highlighting delicate floral and citrus notes from Chikmagalur estate beans.",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    dietary: "vegan",
    tags: ["Single Origin"]
  },
  {
    id: "avocado-toast",
    name: "Avocado Sourdough Toast",
    price: 260,
    description: "Creamy crushed Hass avocado, heirloom cherry tomatoes, toasted pumpkin seeds, and sumac drizzle.",
    category: "savory",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    dietary: "vegan",
    tags: ["Brunch Favorite"]
  },
  {
    id: "blueberry-cheesecake",
    name: "Blueberry Basque Cheesecake",
    price: 240,
    description: "Caramelized burnt crust with a molten creamy center, topped with slow-simmered wild blueberry compote.",
    category: "dessert",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    tags: ["Signature Sweet"]
  },
  {
    id: "cinnamon-swirl",
    name: "Cardamom Cinnamon Bun",
    price: 160,
    description: "Swedish-style brioche ribbon loaded with aromatic Ceylon cinnamon and crushed green cardamom.",
    category: "bakery",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    dietary: "veg",
    tags: ["Warm"]
  }
];

// 6 Gallery items as requested:
// coffee, café interior, pastries, people enjoying coffee, breakfast, exterior
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-coffee",
    title: "The Morning Pour",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
    alt: "Barista pouring latte art into ceramic cup",
    caption: "Micro-lot beans extracted at 9 bars of pressure for optimum aroma."
  },
  {
    id: "gal-interior",
    title: "Sunlit Corners",
    category: "interior",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    alt: "Warm wooden café interior with natural sunlight and plants",
    caption: "Designed with reclaimed teakwood, cozy banquettes, and warm reading corners."
  },
  {
    id: "gal-pastries",
    title: "Fresh from the Oven",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    alt: "Golden croissants and fresh pastries on bakery counter",
    caption: "Baked every day at dawn with slow fermentation."
  },
  {
    id: "gal-moments",
    title: "Slow Conversations",
    category: "moments",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=80",
    alt: "Friends sharing warm coffee and laughter in cozy corner",
    caption: "A space thoughtfully crafted for slow conversation and quiet contemplation."
  },
  {
    id: "gal-breakfast",
    title: "Breakfast Rituals",
    category: "breakfast",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80",
    alt: "Fresh breakfast spread with sourdough, eggs and pour over",
    caption: "Nourishing morning plates prepared with farm-fresh produce."
  },
  {
    id: "gal-exterior",
    title: "Neighborhood Haven",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80",
    alt: "Brew and Bloom cafe storefront with plants and warm terrace lights",
    caption: "Located on quiet 24 Park Street — your sanctuary in the city."
  }
];

// 3 Realistic Customer Reviews as requested:
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    name: "Ananya",
    role: "Architect & Regular",
    quote: "Beautiful little café with amazing coffee. The atmosphere is perfect for a quiet morning.",
    rating: 5,
    favoriteItem: "Hazelnut Latte"
  },
  {
    id: "review-2",
    name: "Rohan",
    role: "Creative Director",
    quote: "Great food, friendly staff and probably one of my favorite coffee spots in the city.",
    rating: 5,
    favoriteItem: "Paneer Sandwich & Cold Brew"
  },
  {
    id: "review-3",
    name: "Priya",
    role: "Freelance Writer",
    quote: "Perfect place to meet friends or get some work done. Definitely coming back!",
    rating: 5,
    favoriteItem: "Cappuccino & Brownie"
  }
];

// Why Choose Us cards (4 items as specified)
export const WHY_CHOOSE_US = [
  {
    id: "fresh-brewed",
    icon: "Coffee",
    title: "Freshly Brewed",
    description: "Every cup prepared fresh to order."
  },
  {
    id: "fresh-made",
    icon: "Croissant",
    title: "Freshly Made",
    description: "Simple ingredients, honest flavors."
  },
  {
    id: "cozy-atmosphere",
    icon: "Sparkles",
    title: "Cozy Atmosphere",
    description: "A comfortable place to relax, work or catch up."
  },
  {
    id: "made-with-care",
    icon: "Heart",
    title: "Made With Care",
    description: "Every detail matters, from our kitchen to your table."
  }
];
