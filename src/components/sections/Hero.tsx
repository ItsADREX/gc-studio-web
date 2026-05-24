"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const fadeItem = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-nude via-white to-brand-pink/30">
      <div className="absolute inset-0 crochet-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.span
              {...fadeItem(0)}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose bg-brand-pink/40 px-4 py-2 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-rose" />
              Handmade with Love
            </motion.span>

            <motion.h1
              {...fadeItem(0.15)}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-dark leading-[1.1] tracking-tight"
            >
              Handmade
              <br />
              <span className="text-brand-rose italic">Crochet</span>
              <br />
              Pieces Crafted
              <br />
              With Love
            </motion.h1>

            <motion.p
              {...fadeItem(0.3)}
              className="mt-6 text-brand-text/80 text-base sm:text-lg leading-relaxed max-w-md"
            >
              Beautiful handmade crochet fashion and accessories designed with
              elegance, comfort, and creativity — crafted especially for you.
            </motion.p>

            <motion.div
              {...fadeItem(0.45)}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-dark hover:bg-brand-rose text-white font-semibold text-sm rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-dark/20 group"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/custom-orders"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-brand-pink text-brand-dark font-semibold text-sm rounded-2xl transition-all border border-brand-nude hover:border-brand-pink shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Custom Orders
              </Link>
            </motion.div>

            <motion.div
              {...fadeItem(0.6)}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-brand-nude"
            >
              {[
                { value: "100+", label: "Happy Clients" },
                { value: "100%", label: "Handmade" },
                { value: "8+", label: "Products" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-brand-dark">
                    {stat.value}
                  </p>
                  <p className="text-xs text-brand-muted mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-pink to-brand-beige rounded-[3rem] opacity-40 blur-2xl" />
              <div className="relative grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="relative h-48 sm:h-64 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/products/corset.jpg"
                      alt="Crochet Corset Top"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="relative h-36 sm:h-48 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/products/earrings-1.jpg"
                      alt="Crochet Earrings"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-3 mt-8">
                  <div className="relative h-36 sm:h-48 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/products/shorts-1.jpg"
                      alt="Crochet Shorts"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 sm:h-64 rounded-3xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/products/beanie.jpg"
                      alt="Crochet Beanie"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-brand-nude">
                <p className="text-xs text-brand-muted">Custom made for you</p>
                <p className="font-display font-bold text-brand-dark text-sm">Starting at ₦2,500</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
