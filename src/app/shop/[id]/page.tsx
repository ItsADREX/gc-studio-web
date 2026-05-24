"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  ArrowLeft,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { buildSingleProductWhatsAppUrl } from "@/lib/whatsapp";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);

  const [imageIndex, setImageIndex] = useState(0);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) return notFound();

  const inWishlist = isInWishlist(product.id);
  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleWhatsAppOrder = () => {
    const url = buildSingleProductWhatsAppUrl(product.name, product.price);
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-rose text-sm mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-brand-gray shadow-xl">
                <Image
                  src={product.images[imageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setImageIndex((prev) =>
                          prev === 0 ? product.images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-brand-dark" />
                    </button>
                    <button
                      onClick={() =>
                        setImageIndex((prev) =>
                          prev === product.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-brand-dark" />
                    </button>
                  </>
                )}
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setImageIndex(i)}
                      className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                        imageIndex === i
                          ? "border-brand-rose"
                          : "border-transparent hover:border-brand-pink"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col"
            >
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-brand-rose bg-brand-pink/30 px-3 py-1.5 rounded-full self-start mb-4">
                {product.category}
              </span>

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark leading-tight">
                {product.name}
              </h1>

              <div className="flex gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-brand-muted text-sm ml-2">5.0 (Handmade)</span>
              </div>

              <p className="font-display text-3xl font-bold text-brand-rose mt-5">
                ₦{product.price.toLocaleString()}
              </p>

              <p className="text-brand-text/80 text-base leading-relaxed mt-5">
                {product.description}
              </p>

              <div className="mt-6 p-4 bg-brand-nude/40 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-sm text-brand-text/80">
                  <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  Handmade to order — allow 7–14 days for custom pieces
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-text/80">
                  <span className="w-2 h-2 rounded-full bg-brand-rose flex-shrink-0" />
                  Custom colours available on request via WhatsApp
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-text/80">
                  <span className="w-2 h-2 rounded-full bg-brand-rose flex-shrink-0" />
                  Nationwide & worldwide shipping available
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={() => product.inStock && addToCart(product)}
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold text-sm transition-all ${
                    product.inStock
                      ? "bg-brand-dark hover:bg-brand-rose text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-dark/20"
                      : "bg-brand-gray text-brand-muted cursor-not-allowed"
                  }`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`w-12 h-12 sm:w-auto sm:px-4 rounded-2xl flex items-center justify-center gap-2 border-2 transition-all flex-shrink-0 ${
                    inWishlist
                      ? "border-brand-rose bg-brand-rose text-white"
                      : "border-brand-nude hover:border-brand-pink text-brand-muted hover:text-brand-rose"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${inWishlist ? "fill-white" : ""}`} />
                  <span className="hidden sm:inline text-sm font-medium">
                    {inWishlist ? "Saved" : "Wishlist"}
                  </span>
                </button>
              </div>

              <button
                onClick={handleWhatsAppOrder}
                className="mt-3 w-full flex items-center justify-center gap-2 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-2xl transition-all hover:scale-[1.01] shadow-lg shadow-green-200"
              >
                <MessageCircle className="w-4 h-4" />
                Order Directly via WhatsApp
              </button>
            </motion.div>
          </div>

          {related.length > 0 && (
            <div className="mt-20 pt-12 border-t border-brand-nude">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
