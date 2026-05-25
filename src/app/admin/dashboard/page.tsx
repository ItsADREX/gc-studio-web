import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products as staticProducts } from "@/data/products";
import AdminDeleteButton from "@/components/admin/AdminDeleteButton";
import AdminSeedButton from "@/components/admin/AdminSeedButton";
import { Plus, LogOut, Package, Star } from "lucide-react";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  const dbEmpty = !products || products.length === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-brand-pink/40">
              <Image src="/images/logo.png" alt="GC Studio" fill className="object-cover" />
            </div>
            <div>
              <p className="font-display font-bold text-brand-dark text-sm leading-none">GC Studio</p>
              <p className="text-[10px] text-brand-muted">Admin Panel</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-brand-muted hidden sm:block">{user.email}</span>
            <form action="/admin/auth/signout" method="POST">
              <Link
                href="/admin/auth/signout"
                className="flex items-center gap-1.5 text-xs text-brand-muted hover:text-red-500 transition-colors px-3 py-2 rounded-xl hover:bg-red-50"
              >
                <LogOut className="w-4 h-4" />
                Sign out
              </Link>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl font-bold text-brand-dark">Products</h1>
            <p className="text-brand-muted text-sm mt-1">
              {products?.length ?? 0} products in the store
            </p>
          </div>
          <div className="flex items-center gap-3">
            {dbEmpty && (
              <AdminSeedButton initialProducts={staticProducts} />
            )}
            <Link
              href="/admin/products/new"
              className="flex items-center gap-2 px-4 py-2.5 bg-brand-dark hover:bg-brand-rose text-white text-sm font-semibold rounded-2xl transition-all"
            >
              <Plus className="w-4 h-4" />
              Add Product
            </Link>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-sm mb-6">
            Database error: {error.message}. Make sure you&apos;ve run the schema SQL.{" "}
            <Link href="/admin/setup" className="underline font-semibold">
              View setup guide
            </Link>
          </div>
        )}

        {dbEmpty && !error && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-4 rounded-2xl text-sm mb-6">
            <p className="font-semibold">Database is empty</p>
            <p className="mt-1">Click &ldquo;Seed Products&rdquo; to populate with all existing products, or add them manually.</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {(products ?? []).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square bg-gray-100">
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Package className="w-10 h-10 text-gray-300" />
                  </div>
                )}
                {product.featured && (
                  <div className="absolute top-2 left-2 bg-brand-rose text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    Featured
                  </div>
                )}
                {!product.in_stock && (
                  <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                    <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">Out of Stock</span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-xs text-brand-rose font-semibold uppercase tracking-wide mb-1">{product.category}</p>
                <h3 className="font-display font-semibold text-brand-dark text-sm leading-tight line-clamp-1">{product.name}</h3>
                <p className="text-brand-muted text-xs mt-1 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-2 mt-4">
                  <Link
                    href={`/admin/products/${product.id}/edit`}
                    className="flex-1 text-center text-xs font-semibold py-2 rounded-xl bg-brand-nude hover:bg-brand-pink transition-colors text-brand-dark"
                  >
                    Edit
                  </Link>
                  <AdminDeleteButton productId={product.id} productName={product.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
