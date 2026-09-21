/**
 * Thin bridge for /physical/ — Save / Load assembly pose JSON via Firebase.
 *
 * Include on Physical Lab pages (already wired from index.html):
 *   <script type="module" src="/physical/js/pose-bridge.js"></script>
 *
 * When signed in (same Google session as /project/):
 *   window.OdcPhysicalPoses.save({ name })      → update open project (or create if none)
 *   window.OdcPhysicalPoses.saveAs({ name })    → always mint a new project id
 *   window.OdcPhysicalPoses.load(projectId)     → fetch + publish window.__labAssemblyPose
 *   window.OdcPhysicalPoses.list()
 *   window.OdcPhysicalPoses.current()           → { id, name } | null
 *
 * Auto-load: /physical/?poseProject=pp…
 * Open project is remembered via URL + sessionStorage so Save updates the same id.
 *
 * Capture prefers window.__labAssemblyPose (export from mujoco-drop).
 * Fallback: window.__odcPose, __sg90Pose, __labWelds (partial).
 * Apply: sets __labAssemblyPose and dispatches "odc-pose-load" for the lab to consume.
 */
import {
  auth,
  watchAuth,
  signIn,
  captureLabPose,
  createPoseProject,
  savePoseProject,
  getPoseProject,
  listPoseProjects,
  updatePoseProject,
  deletePoseProject,
  getSharedDefaultPose,
  publishSharedDefaultPose,
  labUrlForPose,
  poseRestUrl,
  DEFAULT_ASSEMBLY_ID
} from "./pose-cloud.js";

const STATUS_ID = "odc-pose-bridge-status";
const NAME_ID = "odc-pose-bridge-name";
const OPEN_ID = "odc-pose-bridge-open";
const SESSION_KEY = "odc-pose-project";

/** @type {{ id: string, name: string } | null} */
let openProject = null;

function readSessionProject() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed.id !== "string") return null;
    return {
      id: parsed.id,
      name: typeof parsed.name === "string" ? parsed.name : parsed.id
    };
  } catch {
    return null;
  }
}

function writeSessionProject(project) {
  try {
    if (!project || !project.id) {
      sessionStorage.removeItem(SESSION_KEY);
      return;
    }
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ id: project.id, name: project.name || project.id })
    );
  } catch {
    /* ignore quota / private mode */
  }
}

function setOpenProject(project, { syncUrl = true } = {}) {
  openProject = project && project.id
    ? { id: project.id, name: project.name || project.id }
    : null;
  writeSessionProject(openProject);
  if (syncUrl) {
    try {
      const url = new URL(location.href);
      if (openProject) url.searchParams.set("poseProject", openProject.id);
      else url.searchParams.delete("poseProject");
      history.replaceState(null, "", url);
    } catch {
      /* ignore */
    }
  }
  refreshChrome();
}

function currentProjectIdFromUrl() {
  try {
    return new URL(location.href).searchParams.get("poseProject");
  } catch {
    return null;
  }
}

function resolveOpenProjectId(explicitId) {
  return explicitId || (openProject && openProject.id) || currentProjectIdFromUrl() || (readSessionProject() || {}).id || null;
}

function ensureChrome() {
  let bar = document.getElementById("odc-pose-bridge");
  if (bar) {
    bar.hidden = true;
    bar.setAttribute("aria-hidden", "true");
    return;
  }
  bar = document.createElement("div");
  bar.id = "odc-pose-bridge";
  bar.hidden = true;
  bar.setAttribute("aria-hidden", "true");
  bar.innerHTML = `
    <span id="${NAME_ID}"></span>
    <button type="button" data-need-guest data-action="signin">Sign in</button>
    <select id="${OPEN_ID}" aria-label="Open or save as"></select>
    <span id="${STATUS_ID}" role="status"></span>
  `;
  document.body.appendChild(bar);
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    if (btn.getAttribute("data-action") === "signin") {
      signIn().catch((err) => {
        if (err && err.code === "auth/popup-closed-by-user") return;
        setStatus((err && err.message) || "Sign-in failed");
      });
    }
  });
}

function setStatus(msg) {
  ensureChrome();
  const el = document.getElementById(STATUS_ID);
  if (el) el.textContent = msg || "";
  try {
    window.dispatchEvent(
      new CustomEvent("odc-pose-bridge-status", { detail: { message: msg || "" } }),
    );
  } catch {
    /* ignore */
  }
}

function setAuthUi(user) {
  ensureChrome();
  const bar = document.getElementById("odc-pose-bridge");
  if (bar) bar.dataset.auth = user ? "in" : "out";
}

function refreshChrome() {
  ensureChrome();
  const bar = document.getElementById("odc-pose-bridge");
  if (bar) bar.dataset.hasOpen = openProject ? "1" : "0";
  const nameEl = document.getElementById(NAME_ID);
  if (nameEl) {
    nameEl.textContent = openProject ? openProject.name : "";
    nameEl.title = openProject ? `${openProject.name} (${openProject.id})` : "";
  }
  const chipName = document.querySelector("#lab-autosave-chip [data-bridge-name]");
  if (chipName) {
    chipName.textContent = openProject ? openProject.name : "No project";
    chipName.title = openProject ? `${openProject.name} (${openProject.id})` : "";
  }
}

async function refreshOpenList() {
  ensureChrome();
  const selects = [
    document.getElementById(OPEN_ID),
    document.querySelector("#lab-autosave-chip [data-pose-open]"),
  ].filter(Boolean);
  if (!selects.length) return;
  const user = auth.currentUser;
  /** @type {{ id: string, name: string }[]} */
  let rows = [];
  if (user) {
    try {
      rows = await listPoseProjects(user.uid);
    } catch {
      rows = [];
    }
  }
  for (const select of selects) {
    const keep = select.value;
    select.innerHTML = `<option value="">Open…</option>`;
    const saveAsOpt = document.createElement("option");
    saveAsOpt.value = "__save_as__";
    saveAsOpt.textContent = "Save as new…";
    select.appendChild(saveAsOpt);
    for (const row of rows) {
      const opt = document.createElement("option");
      opt.value = row.id;
      opt.textContent = row.name || row.id;
      select.appendChild(opt);
    }
    if (keep && [...select.options].some((o) => o.value === keep)) select.value = keep;
    else select.value = "";
  }
}

function applyPoseToLab(doc) {
  const payload = {
    id: doc.id,
    name: doc.name || doc.id,
    assemblyId: doc.assemblyId || DEFAULT_ASSEMBLY_ID,
    parts: doc.parts || {},
    welds: Array.isArray(doc.welds) ? doc.welds : [],
    recipe: doc.recipe || null,
    camera: doc.camera || null,
    horns: doc.horns || null,
    hornMounts: doc.hornMounts || null,
    updatedAt: doc.updatedAt || null,
    source: "firebase"
  };
  window.__labAssemblyPose = payload;
  window.dispatchEvent(new CustomEvent("odc-pose-load", { detail: payload }));
  // Best-effort: if mujoco-drop exposes an apply hook, call it.
  try {
    if (typeof window.__labApplyAssemblyPose === "function") {
      window.__labApplyAssemblyPose(payload);
    }
  } catch (err) {
    console.warn("[odc-pose] __labApplyAssemblyPose failed", err);
  }
  return payload;
}

function promptName(defaultName) {
  const fallback = defaultName || "Lab pose";
  if (typeof window.prompt !== "function") return fallback;
  const entered = window.prompt("Pose name", fallback);
  if (entered === null) return null;
  const name = String(entered).trim();
  return name || fallback;
}

const api = {
  auth,
  capture: () => captureLabPose(window),
  current: () => (openProject ? { ...openProject } : null),
  async list() {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    return listPoseProjects(user.uid);
  },
  async load(projectId) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    const id = projectId || resolveOpenProjectId();
    if (!id) throw new Error("Missing pose project id");
    const doc = await getPoseProject(user.uid, id);
    if (!doc) throw new Error("Pose project not found");
    applyPoseToLab(doc);
    setOpenProject({ id: doc.id, name: doc.name || doc.id });
    setStatus(`Loaded ${doc.name || id}`);
    await refreshOpenList();
    return doc;
  },
  /**
   * Update the open project. Creates one only when nothing is open.
   * Pass { createNew: true } or use saveAs() to always mint a new id.
   */
  async save({ name, projectId, assemblyId, createNew = false } = {}) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    const snap = captureLabPose(window);
    const existingId = createNew ? null : resolveOpenProjectId(projectId);

    let doc;
    if (existingId) {
      const existing = await getPoseProject(user.uid, existingId);
      if (!existing) {
        throw new Error(`Pose project ${existingId} not found — use Save as`);
      }
      doc = await savePoseProject(user, existingId, {
        ...existing,
        name: name || existing.name || "Untitled",
        assemblyId: assemblyId || snap.assemblyId || existing.assemblyId || DEFAULT_ASSEMBLY_ID,
        parts: snap.parts,
        welds: snap.welds,
        recipe: snap.recipe || existing.recipe || null,
        camera: snap.camera || existing.camera || null,
        horns: snap.horns || existing.horns || null,
        hornMounts: snap.hornMounts || existing.hornMounts || null
      });
    } else {
      const poseName = name || promptName("Untitled");
      if (poseName === null) {
        setStatus("Save cancelled");
        return null;
      }
      doc = await createPoseProject(user, {
        name: poseName,
        assemblyId: assemblyId || snap.assemblyId || DEFAULT_ASSEMBLY_ID
      });
      doc = await savePoseProject(user, doc.id, {
        ...doc,
        parts: snap.parts,
        welds: snap.welds,
        recipe: snap.recipe || null,
        camera: snap.camera || null,
        horns: snap.horns || null,
        hornMounts: snap.hornMounts || null
      });
    }

    setOpenProject({ id: doc.id, name: doc.name || doc.id });
    setStatus(existingId ? `Saved ${doc.name}` : `Created ${doc.name}`);
    try {
      await publishSharedDefaultPose(user, doc);
      setStatus(
        existingId
          ? `Saved ${doc.name} · set as lab default`
          : `Created ${doc.name} · set as lab default`,
      );
    } catch (err) {
      console.warn("[pose-bridge] shared default publish failed", err);
    }
    await refreshOpenList();
    return doc;
  },
  /** Always mint a new project id (Save as / Create new). */
  async saveAs({ name, assemblyId } = {}) {
    const poseName = name || promptName((openProject && openProject.name) || "Untitled");
    if (poseName === null) {
      setStatus("Save as cancelled");
      return null;
    }
    return api.save({ name: poseName, assemblyId, createNew: true });
  },
  async updateMeta(projectId, patch) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    const doc = await updatePoseProject(user, projectId, patch);
    if (openProject && openProject.id === projectId && doc) {
      setOpenProject({ id: doc.id, name: doc.name || doc.id });
    }
    return doc;
  },
  async delete(projectId) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    const id = projectId || (openProject && openProject.id);
    if (!id) throw new Error("Missing pose project id");
    await deletePoseProject(user, id);
    if (openProject && openProject.id === id) {
      setOpenProject(null);
    }
    await refreshOpenList();
    setStatus(`Deleted ${id}`);
    return true;
  },
  /** Create a project from an explicit payload (used to seed Cowboy Walker). */
  async upsertFromPayload(payload = {}) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    const name = String(payload.name || "Cowboy Walker").trim() || "Cowboy Walker";
    const assemblyId = payload.assemblyId || DEFAULT_ASSEMBLY_ID;
    const created = await createPoseProject(user, { name, assemblyId });
    const doc = await savePoseProject(user, created.id, {
      ...payload,
      id: created.id,
      ownerUid: user.uid,
      name,
      assemblyId,
      createdAt: created.createdAt
    });
    setOpenProject({ id: doc.id, name: doc.name || doc.id });
    await refreshOpenList();
    return doc;
  },
  /** Overwrite an existing project id with an explicit payload. */
  async replacePayload(projectId, payload = {}) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    if (!projectId) throw new Error("Missing pose project id");
    const name = String(payload.name || "Cowboy Walker").trim() || "Cowboy Walker";
    const assemblyId = payload.assemblyId || DEFAULT_ASSEMBLY_ID;
    const existing = await getPoseProject(user.uid, projectId);
    const doc = await savePoseProject(user, projectId, {
      ...payload,
      id: projectId,
      ownerUid: user.uid,
      name,
      assemblyId,
      createdAt: (existing && existing.createdAt) || undefined
    });
    setOpenProject({ id: doc.id, name: doc.name || doc.id });
    await refreshOpenList();
    return doc;
  },
  async getSharedDefault() {
    return getSharedDefaultPose();
  },
  async publishSharedDefault(payload = {}) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    return publishSharedDefaultPose(user, payload);
  },
  labUrlForPose,
  poseRestUrl: (projectId) => {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    return poseRestUrl(user.uid, projectId);
  },
  signIn: () => signIn(),
  signOut: () => auth.signOut(),
};

window.OdcPhysicalPoses = api;

ensureChrome();
refreshChrome();

// Restore open project id from URL or session before auth settles.
(() => {
  const fromUrl = currentProjectIdFromUrl();
  const fromSession = readSessionProject();
  if (fromUrl) {
    setOpenProject(
      { id: fromUrl, name: (fromSession && fromSession.id === fromUrl && fromSession.name) || fromUrl },
      { syncUrl: false }
    );
  } else if (fromSession) {
    setOpenProject(fromSession, { syncUrl: true });
  }
})();

watchAuth(async (user) => {
  setAuthUi(user);
  if (!user) {
    setStatus("");
    await refreshOpenList();
    return;
  }
  await refreshOpenList();
  const id = resolveOpenProjectId();
  if (id) {
    try {
      await api.load(id);
    } catch (e) {
      setStatus((e && e.message) || "Could not load pose");
    }
  }
});
