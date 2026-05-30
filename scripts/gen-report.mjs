// Generate / append an online test report from Playwright JSON results.
// Usage: node scripts/gen-report.mjs [--round N] [--commit SHA] [--note "text"]
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const RESULTS = path.join(ROOT, 'test-results', 'results.json');
const REPORT = path.join(ROOT, 'TEST_REPORT.md');

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

function walk(suite, file, acc) {
  const currentFile = suite.file || file || '';
  for (const spec of suite.specs || []) {
    const ok = spec.tests?.every((t) => t.results?.every((r) => r.status === 'passed' || r.status === 'skipped')) ?? false;
    const status = spec.ok ?? ok;
    acc.push({
      file: currentFile,
      title: [suite.title, spec.title].filter(Boolean).join(' › '),
      ok: status,
    });
  }
  for (const child of suite.suites || []) walk(child, currentFile, acc);
}

function main() {
  if (!fs.existsSync(RESULTS)) {
    console.error(`No results file at ${RESULTS}. Run tests first.`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(RESULTS, 'utf8'));
  const specs = [];
  for (const suite of data.suites || []) walk(suite, suite.file, specs);

  const stats = data.stats || {};
  const total = specs.length;
  const failed = specs.filter((s) => !s.ok);
  const passed = total - failed.length;

  const round = arg('round', '?');
  const commit = arg('commit', process.env.DEPLOY_COMMIT || 'n/a');
  const note = arg('note', '');
  const baseUrl = process.env.BASE_URL || 'https://miacroai-web-next.netlify.app';
  const ts = new Date().toISOString();

  const lines = [];
  lines.push(`## 第 ${round} 轮 — ${ts}`);
  lines.push('');
  lines.push(`- 目标 URL: ${baseUrl}`);
  lines.push(`- 部署 commit: \`${commit}\``);
  lines.push(`- 用例: ${passed}/${total} 通过` + (failed.length ? `（失败 ${failed.length}）` : '（全部通过）'));
  if (typeof stats.duration === 'number') lines.push(`- 耗时: ${(stats.duration / 1000).toFixed(1)}s`);
  if (note) lines.push(`- 说明: ${note}`);
  lines.push('');
  if (failed.length) {
    lines.push('### 失败用例');
    lines.push('');
    for (const f of failed) lines.push(`- [FAIL] ${path.basename(f.file)} › ${f.title}`);
    lines.push('');
  } else {
    lines.push('全部用例通过。');
    lines.push('');
  }
  lines.push('<details><summary>全部用例明细</summary>');
  lines.push('');
  for (const s of specs) lines.push(`- ${s.ok ? 'PASS' : 'FAIL'} | ${path.basename(s.file)} › ${s.title}`);
  lines.push('');
  lines.push('</details>');
  lines.push('');
  lines.push('---');
  lines.push('');

  const header = `# 微算官网上线测试报告\n\n本报告由 \`scripts/gen-report.mjs\` 按轮次累加生成。\n\n`;
  let existing = '';
  if (fs.existsSync(REPORT)) {
    existing = fs.readFileSync(REPORT, 'utf8');
  } else {
    existing = header;
  }
  fs.writeFileSync(REPORT, existing + lines.join('\n'), 'utf8');
  console.log(`Report updated: round ${round}, ${passed}/${total} passed, ${failed.length} failed.`);
  // exit non-zero if failures, useful for loop control
  process.exit(failed.length ? 2 : 0);
}

main();
