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

export const NEXT_404_MARKER = 'This page could not be found';
