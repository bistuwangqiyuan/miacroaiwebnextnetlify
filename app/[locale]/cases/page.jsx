import { getTranslations } from '../../../lib/translations';

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  return {
    title: locale === 'zh' ? '案例 - 微算' : 'Cases - Wei Suan',
    description: locale === 'zh' ? '北信科、华为、中国移动、亚信等落地案例' : 'BUPT, Huawei, China Mobile, AsiaInfo case studies.',
  };
}

export default async function CasesPage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const isZh = locale === 'zh';

  const cases = isZh
    ? [
        { name: '北京信息科技大学', period: '72小时', result: '百人并发、85% 利用率、学生获奖率 +30%' },
        { name: '华为算力中心', period: '48小时', result: '数据互通 +30%、模型加载缩短 72%' },
        { name: '中国移动', period: '—', result: '已签订 100 万元以上微算设备合同' },
        { name: '亚信科技', period: '—', result: '定制多套微算设备，行业解决方案' },
      ]
    : [
        { name: 'Beijing Information Science & Technology University', period: '72h', result: '100+ concurrent users, 85% utilization, award rate +30%' },
        { name: 'Huawei Compute Center', period: '48h', result: 'Data interconnect +30%, model load -72%' },
        { name: 'China Mobile', period: '—', result: 'Contract >¥1M Wei Suan equipment' },
        { name: 'AsiaInfo', period: '—', result: 'Custom multi-set deployment, industry solutions' },
      ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {t.nav.cases}
      </h1>
      <p className="mt-4 text-xl text-neutral-600">
        {isZh ? '48–72 小时交钥匙交付，热插拔扩容不中断。' : '48–72h turnkey delivery. Hot-plug expansion with zero downtime.'}
      </p>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border border-neutral-200 text-left text-sm">
          <thead>
            <tr className="bg-neutral-50">
              <th className="border-b border-neutral-200 p-3 font-semibold">{isZh ? '客户' : 'Customer'}</th>
              <th className="border-b border-neutral-200 p-3 font-semibold">{isZh ? '部署周期' : 'Deployment'}</th>
              <th className="border-b border-neutral-200 p-3 font-semibold">{isZh ? '核心成效' : 'Outcome'}</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c, i) => (
              <tr key={i}>
                <td className="border-b border-neutral-100 p-3">{c.name}</td>
                <td className="border-b border-neutral-100 p-3">{c.period}</td>
                <td className="border-b border-neutral-100 p-3">{c.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
