import Link from 'next/link';

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

export function Footer({ locale = 'zh', nav }) {
  const base = locale === 'zh' ? '/zh' : '/en';
  const copy = locale === 'zh'
    ? { title: '微算', tagline: '数据不出域，算力就在您身边', rights: '© 微算团队' }
    : { title: 'Wei Suan', tagline: 'Data stays local. Compute at your side.', rights: '© Wei Suan Team' };

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-neutral-900">{copy.title}</p>
            <p className="mt-1 text-sm text-neutral-600">{copy.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer navigation">
            <Link href={base + pathByKey.product} className="text-neutral-600 hover:text-neutral-900">
              {nav.product}
            </Link>
            <Link href={base + pathByKey.technology} className="text-neutral-600 hover:text-neutral-900">
              {nav.technology}
            </Link>
            <Link href={base + pathByKey.about} className="text-neutral-600 hover:text-neutral-900">
              {nav.about}
            </Link>
            <Link href={base + pathByKey.contact} className="text-neutral-600 hover:text-neutral-900">
              {nav.contact}
            </Link>
            <Link href={base + pathByKey.feedback} className="text-neutral-600 hover:text-neutral-900">
              {nav.feedback}
            </Link>
          </nav>
        </div>
        <p className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-500">
          {copy.rights}
        </p>
      </div>
    </footer>
  );
}
