# PRism ⚡

AI-powered code reviewer for GitHub Pull Requests. Paste a PR URL and get instant feedback on bugs, security issues, performance, and best practices before anything hits production.

**Live demo:** https://prism-self-tau.vercel.app

---

## What it does

You paste a GitHub PR URL. PRism fetches the diff, sends it to an AI model, and returns a detailed code review in seconds. Every review is saved to your account so you can reference it later.

No more waiting for teammates to review. No more shipping bugs that should have been caught earlier.

---

## Tech stack

- **Next.js 16** — App Router, server components, API routes
- **TypeScript** — end to end type safety
- **Clerk** — authentication and user management
- **Groq AI** — LLM inference (Llama 3.3 70B) for code review
- **PostgreSQL** — review history storage via Supabase
- **Prisma 7** — type-safe database ORM
- **Tailwind CSS** — styling
- **shadcn/ui** — UI components

---

## Getting started

### Prerequisites
- Node.js 18+
- A Supabase account (free)
- A Clerk account (free)
- A Groq API key (free at console.groq.com)

### Installation

```bash
git clone https://github.com/manav1913/prism
cd prism
npm install
```

### Environment variables

Create a `.env.local` file in the root:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard

# Database
DATABASE_URL=your_supabase_postgresql_connection_string

# Groq AI
GROQ_API_KEY=your_groq_api_key
```

### Run locally

```bash
npx prisma generate
npx prisma db push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## How it works

1. User signs in via Clerk
2. Pastes a public GitHub PR URL on the dashboard
3. PRism calls the GitHub API to fetch the PR diff
4. Diff is sent to Groq AI (Llama 3.3 70B) with a code review prompt
5. AI review is returned and saved to PostgreSQL via Prisma
6. Review is displayed on the dashboard

---

## Project structure

```
src/
├── app/
│   ├── api/
│   │   └── review/        # PR review API route
│   ├── dashboard/         # Protected dashboard page
│   ├── login/             # Clerk sign in
│   └── signup/            # Clerk sign up
├── components/
│   ├── dashboard/         # ReviewForm component
│   ├── homepage/          # Landing page sections
│   └── ui/                # shadcn components
└── lib/
    └── prisma.ts          # Prisma client singleton
```

---

## Roadmap

- [ ] Review history — see all past reviews
- [ ] Private repo support via GitHub OAuth
- [ ] Line-by-line inline comments
- [ ] Shareable review links
- [ ] GitHub App integration

---

## Author

Built by [Manav Parad](https://github.com/manav1913)
