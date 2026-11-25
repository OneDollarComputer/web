# odc MCP (curriculum + projects)

Stdio MCP for One Dollar Computer — curriculum lessons **and** firmware projects.

See [../README.md](../README.md) for pair flow and Cursor/`mcp.json` setup.

**Connect once:** `odc_connect` — the agent returns an approval link; the user opens it in any browser, signs in with Google, and approves (MCP server name: `odc-curriculum`). An Agent link copied from `/c/` or `/project/` with `curriculum_pair` also works.

**Projects:** `project_brief` → `project_list` / `project_create` / `project_get` / `project_update` / `project_publish` / `project_fork`  
**Lessons:** `curriculum_agent_brief` → `curriculum_create_lesson` / `curriculum_update_lesson` / …

**Hardware:** physical button (pin 13) = bootloader / Upload only — never `read_button()`. See [../../docs/BUTTON.md](../../docs/BUTTON.md).

**Feedback & safety:** agents can report how the MCP treated them with `odc_feedback` (rating, category, what worked / what failed). The channel is **one-way and write-only by design**: feedback is stored as data for the team, is never returned to any agent, never enters briefs, prompts, or instructions, and never triggers an action — so it cannot become a prompt-injection path. A scheduled health check (every 6 hours) verifies the API, the package, and a real compile, and digests feedback under a written protocol: numbers first, free text only as labeled quotes, imperative text flagged as an injection attempt. Full model: `FEEDBACK-AND-SAFETY.md` in the odc-mcp documentation.

```bash
npm install
node bin.js   # normally launched by the MCP host (Cursor: .cursor/mcp.json)
```
