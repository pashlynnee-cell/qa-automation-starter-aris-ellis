cd "$env:USERPROFILE\Downloads\qa-automation-starter-aris-ellis"

@'
# QA Automation Starter — Aris Ashlynn Ellis
![CI](https://github.com/pashlynnee-cell/qa-automation-starter-aris-ellis/actions/workflows/ci.yml/badge.svg)

Tiny, professional Playwright + TypeScript suite that proves I can set up, stabilize, and run automation **locally and in CI**.  
**UI + API tests** · **HTML report** · **GitHub Actions** (artifact attached to every run)

---

## Quick start

### Windows (PowerShell)
```powershell
npm install
npx playwright install --with-deps
$env:BASE_URL="https://example.com/"
npx playwright test --project=chromium --reporter=html
npx playwright show-report
