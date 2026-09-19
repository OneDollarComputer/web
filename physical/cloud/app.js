/**
 * /physical/cloud/ — list / create / edit assembly pose projects (Firebase RTDB).
 *
 * Open → Physical Lab with ?poseProject= (bridge loads JSON + fires odc-pose-load).
 * Edit → JSON editor on this page. Save updates the open id; Create new mints a new id.
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
  return params.get("id") || null;
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

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Open in Lab — bridge auto-loads JSON and notifies the lab. */
function openInLab(id) {
  location.href = labUrlForPose(id);
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
      const item = document.createElement("div");
      item.className = "pose-row";
      item.innerHTML = `
        <button type="button" class="pose-main" data-open-lab="${escapeHtml(row.id)}">
          <strong>${escapeHtml(row.name)}</strong>
          <span>${escapeHtml(row.id)} · ${escapeHtml(row.assemblyId)} · ${row.partCount} parts · ${row.weldCount} welds</span>
        </button>
        <span class="pose-meta">${escapeHtml(formatWhen(row.updatedAt))}</span>
        <span class="pose-actions">
          <button type="button" class="ghost small" data-open-lab="${escapeHtml(row.id)}">Open</button>
          <button type="button" class="ghost small" data-edit="${escapeHtml(row.id)}">Edit</button>
        </span>
      `;
      $("poseList").appendChild(item);
    }
  } catch (e) {
    $("status").textContent = (e && e.message) || "Could not load pose projects.";
  }
}

$("poseList").addEventListener("click", (e) => {
  const labBtn = e.target.closest("[data-open-lab]");
  if (labBtn) {
    openInLab(labBtn.getAttribute("data-open-lab"));
    return;
  }
  const editBtn = e.target.closest("[data-edit]");
  if (editBtn) {
    openEditor(editBtn.getAttribute("data-edit"));
  }
});

async function openEditor(id, replace) {
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
    $("editStatus").textContent = `Updated ${formatWhen(doc.updatedAt)}`;
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
  // Legacy ?poseProject= on cloud → send straight to Lab (load + apply notify).
  const params = new URLSearchParams(location.search);
  const poseProject = params.get("poseProject");
  if (poseProject && !params.get("id")) {
    openInLab(poseProject);
    return;
  }
  const id = route();
  if (id) await openEditor(id, true);
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
    openInLab(doc.id);
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

$("btnSaveAs").addEventListener("click", async () => {
  if (!me) return;
  $("editStatus").textContent = "Saving as…";
  try {
    let parsed;
    try {
      parsed = JSON.parse($("editJson").value || "{}");
    } catch {
      throw new Error("Pose JSON is not valid JSON.");
    }
    const name =
      ($("editName").value || "").trim() ||
      (parsed.name ? `${parsed.name} copy` : "Untitled pose");
    parsed.name = name;
    parsed.assemblyId = ($("editAssembly").value || "").trim() || parsed.assemblyId || DEFAULT_ASSEMBLY_ID;
    const created = await createPoseProject(me, {
      name,
      assemblyId: parsed.assemblyId
    });
    const doc = await savePoseProject(me, created.id, { ...parsed, ...created, name });
    await openEditor(doc.id);
    $("editStatus").textContent = `Created ${doc.name} (${doc.id})`;
  } catch (e) {
    $("editStatus").textContent = (e && e.message) || "Save as failed.";
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
