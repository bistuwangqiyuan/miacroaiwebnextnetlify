import { NextResponse } from 'next/server';
import { getLocaleFromPath, getPreferredLocale } from './lib/i18n';

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Skip static assets and Next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/images') ||
    pathname.match(/\.(svg|png|jpg|ico|webp)$/)
  ) {
    return NextResponse.next();
  }

  // Netlify forms and identity
  if (pathname === '/__forms.html' || pathname.startsWith('/.netlify/')) {
    return NextResponse.next();
  }

  const localeInPath = getLocaleFromPath(pathname);

  // No locale in path: redirect to locale-prefixed URL
  if (!localeInPath) {
    const preferred = getPreferredLocale(request);
    const newPath = pathname === '/' ? `/${preferred}` : `/${preferred}${pathname}`;
    const url = request.nextUrl.clone();
    url.pathname = newPath;
    const res = NextResponse.redirect(url);
    res.cookies.set('NEXT_LOCALE', preferred, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.svg|images|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.ico).*)',
  ],
};
