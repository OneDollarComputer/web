# One Dollar Computer MCP for Codex

**Your first run: one command, one approval link, and Codex is programming your One Dollar Computer — about two minutes.**

Connect OpenAI's Codex CLI to your One Dollar Computer: create projects, write code, compile firmware for the board, from your terminal.

**Before you start:** Node.js 18+. You do not need an account first — the Google sign-in during approval creates one automatically.

## Step 1 — Add the MCP server

Run this in your terminal:

```bash
codex mcp add odc -- npx -y @onedollarcomputer/odc-mcp
```

That's the whole install — Codex writes the config for you (`~/.codex/config.toml`, shared with the Codex IDE extension).

## Step 2 — Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. The agent calls `odc_connect`, which returns an approval link. Open that link in any browser, sign in with Google (your first sign-in creates your account), confirm a username if asked, and click **Approve**. The tool receives the pairing token automatically; it is stored locally on your machine and can be revoked on the site at any time.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into your Codex session for the older pairing flow.

## Step 3 — Try it

- "List my One Dollar Computer projects"
- "Create a project that blinks the LED"
- "Compile my project"

## Troubleshooting

- **First start times out:** Codex gives new servers 10 seconds to start, and the very first `npx` run is busy downloading the package. Just run Codex again — it's cached now. (Or add `startup_timeout_sec = 60` under `[mcp_servers.odc]` in `~/.codex/config.toml`.)
- **A compile gets cut off at 60 seconds:** that's Codex's default tool timeout. Raise it with `tool_timeout_sec = 300` under `[mcp_servers.odc]`.
- **Check the connection:** run `codex mcp list`, or type `/mcp` inside a Codex session.

More: [General Guide](https://odc.rs/mcp/agents/general.md)
