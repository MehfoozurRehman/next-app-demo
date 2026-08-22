# Next.js 15 vs React Router v7 Comparative Benchmark Starter

A comparative benchmark and architectural migration starter evaluating Next.js 15 App Router (Turbopack) alongside React Router v7 Full-Stack SSR.

## Overview

`next-app-demo` provides side-by-side implementations of identical UI workflows to evaluate routing patterns, bundle efficiency, and developer ergonomics:
- **`demo-next/`**: Next.js 15 App Router with Turbopack compilation and React 19.
- **`demo-react-router/`**: React Router v7 Full-Stack SSR with Vite 5 bundler.

## Tech Stack

- **Frameworks**: [Next.js](https://nextjs.org/) (v15) & [React Router](https://reactrouter.com/) (v7)
- **Frontend Core**: React 18 / 19, TypeScript
- **Tooling**: Turbopack, [Vite](https://vitejs.dev/) (v5)

## Prerequisites

- Node.js (v20 or higher recommended)
- Package manager (`npm` or `pnpm`)

## Getting Started

### 1. Run Next.js 15 Implementation

```bash
cd demo-next
npm install
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 2. Run React Router v7 Implementation

```bash
cd demo-react-router
npm install
npm run dev
```
Open `http://localhost:5173` in your web browser.

## Available Scripts

### Next.js (`/demo-next`)
- `npm run dev` - Starts Next.js dev server with Turbopack.
- `npm run build` - Compiles production build.

### React Router (`/demo-react-router`)
- `npm run dev` - Starts React Router v7 dev server.
- `npm run build` - Compiles production build.
- `npm run start` - Starts production server via `react-router-serve`.

## Author

Created by [Mehfooz-ur-Rehman](https://github.com/MehfoozurRehman).
