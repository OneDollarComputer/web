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

1. Sign in on `/curriculum/` → **Agent** → **Copy**  
2. Paste into your agent → approve the terminal commands  
3. Say what to change in your lessons  

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

### Codex

This repo includes `.codex/config.toml` (project MCP). In Codex:

1. Open this repo as a **trusted** project (Settings → MCP — server may show there)
2. `cd curriculum/mcp && npm install`
3. Start a new task, paste the Agent link from `/curriculum/`

Or add to `~/.codex/config.toml` (any machine):

```toml
[mcp_servers.odc-curriculum]
command = "node"
args = ["/ABSOLUTE/PATH/TO/web/curriculum/mcp/bin.js"]

[mcp_servers.odc-curriculum.env]
ODC_CURRICULUM_API = "https://us-central1-odc-files.cloudfunctions.net/curriculumAgent"
```

Docs: https://developers.openai.com/codex/mcp

### No MCP (curl)

Extract `connect=` from the Agent link, then:

```bash
API=https://us-central1-odc-files.cloudfunctions.net/curriculumAgent
CODE=YOUR_CONNECT_CODE
TOKEN=$(curl -sS "$API/pair/status?code=$CODE" | python3 -c "import sys,json; print(json.load(sys.stdin)['token'])")
curl -sS -H "Authorization: Bearer $TOKEN" "$API/lessons"
```

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
