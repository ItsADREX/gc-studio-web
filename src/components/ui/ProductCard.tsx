"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import { Product } from "@/types";
import { useWishlist } from "@/context/WishlistContext";
import { buildSingleProductWhatsAppUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = buildSingleProductWhatsAppUrl(product.name);
    window.open(url, "_blank");
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-nude/60"
    >
      <Link href={`/shop/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-brand-gray">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
              <span className="bg-brand-dark text-white text-xs px-3 py-1.5 rounded-full font-medium">
                Out of Stock
              </span>
            </div>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md ${
              inWishlist
                ? "bg-brand-rose text-white"
                : "bg-white/90 text-brand-muted hover:bg-brand-pink hover:text-brand-dark"
            }`}
          >
            <Heart className={`w-4 h-4 ${inWishlist ? "fill-white" : ""}`} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Order via WhatsApp
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/shop/${product.id}`}>
          <h3 className="font-display font-semibold text-brand-dark text-base leading-tight hover:text-brand-rose transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-brand-muted text-xs mt-1 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <a
            href={buildSingleProductWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-rose hover:text-brand-dark transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Contact for price
          </a>
        </div>
      </div>
    </motion.div>
  );
}
