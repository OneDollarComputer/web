/**
 * /physical/cloud/ — list / create / edit assembly pose projects (Firebase RTDB).
 */
import {
  auth,
  watchAuth,
  signIn,
  listPoseProjects,
  getPoseProject,
  createPoseProject,
  savePoseProject,
  deletePoseProject,
  poseRestUrl,
  labUrlForPose,
  DEFAULT_ASSEMBLY_ID
} from "../js/pose-cloud.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const $ = (id) => document.getElementById(id);

let me = null;
let currentId = null;

function showError(msg) {
  const el = $("authError");
  if (!el) return;
  el.hidden = !msg;
  el.textContent = msg || "";
}

function hideAll() {
  ["viewLogin", "viewList", "viewEdit"].forEach((id) => {
    const el = $(id);
    if (el) el.hidden = true;
  });
}

function route() {
  const params = new URLSearchParams(location.search);
  return params.get("id") || params.get("poseProject") || null;
}

function setRoute(id, replace) {
  const url = new URL(location.href);
  if (id) {
    url.searchParams.set("id", id);
    url.searchParams.delete("poseProject");
  } else {
    url.searchParams.delete("id");
    url.searchParams.delete("poseProject");
  }
  if (replace) history.replaceState(null, "", url);
  else history.pushState(null, "", url);
}

function formatWhen(iso) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
}

async function renderList() {
  hideAll();
  $("viewList").hidden = false;
  $("status").textContent = "Loading…";
  $("poseList").innerHTML = "";
  try {
    const rows = await listPoseProjects(me.uid);
    $("emptyNote").hidden = rows.length > 0;
    $("status").textContent = rows.length ? `${rows.length} pose project${rows.length === 1 ? "" : "s"}` : "";
    for (const row of rows) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pose-row";
      btn.innerHTML = `<span><strong>${escapeHtml(row.name)}</strong><span>${escapeHtml(row.id)} · ${escapeHtml(row.assemblyId)} · ${row.partCount} parts · ${row.weldCount} welds</span></span><span>${escapeHtml(formatWhen(row.updatedAt))}</span>`;
      btn.addEventListener("click", () => openProject(row.id));
      $("poseList").appendChild(btn);
    }
  } catch (e) {
    $("status").textContent = (e && e.message) || "Could not load pose projects.";
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function openProject(id, replace) {
  hideAll();
  $("viewEdit").hidden = false;
  currentId = id;
  setRoute(id, replace);
  $("editTitle").textContent = "Loading…";
  $("editStatus").textContent = "";
  try {
    const doc = await getPoseProject(me.uid, id);
    if (!doc) {
      $("editTitle").textContent = "Not found";
      $("editStatus").textContent = "That pose project does not exist.";
      return;
    }
    $("editTitle").textContent = doc.name || id;
    $("editName").value = doc.name || "";
    $("editAssembly").value = doc.assemblyId || DEFAULT_ASSEMBLY_ID;
    $("editPath").textContent = `users/${me.uid}/physicalPoses/${id}`;
    const { id: _drop, ...body } = doc;
    $("editJson").value = JSON.stringify({ id, ...body }, null, 2);
    $("btnOpenLab").href = labUrlForPose(id);
    $("editStatus").textContent = `Updated ${formatWhen(doc.updatedAt)} · REST ${poseRestUrl(me.uid, id)}`;
  } catch (e) {
    $("editStatus").textContent = (e && e.message) || "Could not open.";
  }
}

async function render() {
  showError("");
  if (!me) {
    hideAll();
    $("viewLogin").hidden = false;
    return;
  }
  const id = route();
  if (id) await openProject(id, true);
  else await renderList();
}

$("btnGoogle").addEventListener("click", async () => {
  showError("");
  try {
    await signIn();
  } catch (e) {
    if (e && e.code === "auth/popup-closed-by-user") return;
    showError((e && e.message) || "Sign-in failed.");
  }
});

$("btnNew").addEventListener("click", async () => {
  if (!me) return;
  const name = ($("newName").value || "").trim() || "Untitled pose";
  $("status").textContent = "Creating…";
  try {
    const doc = await createPoseProject(me, { name, assemblyId: DEFAULT_ASSEMBLY_ID });
    $("newName").value = "";
    await openProject(doc.id);
  } catch (e) {
    $("status").textContent = (e && e.message) || "Could not create.";
  }
});

$("btnSave").addEventListener("click", async () => {
  if (!me || !currentId) return;
  $("editStatus").textContent = "Saving…";
  try {
    let parsed;
    try {
      parsed = JSON.parse($("editJson").value);
    } catch {
      throw new Error("Pose JSON is not valid JSON.");
    }
    parsed.name = ($("editName").value || "").trim() || parsed.name;
    parsed.assemblyId = ($("editAssembly").value || "").trim() || parsed.assemblyId || DEFAULT_ASSEMBLY_ID;
    const doc = await savePoseProject(me, currentId, parsed);
    $("editTitle").textContent = doc.name;
    $("editJson").value = JSON.stringify(doc, null, 2);
    $("editStatus").textContent = `Saved ${formatWhen(doc.updatedAt)}`;
  } catch (e) {
    $("editStatus").textContent = (e && e.message) || "Save failed.";
  }
});

$("btnDelete").addEventListener("click", async () => {
  if (!me || !currentId) return;
  if (!confirm("Delete this pose project? This cannot be undone.")) return;
  try {
    await deletePoseProject(me, currentId);
    currentId = null;
    setRoute(null);
    await renderList();
  } catch (e) {
    $("editStatus").textContent = (e && e.message) || "Delete failed.";
  }
});

$("backLink").addEventListener("click", (e) => {
  e.preventDefault();
  currentId = null;
  setRoute(null);
  renderList();
});

window.addEventListener("popstate", () => render());

watchAuth(async (user) => {
  me = user;
  if (!user) {
    currentId = null;
  }
  await render();
});

// Optional: allow Sign out from console / agents sharing the session
window.OdcPoseCloudUi = {
  signOut: () => signOut(auth)
};
