> ▶ **60-sec demo:** https://www.loom.com/share/c051e65e40fc494b92f76b550430a229?sid=00234792-aac9-4575-8b5e-9ded6fe09766

# QA Automation Starter — Ashlynn Ellis
![CI](https://github.com/pashlynnee-cell/qa-automation-starter-aris-ellis/actions/workflows/ci.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Tested%20with-Playwright-45ba4b)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

I built this small Playwright + TypeScript suite to demonstrate how I set up **stable, maintainable automation** from scratch: UI + API checks, HTML reports, and a clean GitHub Actions pipeline. It’s intentionally minimal, readable, and easy to extend.

---

## What’s inside
- **UI smoke tests** against a deterministic target (`example.com`) using stable selectors.
- **API smoke tests** (jsonplaceholder) for simple GET/POST sanity.
- **HTML report** published as a CI artifact on every run.
- **CI workflow** (Chromium for stability) that’s fast and green.
- Clear structure and defensive waits to reduce flakes.

### Screenshot
![Test Report](docs/report.png)

---

## Quick start

**Prereqs:** Node.js 18+ (LTS recommended)

### Windows (PowerShell)
```powershell
npm install
npx playwright install --with-deps
npm run test:html     # run tests (Chromium) + generate HTML report
npm run report        # open the HTML report
