import { getTranslations } from '../../../lib/translations';

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  return {
    title: locale === 'zh' ? '解决方案 - 微算' : 'Solutions - Wei Suan',
    description: locale === 'zh' ? '制造、医疗、金融、汽车等场景' : 'Manufacturing, healthcare, finance, automotive and more.',
  };
}

export default async function SolutionsPage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const isZh = locale === 'zh';

  const sectors = isZh
    ? [
        { title: '制造业', desc: 'AI 视觉质检、预测性维护、数字孪生、工艺优化。数据不出厂。' },
        { title: '医疗健康', desc: '医学影像 AI、电子病历智能化、药物研发。数据不出院。' },
        { title: '金融', desc: '智能风控、反欺诈、智能投顾、合规审计。数据合规本地化。' },
        { title: '汽车产业链', desc: '智能网联、智能驾驶、新能源安全、智能制造、汽车金融。' },
      ]
    : [
        { title: 'Manufacturing', desc: 'AI vision QC, predictive maintenance, digital twin. Data stays on-premises.' },
        { title: 'Healthcare', desc: 'Medical imaging AI, EHR intelligence, drug discovery. Data stays in-hospital.' },
        { title: 'Finance', desc: 'Risk control, anti-fraud, robo-advisory, compliance. Data stays local.' },
        { title: 'Automotive', desc: 'Connected vehicle, ADAS, EV safety, smart manufacturing.' },
      ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {t.nav.solutions}
      </h1>
      <p className="mt-4 text-xl text-neutral-600">
        {isZh ? '数据不出域，满足各行业合规与安全需求。' : 'Data stays local. Meet compliance and security across industries.'}
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {sectors.map((s, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-neutral-900">{s.title}</h2>
            <p className="mt-2 text-neutral-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
