import { createReadonlyClient } from "@/lib/supabase/readonly";
import { Product } from "@/types";

function dbRowToProduct(row: Record<string, unknown>): Product {
  return {
    id: row.id as string,
    name: row.name as string,
    description: row.description as string,
    price: (row.price as number) ?? 0,
    category: row.category as string,
    images: (row.images as string[]) ?? [],
    featured: (row.featured as boolean) ?? false,
    inStock: (row.in_stock as boolean) ?? true,
    tags: (row.tags as string[]) ?? [],
  };
}

export async function getProducts(options?: {
  category?: string;
  featured?: boolean;
}): Promise<Product[]> {
  try {
    const supabase = createReadonlyClient();
    let query = supabase.from("products").select("*").order("created_at", { ascending: false });

    if (options?.category) {
      query = query.eq("category", options.category);
    }
    if (options?.featured !== undefined) {
      query = query.eq("featured", options.featured);
    }

    const { data, error } = await query;
    if (error) {
      console.error("Error fetching products:", error);
      return [];
    }
    return (data ?? []).map(dbRowToProduct);
  } catch (err) {
    console.error("Supabase getProducts failed:", err);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const supabase = createReadonlyClient();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) return null;
    return dbRowToProduct(data);
  } catch (err) {
    console.error("Supabase getProductById failed:", err);
    return null;
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return getProducts({ featured: true });
}

export async function getCategories(): Promise<string[]> {
  try {
    const supabase = createReadonlyClient();
    const { data, error } = await supabase
      .from("products")
      .select("category");

    if (error || !data) return [];
    const unique = Array.from(new Set(data.map((r: { category: string }) => r.category))).sort();
    return ["All", ...unique];
  } catch (err) {
    console.error("Supabase getCategories failed:", err);
    return [];
  }
}
