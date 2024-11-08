import { NextResponse } from "next/server";

export async function middleware(request) {
  // Check if image exists.
  const imageRes = await fetch(request.url, { method: "HEAD" });
  if (!imageRes.ok) {
    // Return 404 if image does not exist with cache control headers set to not cache.
    return new NextResponse(null, {
      status: 404,
      headers: { "Cache-Control": "no-store" },
    });
  }

  return NextResponse.next();
}

// Route image requests to our middleware.
export const config = {
  matcher: "/:path(.+\\.(?:png|svg|jpg|jpeg|gif|webp)$)",
};
