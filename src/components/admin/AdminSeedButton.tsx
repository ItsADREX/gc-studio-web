"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Database } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { Product } from "@/types";

interface AdminSeedButtonProps {
  initialProducts: Product[];
}

export default function AdminSeedButton({ initialProducts }: AdminSeedButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSeed = async () => {
    if (
      !confirm(
        `Seed the database with ${initialProducts.length} products? This will add all existing products.`
      )
    )
      return;

    setLoading(true);
    const supabase = createClient();

    const rows = initialProducts.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      price: p.price,
      category: p.category,
      images: p.images,
      featured: p.featured,
      in_stock: p.inStock,
      tags: p.tags ?? [],
    }));

    const { error } = await supabase
      .from("products")
      .upsert(rows, { onConflict: "id" });

    if (error) {
      alert("Seed failed: " + error.message);
    } else {
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleSeed}
      disabled={loading}
      className="flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-2xl transition-all disabled:opacity-50"
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <Database className="w-4 h-4" />
      )}
      {loading ? "Seeding..." : "Seed Products"}
    </button>
  );
}
