import Link from 'next/link';
import { getTranslations } from '../../lib/translations';

export default async function HomePage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const isZh = locale === 'zh';
  const base = locale === 'zh' ? '/zh' : '/en';

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          {t.home.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-neutral-600">
          {t.home.subtitle}
        </p>
        <div className="mx-auto mt-8 max-w-xl space-y-2 text-neutral-600">
          <p>{t.home.tagline1}</p>
          <p>{t.home.tagline2}</p>
          <p>{t.home.tagline3}</p>
        </div>
        <p className="mt-6 text-sm text-neutral-500">
          {isZh ? '国内唯一通过硬件加速全闪存储实现算力加速的团队' : 'The only team in China achieving compute acceleration via hardware-accelerated all-flash storage.'}
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href={`${base}/product`}
            className="rounded-lg bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-neutral-800"
          >
            {t.home.heroCta}
          </Link>
          <Link
            href={`${base}/contact`}
            className="rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-50"
          >
            {t.common.contactUs}
          </Link>
        </div>
      </section>
      <section className="mt-24 border-t border-neutral-200 pt-16">
        <h2 className="text-2xl font-bold text-neutral-900">{t.home.valueTitle}</h2>
        <p className="mt-4 text-neutral-600">{t.home.slogan}</p>
      </section>
    </div>
  );
}
