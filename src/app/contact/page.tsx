"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, Send } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WHATSAPP_CONTACT_URL, INSTAGRAM_URL } from "@/lib/whatsapp";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello GC Studios! 👋\n\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`;
    const url = `${WHATSAPP_CONTACT_URL}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="bg-gradient-to-br from-brand-nude via-white to-brand-pink/20 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-rose"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl font-bold text-brand-dark mt-3"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-text/70 mt-4 max-w-md mx-auto"
            >
              Have a question, a custom order idea, or just want to say hello? We&apos;d
              love to hear from you.
            </motion.p>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-bold text-brand-dark mb-6">
                    How to Reach Us
                  </h2>
                </div>

                <a
                  href={WHATSAPP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-green-50 hover:bg-green-100 rounded-2xl border border-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark group-hover:text-green-700 transition-colors">
                      WhatsApp (Fastest)
                    </p>
                    <p className="text-brand-text/70 text-sm">+234 906 549 2015</p>
                    <p className="text-green-600 text-xs mt-1 font-medium">
                      Tap to chat now →
                    </p>
                  </div>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-brand-nude/30 hover:bg-brand-pink/20 rounded-2xl border border-brand-nude transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <InstagramIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">Instagram</p>
                    <p className="text-brand-text/70 text-sm">@salami98053</p>
                    <p className="text-pink-600 text-xs mt-1 font-medium">
                      Follow us →
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-brand-gray/50 rounded-2xl border border-brand-nude">
                  <div className="w-12 h-12 rounded-xl bg-brand-pink/40 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-rose" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">Location</p>
                    <p className="text-brand-text/70 text-sm">Nigeria</p>
                    <p className="text-brand-muted text-xs mt-0.5">
                      Worldwide shipping available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-brand-gray/50 rounded-2xl border border-brand-nude">
                  <div className="w-12 h-12 rounded-xl bg-brand-pink/40 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-rose" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">Response Time</p>
                    <p className="text-brand-text/70 text-sm">
                      Usually within a few hours via WhatsApp
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-8 border border-brand-nude shadow-sm">
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-6">
                    Send a Message
                  </h3>

                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="text-4xl mb-4">🧶</div>
                      <p className="font-display text-xl font-bold text-brand-dark">
                        Message Sent!
                      </p>
                      <p className="text-brand-muted text-sm mt-2">
                        Your message was opened in WhatsApp. Salami Gift will reply
                        shortly!
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="mt-6 px-6 py-2.5 bg-brand-pink hover:bg-brand-rose hover:text-white text-brand-dark text-sm font-medium rounded-xl transition-all"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
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
                            placeholder="Adaeze Okonkwo"
                            className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-dark mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Custom order enquiry"
                          className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-dark mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          className="w-full px-4 py-3 rounded-xl border border-brand-nude bg-brand-gray/30 text-brand-dark text-sm placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-4 bg-brand-dark hover:bg-brand-rose text-white font-semibold text-sm rounded-2xl transition-all hover:scale-[1.01] shadow-lg shadow-brand-dark/20"
                      >
                        <Send className="w-4 h-4" />
                        Send via WhatsApp
                      </button>
                      <p className="text-center text-xs text-brand-muted">
                        Your message will open in WhatsApp ready to send.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
