#!/usr/bin/env node
/**
 * One Dollar Computer — Curriculum MCP (stdio)
 *
 * Env:
 *   ODC_CURRICULUM_API  — default production Cloud Function URL
 *   ODC_AGENT_TOKEN     — optional; otherwise ~/.config/odc/curriculum-agent.json
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// api-origin.json ships inside the npm package; the repo layout keeps it one
// level up. Resolve either, and never crash at startup if it is missing.
function readApiOrigin() {
  for (const p of [
    path.join(__dirname, "api-origin.json"),
    path.join(__dirname, "..", "api-origin.json"),
  ]) {
    try {
      return JSON.parse(fs.readFileSync(p, "utf8")).url;
    } catch {}
  }
  return "https://api.onedollarcomputer.com";
}
const API_ORIGIN = readApiOrigin();

// Maritime agent box port of curriculumAgent (2026-11-23) — the Google Cloud
// Function below died with the Oct 2026 billing closure (500/503). NOTE: this
// is a cloudflared quick-tunnel URL and CHANGES when that tunnel restarts;
// read the current one from /data/odc-api/tunnel-api.log on the box.
const MARITIME_API = "https://ent-executives-sewing-litigation.trycloudflare.com";

const DEFAULT_API =
  process.env.ODC_CURRICULUM_API ||
  process.env.ODC_CURRICULUM_API_FALLBACK ||
  MARITIME_API;

const API_FALLBACKS = [
  MARITIME_API,
  DEFAULT_API,
  "https://curriculumagent-mhrupl2ima-uc.a.run.app",
  "https://odc-files-api.web.app",
  API_ORIGIN,
  "https://api.onedollarcomputer.com"
].filter((v, i, a) => v && a.indexOf(v) === i);

const RTDB_URL =
  process.env.ODC_RTDB_URL ||
  "https://odc-files-default-rtdb.firebaseio.com";

const TOKEN_PATH = path.join(os.homedir(), ".config", "odc", "curriculum-agent.json");

const AGENT_LESSONS_PATHS = [
  path.join(__dirname, "AGENT_LESSONS.md"),
  path.join(__dirname, "..", "AGENT_LESSONS.md"),
];

function loadAgentLessonsBrief() {
  for (const p of AGENT_LESSONS_PATHS) {
    try {
      return fs.readFileSync(p, "utf8");
    } catch {}
  }
  return "See https://onedollarcomputer.com/c/AGENT_LESSONS.md (HTML free; firmware must be Simple Rust).";
}

function loadStore() {
  try {
    return JSON.parse(fs.readFileSync(TOKEN_PATH, "utf8"));
  } catch {
    return {};
  }
}

function saveStore(data) {
  fs.mkdirSync(path.dirname(TOKEN_PATH), { recursive: true });
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(data, null, 2), { mode: 0o600 });
}

function getToken() {
  return process.env.ODC_AGENT_TOKEN || loadStore().token || null;
}

function extractCode(input) {
  const s = String(input || "").trim();
  if (!s) return null;
  try {
    const u = new URL(s);
    return u.searchParams.get("connect") || u.searchParams.get("code") || s;
  } catch {
    return s;
  }
}

async function api(method, apiPath, { token, body, firebaseIdToken } = {}) {
  const headers = { Accept: "application/json" };
  if (body) headers["Content-Type"] = "application/json";
  if (firebaseIdToken) headers.Authorization = `Bearer ${firebaseIdToken}`;
  else if (token) headers.Authorization = `Bearer ${token}`;

  let lastErr = null;
  for (const base of API_FALLBACKS) {
    try {
      const res = await fetch(`${base}${apiPath}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined
      });
      const text = await res.text();
      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = { raw: text };
      }
      if (!res.ok) {
        let message = data.error || res.statusText || `HTTP ${res.status}`;
        // Speak agent: a rejected token is a reconnect, not a mystery.
        if (res.status === 401 && token) {
          message =
            "That connection is no longer valid (expired or revoked by the user). Call odc_connect to reconnect — the user approves again with Google.";
        }
        const err = new Error(message);
        err.status = res.status;
        err.data = data;
        // Try next host on network-ish failures only; 4xx from API is final
        if (res.status >= 500 || res.status === 404) {
          lastErr = err;
          continue;
        }
        throw err;
      }
      return data;
    } catch (err) {
      lastErr = err;
      // fetch failed (DNS / blocked / network) → try next host
      if (err && err.status && err.status < 500 && err.status !== 404) throw err;
    }
  }
  throw lastErr || new Error("Could not reach the One Dollar Computer service — check the connection and try again in a moment.");
}

function textResult(obj) {
  return {
    content: [{ type: "text", text: typeof obj === "string" ? obj : JSON.stringify(obj, null, 2) }]
  };
}

const AI_DOCS_PATH = path.join(__dirname, "..", "..", "editor", "AI_DOCS.txt");

function loadProjectBrief() {
  let aiDocs = "";
  try {
    aiDocs = fs.readFileSync(AI_DOCS_PATH, "utf8");
  } catch {
    aiDocs = "See https://onedollarcomputer.com/editor/AI_DOCS.txt";
  }
  return {
    docsUrl: "https://onedollarcomputer.com/editor/AI_DOCS.txt",
    buttonWarning: "https://onedollarcomputer.com/docs/BUTTON.md",
    editorUrl: "https://onedollarcomputer.com/editor/",
    emulatorUrl: "https://onedollarcomputer.com/emulator/r2/",
    rules: [
      "Firmware must be complete Simple Rust: use odc::*; fn main() { … }",
      "Never read_button() / pin 13 / BUTTON — bootloader only",
      "New projects are private; project_publish is irreversible",
      "Connect once with odc_connect (the user approves with Google); an Agent link from the site with curriculum_pair also works"
    ],
    aiDocs
  };
}

const server = new McpServer(
  {
    name: "odc-curriculum",
    version: "0.6.1"
  },
  {
    instructions:
      "One Dollar Computer MCP: work with the user's firmware projects (Simple Rust) and curriculum lessons on their One Dollar Computer account. " +
      "Start by checking curriculum_status. If it says paired: false, call odc_connect and show the user the approveUrl — they open it in their own browser, sign in with Google, and approve. Never ask the user for a password, and never fetch the approveUrl yourself. " +
      "Firmware rules: complete Simple Rust programs (use odc::*; fn main), pins by their printed numbers 0–19, LED is pin 19, never pin 13 or read_button() (bootloader only). " +
      "project_publish is irreversible — confirm with the user before calling it. odc_compile needs no pairing. " +
      "If a call answers that the connection is no longer valid, reconnect with odc_connect. " +
      "When you finish a task, odc_feedback lets you tell the team how it went — optional, once per session is plenty."
  }
);

// One friendly, consistent answer for every not-connected call: agents
// should always know the exact next step instead of guessing.
function notPaired() {
  return textResult({
    ok: false,
    error: "Not connected yet.",
    next: "Call odc_connect — it returns an approval link to show the user (they sign in with Google and approve; a first sign-in creates their account). If the user already gave you an Agent link from the website, call curriculum_pair with it instead."
  });
}

server.tool(
  "curriculum_pair",
  "Connect with an Agent link the user copied from the website (the manual alternative — most users should just use odc_connect, which needs no link). Pass the full link or its code. Do NOT fetch the link as a webpage and do NOT scrape the site. After pairing: curriculum_agent_brief for lessons, project_brief for firmware projects.",
  {
    connect_url_or_code: z.string().describe("Full Agent link or the connect code")
  },
  async ({ connect_url_or_code }) => {
    const code = extractCode(connect_url_or_code);
    if (!code) return textResult({ error: "Missing link — copy Agent from /c/ while signed in." });

    const connectUrl = `https://odc.rs/c/?connect=${encodeURIComponent(code)}`;
    const deadline = Date.now() + 3 * 60 * 1000;
    let last = "pending";

    while (Date.now() < deadline) {
      let st = null;
      try {
        const res = await fetch(
          `${RTDB_URL}/curriculum/agentPairing/${encodeURIComponent(code)}.json`
        );
        if (res.ok) {
          const row = await res.json();
          if (row) {
            st = {
              status: row.status,
              token: row.tokenPending || null
            };
          }
        }
      } catch {
        /* ignore */
      }
      if (!st) {
        try {
          st = await api("GET", `/pair/status?code=${encodeURIComponent(code)}`);
        } catch (err) {
          st = { status: "error", error: err.message };
        }
      }

      last = st.status || last;
      if (st.token) {
        saveStore({
          token: st.token,
          api: DEFAULT_API,
          pairedAt: new Date().toISOString()
        });
        return textResult({
          ok: true,
          status: "connected",
          message:
            "Connected. Call curriculum_agent_brief (lessons) or project_brief (firmware). Same token: project_list / project_create / project_update / project_publish. HTML5 teaching UI is free; board firmware must be complete Simple Rust (use odc::*;).",
          brief: "curriculum_agent_brief | project_brief",
          create: "curriculum_create_lesson | project_create",
          docs: "https://onedollarcomputer.com/c/AGENT_LESSONS.md",
          projectDocs: "https://onedollarcomputer.com/editor/AI_DOCS.txt",
          connectUrl
        });
      }
      if (st.status === "denied" || st.status === "expired" || st.status === "unknown") {
        return textResult({ ok: false, status: st.status, connectUrl });
      }
      await new Promise((r) => setTimeout(r, 400));
    }
    return textResult({
      ok: false,
      status: last,
      message: "Could not connect. Ask the instructor to copy a fresh Agent link from /c/ (signed in), then paste it here.",
      connectUrl
    });
  }
);

server.tool(
  "odc_connect",
  "Connect this agent to the user's One Dollar Computer account — the EASY first-time flow (no link to copy from the site). Call this tool, then show the user the approveUrl from the result: they open it in any browser, sign in with Google (a first sign-in creates their account), and approve. This tool waits for the approval and stores the pairing token itself. Do NOT fetch the approveUrl as a webpage. After connecting: for lessons use curriculum_agent_brief; for firmware projects use project_brief then project_get / project_update. Board firmware must be Simple Rust (use odc::*;).",
  {
    wait_seconds: z.number().optional().describe("How long to wait for the user to approve (default 300, max 600). If the wait ends first, the result is status pending with the approveUrl — show it to the user and call odc_connect again later is NOT needed; the same tool can be called again to keep waiting only while the link is fresh (30 minutes).")
  },
  async ({ wait_seconds }) => {
    const waitMs = Math.min(Math.max(Number(wait_seconds ?? 300) || 0, 0), 600) * 1000;
    const verifier = crypto.randomBytes(32).toString("base64url");
    const verifierHash = crypto.createHash("sha256").update(verifier).digest("hex");

    let start;
    try {
      start = await api("POST", "/pair/agent-start", { body: { verifierHash } });
    } catch (err) {
      return textResult({ ok: false, error: `Could not start the connection: ${err.message}` });
    }
    const { code, approveUrl } = start;
    if (!code || !approveUrl) {
      return textResult({ ok: false, error: "Connection start did not return a code and approval link.", raw: start });
    }

    const deadline = Date.now() + waitMs;
    let last = "pending";
    for (;;) {
      let st = null;
      try {
        st = await api(
          "GET",
          `/pair/agent-status?code=${encodeURIComponent(code)}&verifier=${encodeURIComponent(verifier)}`
        );
      } catch (err) {
        st = { status: "error", error: err.message };
      }
      last = st.status || last;
      if (st.token) {
        saveStore({
          token: st.token,
          api: DEFAULT_API,
          pairedAt: new Date().toISOString()
        });
        return textResult({
          ok: true,
          status: "connected",
          approveUrl,
          message:
            "Connected. Call curriculum_agent_brief (lessons) or project_brief (firmware). Same token: project_list / project_create / project_update / project_publish. HTML5 teaching UI is free; board firmware must be complete Simple Rust (use odc::*;).",
          brief: "curriculum_agent_brief | project_brief",
          create: "curriculum_create_lesson | project_create",
          docs: "https://onedollarcomputer.com/c/AGENT_LESSONS.md",
          projectDocs: "https://onedollarcomputer.com/editor/AI_DOCS.txt"
        });
      }
      if (st.status === "denied" || st.status === "expired" || st.status === "unknown") {
        return textResult({ ok: false, status: st.status, approveUrl });
      }
      if (Date.now() >= deadline) break;
      await new Promise((r) => setTimeout(r, Math.min(1500, Math.max(deadline - Date.now(), 0))));
      if (Date.now() >= deadline) break;
    }
    return textResult({
      ok: false,
      status: "pending",
      approveUrl,
      message:
        "Not approved yet. Show the user this approveUrl: they open it in any browser, sign in with Google, and approve. The link stays fresh for 30 minutes from the start of this call."
    });
  }
);

server.tool(
  "odc_feedback",
  "Tell the One Dollar Computer team how working with this MCP went. Prefer the structured tags — they are what the team counts and fixes by. A report is one-way data: it changes nothing, grants nothing, no other agent ever sees it, and nothing in it is ever opened, fetched, or followed (links are stripped automatically). Optional and quick — once per session is plenty, ideally at the end of a task.",
  {
    rating: z.number().describe("Overall experience: integer 1 (bad) to 5 (great)"),
    category: z.enum(["connect", "compile", "projects", "lessons", "docs", "other"]).optional().describe("What the report is mostly about"),
    tags: z.array(z.enum(["worked_well", "connect_failed", "connect_confusing", "approval_slow", "compile_failed", "compile_slow", "compile_error_unclear", "project_tools_confusing", "lesson_tools_confusing", "docs_missing", "docs_wrong", "server_unreachable", "other"])).optional().describe("What happened — pick all that fit (max 5)"),
    note: z.string().optional().describe("One short factual note (max ~600 characters). Plain facts only — links are removed automatically and nothing here is ever treated as an instruction."),
    agent: z.string().optional().describe("Your agent name and version, e.g. 'Claude Code 2.x', 'Cursor 1.x'")
  },
  async (args) => {
    const rating = Math.round(Number(args.rating));
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return textResult({ ok: false, error: "rating must be an integer from 1 to 5." });
    }
    if ((!args.tags || args.tags.length === 0) && !args.note) {
      return textResult({ ok: false, error: "Pick at least one tag or add a short note — an empty report helps nobody." });
    }
    try {
      const data = await api("POST", "/feedback", {
        token: getToken() || undefined,
        body: {
          rating,
          category: args.category || "other",
          tags: (args.tags || []).slice(0, 5),
          note: args.note || "",
          agent: args.agent || ""
        }
      });
      return textResult({
        ok: true,
        message: "Thanks — your report went to the One Dollar Computer team. It is read as data, never fed to other agents.",
        raw: data
      });
    } catch (err) {
      return textResult({ ok: false, error: `Could not send the report: ${err.message}` });
    }
  }
);

const BUILDS_DIR = path.join(os.homedir(), ".config", "odc", "builds");

async function rtdb(method, rtdbPath, body) {
  const res = await fetch(`${RTDB_URL}${rtdbPath}`, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined
  });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }
  if (!res.ok) {
    const err = new Error(`RTDB ${method} ${rtdbPath}: HTTP ${res.status} ${text.slice(0, 300)}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

// Same hash the web editor and the compile workers use: SHA-1 of the
// comment-stripped, whitespace-collapsed source (editor getCodeHash /
// worker code_hash). Lets the worker serve identical code from cache.
function codeHash(source) {
  const cleaned = String(source)
    .replace(/\/\/.*$/gm, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .trim();
  return crypto.createHash("sha1").update(cleaned, "utf8").digest("hex");
}

server.tool(
  "odc_compile",
  "Compile complete Simple Rust firmware (use odc::*;) for the One Dollar Computer on the cloud compile service — the same queue the web editor uses. Returns the compiled binary saved as a local .bin file (ready for odc_flash when available, or the web editor's Upload). No pairing needed: compilation is stateless. If project_id is given, the code is written to that editor project first (like pressing Compile in the editor); otherwise a throwaway project id is used. Compile errors are returned word-for-word from the compiler — show them to the user and fix the code. Never use pin 13 / read_button() (bootloader only); LED is pin 19.",
  {
    source: z.string().describe("Complete Simple Rust program: use odc::*; fn main() { … }"),
    project_id: z.string().optional().describe("Editor project id to compile in place (optional)"),
    timeout_seconds: z.number().optional().describe("Max seconds to wait for the compile (default 180, max 300)"),
    save_to: z.string().optional().describe("Local path for the .bin (default ~/.config/odc/builds/<project_id>.bin)")
  },
  async ({ source, project_id, timeout_seconds, save_to }) => {
    if (!source || !source.trim()) {
      return textResult({ ok: false, error: "No code to compile." });
    }
    if (source.length > 65536) {
      return textResult({ ok: false, error: "Code is too large (max 65536 characters)." });
    }
    const id =
      project_id ||
      `mcp${Date.now().toString(36)}${crypto.randomBytes(3).toString("hex")}`;
    const hash = codeHash(source);
    const submittedAt = Date.now();
    const nowIso = new Date(submittedAt).toISOString();
    const codeNode = {
      content: source,
      binaryHash: hash,
      language: "rust",
      lastModified: nowIso,
      timestamp: submittedAt,
      size: source.length,
      compilationStatus: "pending",
      compilationRequested: true,
      compilationRequestedAt: nowIso
    };
    try {
      await rtdb("PUT", `/projects/${encodeURIComponent(id)}/code.json`, codeNode);
      await rtdb("PUT", `/compileQueue/${encodeURIComponent(id)}.json`, {
        requestedAt: nowIso,
        binaryHash: hash
      });
    } catch (err) {
      return textResult({ ok: false, project_id: id, error: `Could not submit the compile: ${err.message}` });
    }

    const deadline = Date.now() + Math.min(Math.max(Number(timeout_seconds ?? 180) || 180, 10), 300) * 1000;
    let lastStatus = "pending";
    let resubmitted = false;
    let submittedMs = submittedAt;
    while (Date.now() < deadline) {
      await new Promise((r) => setTimeout(r, 2000));
      let node = null;
      try {
        node = await rtdb("GET", `/projects/${encodeURIComponent(id)}/code.json`);
      } catch {
        /* transient — keep waiting */
      }
      if (!node) continue;
      lastStatus = node.compilationStatus || lastStatus;
      const updatedMs = Date.parse(node.compilationUpdatedAt || "") || 0;
      const fresh = updatedMs >= submittedMs - 5000;
      if (!fresh) continue;
      // Known two-worker race: a worker that loses a job mid-flight can
      // overwrite the real result with "worker error (job dropped)".
      // That is not a compile verdict — resubmit once and keep waiting.
      if (
        node.compilationStatus === "error" &&
        String(node.compilationError || "").includes("job dropped") &&
        !resubmitted
      ) {
        resubmitted = true;
        submittedMs = Date.now();
        const retryIso = new Date(submittedMs).toISOString();
        try {
          await rtdb("PUT", `/projects/${encodeURIComponent(id)}/code.json`, {
            ...codeNode,
            lastModified: retryIso,
            timestamp: submittedMs,
            compilationRequestedAt: retryIso
          });
          await rtdb("PUT", `/compileQueue/${encodeURIComponent(id)}.json`, {
            requestedAt: retryIso,
            binaryHash: hash
          });
        } catch {
          /* fall through — the loop will time out with a clear message */
        }
        continue;
      }
      if (node.compilationStatus === "success" && node.binary) {
        const raw = Buffer.from(node.binary, "base64");
        const outPath = save_to || path.join(BUILDS_DIR, `${id}.bin`);
        try {
          fs.mkdirSync(path.dirname(outPath), { recursive: true });
          fs.writeFileSync(outPath, raw);
        } catch (err) {
          return textResult({
            ok: true,
            project_id: id,
            binarySize: raw.length,
            binaryHash: node.binaryHash || hash,
            binaryBase64: node.binary,
            warning: `Compiled OK but could not save the .bin locally: ${err.message}`,
            editorUrl: `https://onedollarcomputer.com/editor/?projectID=${encodeURIComponent(id)}`
          });
        }
        return textResult({
          ok: true,
          project_id: id,
          binarySize: raw.length,
          binaryHash: node.binaryHash || hash,
          binaryFile: outPath,
          fromCache: !!(node.compilationResult && node.compilationResult.cache),
          message: `Compiled OK — ${raw.length} bytes. Binary saved to ${outPath}. Load it onto the computer with odc_flash when available, or open the editor project and press Upload.`,
          editorUrl: `https://onedollarcomputer.com/editor/?projectID=${encodeURIComponent(id)}`
        });
      }
      if (node.compilationStatus === "error") {
        return textResult({
          ok: false,
          project_id: id,
          error: String(node.compilationError || "Compile failed").slice(0, 4000),
          editorUrl: `https://onedollarcomputer.com/editor/?projectID=${encodeURIComponent(id)}`
        });
      }
    }
    return textResult({
      ok: false,
      project_id: id,
      status: lastStatus,
      error: "Compile did not finish in time. The job stays queued — try odc_compile again in a moment (identical code is served from cache)."
    });
  }
);

server.registerTool(
  "curriculum_status",
  {
    description: "Check the connection state: whether this agent is connected to a One Dollar Computer account, and which API it talks to. Call this first when unsure — it never changes anything."
  },
  async () => {
    const token = getToken();
    const out = {
      paired: !!token,
      api: DEFAULT_API,
      tokenPath: TOKEN_PATH,
      tokenPreview: token ? `${token.slice(0, 16)}…` : null
    };
    if (!token) {
      out.next = "Call odc_connect — it returns an approval link to show the user (they sign in with Google and approve).";
    }
    return textResult(out);
  }
);

server.registerTool(
  "curriculum_agent_brief",
  {
    description:
      "Return the curriculum authoring contract: HTML5 teaching UI is free; board firmware must be Simple Rust (use odc::*;). Call after connecting (odc_connect or curriculum_pair) before writing lessons."
  },
  async () => textResult({
    docsUrl: "https://onedollarcomputer.com/c/AGENT_LESSONS.md",
    aiDocsUrl: "https://onedollarcomputer.com/editor/AI_DOCS.txt",
    emulatorUrl: "https://onedollarcomputer.com/emulator/r2/",
    editorUrl: "https://onedollarcomputer.com/editor/",
    markdown: loadAgentLessonsBrief()
  })
);

server.registerTool(
  "curriculum_list_lessons",
  {
    description: "List curriculum lessons for the paired account."
  },
  async () => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const data = await api("GET", "/lessons", { token });
    return textResult(data);
  }
);

server.tool(
  "curriculum_create_lesson",
  "Create a NEW curriculum lesson for the paired instructor. Requires title. Optional: overview, materials[], steps[], html[], links[], photos[], videos[]. Put teaching UI in html[]; if the board is used, put complete Simple Rust in steps under 'Firmware (Simple Rust)'. Returns { id, siteUrl }.",
  {
    title: z.string(),
    overview: z.string().optional(),
    materials: z.array(z.string()).optional(),
    steps: z.array(z.string()).optional(),
    photos: z.array(z.object({ url: z.string() })).optional(),
    videos: z.array(z.object({ url: z.string() })).optional(),
    html: z.array(z.object({
      title: z.string().optional(),
      html: z.string()
    })).optional(),
    links: z.array(z.object({ label: z.string().optional(), url: z.string() })).optional()
  },
  async (args) => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const body = { title: args.title };
    if (args.overview !== undefined) body.overview = args.overview;
    if (args.materials !== undefined) body.materials = args.materials;
    if (args.steps !== undefined) body.steps = args.steps;
    if (args.photos !== undefined) body.photos = args.photos;
    if (args.videos !== undefined) body.videos = args.videos;
    if (args.html !== undefined) body.html = args.html;
    if (args.links !== undefined) body.links = args.links;
    const data = await api("POST", "/lessons", { token, body });
    return textResult(data);
  }
);

server.tool(
  "curriculum_get_lesson",
  "Get one curriculum lesson (title + body) by id.",
  {
    lesson_id: z.string()
  },
  async ({ lesson_id }) => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const data = await api("GET", `/lessons/${encodeURIComponent(lesson_id)}`, { token });
    return textResult(data);
  }
);

server.tool(
  "curriculum_update_lesson",
  "Update a curriculum lesson. Fields: overview, materials[], steps[], photos, videos, html[], links. Put interactive teaching UI in html[] ({ title?, html }). If the lesson uses the ODC board or virtual board, also put complete Simple Rust (use odc::*; fn main) in steps under 'Firmware (Simple Rust)'. Teaching metaphor is free; compiler input is always Rust. See curriculum_agent_brief.",
  {
    lesson_id: z.string(),
    title: z.string().optional(),
    overview: z.string().optional(),
    materials: z.array(z.string()).optional(),
    steps: z.array(z.string()).optional(),
    photos: z.array(z.object({ url: z.string() })).optional(),
    videos: z.array(z.object({ url: z.string() })).optional(),
    html: z.array(z.object({
      title: z.string().optional(),
      html: z.string()
    })).optional(),
    games: z.array(z.object({
      title: z.string().optional(),
      html: z.string()
    })).optional(),
    gameHtml: z.union([
      z.string(),
      z.array(z.object({
        title: z.string().optional(),
        html: z.string()
      }))
    ]).optional(),
    links: z.array(z.object({ label: z.string().optional(), url: z.string() })).optional()
  },
  async (args) => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const body = {};
    if (args.title !== undefined) body.title = args.title;
    if (args.overview !== undefined) body.overview = args.overview;
    if (args.materials !== undefined) body.materials = args.materials;
    if (args.steps !== undefined) body.steps = args.steps;
    if (args.photos !== undefined) body.photos = args.photos;
    if (args.videos !== undefined) body.videos = args.videos;
    if (args.html !== undefined) body.html = args.html;
    else if (args.games !== undefined) body.html = args.games;
    if (args.gameHtml !== undefined) {
      body.html = typeof args.gameHtml === "string"
        ? [{ html: args.gameHtml }]
        : args.gameHtml;
    }
    if (args.links !== undefined) body.links = args.links;
    const data = await api("PATCH", `/lessons/${encodeURIComponent(args.lesson_id)}`, {
      token,
      body
    });
    return textResult(data);
  }
);

server.registerTool(
  "project_brief",
  {
    description:
      "Firmware project authoring contract (Simple Rust, pin 13 warning, publish rules). Call after connecting (odc_connect or curriculum_pair) before project_create / project_update."
  },
  async () => textResult(loadProjectBrief())
);

server.registerTool(
  "project_list",
  {
    description: "List firmware projects for the paired account (private and public)."
  },
  async () => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const data = await api("GET", "/projects", { token });
    return textResult(data);
  }
);

server.registerTool(
  "project_create",
  {
    description:
      "Create a NEW private firmware project. Requires name. Optional code (complete Simple Rust: use odc::*; fn main). Publish separately with project_publish (irreversible). Returns { id, slug, editorUrl }.",
    inputSchema: {
      name: z.string(),
      code: z.string().optional()
    }
  },
  async (args) => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const body = { name: args.name };
    if (args.code !== undefined) body.code = args.code;
    const data = await api("POST", "/projects", { token, body });
    return textResult(data);
  }
);

server.registerTool(
  "project_get",
  {
    description: "Get one firmware project (meta + code) by id. Owner can read private; public projects readable by any paired agent.",
    inputSchema: {
      project_id: z.string()
    }
  },
  async ({ project_id }) => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const data = await api("GET", `/projects/${encodeURIComponent(project_id)}`, { token });
    return textResult(data);
  }
);

server.registerTool(
  "project_update",
  {
    description:
      "Update a firmware project you own (name and/or code). Optional file id for multi-code projects (e.g. send, receive). Code must be complete Simple Rust (use odc::*;). Never read_button() / pin 13. Cannot unpublish.",
    inputSchema: {
      project_id: z.string(),
      name: z.string().optional(),
      code: z.string().optional(),
      file: z.string().optional().describe("File id within the project (default: active / main)"),
      file_name: z.string().optional().describe("Display name when creating/updating a file")
    }
  },
  async (args) => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const body = {};
    if (args.name !== undefined) body.name = args.name;
    if (args.code !== undefined) body.code = args.code;
    if (args.file !== undefined) body.file = args.file;
    if (args.file_name !== undefined) body.fileName = args.file_name;
    const data = await api("PATCH", `/projects/${encodeURIComponent(args.project_id)}`, {
      token,
      body
    });
    return textResult(data);
  }
);

server.registerTool(
  "project_publish",
  {
    description:
      "Make a project public at onedollarcomputer.com/{username}/{slug}. IRREVERSIBLE — cannot make it private again.",
    inputSchema: {
      project_id: z.string()
    }
  },
  async ({ project_id }) => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const data = await api("POST", `/projects/${encodeURIComponent(project_id)}/publish`, {
      token,
      body: {}
    });
    return textResult(data);
  }
);

server.registerTool(
  "project_fork",
  {
    description:
      "Copy a public project to the paired account (stays private until project_publish). Records who copied from whom.",
    inputSchema: {
      project_id: z.string()
    }
  },
  async ({ project_id }) => {
    const token = getToken();
    if (!token) {
      return notPaired();
    }
    const data = await api("POST", `/projects/${encodeURIComponent(project_id)}/fork`, {
      token,
      body: {}
    });
    return textResult(data);
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
