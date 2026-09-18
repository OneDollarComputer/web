/**
 * Thin bridge for /physical/ — Save / Load assembly pose JSON via Firebase.
 *
 * Include on Physical Lab pages (already wired from index.html):
 *   <script type="module" src="/physical/js/pose-bridge.js"></script>
 *
 * When signed in (same Google session as /project/):
 *   window.OdcPhysicalPoses.save({ name })     → create/update Firebase project
 *   window.OdcPhysicalPoses.load(projectId)  → fetch + publish window.__labAssemblyPose
 *   window.OdcPhysicalPoses.list()
 *
 * Auto-load: /physical/?poseProject=pp…
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
      #odc-pose-bridge a, #odc-pose-bridge button {
        pointer-events: auto; border: 1px solid #1D2843; border-radius: 8px;
        padding: 0.4rem 0.65rem; background: #0D1220; color: #48E1A7;
        text-decoration: none; cursor: pointer; font: inherit;
      }
      #odc-pose-bridge button.primary { background: #48E1A7; color: #04140e; border-color: transparent; }
      #odc-pose-bridge #${STATUS_ID} {
        pointer-events: none; color: #A9B4C7; font-weight: 500; font-size: 0.75rem;
        max-width: 16rem;
      }
      #odc-pose-bridge[data-auth="out"] [data-need-auth] { display: none; }
      #odc-pose-bridge[data-auth="in"] [data-need-guest] { display: none; }
    </style>
    <a href="/physical/cloud/">Poses</a>
    <button type="button" data-need-guest data-action="signin">Sign in</button>
    <button type="button" class="primary" data-need-auth data-action="save">Save pose</button>
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
    } else if (action === "save") {
      api.save().catch((err) => setStatus((err && err.message) || "Save failed"));
    }
  });
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

function applyPoseToLab(doc) {
  const payload = {
    id: doc.id,
    assemblyId: doc.assemblyId || DEFAULT_ASSEMBLY_ID,
    parts: doc.parts || {},
    welds: Array.isArray(doc.welds) ? doc.welds : [],
    updatedAt: doc.updatedAt || null,
    source: "firebase"
  };
  window.__labAssemblyPose = payload;
  window.dispatchEvent(new CustomEvent("odc-pose-load", { detail: payload }));
  return payload;
}

function currentProjectIdFromUrl() {
  try {
    return new URL(location.href).searchParams.get("poseProject");
  } catch {
    return null;
  }
}

const api = {
  auth,
  capture: () => captureLabPose(window),
  async list() {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    return listPoseProjects(user.uid);
  },
  async load(projectId) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    const id = projectId || currentProjectIdFromUrl();
    if (!id) throw new Error("Missing pose project id");
    const doc = await getPoseProject(user.uid, id);
    if (!doc) throw new Error("Pose project not found");
    applyPoseToLab(doc);
    setStatus(`Loaded ${doc.name || id}`);
    return doc;
  },
  async save({ name, projectId, assemblyId } = {}) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    const snap = captureLabPose(window);
    const urlId = projectId || currentProjectIdFromUrl();
    let doc;
    if (urlId) {
      const existing = await getPoseProject(user.uid, urlId);
      doc = await savePoseProject(user, urlId, {
        ...(existing || {}),
        name: name || (existing && existing.name) || "Lab pose",
        assemblyId: assemblyId || snap.assemblyId || DEFAULT_ASSEMBLY_ID,
        parts: snap.parts,
        welds: snap.welds
      });
    } else {
      doc = await createPoseProject(user, {
        name: name || "Lab pose",
        assemblyId: assemblyId || snap.assemblyId || DEFAULT_ASSEMBLY_ID
      });
      doc = await savePoseProject(user, doc.id, {
        ...doc,
        parts: snap.parts,
        welds: snap.welds
      });
      const url = new URL(location.href);
      url.searchParams.set("poseProject", doc.id);
      history.replaceState(null, "", url);
    }
    setStatus(`Saved ${doc.name} (${doc.id})`);
    return doc;
  },
  async updateMeta(projectId, patch) {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    return updatePoseProject(user, projectId, patch);
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
watchAuth(async (user) => {
  setAuthUi(user);
  if (!user) {
    setStatus("");
    return;
  }
  const id = currentProjectIdFromUrl();
  if (id) {
    try {
      await api.load(id);
    } catch (e) {
      setStatus((e && e.message) || "Could not load pose");
    }
  }
});
