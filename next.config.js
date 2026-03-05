import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  redirects() {
    return [
      { source: '/home', destination: '/zh', permanent: true },
    ];
  },
};

export default nextConfig;
