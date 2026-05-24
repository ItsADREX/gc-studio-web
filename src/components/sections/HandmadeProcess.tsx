"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Design & Plan",
    description:
      "Every piece begins with a vision. We discuss your style, pick the perfect yarn colours, and plan out the design before a single stitch is made.",
  },
  {
    step: "02",
    title: "Handcraft",
    description:
      "Using quality yarn and skilled hands, each piece is crocheted stitch by stitch with care and precision. This is where the magic happens.",
  },
  {
    step: "03",
    title: "Quality Check",
    description:
      "Every finished piece is carefully inspected to ensure it meets our premium standards — perfect stitches, clean edges, and beautiful finish.",
  },
  {
    step: "04",
    title: "Packaged & Shipped",
    description:
      "Your piece is lovingly packaged and shipped directly to your door — wherever you are in Nigeria or across the world.",
  },
];

export default function HandmadeProcess() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose">
            The Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mt-3">
            From Yarn to You
          </h2>
          <p className="text-brand-text/70 text-base mt-4 max-w-lg mx-auto">
            A peek behind the scenes at how every GC Studio piece is brought to life —
            slowly, carefully, and with genuine love.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-brand-pink/40 mx-32" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative text-center"
              >
                <div className="w-20 h-20 rounded-full bg-brand-pink/20 border-2 border-brand-pink flex items-center justify-center mx-auto mb-6 relative z-10 bg-white">
                  <span className="font-display text-xl font-bold text-brand-rose">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-brand-dark text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-brand-text/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
