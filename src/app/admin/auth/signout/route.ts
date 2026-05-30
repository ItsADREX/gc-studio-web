import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  const { origin } = new URL(request.url);
  return NextResponse.redirect(`${origin}/admin/login`);
}
