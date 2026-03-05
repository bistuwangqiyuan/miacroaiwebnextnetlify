import { getTranslations } from '../../../lib/translations';
import { DataTableClient } from './data-table-client';

export async function generateMetadata(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  return {
    title: locale === 'zh' ? '数据 - 微算' : 'Data - Wei Suan',
    description: locale === 'zh' ? '按来源、时间、关键词筛选与排序' : 'Filter and sort by source, time, keywords.',
  };
}

export default async function DataPage(props) {
  const params = props.params != null ? await props.params : { locale: 'zh' };
  const locale = params.locale ?? 'zh';
  const t = getTranslations(locale);
  const isZh = locale === 'zh';

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        {t.nav.data}
      </h1>
      <p className="mt-4 text-xl text-neutral-600">
        {isZh ? '支持按来源、时间、关键词筛选与排序，分页加载。' : 'Filter by source, time, keywords. Sort and paginate.'}
      </p>
      <DataTableClient locale={locale} />
    </div>
  );
}
