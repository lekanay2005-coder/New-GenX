
# NEW-GenX

NEW-GenX is a premium decentralized marketplace built for Web3 creators, collectors, and brands. The app combines Solana wallet connectivity, Supabase persistence, Stripe checkout, and responsive marketplace UX.

## Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- App Router
- Framer Motion
- Zustand
- Solana Wallet Adapter
- Phantom / Solflare / Backpack
- Supabase
- Stripe / Solana Pay

## Installation

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

## Available scripts

- `npm run dev` - Start development server
- `npm run build` - Build production assets
- `npm run start` - Run production server
- `npm run lint` - Lint source files

## Environment variables

Copy `.env.example` to `.env.local` and fill in your keys.

## Deployment

### Vercel

1. Connect the repository to Vercel.
2. Set environment variables in Vercel dashboard.
3. Deploy using the default branch.

### Netlify

1. Set build command: `npm run build`
2. Set publish directory: `out` (if using `next export`) or leave empty for default Next.js build.
3. Add environment variables.

### GitHub Pages

GitHub Pages does not support Next.js App Router directly. Use a static export with `npm run build` and `npm run export`, then deploy the `out` folder.

## Project structure

- `src/app/` - App Router pages and API routes
- `src/components/` - Reusable UI components
- `src/lib/` - Shared helpers and client utilities
- `src/store/` - Zustand state management
- `supabase/` - Database schema definitions

## Notes

- Wallet actions require a wallet extension or mobile wallet supporting Solana.
- Checkout uses a placeholder API route for demo flow.
- Supabase and Stripe integration are wired in with environment variables.
