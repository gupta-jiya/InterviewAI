console.log("MIDDLEWARE: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: ["/:path*"], // This matches all routes
};