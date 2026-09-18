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
  GoogleAuthProvider
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
      parts[key] = row;
    }
  }
  const welds = Array.isArray(src.welds)
    ? src.welds.map((w) => ({
        name: String((w && w.name) || ""),
        body1: String((w && w.body1) || ""),
        body2: String((w && w.body2) || ""),
        relpose: Array.isArray(w && w.relpose) ? w.relpose.map(Number) : []
      }))
    : [];
  return {
    id,
    ownerUid: uid,
    name: String(src.name || "Untitled pose").trim() || "Untitled pose",
    assemblyId: String(src.assemblyId || DEFAULT_ASSEMBLY_ID),
    parts,
    welds,
    createdAt,
    updatedAt: nowIso()
  };
}

/**
 * Collect a best-effort snapshot from Physical Lab window globals.
 * Prefer window.__labAssemblyPose when mujoco-drop exports a full snapshot.
 */
export function captureLabPose(win = window) {
  if (win.__labAssemblyPose && typeof win.__labAssemblyPose === "object") {
    return {
      assemblyId: win.__labAssemblyPose.assemblyId || DEFAULT_ASSEMBLY_ID,
      parts: win.__labAssemblyPose.parts || {},
      welds: win.__labAssemblyPose.welds || [],
      source: "labAssemblyPose"
    };
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
  return { assemblyId: DEFAULT_ASSEMBLY_ID, parts, welds, source: "window-globals" };
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
