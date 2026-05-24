"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 crochet-pattern" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-pink/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-6 h-6 text-brand-pink" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Stay in the Loop
          </h2>
          <p className="text-white/60 text-base mt-4 leading-relaxed">
            Be the first to know about new collections, restocks, exclusive offers,
            and behind-the-scenes updates from Salami Gift.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 inline-flex items-center gap-2 bg-brand-pink/20 text-brand-pink px-6 py-4 rounded-2xl border border-brand-pink/30"
            >
              <span className="text-lg">🧶</span>
              <span className="font-semibold">
                You&apos;re subscribed! Thank you for joining.
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand-pink transition-colors"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-7 py-4 bg-brand-pink hover:bg-brand-rose text-brand-dark hover:text-white font-semibold text-sm rounded-2xl transition-all whitespace-nowrap group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-white/30 text-xs mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
