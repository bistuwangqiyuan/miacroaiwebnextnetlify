-- Run with: psql $NETLIFY_DATABASE_URL -f scripts/migrations/001_initial.sql
-- Or use netlify env:get NETLIFY_DATABASE_URL and run locally after linking site.

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

-- Seed a few rows for data page if empty
INSERT INTO content_items (source, title, summary, keywords, created_at)
SELECT '微算官网', '产品介绍', '微算产品矩阵与交付方式', '产品,微算', NOW() - INTERVAL '1 day'
WHERE NOT EXISTS (SELECT 1 FROM content_items LIMIT 1);

INSERT INTO content_items (source, title, summary, keywords, created_at)
SELECT '技术文档', '存算分离架构', 'NVMe-oF与RoCEv2', '技术,存算分离', NOW() - INTERVAL '2 days'
WHERE (SELECT COUNT(*) FROM content_items) < 2;
