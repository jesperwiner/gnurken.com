# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

No test framework is configured.

## Architecture

This is a personal portfolio website (gnurken.com) built with **Next.js 16 App Router**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

### Key structure

- `src/app/` — App Router pages and layouts. Pages use `"use client"` for interactivity.
- `src/components/` — Shared components (Navigation, Footer). Navigation is rendered per-page; Footer is in the root layout.
- `public/` — Static assets (images, SVGs).

### Styling

- Tailwind CSS v4 via `@tailwindcss/postcss` plugin — uses `@import "tailwindcss"` syntax in `globals.css`.
- Dark theme by default with CSS custom properties (`--background`, `--foreground`).
- Gradient background defined in `globals.css`.

### Fonts

Google Fonts (Geist Sans & Mono) loaded via `next/font/google` in `src/app/layout.tsx` and exposed as CSS variables.

### Images

Uses `next/image` with remote patterns configured in `next.config.ts` for `www.gnurken.com` and `media.licdn.com`.

### Animations

Framer Motion is used for page animations (primarily on the About page) — staggered children, hover effects, fade/slide-in transitions.

### Path alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).
