import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";
import { Product } from "@/types";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) return notFound();

  const product: Product = {
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price ?? 0,
    category: data.category,
    images: data.images ?? [],
    featured: data.featured ?? false,
    inStock: data.in_stock ?? true,
    tags: data.tags ?? [],
  };

  return <ProductForm product={product} isEdit />;
}
