import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { products } from "@/data/products";

export async function POST() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (!session || session.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return NextResponse.json(
      { error: "SUPABASE_SERVICE_ROLE_KEY is not configured on the server. Add it to Netlify environment variables." },
      { status: 503 }
    );
  }

  const supabase = createClient(url, serviceKey);

  const rows = products.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price ?? 0,
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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, count: rows.length });
}
