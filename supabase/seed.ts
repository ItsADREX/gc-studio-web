import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const products = [
  {
    id: "slouch-beanie",
    name: "Slouch Beanie",
    description:
      "A warm, stylish two-tone striped slouch beanie handcrafted with premium yarn. The perfect cozy companion for chilly days — soft, stretchy, and effortlessly chic.",
    price: 8500,
    category: "Headwear",
    images: ["/images/products/beanie.jpg"],
    featured: true,
    in_stock: true,
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
    in_stock: true,
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
    in_stock: true,
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
    in_stock: true,
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
    in_stock: true,
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
    in_stock: true,
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
    in_stock: true,
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
    in_stock: true,
    tags: ["headwear", "headband", "winter", "earwarmer"],
  },
  {
    id: "crochet-mini-dress",
    name: "Striped Crochet Mini Dress",
    description:
      "A show-stopping handmade crochet mini dress in vibrant sunset stripes — pink, orange, red, and yellow. Features a sweetheart neckline, spaghetti straps, and a chic ruffle hem. A bold statement piece made just for you.",
    price: 0,
    category: "Dresses",
    images: ["/images/products/dress-1.jpg"],
    featured: true,
    in_stock: true,
    tags: ["dresses", "mini", "summer", "statement", "colourful"],
  },
  {
    id: "granny-square-crop-sweater",
    name: "Granny Square Crop Sweater",
    description:
      "A dreamy oversized crop sweater made from classic granny squares in soft shades of pink and fuchsia. Cozy, stylish, and handcrafted — perfect for layering over your favourite outfits.",
    price: 0,
    category: "Tops",
    images: [
      "/images/products/crop-sweater-1.jpg",
      "/images/products/crop-sweater-2.jpg",
      "/images/products/crop-sweater-3.jpg",
    ],
    featured: true,
    in_stock: true,
    tags: ["tops", "sweater", "granny-square", "cozy", "pink"],
  },
  {
    id: "crochet-crop-top",
    name: "Crochet Crop Top",
    description:
      "A delicate handmade crochet crop top perfect for warm days and layered looks. Light, breathable, and crafted with beautiful stitch detailing — made to be worn and admired.",
    price: 0,
    category: "Tops",
    images: ["/images/products/crop-top-1.jpg"],
    featured: false,
    in_stock: true,
    tags: ["tops", "crop", "summer", "light"],
  },
  {
    id: "granny-square-mini-jacket",
    name: "Granny Square Mini Jacket",
    description:
      "A charming handmade crochet mini jacket crafted from granny squares in cream and bold red. A unique boho-chic layering piece that elevates any outfit with handmade elegance.",
    price: 0,
    category: "Tops",
    images: ["/images/products/mini-jacket-1.jpg"],
    featured: false,
    in_stock: true,
    tags: ["tops", "jacket", "granny-square", "boho", "layering"],
  },
  {
    id: "crochet-maxi-skirt",
    name: "Crochet Mesh Maxi Skirt",
    description:
      "A stunning hot pink handmade crochet maxi skirt with an open mesh lower half and a solid waistband with tie detail. Bold, feminine, and made entirely by hand — a true statement piece.",
    price: 0,
    category: "Bottoms",
    images: ["/images/products/skirt-1.jpg"],
    featured: true,
    in_stock: true,
    tags: ["bottoms", "skirt", "maxi", "pink", "mesh", "statement"],
  },
  {
    id: "bikini-shorts",
    name: "Crochet Bikini Shorts",
    description:
      "Handmade crochet shorts in a cream and orange stripe with a dark ruffle waistband and tie detail. Playful, stylish, and perfect for the beach or as a summer fashion statement.",
    price: 0,
    category: "Bottoms",
    images: [
      "/images/products/bikini-shorts-1.jpg",
      "/images/products/bikini-shorts-2.jpg",
      "/images/products/bikini-shorts-3.jpg",
    ],
    featured: false,
    in_stock: true,
    tags: ["bottoms", "shorts", "bikini", "beach", "summer"],
  },
  {
    id: "crochet-bucket-hat",
    name: "Checkered Bucket Hat",
    description:
      "A fun and fashionable handmade crochet bucket hat in a bold brown and cream checkerboard pattern. Lightweight, stylish, and the perfect finishing touch for any casual or boho look.",
    price: 0,
    category: "Headwear",
    images: ["/images/products/bucket-hat-1.jpg"],
    featured: false,
    in_stock: true,
    tags: ["headwear", "hat", "bucket", "checkered", "summer"],
  },
  {
    id: "full-outfit-set",
    name: "Full Crochet Outfit Set",
    description:
      "A complete handmade crochet co-ord set — top and bottom crafted to match perfectly. Each set is unique, made to order, and designed to make you stand out with handmade style.",
    price: 0,
    category: "Sets",
    images: [
      "/images/products/outfit-1.jpg",
      "/images/products/outfit-2.jpg",
      "/images/products/outfit-3.jpg",
    ],
    featured: true,
    in_stock: true,
    tags: ["sets", "co-ord", "outfit", "full-set", "statement"],
  },
  {
    id: "benni-beanie",
    name: "Benni Beanie",
    description:
      "A fresh take on the classic crochet beanie — the Benni. Handcrafted in a range of beautiful colours with a soft, stretchy fit. Cozy, cute, and uniquely yours.",
    price: 0,
    category: "Headwear",
    images: [
      "/images/products/benni-1.jpg",
      "/images/products/benni-2.jpg",
      "/images/products/benni-3.jpg",
      "/images/products/benni-4.jpg",
      "/images/products/benni-5.jpg",
    ],
    featured: false,
    in_stock: true,
    tags: ["headwear", "beanie", "benni", "cozy", "colourful"],
  },
  {
    id: "crochet-top",
    name: "Crochet Top",
    description:
      "A beautifully handcrafted crochet top with elegant stitch work. Versatile and stylish, this piece can be dressed up or down for any occasion — crafted with love from premium yarn.",
    price: 0,
    category: "Tops",
    images: ["/images/products/top-1.jpg"],
    featured: false,
    in_stock: true,
    tags: ["tops", "fashion", "handmade"],
  },
];

async function seed() {
  console.log("Seeding products...");
  const { data, error } = await supabase
    .from("products")
    .upsert(products, { onConflict: "id" });

  if (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }

  console.log(`✅ Seeded ${products.length} products successfully`);
}

seed();
