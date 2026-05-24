import { Star, Quote } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { testimonials } from "@/data/testimonials";

export const metadata = {
  title: "Testimonials | GC STUDIO",
  description: "Read what our happy clients say about their GC Studio handmade crochet pieces.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="bg-gradient-to-br from-brand-nude via-white to-brand-pink/20 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose">
              Client Reviews
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark mt-3">
              What Our Clients Say
            </h1>
            <p className="text-brand-text/70 mt-4 max-w-md mx-auto">
              Real stories from real people who wear and treasure their GC Studio
              pieces every day.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-brand-dark font-semibold text-sm ml-2">
                5.0 — 100% Satisfaction
              </span>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white rounded-3xl p-7 border border-brand-nude hover:shadow-xl transition-all duration-300"
                >
                  <Quote className="w-8 h-8 text-brand-pink/60 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-brand-text/80 text-sm leading-relaxed">
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div className="mt-6 pt-5 border-t border-brand-nude/60 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-pink/40 flex items-center justify-center font-display font-bold text-brand-rose text-sm flex-shrink-0">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark text-sm">{t.name}</p>
                      <p className="text-brand-muted text-xs">
                        {t.location} · {t.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-nude/30 text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-brand-dark">
              Ready to Join Them?
            </h2>
            <p className="text-brand-text/70 mt-3 text-base">
              Order your handmade crochet piece today and experience the GC Studio
              difference for yourself.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center justify-center gap-2 mt-6 px-7 py-4 bg-brand-dark hover:bg-brand-rose text-white font-semibold text-sm rounded-2xl transition-all shadow-lg hover:scale-[1.02]"
            >
              Shop Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
