# One Dollar Computer MCP for Continue

**Your first run: paste one YAML block, open one approval link, and Continue is programming your One Dollar Computer — about two minutes.**

Connect Continue to your One Dollar Computer: create projects, write code, compile firmware for the board, in Agent mode.

**Before you start:** Node.js 18+. You do not need an account first — the Google sign-in during approval creates one automatically.

## Step 1 — Add the MCP server

Add this block to `~/.continue/config.yaml`. Continue uses YAML — add the block to your existing file, don't replace the whole file:

```yaml
mcpServers:
  - name: odc
    command: npx
    args: ["-y", "@onedollarcomputer/odc-mcp"]
    env: {}
```

Save, and Continue picks the server up in Agent mode.

## Step 2 — Connect your account

Give your agent this link — [odc.rs/mcp](https://odc.rs/mcp) — and ask it to connect to your One Dollar Computer. The agent calls `odc_connect`, which returns an approval link. Open that link in any browser, sign in with Google (your first sign-in creates your account), confirm a username if asked, and click **Approve**. The tool receives the pairing token automatically; it is stored locally on your machine and can be revoked on the site at any time.

**Manual alternative:** if `odc_connect` is unavailable, sign in at [onedollarcomputer.com/c](https://onedollarcomputer.com/c), click **Agent → Copy**, and paste that connect link into a Continue chat in Agent mode for the older pairing flow.

## Step 3 — Try it

- "List my One Dollar Computer projects"
- "Create a project that blinks the LED"
- "Compile my project"

## Troubleshooting

- **YAML indentation errors:** the `odc` entry is a list item — keep the `- name: odc` line and the lines under it indented exactly as shown, and use spaces, not tabs.
- **Replaced the whole config file:** `config.yaml` also holds your agent's `name`, `version`, and models — restore those lines and keep the `mcpServers` block alongside them.
- **Tools don't appear:** MCP tools are only available in **Agent** mode, not in Chat or Edit mode.

More: [General Guide](https://odc.rs/mcp/agents/general.md)
