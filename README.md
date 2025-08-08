![CI](https://github.com/pashlynnee-cell/qa-automation-starter-aris-ellis/actions/workflows/ci.yml/badge.svg)

# QA Automation Starter — Aris Ashlynn Ellis

Playwright + TypeScript starter that shows creativity: clean test design, personas, API tests, visual checks, CI, and optional Slack summaries.

## Quick start
```bash
# 1) Node 18+ recommended
npm install
npm run install:drivers

# 2) Run locally
npm test          # headless
npm run test:ui   # watch mode
npm run report    # open HTML report
```

## What to edit first
- Set your target app URL:
  - `BASE_URL` env var, or change the default in `playwright.config.ts`.
- Update tests in `tests/ui.todo.spec.ts` to match your app.
- Add API endpoints in `tests/api.sample.spec.ts`.

## CI (GitHub Actions)
See `.github/workflows/ci.yml`. It runs tests in parallel, uploads the HTML report, and (optionally) posts a Slack summary if `SLACK_WEBHOOK_URL` is configured as a repo secret.

## Slack summary (optional)
Set an incoming webhook URL as an environment variable:
- Local: `export SLACK_WEBHOOK_URL='https://hooks.slack.com/services/...'`
- GitHub Actions: Settings → Secrets → Actions → `SLACK_WEBHOOK_URL`
The custom reporter will post only when failures occur.

## Structure
```text
tests/
  ui.todo.spec.ts         # UI flow + visual check example
  api.sample.spec.ts      # API test example with request fixture
utils/
  personas.ts             # example persona data
reporters/
  slack-reporter.js       # sends concise failure summary to Slack (optional)
.github/workflows/ci.yml  # CI with report artifact + Slack step
```

## Creative ideas to extend
- Add an accessibility sweep (axe-core/Playwright).
- Add a "flake hunter" job that retries under bad network profiles.
- Add k6 smoke test (scripts/load-smoke.js) and publish a tiny chart.

---
**Tip:** Pick one "persona" (e.g., slow-network mobile user) per week and write 2–3 tests that only that persona would break. That's where the fun lives.

Last updated: 2025-08-08T15:39:34

