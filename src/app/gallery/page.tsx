"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";

const allImages = products.flatMap((p) =>
  p.images.map((src) => ({ src, name: p.name, category: p.category }))
);

const galleryCategories = ["All", "Tops", "Bottoms", "Headwear", "Accessories", "Baby"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="bg-gradient-to-br from-brand-nude via-white to-brand-pink/20 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose">
              Lookbook
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark mt-3">
              Gallery
            </h1>
            <p className="text-brand-text/70 mt-4 max-w-md mx-auto">
              A visual journey through our handcrafted pieces — each one made with
              love, precision, and a whole lot of yarn.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 flex-wrap justify-center mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-brand-dark text-white"
                    : "bg-brand-gray text-brand-text hover:bg-brand-pink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={`${img.src}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setLightboxSrc(img.src)}
                >
                  <Image
                    src={img.src}
                    alt={img.name}
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/30 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-semibold">{img.name}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <AnimatePresence>
          {lightboxSrc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxSrc(null)}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                onClick={() => setLightboxSrc(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-2xl w-full max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={lightboxSrc}
                  alt="Gallery image"
                  width={800}
                  height={900}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
