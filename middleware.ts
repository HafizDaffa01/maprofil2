import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isMobileUserAgent } from "@/lib/device";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const pathname = request.nextUrl.pathname;

  const isMobile = isMobileUserAgent(userAgent);
  const isMobileRoute = pathname.startsWith("/m");

  if (isMobile && !isMobileRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/m";
    return NextResponse.redirect(url);
  }

  if (!isMobile && isMobileRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/m/:path*"],
};