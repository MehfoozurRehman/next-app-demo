# next-app-demo

Side-by-side starters for Next.js 15 and React Router v7 full-stack SSR, each with a small todo-style page.

**Status:** Starter. Both apps are minimal templates. The Next.js todo list uses an in-memory array with a one-second delay (`demo-next/actions/todo.ts`), and the React Router app has a single home route, so the repository is set up for comparing frameworks rather than shipping a product.

## The problem

Developers choosing between Next.js App Router and React Router v7 need a quick side-by-side look at routing, server functions and build setup. This repository puts both starters in one place.

## What it does

- `demo-next/`: a todo page with a todo form and an edit button per item, using a server action file (`actions/todo.ts`, `app/TodoForm.tsx`, `app/TodoEntryEditButton.tsx`).
- `demo-react-router/`: a React Router v7 app with one home route (`app/routes/home.tsx`) and an SSR build.
- Dockerfiles for the React Router app with npm, pnpm and Bun (`Dockerfile`, `Dockerfile.pnpm`, `Dockerfile.bun`).

## How it's built

- Next.js 15 App Router with Turbopack in `demo-next/`.
- React Router v7 in full-stack SSR mode on Vite 5 in `demo-react-router/`.
- Architecture decision: each app is self-contained in its own folder, with its own `package.json`, so the two can be run and compared independently.

## Running it locally

Next.js starter:

```bash
cd demo-next
npm install
npm run dev
```

React Router starter:

```bash
cd demo-react-router
npm install
npm run dev        # react-router dev
npm run build      # react-router build
npm run start      # serves ./build/server/index.js
npm run typecheck
```

## What's left

- The Next.js todo data is an in-memory array and resets when the server restarts. There is no database.
- The React Router app has only one route.
- The repository has no benchmark code or measurements, even though the earlier description called it a benchmark.
- No tests.
