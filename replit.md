# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Project: Chifamba High School Website

A complete website revamp for Chifamba High School (Guruve, Zimbabwe), developed by Bluewave Technologies.

### Pages
- `/` — Home (hero, stats, about preview, projects, achievements, CTA)
- `/about` — School history, mission, vision, leadership
- `/staff` — Faculty profiles grid by department
- `/academics` — O-Level & A-Level Zimbabwe curriculum
- `/projects` — Practical projects (Poultry, Cattle, Agriculture, etc.)
- `/achievements` — Secretary's Bells, BUSE, sports trophies
- `/contact` — Contact form, location, phone, email
- `/portal` — Student/Staff login portal

### Brand Colors
- Primary Navy: #003366
- Secondary Blue: #0055aa
- Accent Gold: #f0b429
- White: #ffffff

### Key Artifacts
- `artifacts/chifamba-school` — React + Vite frontend
- `artifacts/api-server` — Express 5 API backend

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind CSS + framer-motion
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
