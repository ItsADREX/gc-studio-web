import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { password } = await request.json();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.error("[admin/login] ADMIN_PASSWORD env var is not set");
    return NextResponse.json(
      { error: "Admin password not configured on server." },
      { status: 503 }
    );
  }

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return NextResponse.json({ ok: true });
}
