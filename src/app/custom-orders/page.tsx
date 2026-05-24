"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Palette, Ruler, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildCustomOrderWhatsAppUrl } from "@/lib/whatsapp";

const steps = [
  {
    icon: MessageCircle,
    title: "Get in Touch",
    description: "Fill in the form below or message us directly on WhatsApp to describe your dream piece.",
  },
  {
    icon: Palette,
    title: "Design Together",
    description: "We discuss your colour preferences, style, size, and any specific details you want included.",
  },
  {
    icon: Clock,
    title: "We Craft It",
    description: "Salami Gift handcrafts your piece stitch by stitch. Custom orders typically take 7–14 business days.",
  },
  {
    icon: ArrowRight,
    title: "Delivered to You",
    description: "Your finished piece is lovingly packaged and shipped directly to your door across Nigeria or worldwide.",
  },
];

export default function CustomOrdersPage() {
  const [form, setForm] = useState({
    name: "",
    item: "",
    colors: "",
    size: "",
    details: "",
    deadline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = [
      `Name: ${form.name}`,
      `Item requested: ${form.item}`,
      `Preferred colours: ${form.colors}`,
      `Size/measurements: ${form.size}`,
      `Additional details: ${form.details}`,
      form.deadline ? `Needed by: ${form.deadline}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = buildCustomOrderWhatsAppUrl(details);
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Header */}
        <div className="bg-gradient-to-br from-brand-nude via-white to-brand-pink/20 py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose"
            >
              Made Just for You
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-bold text-brand-dark mt-3"
            >
              Custom Orders
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-text/70 mt-4 text-base leading-relaxed max-w-lg mx-auto"
            >
              Want something truly unique? Tell us your vision — the colours, the
              style, the vibe — and Salami Gift will handcraft it just for you.
            </motion.p>
          </div>
        </div>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-dark text-center mb-10">
              How Custom Orders Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-gray/50 rounded-3xl p-6 text-center border border-brand-nude"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-pink/40 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-5 h-5 text-brand-rose" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-brand-rose text-white text-xs font-bold flex items-center justify-center mx-auto mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-display font-semibold text-brand-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-text/70 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 bg-brand-nude/30">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-brand-nude">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-2">
                Request Your Custom Piece
              </h2>
              <p className="text-brand-muted text-sm mb-8">
                Fill in the details below and we&apos;ll open WhatsApp with your
                request pre-filled — ready to send directly to Salami Gift.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Adaeze Okonkwo"
                      className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      Item You Want *
                    </label>
                    <input
                      type="text"
                      name="item"
                      value={form.item}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Crochet corset top"
                      className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      Preferred Colours
                    </label>
                    <input
                      type="text"
                      name="colors"
                      value={form.colors}
                      onChange={handleChange}
                      placeholder="e.g. Cream, dusty pink, brown"
                      className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-2">
                      Size / Measurements
                    </label>
                    <input
                      type="text"
                      name="size"
                      value={form.size}
                      onChange={handleChange}
                      placeholder="e.g. UK 10, or bust 36 inches"
                      className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe any specific design ideas, patterns, occasions, or anything else you'd like us to know..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-dark mb-2">
                    When Do You Need It? (optional)
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    value={form.deadline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm focus:outline-none focus:border-brand-rose transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-2xl transition-all hover:scale-[1.01] shadow-lg shadow-green-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Custom Request via WhatsApp
                </button>
                <p className="text-center text-xs text-brand-muted">
                  Clicking the button above will open WhatsApp with your request
                  pre-filled. Just send it to Salami Gift!
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Pricing note */}
        <section className="py-14 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-brand-pink/20 rounded-3xl p-8 border border-brand-pink/40">
              <Ruler className="w-8 h-8 text-brand-rose mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-brand-dark">
                Custom Pricing
              </h3>
              <p className="text-brand-text/70 text-sm mt-3 leading-relaxed">
                Custom order pricing depends on the item type, complexity, and yarn
                required. A deposit is required upfront before work begins, with the
                balance due on completion. We will agree on everything via WhatsApp
                before starting.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
