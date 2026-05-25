import { notFound } from "next/navigation";
import { getProductById, getProducts } from "@/lib/db/products";
import { products as staticProducts } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;

  let product = await getProductById(id);
  if (!product) {
    product = staticProducts.find((p) => p.id === id) ?? null;
  }
  if (!product) return notFound();

  let allProducts = await getProducts({ category: product.category });
  if (allProducts.length === 0) {
    allProducts = staticProducts.filter((p) => p.category === product!.category);
  }
  const related = allProducts.filter((p) => p.id !== product!.id).slice(0, 4);

  return <ProductDetailClient product={product} related={related} />;
}
