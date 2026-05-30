CREATE TABLE IF NOT EXISTS feedback (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  user_id UUID
);

CREATE TABLE IF NOT EXISTS content_items (
  id BIGSERIAL PRIMARY KEY,
  source TEXT,
  title TEXT,
  summary TEXT,
  keywords TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO content_items (source, title, summary, keywords, created_at)
SELECT v.source, v.title, v.summary, v.keywords, NOW() - (v.days || ' days')::interval
FROM (VALUES
  ('WeiSuan Official', 'Product Overview', 'WeiSuan product matrix and delivery model', 'product,weisuan', 1),
  ('WeiSuan Official', 'Edge Compute Center', 'Data stays local micro compute center', 'edge,compute', 2),
  ('Tech Docs', 'Storage Compute Separation', 'NVMe-oF and RoCEv2 architecture', 'tech,architecture', 3),
  ('Tech Docs', 'Data Security Model', 'Local-first data privacy design', 'security,privacy', 4),
  ('Tech Docs', 'Performance Benchmark', 'Latency and throughput numbers', 'benchmark,performance', 5),
  ('Industry News', 'AI Compute Trends 2026', 'Distributed inference at the edge', 'ai,trends', 6),
  ('Industry News', 'Privacy Regulation Update', 'New data residency requirements', 'policy,privacy', 7),
  ('Industry News', 'Edge Market Report', 'Growth of edge computing market', 'market,edge', 8),
  ('Partner Updates', 'Channel Partner Program', 'How to join the partner network', 'partner,program', 9),
  ('Partner Updates', 'Integration Showcase', 'Reference integration examples', 'partner,integration', 10),
  ('Product Release', 'Release v1.0', 'First general availability release', 'release,v1', 11),
  ('Product Release', 'Release v1.1', 'Performance and stability fixes', 'release,v1.1', 12),
  ('Product Release', 'Release v2.0', 'Major architecture upgrade', 'release,v2', 13),
  ('Case Study', 'Manufacturing Case', 'Edge deployment in a factory', 'case,manufacturing', 14)
) AS v(source, title, summary, keywords, days)
WHERE NOT EXISTS (SELECT 1 FROM content_items);
