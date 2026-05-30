"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Database } from "lucide-react";

export default function AdminSeedButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSeed = async () => {
    if (!confirm("Seed the database with all existing products?")) return;

    setLoading(true);
    const res = await fetch("/admin/api/seed", { method: "POST" });
    const data = await res.json();

    if (!res.ok) {
      alert("Seed failed: " + data.error);
    } else {
      alert(`Done! ${data.count} products seeded.`);
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
