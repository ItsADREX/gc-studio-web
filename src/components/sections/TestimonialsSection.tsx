"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);

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
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark mt-3">
            What Our Clients Say
          </h2>
          <p className="text-brand-text/70 text-base mt-4 max-w-md mx-auto">
            Real stories from real people who wear and love their GC Studio pieces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl p-7 border border-brand-nude hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-brand-pink/60 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-brand-text/80 text-sm leading-relaxed line-clamp-3">
                &ldquo;{testimonial.review}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-brand-nude/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-pink/40 flex items-center justify-center font-display font-bold text-brand-rose text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-brand-muted text-xs">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
