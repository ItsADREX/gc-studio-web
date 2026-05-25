"use client";

import { useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { Mail, Send, CheckCircle, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const ADMIN_EMAIL = "salamigift25@gmail.com";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email.toLowerCase().trim() !== ADMIN_EMAIL) {
      setError("Access denied. This admin panel is restricted.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/auth/callback`,
      },
    });

    if (authError) {
      setError(authError.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-nude via-white to-brand-pink/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-brand-nude">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-brand-pink/40 mb-4">
              <Image
                src="/images/logo.png"
                alt="GC Studio"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-display text-2xl font-bold text-brand-dark">
              GC Studio Admin
            </h1>
            <p className="text-brand-muted text-sm mt-1 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              Restricted access
            </p>
          </div>

          {sent ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="font-display text-xl font-semibold text-brand-dark">
                Check your email!
              </h2>
              <p className="text-brand-muted text-sm leading-relaxed">
                A magic login link has been sent to{" "}
                <span className="font-semibold text-brand-rose">{email}</span>.
                Click the link to access the admin panel.
              </p>
              <p className="text-brand-muted text-xs">
                The link expires in 1 hour. Check your spam folder if you
                don&apos;t see it.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-2">
                  Admin Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-2xl border border-brand-nude bg-white text-sm text-brand-dark placeholder-brand-muted focus:outline-none focus:border-brand-rose transition-colors"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-xl">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand-dark hover:bg-brand-rose text-white font-semibold rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {loading ? "Sending..." : "Send Magic Link"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
