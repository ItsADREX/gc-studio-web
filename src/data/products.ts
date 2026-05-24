import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "slouch-beanie",
    name: "Slouch Beanie",
    description:
      "A warm, stylish two-tone striped slouch beanie handcrafted with premium yarn. The perfect cozy companion for chilly days — soft, stretchy, and effortlessly chic.",
    price: 8500,
    category: "Headwear",
    images: ["/images/products/beanie.jpg"],
    featured: true,
    inStock: true,
    tags: ["headwear", "beanie", "winter"],
  },
  {
    id: "granny-square-corset",
    name: "Granny Square Corset Top",
    description:
      "A stunning black and white granny square crochet corset top — a statement piece that blends vintage charm with modern elegance. Handcrafted with love, made to turn heads.",
    price: 15000,
    category: "Tops",
    images: ["/images/products/corset.jpg"],
    featured: true,
    inStock: true,
    tags: ["tops", "corset", "fashion", "statement"],
  },
  {
    id: "crochet-shorts",
    name: "Crochet Beach Shorts",
    description:
      "Handmade crochet shorts featuring a beautiful cream and orange striped pattern with a delicate ruffle waistband. Stylish, comfortable, and uniquely yours.",
    price: 12000,
    category: "Bottoms",
    images: [
      "/images/products/shorts-1.jpg",
      "/images/products/shorts-2.jpg",
      "/images/products/shorts-3.jpg",
    ],
    featured: true,
    inStock: true,
    tags: ["bottoms", "shorts", "beach", "summer"],
  },
  {
    id: "flower-earrings",
    name: "Flower Drop Earrings",
    description:
      "Beautiful handcrafted crochet flower drop earrings in rich chocolate brown and white. A unique boho-chic accessory that adds a touch of handmade elegance to any outfit.",
    price: 4500,
    category: "Accessories",
    images: [
      "/images/products/earrings-1.jpg",
      "/images/products/earrings-2.jpg",
    ],
    featured: true,
    inStock: true,
    tags: ["accessories", "earrings", "jewelry", "boho"],
  },
  {
    id: "scrunchie-set",
    name: "Crochet Scrunchie Set",
    description:
      "A charming set of handmade crochet scrunchies in complementary colors. Gentle on hair and gorgeous in style — the perfect everyday accessory or thoughtful gift.",
    price: 2500,
    category: "Accessories",
    images: [
      "/images/products/scrunchie-1.jpg",
      "/images/products/scrunchie-2.jpg",
      "/images/products/scrunchie-3.jpg",
    ],
    featured: false,
    inStock: true,
    tags: ["accessories", "hair", "scrunchie", "gift"],
  },
  {
    id: "baby-cap",
    name: "Baby Crochet Cap",
    description:
      "A soft, adorable handmade crochet cap for precious little ones. Crafted from gentle yarn, it's snug, breathable, and makes a wonderful keepsake gift.",
    price: 5000,
    category: "Baby",
    images: [
      "/images/products/baby-cap-1.jpg",
      "/images/products/baby-cap-2.jpg",
    ],
    featured: false,
    inStock: true,
    tags: ["baby", "cap", "gift", "newborn"],
  },
  {
    id: "fingerless-gloves",
    name: "Fingerless Gloves",
    description:
      "Stylish handmade crochet fingerless gloves that keep your hands warm while keeping your fingers free. Warm, elegant, and perfect for cooler days or autumn styling.",
    price: 7000,
    category: "Accessories",
    images: ["/images/products/gloves.jpg"],
    featured: false,
    inStock: true,
    tags: ["accessories", "gloves", "winter", "autumn"],
  },
  {
    id: "head-warmer",
    name: "Crochet Head Warmer",
    description:
      "A chic handmade crochet head warmer and ear band that keeps you cozy in style. Soft, stretchy, and available to be custom-made in your favourite colours.",
    price: 6500,
    category: "Headwear",
    images: [
      "/images/products/headwarmer-1.jpg",
      "/images/products/headwarmer-2.jpg",
      "/images/products/headwarmer-3.jpg",
      "/images/products/headwarmer-4.jpg",
    ],
    featured: true,
    inStock: true,
    tags: ["headwear", "headband", "winter", "earwarmer"],
  },
];

export const categories = [
  "All",
  "Tops",
  "Bottoms",
  "Headwear",
  "Accessories",
  "Baby",
];

export const featuredProducts = products.filter((p) => p.featured);
