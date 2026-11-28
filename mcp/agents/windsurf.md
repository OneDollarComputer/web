# One Dollar Computer MCP for Windsurf

**Your first run: paste one block, open one approval link, and Cascade is programming your One Dollar Computer — about two minutes.**

Connect Windsurf (now Devin Desktop) and its Cascade agent to your One Dollar Computer: create projects, write code, compile firmware for the board.

**Before you start:** Node.js 18+. You do not need an account first — the Google sign-in during approval creates one automatically.

## Step 1 — Add the MCP server

In the Cascade panel, open the MCP menu and choose **Open MCP config file**, then paste:

```json
{
  "mcpServers": {
    "odc": {
      "command": "npx",
      "args": ["-y", "@onedollarcomputer/odc-mcp"],
      "env": {}
    }
  }
}
```

Click the refresh button in the MCP menu so Cascade picks it up. The file is `~/.config/devin/mcp_config.json` (Windows: `%AppData%/devin/mcp_config.json`).

## Step 2 — Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. The agent calls `odc_connect`, which returns an approval link. Open that link in any browser, sign in with Google (your first sign-in creates your account), confirm a username if asked, and click **Approve**. The tool receives the pairing token automatically; it is stored locally on your machine and can be revoked on the site at any time.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into a Cascade chat for the older pairing flow.

## Step 3 — Try it

- "List my One Dollar Computer projects"
- "Create a project that blinks the LED"
- "Compile my project"

## Troubleshooting

- **Old guides point to `~/.codeium/windsurf/mcp_config.json`:** that's the legacy path from before the Devin Desktop rename — use the config file the MCP menu opens for you.
- **Server missing after pasting:** check the JSON is valid and click refresh in the MCP menu; Cascade doesn't always reload on save.
- **Tools seem to disappear:** Cascade allows 100 MCP tools in total across all servers — if you run many servers, disable a few and `odc`'s tools will fit again.

More: [General Guide](https://odc.rs/mcp/agents/general.md)
