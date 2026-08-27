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
  const markers = ["/curriculumAgent", "/pair", "/lessons"];
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
    const token = row.tokenPending;
    await ref.update({
      status: "connected",
      tokenPending: null,
      connectedAt: Date.now()
    });
    return json(res, 200, { status: "connected", token });
  }

  return json(res, 200, {
    status: row.status || "pending",
    ...(row.status === "connected" ? { message: "Token already claimed — pair again if needed" } : {})
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

function normalizeGames(list) {
  if (!Array.isArray(list)) return [];
  const out = [];
  for (const item of list) {
    if (!item || typeof item !== "object") continue;
    const title = typeof item.title === "string" ? item.title.trim().slice(0, 120) : "";
    const html = typeof item.html === "string" ? item.html.trim() : "";
    if (!html || html.length > 512 * 1024) continue;
    const row = { html };
    if (title) row.title = title;
    out.push(row);
  }
  return out;
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
    updates.body = {
      overview: body.body.overview !== undefined ? String(body.body.overview) : (prev.overview || ""),
      materials: Array.isArray(body.body.materials) ? body.body.materials : (prev.materials || []),
      steps: Array.isArray(body.body.steps) ? body.body.steps : (prev.steps || []),
      photos: Array.isArray(body.body.photos) ? body.body.photos : (prev.photos || []),
      videos: Array.isArray(body.body.videos) ? body.body.videos : (prev.videos || []),
      games: body.body.games !== undefined ? normalizeGames(body.body.games) : (prev.games || []),
      links: Array.isArray(body.body.links) ? body.body.links : (prev.links || [])
    };
  }
  // Allow top-level field patches
  if (body.overview !== undefined || body.materials !== undefined || body.steps !== undefined
      || body.photos !== undefined || body.videos !== undefined || body.games !== undefined
      || body.links !== undefined) {
    const prev = updates.body || lesson.body || {};
    updates.body = {
      overview: body.overview !== undefined ? String(body.overview) : (prev.overview || ""),
      materials: body.materials !== undefined ? body.materials : (prev.materials || []),
      steps: body.steps !== undefined ? body.steps : (prev.steps || []),
      photos: body.photos !== undefined ? body.photos : (prev.photos || []),
      videos: body.videos !== undefined ? body.videos : (prev.videos || []),
      games: body.games !== undefined ? normalizeGames(body.games) : (prev.games || []),
      links: body.links !== undefined ? body.links : (prev.links || [])
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

exports.curriculumAgent = onRequest({ cors: false, invoker: "public" }, async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, CORS);
    return res.end();
  }

  const path = parsePath(new URL(req.url, "http://localhost"));
  const parts = path.split("/").filter(Boolean);

  try {
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
    if (req.method === "GET" && parts[0] === "lessons" && parts[1]) {
      return await handleGetLesson(req, res, parts[1]);
    }
    if (req.method === "PATCH" && parts[0] === "lessons" && parts[1]) {
      return await handlePatchLesson(req, res, parts[1]);
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
        "GET /lessons/:id",
        "PATCH /lessons/:id"
      ]
    });
  } catch (err) {
    console.error(err);
    return json(res, 500, { error: "Server error" });
  }
});
