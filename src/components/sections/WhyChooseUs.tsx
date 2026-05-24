"use client";

import { motion } from "framer-motion";
import { Heart, Globe, Sparkles, Palette } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Made With Love",
    description:
      "Every single piece is handcrafted with care, patience, and genuine passion for the craft. No two pieces are exactly alike.",
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description:
      "We ship across Nigeria and internationally. Your beautiful handmade piece can reach you wherever you are in the world.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "Only the finest yarns and materials are used. Each item is crafted to last, keeping its beauty and shape over time.",
  },
  {
    icon: Palette,
    title: "Unique Custom Designs",
    description:
      "Want something made just for you? We specialise in fully custom crochet pieces tailored to your style, size, and colours.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-brand-nude/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose">
            Why GC Studio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mt-3">
            Crafted Different
          </h2>
          <p className="text-brand-text/70 text-base mt-4 max-w-lg mx-auto">
            We believe handmade fashion should feel luxurious, personal, and
            full of heart — and that&apos;s exactly what we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-7 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-brand-nude"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-pink/40 flex items-center justify-center mx-auto mb-5">
                <reason.icon className="w-6 h-6 text-brand-rose" />
              </div>
              <h3 className="font-display font-semibold text-brand-dark text-lg mb-3">
                {reason.title}
              </h3>
              <p className="text-brand-text/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
