# One Dollar Computer MCP for Zed

**Your first run: paste one block (Zed's own format), open one approval link, and Zed's agent is programming your One Dollar Computer — about two minutes.**

Connect Zed's Agent Panel to your One Dollar Computer: create projects, write code, compile firmware for the board.

**Before you start:** Node.js 18+. You do not need an account first — the Google sign-in during approval creates one automatically.

## Step 1 — Add the MCP server

Paste this into `~/.config/zed/settings.json`. Heads-up: Zed calls these **context servers** — its key is different from every other agent, so use this exact snippet:

```json
{
  "context_servers": {
    "odc": {
      "command": "npx",
      "args": ["-y", "@onedollarcomputer/odc-mcp"],
      "env": {}
    }
  }
}
```

(You can also add it from the Agent Panel settings with **Add Custom Server**.) Reload Zed or restart it so the server connects.

## Step 2 — Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. The agent calls `odc_connect`, which returns an approval link. Open that link in any browser, sign in with Google (your first sign-in creates your account), confirm a username if asked, and click **Approve**. The tool receives the pairing token automatically; it is stored locally on your machine and can be revoked on the site at any time.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into an Agent Panel chat for the older pairing flow.

## Step 3 — Try it

- "List my One Dollar Computer projects"
- "Create a project that blinks the LED"
- "Compile my project"

## Troubleshooting

- **Nothing happened after pasting:** the most common mistake is using the `mcpServers` key from other agents' instructions — Zed only reads `context_servers`. Check the key, then reload.
- **Zed asks permission for each tool call:** that's the default. You can pre-allow specific tools in Zed's agent settings if you trust them.
- **`npx` not found:** Zed launched from the dock/Finder may not inherit your shell's PATH (common with nvm/fnm). Install Node system-wide, or put the full path to `npx` in `command`.

More: [General Guide](https://odc.rs/mcp/agents/general.md)
