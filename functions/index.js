/**
 * Curriculum Agent API — pair + lesson CRUD for MCP / curl.
 * Deploy: firebase deploy --only functions --project odc-files
 */
const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
const admin = require("firebase-admin");
const crypto = require("crypto");

setGlobalOptions({ region: "us-central1", maxInstances: 10 });

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.database();
const SITE = "https://onedollarcomputer.com";
const SHORT = "https://odc.rs";
const PAIR_TTL_MS = 10 * 60 * 1000;
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Access-Control-Max-Age": "86400"
};

function json(res, status, body) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", ...CORS });
  res.end(JSON.stringify(body));
}

function randomToken(bytes = 32) {
  return crypto.randomBytes(bytes).toString("base64url");
}

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function parsePath(url) {
  // Strip function name prefix if present (e.g. /curriculumAgent/pair/start)
  let path = url.pathname || "/";
  const markers = ["/curriculumAgent", "/pair", "/lessons", "/projects", "/login"];
  for (const m of markers) {
    const i = path.indexOf(m);
    if (i > 0 && m === "/curriculumAgent") {
      path = path.slice(i + m.length) || "/";
      break;
    }
  }
  if (path.startsWith("/curriculumAgent")) {
    path = path.slice("/curriculumAgent".length) || "/";
  }
  return path;
}

async function verifyFirebaseUser(req) {
  const h = req.headers.authorization || "";
  const m = /^Bearer\s+(.+)$/i.exec(h);
  if (!m) return null;
  try {
    return await admin.auth().verifyIdToken(m[1]);
  } catch {
    return null;
  }
}

async function verifyAgentToken(req) {
  const h = req.headers.authorization || "";
  const m = /^Bearer\s+(.+)$/i.exec(h);
  if (!m) return null;
  const token = m[1].trim();
  if (!token.startsWith("odc_agent_")) return null;
  const snap = await db.ref(`curriculum/agentTokens/${hashToken(token)}`).get();
  if (!snap.exists()) return null;
  const row = snap.val();
  if (row.revoked) return null;
  return { uid: row.uid, tokenHash: hashToken(token) };
}

function isAuthor(lesson, uid) {
  if (!lesson || !uid) return false;
  if (lesson.ownerUid === uid) return true;
  return !!(lesson.authors && lesson.authors[uid]);
}

async function handlePairStart(req, res) {
  const user = await verifyFirebaseUser(req);
  if (!user) return json(res, 401, { error: "Sign in required" });

  const code = randomToken(18);
  const now = Date.now();
  await db.ref(`curriculum/agentPairing/${code}`).set({
    status: "pending",
    createdBy: user.uid,
    createdAt: now,
    expiresAt: now + PAIR_TTL_MS
  });

  const connectUrl = `${SHORT}/curriculum/?connect=${encodeURIComponent(code)}`;
  return json(res, 200, {
    code,
    connectUrl,
    liveUrl: `${SITE}/curriculum/?connect=${encodeURIComponent(code)}`,
    expiresAt: now + PAIR_TTL_MS
  });
}

async function handlePairStatus(req, res, code) {
  if (!code) return json(res, 400, { error: "code required" });
  const ref = db.ref(`curriculum/agentPairing/${code}`);
  const snap = await ref.get();
  if (!snap.exists()) return json(res, 404, { error: "Unknown code", status: "unknown" });

  const row = snap.val();
  if (row.expiresAt && Date.now() > row.expiresAt && row.status === "pending") {
    await ref.update({ status: "expired" });
    return json(res, 200, { status: "expired" });
  }

  if (row.status === "approved" && row.tokenPending) {
    return json(res, 200, { status: "approved", token: row.tokenPending });
  }

  if (row.status === "connected" && row.tokenPending) {
    return json(res, 200, { status: "connected", token: row.tokenPending });
  }

  return json(res, 200, {
    status: row.status || "pending",
    ...(row.status === "connected" ? { message: "Token expired — copy Agent again on /curriculum/" } : {})
  });
}

async function handlePairConfirm(req, res) {
  const user = await verifyFirebaseUser(req);
  if (!user) return json(res, 401, { error: "Sign in required" });

  let body = {};
  try {
    body = typeof req.body === "object" && req.body ? req.body : JSON.parse(req.rawBody || "{}");
  } catch {
    body = {};
  }
  const code = String(body.code || "").trim();
  if (!code) return json(res, 400, { error: "code required" });

  const ref = db.ref(`curriculum/agentPairing/${code}`);
  const snap = await ref.get();
  if (!snap.exists()) return json(res, 404, { error: "Unknown code" });
  const row = snap.val();
  if (row.status !== "pending") {
    return json(res, 409, { error: `Pairing is ${row.status}` });
  }
  if (row.expiresAt && Date.now() > row.expiresAt) {
    await ref.update({ status: "expired" });
    return json(res, 410, { error: "Code expired" });
  }

  const token = `odc_agent_${randomToken(32)}`;
  const tokenHash = hashToken(token);
  const now = Date.now();

  await db.ref(`curriculum/agentTokens/${tokenHash}`).set({
    uid: user.uid,
    createdAt: now,
    pairingCode: code
  });
  await ref.update({
    status: "approved",
    uid: user.uid,
    tokenHash,
    tokenPending: token,
    confirmedAt: now
  });

  return json(res, 200, { status: "approved" });
}

async function handlePairDeny(req, res) {
  const user = await verifyFirebaseUser(req);
  if (!user) return json(res, 401, { error: "Sign in required" });

  let body = {};
  try {
    body = typeof req.body === "object" && req.body ? req.body : JSON.parse(req.rawBody || "{}");
  } catch {
    body = {};
  }
  const code = String(body.code || "").trim();
  if (!code) return json(res, 400, { error: "code required" });

  const ref = db.ref(`curriculum/agentPairing/${code}`);
  const snap = await ref.get();
  if (!snap.exists()) return json(res, 404, { error: "Unknown code" });
  await ref.update({ status: "denied", deniedBy: user.uid, deniedAt: Date.now() });
  return json(res, 200, { status: "denied" });
}

async function handlePairRevoke(req, res) {
  const user = await verifyFirebaseUser(req);
  if (!user) return json(res, 401, { error: "Sign in required" });

  let body = {};
  try {
    body = typeof req.body === "object" && req.body ? req.body : JSON.parse(req.rawBody || "{}");
  } catch {
    body = {};
  }

  // Revoke by token (if provided) or all tokens for this uid
  if (body.token) {
    const th = hashToken(String(body.token));
    const snap = await db.ref(`curriculum/agentTokens/${th}`).get();
    if (snap.exists() && snap.val().uid === user.uid) {
      await db.ref(`curriculum/agentTokens/${th}`).update({ revoked: true, revokedAt: Date.now() });
    }
    return json(res, 200, { revoked: 1 });
  }

  const all = await db.ref("curriculum/agentTokens").get();
  let n = 0;
  if (all.exists()) {
    const updates = {};
    for (const [th, row] of Object.entries(all.val())) {
      if (row.uid === user.uid && !row.revoked) {
        updates[`${th}/revoked`] = true;
        updates[`${th}/revokedAt`] = Date.now();
        n += 1;
      }
    }
    if (n) await db.ref("curriculum/agentTokens").update(updates);
  }
  return json(res, 200, { revoked: n });
}

async function handleListLessons(req, res) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  const index = await db.ref(`curriculum/byUser/${agent.uid}`).get();
  const ids = index.exists()
    ? Object.keys(index.val()).filter((id) => id.startsWith("l_"))
    : [];
  const lessons = [];
  for (const id of ids) {
    const [title, updatedAt] = await Promise.all([
      db.ref(`curriculum/lessons/${id}/title`).get(),
      db.ref(`curriculum/lessons/${id}/updatedAt`).get()
    ]);
    lessons.push({
      id,
      title: title.val() || "Untitled",
      updatedAt: updatedAt.val() || 0
    });
  }
  lessons.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
  return json(res, 200, { lessons });
}

async function handleGetLesson(req, res, lid) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  const snap = await db.ref(`curriculum/lessons/${lid}`).get();
  if (!snap.exists()) return json(res, 404, { error: "Not found" });
  const lesson = snap.val();
  if (!isAuthor(lesson, agent.uid)) {
    return json(res, 403, { error: "Not an author of this lesson" });
  }
  return json(res, 200, {
    id: lid,
    title: lesson.title || "",
    ownerUid: lesson.ownerUid,
    ownerName: lesson.ownerName,
    updatedAt: lesson.updatedAt || 0,
    body: lesson.body || {}
  });
}

function newLessonId() {
  return `l_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

async function resolveAgentDisplayName(uid) {
  try {
    const [uSnap, pSnap] = await Promise.all([
      db.ref(`users/${uid}/username`).get(),
      db.ref(`users/${uid}/displayName`).get()
    ]);
    return pSnap.val() || uSnap.val() || "Instructor";
  } catch {
    return "Instructor";
  }
}

/** Agent creates a new lesson (same shape as the curriculum UI save). */
async function handleCreateLesson(req, res) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  let body = {};
  try {
    body = typeof req.body === "object" && req.body ? req.body : JSON.parse(req.rawBody || "{}");
  } catch {
    return json(res, 400, { error: "Invalid JSON" });
  }

  const title = typeof body.title === "string" ? body.title.trim().slice(0, 120) : "";
  if (!title) return json(res, 400, { error: "title required" });

  const nested = body.body && typeof body.body === "object" ? body.body : {};
  const src = { ...nested, ...body };
  const html = coerceHtmlBlocks(
    src.html !== undefined ? src.html
      : src.games !== undefined ? src.games
        : src.gameHtml !== undefined ? src.gameHtml
          : []
  ) || [];

  const now = Date.now();
  const id = newLessonId();
  const ownerName = await resolveAgentDisplayName(agent.uid);
  const lessonBody = {
    overview: src.overview !== undefined ? String(src.overview) : "",
    materials: Array.isArray(src.materials) ? src.materials : [],
    steps: Array.isArray(src.steps) ? src.steps : [],
    photos: Array.isArray(src.photos) ? src.photos : [],
    videos: Array.isArray(src.videos) ? src.videos : [],
    html,
    quizzes: Array.isArray(src.quizzes) ? normalizeQuizzes(src.quizzes) : [],
    links: Array.isArray(src.links) ? src.links : [],
    games: null
  };

  const updates = {};
  updates[`curriculum/lessons/${id}/title`] = title;
  updates[`curriculum/lessons/${id}/ownerUid`] = agent.uid;
  updates[`curriculum/lessons/${id}/ownerName`] = ownerName;
  updates[`curriculum/lessons/${id}/createdAt`] = now;
  updates[`curriculum/lessons/${id}/updatedAt`] = now;
  updates[`curriculum/lessons/${id}/updatedBy`] = agent.uid;
  updates[`curriculum/lessons/${id}/authors/${agent.uid}`] = {
    name: ownerName,
    role: "owner",
    addedAt: now
  };
  updates[`curriculum/lessons/${id}/body`] = lessonBody;
  updates[`curriculum/byUser/${agent.uid}/${id}`] = true;

  await db.ref().update(updates);
  return json(res, 201, {
    ok: true,
    id,
    title,
    updatedAt: now,
    siteUrl: `${SITE}/curriculum/?lesson=${encodeURIComponent(id)}`
  });
}

function normalizeQuizzes(list) {
  if (!Array.isArray(list)) return [];
  const out = [];
  for (const item of list) {
    if (!item || typeof item !== "object") continue;
    const question = typeof item.question === "string" ? item.question.trim().slice(0, 500) : "";
    const choices = Array.isArray(item.choices)
      ? item.choices.map((c) => String(c).trim()).filter(Boolean).slice(0, 8)
      : [];
    if (!question || choices.length < 2) continue;
    out.push({ question, choices });
  }
  return out;
}

function normalizeHtmlBlocks(list) {
  if (!Array.isArray(list)) return [];
  const out = [];
  for (const item of list) {
    if (!item || typeof item !== "object") continue;
    const title = typeof item.title === "string" ? item.title.trim().slice(0, 120) : "";
    const html = typeof item.html === "string" ? item.html.trim()
      : typeof item.markup === "string" ? item.markup.trim()
        : typeof item.gameHtml === "string" ? item.gameHtml.trim()
          : "";
    if (!html || html.length > 512 * 1024) continue;
    const row = { html };
    if (title) row.title = title;
    out.push(row);
  }
  return out;
}

function coerceHtmlBlocks(value) {
  if (value === undefined || value === null) return undefined;
  if (typeof value === "string") return normalizeHtmlBlocks([{ html: value }]);
  if (Array.isArray(value)) return normalizeHtmlBlocks(value);
  return [];
}

function htmlBlocksFromBody(body) {
  if (body?.html !== undefined) return normalizeHtmlBlocks(body.html);
  if (body?.games !== undefined) return normalizeHtmlBlocks(body.games);
  return [];
}

function htmlBlocksFromPatch(src, prev) {
  const nested = src.body && typeof src.body === "object" ? src.body : null;
  for (const key of ["html", "games", "gameHtml", "game_html"]) {
    const v = src[key] !== undefined ? src[key] : nested?.[key];
    if (v !== undefined) return coerceHtmlBlocks(v);
  }
  return htmlBlocksFromBody(prev);
}

async function handlePatchLesson(req, res, lid) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  const snap = await db.ref(`curriculum/lessons/${lid}`).get();
  if (!snap.exists()) return json(res, 404, { error: "Not found" });
  const lesson = snap.val();
  if (!isAuthor(lesson, agent.uid)) {
    return json(res, 403, { error: "Not an author of this lesson" });
  }

  let body = {};
  try {
    body = typeof req.body === "object" && req.body ? req.body : JSON.parse(req.rawBody || "{}");
  } catch {
    return json(res, 400, { error: "Invalid JSON" });
  }

  const updates = {};
  const now = Date.now();
  if (typeof body.title === "string") {
    updates.title = body.title.trim().slice(0, 120);
  }
  if (body.body && typeof body.body === "object") {
    const prev = lesson.body || {};
    const nextHtml = htmlBlocksFromPatch(body.body, prev);
    const htmlProvided = ["html", "games", "gameHtml", "game_html"].some((k) => body.body[k] !== undefined);
    updates.body = {
      overview: body.body.overview !== undefined ? String(body.body.overview) : (prev.overview || ""),
      materials: Array.isArray(body.body.materials) ? body.body.materials : (prev.materials || []),
      steps: Array.isArray(body.body.steps) ? body.body.steps : (prev.steps || []),
      photos: Array.isArray(body.body.photos) ? body.body.photos : (prev.photos || []),
      videos: Array.isArray(body.body.videos) ? body.body.videos : (prev.videos || []),
      html: htmlProvided ? nextHtml : htmlBlocksFromBody(prev),
      quizzes: Array.isArray(body.body.quizzes) ? normalizeQuizzes(body.body.quizzes) : (prev.quizzes || []),
      links: Array.isArray(body.body.links) ? body.body.links : (prev.links || []),
      games: null
    };
  }
  // Allow top-level field patches
  const topHtmlProvided = ["html", "games", "gameHtml", "game_html"].some((k) => body[k] !== undefined);
  if (body.overview !== undefined || body.materials !== undefined || body.steps !== undefined
      || body.photos !== undefined || body.videos !== undefined || topHtmlProvided
      || body.quizzes !== undefined || body.links !== undefined) {
    const prev = updates.body || lesson.body || {};
    const nextHtml = htmlBlocksFromPatch(body, prev);
    updates.body = {
      overview: body.overview !== undefined ? String(body.overview) : (prev.overview || ""),
      materials: body.materials !== undefined ? body.materials : (prev.materials || []),
      steps: body.steps !== undefined ? body.steps : (prev.steps || []),
      photos: body.photos !== undefined ? body.photos : (prev.photos || []),
      videos: body.videos !== undefined ? body.videos : (prev.videos || []),
      html: topHtmlProvided ? nextHtml : htmlBlocksFromBody(prev),
      quizzes: body.quizzes !== undefined ? normalizeQuizzes(body.quizzes) : (prev.quizzes || []),
      links: body.links !== undefined ? body.links : (prev.links || []),
      games: null
    };
  }

  if (!Object.keys(updates).length) {
    return json(res, 400, { error: "No fields to update" });
  }
  updates.updatedAt = now;
  updates.updatedBy = agent.uid;

  await db.ref(`curriculum/lessons/${lid}`).update(updates);
  return json(res, 200, { ok: true, id: lid, updatedAt: now });
}

function emailKey(email) {
  return String(email || "")
    .trim()
    .toLowerCase()
    .replace(/\./g, ",");
}

function readBody(req) {
  try {
    if (typeof req.body === "object" && req.body) return req.body;
    if (req.rawBody) return JSON.parse(req.rawBody.toString());
    return {};
  } catch {
    return {};
  }
}

async function addLessonAuthor(lessonId, otherUid, displayName) {
  const now = Date.now();
  const updates = {};
  updates[`curriculum/lessons/${lessonId}/authors/${otherUid}`] = {
    name: displayName || "Instructor",
    role: "author",
    addedAt: now
  };
  updates[`curriculum/byUser/${otherUid}/${lessonId}`] = true;
  updates[`curriculum/lessons/${lessonId}/updatedAt`] = now;
  await db.ref().update(updates);
}

async function handleInvite(req, res) {
  const user = await verifyFirebaseUser(req);
  if (!user) return json(res, 401, { error: "Sign in required" });

  const body = readBody(req);
  const lessonId = String(body.lessonId || "").trim();
  const emailRaw = String(body.email || "").trim().toLowerCase();
  const username = String(body.username || "").trim().toLowerCase();
  if (!lessonId) return json(res, 400, { error: "lessonId required" });
  if (!emailRaw && !username) return json(res, 400, { error: "email or username required" });

  const lessonSnap = await db.ref(`curriculum/lessons/${lessonId}`).get();
  if (!lessonSnap.exists()) return json(res, 404, { error: "Lesson not found" });
  const lesson = lessonSnap.val();
  if (lesson.ownerUid !== user.uid) {
    return json(res, 403, { error: "Only the owner can invite" });
  }

  let otherUid = null;
  let display = null;

  if (username) {
    const uSnap = await db.ref(`usernames/${username}`).get();
    if (!uSnap.exists()) return json(res, 404, { error: `No account with username “${username}”` });
    otherUid = uSnap.val()?.uid || uSnap.val();
    if (typeof otherUid !== "string") otherUid = otherUid?.uid || null;
    if (!otherUid) return json(res, 404, { error: `No account with username “${username}”` });
    const pSnap = await db.ref(`profiles/${username}`).get();
    display = pSnap.val()?.displayName || username;
  } else {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw)) {
      return json(res, 400, { error: "Invalid email" });
    }
    try {
      const other = await admin.auth().getUserByEmail(emailRaw);
      otherUid = other.uid;
      display = other.displayName || emailRaw.split("@")[0];
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        const key = emailKey(emailRaw);
        await db.ref(`curriculum/pendingByEmail/${key}/${lessonId}`).set({
          email: emailRaw,
          lessonId,
          invitedBy: user.uid,
          invitedAt: Date.now()
        });
        return json(res, 200, {
          ok: true,
          pending: true,
          message: "Invite saved — they get access when they sign in with that Google email."
        });
      }
      console.error(err);
      return json(res, 500, { error: "Could not look up email" });
    }
  }

  if (otherUid === user.uid) return json(res, 400, { error: "That’s you." });
  if (lesson.authors && lesson.authors[otherUid]) {
    return json(res, 200, { ok: true, added: true, already: true });
  }

  await addLessonAuthor(lessonId, otherUid, display);
  return json(res, 200, { ok: true, added: true });
}

async function handleInviteClaim(req, res) {
  const user = await verifyFirebaseUser(req);
  if (!user) return json(res, 401, { error: "Sign in required" });
  const email = (user.email || "").trim().toLowerCase();
  if (!email) return json(res, 200, { claimed: 0 });

  const key = emailKey(email);
  const snap = await db.ref(`curriculum/pendingByEmail/${key}`).get();
  if (!snap.exists()) return json(res, 200, { claimed: 0 });

  const pending = snap.val();
  let claimed = 0;
  const display = user.name || email.split("@")[0];
  for (const lessonId of Object.keys(pending)) {
    const lessonSnap = await db.ref(`curriculum/lessons/${lessonId}`).get();
    if (!lessonSnap.exists()) {
      await db.ref(`curriculum/pendingByEmail/${key}/${lessonId}`).remove();
      continue;
    }
    const lesson = lessonSnap.val();
    if (!(lesson.authors && lesson.authors[user.uid])) {
      await addLessonAuthor(lessonId, user.uid, display);
      claimed += 1;
    }
    await db.ref(`curriculum/pendingByEmail/${key}/${lessonId}`).remove();
  }
  return json(res, 200, { ok: true, claimed });
}

const DEFAULT_PROJECT_CODE = `//! One Dollar Computer — LED

use odc::*;

fn main() {
    pin_output(LED);
    loop {
        pin_set(LED);
        delay(200);
        pin_clear(LED);
        delay(200);
    }
}
`;

function slugify(raw) {
  const s = String(raw || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
  return s || "project";
}

function uniqueSlug(base, used) {
  let slug = slugify(base);
  if (!used[slug]) return slug;
  let i = 2;
  while (used[`${slug}-${i}`]) i += 1;
  return `${slug}-${i}`;
}

function newProjectId() {
  return `p${crypto.randomBytes(6).toString("hex")}`;
}

function projectUrls(username, slug, id) {
  return {
    siteUrl: username && slug ? `${SITE}/${encodeURIComponent(username)}/${encodeURIComponent(slug)}` : null,
    editorUrl: `${SITE}/editor/?projectID=${encodeURIComponent(id)}`
  };
}

async function agentUsername(uid) {
  const snap = await db.ref(`users/${uid}/username`).get();
  return snap.exists() ? String(snap.val() || "") : "";
}

async function usedSlugsForUser(uid, username) {
  const used = {};
  if (username) {
    const pub = await db.ref(`profiles/${username}/projects`).get();
    if (pub.exists()) {
      for (const slug of Object.keys(pub.val() || {})) used[slug] = true;
    }
  }
  const ids = await db.ref(`users/${uid}/projectIds`).get();
  if (ids.exists()) {
    for (const pid of Object.keys(ids.val() || {})) {
      const slugSnap = await db.ref(`projects/${pid}/slug`).get();
      if (slugSnap.exists() && slugSnap.val()) used[slugSnap.val()] = true;
    }
  }
  return used;
}

function projectSummary(id, p) {
  return {
    id,
    name: p.name || p.slug || "Project",
    slug: p.slug || "",
    username: p.username || "",
    public: p.public === true,
    updatedAt: p.updatedAt || "",
    forkedFrom: p.forkedFrom || null,
    ...projectUrls(p.username, p.slug, id)
  };
}

async function recordFork(source, dest) {
  await db.ref(`forks/${source.id || source.projectId}/${dest.id}`).set({
    projectId: dest.id,
    byUid: dest.ownerUid,
    byUsername: dest.username,
    fromUid: source.ownerUid || "",
    fromUsername: source.username || "",
    fromSlug: source.slug || "",
    toUsername: dest.username,
    toSlug: dest.slug,
    createdAt: dest.createdAt
  });
}

async function handleListProjects(req, res) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  const index = await db.ref(`users/${agent.uid}/projectIds`).get();
  const ids = index.exists() ? Object.keys(index.val() || {}) : [];
  const projects = [];
  for (const id of ids) {
    const snap = await db.ref(`projects/${id}`).get();
    if (!snap.exists()) continue;
    projects.push(projectSummary(id, snap.val()));
  }
  projects.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  return json(res, 200, { projects });
}

async function handleGetProject(req, res, pid) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  const snap = await db.ref(`projects/${pid}`).get();
  if (!snap.exists()) return json(res, 404, { error: "Not found" });
  const p = snap.val();
  if (p.public !== true && p.ownerUid !== agent.uid) {
    return json(res, 403, { error: "Not the owner of this project" });
  }
  return json(res, 200, {
    ...projectSummary(pid, p),
    ownerUid: p.ownerUid,
    code: (p.code && p.code.content) || ""
  });
}

async function handleCreateProject(req, res) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  const username = await agentUsername(agent.uid);
  if (!username) {
    return json(res, 403, { error: "Claim a username at /project/ first." });
  }

  const body = readBody(req);
  const name = typeof body.name === "string" ? body.name.trim().slice(0, 80) : "";
  if (!name) return json(res, 400, { error: "name required" });
  const code = typeof body.code === "string" && body.code.trim()
    ? body.code
    : DEFAULT_PROJECT_CODE;

  const used = await usedSlugsForUser(agent.uid, username);
  const slug = uniqueSlug(name, used);
  const id = newProjectId();
  const createdAt = new Date().toISOString();
  const row = {
    ownerUid: agent.uid,
    username,
    slug,
    name,
    isMain: false,
    public: false,
    createdAt,
    updatedAt: createdAt,
    code: { content: code, language: "rust" }
  };
  const updates = {};
  updates[`projects/${id}`] = row;
  updates[`users/${agent.uid}/projectIds/${id}`] = true;
  await db.ref().update(updates);
  return json(res, 201, {
    ok: true,
    ...projectSummary(id, row),
    code
  });
}

async function handlePatchProject(req, res, pid) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  const snap = await db.ref(`projects/${pid}`).get();
  if (!snap.exists()) return json(res, 404, { error: "Not found" });
  const p = snap.val();
  if (p.ownerUid !== agent.uid) {
    return json(res, 403, { error: "Not the owner of this project" });
  }

  const body = readBody(req);
  const updates = {};
  const now = new Date().toISOString();
  if (typeof body.name === "string") {
    const name = body.name.trim().slice(0, 80);
    if (!name) return json(res, 400, { error: "name cannot be empty" });
    updates.name = name;
  }
  if (typeof body.code === "string") {
    updates.code = { content: body.code, language: "rust" };
  }
  if (!Object.keys(updates).length) {
    return json(res, 400, { error: "No fields to update (name, code)" });
  }
  updates.updatedAt = now;
  await db.ref(`projects/${pid}`).update(updates);
  if (p.public === true && p.username && p.slug && updates.name) {
    await db.ref(`profiles/${p.username}/projects/${p.slug}`).update({
      name: updates.name,
      updatedAt: now
    });
  }
  return json(res, 200, { ok: true, id: pid, updatedAt: now });
}

async function handlePublishProject(req, res, pid) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  const snap = await db.ref(`projects/${pid}`).get();
  if (!snap.exists()) return json(res, 404, { error: "Not found" });
  const p = snap.val();
  if (p.ownerUid !== agent.uid) {
    return json(res, 403, { error: "Not the owner of this project" });
  }
  if (p.public === true) {
    return json(res, 200, {
      ok: true,
      alreadyPublic: true,
      ...projectSummary(pid, p)
    });
  }

  const now = new Date().toISOString();
  const updates = {};
  updates[`projects/${pid}/public`] = true;
  updates[`projects/${pid}/publishedAt`] = now;
  updates[`projects/${pid}/updatedAt`] = now;
  updates[`profiles/${p.username}/projects/${p.slug}`] = {
    id: pid,
    name: p.name || p.slug,
    isMain: !!p.isMain,
    updatedAt: now
  };
  await db.ref().update(updates);
  return json(res, 200, {
    ok: true,
    irreversible: true,
    ...projectSummary(pid, { ...p, public: true, updatedAt: now })
  });
}

async function handleForkProject(req, res, sourceId) {
  const agent = await verifyAgentToken(req);
  if (!agent) return json(res, 401, { error: "Agent token required" });

  const username = await agentUsername(agent.uid);
  if (!username) {
    return json(res, 403, { error: "Claim a username at /project/ first." });
  }

  const srcSnap = await db.ref(`projects/${sourceId}`).get();
  if (!srcSnap.exists()) return json(res, 404, { error: "Not found" });
  const src = srcSnap.val();
  if (src.public !== true && src.ownerUid !== agent.uid) {
    return json(res, 403, { error: "Can only copy a public project" });
  }
  if (src.ownerUid === agent.uid) {
    return json(res, 400, { error: "That project is already yours" });
  }

  const body = readBody(req);
  const code = typeof body.code === "string"
    ? body.code
    : ((src.code && src.code.content) || DEFAULT_PROJECT_CODE);
  const name = src.name || src.slug || "Project";
  const used = await usedSlugsForUser(agent.uid, username);
  const slug = uniqueSlug(name, used);
  const id = newProjectId();
  const createdAt = new Date().toISOString();
  const row = {
    ownerUid: agent.uid,
    username,
    slug,
    name,
    isMain: false,
    public: false,
    clonedFrom: sourceId,
    forkedFrom: {
      projectId: sourceId,
      username: src.username || "",
      slug: src.slug || "",
      ownerUid: src.ownerUid || ""
    },
    createdAt,
    updatedAt: createdAt,
    code: { content: code, language: "rust" }
  };
  const updates = {};
  updates[`projects/${id}`] = row;
  updates[`users/${agent.uid}/projectIds/${id}`] = true;
  await db.ref().update(updates);
  await recordFork(
    { id: sourceId, ownerUid: src.ownerUid, username: src.username, slug: src.slug },
    { id, ownerUid: agent.uid, username, slug, createdAt }
  );
  return json(res, 201, {
    ok: true,
    ...projectSummary(id, row),
    code
  });
}

const LOGIN_TTL_MS = 10 * 60 * 1000;

async function handleLoginStart(req, res) {
  const body = readBody(req);
  const verifierHash = String(body.verifierHash || "").trim().toLowerCase();
  if (!/^[a-f0-9]{64}$/.test(verifierHash)) {
    return json(res, 400, { error: "verifierHash required (sha256 hex)" });
  }
  const code = randomToken(18);
  const now = Date.now();
  const expiresAt = now + LOGIN_TTL_MS;
  await db.ref(`loginHandoff/${code}`).set({
    status: "pending",
    verifierHash,
    createdAt: now,
    expiresAt
  });
  return json(res, 200, {
    code,
    // Use the Firebase Hosting default host (authorized for Auth). Custom api.* may not be.
    url: `https://odc-files-api.web.app/login/browser?code=${encodeURIComponent(code)}`,
    expiresAt
  });
}

async function handleLoginStatus(req, res) {
  const u = new URL(req.url, "http://localhost");
  const code = String(u.searchParams.get("code") || "").trim();
  const verifier = String(u.searchParams.get("verifier") || "").trim();
  if (!code || !verifier) return json(res, 400, { error: "code and verifier required" });

  const ref = db.ref(`loginHandoff/${code}`);
  const snap = await ref.get();
  if (!snap.exists()) return json(res, 404, { status: "unknown", error: "Unknown code" });
  const row = snap.val();
  if (row.expiresAt && Date.now() > row.expiresAt && row.status === "pending") {
    await ref.update({ status: "expired" });
    return json(res, 200, { status: "expired" });
  }
  if (hashToken(verifier) !== row.verifierHash) {
    return json(res, 403, { error: "Invalid verifier" });
  }
  if ((row.status === "approved" || row.status === "connected") && row.tokenPending) {
    const token = row.tokenPending;
    await ref.update({ status: "connected", tokenPending: null, claimedAt: Date.now() });
    return json(res, 200, { status: "approved", token });
  }
  // Approved but token already claimed / missing — tell the waiter clearly.
  if (row.status === "approved" && !row.tokenPending) {
    return json(res, 200, { status: "approved" });
  }
  return json(res, 200, { status: row.status || "pending" });
}

async function handleLoginApprove(req, res) {
  const user = await verifyFirebaseUser(req);
  if (!user) return json(res, 401, { error: "Sign in required" });

  const body = readBody(req);
  const code = String(body.code || "").trim();
  if (!code) return json(res, 400, { error: "code required" });

  const ref = db.ref(`loginHandoff/${code}`);
  const snap = await ref.get();
  if (!snap.exists()) return json(res, 404, { error: "Unknown code" });
  const row = snap.val();
  if (row.status === "approved" || row.status === "connected") {
    // Re-issue token if the waiting app never claimed it (or user refreshed).
    if (!row.tokenPending && row.status === "approved") {
      const customToken = await admin.auth().createCustomToken(user.uid);
      await ref.update({
        tokenPending: customToken,
        approvedAt: Date.now(),
        uid: user.uid
      });
      return json(res, 200, { status: "approved", refreshed: true });
    }
    return json(res, 200, { status: "approved", already: true });
  }
  if (row.status !== "pending") {
    return json(res, 409, { error: `Login is ${row.status}` });
  }
  if (row.expiresAt && Date.now() > row.expiresAt) {
    await ref.update({ status: "expired" });
    return json(res, 410, { error: "Code expired" });
  }

  const customToken = await admin.auth().createCustomToken(user.uid);
  await ref.update({
    status: "approved",
    uid: user.uid,
    tokenPending: customToken,
    approvedAt: Date.now()
  });
  return json(res, 200, { status: "approved" });
}

exports.curriculumAgent = onRequest({ cors: false, invoker: "public" }, async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, CORS);
    return res.end();
  }

  const path = parsePath(new URL(req.url, "http://localhost"));
  const parts = path.split("/").filter(Boolean);

  try {
    if (req.method === "POST" && parts[0] === "login" && parts[1] === "start") {
      return await handleLoginStart(req, res);
    }
    if (req.method === "GET" && parts[0] === "login" && parts[1] === "status") {
      return await handleLoginStatus(req, res);
    }
    if (req.method === "POST" && parts[0] === "login" && parts[1] === "approve") {
      return await handleLoginApprove(req, res);
    }
    if (req.method === "POST" && parts[0] === "pair" && parts[1] === "start") {
      return await handlePairStart(req, res);
    }
    if (req.method === "GET" && parts[0] === "pair" && parts[1] === "status") {
      const code = new URL(req.url, "http://localhost").searchParams.get("code") || parts[2];
      return await handlePairStatus(req, res, code);
    }
    if (req.method === "POST" && parts[0] === "pair" && parts[1] === "confirm") {
      return await handlePairConfirm(req, res);
    }
    if (req.method === "POST" && parts[0] === "pair" && parts[1] === "deny") {
      return await handlePairDeny(req, res);
    }
    if (req.method === "POST" && parts[0] === "pair" && parts[1] === "revoke") {
      return await handlePairRevoke(req, res);
    }
    if (req.method === "POST" && parts[0] === "invite" && parts[1] === "claim") {
      return await handleInviteClaim(req, res);
    }
    if (req.method === "POST" && parts[0] === "invite") {
      return await handleInvite(req, res);
    }
    if (req.method === "GET" && parts[0] === "lessons" && !parts[1]) {
      return await handleListLessons(req, res);
    }
    if (req.method === "POST" && parts[0] === "lessons" && !parts[1]) {
      return await handleCreateLesson(req, res);
    }
    if (req.method === "GET" && parts[0] === "lessons" && parts[1]) {
      return await handleGetLesson(req, res, parts[1]);
    }
    if (req.method === "PATCH" && parts[0] === "lessons" && parts[1]) {
      return await handlePatchLesson(req, res, parts[1]);
    }
    if (req.method === "GET" && parts[0] === "projects" && !parts[1]) {
      return await handleListProjects(req, res);
    }
    if (req.method === "POST" && parts[0] === "projects" && !parts[1]) {
      return await handleCreateProject(req, res);
    }
    if (req.method === "GET" && parts[0] === "projects" && parts[1] && !parts[2]) {
      return await handleGetProject(req, res, parts[1]);
    }
    if (req.method === "PATCH" && parts[0] === "projects" && parts[1] && !parts[2]) {
      return await handlePatchProject(req, res, parts[1]);
    }
    if (req.method === "POST" && parts[0] === "projects" && parts[1] && parts[2] === "publish") {
      return await handlePublishProject(req, res, parts[1]);
    }
    if (req.method === "POST" && parts[0] === "projects" && parts[1] && parts[2] === "fork") {
      return await handleForkProject(req, res, parts[1]);
    }

    return json(res, 404, {
      error: "Not found",
      endpoints: [
        "POST /pair/start",
        "GET /pair/status?code=",
        "POST /pair/confirm",
        "POST /pair/deny",
        "POST /pair/revoke",
        "POST /invite",
        "POST /invite/claim",
        "GET /lessons",
        "POST /lessons",
        "GET /lessons/:id",
        "PATCH /lessons/:id",
        "GET /projects",
        "POST /projects",
        "GET /projects/:id",
        "PATCH /projects/:id",
        "POST /projects/:id/publish",
        "POST /projects/:id/fork",
        "POST /login/start",
        "GET /login/status?code=&verifier=",
        "POST /login/approve"
      ]
    });
  } catch (err) {
    console.error(err);
    return json(res, 500, { error: "Server error" });
  }
});
