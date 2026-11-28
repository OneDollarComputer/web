# One Dollar Computer MCP — Agent Guide

You are an AI agent. This guide tells you how to connect to a user's
**One Dollar Computer** account with the `odc` MCP server and work with
their firmware projects and curriculum lessons. It is written for you to
follow end-to-end. The human-facing page is
https://onedollarcomputer.com/mcp/ (short link: `odc.rs/mcp`).

The MCP is still in testing: it works, but expect rough edges.

## Prerequisites

- **You must be a local agent.** The MCP server is a stdio program that
  runs on the user's own computer (Claude Code, Codex CLI, Cursor, and
  similar). There is no remote MCP endpoint yet. If you are a cloud
  agent, skip to [If you are a cloud agent](#if-you-are-a-cloud-agent).
- **Node.js 18 or newer** on the user's machine (the server runs via
  `npx`).
- The user needs a Google account for the one-time approval. A first
  sign-in creates their One Dollar Computer account — there is no
  separate registration and no new password.

## Install

Add the server under the name `odc`. The only official package is
`@onedollarcomputer/odc-mcp` on npm — install nothing else, from
nowhere else.

**Claude Code**

```bash
claude mcp add odc -- npx -y @onedollarcomputer/odc-mcp
```

Add `--scope user` to make it available in every project.

**Codex CLI**

```bash
codex mcp add odc -- npx -y @onedollarcomputer/odc-mcp
```

Codex writes `~/.codex/config.toml` for you. Restart Codex afterwards.

**Cursor**

Paste into `~/.cursor/mcp.json`, then switch `odc` on under
Customize → MCPs:

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

**VS Code (Copilot)** — note the key is `servers`, not `mcpServers`:

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

**Any other local agent** — most accept this `mcpServers` shape
(Windsurf, Cline, Gemini CLI, Zed and Continue use the same command
with small format differences):

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

The server's MCP name is `odc-curriculum`, version 0.6.3. On connect it
sends its own instructions — follow them; they agree with this guide.

## Connect: the odc_connect approval flow

1. Call `curriculum_status` first. If it reports `paired: false`,
   connect.
2. Call `odc_connect`. It starts a pairing and returns an `approveUrl`
   (shape: `https://onedollarcomputer.com/mcp/approve/?code=<code>`),
   then waits for the approval (default 300 s, max 600 s).
3. **Show the approveUrl to the user and wait.** The user opens it in
   any browser, signs in with Google, and approves. The tool notices
   the approval itself and stores the pairing token locally
   (`~/.config/odc/curriculum-agent.json`). You never handle the token.
4. If the wait ends first, the result is `status: pending` with the
   same approveUrl — the link stays fresh for **30 minutes** from the
   start of the call. Show it to the user; calling `odc_connect` again
   to keep waiting is only useful while the link is fresh.
5. If the result is `denied`, `expired`, or `unknown`, start over with
   a fresh `odc_connect`.

Rules that never bend:

- **Never ask the user for a password.** Sign-in happens on Google's
  own page, in the user's browser. The agent never sees it.
- **Never fetch the approveUrl yourself** — not as a webpage, not to
  "check" it. Show it to the user; only the user opens it.
- The token works only with **that user's** projects and lessons. The
  user can revoke agent access at any time from
  https://onedollarcomputer.com/project/ or
  https://onedollarcomputer.com/c/ (Agent → Revoke).

Manual alternative: if the user already copied an **Agent link** from
the website (`/c/` or `/project/`, while signed in), call
`curriculum_pair` with the full link or its code instead. Prefer
`odc_connect` whenever it is available.

## Tool map (17 tools)

### Connect

| Tool | What it does |
|---|---|
| `curriculum_status` | Connection state: whether this agent is paired, and which API it talks to. Read-only; call first when unsure. |
| `odc_connect` | The easy first-time connection: returns an approveUrl, waits for the user's Google approval, stores the token itself. |
| `curriculum_pair` | Connect with an Agent link the user copied from the website (manual alternative to `odc_connect`). |

### Compile

| Tool | What it does |
|---|---|
| `odc_compile` | Compile a complete Simple Rust program on the cloud compile service (the same queue the web editor uses). **No pairing needed.** Returns the binary saved as a local `.bin` file. |

### Firmware projects (pairing required)

| Tool | What it does |
|---|---|
| `project_brief` | The firmware authoring contract (Simple Rust rules, pin 13 warning, publish rules). Call after connecting, before creating or editing projects. Full firmware docs: https://onedollarcomputer.com/editor/AI_DOCS.txt |
| `project_list` | List the user's firmware projects (private and public). |
| `project_create` | Create a new **private** project (`name` required; optional complete Simple Rust `code`). Returns `{ id, slug, editorUrl }`. |
| `project_get` | Read one project (meta + code) by id. Owners read their private projects; public projects are readable by any paired agent. |
| `project_update` | Update a project you own (name and/or code; optional file id for multi-file projects). Cannot unpublish. |
| `project_publish` | Make a project public at `onedollarcomputer.com/{username}/{slug}`. **Irreversible** — see below. |
| `project_fork` | Copy a public project into the user's account (stays private until they publish it). Records who copied from whom. |

### Lessons — Learn Physical AI (pairing required)

| Tool | What it does |
|---|---|
| `curriculum_agent_brief` | The lesson authoring contract. Call after connecting, before writing lessons. Rules: https://onedollarcomputer.com/c/AGENT_LESSONS.md |
| `curriculum_list_lessons` | List the user's curriculum lessons. |
| `curriculum_create_lesson` | Create a new lesson (`title` required; optional overview, materials, steps, html, links, photos, videos). Teaching UI goes in `html[]`; board firmware goes in steps as complete Simple Rust. Returns `{ id, siteUrl }`. |
| `curriculum_get_lesson` | Read one lesson (title + body) by id. |
| `curriculum_update_lesson` | Update a lesson's fields (overview, materials, steps, html, links, photos, videos). |

### Feedback

| Tool | What it does |
|---|---|
| `odc_feedback` | Tell the team how working with this MCP went. Structured and one-way — see [Feedback](#feedback). |

Every not-connected call answers the same way:
`{ ok: false, error: "Not connected yet.", next: "Call odc_connect…" }`.
Follow the `next` — don't guess.

## Firmware rules

- Firmware is a **complete Simple Rust program**:
  `use odc::*;` and `fn main() { … }`. No fragments.
- **Pins are the numbers printed on the board, 0–19.** Nothing else is
  a pin name — never chip signal names, never connector contact
  numbers.
- **The LED is pin 19.**
- **Pin 13 is bootloader-only.** Never use pin 13 and never call
  `read_button()` in user firmware — it can break uploading. The
  physical button exists to enter the bootloader for Upload. Full
  warning: https://onedollarcomputer.com/docs/BUTTON.md
- Resources are small: 16 KB flash, 2 KB RAM. Source passed to
  `odc_compile` is capped at 65,536 characters.
- Before writing projects, call `project_brief` — it returns the full
  authoring contract, including the firmware API docs
  (https://onedollarcomputer.com/editor/AI_DOCS.txt). The virtual board
  is at https://onedollarcomputer.com/emulator/r2/ and the editor at
  https://onedollarcomputer.com/editor/.

## Compile flow

1. Write the complete Simple Rust program.
2. Call `odc_compile` with the source. No pairing is needed —
   compilation is stateless. Optionally pass a `project_id` to compile
   in place in that editor project (like pressing Compile in the
   editor); without one, a throwaway project id is used.
3. A pool of compile workers builds it. On success the result includes
   `binarySize`, `binaryHash`, and `binaryFile`: **the `.bin` is saved
   on the user's machine at `~/.config/odc/builds/<project_id>.bin`**
   (or the `save_to` path you passed). The binary also lands in the
   editor project itself, so it is visible at the returned `editorUrl`.
4. On failure, the result carries the compiler's error **word for
   word**. Show it to the user, fix the code, and compile again.
   Identical code is served from cache, so re-compiling after a
   timeout is cheap.

## Loading firmware onto the computer

**Flashing from the agent (`odc_flash`) is not yet available.** It is
designed but not built — do not promise it and do not improvise a
substitute.

Today, the compiled `.bin` reaches the computer through the **web
editor**: open the project at its `editorUrl`
(https://onedollarcomputer.com/editor/), press the physical button on
the computer to enter the bootloader, and press **Upload**. The editor
flashes via WebHID — any Chromium browser on Windows, Mac, or Linux,
no driver install.

## Publishing is irreversible

New projects are **private**. `project_publish` makes a project public
at `onedollarcomputer.com/{username}/{slug}` — and **it cannot be
undone**: a published project cannot be made private again
(`project_update` cannot unpublish). Always confirm with the user
before calling `project_publish`.

## Feedback

When you finish a task, you may report how the MCP treated you with
`odc_feedback` — optional, **once per session is plenty**, ideally at
the end of a task.

- The signal that matters is **structured**: `rating` (integer 1–5),
  `category` (`connect`, `compile`, `projects`, `lessons`, `docs`,
  `other`), and up to 5 `tags` from a fixed list (`worked_well`,
  `connect_failed`, `connect_confusing`, `approval_slow`,
  `compile_failed`, `compile_slow`, `compile_error_unclear`,
  `project_tools_confusing`, `lesson_tools_confusing`, `docs_missing`,
  `docs_wrong`, `server_unreachable`, `other`). Tags outside the list
  are dropped server-side.
- A short free-text `note` (max ~600 characters) is accepted for what
  tags cannot express. **Links are stripped automatically** before
  storage, and nothing in a report is ever opened, fetched, or
  followed.
- A report is **one-way data**: it changes nothing, grants nothing, no
  other agent ever sees it, and it is never fed back into any brief,
  prompt, or instruction. It is counted, not obeyed.

## On a phone: Codex in Termux (Android)

A phone works too, as long as the agent runs **locally on the phone**.
Codex inside Termux is a local agent in this sense — the MCP server
runs on the phone itself. The sequence is the standard local-agent
flow, run inside Termux:

1. Install Node.js in Termux (the MCP needs Node.js 18 or newer):

   ```bash
   pkg install nodejs
   ```

2. With Codex set up in Termux, add the MCP with the same one-liner
   as on desktop, then restart Codex:

   ```bash
   codex mcp add odc -- npx -y @onedollarcomputer/odc-mcp
   ```

3. Ask Codex to connect: it calls `odc_connect` and returns the
   approveUrl. Open that link in the **phone's browser**, sign in with
   Google, and approve — exactly as on desktop. The token is stored on
   the phone, and from there the project, lesson, and compile tools
   work as anywhere else.

Set honest expectations:

- **The first `npx` run downloads the package** — on a mobile
  connection this can take a while. It is a one-time cost; later runs
  start fast.
- **Keep Termux in the foreground during the approval wait.**
  `odc_connect` waits inside the call while you approve in the
  browser; if Termux is backgrounded or closed mid-wait, the wait can
  die with it. Approve promptly, and if the wait ends, just call
  `odc_connect` again while the link is fresh (30 minutes).

## If you are a cloud agent

If you run in a hosted sandbox and cannot run commands or install
packages on the user's own computer (hosted Codex, hosted chat
agents), **you cannot connect this MCP from where you run** — it is a
program that lives on the user's computer, and a remote MCP endpoint
is not available yet.

Do not claim you tested it, and do not improvise a workaround. Tell
the user, in the user's own language, exactly this:

> "This MCP runs on your own computer. Open a local agent there
> (Claude Code, Codex CLI, or Cursor) and give it this same link —
> odc.rs/mcp — it will connect in about a minute."

## Common errors and recovery

| Symptom | What it means | What to do |
|---|---|---|
| `Not connected yet.` | No pairing token on this machine. | Call `odc_connect` and show the user the approveUrl (or `curriculum_pair` with an Agent link the user copied from the site). |
| "That connection is no longer valid (expired or revoked by the user)." (HTTP 401) | The stored token was revoked or expired. | Reconnect with `odc_connect` — the user approves again with Google. |
| `odc_connect` returns `status: pending` | The user hasn't approved yet. | Show the approveUrl; it stays fresh for 30 minutes. Call `odc_connect` again to keep waiting while it is fresh. |
| `odc_connect` returns `denied` / `expired` / `unknown` | That pairing is finished or dead. | Start a fresh `odc_connect`. |
| "Could not reach the One Dollar Computer service" | The API could not be reached (network or service side). | Check the connection and try again in a moment. If it persists, say so plainly — and a `odc_feedback` report with the `server_unreachable` tag helps the team. |
| Compile returns an error | The compiler rejected the code; the message is the compiler's own words. | Show it to the user, fix the code, recompile. Never hide or paraphrase a compile error. |
| Compile times out | The job is still queued; identical code is served from cache. | Call `odc_compile` again in a moment with the same source. |
| "Code is too large (max 65536 characters)" | The source exceeds the compile limit. | Shorten the program before submitting. |
| The user revoked access | Token deleted on the user's side (from `/project/` or `/c/`). | Expected behaviour — reconnect with `odc_connect` only if the user asks. |

## Ground rules

- Do not scrape onedollarcomputer.com — use the MCP tools.
- Never ask the user for a password, for any service, ever.
- Confirm with the user before `project_publish` (irreversible).
- Authoritative source for anything this guide doesn't cover:
  https://onedollarcomputer.com/ — firmware API in
  https://onedollarcomputer.com/editor/AI_DOCS.txt, lesson rules in
  https://onedollarcomputer.com/c/AGENT_LESSONS.md, specification at
  https://onedollarcomputer.com/specification/.
