import fs from 'node:fs';

const path = 'TEST_REPORT.md';
let t = fs.readFileSync(path, 'utf8');
t = t.replace(/---\r?\n\r?\n## Phase B[\s\S]*?---\r?\n(?=## 第)/g, '---\n\n');
t = t.replace(/## Phase B[\s\S]*?---\r?\n(?=## 第)/g, '');
const tail = `
## Phase B — 生产 https://miacroai-web-next.netlify.app（阻塞，未执行 10 轮）

**状态**：2026-05-30 探测未通过，十轮循环未启动。

| 探测项 | 结果 |
|--------|------|
| GET /api/data | 307 → /zh/api/data |
| wait-deploy 300s | 指纹未变 |
| git push 87819c9 | 未触发 miacroai-web-next 部署 |
| Playwright api-data (prod) | 6/6 失败 |

---
`;
if (!t.includes('## Phase B')) {
  t = t.trimEnd() + tail;
}
fs.writeFileSync(path, t, 'utf8');
console.log('Fixed TEST_REPORT.md');
