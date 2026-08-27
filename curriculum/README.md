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

## Agent (MCP)

1. Sign in on `/curriculum/` → **Agent** → **Copy** the link  
2. Paste the link into your agent → `curriculum_pair`  
3. Agent lists and edits your lessons — no extra confirm step  

The link is ready as soon as you copy it (while signed in). **Revoke** on the site to disconnect.

### Cursor MCP (`~/.cursor/mcp.json`)

```json
{
  "mcpServers": {
    "odc-curriculum": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/web/curriculum/mcp/bin.js"],
      "env": {
        "ODC_CURRICULUM_API": "https://us-central1-odc-files.cloudfunctions.net/curriculumAgent"
      }
    }
  }
}
```

Install MCP deps once: `cd curriculum/mcp && npm install`

Tools: `curriculum_pair`, `curriculum_status`, `curriculum_list_lessons`, `curriculum_get_lesson`, `curriculum_update_lesson`

Token is stored at `~/.config/odc/curriculum-agent.json` after a successful pair.

### curl

```bash
API=https://us-central1-odc-files.cloudfunctions.net/curriculumAgent

# After copy (instructor signed in on /curriculum/):
curl "$API/pair/status?code=YOUR_CODE"

# Then:
curl -H "Authorization: Bearer odc_agent_…" "$API/lessons"
curl -H "Authorization: Bearer odc_agent_…" "$API/lessons/LESSON_ID"
curl -X PATCH -H "Authorization: Bearer odc_agent_…" -H "Content-Type: application/json" \
  -d '{"overview":"Updated by agent"}' "$API/lessons/LESSON_ID"
```

**Revoke:** on the site, **Revoke tokens**.

## Lesson materials

- Title, overview, materials list, steps
- Photo URLs, YouTube / Shorts, other links
- **HTML** blocks (HTML5 markup, inline in the lesson)

## Auth & data

Same Google account / Firebase project as the site (`odc-files`).

Rules: `editor/database.rules.json` under `curriculum/`. Agent pairing paths are Admin-only.

```bash
firebase deploy --only database,functions --project odc-files
```
