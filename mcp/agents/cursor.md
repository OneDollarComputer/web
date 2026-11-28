# One Dollar Computer MCP for Cursor

**Your first run: paste one block, open one approval link, and Cursor is programming your One Dollar Computer — about two minutes.**

Connect Cursor to your One Dollar Computer: create projects, write code, compile firmware for the board, without leaving the editor.

**Before you start:** Node.js 18+. You do not need an account first — the Google sign-in during approval creates one automatically.

## Step 1 — Add the MCP server

Paste this into `~/.cursor/mcp.json` (create the file if it doesn't exist). For one project only, use `.cursor/mcp.json` in the project instead:

```json
{
  "mcpServers": {
    "odc": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@onedollarcomputer/odc-mcp"]
    }
  }
}
```

Then open **Customize → MCPs** in Cursor's sidebar and make sure `odc` is switched on.

## Step 2 — Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. The agent calls `odc_connect`, which returns an approval link. Open that link in any browser, sign in with Google (your first sign-in creates your account), confirm a username if asked, and click **Approve**. The tool receives the pairing token automatically; it is stored locally on your machine and can be revoked on the site at any time.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into a Cursor chat for the older pairing flow.

## Step 3 — Try it

- "List my One Dollar Computer projects"
- "Create a project that blinks the LED"
- "Compile my project"

## Troubleshooting

- **`odc` doesn't appear:** check the file is valid JSON and named exactly `mcp.json` in the `.cursor` folder; then toggle the server off and on in **Customize → MCPs**.
- **Cursor asks before each tool call:** that's the default approval behavior — approve the call, or relax it in Cursor's Run Mode settings.
- **Still stuck:** open the Output panel and select **MCP Logs** to see the connection error.

More: [General Guide](https://odc.rs/mcp/agents/general.md)
