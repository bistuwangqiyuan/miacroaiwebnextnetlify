const locales = ['zh', 'en'];
const defaultLocale = 'zh';

export function getLocaleFromPath(pathname) {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (locales.includes(first)) return first;
  return null;
}

export function getPreferredLocale(request) {
  const cookie = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookie && locales.includes(cookie)) return cookie;
  const acceptLang = request.headers.get('accept-language') || '';
  const preferred = acceptLang.split(',').map(s => s.split(';')[0].trim().toLowerCase());
  for (const lang of preferred) {
    if (lang.startsWith('zh')) return 'zh';
    if (lang.startsWith('en')) return 'en';
  }
  return defaultLocale;
}

export { locales, defaultLocale };
