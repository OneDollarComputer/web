# Curriculum (`/curriculum/`)

Teacher surface for One Dollar Computer lessons.

**Live:** https://onedollarcomputer.com/curriculum/

## Status

First slice: landing + **Google Sign-in** (same Firebase Auth as `/project/` — `odc-files`).

Next: lesson adaptation, classroom trials, sharing — Google-familiar for educators.

Prototype UI history lives in the sibling repo `~/github/curriculum` (Vite). New work ships here as static pages first; we may fold the Vite app in later with `base: '/curriculum/'`.

## Auth

- Sign in with Google via `auth.onedollarcomputer.com`
- Username claim still happens at `/project/`
- Path `curriculum` is reserved (not a public username)
