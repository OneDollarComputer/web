# Curriculum (`/curriculum/`)

Workspace for **teachers and instructors** to build One Dollar Computer lessons.

**Live:** https://onedollarcomputer.com/curriculum/

## How it differs from Projects

| | Projects (`/project/`, `/{user}/`) | Curriculum (`/curriculum/`) |
|---|---|---|
| Who | Anyone | Teachers & instructors |
| Access | Title public on share link; body needs sign-in | Sign-in required for content |
| What | Personal published builds | Classroom lessons |

## Share link

`/curriculum/?lesson={id}`

- Logged out: see **title** only → Sign in
- Logged in: full lesson
- **Authors** edit live (Firebase RTDB)
- **Everyone else** can **Suggest** changes; authors Accept / Reject
- Presence chips show who else is in the lesson (and which field)

## Co-authors

Owner invites by **username** (must already claim a username on `/project/`).

## Lesson materials

- Title, overview, materials list, steps
- Photo URLs, YouTube / Shorts, other links

## Auth & data

Same Google account / Firebase project as the site (`odc-files`).

Rules: `editor/database.rules.json` under `curriculum/`. Deploy:

```bash
cd editor && firebase deploy --only database --project odc-files
```
