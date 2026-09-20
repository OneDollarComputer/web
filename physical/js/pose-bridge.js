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
  if (document.getElementById("odc-pose-bridge")) return;
  const bar = document.createElement("div");
  bar.id = "odc-pose-bridge";
  bar.setAttribute("aria-label", "Pose cloud");
  bar.innerHTML = `
    <style>
      #odc-pose-bridge {
        position: fixed; z-index: 40; left: 0.75rem; bottom: 0.75rem;
        display: flex; flex-wrap: wrap; gap: 0.35rem; align-items: center;
        font: 600 0.8rem ui-sans-serif, system-ui, sans-serif;
        pointer-events: none;
      }
      #odc-pose-bridge a, #odc-pose-bridge button, #odc-pose-bridge select {
        pointer-events: auto; border: 1px solid #1D2843; border-radius: 8px;
        padding: 0.4rem 0.65rem; background: #0D1220; color: #48E1A7;
        text-decoration: none; cursor: pointer; font: inherit;
      }
      #odc-pose-bridge select {
        color: #E8EEF8; max-width: 11rem;
      }
      #odc-pose-bridge button.primary { background: #48E1A7; color: #04140e; border-color: transparent; }
      #odc-pose-bridge #${NAME_ID} {
        pointer-events: none; color: #E8EEF8; font-weight: 600; font-size: 0.75rem;
        max-width: 12rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      }
      #odc-pose-bridge #${NAME_ID}:empty { display: none; }
      #odc-pose-bridge #${STATUS_ID} {
        pointer-events: none; color: #A9B4C7; font-weight: 500; font-size: 0.75rem;
        max-width: 14rem;
      }
      #odc-pose-bridge[data-auth="out"] [data-need-auth] { display: none; }
      #odc-pose-bridge[data-auth="in"] [data-need-guest] { display: none; }
      #odc-pose-bridge[data-has-open="0"] [data-need-open] { display: none; }
    </style>
    <a href="/physical/cloud/">Poses</a>
    <span id="${NAME_ID}" data-need-auth></span>
    <button type="button" data-need-guest data-action="signin">Sign in</button>
    <select id="${OPEN_ID}" data-need-auth aria-label="Open or save as">
      <option value="">Open…</option>
    </select>
    <span id="${STATUS_ID}" role="status"></span>
  `;
  document.body.appendChild(bar);
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.getAttribute("data-action");
    if (action === "signin") {
      signIn().catch((err) => {
        if (err && err.code === "auth/popup-closed-by-user") return;
        setStatus((err && err.message) || "Sign-in failed");
      });
    }
  });
  const openSelect = bar.querySelector(`#${OPEN_ID}`);
  if (openSelect) {
    openSelect.addEventListener("change", () => {
      const id = openSelect.value;
      openSelect.value = "";
      if (!id) return;
      if (id === "__save_as__") {
        api.saveAs().catch((err) => setStatus((err && err.message) || "Save as failed"));
        return;
      }
      api.load(id).catch((err) => setStatus((err && err.message) || "Open failed"));
    });
  }
}

function setStatus(msg) {
  ensureChrome();
  const el = document.getElementById(STATUS_ID);
  if (el) el.textContent = msg || "";
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
}

async function refreshOpenList() {
  ensureChrome();
  const select = document.getElementById(OPEN_ID);
  if (!select) return;
  const user = auth.currentUser;
  const keep = select.value;
  select.innerHTML = `<option value="">Open…</option>`;
  const saveAsOpt = document.createElement("option");
  saveAsOpt.value = "__save_as__";
  saveAsOpt.textContent = "Save as new…";
  select.appendChild(saveAsOpt);
  if (!user) return;
  try {
    const rows = await listPoseProjects(user.uid);
    for (const row of rows) {
      const opt = document.createElement("option");
      opt.value = row.id;
      opt.textContent = row.name || row.id;
      if (openProject && row.id === openProject.id) opt.selected = false;
      select.appendChild(opt);
    }
    if (keep && [...select.options].some((o) => o.value === keep)) select.value = keep;
    else select.value = "";
  } catch {
    /* list is best-effort for the Open menu */
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
        name: name || existing.name || "Lab pose",
        assemblyId: assemblyId || snap.assemblyId || existing.assemblyId || DEFAULT_ASSEMBLY_ID,
        parts: snap.parts,
        welds: snap.welds,
        recipe: snap.recipe || existing.recipe || null
      });
    } else {
      const poseName = name || promptName("Lab pose");
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
        recipe: snap.recipe || null
      });
    }

    setOpenProject({ id: doc.id, name: doc.name || doc.id });
    setStatus(existingId ? `Saved ${doc.name}` : `Created ${doc.name}`);
    await refreshOpenList();
    return doc;
  },
  /** Always mint a new project id (Save as / Create new). */
  async saveAs({ name, assemblyId } = {}) {
    const poseName = name || promptName((openProject && openProject.name) || "Lab pose");
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
  labUrlForPose,
  poseRestUrl: (projectId) => {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    return poseRestUrl(user.uid, projectId);
  }
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
