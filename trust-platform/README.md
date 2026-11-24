# TrustFlow — Trust Transparency Platform (Phase 1)


A React + TypeScript + Vite UI foundation for a trust management, donation tracking, financial transparency and impact system.

## Current scope
- Responsive sidebar and portal navigation
- Dashboard preview with demo donation/expense/project/fund cards and charts
- Module workspaces for donors, donations, funds, projects, tasks, expenses, beneficiaries, approvals, reports, documents, impact, audit, portals, assistant, users and settings
- Search filtering in module tables
- Demo data is explicitly labeled and not connected to any database

## Run locally
1. Install Node.js LTS.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the URL Vite prints (usually `http://localhost:5173`).

## Build
`npm run build`

## Planned phases
Phase 2: Supabase Auth, Postgres schema/migrations, role grants, RLS policies, audit foundations.
Financial records must be posted through database-side transactions/functions; do not implement ledger integrity in client-only state.

## Demo-data warning
All records and totals in the UI are illustrative only. No financial transactions are real, persisted or backed by a database in this phase.
