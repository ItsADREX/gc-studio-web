"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { Product } from "@/types";
import {
  Upload,
  X,
  Plus,
  Save,
  ArrowLeft,
  ImageIcon,
  Star,
  AlertCircle,
} from "lucide-react";

const CATEGORIES = [
  "Tops",
  "Bottoms",
  "Dresses",
  "Sets",
  "Headwear",
  "Accessories",
  "Baby",
];

interface ProductFormProps {
  product?: Product;
  isEdit?: boolean;
}

export default function ProductForm({ product, isEdit = false }: ProductFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState(product?.name ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [category, setCategory] = useState(product?.category ?? "Tops");
  const [featured, setFeatured] = useState(product?.featured ?? false);
  const [inStock, setInStock] = useState(product?.inStock ?? true);
  const [tags, setTags] = useState((product?.tags ?? []).join(", "));
  const [images, setImages] = useState<string[]>(product?.images ?? []);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploadError, setUploadError] = useState("");

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadError("");
    const supabase = createClient();

    for (const file of Array.from(files)) {
      const ext = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const filePath = `products/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, file, { upsert: false });

      if (uploadError) {
        setUploadError(
          `Upload failed: ${uploadError.message}. Make sure the "product-images" storage bucket exists in Supabase.`
        );
        continue;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("product-images").getPublicUrl(filePath);

      setImages((prev) => [...prev, publicUrl]);
    }

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const generateId = (name: string) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError("Product name is required.");
    if (images.length === 0) return setError("At least one image is required.");

    setSaving(true);
    setError("");

    const supabase = createClient();
    const tagArray = tags
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter(Boolean);

    const row = {
      id: isEdit ? product!.id : generateId(name),
      name: name.trim(),
      description: description.trim(),
      price: 0,
      category,
      images,
      featured,
      in_stock: inStock,
      tags: tagArray,
    };

    const { error: dbError } = isEdit
      ? await supabase.from("products").update(row).eq("id", product!.id)
      : await supabase.from("products").insert(row);

    if (dbError) {
      setError(dbError.message);
      setSaving(false);
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1.5 text-sm text-brand-muted hover:text-brand-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="font-display font-bold text-brand-dark">
            {isEdit ? "Edit Product" : "Add New Product"}
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="font-semibold text-brand-dark mb-5">Product Images</h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 group">
                  <Image src={img} alt={`Image ${i + 1}`} fill className="object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  {i === 0 && (
                    <span className="absolute bottom-1.5 left-1.5 text-[10px] bg-brand-dark text-white px-1.5 py-0.5 rounded-full">
                      Main
                    </span>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="aspect-square rounded-xl border-2 border-dashed border-gray-200 hover:border-brand-pink flex flex-col items-center justify-center gap-1.5 text-brand-muted hover:text-brand-rose transition-colors disabled:opacity-50"
              >
                {uploading ? (
                  <span className="w-5 h-5 border-2 border-brand-pink/30 border-t-brand-rose rounded-full animate-spin" />
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    <span className="text-[10px] font-medium">Add Image</span>
                  </>
                )}
              </button>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
            />

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-rose transition-colors"
            >
              <Upload className="w-4 h-4" />
              {uploading ? "Uploading..." : "Upload images from device"}
            </button>

            {images.length === 0 && (
              <div className="mt-3 flex items-center gap-2 text-xs text-brand-muted bg-gray-50 rounded-xl px-3 py-2.5">
                <ImageIcon className="w-4 h-4 flex-shrink-0" />
                No images yet. Upload at least one image to publish this product.
              </div>
            )}

            {uploadError && (
              <div className="mt-3 flex items-start gap-2 text-xs text-amber-700 bg-amber-50 rounded-xl px-3 py-3">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Upload note</p>
                  <p>{uploadError}</p>
                  <p className="mt-1">
                    Go to <strong>Supabase → Storage → New Bucket</strong>, name it{" "}
                    <code className="bg-amber-100 px-1 rounded">product-images</code>, and set it
                    to <strong>Public</strong>.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-5">
            <h2 className="font-semibold text-brand-dark">Product Details</h2>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                Product Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Granny Square Crop Top"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the product — materials, style, fit..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark focus:outline-none focus:border-brand-rose transition-colors bg-white"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Tags{" "}
                  <span className="text-brand-muted font-normal">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g. tops, summer, boho"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-brand-dark placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  onClick={() => setFeatured(!featured)}
                  className={`relative w-10 h-6 rounded-full transition-colors ${
                    featured ? "bg-brand-rose" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                      featured ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </div>
                <span className="flex items-center gap-1.5 text-sm font-medium text-brand-dark">
                  <Star className="w-3.5 h-3.5 text-brand-rose" />
                  Featured on homepage
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div
                  onClick={() => setInStock(!inStock)}
                  className={`relative w-10 h-6 rounded-full transition-colors ${
                    inStock ? "bg-green-500" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                      inStock ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </div>
                <span className="text-sm font-medium text-brand-dark">In Stock</span>
              </label>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {error}
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 rounded-2xl border border-gray-200 text-sm font-semibold text-brand-muted hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-8 py-3 bg-brand-dark hover:bg-brand-rose text-white text-sm font-semibold rounded-2xl transition-all disabled:opacity-50"
            >
              {saving ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saving ? "Saving..." : isEdit ? "Save Changes" : "Add Product"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
