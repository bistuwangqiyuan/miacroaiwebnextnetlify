import Link from 'next/link';
import { getTranslations } from '../../../lib/translations';

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  return {
    title: locale === 'zh' ? '联系我们 - 微算' : 'Contact - Wei Suan',
    description: locale === 'zh' ? '联系微算团队与用户反馈' : 'Contact Wei Suan and submit feedback.',
  };
}

export default async function ContactPage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const base = locale === 'zh' ? '/zh' : '/en';
  const isZh = locale === 'zh';

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {t.nav.contact}
      </h1>
      <p className="mt-4 text-xl text-neutral-600">
        {isZh ? '欢迎咨询产品、解决方案与合伙合作。' : 'Inquiries on product, solutions and partnership welcome.'}
      </p>
      <div className="mt-8 rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-neutral-900">{t.nav.feedback}</h2>
        <p className="mt-2 text-neutral-600">
          {isZh ? '通过用户反馈表单提交您的意见或需求，我们会尽快回复。' : 'Submit your feedback or requests via the feedback form.'}
        </p>
        <Link href={`${base}/feedback`} className="btn mt-4">
          {t.nav.feedback}
        </Link>
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        {isZh ? '微算团队 · 数据不出域，算力就在您身边' : 'Wei Suan Team · Data stays local, compute at your side.'}
      </p>
    </div>
  );
}
