# Expenses app, built with Lovable and Claude Code

An expense claims web app built with Lovable and Claude Code, published as the open demo repository for [Norma by Quality Clouds](https://norma.qualityclouds.com).

AI built this app. We scanned it with our own product. The results are below, unedited.

## The score

**Production-Ready Score: 81/100** (scanned July 13, 2026)

| Area | Score | Issues |
|---|---|---|
| Security | 91% | 7 (5 high) |
| Manageability | 89% | 1 (1 high) |
| Scalability | 81% | 35 (28 high) |
| Maintainability | 80% | 4 (1 high) |
| Performance | 59%, fail | 16 (7 high) |

<img width="1568" height="564" alt="Production-Ready Score dashboard showing 81/100" src="https://github.com/user-attachments/assets/d3979856-a7fd-413e-b14a-a6e1e5c07f58" />

63 findings across 73 rules and 5 rulesets, activated automatically against the detected stack. The score is diagnostic: it tells you what needs attention before this code reaches production, it doesn't block anything.

The headline: an app that looks finished and runs fine in a preview still failed Performance outright, and 42 of the 63 findings are high severity. That gap between "it works" and "it's production ready" is the reason Norma exists.

These numbers cover the app as Lovable generated it. The Python claims module under `backend/` landed after this scan, so it isn't counted here. Fork the repo and re-scan to see the current picture.

## Why this repo is public

Most demo projects show a product at its best. This one shows real AI-generated code with real problems, because that's what you're shipping if nobody checks.

Everything here is exactly as the AI tools produced it: Lovable generated the app, Claude Code added the minimum wiring to run it. No human cleanup before the scan.

## Try it yourself

Every new Norma account gets this project as a read-only demo repository, and it doesn't use up your scan quota, so you can explore the findings without touching any code. To fix issues and re-scan:

1. **Fork this repo.**
2. **Sign up at [norma.qualityclouds.com](https://norma.qualityclouds.com)** if you haven't already. The free tier is permanent, not a trial: one certificate a month.
3. **Connect your fork** and run a Full Scan.
4. **Open the Performance issues first.** Each finding comes with a paste-ready fix for your IDE.
5. **Fix, re-scan, and watch the score move.** Clear enough of the findings and you earn your certificate.

## Run it locally

The app needs a Supabase project for auth and data. Create a free one at [supabase.com](https://supabase.com), then:

```bash
bun install
cp .env.example .env   # fill in your Supabase project values
bun run dev
```

`bun run build` produces a production build, `bun run lint` runs ESLint.

## Stack

Lovable's output is a React frontend on TanStack Start, written in TypeScript, with Vite and Tailwind. Claude Code added a Python claims module under `backend/`, plus the Supabase pieces: Postgres migrations and TypeScript edge functions.

Norma detected the stack and picked the rulesets automatically. The same works for any stack, whichever tool or model wrote the code.

## About Norma

Norma by Quality Clouds is the code governance layer for AI-generated code. It scores a repository across five areas (Security, Manageability, Scalability, Maintainability, Performance) and gives you the fixes.

Its checks are deterministic: the same code gets the same verdict every time, and every check leaves an audit record. The policies behind them are grounded in governance data collected since 2017, across more than 950 governed enterprise platform instances.

Start free at [norma.qualityclouds.com](https://norma.qualityclouds.com).
