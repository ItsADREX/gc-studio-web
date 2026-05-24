import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Globe, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WHATSAPP_CONTACT_URL } from "@/lib/whatsapp";

export const metadata = {
  title: "About Us | GC STUDIO",
  description:
    "Meet Salami Gift — the creative founder behind GC Studio, handcrafting beautiful crochet pieces with love and elegance.",
};

const values = [
  {
    icon: Heart,
    title: "Crafted With Love",
    description:
      "Every stitch is placed with intention and care. Crochet is not just a craft for Salami — it is a form of love made tangible.",
  },
  {
    icon: Sparkles,
    title: "Uniquely Yours",
    description:
      "No mass production here. Every piece is one-of-a-kind, made specifically for the person who wears it.",
  },
  {
    icon: Globe,
    title: "Globally Accessible",
    description:
      "Beautiful handmade fashion should have no borders. GC Studio ships its pieces to clients across Nigeria and worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-nude via-white to-brand-pink/20 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose">
                  Our Story
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-dark mt-3 leading-tight">
                  Meet the Hands
                  <br />
                  <span className="italic text-brand-rose">Behind the Magic</span>
                </h1>
                <p className="text-brand-text/80 text-base leading-relaxed mt-6 max-w-lg">
                  GC STUDIO was born from a deep love for crochet and a dream of
                  turning handmade artistry into a brand that women across the world
                  could wear with pride.
                </p>
                <p className="text-brand-text/80 text-base leading-relaxed mt-4 max-w-lg">
                  Every piece that leaves our studio carries a piece of Salami
                  Gift&apos;s heart — her patience, her creativity, and her genuine
                  desire to make you feel beautiful.
                </p>
                <a
                  href={WHATSAPP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-7 py-4 bg-brand-dark hover:bg-brand-rose text-white font-semibold text-sm rounded-2xl transition-all shadow-lg shadow-brand-dark/20 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Say Hello on WhatsApp
                </a>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute -inset-6 bg-brand-pink/20 rounded-[3rem] blur-2xl" />
                <div className="relative w-72 sm:w-80">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/images/about/profile-cropped.png"
                      alt="Salami Gift — Founder of GC Studio"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-3 shadow-xl border border-brand-nude">
                    <p className="font-display font-bold text-brand-dark text-sm">
                      Salami Gift
                    </p>
                    <p className="text-brand-muted text-xs">Founder & Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose">
              The Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark mt-3">
              How It All Started
            </h2>
            <div className="mt-8 space-y-5 text-brand-text/80 text-base leading-relaxed text-left">
              <p>
                Salami Gift discovered her love for crochet as a creative outlet
                — a way to make something beautiful from nothing but yarn and
                patience. What started as a personal passion quickly grew into
                something bigger as friends, family, and strangers began asking
                where they could get pieces just like hers.
              </p>
              <p>
                That&apos;s when GC STUDIO was born. <em>Gifted Crochet Studio</em>{" "}
                — a name that captures both the gift of her craft and the gifted
                pieces she creates for those who wear them.
              </p>
              <p>
                Today, GC Studio creates handmade crochet fashion and accessories
                for clients across Nigeria and beyond — from cosy beanies and
                elegant corset tops to beautiful earrings, baby caps, and fully
                custom pieces made to your exact specifications.
              </p>
              <p>
                Every single item is made by hand, with love, and with the
                knowledge that somewhere out there, a person is going to put it on
                and feel something special.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-brand-nude/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose">
                What We Stand For
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark mt-3">
                Our Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-3xl p-8 text-center border border-brand-nude hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-pink/40 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-6 h-6 text-brand-rose" />
                  </div>
                  <h3 className="font-display font-semibold text-brand-dark text-xl mb-3">
                    {v.title}
                  </h3>
                  <p className="text-brand-text/70 text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-brand-dark text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Ready to Own Something
              <span className="italic text-brand-pink"> Handmade?</span>
            </h2>
            <p className="text-white/60 mt-4 text-base leading-relaxed">
              Browse our collection or reach out to discuss your dream custom piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-pink hover:bg-brand-rose text-brand-dark hover:text-white font-semibold text-sm rounded-2xl transition-all"
              >
                Shop the Collection
              </Link>
              <Link
                href="/custom-orders"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-2xl transition-all border border-white/20"
              >
                Custom Orders
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
