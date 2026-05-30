# 微算官网上线测试报告

本报告由 `scripts/gen-report.mjs` 按轮次累加生成。

## 第 1 轮 — 2026-05-30T13:23:44.454Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 66.7s
- 说明: 本地 netlify dev 真实运行时含 Functions/Edge + 真实 AI(GLM)；2 跳过为反馈入库(需线上 Neon)

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
## 第 2 轮 — 2026-05-30T13:25:15.647Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 73.1s
- 说明: 稳定性复测，结果一致

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
## 第 3 轮 — 2026-05-30T13:27:09.313Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 67.7s
- 说明: 稳定性复测轮次 3

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
## 第 4 轮 — 2026-05-30T13:28:19.378Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 68.5s
- 说明: 稳定性复测轮次 4

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
## 第 5 轮 — 2026-05-30T13:29:30.311Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 69.4s
- 说明: 稳定性复测轮次 5

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
## 第 6 轮 — 2026-05-30T13:30:43.980Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 72.1s
- 说明: 稳定性复测轮次 6

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
## 第 7 轮 — 2026-05-30T13:32:01.617Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 75.7s
- 说明: 稳定性复测轮次 7

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
## 第 8 轮 — 2026-05-30T13:33:14.322Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 71.0s
- 说明: 稳定性复测轮次 8

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
## 第 9 轮 — 2026-05-30T13:34:29.708Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 73.6s
- 说明: 稳定性复测轮次 9

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
## 第 10 轮 — 2026-05-30T13:36:25.447Z

- 目标 URL: http://localhost:8888 (netlify dev prod runtime)
- 部署 commit: `local-verify(middleware-fix+GLM)`
- 用例: 46/46 通过（全部通过）
- 耗时: 114.0s
- 说明: 稳定性复测轮次 10

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
