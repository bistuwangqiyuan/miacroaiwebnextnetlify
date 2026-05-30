# 微算官网上线测试报告

本报告由 `scripts/gen-report.mjs` 按轮次累加生成。

## Phase A — netlify dev (http://localhost:8888)
## 第 1 轮 — 2026-05-30T14:59:51.026Z

- 目标 URL: http://localhost:8888
- 部署 commit: `local+db-pg+parseReply`
- 用例: 46/46 通过（全部通过）
- 耗时: 79.6s
- 说明: Phase

全部用例通过。

<details><summary>全部用例明细</summary>

- PASS | api-ai-chat.spec.ts › API /api/ai-chat › does NOT redirect (regression)
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › valid message returns reply string and suggestedLinks array
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › empty message returns 400
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › GET is not allowed (405)
- PASS | api-data.spec.ts › API /api/data › does NOT redirect (regression: middleware must skip /api)
- PASS | api-data.spec.ts › API /api/data › returns JSON with rows array and numeric total
- PASS | api-data.spec.ts › API /api/data › respects pageSize
- PASS | api-data.spec.ts › API /api/data › accepts sort and order params
- PASS | api-data.spec.ts › API /api/data › accepts source and keyword filters
- PASS | api-data.spec.ts › API /api/data › falls back gracefully on invalid sort column
- PASS | api-feedback.spec.ts › API /api/feedback › does NOT redirect (regression)
- PASS | api-feedback.spec.ts › API /api/feedback › valid submission returns ok
- PASS | api-feedback.spec.ts › API /api/feedback › missing required fields returns 400
- PASS | api-feedback.spec.ts › API /api/feedback › GET is not allowed (405)
- PASS | routing.spec.ts › Routing & i18n › root redirects to a locale-prefixed path
- PASS | routing.spec.ts › Routing & i18n › locale home /zh responds 200
- PASS | routing.spec.ts › Routing & i18n › locale home /en responds 200
- PASS | routing.spec.ts › Routing & i18n › page /zh renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › language switch link navigates between locales
- PASS | seo.spec.ts › SEO › robots.txt is reachable and references sitemap
- PASS | seo.spec.ts › SEO › sitemap.xml is reachable and lists locale pages
- PASS | seo.spec.ts › SEO › /zh has html lang, title and description meta
- PASS | seo.spec.ts › SEO › /en has html lang, title and description meta
- PASS | ui-flows.spec.ts › UI flows (real browser) › home loads and header navigation works
- PASS | ui-flows.spec.ts › UI flows (real browser) › AI chat widget opens, sends a message and receives a reply
- PASS | ui-flows.spec.ts › UI flows (real browser) › data page loads table and filter interaction works
- PASS | ui-flows.spec.ts › UI flows (real browser) › feedback form submits successfully

</details>

---

## 第 3 轮 — 2026-05-30T15:02:24.078Z

- 目标 URL: http://localhost:8888
- 部署 commit: `local+db-pg+parseReply`
- 用例: 46/46 通过（全部通过）
- 耗时: 73.0s
- 说明: Phase

全部用例通过。

<details><summary>全部用例明细</summary>

- PASS | api-ai-chat.spec.ts › API /api/ai-chat › does NOT redirect (regression)
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › valid message returns reply string and suggestedLinks array
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › empty message returns 400
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › GET is not allowed (405)
- PASS | api-data.spec.ts › API /api/data › does NOT redirect (regression: middleware must skip /api)
- PASS | api-data.spec.ts › API /api/data › returns JSON with rows array and numeric total
- PASS | api-data.spec.ts › API /api/data › respects pageSize
- PASS | api-data.spec.ts › API /api/data › accepts sort and order params
- PASS | api-data.spec.ts › API /api/data › accepts source and keyword filters
- PASS | api-data.spec.ts › API /api/data › falls back gracefully on invalid sort column
- PASS | api-feedback.spec.ts › API /api/feedback › does NOT redirect (regression)
- PASS | api-feedback.spec.ts › API /api/feedback › valid submission returns ok
- PASS | api-feedback.spec.ts › API /api/feedback › missing required fields returns 400
- PASS | api-feedback.spec.ts › API /api/feedback › GET is not allowed (405)
- PASS | routing.spec.ts › Routing & i18n › root redirects to a locale-prefixed path
- PASS | routing.spec.ts › Routing & i18n › locale home /zh responds 200
- PASS | routing.spec.ts › Routing & i18n › locale home /en responds 200
- PASS | routing.spec.ts › Routing & i18n › page /zh renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › language switch link navigates between locales
- PASS | seo.spec.ts › SEO › robots.txt is reachable and references sitemap
- PASS | seo.spec.ts › SEO › sitemap.xml is reachable and lists locale pages
- PASS | seo.spec.ts › SEO › /zh has html lang, title and description meta
- PASS | seo.spec.ts › SEO › /en has html lang, title and description meta
- PASS | ui-flows.spec.ts › UI flows (real browser) › home loads and header navigation works
- PASS | ui-flows.spec.ts › UI flows (real browser) › AI chat widget opens, sends a message and receives a reply
- PASS | ui-flows.spec.ts › UI flows (real browser) › data page loads table and filter interaction works
- PASS | ui-flows.spec.ts › UI flows (real browser) › feedback form submits successfully

</details>

---

## 第 5 轮 — 2026-05-30T15:04:54.191Z

- 目标 URL: http://localhost:8888
- 部署 commit: `local+db-pg+parseReply`
- 用例: 46/46 通过（全部通过）
- 耗时: 74.2s
- 说明: Phase

全部用例通过。

<details><summary>全部用例明细</summary>

- PASS | api-ai-chat.spec.ts › API /api/ai-chat › does NOT redirect (regression)
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › valid message returns reply string and suggestedLinks array
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › empty message returns 400
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › GET is not allowed (405)
- PASS | api-data.spec.ts › API /api/data › does NOT redirect (regression: middleware must skip /api)
- PASS | api-data.spec.ts › API /api/data › returns JSON with rows array and numeric total
- PASS | api-data.spec.ts › API /api/data › respects pageSize
- PASS | api-data.spec.ts › API /api/data › accepts sort and order params
- PASS | api-data.spec.ts › API /api/data › accepts source and keyword filters
- PASS | api-data.spec.ts › API /api/data › falls back gracefully on invalid sort column
- PASS | api-feedback.spec.ts › API /api/feedback › does NOT redirect (regression)
- PASS | api-feedback.spec.ts › API /api/feedback › valid submission returns ok
- PASS | api-feedback.spec.ts › API /api/feedback › missing required fields returns 400
- PASS | api-feedback.spec.ts › API /api/feedback › GET is not allowed (405)
- PASS | routing.spec.ts › Routing & i18n › root redirects to a locale-prefixed path
- PASS | routing.spec.ts › Routing & i18n › locale home /zh responds 200
- PASS | routing.spec.ts › Routing & i18n › locale home /en responds 200
- PASS | routing.spec.ts › Routing & i18n › page /zh renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › language switch link navigates between locales
- PASS | seo.spec.ts › SEO › robots.txt is reachable and references sitemap
- PASS | seo.spec.ts › SEO › sitemap.xml is reachable and lists locale pages
- PASS | seo.spec.ts › SEO › /zh has html lang, title and description meta
- PASS | seo.spec.ts › SEO › /en has html lang, title and description meta
- PASS | ui-flows.spec.ts › UI flows (real browser) › home loads and header navigation works
- PASS | ui-flows.spec.ts › UI flows (real browser) › AI chat widget opens, sends a message and receives a reply
- PASS | ui-flows.spec.ts › UI flows (real browser) › data page loads table and filter interaction works
- PASS | ui-flows.spec.ts › UI flows (real browser) › feedback form submits successfully

</details>

---

## 第 7 轮 — 2026-05-30T15:07:38.282Z

- 目标 URL: http://localhost:8888
- 部署 commit: `local+db-pg+parseReply`
- 用例: 46/46 通过（全部通过）
- 耗时: 82.8s
- 说明: Phase

全部用例通过。

<details><summary>全部用例明细</summary>

- PASS | api-ai-chat.spec.ts › API /api/ai-chat › does NOT redirect (regression)
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › valid message returns reply string and suggestedLinks array
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › empty message returns 400
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › GET is not allowed (405)
- PASS | api-data.spec.ts › API /api/data › does NOT redirect (regression: middleware must skip /api)
- PASS | api-data.spec.ts › API /api/data › returns JSON with rows array and numeric total
- PASS | api-data.spec.ts › API /api/data › respects pageSize
- PASS | api-data.spec.ts › API /api/data › accepts sort and order params
- PASS | api-data.spec.ts › API /api/data › accepts source and keyword filters
- PASS | api-data.spec.ts › API /api/data › falls back gracefully on invalid sort column
- PASS | api-feedback.spec.ts › API /api/feedback › does NOT redirect (regression)
- PASS | api-feedback.spec.ts › API /api/feedback › valid submission returns ok
- PASS | api-feedback.spec.ts › API /api/feedback › missing required fields returns 400
- PASS | api-feedback.spec.ts › API /api/feedback › GET is not allowed (405)
- PASS | routing.spec.ts › Routing & i18n › root redirects to a locale-prefixed path
- PASS | routing.spec.ts › Routing & i18n › locale home /zh responds 200
- PASS | routing.spec.ts › Routing & i18n › locale home /en responds 200
- PASS | routing.spec.ts › Routing & i18n › page /zh renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › language switch link navigates between locales
- PASS | seo.spec.ts › SEO › robots.txt is reachable and references sitemap
- PASS | seo.spec.ts › SEO › sitemap.xml is reachable and lists locale pages
- PASS | seo.spec.ts › SEO › /zh has html lang, title and description meta
- PASS | seo.spec.ts › SEO › /en has html lang, title and description meta
- PASS | ui-flows.spec.ts › UI flows (real browser) › home loads and header navigation works
- PASS | ui-flows.spec.ts › UI flows (real browser) › AI chat widget opens, sends a message and receives a reply
- PASS | ui-flows.spec.ts › UI flows (real browser) › data page loads table and filter interaction works
- PASS | ui-flows.spec.ts › UI flows (real browser) › feedback form submits successfully

</details>

---

## 第 9 轮 — 2026-05-30T15:10:18.722Z

- 目标 URL: http://localhost:8888
- 部署 commit: `local+db-pg+parseReply`
- 用例: 46/46 通过（全部通过）
- 耗时: 82.3s
- 说明: Phase

全部用例通过。

<details><summary>全部用例明细</summary>

- PASS | api-ai-chat.spec.ts › API /api/ai-chat › does NOT redirect (regression)
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › valid message returns reply string and suggestedLinks array
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › empty message returns 400
- PASS | api-ai-chat.spec.ts › API /api/ai-chat › GET is not allowed (405)
- PASS | api-data.spec.ts › API /api/data › does NOT redirect (regression: middleware must skip /api)
- PASS | api-data.spec.ts › API /api/data › returns JSON with rows array and numeric total
- PASS | api-data.spec.ts › API /api/data › respects pageSize
- PASS | api-data.spec.ts › API /api/data › accepts sort and order params
- PASS | api-data.spec.ts › API /api/data › accepts source and keyword filters
- PASS | api-data.spec.ts › API /api/data › falls back gracefully on invalid sort column
- PASS | api-feedback.spec.ts › API /api/feedback › does NOT redirect (regression)
- PASS | api-feedback.spec.ts › API /api/feedback › valid submission returns ok
- PASS | api-feedback.spec.ts › API /api/feedback › missing required fields returns 400
- PASS | api-feedback.spec.ts › API /api/feedback › GET is not allowed (405)
- PASS | routing.spec.ts › Routing & i18n › root redirects to a locale-prefixed path
- PASS | routing.spec.ts › Routing & i18n › locale home /zh responds 200
- PASS | routing.spec.ts › Routing & i18n › locale home /en responds 200
- PASS | routing.spec.ts › Routing & i18n › page /zh renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /zh/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/product renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/technology renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/solutions renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/about renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/cases renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/partners renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/data renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/contact renders without 404
- PASS | routing.spec.ts › Routing & i18n › page /en/feedback renders without 404
- PASS | routing.spec.ts › Routing & i18n › language switch link navigates between locales
- PASS | seo.spec.ts › SEO › robots.txt is reachable and references sitemap
- PASS | seo.spec.ts › SEO › sitemap.xml is reachable and lists locale pages
- PASS | seo.spec.ts › SEO › /zh has html lang, title and description meta
- PASS | seo.spec.ts › SEO › /en has html lang, title and description meta
- PASS | ui-flows.spec.ts › UI flows (real browser) › home loads and header navigation works
- PASS | ui-flows.spec.ts › UI flows (real browser) › AI chat widget opens, sends a message and receives a reply
- PASS | ui-flows.spec.ts › UI flows (real browser) › data page loads table and filter interaction works
- PASS | ui-flows.spec.ts › UI flows (real browser) › feedback form submits successfully

</details>

---

## Phase B — 生产 https://miacroai-web-next.netlify.app（阻塞，未执行 10 轮）

**状态**：2026-05-30 探测未通过，十轮循环未启动（避免无意义空转）。

| 探测项 | 结果 |
|--------|------|
| `GET /api/data` | 307 → `/zh/api/data`（线上 middleware 仍为旧版） |
| `wait-deploy` 300s | 构建指纹未变 |
| `git push` → `87819c9` | 未触发该 URL 可观测部署 |
| Playwright `api-data.spec.ts`（生产 BASE_URL） | **6/6 失败**（同上 307/404） |

**解除阻塞后命令**：

```powershell
$env:BASE_URL="https://miacroai-web-next.netlify.app"
$env:DEPLOY_COMMIT="<deploy-sha>"
npm run test:cycle -- --rounds 10 --note "Phase B production"
```

---
