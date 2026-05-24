import { CartItem } from "@/types";

const WHATSAPP_NUMBER = "2349065492015";

export function buildWhatsAppOrderUrl(items: CartItem[]): string {
  const lines = items.map(
    (item) =>
      `• ${item.quantity}x ${item.product.name} — ₦${(
        item.product.price * item.quantity
      ).toLocaleString()}`
  );
  const total = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const message = [
    "Hello GC Studios! 🧶 I'd like to place an order:",
    "",
    ...lines,
    "",
    `*Total: ₦${total.toLocaleString()}*`,
    "",
    "Please confirm availability and shipping details. Thank you! 😊",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildSingleProductWhatsAppUrl(
  productName: string,
  price: number
): string {
  const message = [
    `Hello GC Studios! 🧶 I'm interested in ordering:`,
    "",
    `• ${productName} — ₦${price.toLocaleString()}`,
    "",
    "Please confirm availability and share shipping details. Thank you! 😊",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildCustomOrderWhatsAppUrl(details: string): string {
  const message = [
    "Hello GC Studios! 🧶 I'd like to place a custom order:",
    "",
    details,
    "",
    "Please let me know the pricing and timeline. Thank you! 😊",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_CONTACT_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL =
  "https://www.instagram.com/salami98053?igsh=NTFxZ2t2ZzJzdGNp";
