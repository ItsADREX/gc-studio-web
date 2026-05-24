"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, Heart } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { WHATSAPP_CONTACT_URL, INSTAGRAM_URL } from "@/lib/whatsapp";

const quickLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/custom-orders", label: "Custom Orders" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-brand-pink/30 group-hover:ring-brand-pink/60 transition-all">
                <Image
                  src="/images/logo.png"
                  alt="GC Studio Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-display text-2xl font-bold tracking-wide text-white group-hover:text-brand-pink transition-colors">
                  GC STUDIO
                </span>
                <span className="text-[10px] text-brand-pink/70 tracking-[0.15em] uppercase font-light">
                  Gifted Crochet Studio
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Handmade crochet pieces crafted with love, creativity, and
              elegance. Every stitch tells a story.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-pink hover:text-brand-dark transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-500 transition-all flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-pink text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-brand-pink mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/60 text-sm">WhatsApp</p>
                  <a
                    href={WHATSAPP_CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-pink text-sm transition-colors"
                  >
                    +234 906 549 2015
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <InstagramIcon className="w-4 h-4 text-brand-pink mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/60 text-sm">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-pink text-sm transition-colors"
                  >
                    @salami98053
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-pink mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-white text-sm">Nigeria</p>
                  <p className="text-white/50 text-xs">Worldwide Shipping Available</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-base">
              Stay Updated
            </h4>
            <p className="text-white/60 text-sm mb-4">
              Get notified about new collections, restocks, and exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand-pink transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-brand-pink hover:bg-brand-rose text-brand-dark hover:text-white font-semibold text-sm rounded-xl transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} GC STUDIO — Gifted Crochet Studio. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-brand-pink fill-brand-pink" /> by Salami Gift
          </p>
        </div>
      </div>
    </footer>
  );
}
