import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  const isAdminRoute =
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login") &&
    !request.nextUrl.pathname.startsWith("/admin/auth");

  if (isAdminRoute) {
    const session = request.cookies.get("admin_session");
    if (!session || session.value !== "authenticated") {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next({ request });
}
