export const LOCALES = ['zh', 'en'] as const;

export const PAGES = [
  '',
  '/product',
  '/technology',
  '/solutions',
  '/about',
  '/cases',
  '/partners',
  '/data',
  '/contact',
  '/feedback',
] as const;

export const BRAND = { zh: '微算', en: 'Wei Suan' } as const;

export function pageUrl(locale: string, path: string): string {
  return `/${locale}${path}`;
}

// A genuine Next.js 404 sets the document <title> to this. The phrase also
// appears inside the RSC flight payload of every page (the notFound boundary),
// so only the <title> / page title is a reliable not-found signal.
export const NOT_FOUND_TITLE = '404: This page could not be found';

// Valid page titles always contain a brand token: zh pages use "微算"
// (e.g. "产品 - 微算"), en pages use "Wei Suan" (e.g. "Product - Wei Suan").
// A genuine 404 title ("404: This page could not be found") matches neither.
export const TITLE_BRAND = /微算|Wei Suan/;
