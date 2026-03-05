'use client';

import { useState, useEffect } from 'react';

export function AuthStatus({ locale, common }) {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let GoTrue;
    try {
      GoTrue = require('gotrue-js').default;
    } catch {
      setLoaded(true);
      return;
    }
    const apiUrl = window.location.origin + '/.netlify/identity';
    const auth = new GoTrue({ APIUrl: apiUrl, setCookie: true });
    const u = auth.currentUser();
    setUser(u ?? null);
    setLoaded(true);
  }, []);

  const isZh = locale === 'zh';
  if (!loaded) return null;
  if (user) {
    return (
      <span className="text-sm text-neutral-600">
        {user.email}
        <button
          type="button"
          className="ml-2 text-neutral-500 hover:text-neutral-900"
          onClick={() => {
            let GoTrue;
            try {
              GoTrue = require('gotrue-js').default;
            } catch { return; }
            const auth = new GoTrue({ APIUrl: window.location.origin + '/.netlify/identity' });
            auth.signout();
            setUser(null);
          }}
        >
          {common?.logout ?? (isZh ? '退出' : 'Log out')}
        </button>
      </span>
    );
  }
  return (
    <a
      href="/.netlify/identity"
      className="rounded-md px-2 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 sm:px-3"
    >
      {common?.login ?? (isZh ? '登录' : 'Log in')}
    </a>
  );
}
