'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AuthStatus } from './auth-status';

const navKeys = [
  'home',
  'product',
  'technology',
  'solutions',
  'about',
  'cases',
  'partners',
  'data',
  'contact',
  'feedback',
];

const pathByKey = {
  home: '',
  product: '/product',
  technology: '/technology',
  solutions: '/solutions',
  about: '/about',
  cases: '/cases',
  partners: '/partners',
  data: '/data',
  contact: '/contact',
  feedback: '/feedback',
};

export function Header({ locale = 'zh', nav, common }) {
  const pathname = usePathname();
  const base = locale === 'zh' ? '/zh' : '/en';

  const switchUrl = (() => {
    if (!pathname) return locale === 'zh' ? '/en' : '/zh';
    const fromZh = pathname.startsWith('/zh') ? pathname.slice(3) || '' : '';
    const fromEn = pathname.startsWith('/en') ? pathname.slice(3) || '' : '';
    return locale === 'zh' ? `/en${fromZh}` : `/zh${fromEn}`;
  })();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={base || '/'} className="text-xl font-semibold tracking-tight text-neutral-900">
          {locale === 'zh' ? '微算' : 'Wei Suan'}
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Main navigation">
          {navKeys.map((key) => {
            const href = base + pathByKey[key];
            const isActive = pathname === href || (pathByKey[key] && pathname.startsWith(href));
            return (
              <Link
                key={key}
                href={href}
                className={`rounded-md px-2 py-2 text-sm font-medium transition-colors sm:px-3 ${
                  isActive ? 'text-neutral-900 bg-neutral-100' : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                {nav[key]}
              </Link>
            );
          })}
          <span className="mx-2 h-4 w-px bg-neutral-200" aria-hidden />
          <AuthStatus locale={locale} common={common} />
          <Link
            href={switchUrl}
            className="rounded-md px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 sm:px-3"
          >
            {common?.localeSwitch ?? (locale === 'zh' ? 'English' : '中文')}
          </Link>
        </nav>
      </div>
    </header>
  );
}
