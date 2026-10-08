# AI-generated app, scanned for production readiness with Norma

An expense claims web app built entirely by AI (Lovable and Claude Code), published as the open demo repository for [Norma by Quality Clouds](https://norma.qualityclouds.com), the code governance tool for AI-generated code.

AI built this app. We scanned it with our own product. The results are below, unedited. Fork it, scan it yourself, and fix what Norma finds.

[![Production-Ready Score: 81/100](https://img.shields.io/badge/Production--Ready_Score-81%2F100-yellow)](#the-score)
[![Scan this repo with Norma](https://img.shields.io/badge/Scan_this_repo-Norma_(free)-4B32C3)](https://norma.qualityclouds.com)
[![Norma GitHub App](https://img.shields.io/badge/GitHub_App-Norma_by_Quality_Clouds-181717?logo=github)](https://github.com/apps/norma-by-quality-clouds)
![Stack: React, TypeScript, Supabase, Python](https://img.shields.io/badge/stack-React_%7C_TypeScript_%7C_Supabase_%7C_Python-informational)

## Try it in 10 minutes

1. **[Fork this repo](https://github.com/qualityclouds/Norma-byQualityClouds-demo-repo/fork).**
2. **Sign up at [norma.qualityclouds.com](https://norma.qualityclouds.com).** The free tier is permanent, not a trial: one certificate a month.
3. **Connect your fork** (GitHub or Bitbucket) and run a Full Scan. Norma detects the stack and picks the rulesets. There's no config file to write.
4. **Open the Performance issues first.** That's the area that failed. Each finding comes with a paste-ready fix for your IDE.
5. **Fix, re-scan, and watch the score move.** Clear enough of the findings and you earn your certificate.

Want to look before you connect anything? Every new Norma account gets this project as a read-only demo repository, and it doesn't use up your scan quota.

## The score

**Production-Ready Score: 81/100** (scanned July 13, 2026)

| Area | Score | Issues |
|---|---|---|
| Security | 91% | 7 (5 high) |
| Manageability | 89% | 1 (1 high) |
| Scalability | 81% | 35 (28 high) |
| Maintainability | 80% | 4 (1 high) |
| Performance | 59%, fail | 16 (7 high) |

<img width="1568" height="564" alt="Norma Production-Ready Score dashboard showing 81/100 for this AI-generated repository" src="https://github.com/user-attachments/assets/d3979856-a7fd-413e-b14a-a6e1e5c07f58" />

63 findings across 73 rules and 5 rulesets, activated automatically against the detected stack. The score is diagnostic: it tells you what needs attention before this code reaches production. It doesn't block anything.

An app that looks finished and runs fine in a preview still failed Performance outright, and 42 of the 63 findings are high severity. That gap between "it works" and "it's production ready" is why Norma exists.

These numbers cover the app as Lovable generated it. The Python claims module under `backend/` landed after this scan, so it isn't counted here. Fork the repo and re-scan to see the current picture.

## A few things Norma flags

Livecheck results on two files from this repo (October 2026). Same file, same rules, same verdict every time.

| File | Rule | Severity | Area |
|---|---|---|---|
| [`src/lib/admin-client.ts:7`](src/lib/admin-client.ts#L7) | Supabase admin client in frontend code | High | Security |
| [`src/lib/admin-client.ts:15`](src/lib/admin-client.ts#L15) | Exposed Supabase service role key | High | Security |
| [`src/lib/admin-client.ts:14`](src/lib/admin-client.ts#L14) | Hardcoded Supabase project URL | High | Security |
| [`backend/claims/legacy_repository.py:64`](backend/claims/legacy_repository.py#L64) | `text()` with f-string (SQL injection) | High | Security |
| [`backend/claims/legacy_repository.py:31`](backend/claims/legacy_repository.py#L31) | `create_engine` with literal URL and password | High | Manageability |
| [`backend/claims/legacy_repository.py:58`](backend/claims/legacy_repository.py#L58) | `session.commit()` inside a loop | High | Performance |
| [`backend/claims/legacy_repository.py:38`](backend/claims/legacy_repository.py#L38) | Module-level SQLAlchemy session | High | Scalability |
| [`backend/claims/legacy_repository.py:17`](backend/claims/legacy_repository.py#L17) | Foreign key column without an index | High | Performance |

`admin-client.ts` returned 4 findings and `legacy_repository.py` returned 26. Security findings that map to a compliance control say which one (for example ISO/IEC 27001 A.8.12, data leakage prevention). The rest are in the Full Scan.

## Other ways to run Norma on your fork

**On pull requests.** Install the [Norma GitHub App](https://github.com/apps/norma-by-quality-clouds) on your fork, then open a pull request with a fix. Norma checks the pull request and posts its findings as a review comment. The App asks for one permission, read and write on pull requests. It comments; it can't push code or merge.

**In your AI coding agent.** Norma is an MCP server, so Claude Code, Cursor, Windsurf, Codex and any MCP client can check files while they write them. Livecheck through MCP only runs on a repository linked in your Norma account:

1. **Link your fork in Norma** (step 3 above). Your code is never stored in your Norma account: linking tells Norma which repository a check belongs to, and Livecheck holds file content in memory only for the duration of the check.
2. **Add the server.** In Claude Code:

   ```bash
   claude mcp add --transport http norma https://api.qualityclouds.ai/mcp
   ```

   Sign in with OAuth when prompted.
3. **Check and fix.** Open the agent in your local clone of the fork and ask it to fix a finding, for example: *"Use Norma to live check src/lib/admin-client.ts, fix the violations, and re-check until it's clean."*

If Livecheck says the repository isn't linked, make sure the fork shows up in your Norma account and that `git remote get-url origin` points at that fork. Norma is also in the Claude connectors directory and on [Smithery](https://smithery.ai/servers/qualityclouds/norma); the repository has to be linked whichever way you install it.

**In your editor.** The VS Code extension [Norma: AI Code Governance](https://marketplace.visualstudio.com/items?itemName=qualityclouds.norma-for-vscode) runs Livecheck on the active file and puts findings in the Problems panel. It also runs on Cursor and VSCodium through Open VSX.

## Why this repo is public

Most demo projects show a product at its best. This one shows real AI-generated code with real problems, because that's what you're shipping if nobody checks.

Everything here is exactly as the AI tools produced it: Lovable generated the app, Claude Code added the minimum wiring to run it. No human cleanup before the scan. Please don't use it as a starter template.

## Run it locally

The app needs a Supabase project for auth and data. Create a free one at [supabase.com](https://supabase.com), then:

```bash
bun install
cp .env.example .env   # fill in your Supabase project values
bun run dev
```

`bun run build` produces a production build, `bun run lint` runs ESLint.

## Stack

Lovable's output is a React frontend on TanStack Start, written in TypeScript, with Vite and Tailwind. Claude Code added a Python claims module (SQLAlchemy) under `backend/`, plus the Supabase pieces: Postgres migrations and TypeScript edge functions.

Norma detected the stack and picked the rulesets automatically: JavaScript, TypeScript, React, Node, Vite and Supabase for the frontend; Python, FastAPI and SQLAlchemy for the backend. Norma currently covers JavaScript, TypeScript, Python and PHP, whichever tool or model wrote the code.

## FAQ

**Is Norma free?** Yes. The free tier is permanent: one certificate a month. Paid plans are at [qualityclouds.ai/pricing/norma](https://qualityclouds.ai/pricing/norma).

**What happens to my code?** Norma deletes repository code after a scan. Quality Clouds is ISO 27001:2022 certified and SOC 2 Type II attested.

**Does Norma write or change code?** No. Norma checks code and tells you what to fix. Your editor or AI agent makes the change.

**Will it block my pull requests?** Only if you set a Quality Gate. The Production-Ready Score and the GitHub App's review comments never block anything on their own.

**Is it just another AI code reviewer?** Norma's checks are deterministic: the same code gets the same verdict every time, and every check is written to an audit record you can show to a reviewer or auditor.

## About Norma

Norma by Quality Clouds is the code governance layer for AI-generated code. It scores a repository across five areas (Security, Manageability, Scalability, Maintainability, Performance), gives you the fixes, and keeps an audit record of every check.

The policies behind it are grounded in governance data Quality Clouds has collected since 2017, across more than 950 governed enterprise platform instances.

**[Start free at norma.qualityclouds.com](https://norma.qualityclouds.com)** · [Product page](https://qualityclouds.ai/norma) · [Documentation](https://qualityclouds.com/documentation)
