import { getTranslations } from '../../../lib/translations';
import { FeedbackFormClient } from './feedback-form-client';

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  return {
    title: locale === 'zh' ? '用户反馈 - 微算' : 'Feedback - Wei Suan',
    description: locale === 'zh' ? '提交反馈与建议' : 'Submit feedback and suggestions.',
  };
}

export default async function FeedbackPage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const isZh = locale === 'zh';

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {t.nav.feedback}
      </h1>
      <p className="mt-4 text-xl text-neutral-600">
        {isZh ? '请填写以下表单提交反馈，不支持文件上传。' : 'Submit your feedback below. File upload is not supported.'}
      </p>
      <FeedbackFormClient locale={locale} />
    </div>
  );
}
