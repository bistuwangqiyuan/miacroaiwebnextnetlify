# 微算 Wei Suan — Official Site

Next.js 16 (App Router) + Netlify: 中英双语官网，AI 客服，用户反馈，数据表（Neon），Netlify Identity 登录。

## Features

- **i18n**: `/zh` 与 `/en` 路由，middleware 自动按语言重定向
- **Pages**: 首页、产品、技术、解决方案、关于、案例、合作伙伴、数据、联系我们、用户反馈
- **Data**: `GET /api/data` 分页/排序/筛选（来源、关键词），Neon 表 `content_items`
- **Feedback**: `POST /api/feedback` 写入 Neon 表 `feedback`
- **AI 客服**: `POST /api/ai-chat`，多 API 轮询（DeepSeek、Moonshot），可返回建议站内链接
- **Auth**: Netlify Identity（登录/登出），Header 显示状态

## Environment (Netlify)

- **AI**: `DEEPSEEK_API_KEY`、`MOONSHOT_API_KEY`（可选，用于 AI 客服）
- **DB**: Netlify DB (Neon) 在启用 `@netlify/neon` 并部署后自动关联；无需手填连接串

## Database migrations

创建 `feedback` 与 `content_items` 表（若尚未存在）：

```bash
netlify link
netlify env:get NETLIFY_DATABASE_URL   # 或从 Netlify UI 获取
psql "<paste-url>" -f scripts/migrations/001_initial.sql
```

或通过 Netlify UI 的 DB 控制台执行 `scripts/migrations/001_initial.sql` 中的 SQL。

---

# Next.js on Netlify Platform Starter

A modern starter based on Next.js 16 (App Router), Tailwind, and [Netlify Core Primitives](https://docs.netlify.com/core/overview/#develop).

In this site, Netlify Core Primitives are used both implictly for running Next.js features (e.g. Route Handlers, image optimization via `next/image`, and more) and also explicitly by the user code.

Implicit usage means you're using any Next.js functionality and everything "just works" when deployed - all the plumbing is done for you. Explicit usage is framework-agnostic and typically provides more features than what Next.js exposes.

## Deploying to Netlify

### 方式一：Git 连接（推荐）

Next.js 16 在 Netlify 上需在云端构建，本地 `netlify deploy` 会因 Blobs 环境报错，建议用 Git 连接后自动部署：

1. 打开 [Netlify 项目](https://app.netlify.com/projects/miacroai-web-next) → **Site configuration** → **Build & deploy** → **Continuous deployment** → **Link repository**。
2. 选择 **GitHub**，授权后选择仓库 `bistuwangqiyuan/miacroaiwebnextnetlify`，分支选 `main`。
3. 构建设置保持默认即可（Netlify 会识别 Next.js；`netlify.toml` 中已配置 `command = "npm run build"`、`publish = ".next"`）。
4. 保存后，**推送代码到 main** 即可触发生产部署。之后也可用 `netlify deploy --prod --trigger` 在本地触发一次构建而不上传文件。

当前站点已创建并已关联本地目录（`netlify status` 可查看），生产 URL：**https://miacroai-web-next.netlify.app**（需完成上述 Git 连接并成功部署后即可访问）。

### 方式二：一键部署模板

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-platform-starter)

## Developing Locally

1. Clone this repository, then run `npm install` in its root directory.

2. For the starter to have full functionality locally (e.g. edge functions, blob store), please ensure you have an up-to-date version of Netlify CLI. Run:

```
npm install netlify-cli@latest -g
```

3. Link your local repository to the deployed Netlify site. This will ensure you're using the same runtime version for both local development and your deployed site.

```
netlify link
```

4. Then, run the Next.js development server via Netlify CLI:

```
netlify dev
```

If your browser doesn't navigate to the site automatically, visit [localhost:8888](http://localhost:8888).

## Resources

- Check out the [Next.js on Netlify docs](https://docs.netlify.com/frameworks/next-js/overview/)
