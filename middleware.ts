import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set the Vercel live token cookie with appropriate attributes
  response.cookies.set('__vercel_live_token', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    path: '/',
  });

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
