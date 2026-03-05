export default function robots() {
  const base = process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://example.com';
  const origin = String(base).startsWith('http') ? base : `https://${base}`;
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${origin}/sitemap.xml`,
  };
}
