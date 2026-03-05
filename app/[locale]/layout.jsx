import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { AIChatWidget } from '../../components/ai-chat-widget';
import { getTranslations } from '../../lib/translations';

export async function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'en' }];
}

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const isZh = locale === 'zh';
  return {
    title: isZh ? '微算 - 数据不出域的微型算力中心' : 'Wei Suan - Edge Micro Compute Center',
    description: isZh
      ? '数据全部存放在您自己的设备中，更安全、更放心。无需上传云端，信息始终掌握在您手里。'
      : 'Your data stays in your own infrastructure. No cloud upload. Deployed on your premises.',
  };
}

export default async function LocaleLayout(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  return (
    <div className="flex flex-col min-h-screen">
      <Header locale={locale} nav={t.nav} common={t.common} />
      <main className="flex-1">{props.children}</main>
      <Footer locale={locale} nav={t.nav} />
      <AIChatWidget />
    </div>
  );
}
