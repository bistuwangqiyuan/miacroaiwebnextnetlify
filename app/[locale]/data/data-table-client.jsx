'use client';

import { useState, useEffect, useCallback } from 'react';

export function DataTableClient({ locale }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [source, setSource] = useState('');
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState('created_at');
  const [order, setOrder] = useState('desc');
  const pageSize = 10;
  const isZh = locale === 'zh';

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const q = new URLSearchParams({
        page: String(page),
        pageSize: String(pageSize),
        sort: sort || 'created_at',
        order: order || 'desc',
      });
      if (source) q.set('source', source);
      if (keyword) q.set('keyword', keyword);
      const res = await fetch(`/api/data?${q}`);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      setRows(data.rows || []);
      setTotal(data.total ?? 0);
    } catch (e) {
      setRows([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [page, pageSize, source, keyword, sort, order]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder={isZh ? '来源' : 'Source'}
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="input max-w-[180px]"
        />
        <input
          type="text"
          placeholder={isZh ? '关键词' : 'Keyword'}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="input max-w-[180px]"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="input max-w-[140px]"
        >
          <option value="created_at">{isZh ? '时间' : 'Time'}</option>
          <option value="source">{isZh ? '来源' : 'Source'}</option>
          <option value="title">{isZh ? '标题' : 'Title'}</option>
        </select>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="input max-w-[100px]"
        >
          <option value="desc">{isZh ? '降序' : 'Desc'}</option>
          <option value="asc">{isZh ? '升序' : 'Asc'}</option>
        </select>
        <button type="button" onClick={() => setPage(1) || fetchData()} className="btn">
          {isZh ? '筛选' : 'Filter'}
        </button>
      </div>
      {loading ? (
        <p className="mt-6 text-neutral-500">{isZh ? '加载中…' : 'Loading…'}</p>
      ) : (
        <>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border border-neutral-200 text-left text-sm">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="border-b border-neutral-200 p-3 font-semibold">ID</th>
                  <th className="border-b border-neutral-200 p-3 font-semibold">{isZh ? '来源' : 'Source'}</th>
                  <th className="border-b border-neutral-200 p-3 font-semibold">{isZh ? '标题' : 'Title'}</th>
                  <th className="border-b border-neutral-200 p-3 font-semibold">{isZh ? '时间' : 'Time'}</th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-4 text-center text-neutral-500">
                      {isZh ? '暂无数据' : 'No data'}
                    </td>
                  </tr>
                ) : (
                  rows.map((r) => (
                    <tr key={r.id}>
                      <td className="border-b border-neutral-100 p-3">{r.id}</td>
                      <td className="border-b border-neutral-100 p-3">{r.source ?? '—'}</td>
                      <td className="border-b border-neutral-100 p-3">{r.title ?? '—'}</td>
                      <td className="border-b border-neutral-100 p-3">{r.created_at ? new Date(r.created_at).toLocaleDateString() : '—'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-neutral-500">
              {isZh ? `共 ${total} 条` : `Total ${total}`}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => setPage((p) => p - 1)}
                className="btn"
              >
                {isZh ? '上一页' : 'Prev'}
              </button>
              <span className="py-2 text-sm">
                {page} / {totalPages}
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="btn"
              >
                {isZh ? '下一页' : 'Next'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
