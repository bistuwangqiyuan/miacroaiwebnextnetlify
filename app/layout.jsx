import '../styles/globals.css';

export const metadata = {
  title: {
    template: '%s | 微算 Wei Suan',
    default: '微算 - 数据不出域的微型算力中心',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="antialiased bg-neutral-50 text-neutral-900">
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
