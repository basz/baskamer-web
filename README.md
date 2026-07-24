# baskamer-web

Personal website for Bas Kamer.

## Framework

This project uses:

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- pnpm

## Project structure

- `src/app`: application source (layout, page, global styles)
- `public/assets`: static images and fonts
- root config files: Next.js, TypeScript, PostCSS, ESLint

## Scripts

```bash
pnpm dev          # start local development server
pnpm build        # create production build
pnpm start        # run production server
pnpm lint         # run eslint + prettier checks
pnpm lint:fix     # fix lint + prettier issues
```

## Local development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deployment

Deployment instructions are in `docs/deployment.md`.
