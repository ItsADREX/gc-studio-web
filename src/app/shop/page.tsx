import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShopClient from "./ShopClient";
import ShopHeader from "./ShopHeader";
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
        <ShopHeader />
        <ShopClient products={allProducts} categories={categories} />
      </main>
      <Footer />
    </>
  );
}
