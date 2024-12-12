import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const isProduction = process.env.NODE_ENV === "production";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.cookies.set('__vercel_live_token', '', {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    path: '/',
    domain: 'nextjs-dashboard-dev-seven.vercel.app'
  });

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
