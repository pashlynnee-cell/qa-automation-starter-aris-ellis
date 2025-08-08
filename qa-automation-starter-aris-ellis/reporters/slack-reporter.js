const { request } = require('@playwright/test');

class SlackReporter {
  constructor(options = {}) {
    this.onlyOnFailure = options.onlyOnFailure ?? true;
    this.results = { failed: [], passed: 0, failedCount: 0, total: 0 };
  }

  onTestEnd(test, result) {
    this.results.total += 1;
    if (result.status === 'passed') this.results.passed += 1;
    if (result.status === 'failed') {
      this.results.failedCount += 1;
      this.results.failed.push({
        title: test.titlePath().join(' › '),
        error: result.error ? (result.error.message || '').slice(0, 300) : 'Unknown error'
      });
    }
  }

  async onEnd(result) {
    const webhook = process.env.SLACK_WEBHOOK_URL;
    if (!webhook) return; // no-op if not configured
    if (this.onlyOnFailure && this.results.failedCount === 0) return;

    const summary = `Playwright: ${this.results.passed}/${this.results.total} passed, ${this.results.failedCount} failed`;
    const blocks = [
      { type: 'section', text: { type: 'mrkdwn', text: `*${summary}*` } },
    ];

    for (const f of this.results.failed.slice(0, 10)) {
      blocks.push({ type: 'section', text: { type: 'mrkdwn', text: `• *${f.title}*\n>${f.error}` } });
    }
    if (this.results.failedCount > 10) {
      blocks.push({ type: 'context', elements: [{ type: 'mrkdwn', text: `…and ${this.results.failedCount - 10} more failures` }] });
    }

    try {
      const ctx = await request.newContext();
      await ctx.post(webhook, { data: { text: summary, blocks } });
      await ctx.dispose();
    } catch (e) {
      console.error('Slack post failed:', e.message);
    }
  }
}

module.exports = SlackReporter;
