# Deployment Guide

This project is deployed on Vercel.

## Prerequisites

- GitHub repository is public (required for Vercel Hobby/free plan in your setup)
- Vercel account connected to GitHub
- `pnpm` lockfile committed

## Vercel project settings

When importing the repository in Vercel, use:

- Framework Preset: Next.js
- Install Command: `pnpm install`
- Build Command: `pnpm build`
- Output Directory: leave empty (Next.js default)

## Deploy from dashboard

1. Open Vercel Dashboard.
2. Click Add New Project.
3. Select `basz/baskamer-web`.
4. Confirm the settings above.
5. Click Deploy.

## Deploy from CLI (optional)

```bash
pnpm dlx vercel
```

For production deploys:

```bash
pnpm dlx vercel --prod
```

## Verify deployment

After deploy:

1. Open the provided Vercel URL.
2. Confirm the homepage background image loads.
3. Confirm text and Tailwind styles are applied.

## Troubleshooting

### Styles not loading

- Ensure `src/app/layout.tsx` imports `./globals.css`.
- Ensure `postcss.config.mjs` includes `@tailwindcss/postcss`.

### Local dev returns intermittent 404

- Stop all Next dev processes and restart once:

```bash
pkill -f "next dev" || true
pnpm dev
```

### Build fails on Vercel

- Confirm Node and pnpm are detected automatically from `package.json` and lockfile.
- Re-run locally first:

```bash
pnpm install
pnpm build
```

## Continuous deployment

Each push to the connected branch triggers a Vercel deployment automatically.
