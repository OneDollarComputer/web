# One Dollar Computer MCP for Gemini CLI

**Your first run: paste one block, open one approval link, and Gemini CLI is programming your One Dollar Computer — about two minutes.**

Connect Google's Gemini CLI to your One Dollar Computer: create projects, write code, compile firmware for the board, from your terminal.

**Before you start:** Node.js 18+. You do not need an account first — the Google sign-in during approval creates one automatically.

## Step 1 — Add the MCP server

Paste this into `~/.gemini/settings.json` (create the file if it doesn't exist). For one project only, use `.gemini/settings.json` in the project instead:

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

Restart `gemini` and type `/mcp` — `odc` should be listed as connected.

## Step 2 — Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. The agent calls `odc_connect`, which returns an approval link. Open that link in any browser, sign in with Google (your first sign-in creates your account), confirm a username if asked, and click **Approve**. The tool receives the pairing token automatically; it is stored locally on your machine and can be revoked on the site at any time.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into your Gemini CLI session for the older pairing flow.

## Step 3 — Try it

- "List my One Dollar Computer projects"
- "Create a project that blinks the LED"
- "Compile my project"

## Troubleshooting

- **Server doesn't appear:** settings only load at startup — quit and relaunch `gemini`, then check `/mcp`.
- **Gemini asks to confirm every tool call:** that's the default for MCP servers. If you trust this server, add `"trust": true` to the `odc` entry in settings.
- **Wrong file:** user settings live at `~/.gemini/settings.json`; a `.gemini/settings.json` in a project only applies inside that project.

More: [General Guide](https://odc.rs/mcp/agents/general.md)
