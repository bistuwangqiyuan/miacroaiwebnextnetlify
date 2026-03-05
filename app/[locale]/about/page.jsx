import { getTranslations } from '../../../lib/translations';

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  return {
    title: locale === 'zh' ? '关于我们 - 微算' : 'About - Wei Suan',
    description: locale === 'zh' ? '团队、资质与落地案例' : 'Team, certifications and case studies.',
  };
}

export default async function AboutPage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const isZh = locale === 'zh';

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {t.nav.about}
      </h1>
      <p className="mt-4 text-xl text-neutral-600">
        {isZh ? '国内唯一通过硬件加速全闪存储实现算力加速的团队。' : 'The only team in China achieving compute acceleration via hardware-accelerated all-flash storage.'}
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900">{isZh ? '团队' : 'Team'}</h2>
        <ul className="mt-4 space-y-2 text-neutral-600">
          <li>{isZh ? '项目负责人：孟坤（北京信息科技大学副教授）' : 'Lead: Meng Kun (Associate Professor, BUPT)'}</li>
          <li>{isZh ? '技术审核：王启源 教授（专家顾问）' : 'Technical review: Prof. Wang Qiyuan (Advisor)'}</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900">{isZh ? '资质认证' : 'Certifications'}</h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li>{isZh ? '华为昇腾 AI 处理器兼容认证' : 'Huawei Ascend AI processor compatible'}</li>
          <li>{isZh ? '华为鲲鹏通用计算平台兼容认证' : 'Huawei Kunpeng platform compatible'}</li>
          <li>{isZh ? '国内 90%+ GPU 适配（寒武纪/英伟达等）' : '90%+ domestic GPU support (Cambricon, NVIDIA, etc.)'}</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900">{isZh ? '合作单位' : 'Partners'}</h2>
        <p className="mt-4 text-neutral-600">
          {isZh ? '华为、寒武纪、英伟达、北京大学、香港科技大学、北京信息科技大学等。' : 'Huawei, Cambricon, NVIDIA, Peking University, HKUST, BUPT and more.'}
        </p>
      </section>
    </div>
  );
}
