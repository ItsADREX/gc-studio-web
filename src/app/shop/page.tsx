import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShopClient from "./ShopClient";
import { getProducts, getCategories } from "@/lib/db/products";
import { products as staticProducts, categories as staticCategories } from "@/data/products";

export default async function ShopPage() {
  let allProducts = await getProducts();
  let categories = await getCategories();

  if (allProducts.length === 0) {
    allProducts = staticProducts;
    categories = staticCategories;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="bg-gradient-to-br from-brand-nude via-white to-brand-pink/20 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose"
            >
              Handmade Collection
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-bold text-brand-dark mt-3"
            >
              Shop All Pieces
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-text/70 mt-4 max-w-md mx-auto"
            >
              Every item is handcrafted with premium yarn and love. Browse our full
              collection below.
            </motion.p>
          </div>
        </div>
        <ShopClient products={allProducts} categories={categories} />
      </main>
      <Footer />
    </>
  );
}
