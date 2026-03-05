'use client';

import { useState } from 'react';

export function FeedbackFormClient({ locale }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const isZh = locale === 'zh';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');
    setError(null);
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus('ok');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setError(data.message || res.statusText || (isZh ? '提交失败' : 'Submit failed'));
      }
    } catch (err) {
      setStatus('error');
      setError(err.message || (isZh ? '网络错误' : 'Network error'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="fb-name" className="block text-sm font-medium text-neutral-700">
          {isZh ? '姓名' : 'Name'} *
        </label>
        <input
          id="fb-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input mt-1 w-full"
        />
      </div>
      <div>
        <label htmlFor="fb-email" className="block text-sm font-medium text-neutral-700">
          {isZh ? '邮箱' : 'Email'}
        </label>
        <input
          id="fb-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input mt-1 w-full"
        />
      </div>
      <div>
        <label htmlFor="fb-msg" className="block text-sm font-medium text-neutral-700">
          {isZh ? '留言' : 'Message'} *
        </label>
        <textarea
          id="fb-msg"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input mt-1 w-full"
        />
      </div>
      <button type="submit" disabled={status === 'pending'} className="btn">
        {status === 'pending' ? (isZh ? '提交中…' : 'Submitting…') : (isZh ? '提交' : 'Submit')}
      </button>
      {status === 'ok' && (
        <p className="text-sm text-green-600">{isZh ? '提交成功，感谢您的反馈。' : 'Submitted. Thank you.'}</p>
      )}
      {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
    </form>
  );
}
