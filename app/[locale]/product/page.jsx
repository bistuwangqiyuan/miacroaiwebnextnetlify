import Link from 'next/link';
import { getTranslations } from '../../../lib/translations';

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  return {
    title: locale === 'zh' ? '产品 - 微算' : 'Product - Wei Suan',
    description: locale === 'zh' ? '微算基础版、专业版、企业版产品矩阵' : 'Wei Suan product matrix: Basic, Professional, Enterprise.',
  };
}

export default async function ProductPage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const base = locale === 'zh' ? '/zh' : '/en';
  const isZh = locale === 'zh';

  const products = isZh
    ? [
        { name: '微算基础版（微算-B）', spec: ['2×通用CPU + 可选GPU', '4×3.84TB NVMe SSD', '25G/100G以太网', '可达8 PFLOPS', '小型AI推理、教学实训'], price: '约100万元（试点期免费赠送）' },
        { name: '微算专业版（微算-P）', spec: ['多CPU+多GPU集群', '16×3.84TB EBOF全闪', '100G RDMA RoCEv2', '可达12 PFLOPS', '中型AI训练与推理'], price: '200-500万元' },
        { name: '微算企业版（微算-E）', spec: ['多节点异构集群', 'PB级分布式存储', '200G/400G互联', '50+ PFLOPS', '大规模训练、HPC'], price: '500万元以上（定制）' },
      ]
    : [
        { name: 'Wei Suan Basic (B)', spec: ['2× CPU + optional GPU', '4×3.84TB NVMe SSD', '25G/100G Ethernet', 'Up to 8 PFLOPS', 'Small-scale AI, training'], price: '~¥1M (free in pilot)' },
        { name: 'Wei Suan Professional (P)', spec: ['Multi-CPU+GPU cluster', '16×3.84TB EBOF', '100G RDMA RoCEv2', 'Up to 12 PFLOPS', 'Mid-scale training'], price: '¥2–5M' },
        { name: 'Wei Suan Enterprise (E)', spec: ['Multi-node heterogeneous', 'PB-scale storage', '200G/400G', '50+ PFLOPS', 'Large-scale HPC'], price: '¥5M+ (custom)' },
      ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {t.nav.product}
      </h1>
      <p className="mt-4 text-xl text-neutral-600">
        {isZh ? '开箱即用、一机运行、一键启动。从单台到万台线性扩展。' : 'Turnkey, one-box, one-click. Scale from one to ten thousand nodes.'}
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {products.map((p, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900">{p.name}</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
              {p.spec.map((s, j) => (
                <li key={j}>{s}</li>
              ))}
            </ul>
            <p className="mt-4 font-medium text-neutral-900">{p.price}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-neutral-500">
        {isZh ? '融资租赁：启动费用仅需 5,000元/月' : 'Leasing: from ¥5,000/month.'}
      </p>
      <Link href={`${base}/contact`} className="btn mt-6">
        {t.common.contactUs}
      </Link>
    </div>
  );
}
