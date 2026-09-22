/**
 * Physical Lab — assembly pose projects in Firebase RTDB.
 *
 * Path (owner-only, same Google login as /project/ and /editor/):
 *   users/{uid}/physicalPoses/{projectId}
 *
 * Public config only — see firebase-public.json / editor/firebase-public.json.
 */
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  get,
  set,
  update,
  remove
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import { signInWithGoogle } from "/js/sign-in.js";

export const FIREBASE_PUBLIC = {
  apiKey: "AIzaSyAmK0bGgKLvmHLP9dgK3mjX2CdGRwxzNmg",
  authDomain: "auth.onedollarcomputer.com",
  databaseURL: "https://odc-files-default-rtdb.firebaseio.com",
  projectId: "odc-files",
  storageBucket: "odc-files.firebasestorage.app",
  messagingSenderId: "1086912562723",
  appId: "1:1086912562723:web:d158f4ce5c08d1ceb95396"
};

export const DEFAULT_ASSEMBLY_ID = "odc-drop";

const app = getApps().length ? getApps()[0] : initializeApp(FIREBASE_PUBLIC);
export const auth = getAuth(app);
export const db = getDatabase(app);

// Same Google session across reloads (local Vite + production).
setPersistence(auth, browserLocalPersistence).catch(() => {
  /* private mode / blocked storage */
});

function nowIso() {
  return new Date().toISOString();
}

export function newPoseProjectId() {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return "pp" + Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function posesPath(uid, projectId) {
  if (!uid) throw new Error("Sign in required.");
  return projectId
    ? `users/${uid}/physicalPoses/${projectId}`
    : `users/${uid}/physicalPoses`;
}

/** Empty pose document — edit parts/welds online or via Physical Lab Save. */
export function emptyPoseDoc({
  ownerUid,
  name = "Untitled pose",
  assemblyId = DEFAULT_ASSEMBLY_ID,
  projectId = null,
  createdAt = nowIso()
} = {}) {
  if (!ownerUid) throw new Error("ownerUid required");
  const id = projectId || newPoseProjectId();
  return {
    id,
    ownerUid,
    name: String(name).trim() || "Untitled pose",
    assemblyId: String(assemblyId || DEFAULT_ASSEMBLY_ID),
    parts: {},
    welds: [],
    createdAt,
    updatedAt: createdAt
  };
}

/**
 * Normalize a pose payload before write.
 * parts: { [partId]: { pos:[x,y,z], quat:[w,x,y,z], eulerDeg?:{x,y,z} } }
 * welds: [{ name, body1, body2, relpose:[7] }]
 */
export function normalizePoseDoc(raw, { ownerUid, projectId } = {}) {
  const src = raw && typeof raw === "object" ? raw : {};
  const id = projectId || src.id || newPoseProjectId();
  const uid = ownerUid || src.ownerUid;
  if (!uid) throw new Error("ownerUid required");
  const createdAt = src.createdAt || nowIso();
  const parts = {};
  if (src.parts && typeof src.parts === "object" && !Array.isArray(src.parts)) {
    for (const [key, val] of Object.entries(src.parts)) {
      if (!val || typeof val !== "object") continue;
      const row = {};
      if (Array.isArray(val.pos)) row.pos = val.pos.map(Number);
      if (Array.isArray(val.quat)) row.quat = val.quat.map(Number);
      if (val.eulerDeg && typeof val.eulerDeg === "object") {
        row.eulerDeg = {
          x: Number(val.eulerDeg.x),
          y: Number(val.eulerDeg.y),
          z: Number(val.eulerDeg.z)
        };
      }
      if (val.kind != null) row.kind = String(val.kind);
      if (val.motor && typeof val.motor === "object") row.motor = { ...val.motor };
      if (val.hornMount !== undefined) row.hornMount = val.hornMount;
      if (val.hingeDeg !== undefined) row.hingeDeg = Number(val.hingeDeg);
      if (val.jointDeg !== undefined) row.jointDeg = Number(val.jointDeg);
      if (val.targetDeg !== undefined) row.targetDeg = Number(val.targetDeg);
      if (val.hornMountIndex !== undefined) row.hornMountIndex = val.hornMountIndex;
      if (val.motorOrientation && typeof val.motorOrientation === "object") {
        row.motorOrientation = { ...val.motorOrientation };
      }
      parts[key] = row;
    }
  }
  const welds = Array.isArray(src.welds)
    ? src.welds.map((w) => ({
        name: String((w && w.name) || ""),
        body1: String((w && (w.body1 || w.parent)) || ""),
        body2: String((w && (w.body2 || w.child)) || ""),
        relpose: Array.isArray(w && w.relpose) ? w.relpose.map(Number) : []
      }))
    : [];
  const doc = {
    id,
    ownerUid: uid,
    name: String(src.name || "Untitled pose").trim() || "Untitled pose",
    assemblyId: String(src.assemblyId || DEFAULT_ASSEMBLY_ID),
    parts,
    welds,
    createdAt,
    updatedAt: nowIso()
  };
  // Optional recipe blob (lab download shape) — pass through for apply hooks.
  if (src.recipe && typeof src.recipe === "object") {
    doc.recipe = src.recipe;
  }
  if (src.camera && typeof src.camera === "object") {
    doc.camera = src.camera;
  }
  if (src.horns && typeof src.horns === "object") {
    doc.horns = src.horns;
  }
  if (src.hornMounts && typeof src.hornMounts === "object") {
    doc.hornMounts = src.hornMounts;
  }
  return doc;
}

/**
 * Convert a Physical Lab recipe snapshot (parts[]) into cloud parts map.
 * Recipe shape from lab "Save poses (JSON)":
 *   { id, parts:[{id,pos,euler_xyz_deg,quat_wxyz}], welds:[{parent,child}] }
 */
export function recipeToPartsAndWelds(recipe) {
  const parts = {};
  const list = recipe && Array.isArray(recipe.parts) ? recipe.parts : [];
  for (const part of list) {
    if (!part || !part.id) continue;
    const row = {};
    if (part.kind != null) row.kind = String(part.kind);
    if (Array.isArray(part.pos)) row.pos = part.pos.map(Number);
    if (Array.isArray(part.quat_wxyz)) row.quat = part.quat_wxyz.map(Number);
    else if (Array.isArray(part.quat)) row.quat = part.quat.map(Number);
    if (Array.isArray(part.euler_xyz_deg) && part.euler_xyz_deg.length >= 3) {
      row.eulerDeg = {
        x: Number(part.euler_xyz_deg[0]),
        y: Number(part.euler_xyz_deg[1]),
        z: Number(part.euler_xyz_deg[2])
      };
    }
    if (part.motor) row.motor = { ...part.motor };
    if (part.hornMount !== undefined) row.hornMount = part.hornMount;
    if (part.hingeDeg !== undefined) row.hingeDeg = part.hingeDeg;
    parts[part.id] = row;
  }
  const welds = Array.isArray(recipe && recipe.welds)
    ? recipe.welds.map((w, i) => ({
        name: String((w && w.name) || `weld_${i}`),
        body1: String((w && (w.body1 || w.parent)) || ""),
        body2: String((w && (w.body2 || w.child)) || ""),
        relpose: Array.isArray(w && w.relpose) ? w.relpose.map(Number) : []
      }))
    : [];
  return { parts, welds, recipe };
}

/**
 * Collect a best-effort snapshot from Physical Lab window globals.
 * Prefer live exporters from mujoco-drop, then __labAssemblyPose, then partial globals.
 */
export function captureLabPose(win = window) {
  const exporters = [win.__labExportPoses, win.__labGetAssemblyPose];
  for (const fn of exporters) {
    if (typeof fn !== "function") continue;
    try {
      const recipe = fn.call(win);
      if (recipe && typeof recipe === "object" && Array.isArray(recipe.parts)) {
        const { parts, welds } = recipeToPartsAndWelds(recipe);
        return {
          assemblyId: recipe.assemblyId || recipe.id || DEFAULT_ASSEMBLY_ID,
          parts,
          welds,
          recipe,
          source: "labExportPoses"
        };
      }
    } catch {
      /* try next */
    }
  }

  if (win.__labAssemblyPose && typeof win.__labAssemblyPose === "object") {
    const src = win.__labAssemblyPose;
    // Skip firebase-only mirrors so Save can still fall through to live globals.
    if (src.source !== "firebase") {
      const fromRecipe = src.recipe ? recipeToPartsAndWelds(src.recipe) : null;
      return {
        assemblyId: src.assemblyId || DEFAULT_ASSEMBLY_ID,
        parts: Object.keys(src.parts || {}).length ? src.parts : (fromRecipe && fromRecipe.parts) || {},
        welds: Array.isArray(src.welds) && src.welds.length
          ? src.welds
          : (fromRecipe && fromRecipe.welds) || [],
        recipe: src.recipe || null,
        source: "labAssemblyPose"
      };
    }
  }

  const parts = {};
  const odc = win.__odcPose;
  if (odc && Array.isArray(odc.pos)) {
    parts.odc = {
      pos: [...odc.pos],
      quat: Array.isArray(odc.quat) ? [...odc.quat] : undefined,
      eulerDeg: odc.eulerDeg ? { ...odc.eulerDeg } : undefined
    };
  }
  const sg90 = win.__sg90Pose;
  if (sg90) {
    parts.sg90_rotor = {
      pos: Array.isArray(sg90.pos) ? [...sg90.pos] : undefined,
      quat: Array.isArray(sg90.quat) ? [...sg90.quat] : undefined,
      eulerDeg: typeof sg90.qDeg === "number" ? { x: 0, y: 0, z: sg90.qDeg } : undefined,
      jointDeg: typeof sg90.qDeg === "number" ? sg90.qDeg : undefined,
      targetDeg: typeof sg90.targetDeg === "number" ? sg90.targetDeg : undefined,
      hornMountIndex: sg90.hornMountIndex
    };
  }
  const orient = win.__sg90MotorOrientation;
  if (orient && parts.sg90_rotor) {
    parts.sg90 = {
      motorOrientation: {
        yawDeg: Number(orient.yawDeg) || 0,
        pitchDeg: Number(orient.pitchDeg) || 0,
        rollDeg: Number(orient.rollDeg) || 0
      }
    };
  }
  const weldBag = win.__labWelds;
  const welds = weldBag && Array.isArray(weldBag.welds) ? weldBag.welds.map((w) => ({ ...w })) : [];

  // Last resort: re-save the loaded firebase payload if nothing live is available.
  if (
    !Object.keys(parts).length &&
    !welds.length &&
    win.__labAssemblyPose &&
    typeof win.__labAssemblyPose === "object"
  ) {
    const src = win.__labAssemblyPose;
    return {
      assemblyId: src.assemblyId || DEFAULT_ASSEMBLY_ID,
      parts: src.parts || {},
      welds: Array.isArray(src.welds) ? src.welds : [],
      recipe: src.recipe || null,
      source: "labAssemblyPose-cached"
    };
  }

  return { assemblyId: DEFAULT_ASSEMBLY_ID, parts, welds, recipe: null, source: "window-globals" };
}

export async function requireUser() {
  const user = auth.currentUser;
  if (!user) throw new Error("Sign in with Google first.");
  return user;
}

export async function listPoseProjects(uid) {
  const snap = await get(ref(db, posesPath(uid)));
  if (!snap.exists()) return [];
  const val = snap.val() || {};
  return Object.keys(val)
    .map((id) => {
      const row = val[id] || {};
      return {
        id,
        name: row.name || id,
        assemblyId: row.assemblyId || DEFAULT_ASSEMBLY_ID,
        updatedAt: row.updatedAt || row.createdAt || "",
        createdAt: row.createdAt || "",
        partCount: row.parts ? Object.keys(row.parts).length : 0,
        weldCount: Array.isArray(row.welds) ? row.welds.length : 0
      };
    })
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
}

export async function getPoseProject(uid, projectId) {
  const snap = await get(ref(db, posesPath(uid, projectId)));
  if (!snap.exists()) return null;
  return { id: projectId, ...snap.val() };
}

export async function createPoseProject(user, { name, assemblyId } = {}) {
  const doc = emptyPoseDoc({
    ownerUid: user.uid,
    name,
    assemblyId
  });
  await set(ref(db, posesPath(user.uid, doc.id)), doc);
  return doc;
}

export async function savePoseProject(user, projectId, payload) {
  const doc = normalizePoseDoc(payload, { ownerUid: user.uid, projectId });
  await set(ref(db, posesPath(user.uid, doc.id)), doc);
  return doc;
}

export async function updatePoseProject(user, projectId, patch) {
  const updates = { ...patch, updatedAt: nowIso() };
  await update(ref(db, posesPath(user.uid, projectId)), updates);
  return getPoseProject(user.uid, projectId);
}

export async function deletePoseProject(user, projectId) {
  await remove(ref(db, posesPath(user.uid, projectId)));
}

/** Shared lab start pose — any visitor reads; signed-in Save publishes. */
export const SHARED_DEFAULT_PATH = "physicalLab/sharedDefault";

export async function getSharedDefaultPose() {
  const snap = await get(ref(db, SHARED_DEFAULT_PATH));
  if (!snap.exists()) return null;
  const val = snap.val() || {};
  return {
    ...val,
    name: val.name || "Cowboy Walker",
    assemblyId: val.assemblyId || "cowboy_walker",
    parts: val.parts && typeof val.parts === "object" ? val.parts : {},
    welds: Array.isArray(val.welds) ? val.welds : [],
    source: "shared-default"
  };
}

/**
 * Publish the pose everyone gets on lab start.
 * @param {import("firebase/auth").User} user
 * @param {object} payload
 */
export async function publishSharedDefaultPose(user, payload = {}) {
  if (!user) throw new Error("Sign in required");
  const live =
    typeof window !== "undefined" &&
    window.__labAssemblyPose &&
    typeof window.__labAssemblyPose === "object"
      ? window.__labAssemblyPose
      : {};
  const doc = {
    name: String(payload.name || live.name || "Cowboy Walker").trim() || "Cowboy Walker",
    assemblyId: String(
      payload.assemblyId || live.assemblyId || "cowboy_walker"
    ),
    parts:
      payload.parts && typeof payload.parts === "object"
        ? payload.parts
        : live.parts || {},
    welds: Array.isArray(payload.welds)
      ? payload.welds
      : Array.isArray(live.welds)
        ? live.welds
        : [],
    updatedAt: nowIso(),
    updatedByUid: user.uid,
    updatedByName: user.displayName || user.email || user.uid
  };
  if (payload.camera || live.camera) doc.camera = payload.camera || live.camera;
  if (payload.horns || live.horns) doc.horns = payload.horns || live.horns;
  if (payload.hornMounts || live.hornMounts) {
    doc.hornMounts = payload.hornMounts || live.hornMounts;
  }
  if (payload.recipe || live.recipe) doc.recipe = payload.recipe || live.recipe;
  if (payload.id) doc.sourceProjectId = payload.id;
  await set(ref(db, SHARED_DEFAULT_PATH), doc);
  return doc;
}

export async function signIn() {
  const provider = new GoogleAuthProvider();
  return signInWithGoogle(auth, provider);
}

export function watchAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

/** RTDB REST URL for agents with the owner's ID token (owner-only rules). */
export function poseRestUrl(uid, projectId) {
  const base = FIREBASE_PUBLIC.databaseURL.replace(/\/$/, "");
  return `${base}/users/${encodeURIComponent(uid)}/physicalPoses/${encodeURIComponent(projectId)}.json`;
}

export function labUrlForPose(projectId) {
  return `/physical/?poseProject=${encodeURIComponent(projectId)}`;
}
