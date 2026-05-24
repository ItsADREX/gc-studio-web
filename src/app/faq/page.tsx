"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { faqs } from "@/data/faqs";
import { WHATSAPP_CONTACT_URL } from "@/lib/whatsapp";

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="bg-gradient-to-br from-brand-nude via-white to-brand-pink/20 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose">
              Got Questions?
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark mt-3">
              Frequently Asked Questions
            </h1>
            <p className="text-brand-text/70 mt-4 max-w-md mx-auto">
              Everything you need to know about ordering, shipping, custom pieces, and
              caring for your handmade crochet items.
            </p>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-brand-nude overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenId(openId === faq.id ? null : faq.id)
                    }
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-brand-gray/40 transition-colors"
                  >
                    <span className="font-display font-semibold text-brand-dark text-base">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-pink/30 flex items-center justify-center text-brand-rose">
                      {openId === faq.id ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 border-t border-brand-nude/60">
                          <p className="text-brand-text/80 text-sm leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center bg-brand-nude/40 rounded-3xl p-8 border border-brand-nude">
              <h3 className="font-display text-xl font-bold text-brand-dark">
                Still Have Questions?
              </h3>
              <p className="text-brand-text/70 text-sm mt-3 max-w-sm mx-auto">
                We&apos;re always happy to help. Reach out directly and Salami Gift
                will respond as soon as possible.
              </p>
              <a
                href={WHATSAPP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-2xl transition-all shadow-md shadow-green-200"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
