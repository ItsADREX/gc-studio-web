"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { INSTAGRAM_URL } from "@/lib/whatsapp";

const galleryImages = [
  { src: "/images/products/corset.jpg", alt: "Crochet Corset" },
  { src: "/images/products/shorts-1.jpg", alt: "Crochet Shorts" },
  { src: "/images/products/earrings-1.jpg", alt: "Flower Earrings" },
  { src: "/images/products/headwarmer-1.jpg", alt: "Head Warmer" },
  { src: "/images/products/beanie.jpg", alt: "Slouch Beanie" },
  { src: "/images/products/scrunchie-1.jpg", alt: "Scrunchie" },
];

export default function InstagramSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose">
            Follow Along
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark mt-3">
            @salami98053
          </h2>
          <p className="text-brand-text/70 text-base mt-3 max-w-sm mx-auto">
            Follow us on Instagram for daily inspiration, new drops, and behind-the-scenes content.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {galleryImages.map((img, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-all duration-300 flex items-center justify-center">
                <InstagramIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold text-sm rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-200"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
