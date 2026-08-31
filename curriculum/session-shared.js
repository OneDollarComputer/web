/**
 * Shared helpers for live workshop (teacher dashboard + student join).
 */
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
import { paintIframe, watchHtmlEmbed } from "./iframe-paint.js";

export { paintIframe, repaintHtmlPreviews, watchHtmlEmbed } from "./iframe-paint.js";

export const FIREBASE = {
  apiKey: "AIzaSyAmK0bGgKLvmHLP9dgK3mjX2CdGRwxzNmg",
  authDomain: "auth.onedollarcomputer.com",
  databaseURL: "https://odc-files-default-rtdb.firebaseio.com",
  projectId: "odc-files",
  storageBucket: "odc-files.firebasestorage.app",
  messagingSenderId: "1086912562723",
  appId: "1:1086912562723:web:d158f4ce5c08d1ceb95396"
};

export const SHORT_ORIGIN = "https://odc.rs";
export const MAX_PHOTO_BYTES = 350 * 1024;

let app;
let db;

export function getDb() {
  if (!db) {
    app = initializeApp(FIREBASE);
    db = getDatabase(app);
  }
  return db;
}

export function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function studentId() {
  const key = "odc_student_id";
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem(key, id);
  }
  return id;
}

export function joinUrl(pin) {
  return `${SHORT_ORIGIN}/curriculum/join/?pin=${encodeURIComponent(pin)}`;
}

export function youtubeId(url) {
  const s = String(url || "").trim();
  if (!s) return null;
  try {
    const u = new URL(s);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("/")[0] || null;
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) return u.pathname.split("/")[2] || null;
      return u.searchParams.get("v");
    }
  } catch {
    return null;
  }
  return null;
}

export function renderLessonBody(host, body, { interactiveQuizzes = null } = {}) {
  if (!host || !body) return;
  host.replaceChildren();

  if (body.overview) {
    const block = document.createElement("section");
    block.className = "ws-block";
    block.innerHTML = `<h2>Overview</h2><p>${escapeHtml(body.overview)}</p>`;
    host.appendChild(block);
  }

  if (Array.isArray(body.materials) && body.materials.length) {
    const block = document.createElement("section");
    block.className = "ws-block";
    const items = body.materials.map((m) => `<li>${escapeHtml(m)}</li>`).join("");
    block.innerHTML = `<h2>Materials</h2><ul>${items}</ul>`;
    host.appendChild(block);
  }

  if (Array.isArray(body.steps) && body.steps.length) {
    const block = document.createElement("section");
    block.className = "ws-block";
    const items = body.steps.map((s) => `<li>${escapeHtml(s)}</li>`).join("");
    block.innerHTML = `<h2>Steps</h2><ol>${items}</ol>`;
    host.appendChild(block);
  }

  (body.photos || []).forEach((photo) => {
    const url = photo?.url?.trim();
    if (!url) return;
    const block = document.createElement("section");
    block.className = "ws-block ws-photo";
    const img = document.createElement("img");
    img.src = url;
    img.alt = "";
    img.loading = "lazy";
    block.appendChild(img);
    host.appendChild(block);
  });

  (body.videos || []).forEach((video) => {
    const id = youtubeId(video?.url);
    if (!id) return;
    const block = document.createElement("section");
    block.className = "ws-block ws-video";
    block.innerHTML =
      `<div class="ws-video-frame"><iframe src="https://www.youtube.com/embed/${escapeHtml(id)}" ` +
      `title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ` +
      `allowfullscreen loading="lazy"></iframe></div>`;
    host.appendChild(block);
  });

  (body.html || []).forEach((block, index) => {
    const html = block?.html?.trim();
    if (!html) return;
    const section = document.createElement("section");
    section.className = "ws-block ws-html";
    if (block.title) {
      const h = document.createElement("h2");
      h.textContent = block.title;
      section.appendChild(h);
    }
    const frame = document.createElement("iframe");
    frame.className = "ws-html-frame";
    frame.setAttribute("sandbox", "allow-scripts allow-same-origin");
    frame.setAttribute("title", block.title || `Interactive block ${index + 1}`);
    section.appendChild(frame);
    host.appendChild(section);
    paintIframe(frame, html);
    watchHtmlEmbed(frame);
  });

  const quizzes = body.quizzes || [];
  quizzes.forEach((quiz, qi) => {
    if (!quiz?.question || !Array.isArray(quiz.choices) || quiz.choices.length < 2) return;
    const section = document.createElement("section");
    section.className = "ws-block ws-quiz";
    section.dataset.quizIndex = String(qi);
    const h = document.createElement("h2");
    h.textContent = quiz.question;
    section.appendChild(h);
    const list = document.createElement("div");
    list.className = "ws-quiz-choices";
    quiz.choices.forEach((choice, ci) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ws-quiz-choice";
      btn.textContent = choice;
      btn.dataset.choiceIndex = String(ci);
      if (interactiveQuizzes) {
        btn.addEventListener("click", () => interactiveQuizzes.onAnswer(qi, ci, section, btn));
      } else {
        btn.disabled = true;
      }
      list.appendChild(btn);
    });
    section.appendChild(list);
    host.appendChild(section);
  });

  (body.links || []).forEach((link) => {
    const url = link?.url?.trim();
    if (!url) return;
    const block = document.createElement("section");
    block.className = "ws-block";
    const label = link.label?.trim() || url;
    block.innerHTML = `<p><a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a></p>`;
    host.appendChild(block);
  });
}
