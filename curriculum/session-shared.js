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
export const SITE_ORIGIN = "https://onedollarcomputer.com";
export const MAX_PHOTO_BYTES = 350 * 1024;
export const STUDENT_ACTIVE_MS = 2 * 60 * 1000;

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
  return `${SHORT_ORIGIN}/${pin}`;
}

export function joinUrlAlt(pin) {
  return `${SITE_ORIGIN}/${pin}`;
}

/** Room code from ?pin=, ?code=, or short path /8709 */
export function joinCodeFromLocation() {
  const params = new URLSearchParams(location.search);
  const fromQuery = params.get("pin") || params.get("code");
  if (fromQuery) return fromQuery.replace(/\D/g, "").slice(0, 4);
  const parts = location.pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "";
  if (/^\d{4}$/.test(last)) return last;
  return "";
}

export function formatDuration(ms) {
  const min = Math.max(1, Math.round(ms / 60000));
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

export function formatTimeLeft(expiresAt) {
  const left = expiresAt - Date.now();
  if (left <= 0) return "Expired";
  return formatDuration(left);
}

export function countStudents(studentsMap, { activeMs = STUDENT_ACTIVE_MS } = {}) {
  const rows = Object.values(studentsMap || {});
  const now = Date.now();
  let joined = rows.length;
  let viewed = 0;
  let active = 0;
  rows.forEach((row) => {
    if (row?.viewed) viewed++;
    if (row?.lastSeen && now - row.lastSeen < activeMs) active++;
  });
  return { joined, viewed, active };
}

/** Turn lesson body into teacher-controlled slides. */
export function lessonSlides(body) {
  if (!body) return [];
  const slides = [];
  if (body.overview?.trim()) slides.push({ kind: "overview", title: "Overview" });
  if (Array.isArray(body.materials) && body.materials.length) {
    slides.push({ kind: "materials", title: "Materials" });
  }
  (body.steps || []).forEach((step, i) => {
    if (String(step || "").trim()) slides.push({ kind: "step", title: `Step ${i + 1}`, stepIndex: i });
  });
  (body.photos || []).forEach((_, i) => {
    if (body.photos[i]?.url?.trim()) slides.push({ kind: "photo", title: "Photo", photoIndex: i });
  });
  (body.videos || []).forEach((video, i) => {
    if (youtubeId(video?.url)) slides.push({ kind: "video", title: "Video", videoIndex: i });
  });
  (body.html || []).forEach((block, i) => {
    if (block?.html?.trim()) {
      slides.push({ kind: "html", title: block.title || "Activity", htmlIndex: i });
    }
  });
  (body.quizzes || []).forEach((quiz, i) => {
    if (quiz?.question && Array.isArray(quiz.choices) && quiz.choices.length >= 2) {
      slides.push({ kind: "quiz", title: "Quiz", quizIndex: i });
    }
  });
  if ((body.links || []).some((link) => link?.url?.trim())) {
    slides.push({ kind: "links", title: "Links" });
  }
  return slides;
}

export function renderSlide(host, body, slide, { onAnswer = null } = {}) {
  if (!host || !body || !slide) return;
  host.replaceChildren();
  const block = document.createElement("section");
  block.className = "ws-block ws-slide";

  if (slide.kind === "overview") {
    block.innerHTML = `<h2>Overview</h2><p>${escapeHtml(body.overview)}</p>`;
  } else if (slide.kind === "materials") {
    const items = (body.materials || []).map((m) => `<li>${escapeHtml(m)}</li>`).join("");
    block.innerHTML = `<h2>Materials</h2><ul>${items}</ul>`;
  } else if (slide.kind === "step") {
    const step = body.steps?.[slide.stepIndex] || "";
    block.innerHTML = `<h2>Step ${slide.stepIndex + 1}</h2><p>${escapeHtml(step)}</p>`;
  } else if (slide.kind === "photo") {
    const url = body.photos?.[slide.photoIndex]?.url?.trim();
    if (!url) return;
    const img = document.createElement("img");
    img.src = url;
    img.alt = "";
    img.loading = "lazy";
    block.appendChild(img);
  } else if (slide.kind === "video") {
    const id = youtubeId(body.videos?.[slide.videoIndex]?.url);
    if (!id) return;
    block.innerHTML =
      `<div class="ws-video-frame"><iframe src="https://www.youtube.com/embed/${escapeHtml(id)}" ` +
      `title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ` +
      `allowfullscreen loading="lazy"></iframe></div>`;
  } else if (slide.kind === "html") {
    const htmlBlock = body.html?.[slide.htmlIndex];
    const html = htmlBlock?.html?.trim();
    if (!html) return;
    if (htmlBlock.title) {
      const h = document.createElement("h2");
      h.textContent = htmlBlock.title;
      block.appendChild(h);
    }
    const frame = document.createElement("iframe");
    frame.className = "ws-html-frame";
    frame.setAttribute("sandbox", "allow-scripts allow-same-origin");
    frame.setAttribute("title", htmlBlock.title || "Activity");
    block.appendChild(frame);
    host.appendChild(block);
    paintIframe(frame, html);
    watchHtmlEmbed(frame);
    return;
  } else if (slide.kind === "quiz") {
    const quiz = body.quizzes?.[slide.quizIndex];
    if (!quiz) return;
    block.className = "ws-block ws-slide ws-quiz";
    block.dataset.quizIndex = String(slide.quizIndex);
    const h = document.createElement("h2");
    h.textContent = quiz.question;
    block.appendChild(h);
    const list = document.createElement("div");
    list.className = "ws-quiz-choices";
    quiz.choices.forEach((choice, ci) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ws-quiz-choice";
      btn.textContent = choice;
      btn.dataset.choiceIndex = String(ci);
      if (onAnswer) {
        btn.addEventListener("click", () => onAnswer(slide.quizIndex, ci, block, btn));
      } else {
        btn.disabled = true;
      }
      list.appendChild(btn);
    });
    block.appendChild(list);
  } else if (slide.kind === "links") {
    const items = (body.links || [])
      .filter((link) => link?.url?.trim())
      .map((link) => {
        const label = link.label?.trim() || link.url;
        return `<li><a href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(label)}</a></li>`;
      })
      .join("");
    block.innerHTML = `<h2>Links</h2><ul>${items}</ul>`;
  }

  host.appendChild(block);
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
