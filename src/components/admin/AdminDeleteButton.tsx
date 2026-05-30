"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

interface AdminDeleteButtonProps {
  productId: string;
  productName: string;
}

export default function AdminDeleteButton({
  productId,
  productName,
}: AdminDeleteButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(`Delete "${productName}"? This cannot be undone.`)) return;

    setLoading(true);
    const res = await fetch(`/admin/api/products/${productId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json();
      alert("Failed to delete: " + data.error);
    } else {
      router.refresh();
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="flex items-center justify-center w-9 h-9 rounded-xl bg-red-50 hover:bg-red-100 text-red-500 transition-colors disabled:opacity-50"
      title="Delete product"
    >
      {loading ? (
        <span className="w-3.5 h-3.5 border-2 border-red-300 border-t-red-500 rounded-full animate-spin" />
      ) : (
        <Trash2 className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
