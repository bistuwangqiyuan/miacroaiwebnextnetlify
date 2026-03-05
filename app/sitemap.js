export default function sitemap() {
  let origin = process.env.URL || process.env.DEPLOY_PRIME_URL || process.env.VERCEL_URL || 'example.com';
  if (!origin.startsWith('http')) origin = `https://${origin}`;
  const locales = ['zh', 'en'];
  const paths = ['', '/product', '/technology', '/solutions', '/about', '/cases', '/partners', '/data', '/contact', '/feedback'];
  const urls = [];
  for (const locale of locales) {
    for (const path of paths) {
      urls.push({
        url: `${origin}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'daily' : 'weekly',
        priority: path === '' ? 1 : 0.8,
      });
    }
  }
  return urls;
}
