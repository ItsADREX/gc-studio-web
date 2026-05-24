"use client";

import { useCart } from "@/context/CartContext";
import { buildWhatsAppOrderUrl } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag, MessageCircle, Trash2 } from "lucide-react";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice, totalItems } =
    useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    const url = buildWhatsAppOrderUrl(items);
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-brand-nude">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-brand-rose" />
                <h2 className="font-display text-xl font-semibold text-brand-dark">
                  Your Cart
                </h2>
                {totalItems > 0 && (
                  <span className="bg-brand-pink text-brand-dark text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="w-9 h-9 rounded-full bg-brand-gray hover:bg-brand-pink transition-colors flex items-center justify-center text-brand-dark"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-brand-nude flex items-center justify-center">
                    <ShoppingBag className="w-9 h-9 text-brand-rose/50" />
                  </div>
                  <div>
                    <p className="font-display text-lg text-brand-dark font-medium">
                      Your cart is empty
                    </p>
                    <p className="text-brand-muted text-sm mt-1">
                      Add some beautiful pieces to get started
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="mt-2 px-6 py-2.5 bg-brand-pink hover:bg-brand-rose hover:text-white rounded-full text-brand-dark text-sm font-medium transition-all"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-4 bg-brand-gray/50 rounded-2xl"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-semibold text-brand-dark text-sm leading-tight">
                          {item.product.name}
                        </p>
                        <p className="text-brand-rose font-semibold text-sm mt-1">
                          ₦{item.product.price.toLocaleString()}
                        </p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 border border-brand-nude">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="w-6 h-6 flex items-center justify-center hover:text-brand-rose transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-semibold text-brand-dark w-5 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="w-6 h-6 flex items-center justify-center hover:text-brand-rose transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-brand-muted hover:text-red-400 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-brand-nude space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-brand-text font-medium">Total</span>
                  <span className="font-display text-xl font-bold text-brand-dark">
                    ₦{totalPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Order via WhatsApp
                </button>
                <p className="text-center text-xs text-brand-muted">
                  Your cart details will be sent directly to Salami Gift on WhatsApp
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
