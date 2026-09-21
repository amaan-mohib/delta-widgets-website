# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing / landing site for **Delta Widgets** (a Windows desktop widget maker). Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4. Generated and kept in sync with [v0.app](https://v0.app) → Vercel: manual edits here may be overwritten by a v0 deployment, so treat v0 as another author.

This repo is **only the website** — not the product. The product is a separate Tauri v2 + Rust + React desktop app. Get product terminology right when writing marketing copy — do not treat this site as the source of truth for features. When you need product facts, cross-reference the app repo (all paths below are local):

- **`/Users/amohib/development/projects/delta-widgets-main/CLAUDE.md`** — the product repo's own CLAUDE.md; authoritative on the app's architecture (multi-window Tauri setup, manifest model, Rust↔TS bridge, migrations, AI assistant). Start here.
- `/Users/amohib/development/projects/delta-widgets-main/docs/` — end-user MkDocs (features, widget types, Tauri commands/events), published at `docs.deltawidgets.com`.
- Upstream: `github.com/amaan-mohib/delta-widgets`.

## Product context (what the site markets)

Delta Widgets is a **no-code desktop widget maker for Windows**, built with Tauri + Rust. Three ways to create a widget — keep these names consistent in copy:

1. **Visual Editor widgets** — drag-and-drop builder. Components: Container/Grid, Text, Image, Progress/Slider, Media Controls, Audio Visualizer (soundbar/waveform), Custom Button (planned). Supports handlebar-style **dynamic variables** (`{{time}}`, `{{time:HH:mm:ss}}`, `{{system:cpu_usage}}`, `{{media:title}}`) and built-in **templates** (clock, media, system stats — mirrored under `public/templates/`).
2. **Custom HTML widgets** — own HTML/CSS/JS in a WebView; no `{{...}}` variables, instead call Tauri commands (`get_media`, `get_system_info`) and events (`media_updated`, `audio-samples`). `-webkit-app-region: drag` marks a drag handle.
3. **URL widgets** — embed a live webpage; sandboxed, no variable/command injection.

Workflow terms used across the site: widgets live as **Drafts** until **Published**, then appear under **Installed** where they toggle on/off. Distributed via GitHub Releases (`.exe`/`.msi`) — which is exactly the release feed this site renders (`RELEASES_JSON_URL` → `/releases`). Docs URL constant is `DOCS_WEBSITE_URL` in `lib/utils.ts` (defaults to the GitHub Pages URL; the canonical domain is `docs.deltawidgets.com`).

## Commands

```bash
npm run dev     # next dev (local dev server)
npm run build   # next build
npm run start   # next start (serve production build)
npm run lint    # eslint .
```

No test framework is configured — there are no tests to run.

## Environment variables

- `RELEASES_JSON_URL` — **required** at build/runtime; `getReleases()` (`lib/data.ts`) fetches release data from it. Missing → the `/releases*`, `/download`, `sitemap` routes throw.
- Optional `NEXT_PUBLIC_*` overrides with sane fallbacks live in `lib/utils.ts` (`WEBSITE_URL`, `DOCS_WEBSITE_URL`, `WAITLIST_LINK`). Import from there rather than reading `process.env` in components.

## Architecture

**Two coexisting UI systems — know which one a component belongs to before editing:**

1. **shadcn/ui** (`components/ui/`, "new-york" style, `components.json`) — Radix primitives styled with Tailwind. Colors are CSS variables (`--primary`, `--card`, …) defined in `app/globals.css` for `:root` and `html.dark`. Use the `cn()` helper (`lib/utils.ts`) to merge classes. Add components via the shadcn CLI.
2. **Fluent UI** (`@fluentui/react-components` v9) — wrapped by `app/providers.tsx`, which sets up an SSR-safe renderer (`createDOMRenderer` + `useServerInsertedHTML`) and applies `darkTheme` from `lib/themes.ts`. `lib/themes.ts` derives light/dark themes from a single `BrandVariants` ramp. When touching Fluent theming, edit that ramp, not individual components.

Dark mode is **forced**: `<html className="dark">` in `app/layout.tsx` and Fluent's `darkTheme`. `next-themes` is installed but the site is effectively dark-only.

**Data flow.** `lib/data.ts#getReleases()` is the single source for release info; it uses Next's `"use cache"` + `cacheLife("hours")`. `lib/types.ts` types the GitHub-releases-shaped JSON (`IReleases` = `{ releases: Record<tag, IRelease>, latest }`). Release routes: `/releases` (list), `/releases/[slug]` (single; `slug === "latest"` resolves via `latest.tag_name`, `notFound()` otherwise), `/download` redirects to `/releases/latest?download=true`.

**Next 16 Cache Components.** `next.config.mjs` sets `cacheComponents: true`. Routes doing per-request dynamic fetches opt out with `export const instant = false` (see `app/releases/page.tsx`, `app/releases/[slug]/page.tsx`) — there's a standing TODO to migrate these to Cache Components and drop the opt-out. Keep the opt-out when adding a route that reads live release data.

**Page composition.** `app/page.tsx` is a client component assembling section components from `components/` (hero, features, screenshots, gallery, marketplace-cta, download, sponsor, faq) in order. `app/layout.tsx` owns global metadata (OpenGraph/Twitter/robots), fonts (Inter + Segoe UI stack), the AdSense script, and wraps everything in `<Header>` / `<Footer>` inside `<Providers>`. SEO is code-driven via `app/sitemap.ts` and `app/robots.ts`.

## Conventions

- Path alias `@/*` → repo root (`tsconfig.json`). Aliases also mapped in `components.json` (`@/components`, `@/lib`, `@/components/ui`).
- **`typescript.ignoreBuildErrors: true`** in `next.config.mjs` — `next build` will NOT catch type errors. Run `npx tsc --noEmit` (or rely on the editor) to actually type-check before assuming a change is sound.
- App Router route params are async: `params` is a `Promise` — `await` it (see `app/releases/[slug]/page.tsx`).
