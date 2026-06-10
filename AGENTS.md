# AGENTS.md

## Cursor Cloud specific instructions

This repository is a single **Next.js 12** personal blog site (Umer Farooq / umr.io). There is one deployable app and no database or Docker services.

### Services

| Service                      | Command                              | Port                                     |
| ---------------------------- | ------------------------------------ | ---------------------------------------- |
| Next.js dev server           | `npm run dev`                        | 3000                                     |
| Next.js with content watcher | `npm start`                          | 3000 (reloads when `data/` files change) |
| Production server            | `npm run build` then `npm run serve` | 3000                                     |

### Common commands

All commands run from the repo root. See `package.json` scripts and `README.md` for full details.

- **Install deps:** `npm install` (also runs `husky install` via `prepare`)
- **Lint:** `npm run lint`
- **Build:** `npm run build`
- **Dev:** `npm run dev` or `npm start` (preferred when editing Markdown in `data/`)

There is no test runner or `npm test` script in this repo.

### Optional integrations

Copy `.env.example` to `.env` only when testing newsletter signup (Buttondown) or other third-party features. Core site browsing works without `.env`.

### Notes

- Node.js v22 works with this Next.js 12 project; no special version manager is required.
- ESLint may report pre-existing warnings (e.g. `LinkPreview.js` img elements); lint exits 0.
- `npm run build` runs ESLint and generates static pages from `data/blog/`, `data/pitter/`, etc.
