import { getTranslations } from '../../../lib/translations';

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  return {
    title: locale === 'zh' ? '合作伙伴 - 微算' : 'Partners - Wei Suan',
    description: locale === 'zh' ? '华为、寒武纪、英伟达与事业合伙人' : 'Huawei, Cambricon, NVIDIA and venture partners.',
  };
}

export default async function PartnersPage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const isZh = locale === 'zh';

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {t.nav.partners}
      </h1>
      <p className="mt-4 text-xl text-neutral-600">
        {isZh ? '硬件生态与事业合伙人网络。' : 'Hardware ecosystem and venture partner network.'}
      </p>
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900">{isZh ? '硬件与生态' : 'Hardware & ecosystem'}</h2>
        <p className="mt-4 text-neutral-600">
          {isZh ? '华为（昇腾生态联合创新）、寒武纪（MLU370 适配）、英伟达（A100 适配）、北京大学（分布式存储联合研发）、香港科技大学（多模态训练验证）。' : 'Huawei (Ascend), Cambricon (MLU370), NVIDIA (A100), Peking University, HKUST and more.'}
        </p>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900">{isZh ? '事业合伙人' : 'Venture partners'}</h2>
        <p className="mt-4 text-neutral-600">
          {isZh ? '零加盟费，免费获得 100 套微算设备（价值约 1 亿元），快速进入 AI 算力服务。可拓展至全省、全国。' : 'Zero franchise fee. Free access to 100 Wei Suan units (~¥100M). Scale to province and nationwide.'}
        </p>
      </section>
    </div>
  );
}
