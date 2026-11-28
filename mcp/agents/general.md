# One Dollar Computer MCP — General Guide

The One Dollar Computer MCP server connects your favorite AI coding agent — Claude Code, Cursor, Codex, and more — directly to your One Dollar Computer account. Your agent can list and open your projects, write and edit code, work with lessons, compile firmware for the board, all without leaving the chat.

**New here?** Pick your agent for a two-minute first run:

[Claude Code](https://odc.rs/mcp/agents/claude-code.md) · [Cursor](https://odc.rs/mcp/agents/cursor.md) · [Windsurf](https://odc.rs/mcp/agents/windsurf.md) · [Cline](https://odc.rs/mcp/agents/cline.md) · [Codex](https://odc.rs/mcp/agents/codex.md) · [Gemini CLI](https://odc.rs/mcp/agents/gemini-cli.md) · [VS Code](https://odc.rs/mcp/agents/vscode.md) · [Zed](https://odc.rs/mcp/agents/zed.md) · [Continue](https://odc.rs/mcp/agents/continue.md)

## Add it to any agent

Most agents accept the same `mcpServers` JSON. Add this entry to your agent's MCP configuration, using the server name `odc`:

```json
{
  "mcpServers": {
    "odc": {
      "command": "npx",
      "args": ["-y", "@onedollarcomputer/odc-mcp"]
    }
  }
}
```

Some agents keep this in a different file or format — Codex uses TOML, Zed uses a `context_servers` key, VS Code's editor format uses `servers`, and Continue uses YAML. The per-agent guides above have the exact snippet for each one, ready to paste.

You need Node.js 18 or newer installed — the server runs through `npx`.

## Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. After the server is installed, the agent calls `odc_connect` itself. The tool returns an approval link for you to open in any browser:

1. Open the approval link the agent shows you.
2. Sign in with Google. If you do not have an account yet, that first sign-in creates one automatically.
3. Confirm a username if asked, then click **Approve**.
4. The agent receives its pairing token automatically — there is no connect link to copy or paste.

The pairing token is stored locally on your machine, in `~/.config/odc/`. It only ever talks to your own account, and you can revoke it at any time from the site. No password is ever asked for or stored.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into your agent's chat for the older pairing flow.

## What your agent can do

**Pairing & account**
- `odc_connect` — connect the server by showing you a Google approval link and receiving the token automatically
- `curriculum_pair` — manual alternative: pair the server with a connect link copied from the site
- `curriculum_status` — check whether the server is paired and connected
- `curriculum_agent_brief` — a short orientation about your account for the agent

**Lessons**
- `curriculum_list_lessons` — list your lessons
- `curriculum_create_lesson` — create a lesson
- `curriculum_get_lesson` — read a lesson
- `curriculum_update_lesson` — edit a lesson

**Projects**
- `project_brief` — a summary of a project for the agent
- `project_list` — list your projects
- `project_create` — create a project
- `project_get` — read a project's code
- `project_update` — save code to a project
- `project_publish` — publish a project (publishing is permanent)
- `project_fork` — copy a project into your account

From there the loop is the fun part: ask your agent to create a project, write the code, and compile it. Getting the compiled firmware onto the computer itself happens in the web editor: press the board's button to enter the bootloader, then **Upload** over WebHID — the MCP cannot load firmware to the board yet.

## How it works / privacy

The server is a small program that runs **on your own machine**, started by your agent. It talks only to the One Dollar Computer service, over HTTPS, using your pairing token — and only to your own account. There is no third party in between: your agent, the server on your machine, and your account. Unpair or revoke the token on the site at any time and the connection is gone.
