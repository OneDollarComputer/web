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
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const API_ORIGIN = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "api-origin.json"), "utf8")
).url;

const DEFAULT_API = process.env.ODC_CURRICULUM_API || API_ORIGIN;

const RTDB_URL =
  process.env.ODC_RTDB_URL ||
  "https://odc-files-default-rtdb.firebaseio.com";

const TOKEN_PATH = path.join(os.homedir(), ".config", "odc", "curriculum-agent.json");

const AGENT_LESSONS_PATH = path.join(__dirname, "..", "AGENT_LESSONS.md");

function loadAgentLessonsBrief() {
  try {
    return fs.readFileSync(AGENT_LESSONS_PATH, "utf8");
  } catch {
    return "See https://onedollarcomputer.com/curriculum/AGENT_LESSONS.md (HTML free; firmware must be Simple Rust).";
  }
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

  const res = await fetch(`${DEFAULT_API}${apiPath}`, {
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
    const err = new Error(data.error || res.statusText || `HTTP ${res.status}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

function textResult(obj) {
  return {
    content: [{ type: "text", text: typeof obj === "string" ? obj : JSON.stringify(obj, null, 2) }]
  };
}

const server = new McpServer({
  name: "odc-curriculum",
  version: "0.1.0"
});

server.tool(
  "curriculum_pair",
  "Connect to ODC curriculum. Pass the Agent link from /curriculum/ (while instructor is signed in). REQUIRED: call this tool — do NOT fetch the URL as a webpage, do NOT create local HTML files. After pairing: call curriculum_agent_brief, then curriculum_list_lessons / curriculum_update_lesson. Teaching HTML5 is free; board firmware must be Simple Rust (use odc::*;).",
  {
    connect_url_or_code: z.string().describe("Full Agent link or the connect code")
  },
  async ({ connect_url_or_code }) => {
    const code = extractCode(connect_url_or_code);
    if (!code) return textResult({ error: "Missing link — copy Agent from /curriculum/ while signed in." });

    const connectUrl = `https://odc.rs/curriculum/?connect=${encodeURIComponent(code)}`;
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
            "Connected. Call curriculum_agent_brief next, then list/update lessons. HTML5 teaching UI is free; any board firmware must be complete Simple Rust (use odc::*;).",
          brief: "curriculum_agent_brief",
          docs: "https://onedollarcomputer.com/curriculum/AGENT_LESSONS.md",
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
      message: "Could not connect. Ask the instructor to copy a fresh Agent link from /curriculum/ (signed in), then paste it here.",
      connectUrl
    });
  }
);

server.registerTool(
  "curriculum_status",
  {
    description: "Show whether an agent token is stored and the API base URL."
  },
  async () => {
    const token = getToken();
    return textResult({
      paired: !!token,
      api: DEFAULT_API,
      tokenPath: TOKEN_PATH,
      tokenPreview: token ? `${token.slice(0, 16)}…` : null
    });
  }
);

server.registerTool(
  "curriculum_agent_brief",
  {
    description:
      "Return the curriculum authoring contract: HTML5 teaching UI is free; board firmware must be Simple Rust (use odc::*;). Call after curriculum_pair before writing lessons."
  },
  async () => textResult({
    docsUrl: "https://onedollarcomputer.com/curriculum/AGENT_LESSONS.md",
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
      return textResult({
        error: "Not paired. Ask the user for a Connect agent link, then call curriculum_pair."
      });
    }
    const data = await api("GET", "/lessons", { token });
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
      return textResult({ error: "Not paired. Use curriculum_pair first." });
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
      return textResult({ error: "Not paired. Use curriculum_pair first." });
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

const transport = new StdioServerTransport();
await server.connect(transport);
