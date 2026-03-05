'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const pathname = usePathname();
  const locale = pathname?.startsWith('/en') ? 'en' : 'zh';
  const isZh = locale === 'zh';

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setMessages((m) => [...m, { role: 'user', content: text }]);
    setLoading(true);
    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, locale }),
      });
      const data = await res.json();
      const reply = data.reply || (isZh ? '暂无回复' : 'No reply');
      const links = data.suggestedLinks || [];
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: reply, suggestedLinks: links },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: isZh ? '请求失败，请重试。' : 'Request failed. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition hover:bg-neutral-800"
        aria-label={isZh ? 'AI 客服' : 'AI assistant'}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[420px] w-[380px] flex-col rounded-lg border border-neutral-200 bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
            <span className="font-semibold text-neutral-900">
              {isZh ? 'AI 客服' : 'AI Assistant'}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-neutral-500 hover:text-neutral-700"
              aria-label={isZh ? '关闭' : 'Close'}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <p className="text-sm text-neutral-500">
                {isZh ? '输入您的问题，可为您解答并推荐相关页面。' : 'Ask a question. I can answer and suggest pages.'}
              </p>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.role === 'user' ? 'text-right' : 'text-left'}
              >
                <div
                  className={
                    msg.role === 'user'
                      ? 'inline-block rounded-lg bg-neutral-900 px-3 py-2 text-sm text-white'
                      : 'inline-block rounded-lg bg-neutral-100 px-3 py-2 text-sm text-neutral-900'
                  }
                >
                  {msg.content}
                </div>
                {msg.suggestedLinks?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {msg.suggestedLinks.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        className="rounded border border-neutral-300 bg-white px-2 py-1 text-xs text-neutral-700 hover:bg-neutral-50"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <p className="text-sm text-neutral-500">{isZh ? '思考中…' : 'Thinking…'}</p>
            )}
            <div ref={bottomRef} />
          </div>
          <div className="border-t border-neutral-200 p-3">
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isZh ? '输入消息…' : 'Type a message…'}
                className="input flex-1"
              />
              <button type="submit" disabled={loading} className="btn">
                {isZh ? '发送' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
