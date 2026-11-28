# One Dollar Computer MCP for VS Code

**Your first run: paste one command line, open one approval link, and Copilot is programming your One Dollar Computer — about two minutes.**

Connect VS Code and Muse to your One Dollar Computer: create projects, write code, compile firmware for the board, from Copilot Chat.

**Before you start:** Node.js 18+. You do not need an account first — the Google sign-in during approval creates one automatically.

## Step 1 — Add the MCP server

Open the Command Palette (`Ctrl/Cmd+Shift+P`) → **MCP: Add Server** → **Command (stdio)** → paste this launch line:

```
npx -y @onedollarcomputer/odc-mcp
```

Name it `odc`, and choose **Global** (all workspaces) or **Workspace** (this project only). VS Code writes the config for you — if you'd rather paste it yourself, this is what it saves (note: VS Code calls the top-level key `servers`):

```json
{
  "servers": {
    "odc": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@onedollarcomputer/odc-mcp"]
    }
  }
}
```

## Step 2 — Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. The agent calls `odc_connect`, which returns an approval link. Open that link in any browser, sign in with Google (your first sign-in creates your account), confirm a username if asked, and click **Approve**. The tool receives the pairing token automatically; it is stored locally on your machine and can be revoked on the site at any time.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into a Copilot Chat in agent mode for the older pairing flow.

## Step 3 — Try it

- "List my One Dollar Computer projects"
- "Create a project that blinks the LED"
- "Compile my project"

## Troubleshooting

- **VS Code asks whether you trust the server:** workspace servers always ask once before starting — that's expected; choose trust to continue.
- **Tools don't show in chat:** MCP tools only appear in Copilot Chat's **agent mode**, and the server must be started — click the tools icon in chat and check `odc` is running.
- **Used the `mcpServers` key by hand:** that's the format for the new Copilot harness files (`~/.copilot/mcp-config.json`, workspace-root `.mcp.json`). The classic `.vscode/mcp.json` needs `servers` — or just use the **MCP: Add Server** flow above and VS Code writes the right one.

More: [General Guide](https://odc.rs/mcp/agents/general.md)
