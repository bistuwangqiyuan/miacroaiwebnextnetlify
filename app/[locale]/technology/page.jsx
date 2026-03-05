import { getTranslations } from '../../../lib/translations';

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  return {
    title: locale === 'zh' ? '技术 - 微算' : 'Technology - Wei Suan',
    description: locale === 'zh' ? '存算分离架构与EBOF全闪存储' : 'Compute-storage disaggregation and EBOF all-flash storage.',
  };
}

export default async function TechnologyPage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const isZh = locale === 'zh';

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {t.nav.technology}
      </h1>
      <p className="mt-4 text-xl text-neutral-600">
        {isZh ? '存算分离 + EBOF全闪存储，国内唯一通过硬件加速全闪实现算力加速。' : 'Compute-storage disaggregation + EBOF all-flash. The only team in China achieving compute acceleration via hardware-accelerated all-flash.'}
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900">
          {isZh ? '存算分离架构' : 'Compute-storage disaggregation'}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li>{isZh ? 'NVMe-oF 协议：计算与存储物理解耦' : 'NVMe-oF: physical decoupling of compute and storage'}</li>
          <li>{isZh ? 'RoCEv2 高速互联' : 'RoCEv2 high-speed interconnect'}</li>
          <li>{isZh ? 'IPv6 动态地址编码，节点身份与地址一体化' : 'IPv6 dynamic addressing, node identity and address unified'}</li>
          <li>{isZh ? 'SDN 智能调度' : 'SDN intelligent scheduling'}</li>
        </ul>
        <p className="mt-2 text-sm text-neutral-500">
          {isZh ? '交互延迟 ≤100μs · 集群带宽 ≥100Gbps · 扩容周期 ≤4h' : 'Latency ≤100μs · Bandwidth ≥100Gbps · Expansion ≤4h'}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900">
          {isZh ? 'EBOF 全闪存储' : 'EBOF all-flash storage'}
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-neutral-600">
          <li>{isZh ? 'PCIe Gen5 无网关分布式存储池' : 'PCIe Gen5 gateway-free distributed storage pool'}</li>
          <li>{isZh ? '8+2 EC 纠删码，20% 冗余' : '8+2 EC erasure coding, 20% redundancy'}</li>
          <li>{isZh ? '智能数据迁移，寿命提升 ≥20%' : 'Smart migration, lifespan +20%'}</li>
        </ul>
        <p className="mt-2 text-sm text-neutral-500">
          {isZh ? 'IOPS ≥100万 · 带宽 ≥56GB/s · 可靠性 99.9999%' : 'IOPS ≥1M · Bandwidth ≥56GB/s · 99.9999% durability'}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-900">
          {isZh ? '华为对标（120万元同成本）' : 'Huawei benchmark (same cost)'}
        </h2>
        <table className="mt-4 w-full border border-neutral-200 text-left text-sm">
          <thead>
            <tr className="bg-neutral-50">
              <th className="border-b border-neutral-200 p-3 font-semibold">{isZh ? '指标' : 'Metric'}</th>
              <th className="border-b border-neutral-200 p-3 font-semibold">{isZh ? '提升' : 'Improvement'}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border-b border-neutral-100 p-3">{isZh ? '数据加载时间' : 'Data load time'}</td><td className="border-b border-neutral-100 p-3">{isZh ? '降低 72%' : '-72%'}</td></tr>
            <tr><td className="border-b border-neutral-100 p-3">{isZh ? '吞吐量' : 'Throughput'}</td><td className="border-b border-neutral-100 p-3">{isZh ? '提升 64%' : '+64%'}</td></tr>
            <tr><td className="border-b border-neutral-100 p-3">{isZh ? '三年总成本' : '3Y TCO'}</td><td className="border-b border-neutral-100 p-3">{isZh ? '节省 30%+' : '-30%+'}</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
