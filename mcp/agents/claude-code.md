# One Dollar Computer MCP for Claude Code

**Your first run: one command, one approval link, and your agent is programming your One Dollar Computer — about two minutes.**

Connect Claude Code to your One Dollar Computer: create projects, write code, compile firmware for the board, right from the terminal.

**Before you start:** Node.js 18+. You do not need an account first — the Google sign-in during approval creates one automatically.

## Step 1 — Add the MCP server

Run this in your terminal:

```bash
claude mcp add odc -- npx -y @onedollarcomputer/odc-mcp
```

That's the whole install. (Want it in every project, not just this one? Add `--scope user`.)

## Step 2 — Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. The agent calls `odc_connect`, which returns an approval link. Open that link in any browser, sign in with Google (your first sign-in creates your account), confirm a username if asked, and click **Approve**. The tool receives the pairing token automatically; it is stored locally on your machine and can be revoked on the site at any time.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into your Claude Code chat for the older pairing flow.

## Step 3 — Try it

- "List my One Dollar Computer projects"
- "Create a project that blinks the LED"
- "Compile my project"

## Troubleshooting

- **Server doesn't show up:** run `claude mcp list` to check its status, and `/mcp` inside a session for details.
- **You pasted JSON into `.mcp.json` instead:** that works too, but project-file servers ask for your approval the first time — approve the prompt, or use the command above, which needs no approval.
- **First launch is slow:** the first `npx` run downloads the package; every run after that is instant.

More: [General Guide](https://odc.rs/mcp/agents/general.md)
