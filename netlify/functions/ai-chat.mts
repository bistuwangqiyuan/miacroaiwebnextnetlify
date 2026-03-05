import type { Context, Config } from '@netlify/functions';

export const config: Config = {
  path: '/api/ai-chat',
};

const SITE_CONTEXT_ZH = `
你正在微算（Wei Suan）官网的 AI 客服。微算是「数据不出域的微型算力中心」——数据全部存放在用户自己的设备中，无需上传云端。
主要页面路径（locale=zh）：/zh 首页，/zh/product 产品，/zh/technology 技术，/zh/solutions 解决方案，/zh/about 关于我们，/zh/cases 案例，/zh/partners 合作伙伴，/zh/data 数据，/zh/contact 联系我们，/zh/feedback 用户反馈。
回答用户问题时，如适合引导用户到某页，在回复末尾用 JSON 数组给出建议链接，格式：{"suggestedLinks":[{"url":"/zh/product","label":"产品页"}]}，只输出一次，且 url 为 /zh 或 /en 开头的站内路径。
`;

const SITE_CONTEXT_EN = `
You are the AI assistant for Wei Suan official website. Wei Suan is an edge micro compute center where data stays local—no cloud upload.
Main paths (locale=en): /en home, /en/product product, /en/technology technology, /en/solutions solutions, /en/about about, /en/cases cases, /en/partners partners, /en/data data, /en/contact contact, /en/feedback feedback.
When answering, if it helps to direct the user to a page, include a JSON array at the end of your reply: {"suggestedLinks":[{"url":"/en/product","label":"Product"}]}. Output it only once; use /zh or /en paths.
`;

async function callDeepSeek(body: string, apiKey: string, locale: string): Promise<{ reply: string; links?: { url: string; label: string }[] } | null> {
  const sys = locale === 'zh' ? SITE_CONTEXT_ZH : SITE_CONTEXT_EN;
  const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: sys },
        { role: 'user', content: body },
      ],
      max_tokens: 800,
    }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content ?? '';
  return parseReply(content);
}

async function callOpenAICompatible(
  url: string,
  apiKey: string,
  model: string,
  sys: string,
  body: string
): Promise<{ reply: string; links?: { url: string; label: string }[] } | null> {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: sys },
        { role: 'user', content: body },
      ],
      max_tokens: 800,
    }),
  });
  if (!res.ok) return null;
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content ?? '';
  return parseReply(content);
}

function parseReply(content: string): { reply: string; links?: { url: string; label: string }[] } {
  const trim = content.trim();
  const jsonMatch = trim.match(/\{\s*"suggestedLinks"\s*:\s*\[[\s\S]*?\]\s*\}/);
  let links: { url: string; label: string }[] | undefined;
  let reply = trim;
  if (jsonMatch) {
    try {
      const obj = JSON.parse(jsonMatch[0]);
      if (Array.isArray(obj.suggestedLinks)) {
        links = obj.suggestedLinks.filter((l: { url?: string; label?: string }) => l?.url && l?.label);
      }
      reply = trim.replace(jsonMatch[0], '').trim();
    } catch {
      // keep full reply
    }
  }
  return { reply: reply || content, suggestedLinks: links };
}

export default async (req: Request, context: Context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { message?: string; locale?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const message = String(body?.message ?? '').trim();
  const locale = (body?.locale === 'en' ? 'en' : 'zh') as 'zh' | 'en';
  if (!message) {
    return new Response(JSON.stringify({ error: 'message required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const sys = locale === 'zh' ? SITE_CONTEXT_ZH : SITE_CONTEXT_EN;

  const providers: Array<() => Promise<{ reply: string; suggestedLinks?: { url: string; label: string }[] } | null>> = [];

  const deepseekKey = Netlify.env.get('DEEPSEEK_API_KEY');
  if (deepseekKey) {
    providers.push(() => callDeepSeek(message, deepseekKey, locale));
  }
  const moonshotKey = Netlify.env.get('MOONSHOT_API_KEY');
  if (moonshotKey) {
    providers.push(() =>
      callOpenAICompatible('https://api.moonshot.cn/v1/chat/completions', moonshotKey, 'moonshot-v1-8k', sys, message)
    );
  }

  for (const fn of providers) {
    try {
      const result = await Promise.race([
        fn(),
        new Promise<null>((_, rej) => setTimeout(() => rej(new Error('timeout')), 15000)),
      ]);
      if (result?.reply) {
        return new Response(
          JSON.stringify({ reply: result.reply, suggestedLinks: result.suggestedLinks ?? [] }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      }
    } catch {
      continue;
    }
  }

  return new Response(
    JSON.stringify({
      reply: locale === 'zh' ? '暂时无法回复，请稍后再试或通过「联系我们」提交反馈。' : 'Unable to reply right now. Please try again or use Contact to send feedback.',
      suggestedLinks: [],
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
