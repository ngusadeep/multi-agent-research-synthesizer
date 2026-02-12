# Research Synthesis Agent - Frontend

AI-powered research chat interface built with Next.js 14 and TypeScript.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Radix UI** + shadcn/ui components
- **Zustand** (state management)
- **Dexie.js** (IndexedDB for local chat storage)
- **Clerk** (authentication)
- **TipTap** (rich text editor)
- **Framer Motion** (animations)

## Project Structure

```
frontend/
├── app/            # Next.js pages and routes
├── components/     # UI components
│   └── ui/         # Radix UI primitives (shadcn)
├── hooks/          # Custom React hooks
├── store/          # Zustand state stores
├── context/        # React context providers
└── lib/            # Shared utilities, types, and config
```

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
