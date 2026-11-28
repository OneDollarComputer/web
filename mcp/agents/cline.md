# One Dollar Computer MCP for Cline

**Your first run: paste one block, open one approval link, and Cline is programming your One Dollar Computer — about two minutes.**

Connect Cline to your One Dollar Computer: create projects, write code, compile firmware for the board, from the Cline panel.

**Before you start:** Node.js 18+. You do not need an account first — the Google sign-in during approval creates one automatically.

## Step 1 — Add the MCP server

In the Cline panel, click the **MCP Servers** icon → **Configure** tab → **Configure MCP Servers**, and paste under `mcpServers`:

```json
{
  "mcpServers": {
    "odc": {
      "command": "npx",
      "args": ["-y", "@onedollarcomputer/odc-mcp"],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Save — Cline connects automatically and shows the server in the panel.

## Step 2 — Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. The agent calls `odc_connect`, which returns an approval link. Open that link in any browser, sign in with Google (your first sign-in creates your account), confirm a username if asked, and click **Approve**. When Cline asks you to approve the `odc_connect` tool call, approve it. The tool receives the pairing token automatically; it is stored locally on your machine and can be revoked on the site at any time.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into a Cline chat for the older pairing flow.

## Step 3 — Try it

- "List my One Dollar Computer projects"
- "Create a project that blinks the LED"
- "Compile my project"

## Troubleshooting

- **Cline asks to approve every tool call:** that's the default. If it gets tedious, add the tool names you trust to `odc`'s `autoApprove` list in the same settings file.
- **Wrong file:** always edit through the **Configure MCP Servers** button — it opens the exact settings file Cline reads. (The Cline CLI reads `~/.cline/data/settings/cline_mcp_settings.json`.)
- **Server won't connect:** check the JSON is valid, then use the restart button next to the server in the MCP Servers panel.

More: [General Guide](https://odc.rs/mcp/agents/general.md)
