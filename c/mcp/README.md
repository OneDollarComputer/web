# odc MCP (curriculum + projects)

Stdio MCP for One Dollar Computer — curriculum lessons **and** firmware projects.

See [../README.md](../README.md) for pair flow and Cursor/`mcp.json` setup.

**Pair once:** Agent → **Copy** on `/c/` or `/project/` → `curriculum_pair` with that link (MCP server name: `odc-curriculum`).

**Projects:** `project_brief` → `project_list` / `project_create` / `project_get` / `project_update` / `project_publish` / `project_fork`  
**Lessons:** `curriculum_agent_brief` → `curriculum_create_lesson` / `curriculum_update_lesson` / …

**Hardware:** physical button (pin 13) = bootloader / Upload only — never `read_button()`. See [../../docs/BUTTON.md](../../docs/BUTTON.md).

```bash
npm install
node bin.js   # normally launched by the MCP host (Cursor: .cursor/mcp.json)
```
